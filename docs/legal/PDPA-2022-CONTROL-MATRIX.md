# Tanzania Personal Data Protection Act 2022 - Control Matrix

> **GENERATED FILE.** Produced by `scripts/generate-pdpa-artifacts.mjs` from
> `scripts/pdpa-2022.source.mjs`. Do not edit by hand - edit the source and regenerate.

| | |
| --- | --- |
| Framework | Personal Data Protection Act (TZ-PDPA) |
| Jurisdiction | Tanzania |
| Framework version | 2022 |
| Act | Act No. 11 of 2022, Chapter 44 |
| Source text | GN. No. 395B published on 13/6/2023 (English version), Special Supplement No. 21 to Special Gazette No. 15 Vol. 104 |
| Commencement | 2023-05-01 (GN. No. 326 of 2023) |
| Matrix version | 1.0.0 (2026-09-03) |
| Controls | 123 |
| Requirements | 96 |

## Legal disclaimer

> This control matrix is a product implementation mapping of the Tanzania Personal Data Protection Act, 2022. It is intended to support compliance management and does not constitute legal advice, legal certification, or an authoritative interpretation of Tanzanian law.

> The English version is a translation published pursuant to section 84(4) of the Interpretation of Laws Act, Cap. 1.

## How to read this matrix

Each control records the exact provision it comes from and how far it is removed from the
statutory text. The `source_type` field is the key to that distinction:

| `source_type` | Meaning |
| --- | --- |
| `ACT_EXPLICIT` | The requirement is directly stated in the Act. |
| `ACT_DERIVED` | The control follows directly from one or more explicit provisions read together, and adds no new legal obligation. |
| `INTERPRETATION` | A practical interpretation was necessary. The Act does not settle the point. |
| `IMPLEMENTATION_GUIDANCE` | Advice on how to demonstrate or implement a requirement. Not itself a statutory requirement. |

Two further fields carry legal weight and must not be conflated with each other:

- **`evidence_required`** - `REQUIRED_BY_ACT` means the Act itself calls for the document or record
  (for example the certificate of registration under section 14(4)). `RECOMMENDED_BY_DATAGUARD`
  means DataGuard suggests it as proof; it is **not** a statutory requirement.
- **`default_risk_level`** - a DataGuard product risk recommendation. It is **not** a statutory
  classification and does not correspond to any penalty in the Act. Penalties, where the Act attaches
  one to the specific provision, are stated in the control `notes` field and nowhere else.

`regulatory_status: REGULATORY_DETAIL_PENDING` marks a control whose operational detail the Act
leaves to regulations that must be checked before the control can be fully specified.

Open legal questions are recorded inline as `OPEN_QUESTION` in the `notes` field and collected in
[PDPA-2022-ASSUMPTIONS.md](PDPA-2022-ASSUMPTIONS.md).

## Summary

| Dimension | Breakdown |
| --- | --- |
| Source type | ACT_DERIVED: 14 · ACT_EXPLICIT: 105 · INTERPRETATION: 3 · IMPLEMENTATION_GUIDANCE: 1 |
| Applicability | UNIVERSAL: 81 · CONDITIONAL: 39 · ROLE_SPECIFIC: 3 |
| Default risk level | CRITICAL: 23 · HIGH: 62 · MEDIUM: 32 · LOW: 6 |
| Regulatory detail pending | 21 |
| Evidence required by the Act | 39 |

## Control index

| Control ID | Legal reference | Title | Source | Applicability | Risk |
| --- | --- | --- | --- | --- | --- |
| `PDPA-002-001` | Section 2 | Territorial scope determination | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-005-001` | Section 5(a) | Lawful, fair and transparent processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-005-002` | Section 5(b) | Purpose specification and limitation | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-005-003` | Section 5(c) | Data minimisation | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-005-004` | Section 5(d) | Accuracy and prompt rectification | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-005-005` | Section 5(e) | Storage limitation | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-005-006` | Section 5(f) | Processing consistent with data subject rights | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-005-007` | Section 5(g) | Security principle - technical and organisational measures | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-005-008` | Section 5(h) | No transfer abroad contrary to the Act | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-014-001` | Section 14(1) | Registration held before any collection or processing | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-014-002` | Section 14(2) | Registration application submitted before intended processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-014-003` | Section 14(4) | Certificate of registration retained and retrievable | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-015-001` | Section 15(3) | Registered particulars kept current | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-015-002` | Sections 15(2) and 17 | Awareness that registered particulars are publicly inspectable | INTERPRETATION | UNIVERSAL | LOW |
| `PDPA-016-001` | Section 16(1) | Registration expiry tracked | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-016-002` | Section 16(2) | Renewal submitted within the three month window | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-018-001` | Section 18 | Response to deregistration by the Commission | INTERPRETATION | UNIVERSAL | MEDIUM |
| `PDPA-019-001` | Section 19 | Accuracy of information given at registration and renewal | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-020-001` | Section 20 | Awareness of the registration appeal route | ACT_EXPLICIT | UNIVERSAL | LOW |
| `PDPA-021-001` | Section 21 | Public institution deemed registration and full compliance | ACT_EXPLICIT | ROLE_SPECIFIC | MEDIUM |
| `PDPA-022-001` | Section 22(1)(a)-(c) | Part IV scope assessment including manual records and non-domiciled processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-022-002` | Section 22(2)(a) | Collection tied to a lawful purpose related to a function of the controller | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-022-003` | Section 22(2)(b) | Necessity test applied at the point of collection | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-022-004` | Section 22(3) | No collection by unlawful means | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-023-001` | Section 23(1) | Collection directly from the data subject | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-023-002` | Section 23(2)(a)-(c) | Pre-collection notice - purposes, authorised purposes and intended recipients | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-023-003` | Section 23(3)(a)-(e) | Documented reliance on exceptions to direct collection | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-024-001` | Section 24 | Reasonable steps to verify data before use | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-025-001` | Section 25(1) | Use confined to the intended purpose | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-025-002` | Section 25(2)(a)-(f) | Secondary use limited to a recorded section 25(2) ground | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-026-001` | Section 26 | Disclosure restricted to the section 25 circumstances | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-001` | Section 27(1) | Reasonable security safeguards programme | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-002` | Section 27(1) | Protection against negligent loss | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-003` | Section 27(1) | Protection against unauthorised destruction | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-004` | Section 27(1) | Protection against unauthorised alteration | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-027-005` | Section 27(1) | Protection against unauthorised access | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-006` | Section 27(1) | Protection against unauthorised processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-027-007` | Section 27(2)(a) | State of technological advancement considered | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-027-008` | Section 27(2)(a) | Cost of implementation considered | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-027-009` | Section 27(2)(b) | Nature of the personal data considered | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-027-010` | Section 27(2)(b) | Potential risks to the data subject considered | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-027-011` | Section 27(3) | Data protection officer appointed | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-012` | Section 27(3) | Data protection officer verifies control and security measures | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-027-013` | Section 27(4) | Written contract in place with every data processor | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-027-014` | Section 27(4) | Contract requires the processor to act on controller instructions | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-027-015` | Section 27(4) | Processor contractually responsible for security standards | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-027-016` | Section 27(5) | Security breach notification to the Commission without undue delay | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-027-017` | Section 27(5) | Breach detection capability | ACT_DERIVED | UNIVERSAL | HIGH |
| `PDPA-028-001` | Section 28(1) | Retention periods sourced from law or regulations | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-028-002` | Section 28(1) | Retention supports the data subject opportunity to access | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-028-003` | Section 28(1) read with section 5(e) | Purpose-based retention decisions documented | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-028-004` | Section 28(2) read with section 64(2)(j) | Secure disposal at the end of the retention period | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-028-005` | Section 28 read with section 64(2)(j) | Periodic review of the retention schedule | IMPLEMENTATION_GUIDANCE | UNIVERSAL | LOW |
| `PDPA-028-006` | Section 28(1) | Identification of applicable sectoral retention laws | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-029-001` | Section 29(1) | Correction request procedure | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-029-002` | Section 29(2) | Pre-amendment record preserved on correction | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-029-003` | Section 29(3) | Refusal of a correction request with reasons given | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-030-001` | Section 30(1) read with the definition of sensitive personal data in section 3 | Identification of sensitive personal data holdings | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-030-002` | Section 30(1) | Prior written consent obtained for sensitive personal data | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-030-003` | Section 30(2) | Consent withdrawal at any time, free of charge and without explanation | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-030-004` | Section 30(4) | Consent obtained from the authorised representative where the data subject cannot consent | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-030-005` | Section 30(5)(a)-(f) | Documented reliance on the sensitive data consent exceptions | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-030-006` | Section 30(5)(e) | Scientific research exception conditional on Commission guidelines | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-030-007` | Section 30(5)(f) | Medical processing supervised by a health professional | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-030-008` | Section 30(3) | Monitoring of absolute prohibitions on sensitive data processing | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-030-009` | Section 30 read with section 27(2)(b) | Enhanced security and access restriction for sensitive personal data | ACT_DERIVED | CONDITIONAL | CRITICAL |
| `PDPA-030-010` | Section 30 read with section 27(3) | Documentation of sensitive personal data processing | INTERPRETATION | CONDITIONAL | HIGH |
| `PDPA-031-001` | Sections 31 and 32 read with section 5(h) | Identification and inventory of international transfers | ACT_DERIVED | CONDITIONAL | HIGH |
| `PDPA-031-002` | Section 31(2) | Destination country legal framework assessed | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-031-003` | Section 31(2)(a)-(b) | Recipient establishes the statutory ground for the transfer | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-031-004` | Section 31(3) | Controller provisional evaluation of transfer necessity | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-031-005` | Section 31(4) | Recipient maintains verifiable evidence of necessity | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-031-006` | Section 31(5) | Recipient processing limited to the transfer purpose | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-031-007` | Section 31(1) | Compliance with Commission transfer prohibitions | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-032-001` | Section 32(1) | Transfer solely to permit processing authorised to the controller | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-032-002` | Section 32(2)(a)-(f) | Adequacy assessment against the six statutory factors | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-032-003` | Section 32(3) read with section 64(2)(k) | Monitoring of prohibited transfer categories set by regulations | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-032-004` | Section 32(4)(a)-(f) | Documented reliance on a section 32(4) transfer derogation | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-032-005` | Section 32(5) | Commission authorisation on the basis of adequate safeguards | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-033-001` | Section 33(1)(a) | Right of access - confirmation of processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-033-002` | Section 33(1)(b)(i)-(iii) | Right of access - description of data, purposes and recipients | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-033-003` | Section 33(1)(c) | Disclosure of the logic involved in automated decision making | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-033-004` | Section 33(2)(a)-(c) | Documented reliance on access exceptions | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-034-001` | Section 34(1) | Right to prevent processing likely to cause substantial damage | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-035-001` | Section 35(1) and 35(3) | Right to stop direct marketing | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-035-002` | Section 35(2) | Agreements for use of personal data for pecuniary benefit | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-036-001` | Section 36(1) | Right to require human involvement in significant decisions | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-036-002` | Section 36(2)(a) | Proactive notification of solely automated decisions | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-036-003` | Section 36(2)(b) | Reconsideration of a solely automated decision on request | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-036-004` | Section 36(3)(a)-(c) | Documented reliance on automated decision exceptions | ACT_EXPLICIT | CONDITIONAL | MEDIUM |
| `PDPA-037-001` | Sections 37(1) and 37(2) | Handling of compensation claims from data subjects | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-037-002` | Section 37(3) | Capability to execute a Commission rectification, blocking, erasure or destruction order | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-037-003` | Sections 37(4) and 37(5) | Ability to notify third party recipients following a Commission order | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-038-001` | Sections 38(1) and 38(2) | Compliance with a Commission order on inaccurate personal data | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-038-002` | Section 38(3) | Compliance with a Commission direction to correct personal data | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-038-003` | Section 38(4) | Notification of third parties after action under section 38 | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-039-001` | Section 39(1) and 39(3) | Internal complaint handling and readiness for Commission complaints | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-040-001` | Section 40 | Handling of a notice of investigation | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-042-001` | Section 42(1)(a)-(e) and 42(2) | Cooperation with Commission investigation powers | ACT_DERIVED | UNIVERSAL | HIGH |
| `PDPA-042-002` | Section 42(3) | No personal data withheld from the Commission | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-043-001` | Section 43(a)-(d) | Non-obstruction of the Commission | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-045-001` | Sections 45(1) and 45(2) | Compliance with an enforcement notice within the specified period | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-046-001` | Section 46(2)(a)-(k) | Readiness to evidence the section 46(2) mitigating factors | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-047-001` | Section 47 | Reference record - statutory ceiling on administrative fines | ACT_EXPLICIT | UNIVERSAL | LOW |
| `PDPA-048-001` | Section 48 | Use of the review of decision route | ACT_EXPLICIT | UNIVERSAL | LOW |
| `PDPA-049-001` | Section 49 | Awareness and preparedness for appeal to the High Court | ACT_EXPLICIT | UNIVERSAL | LOW |
| `PDPA-050-001` | Section 50(1) | Compliance with a Commission compensation order | ACT_EXPLICIT | UNIVERSAL | MEDIUM |
| `PDPA-050-002` | Sections 50(2)(b) and 50(3) | Processor compliance with controller lawful instructions | ACT_EXPLICIT | ROLE_SPECIFIC | HIGH |
| `PDPA-058-001` | Section 58(2)(a)-(g) and 58(3) | Documented reliance on the section 58 exemptions | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-058-002` | Section 58(1) | Principles and security duties continue to apply to exempt processing | ACT_EXPLICIT | CONDITIONAL | HIGH |
| `PDPA-059-001` | Section 59 | Compliance with a court preservation order | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-060-001` | Section 60(1) | Prevention of disclosure incompatible with the collection purpose | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-060-002` | Section 60(2) | Processor discloses only with prior controller authority | ACT_EXPLICIT | ROLE_SPECIFIC | CRITICAL |
| `PDPA-060-003` | Section 60(3)(a)-(b) | No obtaining or onward disclosure of personal data without authority | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-060-004` | Sections 60(4) and 60(5) | No offering of unlawfully obtained personal data for sale | ACT_EXPLICIT | CONDITIONAL | CRITICAL |
| `PDPA-061-001` | Section 61 | Prevention of unlawful destruction, deletion, concealment or alteration | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-062-001` | Section 62 | Officer accountability and board oversight of data protection | ACT_DERIVED | UNIVERSAL | HIGH |
| `PDPA-064-001` | Section 64(1)-(2) | Monitoring of regulations made under the Act | ACT_DERIVED | UNIVERSAL | MEDIUM |
| `PDPA-065-001` | Section 65(1) | Code of ethics or personal data protection policy exists | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-065-002` | Section 65(1) | Scope of the code covers ethics and conduct in collection and processing | ACT_EXPLICIT | UNIVERSAL | HIGH |
| `PDPA-065-003` | Section 65(1) | Approval and adoption of the code of ethics | ACT_DERIVED | UNIVERSAL | HIGH |
| `PDPA-065-004` | Section 65(2) | Code of ethics submitted to the Commission for approval | ACT_EXPLICIT | UNIVERSAL | CRITICAL |
| `PDPA-065-005` | Section 65(3) | Engagement with Commission consideration and required amendments | ACT_EXPLICIT | UNIVERSAL | MEDIUM |


---

## Part I - Preliminary Provisions

### Section 2 - Application

#### `PDPA-002-001` Territorial scope determination

**Legal basis:** Section 2  
**Requirement:** `REQ-002-1` - Territorial application  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** The Act applies to Mainland Tanzania and to Tanzania Zanzibar, save that in Tanzania Zanzibar it does not apply to non-union matters.

**Control.** The organisation has determined which of its operations fall within the territorial scope of the Act, including whether any Zanzibar operations concern non-union matters.

**Assessment question.** Have you worked out which parts of your organisation and which activities the Tanzania Personal Data Protection Act applies to?

**Why this matters.** Knowing exactly where the Act applies decides which of your teams, systems and records have to follow it. Getting this wrong at the start makes every later answer unreliable.

**Expected state.** A documented scoping statement listing in-scope entities, locations and processing activities, reviewed at least annually.

**Implementation guidance.** Record the entities, branches and processing activities in scope. Note separately any activity carried out in Zanzibar that you consider a non-union matter, and the basis for that view. Whether a matter is a union matter is a constitutional question - take advice rather than deciding it informally.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Scoping Statement`, `Data Processing Register`, `Group Structure Chart` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. An incorrect scope assessment silently invalidates the rest of the assessment, but it is a foundational rather than an operational failure.

**Remediation.** Run a scoping workshop with legal, IT and business owners. Produce a written scope statement and have it approved by the accountable executive.

**Suggested task.** Document the territorial and organisational scope of PDPA applicability _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 2 states the territorial reach of the Act. The obligation to document a scoping exercise is DataGuard implementation practice, not a statutory requirement, and adds no new legal obligation.

### Section 5 - Principles of personal data protection

#### `PDPA-005-001` Lawful, fair and transparent processing

**Legal basis:** Section 5(a) (paragraph (a))  
**Requirement:** `REQ-005-A` - Lawful, fair and transparent processing  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be processed lawfully, fairly and transparently.

**Control.** All processing of personal data is carried out on a lawful footing, is fair to the individuals concerned, and is explained to them openly.

**Assessment question.** Is every use you make of personal data lawful, fair to the people concerned, and openly explained to them?

**Why this matters.** This is the headline principle of the Act. If people are surprised or misled about what happens to their data, the processing is not fair or transparent even if nothing else has gone wrong.

**Expected state.** A current processing record and a published privacy notice that accurately describe all processing activities.

**Implementation guidance.** Maintain a record of each processing activity with the lawful basis relied on, and a plain-language privacy notice that matches what actually happens. Check that the notice and the record agree.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Privacy Policy`, `Privacy Notice`, `Data Processing Register`, `Data Protection Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `LAWFULNESS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Section 5 principles apply to every processing activity and are the benchmark against which complaints under section 39 are assessed.

**Remediation.** Build or refresh the processing register, assign a lawful basis to each activity, then rewrite the privacy notice so it matches.

**Suggested task.** Establish a processing register with a documented lawful basis for each activity _(priority: HIGH)_

**Notes.** The Act states the principle but does not set out an exhaustive list of lawful bases. Lawfulness is assessed against the Act as a whole and against other written laws.

#### `PDPA-005-002` Purpose specification and limitation

**Legal basis:** Section 5(b) (paragraph (b))  
**Requirement:** `REQ-005-B` - Purpose specification and limitation  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be collected for explicit, specified and legitimate purposes and not further processed in a manner incompatible with those purposes.

**Control.** Each collection of personal data has a stated, specific and legitimate purpose recorded in advance, and later uses are checked against that purpose.

**Assessment question.** For each set of personal data you collect, have you written down exactly why you collect it, and do you keep uses within that reason?

**Why this matters.** Purpose is the anchor for almost every other duty in the Act - how long you keep data, who you may share it with, and whether a new use is allowed.

**Expected state.** Every processing activity in the register has an explicit purpose, and a documented route exists for approving new uses.

**Implementation guidance.** Record a specific purpose statement per processing activity. Avoid catch-all wording such as business purposes. Route any proposed new use through a compatibility check before it starts.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Privacy Notice`, `Purpose Compatibility Assessment` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `PURPOSE_LIMITATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Purpose creep is the most common cause of downstream breaches of sections 25 and 26.

**Remediation.** Document a purpose for each activity in the register and introduce a change-of-purpose approval step.

**Suggested task.** Record an explicit purpose for every processing activity _(priority: HIGH)_

#### `PDPA-005-003` Data minimisation

**Legal basis:** Section 5(c) (paragraph (c))  
**Requirement:** `REQ-005-C` - Data minimisation  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed.

**Control.** The organisation collects and retains only the personal data fields that are necessary for the stated purpose.

**Assessment question.** Do you collect only the personal information you actually need for the purpose, and no more?

**Why this matters.** Every extra field you hold is extra risk if something goes wrong, and it is harder to justify to the Commission or to the person concerned.

**Expected state.** A documented field-level review per collection point, with unnecessary fields removed.

**Implementation guidance.** Review forms, application screens and data feeds field by field against the recorded purpose. Remove or stop collecting fields that no longer earn their place.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Minimisation Review`, `Data Processing Register`, `Form and Screen Inventory` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_MINIMISATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Over-collection is a standing breach of section 5(c) and increases the impact of any incident, but it rarely causes immediate harm on its own.

**Remediation.** Run a field-level review of the highest-volume collection points first, then work down.

**Suggested task.** Review collection forms and remove unnecessary personal data fields _(priority: MEDIUM)_

#### `PDPA-005-004` Accuracy and prompt rectification

**Legal basis:** Section 5(d) (paragraph (d))  
**Requirement:** `REQ-005-D` - Accuracy  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be accurate and where necessary kept up to date, with every reasonable step taken to ensure that any inaccurate personal data is erased or rectified without delay.

**Control.** The organisation keeps personal data accurate and up to date, and corrects or erases inaccurate data without delay once identified.

**Assessment question.** Do you keep personal information accurate and up to date, and fix or delete wrong information promptly when you find it?

**Why this matters.** Decisions made on wrong information can cause real harm to people, and the Act requires you to act without delay once you know.

**Expected state.** A documented data quality and rectification process with a defined internal turnaround target and a log of corrections made.

**Implementation guidance.** Define how inaccuracies are reported and who fixes them, and set an internal turnaround target. The Act says without delay but does not fix a number of days, so any target you set is your own commitment.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Quality Procedure`, `Rectification Log`, `Data Subject Rights Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DATA_QUALITY` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Inaccuracy is directly actionable by the Commission under section 38 and can found a compensation claim under section 37.

**Remediation.** Create a rectification workflow with an owner, a target turnaround and an audit log. Link it to the section 29 correction process.

**Suggested task.** Implement a data accuracy and rectification workflow _(priority: MEDIUM)_

**Notes.** INTERPRETATION: any specific turnaround time an organisation sets is its own commitment. The Act says without delay and does not prescribe a period.

#### `PDPA-005-005` Storage limitation

**Legal basis:** Section 5(e) (paragraph (e))  
**Requirement:** `REQ-005-E` - Storage limitation  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Personal data shall be stored in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data is processed.

**Control.** Personal data is held in identifiable form only for as long as the purpose requires, after which it is disposed of or de-identified.

**Assessment question.** Do you stop keeping personal information in a form that identifies people once you no longer need it for the purpose?

**Why this matters.** Holding identifiable data indefinitely creates risk with no offsetting benefit, and it is one of the easiest failures for a regulator to spot.

**Expected state.** A retention schedule covering all record types, with a defined end-of-life action for each.

**Implementation guidance.** Read this together with section 28. Where a retention period is fixed by another written law or by regulations made under the Act, that period governs. Where it is not, justify the period against the purpose and record the reasoning.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Retention Schedule`, `Disposal Log`, `Data Processing Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Over-retention breaches section 5(e) and compounds the impact of any security incident.

**Remediation.** Build a retention schedule keyed to record type and purpose, then automate or diarise the disposal step.

**Suggested task.** Produce a retention schedule covering all personal data record types _(priority: MEDIUM)_

**Notes.** Section 28(2) empowers the Minister to prescribe retention and disposal by regulations. Do not assume a period that is not fixed by a relevant law or by those regulations.

#### `PDPA-005-006` Processing consistent with data subject rights

**Legal basis:** Section 5(f) (paragraph (f))  
**Requirement:** `REQ-005-F` - Processing in accordance with data subject rights  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be processed in accordance with the rights of a data subject.

**Control.** Processing operations are designed so that the rights in Part VI of the Act can actually be exercised and honoured.

**Assessment question.** Are your systems and processes set up so that people can actually exercise their rights over their data?

**Why this matters.** Rights that cannot be delivered in practice are a compliance failure even where nobody has yet complained.

**Expected state.** A rights-readiness assessment per system, with gaps tracked to closure.

**Implementation guidance.** Confirm that for each system holding personal data you can locate an individual record, describe the purposes and recipients, suspend processing, and rectify or erase where required.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Subject Rights Procedure`, `System Rights Readiness Assessment`, `Rights Request Log` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Inability to serve a right is directly visible to data subjects and is the usual trigger for a section 39 complaint.

**Remediation.** Assess each major system against the Part VI rights and remediate the systems that cannot support them.

**Suggested task.** Assess each system against the Part VI data subject rights _(priority: HIGH)_

#### `PDPA-005-007` Security principle - technical and organisational measures

**Legal basis:** Section 5(g) (paragraph (g))  
**Requirement:** `REQ-005-G` - Integrity and confidentiality  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against any loss, destruction or damage, using appropriate technical or organisational measures.

**Control.** A programme of technical and organisational security measures protects personal data across its lifecycle.

**Assessment question.** Do you have a set of technical and organisational security measures that protect personal data throughout its life?

**Why this matters.** This principle sits alongside the detailed duties in section 27, and it binds data processors directly as well as data controllers.

**Expected state.** An approved information security policy with an inventory of implemented technical and organisational measures.

**Implementation guidance.** Maintain a documented security programme and map each measure to the risk it addresses. The section 27 controls decompose this obligation further.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Security Policy`, `Information Security Programme`, `Risk Assessment`, `Access Control Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Security failures are the highest-impact and least reversible category of non-compliance, and section 5(g) binds processors directly, not only controllers.

**Remediation.** Stand up a documented security programme and align it to the specific section 27 duties.

**Suggested task.** Establish and document an information security programme for personal data _(priority: CRITICAL)_

**Notes.** Section 5 binds both the data controller and the data processor. Section 27(1) by its terms addresses the data controller and his representatives.

#### `PDPA-005-008` No transfer abroad contrary to the Act

**Legal basis:** Section 5(h) (paragraph (h))  
**Requirement:** `REQ-005-H` - No transfer abroad contrary to the Act  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall not be transferred abroad contrary to the provisions of this Act.

**Control.** Transfers of personal data outside Tanzania are only made on a basis permitted by Part V of the Act.

**Assessment question.** Do you make sure that personal data only leaves Tanzania on a basis the Act allows?

**Why this matters.** Cloud services, group companies and overseas suppliers move data across borders routinely, often without anyone noticing.

**Expected state.** A transfer inventory covering all cross-border flows with a recorded Part V basis for each.

**Implementation guidance.** Read with sections 31 and 32. Identify every route by which data leaves the country, including remote support access and offshore backups, then confirm the basis for each.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Does any personal data you hold leave Tanzania - including cloud hosting, offshore backups, group systems or remote support access? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Transfer Inventory`, `Transfer Assessment`, `Cloud Hosting Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Unrecognised transfers are common and each one is a standing breach until a Part V basis is established.

**Remediation.** Build the transfer inventory first, then assess each flow under section 31 or 32.

**Suggested task.** Build an inventory of all cross-border personal data transfers _(priority: HIGH)_


---

## Part III - Registration of Data Controllers and Data Processors

### Section 14 - Registration of data controllers and data processors

#### `PDPA-014-001` Registration held before any collection or processing

**Legal basis:** Section 14(1) (subsection 14(1))  
**Requirement:** `REQ-014-1` - Registration before collecting or processing  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person shall not collect or process personal data without being registered as a data controller or a data processor under this Act.

**Control.** The organisation holds a current registration as a data controller or data processor covering all of its collection and processing of personal data.

**Assessment question.** Is your organisation registered with the Personal Data Protection Commission as a data controller or data processor?

**Why this matters.** Registration is a precondition to collecting or processing personal data at all. Processing without it is a standing breach regardless of how well everything else is run.

**Expected state.** A valid certificate of registration is held, covers every capacity in which the organisation acts, and has not expired.

**Implementation guidance.** Confirm which capacity applies - controller, processor, or both for different activities - and that the registration on file covers all of them. Keep the certificate accessible.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Certificate of Registration`, `Registration Application`, `Commission Correspondence` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 14(1) is an absolute prohibition on processing without registration, and section 19 makes contravention of this Part an offence.

**Remediation.** Stop or pause new collection where feasible and apply to the Commission for registration immediately. Take legal advice on processing already under way.

**Suggested task.** Obtain registration with the Personal Data Protection Commission _(priority: CRITICAL)_

**Notes.** Section 19 provides that contravention of this Part is an offence punishable under section 63 (fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment not exceeding five years, or both). Section 21 deems public institutions registered.

#### `PDPA-014-002` Registration application submitted before intended processing

**Legal basis:** Section 14(2) (subsection 14(2))  
**Requirement:** `REQ-014-2` - Application for registration  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** A person who intends to collect or process personal data shall apply to the Commission for registration.

**Control.** Before starting any new collection or processing that falls outside an existing registration, an application is made to the Commission.

**Assessment question.** When you plan a new activity involving personal data that your registration does not already cover, do you apply to the Commission first?

**Why this matters.** The duty attaches to the intention to collect or process, so the application belongs at the planning stage rather than after go-live.

**Expected state.** A documented gate in the change or project process that checks registration coverage before processing begins.

**Implementation guidance.** Add a registration check to the intake process for new products, systems and vendors. The Commission decides within a period specified in the regulations under section 14(3).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Registration Application`, `Project Intake Checklist`, `Change Approval Record` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. New processing launched outside the scope of an existing registration reintroduces the section 14(1) breach.

**Remediation.** Insert a registration coverage check into the project and vendor onboarding gates.

**Suggested task.** Add a PDPA registration coverage check to the new-processing intake gate _(priority: HIGH)_

**Notes.** Section 14(3) leaves the decision period to the regulations. Section 14(5) requires the Commission to give written reasons for a rejection.

#### `PDPA-014-003` Certificate of registration retained and retrievable

**Legal basis:** Section 14(4) (subsection 14(4))  
**Requirement:** `REQ-014-4` - Certificate of registration  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission shall issue a certificate of registration to the data controller or data processor who has fulfilled the prescribed requirements and registered under this section.

**Control.** The certificate of registration issued by the Commission is retained, its expiry date is recorded, and it can be produced on request.

**Assessment question.** Do you hold your certificate of registration, and can you produce it and state its expiry date?

**Why this matters.** The certificate is the document that proves registration to the Commission, to customers and to counterparties.

**Expected state.** Certificate on file with issue and expiry dates recorded and a renewal reminder set.

**Implementation guidance.** Store the certificate in the evidence repository, record the issue and expiry dates, and set a renewal reminder.

| Field | Value |
| --- | --- |
| Response type | `DOCUMENT_REQUIRED` |
| Answer options | _n/a_ |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Certificate of Registration` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The certificate itself is issued by the Commission; the risk here is loss of proof and missed renewal rather than unlawful processing.

**Remediation.** Request a copy from the Commission if mislaid, then file it and diarise the expiry.

**Suggested task.** File the certificate of registration and record its expiry date _(priority: MEDIUM)_

### Section 15 - Register of data controllers and data processors

#### `PDPA-015-001` Registered particulars kept current

**Legal basis:** Section 15(3) (subsection 15(3))  
**Requirement:** `REQ-015-3` - Updating registered particulars  
**Source type:** `ACT_DERIVED` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** A data controller or data processor may, at any time, apply to the Commission to update or change any particulars in the register.

**Control.** When registered particulars change - contact details, the nature of processing, the responsible officer - an application to update the register is made.

**Assessment question.** When the details you gave the Commission at registration change, do you apply to have the register updated?

**Why this matters.** The register is how the Commission reaches you, including with an investigation or enforcement notice. Stale details can turn a small issue into a missed deadline.

**Expected state.** An owner is named, and there is a record of the last review of registered particulars.

**Implementation guidance.** Assign an owner for registration data and review the registered particulars at least annually and on any material change of business.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Register Update Application`, `Registration Review Record`, `Commission Correspondence` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Out-of-date particulars impede regulatory contact and undermine the credibility of the registration.

**Remediation.** Name an owner and run an annual review of registered particulars.

**Suggested task.** Assign ownership and review registered particulars annually _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 15(3) is permissive - the Act says the controller or processor may apply to update. DataGuard derives the duty to keep particulars current from section 15(3) read with section 19, which makes furnishing false or misleading information during registration or renewal an offence. It adds no new legal obligation. Section 15(2) leaves the required particulars to the regulations.

#### `PDPA-015-002` Awareness that registered particulars are publicly inspectable

**Legal basis:** Sections 15(2) and 17 (subsection 15(2))  
**Requirement:** `REQ-015-3` - Updating registered particulars  
**Source type:** `INTERPRETATION` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The register shall contain such particulars as may be prescribed in the regulations. Subject to prescribed procedures and payment of prescribed fees, the Commission may permit any person to inspect and extract any entry in the register.

**Control.** The organisation understands that entries in the register may be inspected and extracted by any person the Commission permits, and reviews its entries accordingly.

**Assessment question.** Are you aware that the details recorded about you in the Commission register can be inspected by others, and have you reviewed those details with that in mind?

**Why this matters.** Anything in the register may end up in front of a competitor, a journalist or a customer. It is worth knowing what is there.

**Expected state.** Registered particulars have been reviewed on the assumption that they are inspectable.

**Implementation guidance.** Review the registered particulars for accuracy and for anything you would not want disclosed, and raise any concern with the Commission rather than omitting required information.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Registration Review Record` |
| Evidence strength | `WEAK` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `LOW` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. Section 17 is a power of the Commission, not an obligation on the organisation. This control exists to prompt awareness, not to test compliance.

**Remediation.** Review your register entry once and record that you have done so.

**Suggested task.** Review the register entry on the basis that it is publicly inspectable _(priority: LOW)_

**Notes.** INTERPRETATION. Section 17 addresses the Commission, not the data controller. The particulars in the register are to be prescribed by regulations that are not reproduced in the Act.

### Section 16 - Duration of registration

#### `PDPA-016-001` Registration expiry tracked

**Legal basis:** Section 16(1) (subsection 16(1))  
**Requirement:** `REQ-016-1` - Five year registration period  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The period of registration shall be five years from the date of issuance of certificate of registration.

**Control.** The five year expiry date of the registration is recorded and monitored so that the organisation never processes on a lapsed registration.

**Assessment question.** Do you know the date your registration expires, and is that date being tracked?

**Why this matters.** Registration runs for five years. If it lapses, you are back in breach of the prohibition in section 14(1) without anything else having changed.

**Expected state.** Expiry date recorded with automated reminders configured.

**Implementation guidance.** Record the certificate issue date, calculate the five year expiry, and set reminders at twelve, six and four months before expiry.

| Field | Value |
| --- | --- |
| Response type | `DATE` |
| Answer options | _n/a_ |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Certificate of Registration`, `Compliance Calendar` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. A lapsed registration reinstates the section 14(1) prohibition, and lapse through inattention is a common and entirely avoidable failure.

**Remediation.** Record the expiry date in the compliance calendar and configure reminders.

**Suggested task.** Record the registration expiry date and configure renewal reminders _(priority: HIGH)_

#### `PDPA-016-002` Renewal submitted within the three month window

**Legal basis:** Section 16(2) (subsection 16(2))  
**Requirement:** `REQ-016-2` - Renewal three months before expiry  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The application for renewal shall be submitted within the period of three months before expiry in the manner prescribed in the regulations.

**Control.** The renewal application is submitted within the three month period before the registration expires, in the manner prescribed by the regulations.

**Assessment question.** Do you submit your renewal application during the three months before your registration expires?

**Why this matters.** The Act sets a specific window. Applying too late risks a gap in registration; the manner of applying is set by regulations.

**Expected state.** Renewal is submitted inside the statutory window with proof of submission retained.

**Implementation guidance.** Diarise the start of the three month window, not just the expiry date. Confirm the prescribed manner of renewal against the current regulations before submitting.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Renewal Application`, `Proof of Submission`, `Compliance Calendar` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Missing the renewal window can lead to expiry of the registration and a resulting prohibition on processing.

**Remediation.** Add the renewal window opening date to the compliance calendar with an owner.

**Suggested task.** Diarise the opening of the three month registration renewal window _(priority: HIGH)_

**Notes.** The manner of renewal is left to the regulations and is not specified in the Act.

### Section 18 - Deregistration

#### `PDPA-018-001` Response to deregistration by the Commission

**Legal basis:** Section 18  
**Requirement:** `REQ-018-1` - Deregistration  
**Source type:** `INTERPRETATION` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The Commission may deregister any registration under this Act as may be prescribed in the regulations.

**Control.** The organisation has a defined internal response if the Commission deregisters it, recognising that the section 14(1) prohibition then applies again.

**Assessment question.** Do you have a plan for what happens to your processing if the Commission deregisters you?

**Why this matters.** Deregistration removes the basis on which you may collect or process personal data at all. It needs an escalation path decided in advance, not invented on the day.

**Expected state.** A documented escalation procedure naming an owner and the processing that would be suspended.

**Implementation guidance.** Name an executive owner, define the escalation path, and identify which processing would have to stop. The grounds and procedure for deregistration are left to the regulations.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Incident and Escalation Procedure`, `Business Continuity Plan` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Deregistration is a low-likelihood but very high-impact event, and the Act gives no notice period on the face of section 18.

**Remediation.** Add deregistration to the escalation procedure with a named executive owner.

**Suggested task.** Define an internal response procedure for deregistration by the Commission _(priority: LOW)_

**Notes.** INTERPRETATION. Section 18 confers a power on the Commission and imposes no obligation on the organisation. The consequence for the organisation is derived from section 14(1). Grounds and procedure are left to the regulations.

### Section 19 - Offences relating to registration

#### `PDPA-019-001` Accuracy of information given at registration and renewal

**Legal basis:** Section 19  
**Requirement:** `REQ-019-1` - No false or misleading registration information  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Any person who contravenes the provisions of this Part or furnishes false or misleading information during registration or renewal, commits an offence and upon conviction shall be liable for a penalty specified under section 63.

**Control.** Information submitted to the Commission at registration and renewal is verified for accuracy and completeness before submission, and a copy is retained.

**Assessment question.** Is the information you give the Commission at registration and renewal checked for accuracy before you send it, and do you keep a copy?

**Why this matters.** Furnishing false or misleading information at registration or renewal is a criminal offence under the Act, not merely an administrative slip.

**Expected state.** A retained copy of each submission with evidence of pre-submission review by a named person.

**Implementation guidance.** Require a named reviewer to verify the submission against source records before it is sent, and retain the submitted version alongside the supporting records.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Registration Application`, `Renewal Application`, `Pre-submission Review Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This provision carries criminal liability under section 63 and is entirely within the organisation control to avoid.

**Remediation.** Introduce a documented review and sign-off step before any submission to the Commission.

**Suggested task.** Introduce pre-submission review and retention for Commission filings _(priority: HIGH)_

**Notes.** Section 63 provides a fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment for a term not exceeding five years, or both. This penalty applies to section 19 because section 19 expressly refers to it.

### Section 20 - Appeal relating to registration

#### `PDPA-020-001` Awareness of the registration appeal route

**Legal basis:** Section 20  
**Requirement:** `REQ-020-1` - Appeal to the Minister on registration decisions  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Any person who is aggrieved by the decision of the Commission under this Part may appeal in writing to the Minister.

**Control.** The organisation knows that a decision of the Commission under Part III may be appealed in writing to the Minister, and who internally would handle such an appeal.

**Assessment question.** If the Commission refused or cancelled your registration, do you know that you can appeal in writing to the Minister and who would handle it?

**Why this matters.** Appeal rights are only useful if somebody knows they exist at the moment the decision lands.

**Expected state.** The appeal route and internal owner are documented in the compliance procedure.

**Implementation guidance.** Record the appeal route in the compliance procedure with a named owner. The Act does not state a time limit for this appeal on the face of section 20 - confirm any deadline in the regulations or with counsel.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Compliance Procedure`, `Regulatory Escalation Matrix` |
| Evidence strength | `WEAK` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `LOW` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. This is a right rather than a duty. It is recorded so the organisation does not lose it through unawareness.

**Remediation.** Add the section 20 appeal route and its owner to the compliance procedure.

**Suggested task.** Document the section 20 appeal route to the Minister _(priority: LOW)_

**Notes.** OPEN_QUESTION: section 20 does not state a period within which the appeal to the Minister must be lodged. Any internal deadline is INTERPRETATION until confirmed by regulations or advice.

### Section 21 - Registration of public institutions

#### `PDPA-021-001` Public institution deemed registration and full compliance

**Legal basis:** Section 21  
**Requirement:** `REQ-021-1` - Public institutions deemed registered  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Immediately after commencement of this Act, public institutions which collect and process personal data shall be deemed as registered with the Commission under this Act and shall be required to comply with the provisions of this Act.

**Control.** A public institution that collects and processes personal data recognises that it is deemed registered and that it remains bound by every other provision of the Act.

**Assessment question.** If you are a public institution, do you understand that you are treated as already registered but still have to comply with everything else in the Act?

**Why this matters.** Deemed registration removes the application step. It does not reduce any other obligation, and the assumption that it does is a common misreading.

**Expected state.** The deemed registration basis is documented and the institution is assessed against the full control matrix.

**Implementation guidance.** Record the basis of deemed registration in the compliance file and confirm with the Commission what particulars, if any, it expects the institution to supply.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `ROLE_SPECIFIC` |
| Applicability question | Is your organisation a public institution? |
| Role scope | `PUBLIC_INSTITUTION` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Compliance File Note`, `Commission Correspondence`, `Establishing Instrument` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `REGISTRATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The registration risk is removed by statute, but the misconception that deemed registration implies broader exemption is a real and material risk.

**Remediation.** Document the deemed registration basis and run the full assessment regardless.

**Suggested task.** Document deemed registration status and complete the full PDPA assessment _(priority: MEDIUM)_

**Notes.** OPEN_QUESTION: the Act does not define public institution for this purpose, nor state what particulars a deemed-registered institution must supply for the register under section 15.


---

## Part IV - Collection, Use, Disclosure and Retention of Personal Data

### Section 22 - Collection of personal data

#### `PDPA-022-001` Part IV scope assessment including manual records and non-domiciled processing

**Legal basis:** Section 22(1)(a)-(c) (subsection 22(1))  
**Requirement:** `REQ-022-1` - Scope of Part IV  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Part IV applies to any collection and processing performed wholly or partly by manual or automated means; to processing carried out in the performance of activities of a controller domiciled in the United Republic or in a territory where the laws of the United Republic apply by virtue of international public law; and to processing by a controller or processor not domiciled in the United Republic where the processing takes place in the United Republic and is not for mere transit through Tanzania.

**Control.** The organisation has assessed which of its processing falls within section 22(1), expressly including paper and other manual records, and processing carried out in Tanzania by entities domiciled elsewhere.

**Assessment question.** Have you identified all processing that falls under Part IV, including paper records and any processing you carry out in Tanzania from a business based abroad?

**Why this matters.** Paper files and offshore group entities are the two things most often left out of a data inventory, and section 22(1) puts both squarely in scope.

**Expected state.** A processing inventory that covers automated and manual processing and records the domicile and processing location for each activity.

**Implementation guidance.** Extend the processing inventory to manual filing systems. For non-domiciled entities, determine where the processing physically takes place, and note that mere transit of data through Tanzania is excluded.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Scoping Statement`, `Records Inventory` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Processing left outside the scope assessment is processing that nobody is controlling.

**Remediation.** Extend the inventory to manual records and confirm the processing location for each non-domiciled entity.

**Suggested task.** Extend the processing inventory to manual records and non-domiciled processing _(priority: HIGH)_

**Notes.** Section 22(1)(c) expressly excludes processing for the purposes of mere transit of personal data through Tanzania to another country.

#### `PDPA-022-002` Collection tied to a lawful purpose related to a function of the controller

**Legal basis:** Section 22(2)(a) (subsection 22(2), paragraph (a))  
**Requirement:** `REQ-022-2` - Lawful purpose and necessity for collection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller shall collect personal data if the personal data is collected for a lawful purpose related to a function of the data controller.

**Control.** Every collection of personal data is tied to a lawful purpose that relates to an actual function of the organisation.

**Assessment question.** Is every collection of personal data linked to a lawful purpose that relates to something your organisation actually does?

**Why this matters.** The Act does not allow collection just because the data might be useful one day. The purpose must connect to a function you actually perform.

**Expected state.** Each collection activity in the register names both a lawful purpose and the organisational function it supports.

**Implementation guidance.** For each collection point in the register, record the organisational function it serves alongside the purpose. Challenge any entry where the function cannot be named.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Purpose and Function Mapping`, `Privacy Notice` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `LAWFULNESS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Collection with no lawful purpose related to a function of the controller is unlawful at the point of collection and cannot be cured later.

**Remediation.** Add a function column to the processing register and complete it for every collection.

**Suggested task.** Map every collection activity to a lawful purpose and an organisational function _(priority: HIGH)_

#### `PDPA-022-003` Necessity test applied at the point of collection

**Legal basis:** Section 22(2)(b) (subsection 22(2), paragraph (b))  
**Requirement:** `REQ-022-2` - Lawful purpose and necessity for collection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller shall collect personal data if the collection of the data is necessary or incidental or directly related to the lawful purpose.

**Control.** Each data element collected is tested as necessary, incidental to, or directly related to the lawful purpose before collection begins.

**Assessment question.** Have you checked that each piece of information you collect is necessary for, incidental to, or directly related to the purpose?

**Why this matters.** This is the statutory version of only collect what you need, and it applies element by element rather than form by form.

**Expected state.** A recorded necessity assessment per collection point, refreshed when the form or feed changes.

**Implementation guidance.** Run a field-level necessity test when a form or integration is designed or changed, and record the outcome. Note the test is broader than strict necessity - incidental and directly related also qualify.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Necessity Assessment`, `Data Minimisation Review`, `Form and Screen Inventory` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_MINIMISATION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The section 22(2)(b) test is broader than strict necessity, so failures tend to be at the margin, but they are cumulative.

**Remediation.** Add a field-level necessity test to the design review for forms and integrations.

**Suggested task.** Apply and record a necessity test at each collection point _(priority: MEDIUM)_

#### `PDPA-022-004` No collection by unlawful means

**Legal basis:** Section 22(3) (subsection 22(3))  
**Requirement:** `REQ-022-3` - No collection by unlawful means  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller shall not collect personal data by unlawful means.

**Control.** Collection methods are lawful - no covert acquisition, scraping in breach of law, deception, or purchase of data obtained unlawfully.

**Assessment question.** Are you satisfied that none of your methods of obtaining personal data are unlawful, including data bought or scraped from elsewhere?

**Why this matters.** Data acquired unlawfully stays unlawful no matter how carefully it is handled afterwards, and section 60 makes some acquisition routes a criminal offence.

**Expected state.** A documented review of acquisition methods and third party data sources with a lawfulness conclusion for each.

**Implementation guidance.** Screen third party data sources and list acquisition methods. Require the supplier to state how the data was obtained and on what basis it may be passed on.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Source Register`, `Supplier Data Provenance Declaration`, `Data Protection Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `LAWFULNESS` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Unlawful acquisition taints every subsequent use and engages the criminal offences in section 60, particularly obtaining personal data without the authority of the controller by whom it is kept.

**Remediation.** Inventory third party data sources, obtain provenance declarations, and stop any acquisition route that cannot be justified.

**Suggested task.** Review acquisition methods and third party data sources for lawfulness _(priority: CRITICAL)_

**Notes.** Section 60(3) makes it an offence to obtain personal data without the prior authority of the data controller or data processor by whom the personal data is kept.

### Section 23 - Source and notification of personal data

#### `PDPA-023-001` Collection directly from the data subject

**Legal basis:** Section 23(1) (subsection 23(1))  
**Requirement:** `REQ-023-1` - Direct collection from the data subject  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Subject to subsection (3), a data controller shall collect personal data directly from the data subject concerned.

**Control.** Personal data is collected directly from the individual concerned unless one of the section 23(3) exceptions applies and has been recorded.

**Assessment question.** Do you collect personal data directly from the person it is about, rather than from someone else?

**Why this matters.** Direct collection is the default under the Act. Indirect collection is allowed only in defined circumstances, and you must be able to point to which one.

**Expected state.** The processing register records the source of each collection, with an exception cited wherever the source is not the data subject.

**Implementation guidance.** Record the source for each collection activity. Where the source is not the data subject, link the entry to the specific section 23(3) exception relied on.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Data Source Register`, `Collection Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `COLLECTION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Indirect collection without an applicable exception breaches section 23(1) and usually also undermines the notification duty in section 23(2).

**Remediation.** Add a source field to the processing register and reconcile every indirect collection to a section 23(3) exception.

**Suggested task.** Record the source of collection for every processing activity _(priority: HIGH)_

#### `PDPA-023-002` Pre-collection notice - purposes, authorised purposes and intended recipients

**Legal basis:** Section 23(2)(a)-(c) (subsection 23(2), paragraph (a)-(c))  
**Requirement:** `REQ-023-2` - Pre-collection notification  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Before collecting data, a data controller shall ensure that the data subject is aware of the purposes for which the personal data is collected, the fact that collection is for authorised purposes, and any intended recipients of the personal data.

**Control.** Before any collection, the data subject is made aware of the purposes, the fact that collection is for authorised purposes, and the intended recipients of the data.

**Assessment question.** Before you collect someone information, do you tell them why you are collecting it and who you intend to share it with?

**Why this matters.** The Act requires awareness before collection, not afterwards. All three elements must be covered, and intended recipients is the one most often left out.

**Expected state.** Every collection point carries a pre-collection notice covering purposes, authorised purposes and intended recipients, with versions retained.

**Implementation guidance.** Audit every collection point - forms, call scripts, apps, contracts - and confirm the notice covers all three elements and is presented before the data is captured. Keep dated versions of each notice.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Privacy Notice`, `Collection Point Notice Inventory`, `Call Script`, `Consent Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `TRANSPARENCY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This is an express, testable duty that applies at every collection point and is highly visible to data subjects and to the Commission.

**Remediation.** Inventory collection points, then update each notice to cover the three statutory elements and place it before the point of capture.

**Suggested task.** Audit all collection points for a compliant pre-collection notice _(priority: HIGH)_

**Notes.** Section 23(2) requires that the data subject is aware. The Act does not prescribe a form or medium for the notice.

#### `PDPA-023-003` Documented reliance on exceptions to direct collection

**Legal basis:** Section 23(3)(a)-(e) (subsection 23(3), paragraph (a)-(e))  
**Requirement:** `REQ-023-3` - Exceptions to direct collection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller is not obliged to collect directly from the data subject where the personal data is publicly available; the data subject authorises collection from a third party; compliance is not reasonably practicable in the circumstances; non-compliance is necessary for compliance with other written laws; or compliance would prejudice the lawful purpose of the collection.

**Control.** Where data is collected indirectly, the specific section 23(3) exception relied on is identified and recorded before collection.

**Assessment question.** Where you collect personal data from someone other than the person it is about, have you recorded which legal exception allows that?

**Why this matters.** The exceptions are narrow and specific. Recording which one applies at the time is far easier than reconstructing it during an investigation.

**Expected state.** Every indirect collection has a recorded exception, justification and assessment date.

**Implementation guidance.** Give each indirect collection an exception code (a to e) with a short justification and the date the assessment was made. Reassess when the collection changes.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you collect any personal data from a source other than the person it is about? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Exception Register`, `Data Source Register`, `Legal Assessment Note` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `COLLECTION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The exceptions are lawful routes, so the risk lies in relying on one without analysis rather than in indirect collection itself.

**Remediation.** Create an exception register and complete it for each indirect collection, taking advice on borderline cases.

**Suggested task.** Record the section 23(3) exception relied on for each indirect collection _(priority: MEDIUM)_

**Notes.** INTERPRETATION: not reasonably practicable and would prejudice the lawful purpose are open-textured tests. The Act gives no further criteria.

### Section 24 - Accuracy of personal data

#### `PDPA-024-001` Reasonable steps to verify data before use

**Legal basis:** Section 24  
**Requirement:** `REQ-024-1` - Accuracy before use  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Subject to the purpose for which the personal data are intended to be used, a data controller who holds personal data shall not use that personal data without taking such steps as are, in the circumstances, reasonable to ensure that the data is complete, accurate, relevant and not misleading.

**Control.** Before personal data is used, reasonable steps are taken to confirm it is complete, accurate, relevant and not misleading, judged against the intended use.

**Assessment question.** Before you use personal information to make a decision or take an action, do you take reasonable steps to check it is complete, accurate, relevant and not misleading?

**Why this matters.** Section 24 is a check at the point of use, not just a general data quality aspiration. What counts as reasonable scales with how much the decision matters to the person.

**Expected state.** Documented verification steps for each high-impact use of personal data, with evidence they are applied.

**Implementation guidance.** Define verification steps proportionate to the consequence of the use - light touch for a mailing list, substantive for a credit or employment decision. Record what the steps are for each high-impact use.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Quality Procedure`, `Verification Control Design`, `System Validation Rules`, `Audit Report` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_QUALITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Use of inaccurate data is the most direct route to demonstrable damage under section 37 and to a Commission order under section 38.

**Remediation.** Identify the uses where inaccuracy would harm someone, and design proportionate verification into those processes first.

**Suggested task.** Define and implement pre-use verification for high-impact uses of personal data _(priority: HIGH)_

**Notes.** INTERPRETATION: the Act uses the standard of steps that are reasonable in the circumstances and does not prescribe specific verification methods.

### Section 25 - Personal data to be used for intended purpose

#### `PDPA-025-001` Use confined to the intended purpose

**Legal basis:** Section 25(1) (subsection 25(1))  
**Requirement:** `REQ-025-1` - Use for the intended purpose  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data collected under this Act shall be used for the intended purposes.

**Control.** Personal data is used only for the purpose for which it was collected, unless a section 25(2) ground applies.

**Assessment question.** Do you use personal data only for the purpose you originally collected it for?

**Why this matters.** Reusing data for a new purpose is one of the easiest things to do accidentally, particularly when analytics or marketing teams gain access to operational systems.

**Expected state.** Purpose is recorded per dataset and a secondary-use approval process exists and is used.

**Implementation guidance.** Restrict system access by purpose where the platform allows. Require a documented secondary-use approval before data collected for one purpose is used for another.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Secondary Use Approval Record`, `Access Control Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `PURPOSE_LIMITATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Section 26 makes the section 25 grounds the gateway for disclosure as well as use, so a failure here propagates.

**Remediation.** Introduce a secondary-use approval step and record the purpose against each dataset.

**Suggested task.** Implement a secondary-use approval process for personal data _(priority: HIGH)_

#### `PDPA-025-002` Secondary use limited to a recorded section 25(2) ground

**Legal basis:** Section 25(2)(a)-(f) (subsection 25(2), paragraph (a)-(f))  
**Requirement:** `REQ-025-2` - Permitted secondary use  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data held for a particular purpose may be used for another purpose only where the data subject authorises that other use; the other use is authorised or required by law; the other purpose is directly related to the purpose of collection; the data is used in a non-identifying form or for statistical or research purposes not published in identifying form; the controller believes on reasonable grounds that the use is necessary to prevent or lessen a serious and imminent threat to life, health or public health or safety; or the use is necessary for compliance with the laws.

**Control.** Any use of personal data for a purpose other than that of collection is mapped to one of the six grounds in section 25(2) and recorded before the use begins.

**Assessment question.** When you use personal data for a new purpose, do you record which of the permitted legal grounds allows it?

**Why this matters.** These six grounds are exhaustive. If a proposed new use does not fit one of them, it is not permitted, however commercially sensible it seems.

**Expected state.** A secondary use register recording the ground, justification, approver and date for each approved secondary use.

**Implementation guidance.** Build a secondary-use assessment template listing grounds (a) to (f). Require the requester to select a ground and give a justification, and require sign-off by the data protection officer.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you use any personal data for a purpose other than the one it was originally collected for? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Secondary Use Register`, `Purpose Compatibility Assessment`, `DPO Approval Record`, `Consent Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `PURPOSE_LIMITATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The grounds are exhaustive, and an unrecorded secondary use is indefensible during a section 39 investigation.

**Remediation.** Create the secondary use register, populate it for existing secondary uses, and stop any use that fits no ground.

**Suggested task.** Create a secondary use register mapped to the section 25(2) grounds _(priority: HIGH)_

**Notes.** Section 25(2)(d)(ii) permits statistical or research use provided the results are not published in a form that could reasonably be expected to identify the data subject.

### Section 26 - Limitations on disclosure of personal data

#### `PDPA-026-001` Disclosure restricted to the section 25 circumstances

**Legal basis:** Section 26  
**Requirement:** `REQ-026-1` - Limitation on disclosure  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where a data controller holds personal data, he shall not disclose the personal data to a person other than the data subject except in the circumstances specified under section 25.

**Control.** Personal data is disclosed to third parties only where one of the circumstances in section 25 applies, and each disclosure route is recorded.

**Assessment question.** Do you share personal data with anyone other than the person it is about only where the law allows, and do you keep a record of who you share it with?

**Why this matters.** Disclosure is the point at which you lose control of the data. Section 26 ties every disclosure back to the section 25 grounds, and unlawful disclosure is a criminal offence under section 60.

**Expected state.** A complete disclosure register with a recorded section 25 ground for every recipient.

**Implementation guidance.** Maintain a disclosure register listing each recipient, the data disclosed, the section 25 ground and the safeguards in place. Include routine feeds, regulatory reporting and group sharing.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Disclosure Register`, `Data Sharing Agreement`, `Processor Agreement`, `Secondary Use Register` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DISCLOSURE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 60(1) makes disclosure incompatible with the purpose of collection a criminal offence carrying a fine of up to TZS 5,000,000,000 for a company or corporation.

**Remediation.** Build the disclosure register, assess each existing route against section 25, and terminate or re-paper any route without a ground.

**Suggested task.** Build a disclosure register mapping every recipient to a section 25 ground _(priority: CRITICAL)_

**Notes.** Section 60(6) sets the penalty for unlawful disclosure offences: for an individual, a fine of not less than TZS 100,000 and not exceeding TZS 20,000,000 or imprisonment not exceeding ten years or both; for a company or corporation, a fine of not less than TZS 1,000,000 and not exceeding TZS 5,000,000,000.

### Section 27 - Security of personal data

#### `PDPA-027-001` Reasonable security safeguards programme

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data.

**Control.** A documented set of security safeguards protects personal data, and their reasonableness in the circumstances has been assessed and recorded.

**Assessment question.** Do you have reasonable safeguards in place that protect personal data, and have you written down why they are the right ones for your circumstances?

**Why this matters.** This is the umbrella security duty in the Act. The standard is what is reasonable in your circumstances, so the reasoning behind your choices matters as much as the controls themselves.

**Expected state.** An approved security policy, a safeguards register, and a documented reasonableness assessment reviewed at least annually.

**Implementation guidance.** Maintain an approved security policy and a register of implemented safeguards. Record the assessment of reasonableness against the four factors in section 27(2), which are assessed separately by controls PDPA-027-007 to PDPA-027-010.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Security Policy`, `Safeguards Register`, `Risk Assessment`, `Audit Report` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 27(1) is the central security obligation of the Act and underpins the section 5(g) principle and the section 27(5) breach duty.

**Remediation.** Approve a security policy, inventory current safeguards, and document the reasonableness assessment against the section 27(2) factors.

**Suggested task.** Establish and document reasonable security safeguards for personal data _(priority: CRITICAL)_

**Notes.** Section 27(1) by its terms binds the data controller and his representatives. Section 5(g) applies the security principle to data processors as well, and section 27(4) makes the processor responsible for compliance with security standards.

#### `PDPA-027-002` Protection against negligent loss

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against negligent loss.

**Control.** Specific technical and organisational safeguards address the risk of negligent loss of personal data, and their operation is evidenced.

**Assessment question.** Are you protected against personal data being lost through carelessness - for example lost laptops, lost files, or failed backups?

**Why this matters.** Section 27(1) names negligent loss as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.

**Expected state.** Named safeguards addressing negligent loss are implemented, owned, and evidenced by operating records rather than by policy text alone.

**Implementation guidance.** Cover device encryption and asset tracking, backup and restore testing, physical file custody, and secure transfer of media. Test restores rather than assuming backups work.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Backup and Restore Test Records`, `Asset Register`, `Device Encryption Report`, `Security Policy` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SECURITY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Negligent loss is expressly named in section 27(1) and is the most frequent cause of reportable incidents.

**Remediation.** Identify the systems holding personal data, select proportionate safeguards against negligent loss, assign an owner, and produce operating evidence.

**Suggested task.** Implement and evidence controls against negligent loss of personal data _(priority: CRITICAL)_

**Notes.** Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.

#### `PDPA-027-003` Protection against unauthorised destruction

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised destruction.

**Control.** Specific technical and organisational safeguards address the risk of unauthorised destruction of personal data, and their operation is evidenced.

**Assessment question.** Are you protected against personal data being destroyed or deleted by someone who should not be doing that?

**Why this matters.** Section 27(1) names unauthorised destruction as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.

**Expected state.** Named safeguards addressing unauthorised destruction are implemented, owned, and evidenced by operating records rather than by policy text alone.

**Implementation guidance.** Restrict delete and purge rights, log deletions, keep immutable or offline backup copies, and require dual authorisation for bulk deletion.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Deletion Authorisation Records`, `Backup Policy`, `Audit Log Configuration` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SECURITY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Unauthorised destruction is expressly named in section 27(1) and is separately criminalised by section 61.

**Remediation.** Identify the systems holding personal data, select proportionate safeguards against unauthorised destruction, assign an owner, and produce operating evidence.

**Suggested task.** Restrict and log deletion rights over personal data _(priority: CRITICAL)_

**Notes.** Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.

#### `PDPA-027-004` Protection against unauthorised alteration

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised alteration.

**Control.** Specific technical and organisational safeguards address the risk of unauthorised alteration of personal data, and their operation is evidenced.

**Assessment question.** Are you protected against personal data being changed by someone who is not authorised to change it?

**Why this matters.** Section 27(1) names unauthorised alteration as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.

**Expected state.** Named safeguards addressing unauthorised alteration are implemented, owned, and evidenced by operating records rather than by policy text alone.

**Implementation guidance.** Enforce write permissions by role, keep tamper-evident change logs, and reconcile critical fields periodically. This control also supports the section 29(2) duty to preserve pre-amendment records.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Change and Audit Logs`, `Segregation of Duties Matrix` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SECURITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Unauthorised alteration is expressly named in section 27(1), is criminalised by section 61, and silently corrupts the accuracy duties in sections 5(d) and 24.

**Remediation.** Identify the systems holding personal data, select proportionate safeguards against unauthorised alteration, assign an owner, and produce operating evidence.

**Suggested task.** Enforce and log write access controls over personal data _(priority: HIGH)_

**Notes.** Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.

#### `PDPA-027-005` Protection against unauthorised access

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised access.

**Control.** Specific technical and organisational safeguards address the risk of unauthorised access of personal data, and their operation is evidenced.

**Assessment question.** Are you protected against people seeing personal data when they have no business reason to see it?

**Why this matters.** Section 27(1) names unauthorised access as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.

**Expected state.** Named safeguards addressing unauthorised access are implemented, owned, and evidenced by operating records rather than by policy text alone.

**Implementation guidance.** Apply least privilege, review access periodically, enforce strong authentication, and log and monitor access to sensitive records.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Access Review Records`, `Authentication Policy`, `Access Logs` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SECURITY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Unauthorised access is expressly named in section 27(1) and is the precondition for most unlawful disclosure offences under section 60.

**Remediation.** Identify the systems holding personal data, select proportionate safeguards against unauthorised access, assign an owner, and produce operating evidence.

**Suggested task.** Implement least privilege and periodic access reviews for personal data _(priority: CRITICAL)_

**Notes.** Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.

#### `PDPA-027-006` Protection against unauthorised processing

**Legal basis:** Section 27(1) (subsection 27(1))  
**Requirement:** `REQ-027-1` - Reasonable security safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller and his representatives shall ensure that personal data is protected by such security safeguards as are reasonable in the circumstances necessary for the protection of personal data against unauthorised processing.

**Control.** Specific technical and organisational safeguards address the risk of unauthorised processing of personal data, and their operation is evidenced.

**Assessment question.** Are you protected against personal data being used or analysed in ways nobody has authorised?

**Why this matters.** Section 27(1) names unauthorised processing as a distinct harm to protect against. Treating it separately makes it clear whether you actually have a control for it rather than a general assurance that security is handled.

**Expected state.** Named safeguards addressing unauthorised processing are implemented, owned, and evidenced by operating records rather than by policy text alone.

**Implementation guidance.** Control which systems and jobs may read production personal data, restrict use of production data in test environments, and review analytics, extract and integration jobs against the recorded purposes.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Data Flow Diagram`, `Test Data Management Policy`, `Integration Register` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SECURITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Unauthorised processing is expressly named in section 27(1) and is where security failures and purpose limitation failures overlap.

**Remediation.** Identify the systems holding personal data, select proportionate safeguards against unauthorised processing, assign an owner, and produce operating evidence.

**Suggested task.** Control and review automated processing and extracts of personal data _(priority: HIGH)_

**Notes.** Section 27(1) lists negligent loss and unauthorised destruction, alteration, access and processing as separate harms. DataGuard maps each to its own control so that partial coverage is visible.

#### `PDPA-027-007` State of technological advancement considered

**Legal basis:** Section 27(2)(a) (subsection 27(2), paragraph (a))  
**Requirement:** `REQ-027-2A` - Technology and cost factors  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Security measures shall ensure an appropriate level of security taking into account the state of technological advancement.

**Control.** The organisation demonstrably weighs this statutory factor when selecting and reviewing security measures.

**Assessment question.** When you choose security measures, do you take account of what current technology makes possible - and revisit that as technology moves?

**Why this matters.** A measure that was appropriate five years ago may not be today. The Act builds this movement into the standard itself.

**Expected state.** A documented technology review cycle for security measures, with the last review dated.

**Implementation guidance.** Record the technology baseline assumed by your security design, and review it on a set cycle or when a material change occurs, such as a cryptographic algorithm being deprecated.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Security Architecture Review`, `Technology Refresh Plan`, `Risk Assessment` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. This is a factor the Act requires you to weigh rather than a standalone safeguard, but neglecting it makes the whole programme drift out of date.

**Remediation.** Incorporate this factor explicitly into the security risk assessment methodology and record the outcome.

**Suggested task.** Establish a periodic technology review of security measures _(priority: MEDIUM)_

**Notes.** Section 27(2) requires that the appropriate level of security take these factors into account. DataGuard assesses each factor separately so that a gap in any one of them is visible.

#### `PDPA-027-008` Cost of implementation considered

**Legal basis:** Section 27(2)(a) (subsection 27(2), paragraph (a))  
**Requirement:** `REQ-027-2A` - Technology and cost factors  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Security measures shall ensure an appropriate level of security taking into account the cost of implementing the measures.

**Control.** The organisation demonstrably weighs this statutory factor when selecting and reviewing security measures.

**Assessment question.** When you decide on security measures, do you record how you weighed their cost against the protection they give?

**Why this matters.** The Act expressly allows cost to be weighed. That works in your favour only if the reasoning is recorded at the time rather than argued after an incident.

**Expected state.** A risk acceptance record for each security measure deferred or rejected on cost grounds.

**Implementation guidance.** Where a measure is rejected or deferred on cost grounds, record the decision, the residual risk accepted, who accepted it, and when it will be revisited.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Risk Acceptance Record`, `Security Business Case`, `Risk Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Cost is an express statutory factor. Undocumented cost-based decisions are the ones that look like neglect after the event.

**Remediation.** Incorporate this factor explicitly into the security risk assessment methodology and record the outcome.

**Suggested task.** Document cost and residual risk decisions for security measures _(priority: MEDIUM)_

**Notes.** Section 27(2) requires that the appropriate level of security take these factors into account. DataGuard assesses each factor separately so that a gap in any one of them is visible.

#### `PDPA-027-009` Nature of the personal data considered

**Legal basis:** Section 27(2)(b) (subsection 27(2), paragraph (b))  
**Requirement:** `REQ-027-2B` - Nature of data and risk to data subject  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Security measures shall ensure an appropriate level of security taking into account the nature of the personal data to be protected.

**Control.** The organisation demonstrably weighs this statutory factor when selecting and reviewing security measures.

**Assessment question.** Do you apply stronger protection to more sensitive categories of personal data than to routine data?

**Why this matters.** A single level of protection across everything either over-protects routine data or under-protects the data that would cause real harm if exposed.

**Expected state.** A data classification scheme with safeguards mapped to each tier and applied in practice.

**Implementation guidance.** Classify personal data holdings, treating sensitive personal data as defined in section 3 as its own tier, and map the safeguards required at each tier.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Classification Policy`, `Data Inventory with Classification`, `Security Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Sensitive personal data attracts specific statutory treatment under section 30, and failing to distinguish it undermines both duties at once.

**Remediation.** Incorporate this factor explicitly into the security risk assessment methodology and record the outcome.

**Suggested task.** Classify personal data holdings and map safeguards to each classification tier _(priority: HIGH)_

**Notes.** Section 27(2) requires that the appropriate level of security take these factors into account. DataGuard assesses each factor separately so that a gap in any one of them is visible.

#### `PDPA-027-010` Potential risks to the data subject considered

**Legal basis:** Section 27(2)(b) (subsection 27(2), paragraph (b))  
**Requirement:** `REQ-027-2B` - Nature of data and risk to data subject  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Security measures shall ensure an appropriate level of security taking into account the potential risks to the data subject.

**Control.** The organisation demonstrably weighs this statutory factor when selecting and reviewing security measures.

**Assessment question.** When you assess security risk, do you assess the harm to the individuals concerned, not just the harm to your organisation?

**Why this matters.** The Act asks about risk to the data subject. An incident that is minor for the business can be severe for the person whose data it is.

**Expected state.** Risk assessments record impact on data subjects as a distinct dimension from organisational impact.

**Implementation guidance.** Include a harm-to-individual dimension in the security risk assessment, covering identity theft, discrimination, physical safety and financial loss, and let it drive control selection.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Risk Assessment`, `Risk Assessment Methodology`, `Data Protection Impact Analysis` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SECURITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Risk to the data subject is an express statutory factor, and it is the dimension organisations most often omit from a security risk register.

**Remediation.** Incorporate this factor explicitly into the security risk assessment methodology and record the outcome.

**Suggested task.** Add data subject harm as a distinct dimension of the security risk assessment _(priority: HIGH)_

**Notes.** Section 27(2) requires that the appropriate level of security take these factors into account. DataGuard assesses each factor separately so that a gap in any one of them is visible.

#### `PDPA-027-011` Data protection officer appointed

**Legal basis:** Section 27(3) (subsection 27(3))  
**Requirement:** `REQ-027-3` - Appointment of a data protection officer  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The data controller and data processor, as the case may be, shall appoint a data protection officer.

**Control.** A named individual has been formally appointed as data protection officer for the organisation in its capacity as controller or processor.

**Assessment question.** Have you formally appointed someone as your data protection officer?

**Why this matters.** The Act requires an appointment. Naming a person informally is not the same thing, and the appointment is one of the first things a regulator will ask to see.

**Expected state.** A signed, dated appointment letter is on file for a currently serving data protection officer.

**Implementation guidance.** Issue a signed appointment letter identifying the individual, the effective date, the reporting line and the authority granted. Record the contact details and keep them current.

| Field | Value |
| --- | --- |
| Response type | `DOCUMENT_REQUIRED` |
| Answer options | _n/a_ |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `DPO Appointment Letter`, `Board or Management Resolution`, `Organisation Chart` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. The appointment is mandatory for both controllers and processors, it is binary and easily verified, and its absence is a visible failure that undermines every other control.

**Remediation.** Select a suitable individual, issue a signed appointment letter, and record the appointment in the compliance file.

**Suggested task.** Appoint a data protection officer and issue a signed appointment letter _(priority: CRITICAL)_

**Notes.** Section 64(2)(c) allows regulations to prescribe the functions of the data protection officer. The Act itself does not set qualifications, independence requirements, or whether the role may be shared across a group. A statement such as we have a DPO with no appointment document is WEAK evidence.

#### `PDPA-027-012` Data protection officer verifies control and security measures

**Legal basis:** Section 27(3) (subsection 27(3))  
**Requirement:** `REQ-027-3` - Appointment of a data protection officer  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data protection officer shall ensure that the control and security measures are in place to protect the personal data collected or being processed.

**Control.** The data protection officer actively verifies that control and security measures are in place, and reports on that verification.

**Assessment question.** Does your data protection officer actually check that the controls and security measures are working, and report on what they find?

**Why this matters.** Section 27(3) gives the officer a substantive job, not a title. A DPO with no mandate, no access and no reporting line cannot discharge it.

**Expected state.** A documented DPO verification programme with dated reports to senior management.

**Implementation guidance.** Define the officer verification programme - what is reviewed, how often, and to whom findings are reported. Retain the reports. Ensure the officer has access to systems and to senior management.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `DPO Report`, `DPO Work Plan`, `Management Review Minutes`, `Audit Report` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The statutory function is verification. An appointment without verification activity satisfies the form of section 27(3) but not its substance.

**Remediation.** Agree a DPO work plan with defined review cycles and a standing reporting slot at management level.

**Suggested task.** Establish a DPO verification and reporting programme _(priority: HIGH)_

#### `PDPA-027-013` Written contract in place with every data processor

**Legal basis:** Section 27(4) (subsection 27(4))  
**Requirement:** `REQ-027-4` - Contract governing the data processor  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Implementation of activities of the data processor shall be governed by a contract which associates the data processor to the data controller.

**Control.** Every processor that handles personal data on the organisation behalf is engaged under a contract governing the implementation of its activities.

**Assessment question.** Is there a signed contract in place with every supplier or partner that handles personal data on your behalf?

**Why this matters.** Section 27(4) requires the relationship to be governed by a contract. Suppliers engaged on a purchase order or a handshake leave the obligation unmet.

**Expected state.** A processor inventory in which every entry is linked to a signed, in-force contract.

**Implementation guidance.** Maintain a processor inventory. For each processor, confirm a signed contract exists and covers the section 27(4) elements assessed at PDPA-027-014 and PDPA-027-015.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Does any third party process personal data on your behalf? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Processor Agreement`, `Data Processing Agreement`, `Processor Inventory`, `Signed Contract` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `THIRD_PARTY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. This is an express contractual requirement, it is binary, and an unpapered processor relationship is both a breach and an uncontrolled exposure.

**Remediation.** Build the processor inventory, identify unpapered relationships, and put compliant contracts in place, prioritising those handling sensitive personal data.

**Suggested task.** Put a compliant written contract in place with every data processor _(priority: CRITICAL)_

#### `PDPA-027-014` Contract requires the processor to act on controller instructions

**Legal basis:** Section 27(4) (subsection 27(4))  
**Requirement:** `REQ-027-4` - Contract governing the data processor  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The contract shall be to the effect that the data processor acts under instructions of the data controller.

**Control.** Each processor contract states that the processor acts under the instructions of the controller, and instructions are given and recorded in practice.

**Assessment question.** Does each processor contract say the processor must act on your instructions, and do you actually give and record those instructions?

**Why this matters.** This clause defines the boundary between processor and controller. Section 50(2)(b) makes a processor liable for damage where it acts contrary to the controller lawful instructions.

**Expected state.** An instructions clause in every processor contract, supported by a record of documented instructions.

**Implementation guidance.** Include an explicit instructions clause in every processor contract, and keep a record of documented instructions - the scope of processing, permitted sub-processing, and any change requests.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Does any third party process personal data on your behalf? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Processor Agreement`, `Documented Processing Instructions`, `Contract Clause Review` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `THIRD_PARTY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Without a clear instructions boundary, responsibility for a processor failure is unclear, and section 50(2)(b) liability turns on exactly this point.

**Remediation.** Add or strengthen the instructions clause at the next contract review, and start recording instructions.

**Suggested task.** Add a controller instructions clause to all processor contracts _(priority: HIGH)_

#### `PDPA-027-015` Processor contractually responsible for security standards

**Legal basis:** Section 27(4) (subsection 27(4))  
**Requirement:** `REQ-027-4` - Contract governing the data processor  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The contract shall provide that the data processor is additionally responsible for ensuring compliance of the security standards as provided by this Act.

**Control.** Each processor contract makes the processor responsible for compliance with the security standards required by the Act, and that responsibility is monitored.

**Assessment question.** Does each processor contract make the processor responsible for meeting the security standards the Act requires, and do you check that they do?

**Why this matters.** Section 27(4) places security responsibility on the processor in addition to the controller. Outsourcing the work does not outsource the exposure.

**Expected state.** A security clause in every processor contract plus current assurance evidence per processor.

**Implementation guidance.** Include a security standards clause and a right to obtain assurance - certification, audit report or questionnaire. Record the assurance obtained for each processor and refresh it periodically.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Does any third party process personal data on your behalf? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Processor Agreement`, `Processor Security Assurance`, `Audit Report`, `Certification Evidence` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `THIRD_PARTY` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Processor security failures produce controller-level consequences, and section 27(5) requires the controller to notify breaches occurring on its behalf.

**Remediation.** Add the security standards clause, then collect assurance evidence starting with processors handling sensitive personal data.

**Suggested task.** Obtain security assurance evidence from every data processor _(priority: CRITICAL)_

**Notes.** Section 64(2)(h) allows regulations to prescribe appropriate standards relating to security of information to be met by data controllers. Until those are made, the applicable standards are those derivable from sections 5(g) and 27.

#### `PDPA-027-016` Security breach notification to the Commission without undue delay

**Legal basis:** Section 27(5) (subsection 27(5))  
**Requirement:** `REQ-027-5` - Security breach notification to the Commission  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data controller shall notify the Commission, without any undue delay, of any security breach affecting personal data being processed by or on behalf of the data controller.

**Control.** A documented procedure ensures the Commission is notified without undue delay of any security breach affecting personal data processed by or on behalf of the organisation.

**Assessment question.** Do you have a procedure that notifies the Commission without undue delay whenever there is a security breach affecting personal data - including breaches at your suppliers?

**Why this matters.** The duty covers breaches at your processors as well as your own systems, and the clock is described as without undue delay. A procedure written after the breach is already too late.

**Expected state.** An approved breach notification procedure, tested at least annually, with processor notification obligations in contracts.

**Implementation guidance.** Document the notification procedure with named roles, a decision path, and contract terms obliging processors to alert you promptly. Rehearse it. The Act sets no fixed hour count, so any internal deadline you adopt is your own commitment.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Incident Response Procedure`, `Breach Notification Log`, `Breach Response Test Record`, `Processor Agreement` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `BREACH_NOTIFICATION` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. This is an express, time-bound duty owed directly to the regulator, and section 46(2)(g) treats how a failure came to the attention of the Commission as a factor in setting any penalty.

**Remediation.** Write and approve the breach notification procedure, add processor alerting obligations to contracts, and run a tabletop exercise.

**Suggested task.** Implement and test a security breach notification procedure _(priority: CRITICAL)_

**Notes.** OPEN_QUESTION: the Act does not define security breach, does not fix a period for without undue delay, does not prescribe the content or form of the notification, and does not require notification to affected data subjects. Do not import a 72-hour deadline or a data subject notification duty from another regime; neither appears in this Act.

#### `PDPA-027-017` Breach detection capability

**Legal basis:** Section 27(5) (subsection 27(5))  
**Requirement:** `REQ-027-5` - Security breach notification to the Commission  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** The controller must be able to identify security breaches affecting personal data processed by or on behalf of the controller in order to notify the Commission without undue delay.

**Control.** Monitoring, logging and reporting channels exist that would actually surface a security breach, including one occurring at a processor.

**Assessment question.** Would you find out if personal data were breached - in your own systems and at your suppliers?

**Why this matters.** You cannot notify a breach you never detect. The notification duty is only meaningful if something is watching.

**Expected state.** Monitoring and reporting channels cover all systems holding personal data, and processor notification duties are in contracts.

**Implementation guidance.** Ensure logging and alerting on systems holding personal data, provide a staff reporting channel, and require processors to notify you promptly. Review whether the coverage matches where the data actually is.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Monitoring and Alerting Configuration`, `Incident Reporting Channel`, `Processor Agreement`, `Incident Log` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `BREACH_NOTIFICATION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Detection is the precondition for the section 27(5) duty. Undetected breaches also mean the failure reaches the Commission from another source, which section 46(2)(g) treats as relevant to penalty.

**Remediation.** Map systems holding personal data against monitoring coverage and close the gaps, starting with the highest-sensitivity holdings.

**Suggested task.** Establish breach detection coverage across all systems holding personal data _(priority: HIGH)_

**Notes.** ACT_DERIVED. The Act imposes no express detection duty. This control is derived from the notification duty in section 27(5) read with the safeguards duty in section 27(1), and adds no new legal obligation.

### Section 28 - Retention and disposal of personal data

#### `PDPA-028-001` Retention periods sourced from law or regulations

**Legal basis:** Section 28(1) (subsection 28(1))  
**Requirement:** `REQ-028-1` - Retention for the period specified in law or regulations  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Personal data used for a specified purpose shall be retained for a period specified in the relevant laws or a period prescribed in the regulations.

**Control.** For each category of personal data, the retention period is taken from the relevant written law or from regulations made under the Act, and the source is cited.

**Assessment question.** For each type of personal data you hold, have you identified the retention period set by the relevant law or regulations, and recorded where it comes from?

**Why this matters.** Section 28(1) points to periods fixed elsewhere in law rather than periods you choose. Citing the source is what makes the schedule defensible.

**Expected state.** A retention schedule in which every record type has either a cited legal source or an explicit note that none was found, with a purpose-based justification.

**Implementation guidance.** Build the retention schedule with a citation column. Where no law or regulation fixes a period, record that fact explicitly rather than inventing a number, and justify the period against the purpose under section 5(e).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Retention Schedule`, `Legal Retention Research Note`, `Data Processing Register` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Retention is expressly regulated by section 28 and is one of the few duties where the correct answer is fixed externally rather than chosen by the organisation.

**Remediation.** Research the sectoral laws applying to each record type, then complete the citation column of the retention schedule.

**Suggested task.** Identify and cite the legal retention period for each personal data record type _(priority: HIGH)_

**Notes.** REGULATORY_DETAIL_PENDING. The Act itself prescribes no retention periods. Do not populate this control with invented periods. Where regulations under section 28(2) or 64(2)(j) are in force, they govern.

#### `PDPA-028-002` Retention supports the data subject opportunity to access

**Legal basis:** Section 28(1) (subsection 28(1))  
**Requirement:** `REQ-028-1` - Retention for the period specified in law or regulations  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Retention shall ensure that the data subject has a reasonable opportunity to access the personal data where need arises.

**Control.** Retention arrangements are set so that a data subject retains a reasonable opportunity to access their personal data while it is held.

**Assessment question.** While you hold personal data, can the person it is about still get access to it if they ask?

**Why this matters.** Section 28(1) ties the retention duty to access. Data held in a form nobody can retrieve - deep archive, unindexed backups - defeats the purpose the Act gives for keeping it.

**Expected state.** Retrievability confirmed for every record type in the retention schedule, including archives.

**Implementation guidance.** Confirm that data held under the retention schedule remains retrievable for a section 33 access request throughout the retention period, including archived and backup copies.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Retention Schedule`, `Archive Retrieval Test Record`, `Data Subject Rights Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Unretrievable retained data frustrates section 33 access rights, though it is less directly harmful than over- or under-retention.

**Remediation.** Test retrieval from archive and backup for each retained record type and remediate where retrieval fails.

**Suggested task.** Test retrievability of archived personal data for access requests _(priority: MEDIUM)_

#### `PDPA-028-003` Purpose-based retention decisions documented

**Legal basis:** Section 28(1) read with section 5(e) (subsection 28(1))  
**Requirement:** `REQ-028-1` - Retention for the period specified in law or regulations  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Retention is tied to the purpose for which the personal data is used under section 25, and section 5(e) requires storage in identifiable form for no longer than is necessary for that purpose.

**Control.** Each retention decision records the purpose it serves and the reasoning behind the period chosen.

**Assessment question.** For each type of personal data, have you written down why you keep it for as long as you do?

**Why this matters.** Where no law fixes a period, the purpose is what justifies the period. Recording the reasoning is the only way to show the decision was made rather than defaulted into.

**Expected state.** A retention schedule with a recorded purpose, rationale, decision owner and decision date per record type.

**Implementation guidance.** Add purpose and rationale columns to the retention schedule. Have the data protection officer review and date the decisions.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Retention Schedule`, `Retention Decision Record`, `DPO Approval Record` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Undocumented retention decisions are difficult to defend and tend to drift towards keeping everything forever.

**Remediation.** Complete purpose and rationale columns for the retention schedule and have them approved.

**Suggested task.** Document the purpose and rationale behind each retention period _(priority: MEDIUM)_

**Notes.** ACT_DERIVED from sections 28(1), 25 and 5(e) read together. The requirement to document the reasoning is IMPLEMENTATION_GUIDANCE, not a statutory duty in its own terms.

#### `PDPA-028-004` Secure disposal at the end of the retention period

**Legal basis:** Section 28(2) read with section 64(2)(j) (subsection 28(2))  
**Requirement:** `REQ-028-2` - Ministerial regulations on retention and disposal  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The Minister may by regulations prescribe the retention and disposal of personal data held by a data controller in accordance with the purpose of retention. Section 64(2)(j) allows regulations prescribing procedures for retention and disposal of personal data held by data controllers.

**Control.** Personal data is securely disposed of at the end of its retention period, following any procedure prescribed by regulations, and disposal is recorded.

**Assessment question.** When personal data reaches the end of its retention period, is it securely disposed of, and do you keep a record that this happened?

**Why this matters.** Disposal is the step that actually reduces risk. Without a record, you cannot show it happened, and data assumed deleted has a habit of resurfacing in backups.

**Expected state.** A documented disposal procedure covering all media, with a disposal log evidencing execution.

**Implementation guidance.** Define disposal methods per medium - electronic, paper, portable media - and record each disposal event. Cover archives and backup copies. Check the current regulations for any prescribed procedure before finalising the method.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Disposal Procedure`, `Disposal Log`, `Certificate of Destruction`, `Retention Schedule` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Data retained past its period is exposed for no lawful reason, and the absence of a disposal record makes over-retention indistinguishable from deliberate hoarding.

**Remediation.** Write a disposal procedure covering every medium including backups, then start a disposal log.

**Suggested task.** Implement a secure disposal procedure and disposal log _(priority: HIGH)_

**Notes.** REGULATORY_DETAIL_PENDING. The disposal procedure is to be prescribed by regulations. Note the tension with section 29(2), which forbids permanent deletion of the pre-amendment record, and with section 59 preservation orders. Disposal must be sequenced around both.

#### `PDPA-028-005` Periodic review of the retention schedule

**Legal basis:** Section 28 read with section 64(2)(j) (subsection 28(2))  
**Requirement:** `REQ-028-2` - Ministerial regulations on retention and disposal  
**Source type:** `IMPLEMENTATION_GUIDANCE` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The retention and disposal of personal data is to be carried out in accordance with the purpose of retention, as may be prescribed by regulations.

**Control.** The retention schedule is reviewed on a defined cycle and whenever a relevant law or regulation changes.

**Assessment question.** Do you review your retention schedule regularly and update it when the law changes?

**Why this matters.** Retention periods are set outside the Act, in sectoral laws and in regulations still to be made. A schedule that is never revisited goes stale without anyone noticing.

**Expected state.** A dated review record for the retention schedule with a named owner and a next-review date.

**Implementation guidance.** Set an annual review with a named owner, and add a trigger for reviewing when regulations under section 28(2) or 64(2)(j) are made or amended.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Retention Schedule Review Record`, `Compliance Calendar`, `Regulatory Change Log` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `LOW` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. Review cadence is good practice that keeps the schedule current; the Act does not impose a review cycle.

**Remediation.** Add the retention schedule review to the annual compliance calendar.

**Suggested task.** Schedule an annual review of the retention schedule _(priority: LOW)_

**Notes.** IMPLEMENTATION_GUIDANCE. The Act imposes no periodic review duty for retention schedules. This control exists so that the organisation notices when regulations are made.

#### `PDPA-028-006` Identification of applicable sectoral retention laws

**Legal basis:** Section 28(1) (subsection 28(1))  
**Requirement:** `REQ-028-1` - Retention for the period specified in law or regulations  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Retention shall be for a period specified in the relevant laws, which requires identification of the laws relevant to the data controller records.

**Control.** The organisation has identified the written laws that fix retention periods for its records, such as tax, company, employment, health or financial services legislation.

**Assessment question.** Have you identified the other laws that tell you how long to keep your records - tax, employment, company or sector rules?

**Why this matters.** Section 28(1) sends you to the relevant laws. If you have not found them, you cannot know whether your retention periods are right.

**Expected state.** A dated legal research note listing applicable retention statutes mapped to record types.

**Implementation guidance.** Ask counsel or the compliance function to produce a list of retention-relevant statutes for your sector, and map each to the record types affected.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Legal Retention Research Note`, `Retention Schedule`, `External Counsel Advice` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `RETENTION` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Without this research the retention schedule rests on assumption, though the underlying failure surfaces through PDPA-028-001.

**Remediation.** Commission a legal review of sectoral retention obligations and map the results.

**Suggested task.** Identify the sectoral laws that fix retention periods for your records _(priority: MEDIUM)_

**Notes.** ACT_DERIVED from section 28(1). DataGuard must not pre-populate Tanzanian sectoral retention periods; they lie outside this Act.

### Section 29 - Correction of personal data

#### `PDPA-029-001` Correction request procedure

**Legal basis:** Section 29(1) (subsection 29(1))  
**Requirement:** `REQ-029-1` - Amendment of personal data on application  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Where a data subject claims that personal data in a document to which access has been given is incomplete, incorrect or misleading, or not relevant to the purpose for which the document is held, the data controller may, subject to prescribed procedures and upon being satisfied with the application, amend the personal data.

**Control.** A documented procedure receives, assesses and decides applications from data subjects to amend personal data, and records the outcome.

**Assessment question.** Do you have a procedure for handling requests from people to correct their personal data, and do you record what you decided?

**Why this matters.** Correction requests arrive by whatever channel the person happens to use. Without a procedure they get lost, and a lost request tends to become a complaint to the Commission.

**Expected state.** An approved correction procedure with a request log recording each request, decision and reasoning.

**Implementation guidance.** Define intake channels, the assessment step, the decision maker and the record kept. The Act frames amendment as something the controller may do once satisfied, so the assessment reasoning matters and should be recorded.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Data Subject Rights Procedure`, `Correction Request Log`, `Rectification Log` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Correction requests are a common trigger for section 39 complaints and for Commission orders under section 38.

**Remediation.** Write and approve the correction procedure, publish the intake channel, and start the request log.

**Suggested task.** Implement a personal data correction request procedure _(priority: HIGH)_

**Notes.** The procedure for applications is to be prescribed by regulations. OPEN_QUESTION: the Act sets no time limit for deciding a correction application, and section 29(1) is framed as a discretion (may amend) exercisable once the controller is satisfied.

#### `PDPA-029-002` Pre-amendment record preserved on correction

**Legal basis:** Section 29(2) (subsection 29(2))  
**Requirement:** `REQ-029-2` - Preservation of the pre-amendment record  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data controller shall, when making an amendment to personal data in a document under this section, ensure that he does not permanently delete the record of the text of the document as it existed prior to the amendment.

**Control.** When personal data is amended, the text of the document as it existed before the amendment is preserved and is not permanently deleted.

**Assessment question.** When you correct someone personal data, do you keep a copy of what the record said before you changed it?

**Why this matters.** This is one of the few places where the Act dictates system behaviour directly. Overwriting a record in place, with no prior version retained, breaches section 29(2) even where the correction itself was right.

**Expected state.** Every system that can amend personal data retains the prior version in a retrievable, tamper-evident form.

**Implementation guidance.** IMPLEMENTATION_GUIDANCE: maintain an auditable history or version of corrected information rather than permanently overwriting the previous record. In practice this means append-only history tables, versioned documents, or an equivalent immutable audit trail on any system holding personal data that can be amended. Retention and access rules for the preserved prior version should be defined, since it remains personal data.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `System Version History Configuration`, `Audit Log Sample`, `Correction Request Log`, `Technical Design Document` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_INTEGRITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The duty is express and absolute in its terms, and a system that overwrites in place breaches it on every correction without anyone noticing.

**Remediation.** Audit systems for in-place overwrite behaviour on personal data fields and introduce version history where it is missing.

**Suggested task.** Ensure all systems preserve the pre-amendment record when personal data is corrected _(priority: HIGH)_

**Notes.** This provision has direct architectural consequences for DataGuard itself: compliance records that are corrected must retain an auditable history rather than being overwritten. The statutory requirement is the non-deletion of the prior text; the versioning and audit-trail design described above is DataGuard implementation guidance, not a statutory prescription. OPEN_QUESTION: the Act does not say for how long the prior version must be preserved, nor how it interacts with the disposal duty under section 28.

#### `PDPA-029-003` Refusal of a correction request with reasons given

**Legal basis:** Section 29(3) (subsection 29(3))  
**Requirement:** `REQ-029-3` - Refusal with reasons  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where a data controller is not satisfied with the reasons for an application under subsection (1), he may refuse to make any amendment to the personal data and inform the applicant of the reasons for refusal.

**Control.** Where a correction request is refused, the applicant is informed of the reasons and the reasoning is recorded.

**Assessment question.** If you refuse to correct someone data, do you tell them why, and do you keep a record of your reasons?

**Why this matters.** Refusing without reasons turns a defensible decision into an apparent brush-off, and it is what usually pushes the person to complain to the Commission instead.

**Expected state.** A refusal notice template in use, with issued notices retained against the request log.

**Implementation guidance.** Use a standard refusal notice template capturing the reasons and the date sent, and retain it with the request record. Mention the availability of a complaint to the Commission under section 39.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Have you ever refused, or might you refuse, a request to correct personal data? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Refusal Notice Template`, `Correction Request Log`, `Issued Refusal Notices` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Refusal is expressly permitted by the Act; the failure mode is refusing without communicating reasons.

**Remediation.** Create a refusal notice template and require its use for every refusal.

**Suggested task.** Create a correction refusal notice template that states reasons _(priority: MEDIUM)_

### Section 30 - Prohibition on processing of sensitive personal data

#### `PDPA-030-001` Identification of sensitive personal data holdings

**Legal basis:** Section 30(1) read with the definition of sensitive personal data in section 3 (subsection 30(1))  
**Requirement:** `REQ-030-1` - Prior written consent for sensitive personal data  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person shall not process sensitive personal data without obtaining prior written consent of the data subject. Sensitive personal data includes genetic data, data related to children, data related to offences, financial transactions of the individual, security measure or biometric data; data processed for what they reveal about racial or ethnic origin, political opinions, religious or philosophical beliefs, affiliation, trade-union membership, gender and data concerning health or sex life; and any personal data otherwise considered under the laws of the country as presenting a major risk to the rights and interests of the data subject.

**Control.** The organisation has identified where it holds sensitive personal data as defined in section 3, and has flagged those holdings in its inventory.

**Assessment question.** Have you identified everywhere you hold sensitive personal data - such as health, biometric, genetic, financial transaction, children data, criminal offence data, or data revealing race, religion, political opinion, trade union membership, gender or sex life?

**Why this matters.** The definition in this Act is broader than many people expect - it includes financial transactions, data about children and security measures. Everything else in section 30 depends on knowing where this data is.

**Expected state.** The processing register flags every sensitive personal data holding against the specific limb of the definition it falls under.

**Implementation guidance.** Flag sensitive holdings in the processing register against each limb of the section 3 definition. Note that data related to children is sensitive in its own right, and that data becomes sensitive where it is processed for what it reveals.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Processing Register`, `Data Classification Policy`, `Sensitive Data Inventory` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 30(1) prohibits processing sensitive personal data without prior written consent unless an exception applies. An organisation that has not identified its sensitive holdings cannot know whether it is inside that prohibition.

**Remediation.** Run a data discovery exercise against each limb of the section 3 definition and flag the results in the register.

**Suggested task.** Identify and flag all sensitive personal data holdings _(priority: CRITICAL)_

**Notes.** The section 3 definition uses includes, so the list is not exhaustive. Limb (c) extends to personal data otherwise considered under the laws of the country as presenting a major risk to the rights and interests of the data subject.

#### `PDPA-030-002` Prior written consent obtained for sensitive personal data

**Legal basis:** Section 30(1) (subsection 30(1))  
**Requirement:** `REQ-030-1` - Prior written consent for sensitive personal data  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person shall not process sensitive personal data without obtaining prior written consent of the data subject.

**Control.** Where sensitive personal data is processed on the basis of consent, that consent is written, obtained before processing begins, and retained as a record.

**Assessment question.** Where you process sensitive personal data on the basis of consent, did you get that consent in writing before you started, and can you produce it?

**Why this matters.** The Act requires the consent to be written and prior. Consent gathered afterwards, or given verbally, does not meet the section as drafted.

**Expected state.** A retrievable written consent record per data subject for each consent-based sensitive processing activity.

**Implementation guidance.** Capture consent in a retained written form linked to the individual record, with the date and the specific processing consented to. Where consent is not the basis, record the section 30(5) exception instead - see PDPA-030-005.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data on the basis of consent? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Consent Record`, `Consent Form Template`, `Consent Management System Export` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 30(1) is a prohibition. Processing sensitive personal data without written prior consent and without an applicable exception is unlawful from the first record.

**Remediation.** Identify consent-based sensitive processing, put written consent capture in place, and either re-obtain consent or move to a documented section 30(5) exception.

**Suggested task.** Implement written prior consent capture for sensitive personal data _(priority: CRITICAL)_

**Notes.** Section 30(1) is subject to the exceptions in section 30(5). Do not assume all sensitive data processing requires consent - see PDPA-030-005. OPEN_QUESTION: the Act does not define the form or content requirements for written consent.

#### `PDPA-030-003` Consent withdrawal at any time, free of charge and without explanation

**Legal basis:** Section 30(2) (subsection 30(2))  
**Requirement:** `REQ-030-2` - Withdrawal of consent  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The consent under subsection (1) may be withdrawn by the data subject at any time and without any explanation or charges.

**Control.** Data subjects can withdraw consent to sensitive data processing at any time, without giving a reason and without any charge, and withdrawal takes effect in the systems.

**Assessment question.** Can people withdraw their consent at any time, without giving a reason and without paying anything - and does that actually stop the processing?

**Why this matters.** The Act is explicit that withdrawal is free and needs no explanation. A withdrawal route that is hard to find, or that logs the request but does not stop the processing, does not satisfy it.

**Expected state.** A working, free withdrawal channel with evidence that withdrawal stops the processing in all systems.

**Implementation guidance.** Provide a withdrawal channel at least as easy as the channel used to give consent. Ensure withdrawal propagates to downstream systems and to processors. Never require a reason and never charge a fee.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data on the basis of consent? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Consent Withdrawal Procedure`, `Withdrawal Log`, `System Configuration Evidence`, `Consent Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Continuing to process after withdrawal removes the lawful basis and returns the processing to the section 30(1) prohibition.

**Remediation.** Build the withdrawal channel, test that withdrawal propagates downstream, and remove any fee or explanation requirement.

**Suggested task.** Implement a free, no-explanation consent withdrawal channel _(priority: HIGH)_

#### `PDPA-030-004` Consent obtained from the authorised representative where the data subject cannot consent

**Legal basis:** Section 30(4) (subsection 30(4))  
**Requirement:** `REQ-030-4` - Consent on behalf of persons unable to consent  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the data subject from whom consent is sought is a minor, a person of unsound mind or any other person unable to consent, such consent shall be sought from his parents, guardian, heirs, attorneys or any other person recognised by law to be acting on behalf of that person.

**Control.** Where the data subject is a minor, of unsound mind, or otherwise unable to consent, consent is sought from the parent, guardian, heir, attorney or other legally recognised representative, and the authority is verified.

**Assessment question.** Where the person cannot give consent themselves - for example a child - do you obtain consent from their parent, guardian or other authorised representative, and do you check that authority?

**Why this matters.** Data related to children is sensitive personal data under this Act in its own right, so any service that touches children data engages both section 30(1) and section 30(4).

**Expected state.** Representative consent records held, with the basis of authority verified and recorded.

**Implementation guidance.** Identify processing involving minors or persons unable to consent. Define how representative authority is verified and recorded. Note that child takes its meaning from the Child Act.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process personal data of children, or of anyone who may be unable to give their own consent? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Consent Record`, `Guardian Authority Verification Record`, `Age Verification Procedure` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Data related to children is expressly sensitive personal data under section 3, so a defective consent chain here breaches the section 30(1) prohibition directly.

**Remediation.** Identify processing involving minors, implement representative consent capture, and verify authority before processing.

**Suggested task.** Implement representative consent capture for minors and persons unable to consent _(priority: CRITICAL)_

**Notes.** Child has the meaning ascribed to it under the Child Act (section 3). OPEN_QUESTION: the Act does not prescribe how age or capacity is to be verified.

#### `PDPA-030-005` Documented reliance on the sensitive data consent exceptions

**Legal basis:** Section 30(5)(a)-(f) (subsection 30(5), paragraph (a)-(f))  
**Requirement:** `REQ-030-5` - Exceptions to the consent requirement  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The consent requirement in subsection (1) does not apply where the processing is necessary for compliance with other written laws; is necessary to protect the vital interests of the data subject or another person where the data subject is incapable of consenting or is not represented; is necessary for the institution, trial or defence of legal claims; relates to personal data apparently made public by the data subject; is necessary for scientific research where the Commission has by special guidelines specified the circumstances; or is necessary for medical reasons in the interest of the data subject under the supervision of a health professional.

**Control.** Where sensitive personal data is processed without consent, the specific section 30(5) exception relied on is identified, justified and recorded.

**Assessment question.** Where you process sensitive personal data without consent, have you recorded which legal exception allows it?

**Why this matters.** The Act does provide exceptions, so not all sensitive processing needs consent. But the exception has to be identified and justified, not assumed.

**Expected state.** A sensitive data exception register with a limb, justification, reviewer and date for each entry.

**Implementation guidance.** For each sensitive processing activity without consent, record the exception limb, the justification and the assessment date. Have the data protection officer review. Note that reliance on the research exception depends on Commission guidelines existing - see PDPA-030-006.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data without the consent of the data subject? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Sensitive Data Exception Register`, `Legal Assessment Note`, `DPO Approval Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The exceptions are lawful routes, so the risk is relying on one without analysis. An unrecorded exception is indistinguishable from no exception during an investigation.

**Remediation.** Create the exception register, complete it for existing non-consent sensitive processing, and take advice on marginal cases.

**Suggested task.** Record the section 30(5) exception relied on for each non-consent sensitive processing activity _(priority: HIGH)_

**Notes.** Do not treat all sensitive personal data processing as unlawful without consent. Section 30(5) provides six express exceptions.

#### `PDPA-030-006` Scientific research exception conditional on Commission guidelines

**Legal basis:** Section 30(5)(e) (subsection 30(5), paragraph (e))  
**Requirement:** `REQ-030-5` - Exceptions to the consent requirement  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Subsection (1) shall not apply where the processing is necessary for the purposes of scientific research and the Commission has, by special guidelines, specified the circumstances under which such processing may be carried out.

**Control.** Reliance on the scientific research exception is conditional on the Commission having issued special guidelines specifying the circumstances, and on the processing falling within them.

**Assessment question.** If you process sensitive personal data for scientific research without consent, have you confirmed that the Commission has issued guidelines covering it and that you fall within them?

**Why this matters.** This exception is not self-executing. On the wording of the Act it depends on the Commission having issued special guidelines, so the exception cannot be assumed to be available.

**Expected state.** A documented confirmation of the applicable Commission guidelines, or a decision not to rely on this exception.

**Implementation guidance.** Confirm the existence and terms of any Commission special guidelines before relying on this limb. If none exist, do not rely on it - seek consent or another exception, or take legal advice.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process sensitive personal data for scientific research purposes without consent? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Commission Guidelines Reference`, `Research Ethics Approval`, `Legal Assessment Note` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. If no guidelines exist, reliance on this limb leaves the processing inside the section 30(1) prohibition.

**Remediation.** Confirm the position with the Commission or with counsel before relying on the research exception.

**Suggested task.** Confirm the availability of the section 30(5)(e) scientific research exception _(priority: HIGH)_

**Notes.** REGULATORY_DETAIL_PENDING. OPEN_QUESTION: whether the Commission has issued the special guidelines referred to in section 30(5)(e) is outside the Act and must be verified. DataGuard must not presume they exist.

#### `PDPA-030-007` Medical processing supervised by a health professional

**Legal basis:** Section 30(5)(f) (subsection 30(5), paragraph (f))  
**Requirement:** `REQ-030-5` - Exceptions to the consent requirement  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Subsection (1) shall not apply where the processing is necessary for the purposes of medical reasons in the interest of the data subject, and the sensitive personal data concerned is processed under the supervision of a health professional in accordance with the law governing such health care services.

**Control.** Sensitive personal data processed for medical reasons without consent is processed under the supervision of a health professional in accordance with the law governing health care services.

**Assessment question.** Where you process health-related sensitive data for medical reasons without consent, is that processing supervised by a recognised health professional?

**Why this matters.** The exception has two limbs: the medical purpose in the interest of the data subject, and supervision by a health professional. Both must hold.

**Expected state.** A record of the supervising health professional for each medical processing activity relying on this exception.

**Implementation guidance.** Record the supervising health professional and the basis of their recognition under the relevant law. Health professional is defined in section 3 as a person providing health care services and recognised as such by the relevant law.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process sensitive personal data for medical reasons without the consent of the data subject? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Health Professional Supervision Record`, `Professional Registration Evidence`, `Clinical Governance Policy` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Without the supervision limb the exception fails and the processing falls back inside the section 30(1) prohibition.

**Remediation.** Identify the supervising health professional for each activity and record the basis of their recognition.

**Suggested task.** Record health professional supervision for medical sensitive data processing _(priority: HIGH)_

#### `PDPA-030-008` Monitoring of absolute prohibitions on sensitive data processing

**Legal basis:** Section 30(3) (subsection 30(3))  
**Requirement:** `REQ-030-3` - Circumstances where the prohibition cannot be removed by consent  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The Minister may, by regulations, determine circumstances in which the prohibition to process the personal data referred to in this section cannot be removed even with the data subject consent.

**Control.** The organisation monitors for regulations made under section 30(3) that would prohibit certain sensitive data processing even with consent, and checks its processing against them.

**Assessment question.** Do you check whether any regulations forbid certain sensitive data processing outright, even where you have consent?

**Why this matters.** Section 30(3) allows for categories of processing that no consent can authorise. If such regulations are made, consent-based processing in those categories becomes unlawful overnight.

**Expected state.** A regulatory monitoring record covering section 30(3), with an assessment against any regulations in force.

**Implementation guidance.** Add section 30(3) regulations to the regulatory monitoring list. Where regulations exist, check each sensitive processing activity against them and stop any that falls inside an absolute prohibition.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Change Log`, `Legal Assessment Note`, `Sensitive Data Exception Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The obligation is contingent on regulations that may not yet exist, but the consequence if they are made and missed is that consent-based processing becomes unlawful.

**Remediation.** Add section 30(3) to the regulatory monitoring list with a named owner.

**Suggested task.** Monitor for regulations made under section 30(3) _(priority: LOW)_

**Notes.** REGULATORY_DETAIL_PENDING. The Act does not itself identify any such circumstance. DataGuard must not pre-populate any absolute prohibition.

#### `PDPA-030-009` Enhanced security and access restriction for sensitive personal data

**Legal basis:** Section 30 read with section 27(2)(b) (subsection 30(1))  
**Requirement:** `REQ-030-1` - Prior written consent for sensitive personal data  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Section 27(2)(b) requires the level of security to take into account the nature of the personal data to be protected and the potential risks to the data subject. Section 30 subjects sensitive personal data to a specific prohibition and consent regime.

**Control.** Sensitive personal data is subject to stricter access restrictions and stronger safeguards than other personal data, in proportion to its nature and the risk to data subjects.

**Assessment question.** Is access to sensitive personal data more tightly restricted than access to your ordinary personal data?

**Why this matters.** The Act treats sensitive data as a distinct category with its own regime. Applying identical controls to all data means the sensitive holdings are under-protected.

**Expected state.** A documented enhanced control set applied to sensitive holdings, with periodic access reviews evidenced.

**Implementation guidance.** Restrict access to sensitive holdings to named roles, log access, and apply stronger authentication and encryption. Review the access list on a defined cycle.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Access Review Records`, `Data Classification Policy`, `Encryption Standard` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Exposure of sensitive personal data carries the highest potential harm to data subjects, which is itself an express section 27(2)(b) factor.

**Remediation.** Define a sensitive data control tier, apply it to the flagged holdings, and start periodic access reviews.

**Suggested task.** Apply enhanced access restrictions to sensitive personal data holdings _(priority: CRITICAL)_

**Notes.** ACT_DERIVED from sections 27(2)(b) and 30 read together. It adds no new legal obligation; it applies the existing security duty at the level the nature of the data requires.

#### `PDPA-030-010` Documentation of sensitive personal data processing

**Legal basis:** Section 30 read with section 27(3) (subsection 30(1))  
**Requirement:** `REQ-030-1` - Prior written consent for sensitive personal data  
**Source type:** `INTERPRETATION`

> **Statutory text as mapped.** Compliance with section 30 requires the controller to be able to show, for each sensitive processing activity, whether it rests on prior written consent or on a section 30(5) exception.

**Control.** A consolidated record shows, for each sensitive processing activity, the data category, the legal footing relied on, the consent or exception evidence, and the responsible owner.

**Assessment question.** Do you keep a single record showing every use of sensitive personal data and what makes each one lawful?

**Why this matters.** When the Commission asks about sensitive data, it will ask activity by activity. A consolidated record is the difference between answering in an hour and answering in a month.

**Expected state.** A maintained sensitive processing record reviewed by the data protection officer at least annually.

**Implementation guidance.** Extend the processing register with a sensitive data view combining the flags from PDPA-030-001, the consent records, the section 30(5) exception entries and the owner. Have the data protection officer review it periodically.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you process any sensitive personal data? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Sensitive Data Inventory`, `Data Processing Register`, `DPO Report`, `Consent Record` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `SENSITIVE_DATA` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Without this record the organisation cannot demonstrate the lawfulness of its sensitive processing, even where each individual activity happens to be lawful.

**Remediation.** Build the consolidated sensitive processing view and assign it to the data protection officer for periodic review.

**Suggested task.** Maintain a consolidated record of all sensitive personal data processing _(priority: HIGH)_

**Notes.** INTERPRETATION. The Act does not expressly require a sensitive data register. DataGuard treats it as the practical means of demonstrating compliance with section 30 and of supporting the data protection officer function under section 27(3).


---

## Part V - Transborder Data Flow

### Section 31 - Transfer of personal data to state with adequate data protection

#### `PDPA-031-001` Identification and inventory of international transfers

**Legal basis:** Sections 31 and 32 read with section 5(h) (subsection 31(2))  
**Requirement:** `REQ-031-2` - Transfer to a state with adequate protection  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Part V governs transborder flow, defined in section 3 as any international cross-border flows of personal data by means of electronic transmission or other means. Compliance requires the controller to know which transfers it makes.

**Control.** All transborder flows of personal data are identified and recorded, including electronic transmission and any other means.

**Assessment question.** Have you listed every occasion on which personal data leaves Tanzania, by any means?

**Why this matters.** The statutory definition covers transfers by electronic transmission or other means. Cloud hosting, offshore support access, group reporting and even couriered paper all count.

**Expected state.** A complete transfer inventory, reviewed at least annually and on any change of supplier or hosting arrangement.

**Implementation guidance.** Build a transfer inventory covering hosting and cloud services, offshore support and administration access, intra-group reporting, offshore backups and disaster recovery, and any physical movement of records. Record recipient, destination country, data categories and purpose for each.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Does any personal data you hold leave Tanzania by any means? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Transfer Inventory`, `Cloud Hosting Register`, `Data Flow Diagram`, `Processor Inventory` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Everything else in Part V depends on knowing which transfers exist. Undiscovered transfers are unassessed transfers.

**Remediation.** Interview IT and business owners, review supplier contracts and hosting arrangements, and build the inventory before assessing any individual transfer.

**Suggested task.** Build a complete inventory of transborder personal data flows _(priority: HIGH)_

**Notes.** ACT_DERIVED. The Act does not expressly require a transfer inventory. It is the practical precondition for demonstrating compliance with sections 31 and 32.

#### `PDPA-031-002` Destination country legal framework assessed

**Legal basis:** Section 31(2) (subsection 31(2))  
**Requirement:** `REQ-031-2` - Transfer to a state with adequate protection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data shall be transferred to a country that has a legal framework that provides for adequate data protection.

**Control.** For each destination, the organisation has assessed whether that country has a legal framework providing adequate data protection, and has recorded the assessment.

**Assessment question.** For each country you send personal data to, have you assessed whether its laws provide adequate data protection, and written that assessment down?

**Why this matters.** Section 31 applies to countries with an adequate legal framework and section 32 to those without. Which section governs a transfer depends on this assessment.

**Expected state.** A dated adequacy assessment per destination country, held with the transfer inventory.

**Implementation guidance.** Assess each destination country using the section 32(2) factors, which supply the statutory criteria for adequacy. Record the conclusion, the date and who made it. Reassess when the destination law changes.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Transfer Assessment`, `Legal Assessment Note`, `External Counsel Advice` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The adequacy conclusion determines which statutory route applies, and getting it wrong invalidates the basis for every transfer to that destination.

**Remediation.** Commission a country-by-country assessment against the section 32(2) factors, starting with your highest-volume destinations.

**Suggested task.** Assess the data protection legal framework of each destination country _(priority: HIGH)_

**Notes.** DataGuard must not hard-code any country as adequate or inadequate. The Act contains no list of adequate countries, and no adequacy decision is reproduced in it. Adequacy is assessed by the data controller under section 32(2), subject to the Commission powers under sections 31(1) and 32(5) and to any regulations under section 32(3).

#### `PDPA-031-003` Recipient establishes the statutory ground for the transfer

**Legal basis:** Section 31(2)(a)-(b) (subsection 31(2), paragraph (a)-(b))  
**Requirement:** `REQ-031-2` - Transfer to a state with adequate protection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A transfer to a country with an adequate legal framework requires that the recipient establishes either that the personal data is necessary for the performance of a task carried out in the public interest or pursuant to the lawful functions of a data controller, or that there is a necessity for the transfer and no reason to assume that the data subject legitimate interests might be prejudiced by the transfer or by the processing in the recipient country.

**Control.** For each transfer under section 31, the recipient has established one of the two statutory grounds, and the organisation holds that record.

**Assessment question.** For each transfer, has the recipient shown you why the data is needed, and have you kept that in writing?

**Why this matters.** The Act puts the burden on the recipient to establish the ground. If the recipient has never been asked, the ground has not been established.

**Expected state.** A written statement from each recipient establishing the ground, held with the transfer record.

**Implementation guidance.** Ask the recipient to state in writing which ground applies and why. For the second ground, record the assessment that the data subject legitimate interests would not be prejudiced.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data to a country you have assessed as having an adequate legal framework? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Recipient Necessity Statement`, `Transfer Assessment`, `Data Sharing Agreement` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Without the recipient statement the transfer has no established ground, and the record cannot be reconstructed after the fact.

**Remediation.** Request written necessity statements from existing recipients and build the request into the onboarding process for new ones.

**Suggested task.** Obtain written necessity statements from transfer recipients _(priority: HIGH)_

#### `PDPA-031-004` Controller provisional evaluation of transfer necessity

**Legal basis:** Section 31(3) (subsection 31(3))  
**Requirement:** `REQ-031-3` - Provisional evaluation of necessity  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data controller shall, notwithstanding subsection (2), be required to make a provisional evaluation of the necessity for the transfer of the personal data.

**Control.** Before transferring, the controller carries out and records its own provisional evaluation of whether the transfer is necessary, independently of the recipient statement.

**Assessment question.** Before you send personal data abroad, do you make and record your own judgement that the transfer is necessary?

**Why this matters.** The Act imposes this duty on the controller in addition to the recipient having to establish a ground. Relying only on what the recipient says does not discharge it.

**Expected state.** A dated provisional evaluation on file for every transfer, completed before the transfer began.

**Implementation guidance.** Complete a short provisional evaluation per transfer: what data, why it must go, whether a lesser alternative would work, and who decided. Do it before the transfer starts.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Transfer Assessment`, `Provisional Necessity Evaluation`, `DPO Approval Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This is an express, controller-specific duty that is separate from the recipient obligation and is frequently overlooked.

**Remediation.** Create a provisional evaluation template and complete it retrospectively for live transfers, then make it a pre-transfer gate.

**Suggested task.** Complete a provisional necessity evaluation for every cross-border transfer _(priority: HIGH)_

**Notes.** OPEN_QUESTION: the Act does not define what a provisional evaluation must contain, nor when it ceases to be provisional.

#### `PDPA-031-005` Recipient maintains verifiable evidence of necessity

**Legal basis:** Section 31(4) (subsection 31(4))  
**Requirement:** `REQ-031-4` - Subsequent verifiability of necessity  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The recipient shall ensure that the necessity for the transfer of the personal data can be subsequently verified.

**Control.** Transfer arrangements require the recipient to keep records that allow the necessity for the transfer to be verified later.

**Assessment question.** Have you required your overseas recipients to keep records that would let the necessity for the transfer be checked afterwards?

**Why this matters.** The duty falls on the recipient, but you are the one who will be asked. A contractual record-keeping obligation is how you make it real.

**Expected state.** A verification and record-keeping clause in every cross-border transfer agreement.

**Implementation guidance.** Include a record-keeping and verification clause in the transfer agreement, with a right to request evidence. Note that this obligation is placed on the recipient by the Act.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Sharing Agreement`, `Processor Agreement`, `Transfer Assessment` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The statutory duty is on the recipient, so the controller exposure is indirect, but without the clause the controller has no way to obtain the evidence.

**Remediation.** Add a verification clause at the next contract renewal for each recipient.

**Suggested task.** Add a necessity verification clause to cross-border transfer agreements _(priority: MEDIUM)_

**Notes.** Section 31(4) imposes the duty on the recipient. DataGuard treats securing it contractually as the controller practical route, which is IMPLEMENTATION_GUIDANCE rather than a statutory duty on the controller.

#### `PDPA-031-006` Recipient processing limited to the transfer purpose

**Legal basis:** Section 31(5) (subsection 31(5))  
**Requirement:** `REQ-031-5` - Recipient processing limited to transfer purposes  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data controller shall ensure that the recipient shall process the personal data for the purposes for which it was transferred.

**Control.** The controller ensures, contractually and in practice, that the recipient processes the transferred data only for the purposes for which it was transferred.

**Assessment question.** Do you make sure your overseas recipients only use the data for the purpose you sent it for?

**Why this matters.** The Act makes this the controller responsibility, not the recipient. Sending the data does not transfer the accountability.

**Expected state.** Purpose limitation clauses in every transfer agreement plus periodic confirmation from the recipient.

**Implementation guidance.** State the permitted purposes explicitly in the transfer agreement, prohibit onward use and onward transfer without consent, and seek periodic confirmation of compliance.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Data Sharing Agreement`, `Processor Agreement`, `Recipient Compliance Confirmation` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The duty to ensure rests expressly on the controller, so recipient misuse is a controller failure.

**Remediation.** Add explicit purpose limitation and onward transfer clauses, and introduce annual confirmation requests.

**Suggested task.** Bind recipients to the transfer purpose and obtain periodic confirmation _(priority: HIGH)_

#### `PDPA-031-007` Compliance with Commission transfer prohibitions

**Legal basis:** Section 31(1) (subsection 31(1))  
**Requirement:** `REQ-031-1` - Commission power to prohibit transfers  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission may, subject to the provisions of this Act, prohibit the transfer of personal data to a place outside the country.

**Control.** The organisation monitors for and complies with any prohibition issued by the Commission on transfers to a place outside the country.

**Assessment question.** Do you check whether the Commission has prohibited transfers to any of the places you send data to, and could you stop such a transfer quickly?

**Why this matters.** A prohibition can arrive at any time. Being able to identify and suspend the affected flows quickly is what turns a notice into a manageable event.

**Expected state.** Regulatory monitoring covers Commission transfer prohibitions, and the transfer inventory supports suspension by destination.

**Implementation guidance.** Add Commission announcements to the regulatory monitoring list. Ensure the transfer inventory is structured so affected flows can be identified and suspended by destination.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Change Log`, `Transfer Inventory`, `Incident and Escalation Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. A prohibition is a contingent event, but continuing a prohibited transfer would be a direct and serious contravention.

**Remediation.** Add Commission transfer prohibitions to the regulatory monitoring list and confirm the inventory can be filtered by destination.

**Suggested task.** Monitor for and be able to act on Commission transfer prohibitions _(priority: MEDIUM)_

### Section 32 - Transfer of personal data to state without adequate data protection

#### `PDPA-032-001` Transfer solely to permit processing authorised to the controller

**Legal basis:** Section 32(1) (subsection 32(1))  
**Requirement:** `REQ-032-1` - Transfer to other recipient states  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Personal data may be transferred to recipient states other than those referred to under section 31 if an adequate level of protection is ensured in the country of the recipient and the personal data is transferred solely to permit processing authorised to be undertaken by the controller.

**Control.** Transfers under section 32(1) are limited to processing that the controller is itself authorised to undertake, and this limitation is documented and enforced.

**Assessment question.** Where you transfer data under section 32, is it only so the recipient can carry out processing you are yourself authorised to do?

**Why this matters.** A transfer cannot be used to have someone abroad do something you could not lawfully do yourself. This limit is easy to breach when a supplier offers an extra service.

**Expected state.** A documented mapping of recipient processing to the controller authorised processing for each section 32 transfer.

**Implementation guidance.** Map the recipient processing operations back to the controller own authorised purposes. Reject any recipient activity that exceeds them.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data to a country not assessed under section 31 as having an adequate legal framework? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Transfer Assessment`, `Data Sharing Agreement`, `Data Processing Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Transfers that enable processing beyond the controller own authority breach both section 32(1) and the purpose limitation duties in sections 25 and 26.

**Remediation.** Compare each recipient scope of processing against your own authorised purposes and narrow the contract where it exceeds them.

**Suggested task.** Map recipient processing to the controller authorised processing for section 32 transfers _(priority: HIGH)_

#### `PDPA-032-002` Adequacy assessment against the six statutory factors

**Legal basis:** Section 32(2)(a)-(f) (subsection 32(2), paragraph (a)-(f))  
**Requirement:** `REQ-032-2` - Adequacy assessment factors  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The adequacy of the level of protection afforded by the relevant third country shall be assessed in the light of all the circumstances surrounding the transfer, the nature of the personal data, the purpose and duration of the proposed processing, the recipient country, the relevant laws in force in the third country, and the professional rules and security measures complied with in that country.

**Control.** Each destination country adequacy assessment addresses all six factors listed in section 32(2) and records the conclusion.

**Assessment question.** Does your assessment of each destination country cover all six factors the Act lists, including the laws in force there and the security measures actually followed?

**Why this matters.** The Act enumerates the factors. An assessment that skips some of them is incomplete on the face of the section, whatever its conclusion.

**Expected state.** A completed six-factor assessment per destination country, approved and dated, reviewed at least annually.

**Implementation guidance.** Use an assessment template with one section per factor (a) to (f). Record the evidence considered, the conclusion and the date, and have the data protection officer approve it.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Transfer Assessment`, `Adequacy Assessment Template`, `External Counsel Advice`, `DPO Approval Record` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The factors are enumerated in the Act, so an incomplete assessment is visibly deficient and cannot support the transfer.

**Remediation.** Adopt a six-factor template and rework existing assessments against it, taking legal input on the third country laws factor.

**Suggested task.** Complete a six-factor adequacy assessment for each destination country _(priority: HIGH)_

**Notes.** DataGuard must not pre-populate conclusions for any country. Factor (e), the relevant laws in force in the third country, generally requires legal input.

#### `PDPA-032-003` Monitoring of prohibited transfer categories set by regulations

**Legal basis:** Section 32(3) read with section 64(2)(k) (subsection 32(3))  
**Requirement:** `REQ-032-3` - Regulations specifying unauthorised transfers  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The Minister shall, after consultation with the Commission and by regulations, specify categories of processing for which and the circumstances in which the transfer of personal data to countries outside the United Republic is not authorised.

**Control.** The organisation monitors for regulations specifying categories of processing and circumstances in which transfers are not authorised, and checks its transfers against them.

**Assessment question.** Do you check whether regulations forbid transferring certain categories of data or in certain circumstances?

**Why this matters.** Section 32(3) uses shall, so these regulations are contemplated rather than optional. When they arrive they may prohibit transfers you are currently making.

**Expected state.** A regulatory monitoring record covering section 32(3), with an assessment of the transfer inventory against any regulations in force.

**Implementation guidance.** Add section 32(3) regulations to the regulatory monitoring list. When made, assess every entry in the transfer inventory against them.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data outside Tanzania? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Change Log`, `Transfer Inventory`, `Legal Assessment Note` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The obligation is contingent on regulations, but a prohibited transfer that continues unnoticed is a serious contravention.

**Remediation.** Add section 32(3) and section 64(2)(k) to the regulatory monitoring list.

**Suggested task.** Monitor for regulations prohibiting categories of transborder transfer _(priority: MEDIUM)_

**Notes.** REGULATORY_DETAIL_PENDING. The Act does not itself specify any prohibited category. DataGuard must not pre-populate one.

#### `PDPA-032-004` Documented reliance on a section 32(4) transfer derogation

**Legal basis:** Section 32(4)(a)-(f) (subsection 32(4), paragraph (a)-(f))  
**Requirement:** `REQ-032-4` - Derogations permitting transfer  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A transfer to a country outside the United Republic or to a country without an adequate level of protection may take place where the data subject has consented to the proposed transfer; the transfer is necessary for the performance of a contract between the data subject and the controller or for pre-contractual measures taken at the data subject request; the transfer is necessary for the conclusion or performance of a contract between the controller and a third party in the interest of the data subject; the transfer is necessary or legally required on public interest grounds or for the institution, trial or defence of legal claims; the transfer is necessary to protect the legitimate interests of the data subject; or the transfer is made in accordance with the law and is intended to provide information to the public and is open for consultation.

**Control.** Where a transfer relies on a derogation, the specific limb of section 32(4) is identified, justified and recorded before the transfer.

**Assessment question.** Where you transfer data to a country without adequate protection, have you recorded which specific legal exception allows it?

**Why this matters.** The derogations are specific and mostly narrow. Recording which one applies is what distinguishes a considered decision from an unexamined transfer.

**Expected state.** A derogation register with limb, justification, approver and date for every transfer relying on section 32(4).

**Implementation guidance.** Record the limb, the justification, the approver and the date for each transfer relying on a derogation. Where consent is relied on, hold the consent record and confirm it covers the proposed transfer specifically.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you transfer personal data to a country that does not have an adequate level of protection? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Transfer Derogation Register`, `Consent Record`, `Contract`, `Legal Assessment Note` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. A transfer to an inadequate destination with no recorded derogation has no lawful basis, and the derogations cannot be reconstructed retrospectively with any credibility.

**Remediation.** Create the derogation register, assess each existing transfer to an inadequate destination, and suspend any transfer with no available limb.

**Suggested task.** Record the section 32(4) derogation relied on for each transfer _(priority: HIGH)_

#### `PDPA-032-005` Commission authorisation on the basis of adequate safeguards

**Legal basis:** Section 32(5) (subsection 32(5))  
**Requirement:** `REQ-032-5` - Commission authorisation on adequate safeguards  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission may authorise a transfer of personal data to a country which does not have an adequate level of protection if the data controller satisfies the Commission that there are adequate safeguards with respect to the protection of personal data, fundamental rights and freedoms of the data subject and the exercise of the data subject rights, and that such safeguards can be appropriated through adequate legal and security measures and contractual clauses in particular.

**Control.** Where a transfer to an inadequate destination proceeds on the basis of safeguards, the organisation has satisfied the Commission and holds the authorisation.

**Assessment question.** Where you rely on safeguards such as contract clauses to transfer data to a country without adequate protection, have you obtained the Commission authorisation?

**Why this matters.** On the wording of section 32(5) the safeguards route runs through the Commission. Putting contractual clauses in place is the evidence you present, not the authorisation itself.

**Expected state.** A Commission authorisation on file for each transfer relying on the safeguards route, with the safeguards package retained.

**Implementation guidance.** Assemble the safeguards package - contractual clauses, security measures, and how data subject rights will be exercised - and apply to the Commission. Retain the authorisation and the conditions attached to it.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you rely on contractual clauses or other safeguards to transfer personal data to a country without adequate protection? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Commission Authorisation`, `Contractual Safeguards Package`, `Transfer Assessment`, `Security Measures Description` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `CROSS_BORDER_TRANSFER` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Relying on safeguards without the Commission authorisation leaves an ongoing transfer to an inadequate destination with no lawful footing.

**Remediation.** Prepare the safeguards package and apply to the Commission, or move the transfer onto a section 32(4) derogation, or suspend it.

**Suggested task.** Obtain Commission authorisation for safeguards-based transfers _(priority: CRITICAL)_

**Notes.** OPEN_QUESTION: the Act does not prescribe the application procedure, the form of the safeguards, or the time within which the Commission must decide. It also does not publish approved standard contractual clauses.


---

## Part VI - Rights of Data Subjects

### Section 33 - Right of access to personal data

#### `PDPA-033-001` Right of access - confirmation of processing

**Legal basis:** Section 33(1)(a) (subsection 33(1), paragraph (a))  
**Requirement:** `REQ-033-1A` - Right to confirmation of processing  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data subject shall be entitled to be informed by any data controller whether his personal data are being processed by or on behalf of that data controller.

**Control.** On request, the organisation can confirm to an individual whether it processes their personal data, including processing carried out on its behalf.

**Assessment question.** If someone asks whether you hold or use their personal data, can you find out and tell them - including data held by your suppliers on your behalf?

**Why this matters.** This is the first step of the access right. Answering it requires being able to search across your systems and your processors, which many organisations cannot do quickly.

**Expected state.** A documented access request procedure with a search map covering all systems and processors, and a request log.

**Implementation guidance.** Define the request intake channel, identity verification, and the systems and processors to be searched. Keep a request log. Test the search end to end at least annually.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Data Subject Rights Procedure`, `Rights Request Log`, `System Search Map`, `Processor Agreement` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Access is the most frequently exercised right and the most common subject of complaints to a regulator.

**Remediation.** Write the access procedure, map where personal data lives, and rehearse a request end to end.

**Suggested task.** Implement a data subject access request procedure _(priority: HIGH)_

**Notes.** OPEN_QUESTION: the Act does not prescribe a response time, a form of request, or any fee for access requests under section 33.

#### `PDPA-033-002` Right of access - description of data, purposes and recipients

**Legal basis:** Section 33(1)(b)(i)-(iii) (subsection 33(1), paragraph (b))  
**Requirement:** `REQ-033-1B` - Right to a description of the data, purposes and recipients  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data subject shall be entitled to be given a description of the personal data of which that individual is the data subject, the purposes for which they are being processed, and the recipients or classes of recipients to whom they are or may be disclosed.

**Control.** The organisation can provide a description of the personal data held about an individual, the purposes of processing, and the recipients or classes of recipients.

**Assessment question.** Can you tell someone what personal data you hold about them, why you use it, and who you share it with?

**Why this matters.** All three elements are required. The recipients element is the one most often missed, and it depends on having a disclosure register.

**Expected state.** A response template covering the three statutory elements, with completed responses retained.

**Implementation guidance.** Use a response template covering all three elements. Draw the purposes from the processing register and the recipients from the disclosure register so the answer is consistent with your other records.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Access Response Template`, `Rights Request Log`, `Data Processing Register`, `Disclosure Register` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. An incomplete access response is itself a contravention and is easy for the Commission to verify against your own registers.

**Remediation.** Build the response template and link it to the processing and disclosure registers.

**Suggested task.** Create an access response template covering data, purposes and recipients _(priority: HIGH)_

#### `PDPA-033-003` Disclosure of the logic involved in automated decision making

**Legal basis:** Section 33(1)(c) (subsection 33(1), paragraph (c))  
**Requirement:** `REQ-033-1C` - Right to be informed of the logic of automated decisions  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where processing by automatic means for the purpose of evaluating matters relating to the data subject has constituted or is likely to constitute the sole basis for any decision significantly affecting him, the data subject is entitled to be informed of the logic involved in that decision making.

**Control.** Where an automated evaluation is or is likely to be the sole basis of a significant decision, the organisation can explain the logic involved to the data subject.

**Assessment question.** Where a computer alone makes or is likely to make a decision that significantly affects someone, can you explain to them how that decision is reached?

**Why this matters.** This obliges you to be able to describe how your model or rule set reaches a decision. Systems bought or built without that in mind cannot meet it later without rework.

**Expected state.** A maintained inventory of automated decision systems, each with an approved plain-language logic description.

**Implementation guidance.** Inventory automated evaluation and scoring systems. For each, prepare a plain-language description of the logic. Note that the right attaches where such processing is likely to constitute the sole basis, not only where it already has.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you use automated processing to evaluate people in a way that is, or could be, the sole basis of a decision significantly affecting them? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Automated Decision System Inventory`, `Model Logic Description`, `Access Response Template`, `Technical Design Document` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `AUTOMATED_DECISION_MAKING` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Automated evaluation carries significant potential for harm, and the inability to explain the logic is often structural rather than procedural.

**Remediation.** Inventory automated evaluation systems and commission a plain-language logic description for each, starting with those affecting credit, employment or access to services.

**Suggested task.** Prepare plain-language logic descriptions for automated decision systems _(priority: HIGH)_

**Notes.** OPEN_QUESTION: the Act does not define significantly affecting or specify the required depth of the logic description.

#### `PDPA-033-004` Documented reliance on access exceptions

**Legal basis:** Section 33(2)(a)-(c) (subsection 33(2), paragraph (a)-(c))  
**Requirement:** `REQ-033-2` - Exceptions to informing the data subject  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller is not obliged to inform the data subject where the personal data are not accurate, are involved in any investigation in accordance with the laws, or have been prohibited by court order.

**Control.** Where an access request is refused in reliance on section 33(2), the specific ground is identified and recorded.

**Assessment question.** Where you decline to give someone information about their data, have you recorded which of the three legal grounds applies?

**Why this matters.** The grounds are narrow and specific. Recording which one applies protects the decision if it is later challenged.

**Expected state.** Every refused access request has a recorded ground, reasoning and supporting document where applicable.

**Implementation guidance.** Record the ground and the reasoning against the request log. For the investigation ground, record the investigation reference. For the court order ground, retain the order.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Have you refused, or might you refuse, an access request? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Rights Request Log`, `Refusal Notice Template`, `Court Order`, `Legal Assessment Note` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The exceptions are lawful, so the risk is over-reliance on them without a recorded basis.

**Remediation.** Add a ground field to the request log and require it for every refusal.

**Suggested task.** Record the section 33(2) ground for each refused access request _(priority: MEDIUM)_

**Notes.** Section 33(2)(a) removes the obligation where the personal data are not accurate. INTERPRETATION: this ground is unusual and its scope is not elaborated in the Act. Take advice before relying on it.

### Section 34 - Right to prevent processing likely to affect data subject

#### `PDPA-034-001` Right to prevent processing likely to cause substantial damage

**Legal basis:** Section 34(1) (subsection 34(1))  
**Requirement:** `REQ-034-1` - Right to prevent processing likely to cause substantial damage  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** A data subject is entitled to require a data controller, through procedures prescribed in the regulations, to suspend or not to begin processing of any personal data in respect of which he is the data subject, if the processing is likely to cause substantial damage to him or to another person.

**Control.** A procedure receives and assesses requests to suspend or not begin processing on substantial damage grounds, and can technically implement a suspension.

**Assessment question.** If someone asks you to stop or not start processing their data because it would cause them substantial damage, can you assess that and actually suspend the processing?

**Why this matters.** Suspension has to work in the systems, not just on paper. Many platforms can delete a record but cannot pause processing of it.

**Expected state.** A documented procedure plus verified technical capability to suspend processing on a per-record basis.

**Implementation guidance.** Define intake, assessment criteria and the decision maker, and confirm each relevant system can suspend rather than only delete. Record the decision and its reasons either way.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Data Subject Rights Procedure`, `Rights Request Log`, `System Suspension Capability Evidence` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DATA_SUBJECT_RIGHTS` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. The right is engaged precisely where substantial damage is in prospect, so a failure here coincides with the greatest potential harm.

**Remediation.** Add the right to the rights procedure and verify suspension capability in each system holding personal data.

**Suggested task.** Implement the right to prevent processing, including technical suspension capability _(priority: HIGH)_

**Notes.** The procedure is to be prescribed by regulations. Section 34(2) provides that the right does not apply in the exceptions provided under the Act. OPEN_QUESTION: substantial damage is not defined, and section 34(2) does not identify which exceptions it refers to.

### Section 35 - Right to prevent processing of personal data for direct marketing purposes

#### `PDPA-035-001` Right to stop direct marketing

**Legal basis:** Section 35(1) and 35(3) (subsection 35(1))  
**Requirement:** `REQ-035-1` - Right to stop direct marketing  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** A data subject may, through the procedures prescribed in the regulations, require the data controller to stop processing his personal data for purposes of direct marketing. Direct marketing includes the communication by whatever means of any advertising or marketing material which is directed at an individual.

**Control.** A working opt-out mechanism stops direct marketing to an individual on request, across all channels and all marketing systems.

**Assessment question.** If someone asks you to stop marketing to them, does that stop across every channel you use - email, SMS, phone, post and any other?

**Why this matters.** The definition covers advertising or marketing material by whatever means. An opt-out that only stops email leaves the obligation unmet.

**Expected state.** A central suppression list honoured by every marketing channel and by third party marketing partners, with propagation tested.

**Implementation guidance.** Maintain a suppression list that all marketing systems consult, including any run by agencies or partners. Test that an opt-out propagates within a defined internal period, and record opt-outs.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you carry out direct marketing to individuals by any means? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Suppression List Configuration`, `Marketing Opt-out Log`, `Data Subject Rights Procedure`, `Agency Agreement` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DIRECT_MARKETING` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Failures are immediately visible to the individual, easily evidenced by them, and typically repeat with every campaign until fixed.

**Remediation.** Consolidate suppression into a single list, connect every marketing system to it, and extend the obligation to agencies contractually.

**Suggested task.** Implement a cross-channel marketing suppression capability _(priority: HIGH)_

**Notes.** The procedure is to be prescribed by regulations. OPEN_QUESTION: the Act sets no period within which marketing must cease after a request.

#### `PDPA-035-002` Agreements for use of personal data for pecuniary benefit

**Legal basis:** Section 35(2) (subsection 35(2))  
**Requirement:** `REQ-035-2` - Agreement for pecuniary benefit  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data subject may enter into agreement with a data controller for purposes of using or processing his personal data for pecuniary benefits.

**Control.** Where an individual agrees to their personal data being used for pecuniary benefit, that agreement is documented and its scope is respected.

**Assessment question.** Do you have any arrangements where people agree to let you use their personal data in return for a payment or benefit, and are those agreements documented?

**Why this matters.** The Act expressly contemplates these arrangements. They still have to respect the rest of the Act, including the marketing opt-out right in section 35(1).

**Expected state.** Written agreements on file with defined scope and duration, and no conflict with other rights under the Act.

**Implementation guidance.** Document the agreement, its scope and its duration. Confirm the arrangement does not override the individual ability to withdraw or to stop marketing, and take advice where the arrangement involves sensitive personal data.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you have arrangements where individuals receive payment or another benefit for the use of their personal data? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Use Agreement`, `Consent Record`, `Legal Assessment Note` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DIRECT_MARKETING` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The arrangement is expressly permitted, so the risk lies in undocumented scope or in the agreement being treated as overriding other rights.

**Remediation.** Document existing arrangements and review them against the rest of the Act.

**Suggested task.** Document any agreements for use of personal data for pecuniary benefit _(priority: LOW)_

**Notes.** OPEN_QUESTION: the Act does not set conditions or limits for these agreements beyond section 35(2) itself.

### Section 36 - Rights in relation to automated decision making

#### `PDPA-036-001` Right to require human involvement in significant decisions

**Legal basis:** Section 36(1) (subsection 36(1))  
**Requirement:** `REQ-036-1` - Right to require that decisions are not based solely on automated processing  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** A data subject may, through the procedures prescribed in the regulations, require the data controller to ensure that any decision taken by or on behalf of the data controller which significantly affects the data subject shall not be based solely on the processing by automatic means.

**Control.** On request, the organisation can ensure that a decision significantly affecting the individual is not based solely on automated processing.

**Assessment question.** If someone asks that a significant decision about them is not made by computer alone, can you arrange for a person to be involved?

**Why this matters.** Meeting this request requires a real human review path, with someone who has the authority and information to reach a different outcome.

**Expected state.** A documented human review path for each solely automated significant decision, with reviews logged.

**Implementation guidance.** Identify decisions that are solely automated and significant. Establish a human review path with a named reviewer able to change the outcome, and record each review.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you make decisions that significantly affect people based solely on automated processing? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Automated Decision System Inventory`, `Human Review Procedure`, `Review Decision Log` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `AUTOMATED_DECISION_MAKING` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Solely automated significant decisions concentrate potential harm, and a review path that cannot change the outcome is not a review path.

**Remediation.** Inventory solely automated significant decisions and build a genuine human review path for each.

**Suggested task.** Establish a human review path for solely automated significant decisions _(priority: HIGH)_

**Notes.** The procedure for exercising the right is to be prescribed by regulations.

#### `PDPA-036-002` Proactive notification of solely automated decisions

**Legal basis:** Section 36(2)(a) (subsection 36(2), paragraph (a))  
**Requirement:** `REQ-036-2` - Notification and reconsideration of automated decisions  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where a decision which significantly affects a data subject is based solely on automated processing, the data controller shall, as soon as practicable, notify the data subject that the decision was taken on that basis.

**Control.** Where a significant decision is based solely on automated processing, the individual is notified of that fact as soon as practicable, without waiting to be asked.

**Assessment question.** When a computer alone makes a significant decision about someone, do you tell them that is how the decision was made?

**Why this matters.** This duty is proactive. Unlike the other rights in Part VI it is not triggered by a request, so it must be built into the decision process itself.

**Expected state.** Notification text embedded in every solely automated significant decision output, with dispatch evidence retained.

**Implementation guidance.** Add the notification to the decision output - the letter, email or portal message. Retain evidence that it was sent.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you make decisions that significantly affect people based solely on automated processing? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Decision Notification Template`, `Sent Notification Records`, `Automated Decision System Inventory` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `AUTOMATED_DECISION_MAKING` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This is a proactive duty that operates on every affected decision, so a gap is systematic rather than occasional.

**Remediation.** Add the notification into the decision output templates and confirm dispatch is logged.

**Suggested task.** Add automated decision notification to decision output templates _(priority: HIGH)_

**Notes.** OPEN_QUESTION: as soon as practicable is not defined in the Act.

#### `PDPA-036-003` Reconsideration of a solely automated decision on request

**Legal basis:** Section 36(2)(b) (subsection 36(2), paragraph (b))  
**Requirement:** `REQ-036-2` - Notification and reconsideration of automated decisions  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The data subject may require the data controller to reconsider a decision which significantly affects him and which is based solely on automated processing.

**Control.** A procedure allows a data subject to require reconsideration of a solely automated significant decision, and reconsiderations are carried out and recorded.

**Assessment question.** If someone asks you to reconsider a decision that was made by computer alone, do you have a process to do that and record the outcome?

**Why this matters.** Reconsideration must be capable of producing a different answer. A rerun of the same model is not a reconsideration.

**Expected state.** A reconsideration procedure with a log recording each request, reviewer, outcome and date.

**Implementation guidance.** Define who reconsiders, what information they see, the outcome options, and how the result is communicated. Log each reconsideration and its outcome.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you make decisions that significantly affect people based solely on automated processing? |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Reconsideration Procedure`, `Reconsideration Log`, `Rights Request Log` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `AUTOMATED_DECISION_MAKING` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Reconsideration is the individual practical remedy against an automated decision, and its absence leaves them with only a complaint to the Commission.

**Remediation.** Write the reconsideration procedure, name the reviewers, and start the log.

**Suggested task.** Implement a reconsideration process for automated decisions _(priority: HIGH)_

**Notes.** OPEN_QUESTION: the Act does not state what reconsideration must involve or within what period it must be completed.

#### `PDPA-036-004` Documented reliance on automated decision exceptions

**Legal basis:** Section 36(3)(a)-(c) (subsection 36(3), paragraph (a)-(c))  
**Requirement:** `REQ-036-3` - Exceptions for automated decisions  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Section 36 shall not apply if the decision is necessary for entering into, or performance of, a contract between the data subject and a data controller; is authorised by any written law; or is based on the data subject explicit consent.

**Control.** Where section 36 is treated as inapplicable, the specific exception is identified and recorded per decision type.

**Assessment question.** Where you treat the automated decision rules as not applying, have you recorded which of the three exceptions you rely on?

**Why this matters.** Two of the exceptions - contractual necessity and explicit consent - are frequently asserted and rarely documented. The record is what makes the position defensible.

**Expected state.** An exception record per automated decision type, with supporting consent or contract evidence.

**Implementation guidance.** Record the exception per decision type with a justification. Where explicit consent is relied on, hold the consent record and confirm it covers automated decision making specifically.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you make decisions that significantly affect people based solely on automated processing? |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Automated Decision System Inventory`, `Consent Record`, `Contract`, `Legal Assessment Note` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `AUTOMATED_DECISION_MAKING` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The exceptions are lawful, so the risk is asserting one without analysis rather than the exception itself.

**Remediation.** Document the exception relied on for each automated decision type and verify the supporting evidence exists.

**Suggested task.** Record the section 36(3) exception relied on for each automated decision type _(priority: MEDIUM)_

**Notes.** Note that section 36(3) disapplies section 36 as a whole, including the notification duty in section 36(2)(a). The section 33(1)(c) right to be informed of the logic involved is in a different section and is not disapplied by section 36(3).

### Section 37 - Right to compensation

#### `PDPA-037-001` Handling of compensation claims from data subjects

**Legal basis:** Sections 37(1) and 37(2) (subsection 37(1))  
**Requirement:** `REQ-037-1` - Right to compensation for damage  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data subject who suffers damage by reason of any contravention of any of the requirements of this Act by a data controller or data processor shall be entitled to compensation from the data controller or data processor for that damage, where the complainant is the affected data subject or a representative of a data subject who is a child or a person of unsound mind, the rights have been infringed by reason of the contravention, and the damage relates to processing in contravention of the Act.

**Control.** A defined process receives, assesses and responds to claims for compensation for damage caused by a contravention of the Act.

**Assessment question.** If someone claims they have been harmed by the way you handled their data and asks for compensation, do you have a process to assess and respond to that?

**Why this matters.** Compensation claims can be brought directly and may also come through the Commission under section 50. Handling the first one without a process usually goes badly.

**Expected state.** A documented claims handling procedure with a claims register and defined evidence preservation steps.

**Implementation guidance.** Define intake, legal assessment, escalation and record keeping. Preserve evidence relating to the alleged contravention as soon as a claim arrives. Notify insurers where relevant.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Claims Handling Procedure`, `Claims Register`, `Incident Response Procedure`, `Legal Assessment Note` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The exposure is real but reactive. The primary defence is compliance with the substantive controls rather than the claims process itself.

**Remediation.** Write the claims handling procedure and agree the escalation path with legal and finance.

**Suggested task.** Establish a procedure for handling data subject compensation claims _(priority: MEDIUM)_

**Notes.** Section 50(4) defines damage as including financial loss and damage not involving financial loss. Section 50(3) provides a defence where the controller or processor proves it was not in any way responsible for the event that caused the damage.

#### `PDPA-037-002` Capability to execute a Commission rectification, blocking, erasure or destruction order

**Legal basis:** Section 37(3) (subsection 37(3))  
**Requirement:** `REQ-037-3` - Commission order for rectification, blocking, erasure or destruction  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the Commission is satisfied that a data subject has suffered damage entitling him to compensation and that there is a substantial risk of further contravention, the Commission may order the rectification, blocking, erasure or destruction of any of the personal data.

**Control.** The organisation can technically and procedurally execute an order to rectify, block, erase or destroy specified personal data, and evidence that it has done so.

**Assessment question.** If the Commission ordered you to correct, block, erase or destroy specific personal data, could you do it across all your systems and prove it?

**Why this matters.** Blocking in particular is a capability most systems lack. An order arrives with a deadline, which is the wrong moment to discover the gap.

**Expected state.** Verified rectify, block, erase and destroy capability across all systems holding personal data, with an evidencing method defined.

**Implementation guidance.** Verify each system can rectify, block, erase and destroy at record level, including archives, backups and copies held by processors. Define how execution is evidenced. Sequence any erasure against the section 29(2) preservation duty.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `System Capability Assessment`, `Order Execution Log`, `Processor Agreement`, `Technical Design Document` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. An order carries a deadline, and inability to comply escalates directly into the enforcement and penalty regime in sections 45 to 47.

**Remediation.** Assess each system for the four capabilities and remediate gaps, prioritising blocking, which is most often missing.

**Suggested task.** Verify rectify, block, erase and destroy capability across all systems _(priority: HIGH)_

#### `PDPA-037-003` Ability to notify third party recipients following a Commission order

**Legal basis:** Sections 37(4) and 37(5) (subsection 37(4))  
**Requirement:** `REQ-037-4` - Notification of third parties following a Commission order  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission may, where it makes an order under subsection (3) and where it considers it reasonable, order the data controller or data processor to notify third parties to whom the personal data have been disclosed of the rectification, blocking, erasure or destruction. In determining whether it is reasonably practicable to require the notification, the Commission shall have regard in particular to the number of persons who need to be notified.

**Control.** The organisation can identify and notify the third parties to whom affected personal data was disclosed, when ordered to do so.

**Assessment question.** Could you identify and contact everyone you have shared a person data with, if the Commission ordered you to tell them about a correction or deletion?

**Why this matters.** This depends entirely on the disclosure register. Without a record of who received what, the order cannot be complied with at all.

**Expected state.** A disclosure register that supports per-data-subject recipient identification, with recipient contacts current.

**Implementation guidance.** Keep the disclosure register at a level of detail that allows recipients to be identified per data subject. Hold current contact details for each recipient and prepare a notification template.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Disclosure Register`, `Recipient Contact List`, `Notification Template`, `Order Execution Log` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The duty is contingent on a Commission order, but the underlying record keeping must be in place well before one arrives.

**Remediation.** Enrich the disclosure register so recipients can be traced per data subject, and keep recipient contacts current.

**Suggested task.** Ensure the disclosure register supports per-data-subject recipient notification _(priority: MEDIUM)_

### Section 38 - Rectification, blocking, erasure and destruction of personal data

#### `PDPA-038-001` Compliance with a Commission order on inaccurate personal data

**Legal basis:** Sections 38(1) and 38(2) (subsection 38(1))  
**Requirement:** `REQ-038-1` - Commission order to rectify, block, erase or destroy inaccurate data  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the Commission is satisfied on the application of a data subject that his personal data is inaccurate, the Commission may order the data controller or data processor to rectify, block, erase or destroy the personal data. This applies whether or not the personal data is an accurate record of information received or obtained by the data controller from the data subject or a third party.

**Control.** The organisation can comply with a Commission order to rectify, block, erase or destroy inaccurate personal data, including data accurately recorded from a third party source.

**Assessment question.** If the Commission ordered you to correct or remove inaccurate personal data, could you comply - even where you recorded it accurately from someone else?

**Why this matters.** Section 38(2) is explicit: it does not matter that you faithfully recorded what a third party told you. Accurate transcription of wrong information is still inaccurate personal data.

**Expected state.** Verified ability to correct third party sourced data durably, with an order execution log.

**Implementation guidance.** Confirm you can correct data originating from third party sources without the correction being overwritten at the next data refresh. Record the order and the action taken.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Order Execution Log`, `System Capability Assessment`, `Data Source Register`, `Rectification Log` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Failing to comply with a Commission order leads directly to enforcement under section 45 and a penalty notice under section 46.

**Remediation.** Test correction of third party sourced records and confirm the correction survives the next data refresh.

**Suggested task.** Verify durable correction of third party sourced personal data _(priority: HIGH)_

#### `PDPA-038-002` Compliance with a Commission direction to correct personal data

**Legal basis:** Section 38(3) (subsection 38(3))  
**Requirement:** `REQ-038-3` - Direction to correct personal data  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the personal data is not an accurate record of the information, the Commission may direct the data controller or processor to correct the personal data as it considers appropriate.

**Control.** The organisation can implement a correction in the specific terms directed by the Commission and evidence that it has done so.

**Assessment question.** If the Commission directed you to correct data in a particular way, could you carry that out exactly and show that you did?

**Why this matters.** A direction may specify the correction in particular terms. Implementing something approximate is not compliance.

**Expected state.** An order execution log linking each direction to the correction made and to the preserved prior version.

**Implementation guidance.** Record the direction, the correction implemented, the date and the person responsible. Preserve the pre-amendment record in accordance with section 29(2).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Order Execution Log`, `Rectification Log`, `System Version History Configuration` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Non-compliance with a direction escalates to an enforcement notice and then to a penalty notice.

**Remediation.** Establish an order execution log and link it to the correction and version history processes.

**Suggested task.** Establish an execution log for Commission directions and orders _(priority: HIGH)_

#### `PDPA-038-003` Notification of third parties after action under section 38

**Legal basis:** Section 38(4) (subsection 38(4))  
**Requirement:** `REQ-038-4` - Notification of third parties after rectification or erasure  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the personal data complained of has been rectified, blocked, updated, erased or destroyed under this section, the data controller or data processor shall be required to notify third parties to whom the personal data has been previously disclosed of the rectification, blocking, updating, erasure or destruction.

**Control.** After personal data is rectified, blocked, updated, erased or destroyed under section 38, third parties previously given the data are notified.

**Assessment question.** After you correct or remove data under a Commission order, do you tell everyone you previously shared that data with?

**Why this matters.** Unlike section 37(4), this duty is not expressed as contingent on a further Commission order - section 38(4) states that the controller or processor shall be required to notify.

**Expected state.** Third party notification built into the section 38 execution process, with dispatch evidence retained.

**Implementation guidance.** Trigger third party notification automatically as part of the section 38 execution process. Use the disclosure register to identify recipients and retain proof of notification.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Disclosure Register`, `Third Party Notification Records`, `Order Execution Log`, `Notification Template` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This duty is expressed in mandatory terms and is a second, separate contravention if missed after an order has already been made.

**Remediation.** Add a mandatory notification step to the order execution process and pre-draft the notification template.

**Suggested task.** Build third party notification into the section 38 execution process _(priority: HIGH)_

**Notes.** INTERPRETATION: section 38(4) is drafted in mandatory terms (shall be required to notify) and does not on its face require a further order, in contrast to section 37(4). Take advice if relying on the narrower reading.


---

## Part VII - Investigation of Complaints

### Section 39 - Complaints against violation of personal data protection principles

#### `PDPA-039-001` Internal complaint handling and readiness for Commission complaints

**Legal basis:** Section 39(1) and 39(3) (subsection 39(1))  
**Requirement:** `REQ-039-1` - Complaints to the Commission and investigation timeline  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Any person who considers that a data controller or data processor has infringed personal data protection principles may file a complaint to the Commission. A complaint shall be investigated and concluded within ninety days from the date of receipt.

**Control.** An internal channel receives and resolves data protection complaints, and the organisation is prepared to respond to a complaint escalated to the Commission.

**Assessment question.** Do you have a way for people to complain to you about how you handle their data, and are you ready to respond if they complain to the Commission instead?

**Why this matters.** Most complaints to a regulator start as complaints to the organisation that went unanswered. A working internal channel is the cheapest form of enforcement risk reduction.

**Expected state.** A published complaint channel, a complaint log with outcomes, and a named regulatory response lead.

**Implementation guidance.** Publish a complaint channel, log complaints with outcomes, and define who leads the response if the Commission opens an investigation. The Commission timeline is ninety days, extendable by up to a further ninety.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Complaints Procedure`, `Complaint Log`, `Privacy Notice`, `Regulatory Response Plan` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The Act imposes no express internal complaints duty, but unresolved complaints are the main route into a section 39 investigation.

**Remediation.** Publish the complaint channel, start the log, and name the regulatory response lead.

**Suggested task.** Establish an internal data protection complaints channel and log _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 39 confers a right to complain to the Commission and sets the Commission timeline. It imposes no express obligation to operate an internal complaints channel; DataGuard treats that as derived good practice, not a statutory duty.

### Section 40 - Notice of investigation

#### `PDPA-040-001` Handling of a notice of investigation

**Legal basis:** Section 40  
**Requirement:** `REQ-040-1` - Notice of investigation  
**Source type:** `ACT_DERIVED` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Before commencing an investigation of a complaint, the Commission shall notify the data controller or data processor concerned of the substance of the complaint and its intention to carry out the investigation, in a form prescribed in the regulations.

**Control.** A defined process receives a notice of investigation from the Commission, routes it immediately to the accountable owner, and starts evidence preservation.

**Assessment question.** If a notice of investigation arrived from the Commission today, do you know who would receive it, who would own the response, and what would be preserved?

**Why this matters.** The notice tells you the substance of the complaint before the investigation starts. That window is only useful if the notice reaches the right person immediately.

**Expected state.** A documented regulatory notice handling procedure naming the recipient, the owner and the preservation steps.

**Implementation guidance.** Name the recipient and the response owner, define an internal acknowledgement time, and trigger a litigation-style hold on relevant records the moment a notice arrives.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Response Plan`, `Escalation Matrix`, `Evidence Preservation Procedure` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Poor handling wastes the notice period and can lead to loss of records that would have supported the organisation position.

**Remediation.** Write the regulatory notice handling procedure and communicate it to reception, legal and IT.

**Suggested task.** Define a handling procedure for Commission notices of investigation _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 40 imposes the duty on the Commission. The internal handling procedure is DataGuard implementation practice. The form of the notice is left to the regulations.

### Section 42 - Powers of Commission in carrying out investigations

#### `PDPA-042-001` Cooperation with Commission investigation powers

**Legal basis:** Section 42(1)(a)-(e) and 42(2) (subsection 42(1), paragraph (a)-(e))  
**Requirement:** `REQ-042-1` - Powers of the Commission in investigations  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** In the course of an investigation the Commission may summon a person, receive evidence, enter premises occupied by a data controller or data processor, interrogate any person or take any device with personal data in such premises, and examine or obtain copies of books, documents or records found there. The complainant and the controller or processor may be given an opportunity to make representations.

**Control.** Staff know how to respond when the Commission exercises its investigation powers, including attendance at premises, and the organisation can make representations.

**Assessment question.** Would your staff know what to do if officers from the Commission arrived to inspect your premises, records or devices?

**Why this matters.** The powers include entry, interrogation and taking devices. Section 43 makes obstruction a criminal offence, and an untrained receptionist can create one by accident.

**Expected state.** A regulatory visit protocol issued and briefed to front-of-house, IT and management staff.

**Implementation guidance.** Write a short regulatory visit protocol: verify identity and authority, notify legal and the data protection officer immediately, cooperate, log what is taken, and do not obstruct. Brief front-of-house and IT staff. Prepare to make representations under section 42(2).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Visit Protocol`, `Training Records`, `Regulatory Response Plan` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. An untrained response can create a section 43 obstruction offence, which is a criminal matter distinct from the underlying complaint.

**Remediation.** Write and brief the regulatory visit protocol, focusing on reception and IT.

**Suggested task.** Issue and brief a Commission regulatory visit protocol _(priority: HIGH)_

**Notes.** ACT_DERIVED. Section 42 confers powers on the Commission. The duty not to obstruct arises under section 43. Section 42(4) requires the Commission to return documents or articles within ten working days of a request.

#### `PDPA-042-002` No personal data withheld from the Commission

**Legal basis:** Section 42(3) (subsection 42(3))  
**Requirement:** `REQ-042-3` - No withholding of personal data from the Commission  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Notwithstanding any other written law, the Commission may examine any personal data recorded in any form held by a data controller or data processor and in doing so, no personal data shall be withheld from the Commission.

**Control.** The organisation understands that no personal data may be withheld from the Commission during an examination, notwithstanding other written laws, and its staff and advisers act accordingly.

**Assessment question.** Do the people who would handle a Commission examination understand that personal data cannot be withheld from it, even where another law might otherwise suggest confidentiality?

**Why this matters.** The provision overrides other written laws in this respect. Withholding data in good faith reliance on a confidentiality obligation would still be a failure, and may amount to obstruction under section 43.

**Expected state.** The regulatory visit protocol records the position and the escalation route for any asserted conflict.

**Implementation guidance.** State the position clearly in the regulatory visit protocol. Where a genuine conflict with another law or with privilege is asserted, escalate to counsel immediately rather than withholding unilaterally.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Visit Protocol`, `Legal Assessment Note`, `Training Records` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The exposure arises only during an examination, but a refusal in the moment can convert a civil matter into a section 43 offence.

**Remediation.** Add the section 42(3) position and the escalation route to the regulatory visit protocol.

**Suggested task.** Record the section 42(3) position in the regulatory visit protocol _(priority: MEDIUM)_

**Notes.** OPEN_QUESTION: the Act does not address how section 42(3) interacts with legal professional privilege. Take advice rather than deciding this in the moment.

### Section 43 - Obstruction of Commission

#### `PDPA-043-001` Non-obstruction of the Commission

**Legal basis:** Section 43(a)-(d) (paragraph (a)-(d))  
**Requirement:** `REQ-043-1` - Obstruction of the Commission  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person who obstructs or impedes the Commission in the exercise of its powers, fails to provide assistance or information requested by the Commission, refuses to allow the Commission to enter any premises or to take any document or device with personal data, or gives to the Commission any information which is false or misleading, commits an offence.

**Control.** The organisation does not obstruct or impede the Commission, provides requested assistance and information, permits lawful entry, and gives accurate information.

**Assessment question.** Are your people instructed to cooperate fully with the Commission, allow lawful entry, and never give it information that is false or misleading?

**Why this matters.** Each of the four limbs is a criminal offence carrying a fine of up to five million shillings or up to two years imprisonment, or both - independent of the original complaint.

**Expected state.** A cooperation policy, verification of submissions before dispatch, and a record of information provided to the Commission.

**Implementation guidance.** Set the cooperation expectation in policy and in the regulatory visit protocol. Require accuracy checks before any information is submitted to the Commission, and record what was provided and when.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Visit Protocol`, `Data Protection Policy`, `Submission Review Record`, `Training Records` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Section 43 creates a criminal offence with an express penalty, and it can be committed by an individual employee acting without instruction.

**Remediation.** Issue the cooperation policy, brief staff, and introduce a review step before any submission to the Commission.

**Suggested task.** Issue a Commission cooperation policy and brief relevant staff _(priority: HIGH)_

**Notes.** Section 43 provides a fine of not less than TZS 100,000 and not exceeding TZS 5,000,000, or imprisonment for not more than two years, or both. This penalty applies to section 43 specifically.

### Section 45 - Enforcement notice

#### `PDPA-045-001` Compliance with an enforcement notice within the specified period

**Legal basis:** Sections 45(1) and 45(2) (subsection 45(1))  
**Requirement:** `REQ-045-1` - Enforcement notice  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Where the Commission is satisfied that a person has failed to comply with any provision of this Act, it may serve an enforcement notice requiring that person to rectify the failure within the period specified in the notice. The notice shall specify the provision contravened, the measures to be taken, a period of not less than twenty-one days within which the measures shall be implemented, and shall state any right to appeal.

**Control.** A process tracks enforcement notices, implements the specified measures within the stated period, and evidences completion.

**Assessment question.** If you received an enforcement notice, could you implement the required measures within the period given and prove you had done so?

**Why this matters.** The minimum period is twenty-one days. Failure to comply is what triggers a penalty notice under section 46, so this is the last off-ramp before a fine.

**Expected state.** An enforcement notice register with owner, deadline, evidence of completion and confirmation sent to the Commission.

**Implementation guidance.** Log the notice, the provision cited, the measures required and the deadline. Assign an executive owner, track to completion, and write to the Commission with evidence before the deadline. Note the notice must state any right to appeal - see PDPA-049-001.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Enforcement Notice Register`, `Remediation Plan`, `Completion Evidence`, `Commission Correspondence` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Non-compliance with an enforcement notice is the express precondition for a penalty notice under section 46 and moves the matter from remediable to punitive.

**Remediation.** Create the enforcement notice register and agree the executive escalation path before any notice arrives.

**Suggested task.** Establish an enforcement notice tracking and remediation process _(priority: CRITICAL)_

**Notes.** The period specified in the notice shall not be less than twenty-one days. The Act does not set a maximum.

### Section 46 - Notice of penalty

#### `PDPA-046-001` Readiness to evidence the section 46(2) mitigating factors

**Legal basis:** Section 46(2)(a)-(k) (subsection 46(2), paragraph (a)-(k))  
**Requirement:** `REQ-046-1` - Penalty notice and its determining factors  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** In deciding whether to give a penalty notice and determining the amount, the Commission shall have regard to the nature, gravity and duration of the failure; its intentional or negligent character; action taken to mitigate damage including technical and organisational measures; previous failures; the degree of cooperation with the Commission; the categories of personal data affected; the manner in which the failure became known including whether the controller or processor notified the Commission; compliance with previous notices; adherence to codes of ethics or terms of registration; whether the penalty would be effective; and any other aggravating or mitigating factor including financial benefits gained or losses suffered.

**Control.** The organisation maintains records that would evidence the mitigating factors the Commission must weigh when deciding on and setting a penalty.

**Assessment question.** If the Commission were deciding whether to fine you, could you produce evidence of your safeguards, your cooperation, your self-reporting and your code of ethics?

**Why this matters.** The eleven factors are set out in the Act, and several of them are things you either recorded at the time or cannot show at all - self-notification, cooperation, and mitigation measures in particular.

**Expected state.** A mapping of the section 46(2) factors to retrievable evidence, reviewed annually.

**Implementation guidance.** Map the factors to existing records: safeguards to the security programme, mitigation to the incident log, self-notification to the breach notification log, cooperation to Commission correspondence, and adherence to the section 65 code of ethics. Keep them retrievable together.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Incident Log`, `Breach Notification Log`, `Commission Correspondence`, `Code of Ethics`, `Security Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. This does not prevent a contravention, but it materially affects the outcome. It is not itself a statutory duty.

**Remediation.** Map the eleven factors to your existing evidence and close the gaps in record keeping.

**Suggested task.** Map the section 46(2) penalty factors to retrievable evidence _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 46(2) directs the Commission, not the organisation. DataGuard must not convert these factors into a compliance score or represent evidence readiness as reducing any legal liability.

### Section 47 - Administrative fines

#### `PDPA-047-001` Reference record - statutory ceiling on administrative fines

**Legal basis:** Section 47  
**Requirement:** `REQ-047-1` - Maximum administrative fine  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The maximum amount of the penalty that may be imposed by the Commission in a penalty notice in relation to contravention of provisions of this Act is one hundred million shillings.

**Control.** Reference record capturing the statutory maximum administrative penalty. It is not an assessable control and must not be used to score risk.

**Assessment question.** Reference only - no response required. The maximum administrative penalty the Commission may impose in a penalty notice is TZS 100,000,000.

**Why this matters.** This is the statutory ceiling for administrative fines under section 47. It is not the penalty for any particular control, and it is separate from the criminal penalties in sections 43, 60, 61 and 63.

**Expected state.** Not applicable. This is a reference record.

**Implementation guidance.** Use this record for reference in board reporting only. Do not attribute this figure to any individual control, and do not use it to derive risk scores.

| Field | Value |
| --- | --- |
| Response type | `TEXT` |
| Answer options | _n/a_ |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `NOT_APPLICABLE` |
| Suggested evidence | _none_ |
| Evidence strength | `NOT_APPLICABLE` |
| Evidence review frequency | `ON_LEGISLATIVE_CHANGE` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `LOW` |
| Control status | `REFERENCE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. This is a reference record, not a control. The Act does not attach this maximum to any specific provision.

**Remediation.** None. Reference record only.

**Notes.** Do not state that any individual control carries a TZS 100,000,000 penalty. Section 47 sets a ceiling for administrative penalty notices under section 46 and says nothing about which contraventions attract what amount.

### Section 48 - Review of decision

#### `PDPA-048-001` Use of the review of decision route

**Legal basis:** Section 48  
**Requirement:** `REQ-048-1` - Review of a Commission decision  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission may, upon application or on its own motion, review its decision or direction given in accordance with the provisions of this Part, and after review may reverse, alter or revoke it.

**Control.** The organisation knows it may apply to the Commission for review of a decision or direction, and who internally would prepare such an application.

**Assessment question.** Do you know that you can ask the Commission to review a decision or direction it has given, and who would prepare that request?

**Why this matters.** Review is often quicker and less costly than appealing to the High Court, but only if the option is known while the deadline for the alternative is still open.

**Expected state.** Review and appeal routes documented in the regulatory response plan with a named owner.

**Implementation guidance.** Record the review route in the regulatory response plan alongside the section 49 appeal route, with a named owner and a decision point for choosing between them.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Response Plan`, `Escalation Matrix` |
| Evidence strength | `WEAK` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `LOW` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. This is a remedy available to the organisation, not a duty imposed on it.

**Remediation.** Add the review route to the regulatory response plan.

**Suggested task.** Document the section 48 review route in the regulatory response plan _(priority: LOW)_

**Notes.** OPEN_QUESTION: the Act sets no time limit for applying for a review under section 48.

### Section 49 - Right of appeal

#### `PDPA-049-001` Awareness and preparedness for appeal to the High Court

**Legal basis:** Section 49  
**Requirement:** `REQ-049-1` - Right of appeal to the High Court  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person who is aggrieved with the administrative action taken by the Commission, including the directions given in the enforcement notice or penalty imposed in the penalty notice, may appeal to the High Court.

**Control.** The organisation knows that administrative action by the Commission may be appealed to the High Court, and has a route to instruct counsel promptly.

**Assessment question.** If you disagreed with an enforcement notice or a penalty, do you know that you can appeal to the High Court and who would instruct counsel?

**Why this matters.** An enforcement notice must state any right to appeal. Being ready to act on it quickly preserves options that a delayed response can close off.

**Expected state.** The appeal route and counsel contacts are recorded in the regulatory response plan.

**Implementation guidance.** Record the appeal route in the regulatory response plan with counsel contact details. Note that an enforcement notice under section 45(2)(d) must state any right to appeal.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | No |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Response Plan`, `External Counsel Retainer`, `Escalation Matrix` |
| Evidence strength | `WEAK` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `LOW` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Low. This is a right, not a duty. It is recorded so it is not lost through delay.

**Remediation.** Add the section 49 appeal route and counsel contacts to the regulatory response plan.

**Suggested task.** Document the section 49 High Court appeal route _(priority: LOW)_

**Notes.** OPEN_QUESTION: the Act does not state the period within which an appeal to the High Court must be lodged.

### Section 50 - Payment of compensation

#### `PDPA-050-001` Compliance with a Commission compensation order

**Legal basis:** Section 50(1) (subsection 50(1))  
**Requirement:** `REQ-050-1` - Commission order to pay compensation  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Subject to the provisions of section 37, the Commission may, in addition to any penalty given under this Act, order a data controller or data processor who causes damages to the data subject following contraventions of any provisions of this Act to pay compensation to the data subject.

**Control.** The organisation can identify affected data subjects and make payment in compliance with a Commission compensation order, and records the outcome.

**Assessment question.** If the Commission ordered you to pay compensation to affected individuals, could you identify them, pay them and evidence that you had?

**Why this matters.** Compensation may be ordered in addition to a penalty. Identifying affected individuals depends on record keeping that has to exist before the order arrives.

**Expected state.** Incident records that identify affected data subjects, plus a defined compensation payment route.

**Implementation guidance.** Ensure incident records identify affected data subjects. Define the payment authorisation route with finance and confirm the position with insurers in advance.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Incident Log`, `Claims Register`, `Payment Records`, `Insurance Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Compensation is ordered after a contravention has already been established, so the primary control is upstream compliance.

**Remediation.** Ensure incident records capture affected data subjects and agree the compensation payment route with finance.

**Suggested task.** Ensure incident records identify affected data subjects for compensation purposes _(priority: MEDIUM)_

**Notes.** Section 50(4) defines damage as including financial loss and damage not involving financial loss. Compensation under section 50 is in addition to any penalty.

#### `PDPA-050-002` Processor compliance with controller lawful instructions

**Legal basis:** Sections 50(2)(b) and 50(3) (subsection 50(2), paragraph (b))  
**Requirement:** `REQ-050-2` - Liability of controllers and processors  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data processor involved in processing of personal data shall be liable for damage caused by the processing if the processor has not complied with an obligation under the Act specifically directed to data processors, or has acted contrary to the data controller lawful instructions. A data controller or data processor shall not be liable if it proves that it is not in any way responsible for the event that caused the damage.

**Control.** Acting as a data processor, the organisation processes only on the controller documented lawful instructions and retains records evidencing that it did.

**Assessment question.** Where you process personal data for someone else, do you keep records showing you acted only on their lawful instructions?

**Why this matters.** Section 50(2)(b) makes processor liability turn on exactly this point, and section 50(3) allows a defence only where the processor proves it was not in any way responsible.

**Expected state.** A documented instruction record per controller engagement, with deviations and refusals logged.

**Implementation guidance.** Keep documented instructions from each controller, log deviations and the authority for them, and record refusals of unlawful instructions. Identify the processor-specific duties in the Act, notably sections 5, 27(4) and 42(3).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `ROLE_SPECIFIC` |
| Applicability question | Do you process personal data on behalf of another organisation? |
| Role scope | `PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Documented Processing Instructions`, `Processor Agreement`, `Instruction Deviation Log` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `THIRD_PARTY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. This provision is the basis of direct processor liability for damage, and the evidence for it must be contemporaneous.

**Remediation.** Collect and file documented instructions from each controller and start logging deviations.

**Suggested task.** Maintain documented controller instructions for all processor engagements _(priority: HIGH)_


---

## Part IX - Miscellaneous Provisions

### Section 58 - Exceptions from application of provisions of this Act

#### `PDPA-058-001` Documented reliance on the section 58 exemptions

**Legal basis:** Section 58(2)(a)-(g) and 58(3) (subsection 58(2), paragraph (a)-(g))  
**Requirement:** `REQ-058-2` - Exempted processing  
**Source type:** `ACT_EXPLICIT` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** Processing may be exempted from the provisions of this Act where it is held by the data subject for his personal use; in accordance with any law or court order; for safeguarding national safety and security and public interest; to prevent or detect crimes; to detect or prevent tax evasion; for investigation of misappropriation of public funds; or for vetting for appointment to a public service position. The Minister may prescribe other instances.

**Control.** Where the organisation treats processing as exempt, the specific section 58(2) limb is identified, justified and recorded, and the scope of the exemption is kept narrow.

**Assessment question.** Where you treat some processing as exempt from the Act, have you recorded exactly which exemption applies and why?

**Why this matters.** Exemptions attach to particular processing, not to whole organisations. Reading one broadly is a common and expensive mistake.

**Expected state.** An exemption register recording the limb, scope, justification, reviewer and date for each exempt processing activity.

**Implementation guidance.** Record the limb, the processing it covers, the justification and the reviewer. Keep the boundary of the exempt processing explicit so that adjacent processing is not swept in. Take legal advice for the national security and public interest limbs.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you treat any of your processing as exempt from the Act? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Exemption Register`, `Legal Assessment Note`, `External Counsel Advice`, `Court Order` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. An over-broad exemption claim leaves substantial processing entirely uncontrolled, and the failure is systematic rather than incidental.

**Remediation.** Build the exemption register, define the precise boundary of each exempt activity, and obtain legal review.

**Suggested task.** Record and scope every reliance on a section 58 exemption _(priority: HIGH)_

**Notes.** Section 58(3) allows the Minister to prescribe other exempt instances. OPEN_QUESTION: section 58(1) begins nothing under this section shall exempt, which sits awkwardly with section 58(2). The safer reading, reflected at PDPA-058-002, is that the principles and security duties continue to apply to exempt processing.

#### `PDPA-058-002` Principles and security duties continue to apply to exempt processing

**Legal basis:** Section 58(1) (subsection 58(1))  
**Requirement:** `REQ-058-1` - Exemptions do not displace the principles or security duties  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Nothing under this section shall exempt the data controller or the data processor from the responsibility of complying with the principles of the law in collection and processing of personal data and taking necessary measures to ensure protection and security of the personal data.

**Control.** Processing treated as exempt is still subject to the personal data protection principles and to security and protection measures.

**Assessment question.** Where processing is exempt, do you still apply the data protection principles and keep the data secure?

**Why this matters.** Section 58(1) preserves the principles and the security duties. An exemption reduces the procedural obligations, not the duty to protect the data.

**Expected state.** Exempt processing is included in the security programme and assessed against the section 5 principles.

**Implementation guidance.** Apply the section 5 principles and the section 27 safeguards to exempt processing as well. Record that decision alongside the exemption entry so the two are never separated.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you treat any of your processing as exempt from the Act? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Exemption Register`, `Security Policy`, `Risk Assessment`, `Data Protection Policy` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Exempt processing that falls outside the security programme is often the least protected data in the organisation.

**Remediation.** Bring exempt processing into the scope of the security programme and the principles assessment.

**Suggested task.** Apply the principles and security measures to exempt processing _(priority: HIGH)_

### Section 59 - Preservation order

#### `PDPA-059-001` Compliance with a court preservation order

**Legal basis:** Section 59  
**Requirement:** `REQ-059-1` - Preservation order  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The Commission may apply to a court for a preservation order for the expeditious preservation of any personal data including traffic personal data where there is reasonable ground to believe that the personal data is vulnerable to loss or modification. The order shall specify a period which shall not be more than ninety days and may be extended by the court.

**Control.** The organisation can suspend deletion and modification of specified personal data on receipt of a preservation order and evidence that it has done so.

**Assessment question.** If a court ordered you to preserve specific personal data, could you stop it being deleted or changed - including by automated retention jobs?

**Why this matters.** Automated deletion routines will keep running unless someone stops them. A preservation order breached by a scheduled job is still a breached order.

**Expected state.** A tested legal hold capability covering all systems, with a hold register recording scope and release.

**Implementation guidance.** Define a legal hold capability that suspends automated deletion and restricts modification for identified records, including in backups. Record the hold, its scope and its release. Sequence it ahead of the section 28 disposal process.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Legal Hold Procedure`, `Legal Hold Register`, `System Capability Assessment`, `Court Order` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `ENFORCEMENT` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Breach of a court order is a serious matter, and loss through an automated job is a foreseeable and preventable failure.

**Remediation.** Build a legal hold capability that suspends automated deletion, and test it on a sample record set.

**Suggested task.** Implement a legal hold capability that suspends automated deletion _(priority: HIGH)_

**Notes.** The preservation duty interacts with section 28 disposal and with section 29(2) preservation of pre-amendment records. Disposal processes must yield to a preservation order.

### Section 60 - Offences of unlawful disclosure of personal data

#### `PDPA-060-001` Prevention of disclosure incompatible with the collection purpose

**Legal basis:** Section 60(1) (subsection 60(1))  
**Requirement:** `REQ-060-1` - Unlawful disclosure by a data controller  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data controller who, without lawful excuse, discloses personal data in any manner that is incompatible with the purpose for which such personal data has been collected commits an offence.

**Control.** Controls prevent disclosure of personal data in a manner incompatible with the purpose for which it was collected, and staff understand this is a criminal offence.

**Assessment question.** Do your controls and your staff training prevent personal data being shared in ways that clash with the purpose it was collected for?

**Why this matters.** This is a criminal offence, not just a regulatory contravention, and the penalties reach five billion shillings for a company or corporation.

**Expected state.** Disclosure controls in place, a maintained disclosure register, and training records covering the offence.

**Implementation guidance.** Combine the disclosure register from PDPA-026-001 with technical controls on data export and with staff training that names the criminal consequence. Review ad hoc disclosure requests against the recorded purpose.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Disclosure Register`, `Data Protection Policy`, `Training Records`, `Access Control Procedure` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DISCLOSURE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 60(1) is a criminal offence, and section 62 extends liability to officers who knowingly and willfully authorise or permit the contravention.

**Remediation.** Tighten export and sharing controls, complete the disclosure register, and run targeted training for staff who handle disclosure requests.

**Suggested task.** Implement controls and training against incompatible disclosure of personal data _(priority: CRITICAL)_

**Notes.** Section 60(6) penalties: individual - fine of not less than TZS 100,000 and not exceeding TZS 20,000,000, or imprisonment not exceeding ten years, or both; company or corporation - fine of not less than TZS 1,000,000 and not exceeding TZS 5,000,000,000.

#### `PDPA-060-002` Processor discloses only with prior controller authority

**Legal basis:** Section 60(2) (subsection 60(2))  
**Requirement:** `REQ-060-2` - Unlawful disclosure by a data processor  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A data processor who, without lawful excuse, discloses personal data processed by the data processor without the prior authority of the data controller commits an offence.

**Control.** Acting as a processor, the organisation discloses personal data only with the prior authority of the controller, and records that authority.

**Assessment question.** Where you process data for someone else, do you get their permission in advance before disclosing it to anyone, and do you keep a record?

**Why this matters.** This is a criminal offence specific to processors. It catches routine situations such as responding to a third party request without checking with the controller first.

**Expected state.** A disclosure authority procedure with a log of controller authorities obtained.

**Implementation guidance.** Define an authority check before any disclosure of controller data, including responses to law enforcement and other third party requests. Record the authority obtained. Route any legal compulsion through counsel.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `ROLE_SPECIFIC` |
| Applicability question | Do you process personal data on behalf of another organisation? |
| Role scope | `PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Disclosure Authority Log`, `Processor Agreement`, `Documented Processing Instructions`, `Training Records` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DISCLOSURE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 60(2) creates direct criminal liability for the processor and its officers under section 62.

**Remediation.** Implement a prior authority check for all disclosures of controller data and start the authority log.

**Suggested task.** Implement a prior controller authority check for processor disclosures _(priority: CRITICAL)_

#### `PDPA-060-003` No obtaining or onward disclosure of personal data without authority

**Legal basis:** Section 60(3)(a)-(b) (subsection 60(3), paragraph (a)-(b))  
**Requirement:** `REQ-060-3` - Unlawful obtaining or disclosure of personal data  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person who obtains personal data, or obtains any information constituting personal data, without prior authority of the data controller or data processor by whom the personal data is kept, or discloses personal data to a third party, commits an offence.

**Control.** Staff and contractors do not obtain personal data from other organisations without authority, and do not disclose personal data to third parties without authority.

**Assessment question.** Are your people clear that taking personal data from another organisation without permission, or passing personal data to an outsider, is a criminal offence?

**Why this matters.** This limb catches individuals, not only organisations. It reaches situations like an employee bringing a customer list from a previous employer.

**Expected state.** Policy and training in place covering obtaining and disclosing personal data without authority, with acknowledgement records.

**Implementation guidance.** Cover this expressly in the acceptable use policy, in employment terms and in induction training. Screen third party data sources for provenance, linking to PDPA-022-004.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Acceptable Use Policy`, `Employment Terms`, `Training Records`, `Data Source Register` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DISCLOSURE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Individual criminal liability attaches, and the conduct is frequently committed without awareness that it is an offence.

**Remediation.** Add explicit wording to the acceptable use policy and induction training, and screen incoming data sources.

**Suggested task.** Add unauthorised obtaining and disclosure to policy and induction training _(priority: HIGH)_

#### `PDPA-060-004` No offering of unlawfully obtained personal data for sale

**Legal basis:** Sections 60(4) and 60(5) (subsection 60(4))  
**Requirement:** `REQ-060-4` - Offering personal data for sale  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person who offers for sale personal data of another person obtained in breach of subsection (1) commits an offence. An advertisement indicating that personal data is or may be for sale constitutes an offer for sale of the personal data.

**Control.** The organisation does not sell, offer for sale or advertise the sale of personal data obtained in breach of section 60(1), and monitors any commercial data activity for this risk.

**Assessment question.** Do you have any commercial arrangement that involves selling or advertising the sale of personal data, and have you checked how that data was obtained?

**Why this matters.** Section 60(5) is broad: an advertisement indicating that data is or may be for sale is itself an offer for sale.

**Expected state.** Any data sale or monetisation activity is inventoried with provenance and lawful basis confirmed, or the organisation has confirmed it has none.

**Implementation guidance.** Review any data monetisation, list rental or data brokerage activity. Confirm provenance and lawful basis before any such activity, and take legal advice.

| Field | Value |
| --- | --- |
| Response type | `YES_NO` |
| Answer options | `Yes`, `No`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `CONDITIONAL` |
| Applicability question | Do you sell, offer for sale, or advertise the sale of personal data in any form? |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Data Monetisation Register`, `Data Source Register`, `Legal Assessment Note`, `Data Protection Policy` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `DISCLOSURE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. This is a criminal offence carrying the section 60(6) penalties, and section 60(5) extends it to advertising alone.

**Remediation.** Inventory any data sale activity, verify provenance, and obtain legal advice before continuing.

**Suggested task.** Review any sale or advertising of personal data for lawfulness _(priority: CRITICAL)_

**Notes.** INTERPRETATION: section 60(4) refers to data obtained in breach of subsection (1), which addresses disclosure by a data controller. The precise scope of the cross-reference is not elaborated in the Act.

### Section 61 - Offences of unlawful destruction, deletion, concealment or alteration of personal data

#### `PDPA-061-001` Prevention of unlawful destruction, deletion, concealment or alteration

**Legal basis:** Section 61  
**Requirement:** `REQ-061-1` - Unlawful destruction, deletion, concealment or alteration  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** A person who unlawfully destroys, deletes, misleads, conceals or alters personal data commits an offence and shall, upon conviction, be liable to a fine of not less than one hundred thousand shillings but not exceeding ten million shillings or to imprisonment for a term not exceeding five years or both.

**Control.** Technical and organisational controls prevent unlawful destruction, deletion, concealment or alteration of personal data, and such actions are detectable after the fact.

**Assessment question.** Are you able to prevent, and to detect afterwards, anyone unlawfully deleting, hiding or altering personal data?

**Why this matters.** This is a criminal offence in its own right. It also matters during an investigation, where deleting or altering records looks like concealment whatever the intention.

**Expected state.** Destructive rights restricted, tamper-evident logging in place, and alerting on bulk deletion or alteration.

**Implementation guidance.** Restrict destructive rights, keep tamper-evident audit logs, and monitor for bulk deletion or alteration. Reinforce during any investigation or legal hold. This builds on PDPA-027-003 and PDPA-027-004.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Access Control Procedure`, `Audit Log Configuration`, `Monitoring and Alerting Configuration`, `Training Records` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `DATA_INTEGRITY` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Section 61 creates a criminal offence with an express penalty, and undetected alteration also breaches sections 24 and 27(1).

**Remediation.** Restrict destructive permissions, enable tamper-evident logging, and alert on bulk changes.

**Suggested task.** Restrict destructive rights and enable tamper-evident logging over personal data _(priority: HIGH)_

**Notes.** Section 61 penalty: fine of not less than TZS 100,000 and not exceeding TZS 10,000,000, or imprisonment not exceeding five years, or both. This penalty is specific to section 61.

### Section 62 - Offences by company or corporation

#### `PDPA-062-001` Officer accountability and board oversight of data protection

**Legal basis:** Section 62  
**Requirement:** `REQ-062-1` - Offences by a company or corporation  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Where an offence under this Act is committed by a company or corporation, the company or corporation and every officer of the company or corporation who knowingly and willfully authorises or permits the contravention shall be liable for the offence.

**Control.** Officers are made aware of their personal exposure under section 62, and data protection is subject to documented board or senior management oversight.

**Assessment question.** Do your directors and senior officers know they can be personally liable, and does the board receive regular reporting on data protection?

**Why this matters.** Section 62 attaches personal liability to officers who knowingly and willfully authorise or permit a contravention. Documented oversight is how officers show they engaged with the issue.

**Expected state.** Documented officer briefing and a recurring, minuted board or senior management reporting item on data protection.

**Implementation guidance.** Brief the board and senior officers on section 62. Establish periodic data protection reporting to the board, minuted, drawing on the data protection officer reports under section 27(3).

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Board Minutes`, `Officer Briefing Record`, `DPO Report`, `Governance Framework` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Personal officer liability is a distinct exposure, and the absence of oversight records makes the knowingly and willfully question harder to answer favourably.

**Remediation.** Brief the board on section 62 and establish a standing data protection reporting item.

**Suggested task.** Establish board-level data protection oversight and brief officers on section 62 _(priority: HIGH)_

**Notes.** ACT_DERIVED. Section 62 states the liability; it does not expressly require board reporting. The oversight arrangement is DataGuard implementation guidance responding to that liability.

### Section 64 - Regulations

#### `PDPA-064-001` Monitoring of regulations made under the Act

**Legal basis:** Section 64(1)-(2) (subsection 64(2), paragraph (a)-(l))  
**Requirement:** `REQ-064-1` - Regulations  
**Source type:** `ACT_DERIVED` · `REGULATORY_DETAIL_PENDING`

> **Statutory text as mapped.** The Minister may make regulations for giving effect to the provisions of this Act, including regulations prescribing exempt instances, registration procedures, the functions of the data protection officer, the functions of the data controller representative, procedures for enforcing rights, procedures for submitting complaints, conditions for processing sensitive personal data, appropriate security standards, fees, procedures for retention and disposal, categories and cases in which transborder data flow may not be allowed, and anything necessary for the better carrying out of the Act.

**Control.** The organisation monitors for regulations made under section 64 and assesses their effect on its controls, because many obligations under the Act are completed by regulations.

**Assessment question.** Do you have someone responsible for watching for new regulations under the Act and working out what they mean for you?

**Why this matters.** A large part of the operational detail in this Act - registration procedure, DPO functions, security standards, retention, transfer prohibitions - is left to regulations. Controls built without them will need revisiting.

**Expected state.** A named owner, a monitoring source, and a documented reassessment trigger for new regulations.

**Implementation guidance.** Assign an owner for regulatory monitoring, subscribe to Government Notice publications, and define how a new regulation triggers reassessment of the affected controls and of the control matrix version.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER_AND_PROCESSOR` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Regulatory Change Log`, `Compliance Calendar`, `Governance Framework` |
| Evidence strength | `MODERATE` |
| Evidence review frequency | `QUARTERLY` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. Missing a new regulation does not itself contravene the Act, but it leaves controls built on incomplete requirements.

**Remediation.** Assign a regulatory monitoring owner and set a quarterly review.

**Suggested task.** Assign ownership for monitoring regulations made under the Act _(priority: MEDIUM)_

**Notes.** ACT_DERIVED. Section 64 empowers the Minister; it imposes no monitoring duty on the organisation. Every control in this matrix marked REGULATORY_DETAIL_PENDING depends on regulations under this section.

### Section 65 - Code of ethics for personal data protection

#### `PDPA-065-001` Code of ethics or personal data protection policy exists

**Legal basis:** Section 65(1) (subsection 65(1))  
**Requirement:** `REQ-065-1` - Code of ethics or policy for personal data protection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Every data controller shall draw and put in place a code of ethics or policy for personal data protection.

**Control.** The data controller has drawn up and put in place a written code of ethics or personal data protection policy.

**Assessment question.** Have you written and put in place a code of ethics or a data protection policy for your organisation?

**Why this matters.** Section 65(1) applies to every data controller with no threshold. It is a document the Commission can ask for at any time, and section 46(2)(i) treats adherence to codes of ethics as relevant to any penalty.

**Expected state.** An approved, dated and versioned code of ethics or data protection policy, communicated to staff.

**Implementation guidance.** Produce a written code or policy, have it approved by the accountable body, and version it. Drawn and put in place implies both adoption and operation, so accompany it with communication and training.

| Field | Value |
| --- | --- |
| Response type | `DOCUMENT_REQUIRED` |
| Answer options | _n/a_ |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Code of Ethics`, `Data Protection Policy`, `Approval Record`, `Training Records` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. The duty applies to every data controller, it is binary, and its absence is immediately apparent to the Commission.

**Remediation.** Draft the code or policy, obtain formal approval, publish it internally, and prepare it for submission under section 65(2).

**Suggested task.** Draw up and adopt a code of ethics or personal data protection policy _(priority: CRITICAL)_

#### `PDPA-065-002` Scope of the code covers ethics and conduct in collection and processing

**Legal basis:** Section 65(1) (subsection 65(1))  
**Requirement:** `REQ-065-1` - Code of ethics or policy for personal data protection  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** The code of ethics or policy shall prescribe for ethics and conduct to be complied with during collection or processing of personal data.

**Control.** The code or policy addresses the ethics and conduct expected during collection and processing of personal data, not merely high-level principles.

**Assessment question.** Does your code or policy actually say how people should behave when collecting and handling personal data?

**Why this matters.** The Act specifies the subject matter: ethics and conduct during collection or processing. A document of general statements does not meet that description.

**Expected state.** A code or policy with conduct provisions covering the full data lifecycle, mapped against the Act.

**Implementation guidance.** Cover conduct expectations at collection, use, disclosure, retention and disposal, together with roles, escalation and consequences of breach. Map the code sections against the Act so gaps are visible.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Code of Ethics`, `Data Protection Policy`, `Policy Coverage Mapping` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Section 65(3) requires the Commission to ascertain whether the draft complies with the Act and the relevant sector, so a thin code will fail at approval.

**Remediation.** Expand the code to cover the full lifecycle and map its sections against the Act before submission.

**Suggested task.** Extend the code of ethics to cover conduct across the data lifecycle _(priority: HIGH)_

#### `PDPA-065-003` Approval and adoption of the code of ethics

**Legal basis:** Section 65(1) (subsection 65(1))  
**Requirement:** `REQ-065-1` - Code of ethics or policy for personal data protection  
**Source type:** `ACT_DERIVED`

> **Statutory text as mapped.** Every data controller shall draw and put in place a code of ethics or policy, which requires formal adoption by the data controller.

**Control.** The code or policy has been formally approved and adopted by the accountable body within the organisation, with the approval recorded.

**Assessment question.** Has your code or policy been formally approved by your board or senior management, with the approval recorded?

**Why this matters.** A draft that has never been adopted has not been put in place. The approval record is also what connects the document to accountable officers for the purposes of section 62.

**Expected state.** An approval record naming the approving body, the date and the version approved.

**Implementation guidance.** Record the approving body, the date and the version. Re-approve on material change.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Board Minutes`, `Approval Record`, `Code of Ethics`, `Version History` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `HIGH` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: High. Without adoption the code is not in place, and the section 65(1) duty remains unmet however good the draft is.

**Remediation.** Take the code to the board or senior management for formal approval and minute it.

**Suggested task.** Obtain and record formal approval of the code of ethics _(priority: HIGH)_

**Notes.** ACT_DERIVED from the requirement to draw and put in place. The Act does not prescribe who must approve the code within the organisation.

#### `PDPA-065-004` Code of ethics submitted to the Commission for approval

**Legal basis:** Section 65(2) (subsection 65(2))  
**Requirement:** `REQ-065-2` - Submission to the Commission  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** Such codes or policies shall be submitted to the Commission for consideration and approval.

**Control.** The code or policy has been submitted to the Commission for consideration and approval, and the submission and any response are retained.

**Assessment question.** Have you submitted your code of ethics or data protection policy to the Commission for approval, and do you have proof?

**Why this matters.** Adoption alone is not enough. Section 65(2) requires submission to the Commission for consideration and approval, and this step is frequently overlooked.

**Expected state.** Proof of submission on file, with the Commission response and approval status tracked.

**Implementation guidance.** Submit the approved code to the Commission, retain proof of submission, track the response, and act on any amendments the Commission requires under section 65(3).

| Field | Value |
| --- | --- |
| Response type | `DOCUMENT_REQUIRED` |
| Answer options | _n/a_ |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `REQUIRED_BY_ACT` |
| Suggested evidence | `Proof of Submission`, `Commission Correspondence`, `Commission Approval`, `Code of Ethics` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `CRITICAL` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Critical. Section 65(2) is expressed in mandatory terms, the step is binary, and an unsubmitted code leaves the section 65 duty only half discharged.

**Remediation.** Submit the approved code to the Commission and retain proof of submission and the response.

**Suggested task.** Submit the code of ethics to the Commission for consideration and approval _(priority: CRITICAL)_

**Notes.** OPEN_QUESTION: the Act does not state a deadline for submission, the form of submission, or the consequence of the Commission not responding.

#### `PDPA-065-005` Engagement with Commission consideration and required amendments

**Legal basis:** Section 65(3) (subsection 65(3))  
**Requirement:** `REQ-065-3` - Commission consideration and amendment before approval  
**Source type:** `ACT_EXPLICIT`

> **Statutory text as mapped.** In considering the codes of ethics or policies, the Commission shall ascertain whether the drafts have complied with the provisions of this Act and the relevant sector and where it considers necessary, seek the views of data subjects or their representatives and consult with the data controller for the purposes of undertaking necessary amendments prior to the approval.

**Control.** The organisation engages with the Commission consultation on its code, implements required amendments, and maintains version control over the code.

**Assessment question.** If the Commission asked for changes to your code before approving it, could you respond, make the changes and track the versions?

**Why this matters.** Approval is a process, not a filing. The Commission may consult data subjects and require amendments before approving.

**Expected state.** A version-controlled code with a record of Commission correspondence, required amendments and the approved version.

**Implementation guidance.** Name an owner for the Commission dialogue, keep a version history of the code, and record which version was submitted, which amendments were required, and which version was approved.

| Field | Value |
| --- | --- |
| Response type | `YES_PARTIAL_NO` |
| Answer options | `Implemented`, `Partially implemented`, `Not implemented`, `Not applicable`, `I do not know` |
| Required | Yes |
| Applicability | `UNIVERSAL` |
| Role scope | `CONTROLLER` |
| Evidence status | `RECOMMENDED_BY_DATAGUARD` |
| Suggested evidence | `Version History`, `Commission Correspondence`, `Amendment Record`, `Code of Ethics` |
| Evidence strength | `STRONG` |
| Evidence review frequency | `ANNUAL` |
| Risk category | `GOVERNANCE` |
| DataGuard default risk | `MEDIUM` |
| Control status | `ACTIVE` · matrix v1.0.0 |

**Risk rationale.** DataGuard default risk classification: Medium. The section directs the Commission, but failing to respond to a consultation stalls approval indefinitely.

**Remediation.** Establish version control over the code and name an owner for Commission correspondence.

**Suggested task.** Maintain version control and Commission correspondence records for the code of ethics _(priority: MEDIUM)_

**Notes.** Section 65(3) directs the Commission. The organisation obligation is derived: it must be able to respond and to amend. Periodic review of the code is IMPLEMENTATION_GUIDANCE; the Act imposes no review cycle.


---

## Coverage audit

Every section of the Act is listed. A section is `NO - no obligation` where it creates no
assessable duty on a data controller or data processor, with the reason stated.

| Part | Section | Section title | Mapped? | Control IDs | Notes |
| --- | --- | --- | --- | --- | --- |
| I | 1 | Short title | NO - no obligation | - | Short title only. No obligation. |
| I | 2 | Application | YES | `PDPA-002-001` | 1 control(s) |
| I | 3 | Interpretation | NO - no obligation | - | Definitions. Feeds control scoping (notably "sensitive personal data", "processing", "data controller", "data processor", "transborder flow") but creates no standalone obligation. |
| I | 4 | Objectives of Act | NO - no obligation | - | Statement of the objectives of the Act. Interpretive, not an obligation. |
| I | 5 | Principles of personal data protection | YES | `PDPA-005-001`, `PDPA-005-002`, `PDPA-005-003`, `PDPA-005-004`, `PDPA-005-005`, `PDPA-005-006`, `PDPA-005-007`, `PDPA-005-008` | 8 control(s) |
| II | 6 | Establishment of Personal Data Protection Commission | NO - no obligation | - | Establishes the Commission as a body corporate. Addressed to the State. |
| II | 7 | Functions of Commission | NO - no obligation | - | Functions of the Commission. Addressed to the Commission. |
| II | 8 | Establishment of Board | NO - no obligation | - | Establishment and composition of the Board. Addressed to the State. |
| II | 9 | Functions of Board | NO - no obligation | - | Functions of the Board. Addressed to the Board. |
| II | 10 | Committees of Board | NO - no obligation | - | Committees of the Board. Addressed to the Board. |
| II | 11 | Appointment of Director General | NO - no obligation | - | Appointment of Director General. Addressed to the President/Minister. |
| II | 12 | Tenure of office of Director General | NO - no obligation | - | Tenure of the Director General. Institutional. |
| II | 13 | Staff of Commission | NO - no obligation | - | Staff of the Commission. Institutional. |
| III | 14 | Registration of data controllers and data processors | YES | `PDPA-014-001`, `PDPA-014-002`, `PDPA-014-003` | 3 control(s) |
| III | 15 | Register of data controllers and data processors | YES | `PDPA-015-001`, `PDPA-015-002` | 2 control(s) |
| III | 16 | Duration of registration | YES | `PDPA-016-001`, `PDPA-016-002` | 2 control(s) |
| III | 17 | Inspection of registered particulars | NO - no obligation | - | Power of the Commission to permit inspection of the register. Addressed to the Commission; no controller obligation. Transparency consequence noted at PDPA-015-002. |
| III | 18 | Deregistration | YES | `PDPA-018-001` | 1 control(s) |
| III | 19 | Offences relating to registration | YES | `PDPA-019-001` | 1 control(s) |
| III | 20 | Appeal relating to registration | YES | `PDPA-020-001` | 1 control(s) |
| III | 21 | Registration of public institutions | YES | `PDPA-021-001` | 1 control(s) |
| IV | 22 | Collection of personal data | YES | `PDPA-022-001`, `PDPA-022-002`, `PDPA-022-003`, `PDPA-022-004` | 4 control(s) |
| IV | 23 | Source and notification of personal data | YES | `PDPA-023-001`, `PDPA-023-002`, `PDPA-023-003` | 3 control(s) |
| IV | 24 | Accuracy of personal data | YES | `PDPA-024-001` | 1 control(s) |
| IV | 25 | Personal data to be used for intended purpose | YES | `PDPA-025-001`, `PDPA-025-002` | 2 control(s) |
| IV | 26 | Limitations on disclosure of personal data | YES | `PDPA-026-001` | 1 control(s) |
| IV | 27 | Security of personal data | YES | `PDPA-027-001`, `PDPA-027-002`, `PDPA-027-003`, `PDPA-027-004`, `PDPA-027-005`, `PDPA-027-006`, `PDPA-027-007`, `PDPA-027-008`, `PDPA-027-009`, `PDPA-027-010`, `PDPA-027-011`, `PDPA-027-012`, `PDPA-027-013`, `PDPA-027-014`, `PDPA-027-015`, `PDPA-027-016`, `PDPA-027-017` | 17 control(s) |
| IV | 28 | Retention and disposal of personal data | YES | `PDPA-028-001`, `PDPA-028-002`, `PDPA-028-003`, `PDPA-028-004`, `PDPA-028-005`, `PDPA-028-006` | 6 control(s) |
| IV | 29 | Correction of personal data | YES | `PDPA-029-001`, `PDPA-029-002`, `PDPA-029-003` | 3 control(s) |
| IV | 30 | Prohibition on processing of sensitive personal data | YES | `PDPA-030-001`, `PDPA-030-002`, `PDPA-030-003`, `PDPA-030-004`, `PDPA-030-005`, `PDPA-030-006`, `PDPA-030-007`, `PDPA-030-008`, `PDPA-030-009`, `PDPA-030-010` | 10 control(s) |
| V | 31 | Transfer of personal data to state with adequate data protection | YES | `PDPA-031-001`, `PDPA-031-002`, `PDPA-031-003`, `PDPA-031-004`, `PDPA-031-005`, `PDPA-031-006`, `PDPA-031-007` | 7 control(s) |
| V | 32 | Transfer of personal data to state without adequate data protection | YES | `PDPA-032-001`, `PDPA-032-002`, `PDPA-032-003`, `PDPA-032-004`, `PDPA-032-005` | 5 control(s) |
| VI | 33 | Right of access to personal data | YES | `PDPA-033-001`, `PDPA-033-002`, `PDPA-033-003`, `PDPA-033-004` | 4 control(s) |
| VI | 34 | Right to prevent processing likely to affect data subject | YES | `PDPA-034-001` | 1 control(s) |
| VI | 35 | Right to prevent processing of personal data for direct marketing purposes | YES | `PDPA-035-001`, `PDPA-035-002` | 2 control(s) |
| VI | 36 | Rights in relation to automated decision making | YES | `PDPA-036-001`, `PDPA-036-002`, `PDPA-036-003`, `PDPA-036-004` | 4 control(s) |
| VI | 37 | Right to compensation | YES | `PDPA-037-001`, `PDPA-037-002`, `PDPA-037-003` | 3 control(s) |
| VI | 38 | Rectification, blocking, erasure and destruction of personal data | YES | `PDPA-038-001`, `PDPA-038-002`, `PDPA-038-003` | 3 control(s) |
| VII | 39 | Complaints against violation of personal data protection principles | YES | `PDPA-039-001` | 1 control(s) |
| VII | 40 | Notice of investigation | YES | `PDPA-040-001` | 1 control(s) |
| VII | 41 | Investigation confidentiality | NO - no obligation | - | Confidentiality duty in investigations, addressed to the Commission and the Director General. |
| VII | 42 | Powers of Commission in carrying out investigations | YES | `PDPA-042-001`, `PDPA-042-002` | 2 control(s) |
| VII | 43 | Obstruction of Commission | YES | `PDPA-043-001` | 1 control(s) |
| VII | 44 | Seeking assistance of another person or authority | NO - no obligation | - | Commission power to seek assistance. Cooperation duty for the organisation is captured at PDPA-042-001 and PDPA-043-001. |
| VII | 45 | Enforcement notice | YES | `PDPA-045-001` | 1 control(s) |
| VII | 46 | Notice of penalty | YES | `PDPA-046-001` | 1 control(s) |
| VII | 47 | Administrative fines | YES | `PDPA-047-001` | 1 control(s) |
| VII | 48 | Review of decision | YES | `PDPA-048-001` | 1 control(s) |
| VII | 49 | Right of appeal | YES | `PDPA-049-001` | 1 control(s) |
| VII | 50 | Payment of compensation | YES | `PDPA-050-001`, `PDPA-050-002` | 2 control(s) |
| VIII | 51 | Sources of funds of Commission | NO - no obligation | - | Sources of funds of the Commission. Institutional. |
| VIII | 52 | Financial management | NO - no obligation | - | Financial management by the Board. Institutional. |
| VIII | 53 | Estimates of income and expenditure and financial control | NO - no obligation | - | Budget estimates of the Commission. Institutional. |
| VIII | 54 | Expenditure of funds | NO - no obligation | - | Expenditure of Commission funds. Institutional. |
| VIII | 55 | Supplementary budget | NO - no obligation | - | Supplementary budget of the Commission. Institutional. |
| VIII | 56 | Accounts and audit | NO - no obligation | - | Accounts and audit of the Commission. Institutional. |
| VIII | 57 | Annual reports and performance agreements | NO - no obligation | - | Annual reports of the Commission. Institutional. |
| IX | 58 | Exceptions from application of provisions of this Act | YES | `PDPA-058-001`, `PDPA-058-002` | 2 control(s) |
| IX | 59 | Preservation order | YES | `PDPA-059-001` | 1 control(s) |
| IX | 60 | Offences of unlawful disclosure of personal data | YES | `PDPA-060-001`, `PDPA-060-002`, `PDPA-060-003`, `PDPA-060-004` | 4 control(s) |
| IX | 61 | Offences of unlawful destruction, deletion, concealment or alteration of personal data | YES | `PDPA-061-001` | 1 control(s) |
| IX | 62 | Offences by company or corporation | YES | `PDPA-062-001` | 1 control(s) |
| IX | 63 | General penalty | NO - no obligation | - | General penalty provision. Consequence, not a discrete obligation. Referenced in the notes of the controls it backs. |
| IX | 64 | Regulations | YES | `PDPA-064-001` | 1 control(s) |
| IX | 65 | Code of ethics for personal data protection | YES | `PDPA-065-001`, `PDPA-065-002`, `PDPA-065-003`, `PDPA-065-004`, `PDPA-065-005` | 5 control(s) |
| SCHEDULE | SCH | Proceedings of the Board (made under section 8(6)) | NO - no obligation | - | Proceedings of the Board. Institutional. |

**Total sections in the Act (including the Schedule):** 66.
**Sections mapped to at least one control:** 43.
**Sections reviewed and recorded as creating no assessable controller or processor obligation:** 23.
**Counted in both categories:** 1 (section 47) - carried as a non-assessable reference record rather than a scored control, so it appears in the mapped column and in the no-obligation list. 43 + 23 = 66.
**Sections neither mapped nor accounted for: 0.**
