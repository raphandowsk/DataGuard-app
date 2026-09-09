# Deploying DataGuard

DataGuard is a **static** Next.js app — every page renders in the browser and
talks to Supabase directly, so `next build` produces a folder of plain
HTML/JS (`out/`) that any static host can serve. **No Node server is needed**,
which is why GitHub Pages (and Hostinger static hosting) work.

**Current live URL:** https://mediumspringgreen-falcon-446430.hostingersite.com/
(Hostinger, served at the domain root — no `basePath` needed).

> These values are committed in `.env.production`, so **every `next build`
> inlines them automatically**. If you see "Supabase is not configured" on a
> deployed site, it was built before this file existed — rebuild and re-upload.

The connection values below are **public** (the publishable key is meant to be
exposed to the browser), so they are safe to keep in the build:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://udlrihnuwfwndbpmxqtq.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_PJ5CtduzMgaIIUDW9VE0hg_nG3fTEc9` |

---

## Option A — GitHub Pages + Hostinger domain (recommended, automated)

The repo already contains `.github/workflows/deploy.yml`, which builds the
export and publishes it on every push to `main`.

1. **Enable Pages**: GitHub repo → **Settings → Pages → Build and deployment →
   Source = GitHub Actions**.
2. **Push to `main`** (or run the workflow from the Actions tab). The build
   deploys to `https://raphandowsk.github.io/DataGuard-app/`.
   - ⚠️ On that bare project URL the app lives under `/DataGuard-app/`, which
     breaks absolute asset paths. **Use a custom domain (step 3)** so the site
     is served at the domain root — that is the intended setup and needs no
     code change. (If you ever must use the bare URL, set
     `basePath: "/DataGuard-app"` and `assetPrefix` in `next.config.mjs`.)
3. **Point your Hostinger domain at Pages**:
   - In GitHub: **Settings → Pages → Custom domain** → enter your domain
     (e.g. `app.yourorg.co.tz`) and Save. Keep **Enforce HTTPS** on.
   - In Hostinger **hPanel → Domains → DNS / Nameservers (Zone editor)**:
     - **Subdomain** (e.g. `app.yourorg.co.tz`): add a `CNAME` record →
       `raphandowsk.github.io`.
     - **Apex/root** (e.g. `yourorg.co.tz`): add four `A` records to
       `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
       `185.199.111.153`, and (optionally) a `CNAME` for `www` →
       `raphandowsk.github.io`.
   - DNS can take up to a few hours; GitHub then issues the HTTPS certificate.

## Option B — Upload the build to Hostinger directly

If you'd rather host the files on Hostinger itself:

1. Build locally with the env values set:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://udlrihnuwfwndbpmxqtq.supabase.co \
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_PJ5CtduzMgaIIUDW9VE0hg_nG3fTEc9 \
   npm run build
   ```
   (On Windows PowerShell set them with `$env:NEXT_PUBLIC_SUPABASE_URL="…"` first.)
2. Upload the **contents of `out/`** into `public_html` via **hPanel → File
   Manager** (or the Hostinger Git deploy feature pointed at this repo, with a
   build step running `npm ci && npm run build` and publishing `out/`).
3. Serve at the domain root. Hostinger's Apache already serves
   `folder/index.html` for `/folder/`, which matches the `trailingSlash` export.

---

## Supabase configuration (required for both options)

Do these in the Supabase dashboard for project **udlrihnuwfwndbpmxqtq**. For the
current deployment the URL is
`https://mediumspringgreen-falcon-446430.hostingersite.com` (swap in your own
custom domain later).

1. **Authentication → URL Configuration**
   - **Site URL**: `https://mediumspringgreen-falcon-446430.hostingersite.com`
   - **Redirect URLs** — add:
     `https://mediumspringgreen-falcon-446430.hostingersite.com/**` and, for
     local dev, `http://localhost:3000/**`.
   Without this, sign-up confirmation links and post-login redirects fail.
2. **Sign-up email** — the app has email confirmation **on**. Choose one:
   - **Real emails**: **Authentication → Emails / SMTP** → configure a custom
     SMTP provider (Hostinger email, Resend, SendGrid, etc.). Supabase's
     built-in sender is rate-limited and for testing only.
   - **Instant demo signup**: **Authentication → Providers → Email** → turn
     **Confirm email** off, so new accounts sign in immediately.
3. **Authentication → Policies** → enable **Leaked password protection**
   (the one outstanding security advisor).

---

## Notes

- **Env vars are inlined at build time** for a static export, so the build must
  run with them set (the workflow does this; for manual builds see Option B).
- The `demo@dataguard.app` account works without SMTP for showcasing.
- Database schema/RLS lives in `db/supabase/*.sql`; it is already applied to the
  live project. New environments would replay those migrations.
