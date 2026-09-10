/**
 * Tanzania Personal Data Protection Act 2022 - control matrix source barrel.
 *
 * Importing this module evaluates every control definition module, which
 * registers requirements and controls into the shared registry arrays.
 *
 * Generated artefacts (docs/legal/*, db/seed/frameworks/*) are produced from
 * this module by scripts/generate-pdpa-artifacts.mjs. Do not edit them by hand.
 */
import './pdpa/controls-01-preliminary.mjs';
import './pdpa/controls-03-registration.mjs';
import './pdpa/controls-04a-collection.mjs';
import './pdpa/controls-04b-security.mjs';
import './pdpa/controls-04c-retention-sensitive.mjs';
import './pdpa/controls-05-transborder.mjs';
import './pdpa/controls-06-rights.mjs';
import './pdpa/controls-07-enforcement.mjs';
import './pdpa/controls-09-miscellaneous.mjs';

export {
  FRAMEWORK,
  PARTS,
  SECTIONS,
  NON_OBLIGATION_SECTIONS,
  YPN,
  YN,
  CONTROLS,
  REQUIREMENTS,
} from './pdpa/registry.mjs';
