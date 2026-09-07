# Tanzania PDPA 2022 - Traceability Matrix

> **GENERATED FILE.** Produced by `scripts/generate-pdpa-artifacts.mjs`. Do not edit by hand.

> This control matrix is a product implementation mapping of the Tanzania Personal Data Protection Act, 2022. It is intended to support compliance management and does not constitute legal advice, legal certification, or an authoritative interpretation of Tanzanian law.

Every control traces along the chain:

```text
Act Section -> Requirement -> Control -> Assessment Question -> Evidence -> Risk -> Task
```

Controls: **123** · Requirements: **96** · Sections with controls: **43**

## Part I - Preliminary Provisions

### Section 2 - Application

**Requirement `REQ-002-1`** (s.2) - Territorial application

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-002-001`<br>Territorial scope determination<br>_ACT_DERIVED_ | Have you worked out which parts of your organisation and which activities the Tanzania Personal Data Protection Act applies to? | Scoping Statement; Data Processing Register; Group Structure Chart<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>GOVERNANCE | Document the territorial and organisational scope of PDPA applicability<br>_MEDIUM_ |

### Section 5 - Principles of personal data protection

**Requirement `REQ-005-A`** (s.5(a)) - Lawful, fair and transparent processing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-001`<br>Lawful, fair and transparent processing<br>_ACT_EXPLICIT_ | Is every use you make of personal data lawful, fair to the people concerned, and openly explained to them? | Privacy Policy; Privacy Notice; Data Processing Register; Data Protection Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>LAWFULNESS | Establish a processing register with a documented lawful basis for each activity<br>_HIGH_ |

**Requirement `REQ-005-B`** (s.5(b)) - Purpose specification and limitation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-002`<br>Purpose specification and limitation<br>_ACT_EXPLICIT_ | For each set of personal data you collect, have you written down exactly why you collect it, and do you keep uses within that reason? | Data Processing Register; Privacy Notice; Purpose Compatibility Assessment<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>PURPOSE_LIMITATION | Record an explicit purpose for every processing activity<br>_HIGH_ |

**Requirement `REQ-005-C`** (s.5(c)) - Data minimisation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-003`<br>Data minimisation<br>_ACT_EXPLICIT_ | Do you collect only the personal information you actually need for the purpose, and no more? | Data Minimisation Review; Data Processing Register; Form and Screen Inventory<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>DATA_MINIMISATION | Review collection forms and remove unnecessary personal data fields<br>_MEDIUM_ |

**Requirement `REQ-005-D`** (s.5(d)) - Accuracy

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-004`<br>Accuracy and prompt rectification<br>_ACT_EXPLICIT_ | Do you keep personal information accurate and up to date, and fix or delete wrong information promptly when you find it? | Data Quality Procedure; Rectification Log; Data Subject Rights Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>DATA_QUALITY | Implement a data accuracy and rectification workflow<br>_MEDIUM_ |

**Requirement `REQ-005-E`** (s.5(e)) - Storage limitation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-005`<br>Storage limitation<br>_ACT_EXPLICIT_ | Do you stop keeping personal information in a form that identifies people once you no longer need it for the purpose? | Retention Schedule; Disposal Log; Data Processing Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>RETENTION | Produce a retention schedule covering all personal data record types<br>_MEDIUM_ |

**Requirement `REQ-005-F`** (s.5(f)) - Processing in accordance with data subject rights

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-006`<br>Processing consistent with data subject rights<br>_ACT_EXPLICIT_ | Are your systems and processes set up so that people can actually exercise their rights over their data? | Data Subject Rights Procedure; System Rights Readiness Assessment; Rights Request Log<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>DATA_SUBJECT_RIGHTS | Assess each system against the Part VI data subject rights<br>_HIGH_ |

**Requirement `REQ-005-G`** (s.5(g)) - Integrity and confidentiality

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-007`<br>Security principle - technical and organisational measures<br>_ACT_EXPLICIT_ | Do you have a set of technical and organisational security measures that protect personal data throughout its life? | Security Policy; Information Security Programme; Risk Assessment; Access Control Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `CRITICAL`<br>SECURITY | Establish and document an information security programme for personal data<br>_CRITICAL_ |

**Requirement `REQ-005-H`** (s.5(h)) - No transfer abroad contrary to the Act

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-005-008`<br>No transfer abroad contrary to the Act<br>_ACT_EXPLICIT_ | Do you make sure that personal data only leaves Tanzania on a basis the Act allows? | Transfer Inventory; Transfer Assessment; Cloud Hosting Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Build an inventory of all cross-border personal data transfers<br>_HIGH_ |

## Part III - Registration of Data Controllers and Data Processors

### Section 14 - Registration of data controllers and data processors

**Requirement `REQ-014-1`** (s.14(1)) - Registration before collecting or processing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-014-001`<br>Registration held before any collection or processing<br>_ACT_EXPLICIT_ | Is your organisation registered with the Personal Data Protection Commission as a data controller or data processor? | Certificate of Registration; Registration Application; Commission Correspondence<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>REGISTRATION | Obtain registration with the Personal Data Protection Commission<br>_CRITICAL_ |

**Requirement `REQ-014-2`** (s.14(2)) - Application for registration

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-014-002`<br>Registration application submitted before intended processing<br>_ACT_EXPLICIT_ | When you plan a new activity involving personal data that your registration does not already cover, do you apply to the Commission first? | Registration Application; Project Intake Checklist; Change Approval Record<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>REGISTRATION | Add a PDPA registration coverage check to the new-processing intake gate<br>_HIGH_ |

**Requirement `REQ-014-4`** (s.14(4)) - Certificate of registration

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-014-003`<br>Certificate of registration retained and retrievable<br>_ACT_EXPLICIT_ | Do you hold your certificate of registration, and can you produce it and state its expiry date? | Certificate of Registration<br>_REQUIRED_BY_ACT · STRONG_ | `MEDIUM`<br>REGISTRATION | File the certificate of registration and record its expiry date<br>_MEDIUM_ |

### Section 15 - Register of data controllers and data processors

**Requirement `REQ-015-3`** (s.15(3)) - Updating registered particulars

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-015-001`<br>Registered particulars kept current<br>_ACT_DERIVED_ | When the details you gave the Commission at registration change, do you apply to have the register updated? | Register Update Application; Registration Review Record; Commission Correspondence<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>REGISTRATION | Assign ownership and review registered particulars annually<br>_MEDIUM_ |
| `PDPA-015-002`<br>Awareness that registered particulars are publicly inspectable<br>_INTERPRETATION_ | Are you aware that the details recorded about you in the Commission register can be inspected by others, and have you reviewed those details with that in mind? | Registration Review Record<br>_RECOMMENDED_BY_DATAGUARD · WEAK_ | `LOW`<br>REGISTRATION | Review the register entry on the basis that it is publicly inspectable<br>_LOW_ |

### Section 16 - Duration of registration

**Requirement `REQ-016-1`** (s.16(1)) - Five year registration period

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-016-001`<br>Registration expiry tracked<br>_ACT_EXPLICIT_ | Do you know the date your registration expires, and is that date being tracked? | Certificate of Registration; Compliance Calendar<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>REGISTRATION | Record the registration expiry date and configure renewal reminders<br>_HIGH_ |

**Requirement `REQ-016-2`** (s.16(2)) - Renewal three months before expiry

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-016-002`<br>Renewal submitted within the three month window<br>_ACT_EXPLICIT_ | Do you submit your renewal application during the three months before your registration expires? | Renewal Application; Proof of Submission; Compliance Calendar<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>REGISTRATION | Diarise the opening of the three month registration renewal window<br>_HIGH_ |

### Section 18 - Deregistration

**Requirement `REQ-018-1`** (s.18) - Deregistration

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-018-001`<br>Response to deregistration by the Commission<br>_INTERPRETATION_ | Do you have a plan for what happens to your processing if the Commission deregisters you? | Incident and Escalation Procedure; Business Continuity Plan<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>REGISTRATION | Define an internal response procedure for deregistration by the Commission<br>_LOW_ |

### Section 19 - Offences relating to registration

**Requirement `REQ-019-1`** (s.19) - No false or misleading registration information

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-019-001`<br>Accuracy of information given at registration and renewal<br>_ACT_EXPLICIT_ | Is the information you give the Commission at registration and renewal checked for accuracy before you send it, and do you keep a copy? | Registration Application; Renewal Application; Pre-submission Review Record<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>REGISTRATION | Introduce pre-submission review and retention for Commission filings<br>_HIGH_ |

### Section 20 - Appeal relating to registration

**Requirement `REQ-020-1`** (s.20) - Appeal to the Minister on registration decisions

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-020-001`<br>Awareness of the registration appeal route<br>_ACT_EXPLICIT_ | If the Commission refused or cancelled your registration, do you know that you can appeal in writing to the Minister and who would handle it? | Compliance Procedure; Regulatory Escalation Matrix<br>_RECOMMENDED_BY_DATAGUARD · WEAK_ | `LOW`<br>ENFORCEMENT | Document the section 20 appeal route to the Minister<br>_LOW_ |

### Section 21 - Registration of public institutions

**Requirement `REQ-021-1`** (s.21) - Public institutions deemed registered

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-021-001`<br>Public institution deemed registration and full compliance<br>_ACT_EXPLICIT_ | If you are a public institution, do you understand that you are treated as already registered but still have to comply with everything else in the Act? | Compliance File Note; Commission Correspondence; Establishing Instrument<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>REGISTRATION | Document deemed registration status and complete the full PDPA assessment<br>_MEDIUM_ |

## Part IV - Collection, Use, Disclosure and Retention of Personal Data

### Section 22 - Collection of personal data

**Requirement `REQ-022-1`** (s.22(1)) - Scope of Part IV

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-022-001`<br>Part IV scope assessment including manual records and non-domiciled processing<br>_ACT_EXPLICIT_ | Have you identified all processing that falls under Part IV, including paper records and any processing you carry out in Tanzania from a business based abroad? | Data Processing Register; Scoping Statement; Records Inventory<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>GOVERNANCE | Extend the processing inventory to manual records and non-domiciled processing<br>_HIGH_ |

**Requirement `REQ-022-2`** (s.22(2)) - Lawful purpose and necessity for collection

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-022-002`<br>Collection tied to a lawful purpose related to a function of the controller<br>_ACT_EXPLICIT_ | Is every collection of personal data linked to a lawful purpose that relates to something your organisation actually does? | Data Processing Register; Purpose and Function Mapping; Privacy Notice<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>LAWFULNESS | Map every collection activity to a lawful purpose and an organisational function<br>_HIGH_ |
| `PDPA-022-003`<br>Necessity test applied at the point of collection<br>_ACT_EXPLICIT_ | Have you checked that each piece of information you collect is necessary for, incidental to, or directly related to the purpose? | Necessity Assessment; Data Minimisation Review; Form and Screen Inventory<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>DATA_MINIMISATION | Apply and record a necessity test at each collection point<br>_MEDIUM_ |

**Requirement `REQ-022-3`** (s.22(3)) - No collection by unlawful means

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-022-004`<br>No collection by unlawful means<br>_ACT_EXPLICIT_ | Are you satisfied that none of your methods of obtaining personal data are unlawful, including data bought or scraped from elsewhere? | Data Source Register; Supplier Data Provenance Declaration; Data Protection Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `CRITICAL`<br>LAWFULNESS | Review acquisition methods and third party data sources for lawfulness<br>_CRITICAL_ |

### Section 23 - Source and notification of personal data

**Requirement `REQ-023-1`** (s.23(1)) - Direct collection from the data subject

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-023-001`<br>Collection directly from the data subject<br>_ACT_EXPLICIT_ | Do you collect personal data directly from the person it is about, rather than from someone else? | Data Processing Register; Data Source Register; Collection Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>COLLECTION | Record the source of collection for every processing activity<br>_HIGH_ |

**Requirement `REQ-023-2`** (s.23(2)) - Pre-collection notification

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-023-002`<br>Pre-collection notice - purposes, authorised purposes and intended recipients<br>_ACT_EXPLICIT_ | Before you collect someone information, do you tell them why you are collecting it and who you intend to share it with? | Privacy Notice; Collection Point Notice Inventory; Call Script; Consent Record<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>TRANSPARENCY | Audit all collection points for a compliant pre-collection notice<br>_HIGH_ |

**Requirement `REQ-023-3`** (s.23(3)) - Exceptions to direct collection

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-023-003`<br>Documented reliance on exceptions to direct collection<br>_ACT_EXPLICIT_ | Where you collect personal data from someone other than the person it is about, have you recorded which legal exception allows that? | Exception Register; Data Source Register; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>COLLECTION | Record the section 23(3) exception relied on for each indirect collection<br>_MEDIUM_ |

### Section 24 - Accuracy of personal data

**Requirement `REQ-024-1`** (s.24) - Accuracy before use

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-024-001`<br>Reasonable steps to verify data before use<br>_ACT_EXPLICIT_ | Before you use personal information to make a decision or take an action, do you take reasonable steps to check it is complete, accurate, relevant and not misleading? | Data Quality Procedure; Verification Control Design; System Validation Rules; Audit Report<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>DATA_QUALITY | Define and implement pre-use verification for high-impact uses of personal data<br>_HIGH_ |

### Section 25 - Personal data to be used for intended purpose

**Requirement `REQ-025-1`** (s.25(1)) - Use for the intended purpose

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-025-001`<br>Use confined to the intended purpose<br>_ACT_EXPLICIT_ | Do you use personal data only for the purpose you originally collected it for? | Data Processing Register; Secondary Use Approval Record; Access Control Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>PURPOSE_LIMITATION | Implement a secondary-use approval process for personal data<br>_HIGH_ |

**Requirement `REQ-025-2`** (s.25(2)) - Permitted secondary use

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-025-002`<br>Secondary use limited to a recorded section 25(2) ground<br>_ACT_EXPLICIT_ | When you use personal data for a new purpose, do you record which of the permitted legal grounds allows it? | Secondary Use Register; Purpose Compatibility Assessment; DPO Approval Record; Consent Record<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>PURPOSE_LIMITATION | Create a secondary use register mapped to the section 25(2) grounds<br>_HIGH_ |

### Section 26 - Limitations on disclosure of personal data

**Requirement `REQ-026-1`** (s.26) - Limitation on disclosure

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-026-001`<br>Disclosure restricted to the section 25 circumstances<br>_ACT_EXPLICIT_ | Do you share personal data with anyone other than the person it is about only where the law allows, and do you keep a record of who you share it with? | Disclosure Register; Data Sharing Agreement; Processor Agreement; Secondary Use Register<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>DISCLOSURE | Build a disclosure register mapping every recipient to a section 25 ground<br>_CRITICAL_ |

### Section 27 - Security of personal data

**Requirement `REQ-027-1`** (s.27(1)) - Reasonable security safeguards

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-001`<br>Reasonable security safeguards programme<br>_ACT_EXPLICIT_ | Do you have reasonable safeguards in place that protect personal data, and have you written down why they are the right ones for your circumstances? | Security Policy; Safeguards Register; Risk Assessment; Audit Report<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>SECURITY | Establish and document reasonable security safeguards for personal data<br>_CRITICAL_ |
| `PDPA-027-002`<br>Protection against negligent loss<br>_ACT_EXPLICIT_ | Are you protected against personal data being lost through carelessness - for example lost laptops, lost files, or failed backups? | Backup and Restore Test Records; Asset Register; Device Encryption Report; Security Policy<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>SECURITY | Implement and evidence controls against negligent loss of personal data<br>_CRITICAL_ |
| `PDPA-027-003`<br>Protection against unauthorised destruction<br>_ACT_EXPLICIT_ | Are you protected against personal data being destroyed or deleted by someone who should not be doing that? | Access Control Procedure; Deletion Authorisation Records; Backup Policy; Audit Log Configuration<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>SECURITY | Restrict and log deletion rights over personal data<br>_CRITICAL_ |
| `PDPA-027-004`<br>Protection against unauthorised alteration<br>_ACT_EXPLICIT_ | Are you protected against personal data being changed by someone who is not authorised to change it? | Access Control Procedure; Change and Audit Logs; Segregation of Duties Matrix<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>SECURITY | Enforce and log write access controls over personal data<br>_HIGH_ |
| `PDPA-027-005`<br>Protection against unauthorised access<br>_ACT_EXPLICIT_ | Are you protected against people seeing personal data when they have no business reason to see it? | Access Control Procedure; Access Review Records; Authentication Policy; Access Logs<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>SECURITY | Implement least privilege and periodic access reviews for personal data<br>_CRITICAL_ |
| `PDPA-027-006`<br>Protection against unauthorised processing<br>_ACT_EXPLICIT_ | Are you protected against personal data being used or analysed in ways nobody has authorised? | Access Control Procedure; Data Flow Diagram; Test Data Management Policy; Integration Register<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>SECURITY | Control and review automated processing and extracts of personal data<br>_HIGH_ |

**Requirement `REQ-027-2A`** (s.27(2)(a)) - Technology and cost factors

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-007`<br>State of technological advancement considered<br>_ACT_EXPLICIT_ | When you choose security measures, do you take account of what current technology makes possible - and revisit that as technology moves? | Security Architecture Review; Technology Refresh Plan; Risk Assessment<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>SECURITY | Establish a periodic technology review of security measures<br>_MEDIUM_ |
| `PDPA-027-008`<br>Cost of implementation considered<br>_ACT_EXPLICIT_ | When you decide on security measures, do you record how you weighed their cost against the protection they give? | Risk Acceptance Record; Security Business Case; Risk Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>SECURITY | Document cost and residual risk decisions for security measures<br>_MEDIUM_ |

**Requirement `REQ-027-2B`** (s.27(2)(b)) - Nature of data and risk to data subject

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-009`<br>Nature of the personal data considered<br>_ACT_EXPLICIT_ | Do you apply stronger protection to more sensitive categories of personal data than to routine data? | Data Classification Policy; Data Inventory with Classification; Security Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>SECURITY | Classify personal data holdings and map safeguards to each classification tier<br>_HIGH_ |
| `PDPA-027-010`<br>Potential risks to the data subject considered<br>_ACT_EXPLICIT_ | When you assess security risk, do you assess the harm to the individuals concerned, not just the harm to your organisation? | Risk Assessment; Risk Assessment Methodology; Data Protection Impact Analysis<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>SECURITY | Add data subject harm as a distinct dimension of the security risk assessment<br>_HIGH_ |

**Requirement `REQ-027-3`** (s.27(3)) - Appointment of a data protection officer

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-011`<br>Data protection officer appointed<br>_ACT_EXPLICIT_ | Have you formally appointed someone as your data protection officer? | DPO Appointment Letter; Board or Management Resolution; Organisation Chart<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>GOVERNANCE | Appoint a data protection officer and issue a signed appointment letter<br>_CRITICAL_ |
| `PDPA-027-012`<br>Data protection officer verifies control and security measures<br>_ACT_EXPLICIT_ | Does your data protection officer actually check that the controls and security measures are working, and report on what they find? | DPO Report; DPO Work Plan; Management Review Minutes; Audit Report<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>GOVERNANCE | Establish a DPO verification and reporting programme<br>_HIGH_ |

**Requirement `REQ-027-4`** (s.27(4)) - Contract governing the data processor

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-013`<br>Written contract in place with every data processor<br>_ACT_EXPLICIT_ | Is there a signed contract in place with every supplier or partner that handles personal data on your behalf? | Processor Agreement; Data Processing Agreement; Processor Inventory; Signed Contract<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>THIRD_PARTY | Put a compliant written contract in place with every data processor<br>_CRITICAL_ |
| `PDPA-027-014`<br>Contract requires the processor to act on controller instructions<br>_ACT_EXPLICIT_ | Does each processor contract say the processor must act on your instructions, and do you actually give and record those instructions? | Processor Agreement; Documented Processing Instructions; Contract Clause Review<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>THIRD_PARTY | Add a controller instructions clause to all processor contracts<br>_HIGH_ |
| `PDPA-027-015`<br>Processor contractually responsible for security standards<br>_ACT_EXPLICIT_ | Does each processor contract make the processor responsible for meeting the security standards the Act requires, and do you check that they do? | Processor Agreement; Processor Security Assurance; Audit Report; Certification Evidence<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>THIRD_PARTY | Obtain security assurance evidence from every data processor<br>_CRITICAL_ |

**Requirement `REQ-027-5`** (s.27(5)) - Security breach notification to the Commission

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-027-016`<br>Security breach notification to the Commission without undue delay<br>_ACT_EXPLICIT_ | Do you have a procedure that notifies the Commission without undue delay whenever there is a security breach affecting personal data - including breaches at your suppliers? | Incident Response Procedure; Breach Notification Log; Breach Response Test Record; Processor Agreement<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>BREACH_NOTIFICATION | Implement and test a security breach notification procedure<br>_CRITICAL_ |
| `PDPA-027-017`<br>Breach detection capability<br>_ACT_DERIVED_ | Would you find out if personal data were breached - in your own systems and at your suppliers? | Monitoring and Alerting Configuration; Incident Reporting Channel; Processor Agreement; Incident Log<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>BREACH_NOTIFICATION | Establish breach detection coverage across all systems holding personal data<br>_HIGH_ |

### Section 28 - Retention and disposal of personal data

**Requirement `REQ-028-1`** (s.28(1)) - Retention for the period specified in law or regulations

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-028-001`<br>Retention periods sourced from law or regulations<br>_ACT_EXPLICIT_ | For each type of personal data you hold, have you identified the retention period set by the relevant law or regulations, and recorded where it comes from? | Retention Schedule; Legal Retention Research Note; Data Processing Register<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>RETENTION | Identify and cite the legal retention period for each personal data record type<br>_HIGH_ |
| `PDPA-028-002`<br>Retention supports the data subject opportunity to access<br>_ACT_EXPLICIT_ | While you hold personal data, can the person it is about still get access to it if they ask? | Retention Schedule; Archive Retrieval Test Record; Data Subject Rights Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>RETENTION | Test retrievability of archived personal data for access requests<br>_MEDIUM_ |
| `PDPA-028-003`<br>Purpose-based retention decisions documented<br>_ACT_DERIVED_ | For each type of personal data, have you written down why you keep it for as long as you do? | Retention Schedule; Retention Decision Record; DPO Approval Record<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>RETENTION | Document the purpose and rationale behind each retention period<br>_MEDIUM_ |
| `PDPA-028-006`<br>Identification of applicable sectoral retention laws<br>_ACT_DERIVED_ | Have you identified the other laws that tell you how long to keep your records - tax, employment, company or sector rules? | Legal Retention Research Note; Retention Schedule; External Counsel Advice<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>RETENTION | Identify the sectoral laws that fix retention periods for your records<br>_MEDIUM_ |

**Requirement `REQ-028-2`** (s.28(2)) - Ministerial regulations on retention and disposal

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-028-004`<br>Secure disposal at the end of the retention period<br>_ACT_EXPLICIT_ | When personal data reaches the end of its retention period, is it securely disposed of, and do you keep a record that this happened? | Disposal Procedure; Disposal Log; Certificate of Destruction; Retention Schedule<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>RETENTION | Implement a secure disposal procedure and disposal log<br>_HIGH_ |
| `PDPA-028-005`<br>Periodic review of the retention schedule<br>_IMPLEMENTATION_GUIDANCE_ | Do you review your retention schedule regularly and update it when the law changes? | Retention Schedule Review Record; Compliance Calendar; Regulatory Change Log<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `LOW`<br>RETENTION | Schedule an annual review of the retention schedule<br>_LOW_ |

### Section 29 - Correction of personal data

**Requirement `REQ-029-1`** (s.29(1)) - Amendment of personal data on application

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-029-001`<br>Correction request procedure<br>_ACT_EXPLICIT_ | Do you have a procedure for handling requests from people to correct their personal data, and do you record what you decided? | Data Subject Rights Procedure; Correction Request Log; Rectification Log<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DATA_SUBJECT_RIGHTS | Implement a personal data correction request procedure<br>_HIGH_ |

**Requirement `REQ-029-2`** (s.29(2)) - Preservation of the pre-amendment record

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-029-002`<br>Pre-amendment record preserved on correction<br>_ACT_EXPLICIT_ | When you correct someone personal data, do you keep a copy of what the record said before you changed it? | System Version History Configuration; Audit Log Sample; Correction Request Log; Technical Design Document<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DATA_INTEGRITY | Ensure all systems preserve the pre-amendment record when personal data is corrected<br>_HIGH_ |

**Requirement `REQ-029-3`** (s.29(3)) - Refusal with reasons

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-029-003`<br>Refusal of a correction request with reasons given<br>_ACT_EXPLICIT_ | If you refuse to correct someone data, do you tell them why, and do you keep a record of your reasons? | Refusal Notice Template; Correction Request Log; Issued Refusal Notices<br>_REQUIRED_BY_ACT · STRONG_ | `MEDIUM`<br>DATA_SUBJECT_RIGHTS | Create a correction refusal notice template that states reasons<br>_MEDIUM_ |

### Section 30 - Prohibition on processing of sensitive personal data

**Requirement `REQ-030-1`** (s.30(1)) - Prior written consent for sensitive personal data

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-030-001`<br>Identification of sensitive personal data holdings<br>_ACT_EXPLICIT_ | Have you identified everywhere you hold sensitive personal data - such as health, biometric, genetic, financial transaction, children data, criminal offence data, or data revealing race, religion, political opinion, trade union membership, gender or sex life? | Data Processing Register; Data Classification Policy; Sensitive Data Inventory<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `CRITICAL`<br>SENSITIVE_DATA | Identify and flag all sensitive personal data holdings<br>_CRITICAL_ |
| `PDPA-030-002`<br>Prior written consent obtained for sensitive personal data<br>_ACT_EXPLICIT_ | Where you process sensitive personal data on the basis of consent, did you get that consent in writing before you started, and can you produce it? | Consent Record; Consent Form Template; Consent Management System Export<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>SENSITIVE_DATA | Implement written prior consent capture for sensitive personal data<br>_CRITICAL_ |
| `PDPA-030-009`<br>Enhanced security and access restriction for sensitive personal data<br>_ACT_DERIVED_ | Is access to sensitive personal data more tightly restricted than access to your ordinary personal data? | Access Control Procedure; Access Review Records; Data Classification Policy; Encryption Standard<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>SENSITIVE_DATA | Apply enhanced access restrictions to sensitive personal data holdings<br>_CRITICAL_ |
| `PDPA-030-010`<br>Documentation of sensitive personal data processing<br>_INTERPRETATION_ | Do you keep a single record showing every use of sensitive personal data and what makes each one lawful? | Sensitive Data Inventory; Data Processing Register; DPO Report; Consent Record<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>SENSITIVE_DATA | Maintain a consolidated record of all sensitive personal data processing<br>_HIGH_ |

**Requirement `REQ-030-2`** (s.30(2)) - Withdrawal of consent

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-030-003`<br>Consent withdrawal at any time, free of charge and without explanation<br>_ACT_EXPLICIT_ | Can people withdraw their consent at any time, without giving a reason and without paying anything - and does that actually stop the processing? | Consent Withdrawal Procedure; Withdrawal Log; System Configuration Evidence; Consent Record<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>SENSITIVE_DATA | Implement a free, no-explanation consent withdrawal channel<br>_HIGH_ |

**Requirement `REQ-030-3`** (s.30(3)) - Circumstances where the prohibition cannot be removed by consent

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-030-008`<br>Monitoring of absolute prohibitions on sensitive data processing<br>_ACT_EXPLICIT_ | Do you check whether any regulations forbid certain sensitive data processing outright, even where you have consent? | Regulatory Change Log; Legal Assessment Note; Sensitive Data Exception Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>SENSITIVE_DATA | Monitor for regulations made under section 30(3)<br>_LOW_ |

**Requirement `REQ-030-4`** (s.30(4)) - Consent on behalf of persons unable to consent

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-030-004`<br>Consent obtained from the authorised representative where the data subject cannot consent<br>_ACT_EXPLICIT_ | Where the person cannot give consent themselves - for example a child - do you obtain consent from their parent, guardian or other authorised representative, and do you check that authority? | Consent Record; Guardian Authority Verification Record; Age Verification Procedure<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>SENSITIVE_DATA | Implement representative consent capture for minors and persons unable to consent<br>_CRITICAL_ |

**Requirement `REQ-030-5`** (s.30(5)) - Exceptions to the consent requirement

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-030-005`<br>Documented reliance on the sensitive data consent exceptions<br>_ACT_EXPLICIT_ | Where you process sensitive personal data without consent, have you recorded which legal exception allows it? | Sensitive Data Exception Register; Legal Assessment Note; DPO Approval Record<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>SENSITIVE_DATA | Record the section 30(5) exception relied on for each non-consent sensitive processing activity<br>_HIGH_ |
| `PDPA-030-006`<br>Scientific research exception conditional on Commission guidelines<br>_ACT_EXPLICIT_ | If you process sensitive personal data for scientific research without consent, have you confirmed that the Commission has issued guidelines covering it and that you fall within them? | Commission Guidelines Reference; Research Ethics Approval; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>SENSITIVE_DATA | Confirm the availability of the section 30(5)(e) scientific research exception<br>_HIGH_ |
| `PDPA-030-007`<br>Medical processing supervised by a health professional<br>_ACT_EXPLICIT_ | Where you process health-related sensitive data for medical reasons without consent, is that processing supervised by a recognised health professional? | Health Professional Supervision Record; Professional Registration Evidence; Clinical Governance Policy<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>SENSITIVE_DATA | Record health professional supervision for medical sensitive data processing<br>_HIGH_ |

## Part V - Transborder Data Flow

### Section 31 - Transfer of personal data to state with adequate data protection

**Requirement `REQ-031-1`** (s.31(1)) - Commission power to prohibit transfers

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-031-007`<br>Compliance with Commission transfer prohibitions<br>_ACT_EXPLICIT_ | Do you check whether the Commission has prohibited transfers to any of the places you send data to, and could you stop such a transfer quickly? | Regulatory Change Log; Transfer Inventory; Incident and Escalation Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>CROSS_BORDER_TRANSFER | Monitor for and be able to act on Commission transfer prohibitions<br>_MEDIUM_ |

**Requirement `REQ-031-2`** (s.31(2)) - Transfer to a state with adequate protection

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-031-001`<br>Identification and inventory of international transfers<br>_ACT_DERIVED_ | Have you listed every occasion on which personal data leaves Tanzania, by any means? | Transfer Inventory; Cloud Hosting Register; Data Flow Diagram; Processor Inventory<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Build a complete inventory of transborder personal data flows<br>_HIGH_ |
| `PDPA-031-002`<br>Destination country legal framework assessed<br>_ACT_EXPLICIT_ | For each country you send personal data to, have you assessed whether its laws provide adequate data protection, and written that assessment down? | Transfer Assessment; Legal Assessment Note; External Counsel Advice<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Assess the data protection legal framework of each destination country<br>_HIGH_ |
| `PDPA-031-003`<br>Recipient establishes the statutory ground for the transfer<br>_ACT_EXPLICIT_ | For each transfer, has the recipient shown you why the data is needed, and have you kept that in writing? | Recipient Necessity Statement; Transfer Assessment; Data Sharing Agreement<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Obtain written necessity statements from transfer recipients<br>_HIGH_ |

**Requirement `REQ-031-3`** (s.31(3)) - Provisional evaluation of necessity

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-031-004`<br>Controller provisional evaluation of transfer necessity<br>_ACT_EXPLICIT_ | Before you send personal data abroad, do you make and record your own judgement that the transfer is necessary? | Transfer Assessment; Provisional Necessity Evaluation; DPO Approval Record<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Complete a provisional necessity evaluation for every cross-border transfer<br>_HIGH_ |

**Requirement `REQ-031-4`** (s.31(4)) - Subsequent verifiability of necessity

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-031-005`<br>Recipient maintains verifiable evidence of necessity<br>_ACT_EXPLICIT_ | Have you required your overseas recipients to keep records that would let the necessity for the transfer be checked afterwards? | Data Sharing Agreement; Processor Agreement; Transfer Assessment<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>CROSS_BORDER_TRANSFER | Add a necessity verification clause to cross-border transfer agreements<br>_MEDIUM_ |

**Requirement `REQ-031-5`** (s.31(5)) - Recipient processing limited to transfer purposes

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-031-006`<br>Recipient processing limited to the transfer purpose<br>_ACT_EXPLICIT_ | Do you make sure your overseas recipients only use the data for the purpose you sent it for? | Data Sharing Agreement; Processor Agreement; Recipient Compliance Confirmation<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Bind recipients to the transfer purpose and obtain periodic confirmation<br>_HIGH_ |

### Section 32 - Transfer of personal data to state without adequate data protection

**Requirement `REQ-032-1`** (s.32(1)) - Transfer to other recipient states

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-032-001`<br>Transfer solely to permit processing authorised to the controller<br>_ACT_EXPLICIT_ | Where you transfer data under section 32, is it only so the recipient can carry out processing you are yourself authorised to do? | Transfer Assessment; Data Sharing Agreement; Data Processing Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Map recipient processing to the controller authorised processing for section 32 transfers<br>_HIGH_ |

**Requirement `REQ-032-2`** (s.32(2)) - Adequacy assessment factors

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-032-002`<br>Adequacy assessment against the six statutory factors<br>_ACT_EXPLICIT_ | Does your assessment of each destination country cover all six factors the Act lists, including the laws in force there and the security measures actually followed? | Transfer Assessment; Adequacy Assessment Template; External Counsel Advice; DPO Approval Record<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Complete a six-factor adequacy assessment for each destination country<br>_HIGH_ |

**Requirement `REQ-032-3`** (s.32(3)) - Regulations specifying unauthorised transfers

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-032-003`<br>Monitoring of prohibited transfer categories set by regulations<br>_ACT_EXPLICIT_ | Do you check whether regulations forbid transferring certain categories of data or in certain circumstances? | Regulatory Change Log; Transfer Inventory; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>CROSS_BORDER_TRANSFER | Monitor for regulations prohibiting categories of transborder transfer<br>_MEDIUM_ |

**Requirement `REQ-032-4`** (s.32(4)) - Derogations permitting transfer

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-032-004`<br>Documented reliance on a section 32(4) transfer derogation<br>_ACT_EXPLICIT_ | Where you transfer data to a country without adequate protection, have you recorded which specific legal exception allows it? | Transfer Derogation Register; Consent Record; Contract; Legal Assessment Note<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>CROSS_BORDER_TRANSFER | Record the section 32(4) derogation relied on for each transfer<br>_HIGH_ |

**Requirement `REQ-032-5`** (s.32(5)) - Commission authorisation on adequate safeguards

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-032-005`<br>Commission authorisation on the basis of adequate safeguards<br>_ACT_EXPLICIT_ | Where you rely on safeguards such as contract clauses to transfer data to a country without adequate protection, have you obtained the Commission authorisation? | Commission Authorisation; Contractual Safeguards Package; Transfer Assessment; Security Measures Description<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>CROSS_BORDER_TRANSFER | Obtain Commission authorisation for safeguards-based transfers<br>_CRITICAL_ |

## Part VI - Rights of Data Subjects

### Section 33 - Right of access to personal data

**Requirement `REQ-033-1A`** (s.33(1)(a)) - Right to confirmation of processing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-033-001`<br>Right of access - confirmation of processing<br>_ACT_EXPLICIT_ | If someone asks whether you hold or use their personal data, can you find out and tell them - including data held by your suppliers on your behalf? | Data Subject Rights Procedure; Rights Request Log; System Search Map; Processor Agreement<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DATA_SUBJECT_RIGHTS | Implement a data subject access request procedure<br>_HIGH_ |

**Requirement `REQ-033-1B`** (s.33(1)(b)) - Right to a description of the data, purposes and recipients

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-033-002`<br>Right of access - description of data, purposes and recipients<br>_ACT_EXPLICIT_ | Can you tell someone what personal data you hold about them, why you use it, and who you share it with? | Access Response Template; Rights Request Log; Data Processing Register; Disclosure Register<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DATA_SUBJECT_RIGHTS | Create an access response template covering data, purposes and recipients<br>_HIGH_ |

**Requirement `REQ-033-1C`** (s.33(1)(c)) - Right to be informed of the logic of automated decisions

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-033-003`<br>Disclosure of the logic involved in automated decision making<br>_ACT_EXPLICIT_ | Where a computer alone makes or is likely to make a decision that significantly affects someone, can you explain to them how that decision is reached? | Automated Decision System Inventory; Model Logic Description; Access Response Template; Technical Design Document<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>AUTOMATED_DECISION_MAKING | Prepare plain-language logic descriptions for automated decision systems<br>_HIGH_ |

**Requirement `REQ-033-2`** (s.33(2)) - Exceptions to informing the data subject

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-033-004`<br>Documented reliance on access exceptions<br>_ACT_EXPLICIT_ | Where you decline to give someone information about their data, have you recorded which of the three legal grounds applies? | Rights Request Log; Refusal Notice Template; Court Order; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `MEDIUM`<br>DATA_SUBJECT_RIGHTS | Record the section 33(2) ground for each refused access request<br>_MEDIUM_ |

### Section 34 - Right to prevent processing likely to affect data subject

**Requirement `REQ-034-1`** (s.34(1)) - Right to prevent processing likely to cause substantial damage

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-034-001`<br>Right to prevent processing likely to cause substantial damage<br>_ACT_EXPLICIT_ | If someone asks you to stop or not start processing their data because it would cause them substantial damage, can you assess that and actually suspend the processing? | Data Subject Rights Procedure; Rights Request Log; System Suspension Capability Evidence<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DATA_SUBJECT_RIGHTS | Implement the right to prevent processing, including technical suspension capability<br>_HIGH_ |

### Section 35 - Right to prevent processing of personal data for direct marketing purposes

**Requirement `REQ-035-1`** (s.35(1)) - Right to stop direct marketing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-035-001`<br>Right to stop direct marketing<br>_ACT_EXPLICIT_ | If someone asks you to stop marketing to them, does that stop across every channel you use - email, SMS, phone, post and any other? | Suppression List Configuration; Marketing Opt-out Log; Data Subject Rights Procedure; Agency Agreement<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>DIRECT_MARKETING | Implement a cross-channel marketing suppression capability<br>_HIGH_ |

**Requirement `REQ-035-2`** (s.35(2)) - Agreement for pecuniary benefit

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-035-002`<br>Agreements for use of personal data for pecuniary benefit<br>_ACT_EXPLICIT_ | Do you have any arrangements where people agree to let you use their personal data in return for a payment or benefit, and are those agreements documented? | Data Use Agreement; Consent Record; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>DIRECT_MARKETING | Document any agreements for use of personal data for pecuniary benefit<br>_LOW_ |

### Section 36 - Rights in relation to automated decision making

**Requirement `REQ-036-1`** (s.36(1)) - Right to require that decisions are not based solely on automated processing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-036-001`<br>Right to require human involvement in significant decisions<br>_ACT_EXPLICIT_ | If someone asks that a significant decision about them is not made by computer alone, can you arrange for a person to be involved? | Automated Decision System Inventory; Human Review Procedure; Review Decision Log<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>AUTOMATED_DECISION_MAKING | Establish a human review path for solely automated significant decisions<br>_HIGH_ |

**Requirement `REQ-036-2`** (s.36(2)) - Notification and reconsideration of automated decisions

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-036-002`<br>Proactive notification of solely automated decisions<br>_ACT_EXPLICIT_ | When a computer alone makes a significant decision about someone, do you tell them that is how the decision was made? | Decision Notification Template; Sent Notification Records; Automated Decision System Inventory<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>AUTOMATED_DECISION_MAKING | Add automated decision notification to decision output templates<br>_HIGH_ |
| `PDPA-036-003`<br>Reconsideration of a solely automated decision on request<br>_ACT_EXPLICIT_ | If someone asks you to reconsider a decision that was made by computer alone, do you have a process to do that and record the outcome? | Reconsideration Procedure; Reconsideration Log; Rights Request Log<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>AUTOMATED_DECISION_MAKING | Implement a reconsideration process for automated decisions<br>_HIGH_ |

**Requirement `REQ-036-3`** (s.36(3)) - Exceptions for automated decisions

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-036-004`<br>Documented reliance on automated decision exceptions<br>_ACT_EXPLICIT_ | Where you treat the automated decision rules as not applying, have you recorded which of the three exceptions you rely on? | Automated Decision System Inventory; Consent Record; Contract; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>AUTOMATED_DECISION_MAKING | Record the section 36(3) exception relied on for each automated decision type<br>_MEDIUM_ |

### Section 37 - Right to compensation

**Requirement `REQ-037-1`** (s.37(1)-(2)) - Right to compensation for damage

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-037-001`<br>Handling of compensation claims from data subjects<br>_ACT_EXPLICIT_ | If someone claims they have been harmed by the way you handled their data and asks for compensation, do you have a process to assess and respond to that? | Claims Handling Procedure; Claims Register; Incident Response Procedure; Legal Assessment Note<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Establish a procedure for handling data subject compensation claims<br>_MEDIUM_ |

**Requirement `REQ-037-3`** (s.37(3)) - Commission order for rectification, blocking, erasure or destruction

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-037-002`<br>Capability to execute a Commission rectification, blocking, erasure or destruction order<br>_ACT_EXPLICIT_ | If the Commission ordered you to correct, block, erase or destroy specific personal data, could you do it across all your systems and prove it? | System Capability Assessment; Order Execution Log; Processor Agreement; Technical Design Document<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>ENFORCEMENT | Verify rectify, block, erase and destroy capability across all systems<br>_HIGH_ |

**Requirement `REQ-037-4`** (s.37(4)-(5)) - Notification of third parties following a Commission order

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-037-003`<br>Ability to notify third party recipients following a Commission order<br>_ACT_EXPLICIT_ | Could you identify and contact everyone you have shared a person data with, if the Commission ordered you to tell them about a correction or deletion? | Disclosure Register; Recipient Contact List; Notification Template; Order Execution Log<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Ensure the disclosure register supports per-data-subject recipient notification<br>_MEDIUM_ |

### Section 38 - Rectification, blocking, erasure and destruction of personal data

**Requirement `REQ-038-1`** (s.38(1)-(2)) - Commission order to rectify, block, erase or destroy inaccurate data

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-038-001`<br>Compliance with a Commission order on inaccurate personal data<br>_ACT_EXPLICIT_ | If the Commission ordered you to correct or remove inaccurate personal data, could you comply - even where you recorded it accurately from someone else? | Order Execution Log; System Capability Assessment; Data Source Register; Rectification Log<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>ENFORCEMENT | Verify durable correction of third party sourced personal data<br>_HIGH_ |

**Requirement `REQ-038-3`** (s.38(3)) - Direction to correct personal data

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-038-002`<br>Compliance with a Commission direction to correct personal data<br>_ACT_EXPLICIT_ | If the Commission directed you to correct data in a particular way, could you carry that out exactly and show that you did? | Order Execution Log; Rectification Log; System Version History Configuration<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>ENFORCEMENT | Establish an execution log for Commission directions and orders<br>_HIGH_ |

**Requirement `REQ-038-4`** (s.38(4)) - Notification of third parties after rectification or erasure

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-038-003`<br>Notification of third parties after action under section 38<br>_ACT_EXPLICIT_ | After you correct or remove data under a Commission order, do you tell everyone you previously shared that data with? | Disclosure Register; Third Party Notification Records; Order Execution Log; Notification Template<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>ENFORCEMENT | Build third party notification into the section 38 execution process<br>_HIGH_ |

## Part VII - Investigation of Complaints

### Section 39 - Complaints against violation of personal data protection principles

**Requirement `REQ-039-1`** (s.39(1)-(4)) - Complaints to the Commission and investigation timeline

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-039-001`<br>Internal complaint handling and readiness for Commission complaints<br>_ACT_DERIVED_ | Do you have a way for people to complain to you about how you handle their data, and are you ready to respond if they complain to the Commission instead? | Complaints Procedure; Complaint Log; Privacy Notice; Regulatory Response Plan<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Establish an internal data protection complaints channel and log<br>_MEDIUM_ |

### Section 40 - Notice of investigation

**Requirement `REQ-040-1`** (s.40) - Notice of investigation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-040-001`<br>Handling of a notice of investigation<br>_ACT_DERIVED_ | If a notice of investigation arrived from the Commission today, do you know who would receive it, who would own the response, and what would be preserved? | Regulatory Response Plan; Escalation Matrix; Evidence Preservation Procedure<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Define a handling procedure for Commission notices of investigation<br>_MEDIUM_ |

### Section 42 - Powers of Commission in carrying out investigations

**Requirement `REQ-042-1`** (s.42(1)-(2)) - Powers of the Commission in investigations

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-042-001`<br>Cooperation with Commission investigation powers<br>_ACT_DERIVED_ | Would your staff know what to do if officers from the Commission arrived to inspect your premises, records or devices? | Regulatory Visit Protocol; Training Records; Regulatory Response Plan<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>ENFORCEMENT | Issue and brief a Commission regulatory visit protocol<br>_HIGH_ |

**Requirement `REQ-042-3`** (s.42(3)-(4)) - No withholding of personal data from the Commission

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-042-002`<br>No personal data withheld from the Commission<br>_ACT_EXPLICIT_ | Do the people who would handle a Commission examination understand that personal data cannot be withheld from it, even where another law might otherwise suggest confidentiality? | Regulatory Visit Protocol; Legal Assessment Note; Training Records<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Record the section 42(3) position in the regulatory visit protocol<br>_MEDIUM_ |

### Section 43 - Obstruction of Commission

**Requirement `REQ-043-1`** (s.43) - Obstruction of the Commission

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-043-001`<br>Non-obstruction of the Commission<br>_ACT_EXPLICIT_ | Are your people instructed to cooperate fully with the Commission, allow lawful entry, and never give it information that is false or misleading? | Regulatory Visit Protocol; Data Protection Policy; Submission Review Record; Training Records<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>ENFORCEMENT | Issue a Commission cooperation policy and brief relevant staff<br>_HIGH_ |

### Section 45 - Enforcement notice

**Requirement `REQ-045-1`** (s.45(1)-(2)) - Enforcement notice

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-045-001`<br>Compliance with an enforcement notice within the specified period<br>_ACT_EXPLICIT_ | If you received an enforcement notice, could you implement the required measures within the period given and prove you had done so? | Enforcement Notice Register; Remediation Plan; Completion Evidence; Commission Correspondence<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>ENFORCEMENT | Establish an enforcement notice tracking and remediation process<br>_CRITICAL_ |

### Section 46 - Notice of penalty

**Requirement `REQ-046-1`** (s.46(1)-(2)) - Penalty notice and its determining factors

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-046-001`<br>Readiness to evidence the section 46(2) mitigating factors<br>_ACT_DERIVED_ | If the Commission were deciding whether to fine you, could you produce evidence of your safeguards, your cooperation, your self-reporting and your code of ethics? | Incident Log; Breach Notification Log; Commission Correspondence; Code of Ethics; Security Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Map the section 46(2) penalty factors to retrievable evidence<br>_MEDIUM_ |

### Section 47 - Administrative fines

**Requirement `REQ-047-1`** (s.47) - Maximum administrative fine

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-047-001`<br>Reference record - statutory ceiling on administrative fines<br>_ACT_EXPLICIT_ | Reference only - no response required. The maximum administrative penalty the Commission may impose in a penalty notice is TZS 100,000,000. | _none_<br>_NOT_APPLICABLE · NOT_APPLICABLE_ | `LOW`<br>ENFORCEMENT | _none_ |

### Section 48 - Review of decision

**Requirement `REQ-048-1`** (s.48) - Review of a Commission decision

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-048-001`<br>Use of the review of decision route<br>_ACT_EXPLICIT_ | Do you know that you can ask the Commission to review a decision or direction it has given, and who would prepare that request? | Regulatory Response Plan; Escalation Matrix<br>_RECOMMENDED_BY_DATAGUARD · WEAK_ | `LOW`<br>ENFORCEMENT | Document the section 48 review route in the regulatory response plan<br>_LOW_ |

### Section 49 - Right of appeal

**Requirement `REQ-049-1`** (s.49) - Right of appeal to the High Court

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-049-001`<br>Awareness and preparedness for appeal to the High Court<br>_ACT_EXPLICIT_ | If you disagreed with an enforcement notice or a penalty, do you know that you can appeal to the High Court and who would instruct counsel? | Regulatory Response Plan; External Counsel Retainer; Escalation Matrix<br>_RECOMMENDED_BY_DATAGUARD · WEAK_ | `LOW`<br>ENFORCEMENT | Document the section 49 High Court appeal route<br>_LOW_ |

### Section 50 - Payment of compensation

**Requirement `REQ-050-1`** (s.50(1)) - Commission order to pay compensation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-050-001`<br>Compliance with a Commission compensation order<br>_ACT_EXPLICIT_ | If the Commission ordered you to pay compensation to affected individuals, could you identify them, pay them and evidence that you had? | Incident Log; Claims Register; Payment Records; Insurance Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>ENFORCEMENT | Ensure incident records identify affected data subjects for compensation purposes<br>_MEDIUM_ |

**Requirement `REQ-050-2`** (s.50(2)-(3)) - Liability of controllers and processors

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-050-002`<br>Processor compliance with controller lawful instructions<br>_ACT_EXPLICIT_ | Where you process personal data for someone else, do you keep records showing you acted only on their lawful instructions? | Documented Processing Instructions; Processor Agreement; Instruction Deviation Log<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>THIRD_PARTY | Maintain documented controller instructions for all processor engagements<br>_HIGH_ |

## Part IX - Miscellaneous Provisions

### Section 58 - Exceptions from application of provisions of this Act

**Requirement `REQ-058-1`** (s.58(1)) - Exemptions do not displace the principles or security duties

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-058-002`<br>Principles and security duties continue to apply to exempt processing<br>_ACT_EXPLICIT_ | Where processing is exempt, do you still apply the data protection principles and keep the data secure? | Exemption Register; Security Policy; Risk Assessment; Data Protection Policy<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>GOVERNANCE | Apply the principles and security measures to exempt processing<br>_HIGH_ |

**Requirement `REQ-058-2`** (s.58(2)-(3)) - Exempted processing

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-058-001`<br>Documented reliance on the section 58 exemptions<br>_ACT_EXPLICIT_ | Where you treat some processing as exempt from the Act, have you recorded exactly which exemption applies and why? | Exemption Register; Legal Assessment Note; External Counsel Advice; Court Order<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>GOVERNANCE | Record and scope every reliance on a section 58 exemption<br>_HIGH_ |

### Section 59 - Preservation order

**Requirement `REQ-059-1`** (s.59) - Preservation order

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-059-001`<br>Compliance with a court preservation order<br>_ACT_EXPLICIT_ | If a court ordered you to preserve specific personal data, could you stop it being deleted or changed - including by automated retention jobs? | Legal Hold Procedure; Legal Hold Register; System Capability Assessment; Court Order<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>ENFORCEMENT | Implement a legal hold capability that suspends automated deletion<br>_HIGH_ |

### Section 60 - Offences of unlawful disclosure of personal data

**Requirement `REQ-060-1`** (s.60(1)) - Unlawful disclosure by a data controller

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-060-001`<br>Prevention of disclosure incompatible with the collection purpose<br>_ACT_EXPLICIT_ | Do your controls and your staff training prevent personal data being shared in ways that clash with the purpose it was collected for? | Disclosure Register; Data Protection Policy; Training Records; Access Control Procedure<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>DISCLOSURE | Implement controls and training against incompatible disclosure of personal data<br>_CRITICAL_ |

**Requirement `REQ-060-2`** (s.60(2)) - Unlawful disclosure by a data processor

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-060-002`<br>Processor discloses only with prior controller authority<br>_ACT_EXPLICIT_ | Where you process data for someone else, do you get their permission in advance before disclosing it to anyone, and do you keep a record? | Disclosure Authority Log; Processor Agreement; Documented Processing Instructions; Training Records<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>DISCLOSURE | Implement a prior controller authority check for processor disclosures<br>_CRITICAL_ |

**Requirement `REQ-060-3`** (s.60(3)) - Unlawful obtaining or disclosure of personal data

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-060-003`<br>No obtaining or onward disclosure of personal data without authority<br>_ACT_EXPLICIT_ | Are your people clear that taking personal data from another organisation without permission, or passing personal data to an outsider, is a criminal offence? | Acceptable Use Policy; Employment Terms; Training Records; Data Source Register<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `HIGH`<br>DISCLOSURE | Add unauthorised obtaining and disclosure to policy and induction training<br>_HIGH_ |

**Requirement `REQ-060-4`** (s.60(4)-(5)) - Offering personal data for sale

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-060-004`<br>No offering of unlawfully obtained personal data for sale<br>_ACT_EXPLICIT_ | Do you have any commercial arrangement that involves selling or advertising the sale of personal data, and have you checked how that data was obtained? | Data Monetisation Register; Data Source Register; Legal Assessment Note; Data Protection Policy<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `CRITICAL`<br>DISCLOSURE | Review any sale or advertising of personal data for lawfulness<br>_CRITICAL_ |

### Section 61 - Offences of unlawful destruction, deletion, concealment or alteration of personal data

**Requirement `REQ-061-1`** (s.61) - Unlawful destruction, deletion, concealment or alteration

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-061-001`<br>Prevention of unlawful destruction, deletion, concealment or alteration<br>_ACT_EXPLICIT_ | Are you able to prevent, and to detect afterwards, anyone unlawfully deleting, hiding or altering personal data? | Access Control Procedure; Audit Log Configuration; Monitoring and Alerting Configuration; Training Records<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>DATA_INTEGRITY | Restrict destructive rights and enable tamper-evident logging over personal data<br>_HIGH_ |

### Section 62 - Offences by company or corporation

**Requirement `REQ-062-1`** (s.62) - Offences by a company or corporation

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-062-001`<br>Officer accountability and board oversight of data protection<br>_ACT_DERIVED_ | Do your directors and senior officers know they can be personally liable, and does the board receive regular reporting on data protection? | Board Minutes; Officer Briefing Record; DPO Report; Governance Framework<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>GOVERNANCE | Establish board-level data protection oversight and brief officers on section 62<br>_HIGH_ |

### Section 64 - Regulations

**Requirement `REQ-064-1`** (s.64(1)-(2)) - Regulations

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-064-001`<br>Monitoring of regulations made under the Act<br>_ACT_DERIVED_ | Do you have someone responsible for watching for new regulations under the Act and working out what they mean for you? | Regulatory Change Log; Compliance Calendar; Governance Framework<br>_RECOMMENDED_BY_DATAGUARD · MODERATE_ | `MEDIUM`<br>GOVERNANCE | Assign ownership for monitoring regulations made under the Act<br>_MEDIUM_ |

### Section 65 - Code of ethics for personal data protection

**Requirement `REQ-065-1`** (s.65(1)) - Code of ethics or policy for personal data protection

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-065-001`<br>Code of ethics or personal data protection policy exists<br>_ACT_EXPLICIT_ | Have you written and put in place a code of ethics or a data protection policy for your organisation? | Code of Ethics; Data Protection Policy; Approval Record; Training Records<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>GOVERNANCE | Draw up and adopt a code of ethics or personal data protection policy<br>_CRITICAL_ |
| `PDPA-065-002`<br>Scope of the code covers ethics and conduct in collection and processing<br>_ACT_EXPLICIT_ | Does your code or policy actually say how people should behave when collecting and handling personal data? | Code of Ethics; Data Protection Policy; Policy Coverage Mapping<br>_REQUIRED_BY_ACT · STRONG_ | `HIGH`<br>GOVERNANCE | Extend the code of ethics to cover conduct across the data lifecycle<br>_HIGH_ |
| `PDPA-065-003`<br>Approval and adoption of the code of ethics<br>_ACT_DERIVED_ | Has your code or policy been formally approved by your board or senior management, with the approval recorded? | Board Minutes; Approval Record; Code of Ethics; Version History<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `HIGH`<br>GOVERNANCE | Obtain and record formal approval of the code of ethics<br>_HIGH_ |

**Requirement `REQ-065-2`** (s.65(2)) - Submission to the Commission

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-065-004`<br>Code of ethics submitted to the Commission for approval<br>_ACT_EXPLICIT_ | Have you submitted your code of ethics or data protection policy to the Commission for approval, and do you have proof? | Proof of Submission; Commission Correspondence; Commission Approval; Code of Ethics<br>_REQUIRED_BY_ACT · STRONG_ | `CRITICAL`<br>GOVERNANCE | Submit the code of ethics to the Commission for consideration and approval<br>_CRITICAL_ |

**Requirement `REQ-065-3`** (s.65(3)) - Commission consideration and amendment before approval

| Control | Assessment question | Evidence | Risk | Task |
| --- | --- | --- | --- | --- |
| `PDPA-065-005`<br>Engagement with Commission consideration and required amendments<br>_ACT_EXPLICIT_ | If the Commission asked for changes to your code before approving it, could you respond, make the changes and track the versions? | Version History; Commission Correspondence; Amendment Record; Code of Ethics<br>_RECOMMENDED_BY_DATAGUARD · STRONG_ | `MEDIUM`<br>GOVERNANCE | Maintain version control and Commission correspondence records for the code of ethics<br>_MEDIUM_ |

---

## Requirement coverage

| Requirement | Provision | Controls |
| --- | --- | --- |
| `REQ-002-1` | s.2 | `PDPA-002-001` |
| `REQ-005-A` | s.5(a) | `PDPA-005-001` |
| `REQ-005-B` | s.5(b) | `PDPA-005-002` |
| `REQ-005-C` | s.5(c) | `PDPA-005-003` |
| `REQ-005-D` | s.5(d) | `PDPA-005-004` |
| `REQ-005-E` | s.5(e) | `PDPA-005-005` |
| `REQ-005-F` | s.5(f) | `PDPA-005-006` |
| `REQ-005-G` | s.5(g) | `PDPA-005-007` |
| `REQ-005-H` | s.5(h) | `PDPA-005-008` |
| `REQ-014-1` | s.14(1) | `PDPA-014-001` |
| `REQ-014-2` | s.14(2) | `PDPA-014-002` |
| `REQ-014-4` | s.14(4) | `PDPA-014-003` |
| `REQ-015-3` | s.15(3) | `PDPA-015-001`, `PDPA-015-002` |
| `REQ-016-1` | s.16(1) | `PDPA-016-001` |
| `REQ-016-2` | s.16(2) | `PDPA-016-002` |
| `REQ-018-1` | s.18 | `PDPA-018-001` |
| `REQ-019-1` | s.19 | `PDPA-019-001` |
| `REQ-020-1` | s.20 | `PDPA-020-001` |
| `REQ-021-1` | s.21 | `PDPA-021-001` |
| `REQ-022-1` | s.22(1) | `PDPA-022-001` |
| `REQ-022-2` | s.22(2) | `PDPA-022-002`, `PDPA-022-003` |
| `REQ-022-3` | s.22(3) | `PDPA-022-004` |
| `REQ-023-1` | s.23(1) | `PDPA-023-001` |
| `REQ-023-2` | s.23(2) | `PDPA-023-002` |
| `REQ-023-3` | s.23(3) | `PDPA-023-003` |
| `REQ-024-1` | s.24 | `PDPA-024-001` |
| `REQ-025-1` | s.25(1) | `PDPA-025-001` |
| `REQ-025-2` | s.25(2) | `PDPA-025-002` |
| `REQ-026-1` | s.26 | `PDPA-026-001` |
| `REQ-027-1` | s.27(1) | `PDPA-027-001`, `PDPA-027-002`, `PDPA-027-003`, `PDPA-027-004`, `PDPA-027-005`, `PDPA-027-006` |
| `REQ-027-2A` | s.27(2)(a) | `PDPA-027-007`, `PDPA-027-008` |
| `REQ-027-2B` | s.27(2)(b) | `PDPA-027-009`, `PDPA-027-010` |
| `REQ-027-3` | s.27(3) | `PDPA-027-011`, `PDPA-027-012` |
| `REQ-027-4` | s.27(4) | `PDPA-027-013`, `PDPA-027-014`, `PDPA-027-015` |
| `REQ-027-5` | s.27(5) | `PDPA-027-016`, `PDPA-027-017` |
| `REQ-028-1` | s.28(1) | `PDPA-028-001`, `PDPA-028-002`, `PDPA-028-003`, `PDPA-028-006` |
| `REQ-028-2` | s.28(2) | `PDPA-028-004`, `PDPA-028-005` |
| `REQ-029-1` | s.29(1) | `PDPA-029-001` |
| `REQ-029-2` | s.29(2) | `PDPA-029-002` |
| `REQ-029-3` | s.29(3) | `PDPA-029-003` |
| `REQ-030-1` | s.30(1) | `PDPA-030-001`, `PDPA-030-002`, `PDPA-030-009`, `PDPA-030-010` |
| `REQ-030-2` | s.30(2) | `PDPA-030-003` |
| `REQ-030-3` | s.30(3) | `PDPA-030-008` |
| `REQ-030-4` | s.30(4) | `PDPA-030-004` |
| `REQ-030-5` | s.30(5) | `PDPA-030-005`, `PDPA-030-006`, `PDPA-030-007` |
| `REQ-031-1` | s.31(1) | `PDPA-031-007` |
| `REQ-031-2` | s.31(2) | `PDPA-031-001`, `PDPA-031-002`, `PDPA-031-003` |
| `REQ-031-3` | s.31(3) | `PDPA-031-004` |
| `REQ-031-4` | s.31(4) | `PDPA-031-005` |
| `REQ-031-5` | s.31(5) | `PDPA-031-006` |
| `REQ-032-1` | s.32(1) | `PDPA-032-001` |
| `REQ-032-2` | s.32(2) | `PDPA-032-002` |
| `REQ-032-3` | s.32(3) | `PDPA-032-003` |
| `REQ-032-4` | s.32(4) | `PDPA-032-004` |
| `REQ-032-5` | s.32(5) | `PDPA-032-005` |
| `REQ-033-1A` | s.33(1)(a) | `PDPA-033-001` |
| `REQ-033-1B` | s.33(1)(b) | `PDPA-033-002` |
| `REQ-033-1C` | s.33(1)(c) | `PDPA-033-003` |
| `REQ-033-2` | s.33(2) | `PDPA-033-004` |
| `REQ-034-1` | s.34(1) | `PDPA-034-001` |
| `REQ-035-1` | s.35(1) | `PDPA-035-001` |
| `REQ-035-2` | s.35(2) | `PDPA-035-002` |
| `REQ-036-1` | s.36(1) | `PDPA-036-001` |
| `REQ-036-2` | s.36(2) | `PDPA-036-002`, `PDPA-036-003` |
| `REQ-036-3` | s.36(3) | `PDPA-036-004` |
| `REQ-037-1` | s.37(1)-(2) | `PDPA-037-001` |
| `REQ-037-3` | s.37(3) | `PDPA-037-002` |
| `REQ-037-4` | s.37(4)-(5) | `PDPA-037-003` |
| `REQ-038-1` | s.38(1)-(2) | `PDPA-038-001` |
| `REQ-038-3` | s.38(3) | `PDPA-038-002` |
| `REQ-038-4` | s.38(4) | `PDPA-038-003` |
| `REQ-039-1` | s.39(1)-(4) | `PDPA-039-001` |
| `REQ-040-1` | s.40 | `PDPA-040-001` |
| `REQ-042-1` | s.42(1)-(2) | `PDPA-042-001` |
| `REQ-042-3` | s.42(3)-(4) | `PDPA-042-002` |
| `REQ-043-1` | s.43 | `PDPA-043-001` |
| `REQ-045-1` | s.45(1)-(2) | `PDPA-045-001` |
| `REQ-046-1` | s.46(1)-(2) | `PDPA-046-001` |
| `REQ-047-1` | s.47 | `PDPA-047-001` |
| `REQ-048-1` | s.48 | `PDPA-048-001` |
| `REQ-049-1` | s.49 | `PDPA-049-001` |
| `REQ-050-1` | s.50(1) | `PDPA-050-001` |
| `REQ-050-2` | s.50(2)-(3) | `PDPA-050-002` |
| `REQ-058-1` | s.58(1) | `PDPA-058-002` |
| `REQ-058-2` | s.58(2)-(3) | `PDPA-058-001` |
| `REQ-059-1` | s.59 | `PDPA-059-001` |
| `REQ-060-1` | s.60(1) | `PDPA-060-001` |
| `REQ-060-2` | s.60(2) | `PDPA-060-002` |
| `REQ-060-3` | s.60(3) | `PDPA-060-003` |
| `REQ-060-4` | s.60(4)-(5) | `PDPA-060-004` |
| `REQ-061-1` | s.61 | `PDPA-061-001` |
| `REQ-062-1` | s.62 | `PDPA-062-001` |
| `REQ-064-1` | s.64(1)-(2) | `PDPA-064-001` |
| `REQ-065-1` | s.65(1) | `PDPA-065-001`, `PDPA-065-002`, `PDPA-065-003` |
| `REQ-065-2` | s.65(2) | `PDPA-065-004` |
| `REQ-065-3` | s.65(3) | `PDPA-065-005` |

## UNMAPPED PROVISIONS

The mapping review found **no substantive provision of the Act that imposes an obligation on a
data controller or data processor and is left unmapped**.

Every section of the Act falls into one of two categories:

1. **Mapped to one or more controls** - 43 sections.
2. **Reviewed and recorded as creating no assessable obligation on a data controller or data
   processor** - 23 sections.

Section 47 appears in both categories: it is carried as a non-assessable reference record rather than a scored control. 43 + 23 = 66 sections in total.

The full no-obligation list, including the reference-record section, is below.

| Section | Part | Title | Reason not mapped to a control |
| --- | --- | --- | --- |
| 1 | I | Short title | Short title only. No obligation. |
| 3 | I | Interpretation | Definitions. Feeds control scoping (notably "sensitive personal data", "processing", "data controller", "data processor", "transborder flow") but creates no standalone obligation. |
| 4 | I | Objectives of Act | Statement of the objectives of the Act. Interpretive, not an obligation. |
| 6 | II | Establishment of Personal Data Protection Commission | Establishes the Commission as a body corporate. Addressed to the State. |
| 7 | II | Functions of Commission | Functions of the Commission. Addressed to the Commission. |
| 8 | II | Establishment of Board | Establishment and composition of the Board. Addressed to the State. |
| 9 | II | Functions of Board | Functions of the Board. Addressed to the Board. |
| 10 | II | Committees of Board | Committees of the Board. Addressed to the Board. |
| 11 | II | Appointment of Director General | Appointment of Director General. Addressed to the President/Minister. |
| 12 | II | Tenure of office of Director General | Tenure of the Director General. Institutional. |
| 13 | II | Staff of Commission | Staff of the Commission. Institutional. |
| 17 | III | Inspection of registered particulars | Power of the Commission to permit inspection of the register. Addressed to the Commission; no controller obligation. Transparency consequence noted at PDPA-015-002. |
| 41 | VII | Investigation confidentiality | Confidentiality duty in investigations, addressed to the Commission and the Director General. |
| 44 | VII | Seeking assistance of another person or authority | Commission power to seek assistance. Cooperation duty for the organisation is captured at PDPA-042-001 and PDPA-043-001. |
| 47 | VII | Administrative fines | Sets the statutory ceiling for administrative fines. Captured as a reference record (PDPA-047-001), not as an assessable control. |
| 51 | VIII | Sources of funds of Commission | Sources of funds of the Commission. Institutional. |
| 52 | VIII | Financial management | Financial management by the Board. Institutional. |
| 53 | VIII | Estimates of income and expenditure and financial control | Budget estimates of the Commission. Institutional. |
| 54 | VIII | Expenditure of funds | Expenditure of Commission funds. Institutional. |
| 55 | VIII | Supplementary budget | Supplementary budget of the Commission. Institutional. |
| 56 | VIII | Accounts and audit | Accounts and audit of the Commission. Institutional. |
| 57 | VIII | Annual reports and performance agreements | Annual reports of the Commission. Institutional. |
| 63 | IX | General penalty | General penalty provision. Consequence, not a discrete obligation. Referenced in the notes of the controls it backs. |
| SCH | SCHEDULE | Proceedings of the Board (made under section 8(6)) | Proceedings of the Board. Institutional. |

### Partially mapped provisions worth noting

These provisions are mapped, but the mapping deliberately covers only part of the section because
the remainder addresses the Commission, the Minister or the courts rather than the organisation:

| Provision | Mapped as | Not mapped, and why |
| --- | --- | --- |
| s.14(3), s.14(5) | - | Decision period and duty to give written reasons; both address the Commission. |
| s.15(1), s.15(2) | `PDPA-015-002` (partly) | Establishment and content of the register; addresses the Commission and the regulations. |
| s.31(1) | `PDPA-031-007` | The power itself is the Commission; the organisation duty is to comply with any prohibition. |
| s.32(3) | `PDPA-032-003` | The duty to make regulations is the Minister; the organisation duty is to comply once made. |
| s.37(3)-(5), s.38(1)-(3) | `PDPA-037-002`, `PDPA-038-001`, `PDPA-038-002` | The power to order is the Commission; the organisation duty is to comply. |
| s.39(2)-(4) | `PDPA-039-001` | Commission discretion to investigate and the 90-day timeline; addresses the Commission. |
| s.42(4) | `PDPA-042-001` (notes) | Duty to return documents within ten working days; addresses the Commission. |
| s.46(1)-(2) | `PDPA-046-001` | Discretion to issue a penalty notice and the factors; addresses the Commission. |
| s.59(2)-(3) | `PDPA-059-001` | Court powers to set and extend the preservation period. |
| s.64(1)-(2) | `PDPA-064-001` | The power to make regulations is the Minister; the organisation duty is derived monitoring. |
| s.65(3) | `PDPA-065-005` | The consideration and approval process addresses the Commission. |
