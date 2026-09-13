# DataGuard — Self-Hosting Guide (Model B: On-Premise)

**Audience:** the client's IT / infrastructure team, plus the DataGuard
deployment engineer.
**Scope:** running DataGuard entirely on the client's own infrastructure —
**self-hosted Supabase** for the backend and the **static frontend** on the
client's own web server. Nothing leaves the client's environment, which is the
point of this model (data residency for Tanzania PDPA, full control, optional
air-gap).

> For the managed/cloud path (vendor-hosted Supabase, static files on a shared
> host), see [`DEPLOYMENT.md`](../DEPLOYMENT.md) instead. This document is the
> on-premise path only.

---

## 1. Architecture

DataGuard has exactly two components:

```
        Client network (on-premise)
  ┌───────────────────────────────────────────────┐
  │                                                │
  │  Users' browsers                               │
  │        │                                       │
  │        │ HTTPS (static assets)                 │
  │        ▼                                       │
  │  ┌───────────────┐    HTTPS (REST + Auth)      │
  │  │ Web server    │        │                    │
  │  │ (Nginx/Apache │        ▼                    │
  │  │  /IIS)        │   ┌──────────────────────┐  │
  │  │ serves out/   │   │ Self-hosted Supabase │  │
  │  └───────────────┘   │  (Docker Compose):   │  │
  │                      │  Postgres, GoTrue,   │  │
  │                      │  PostgREST, Kong,    │  │
  │                      │  Studio, Storage     │  │
  │                      └──────────────────────┘  │
  │                              │                  │
  │                              ▼                  │
  │                        SMTP relay (auth email)  │
  └───────────────────────────────────────────────┘
```

- **Frontend** — a *static* Next.js export (`output: "export"`): plain
  HTML/JS/CSS. No Node.js runtime in production. The browser talks **directly**
  to Supabase, so the Supabase API URL must be reachable from every user's
  browser and its key is **baked into the build** (`NEXT_PUBLIC_*`).
- **Backend** — Postgres + Auth + Row-Level Security + a few SECURITY DEFINER
  RPCs, all provided by the Supabase Docker stack.

**Key implication:** because both the app URL and the Supabase API URL are used
by browsers, both need DNS that client machines can resolve and valid TLS
certificates (public CA or the client's internal CA installed on client
machines).

---

## 2. Client prerequisites (what the client must provide)

### 2.1 Backend host (Supabase)
| Item | Minimum | Recommended |
|---|---|---|
| OS | Linux (Ubuntu 22.04 LTS or similar) | same |
| CPU / RAM | 4 vCPU / 8 GB | 8 vCPU / 16 GB |
| Disk | 50 GB SSD | 100 GB+ SSD, separate volume for DB + backups |
| Software | Docker Engine + Docker Compose v2, `git` | same |
| Network | Reachable by client browsers on 443 | behind reverse proxy / WAF |

### 2.2 Frontend host (web server)
- Any static web server — **Nginx**, Apache, or IIS — serving files at the
  **domain root** over **HTTPS**. Very low spec (can co-locate with the backend
  host or a small VM). Serving at root matters: assets are referenced as
  `/_next/...`.

### 2.3 Supporting services
- **DNS**: two names resolvable by client users, e.g.
  `app.client.co.tz` (frontend) and `supabase.client.co.tz` (API).
- **TLS certificates** for both names (Let's Encrypt if internet-facing, or the
  client's internal CA — in which case the CA root must be trusted on client
  machines).
- **SMTP relay** for auth email (sign-up confirmation, password reset, member
  invites). Can be the client's internal mail server. *Without SMTP, only
  pre-provisioned accounts can sign in.*

### 2.4 Responsibility matrix
| Task | Client | DataGuard engineer |
|---|---|---|
| Provision servers, OS, Docker | ✅ | |
| DNS + TLS certificates | ✅ | |
| SMTP relay | ✅ | |
| Stand up Supabase stack + secrets | ✅ (with guidance) | ✅ |
| Apply DB schema + seed PDPA matrix | | ✅ |
| Configure Auth (URLs, SMTP, policy) | | ✅ |
| Build + deploy static frontend | | ✅ |
| Provision first admin & organisation | | ✅ |
| Backups, monitoring, patching (ongoing) | ✅ | (runbook provided) |

---

## 3. Part 1 — Stand up self-hosted Supabase

Follow the official guide (https://supabase.com/docs/guides/self-hosting/docker)
as the source of truth; the essentials:

```bash
git clone --depth 1 https://github.com/supabase/supabase
cd supabase/docker
cp .env.example .env
```

Then, **before** `docker compose up`, harden `.env` — this is the single most
important security step:

- `POSTGRES_PASSWORD` — strong, unique.
- `JWT_SECRET` — 40+ random chars. **Regenerate `ANON_KEY` and
  `SERVICE_ROLE_KEY`** from this secret (the Supabase docs link a generator);
  never keep the example keys.
- `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD` — for Studio.
- `SITE_URL` = `https://app.client.co.tz` (the frontend URL).
- `API_EXTERNAL_URL` / `SUPABASE_PUBLIC_URL` = `https://supabase.client.co.tz`.
- SMTP settings (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
  `SMTP_SENDER_NAME`, `SMTP_ADMIN_EMAIL`).

Bring it up:

```bash
docker compose up -d
docker compose ps        # all services healthy
```

Put a **reverse proxy with TLS** (Nginx/Traefik/Caddy) in front of Kong (the
API gateway, default port 8000) so the API is served as
`https://supabase.client.co.tz`. **Do not expose Studio (port 3000) publicly** —
bind it to localhost or the admin VLAN only.

> Note the client's instance will mint **its own** `anon`/publishable key and
> `service_role` key. Record the **anon/publishable** key — the frontend build
> needs it. The `service_role` key is secret and used only for admin/seeding;
> it must never reach the browser build.

---

## 4. Part 2 — Apply the database schema and seed the PDPA matrix

All SQL lives in [`db/supabase/`](../db/supabase/). Apply the migrations **in
order**, then the framework seed. Use `psql` against the stack's Postgres (or the
Studio SQL editor). Example with `psql`:

```bash
# From the DataGuard repo root, on a host that can reach Postgres.
# Migrations 001–008, in numeric order:
for f in db/supabase/00*_*.sql; do
  echo "Applying $f"
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$f"
done

# Seed the Tanzania PDPA 2022 matrix (idempotent upserts, bypasses RLS via
# the privileged connection): 1 framework, 1 version, 10 parts, 66 sections,
# 96 requirements, 123 controls.
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/supabase/seed-framework.sql
```

`DATABASE_URL` is the superuser/`postgres` connection string for the stack's
database. See [`db/supabase/README.md`](../db/supabase/README.md) for what each
migration contains.

**Verify:**
```sql
select
  (select count(*) from framework_controls)     as controls,      -- expect 123
  (select count(*) from framework_requirements) as requirements;  -- expect 96
```

The framework tables carry **no personal data** — they are the reference matrix.
All tenant data tables ship with RLS enabled and member-scoped policies from the
migrations.

---

## 5. Part 3 — Configure Auth

In Studio → Authentication (or the stack `.env`):

1. **URL configuration**
   - **Site URL**: `https://app.client.co.tz`
   - **Redirect URLs**: `https://app.client.co.tz/**`
2. **Email** — confirm SMTP is wired and sends. Decide:
   - **Confirm email ON** (recommended for production) — new users must verify.
   - or OFF for a closed pilot where accounts are provisioned centrally.
3. **Password security**
   - **Enable leaked-password protection** (HaveIBeenPwned check).
   - Set a minimum length / strength policy.
   - Consider enabling **MFA** for a compliance tool.

---

## 6. Part 4 — Build and deploy the frontend

The build inlines the client's Supabase URL + anon key at **build time**, so it
must run with **their** values (not the vendor defaults committed in
`.env.production`).

```bash
# On a build machine with Node 22 and the repo checked out:
npm ci

# Provide the CLIENT's values (override the committed .env.production):
export NEXT_PUBLIC_SUPABASE_URL="https://supabase.client.co.tz"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="<client anon/publishable key>"

npm run build          # produces ./out (static site)
```

Copy the **contents of `out/`** to the web server's document root and serve at
`/`. Example **Nginx** server block (static export uses `trailingSlash`, so
directories resolve to `index.html`):

```nginx
server {
  listen 443 ssl http2;
  server_name app.client.co.tz;

  ssl_certificate     /etc/ssl/app.client.co.tz.crt;
  ssl_certificate_key /etc/ssl/app.client.co.tz.key;

  root /var/www/dataguard;   # contents of out/
  index index.html;

  # trailingSlash export: /foo/ -> /foo/index.html
  location / {
    try_files $uri $uri/index.html =404;
  }

  # hashed assets are immutable — cache hard
  location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # Security headers
  add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-Frame-Options "DENY" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  # CSP must allow the Supabase API origin for connect-src:
  add_header Content-Security-Policy
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self' https://supabase.client.co.tz; frame-ancestors 'none'" always;
}
```

Redirect port 80 → 443. If serving over an internal CA, ensure the CA root is
trusted on client machines or the browser will block the app **and** its
Supabase calls.

---

## 7. Part 5 — Provision the first admin and organisation

The app self-provisions an organisation on first sign-in via the `provision_org`
RPC (the "Create your workspace" flow). To bootstrap:

1. Create the first user (Studio → Authentication → Users, or self sign-up if
   confirmation is configured).
2. Sign in to the app → complete **Create your workspace** → the org is created
   with that user as owner/DPO.
3. Invite further members from **Settings** (uses `org_invitations`; requires
   SMTP for invite emails).

---

## 8. Security hardening checklist (pre-go-live)

- [ ] Regenerated `JWT_SECRET`, `ANON_KEY`, `SERVICE_ROLE_KEY`; strong
      `POSTGRES_PASSWORD` and Studio credentials.
- [ ] **Studio not publicly exposed** (localhost/admin VLAN only).
- [ ] TLS on both `app.` and `supabase.` names; HTTP→HTTPS redirect; HSTS.
- [ ] Security headers + CSP applied (see Nginx block).
- [ ] **Leaked-password protection ON**; password policy set; MFA considered.
- [ ] RLS enabled on all tenant tables (shipped enabled by the migrations —
      confirm with the Supabase security advisor / linter after applying).
- [ ] The 3 SECURITY DEFINER RPCs (`provision_org`, `list_org_members`,
      `delete_org`) reviewed — each enforces its own membership/DPO check
      internally by design; confirm during acceptance.
- [ ] `service_role` key stored only in the admin/CI environment, **never** in
      the frontend build or `.env.production`.
- [ ] Firewall: Postgres (5432) not reachable from user network; only Kong/443
      exposed.

---

## 9. Backups & disaster recovery (client-operated)

- **Database**: nightly `pg_dump` (or continuous WAL archiving / PITR) of the
  Postgres volume to storage **inside the client's environment**. Test a restore.
- **Config**: keep the Supabase `docker/.env` and TLS material in the client's
  secret store — losing `JWT_SECRET` invalidates all issued tokens.
- **Frontend**: reproducible from the repo (`npm run build`); no state to back up.
- Document RPO/RTO with the client.

---

## 10. Updates & patching (runbook)

When the app or the PDPA matrix changes:

1. Pull the new repo revision on the build machine.
2. **DB changes**: apply any new `db/supabase/0NN_*.sql` migrations in order;
   re-run `seed-framework.sql` if the matrix changed (idempotent — safe to
   re-run).
3. **Frontend**: `npm ci && npm run build` with the client's env; deploy `out/`.
   Assets are content-hashed, so cached clients pick up the new build.
4. Re-run the Supabase security/performance advisors after any DDL change.
5. Keep the Supabase Docker images patched (`docker compose pull && up -d`).

---

## 11. Acceptance smoke test

- [ ] `app.client.co.tz` loads fully styled at the root (no `/_next` 404s).
- [ ] Framework counts show 123 controls / 96 requirements.
- [ ] New user can sign up, receive the confirmation email, and sign in.
- [ ] Two separate orgs cannot see each other's data (RLS isolation).
- [ ] Create/edit/remove a record in a module persists across reload.
- [ ] A report (e.g. Executive) previews and exports (PDF/CSV).
- [ ] Audit log records the writes.

---

## 12. Appendix

### Build-time environment variables (frontend)
| Variable | Meaning | Secret? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Client's Supabase API URL (`https://supabase.client.co.tz`) | No (public) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client instance's anon/publishable key | No (public, RLS-guarded) |

> `SUPABASE_SERVICE_ROLE_KEY` is **backend/admin only** — used for seeding and
> administration, never included in the frontend build.

### Default ports (self-hosted Supabase)
| Service | Port | Exposure |
|---|---|---|
| Kong (API gateway) | 8000 → 443 via proxy | public (client network) |
| Studio | 3000 | **internal only** |
| Postgres | 5432 | **internal only** |

### Migration order
`001_schema` → `002_multitenant` → `003_operational_registers` →
`004_incidents_transfers` → `005_auth_provisioning` →
`006_operational_member_writes` → `007_settings_admin` → `008_audit_logging`,
then `seed-framework.sql`.
