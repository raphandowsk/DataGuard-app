"use client";

import { getSupabaseBrowser } from "./client";
import type { Control } from "@/lib/data/controls";

const FRAMEWORK_CODE = "TZ-PDPA";
const VERSION_CODE = "2022";

/** Sentence-case a DB enum: CONTROLLER_AND_PROCESSOR -> "Controller and processor". */
function sentence(v: string | null | undefined): string {
  if (!v) return "";
  const s = v.toLowerCase().replace(/_/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

type Row = {
  control_id: string;
  requirement_id: string | null;
  section_number: string | null;
  legal_reference: string | null;
  legal_requirement: string | null;
  control_title: string | null;
  control_description: string | null;
  plain_language_question: string | null;
  why_this_matters: string | null;
  implementation_guidance: string | null;
  expected_state: string | null;
  remediation_guidance: string | null;
  suggested_task: string | null;
  risk_rationale: string | null;
  evidence_examples: string[] | null;
  evidence_required: string | null;
  evidence_review_frequency: string | null;
  risk_category: string | null;
  default_risk_level: string | null;
  source_type: string | null;
  regulatory_status: string | null;
  role_scope: string | null;
};

function mapRow(r: Row): Control {
  const risk = (r.default_risk_level ?? "MEDIUM") as Control["risk"];
  return {
    id: r.control_id,
    section: r.section_number ?? undefined,
    ref: r.legal_reference ?? "",
    requirement: r.requirement_id ?? "",
    title: r.control_title ?? "",
    risk,
    sourceType:
      (r.source_type ?? "") +
      (r.regulatory_status === "REGULATORY_DETAIL_PENDING" ? " · REGULATORY DETAIL PENDING" : ""),
    actEvidence: r.evidence_required === "REQUIRED_BY_ACT",
    category: sentence(r.risk_category),
    question: r.plain_language_question ?? "",
    why: r.why_this_matters ?? "",
    statute: r.legal_requirement ?? "",
    control: r.control_description ?? "",
    expected: r.expected_state ?? "",
    guidance: r.implementation_guidance ?? "",
    remediation: r.remediation_guidance ?? "",
    task: r.suggested_task ?? "",
    riskRationale: r.risk_rationale ?? "",
    suggested: r.evidence_examples ?? [],
    review: sentence(r.evidence_review_frequency),
    roleScope: sentence(r.role_scope),
  };
}

const COLS =
  "control_id,requirement_id,section_number,legal_reference,legal_requirement,control_title,control_description,plain_language_question,why_this_matters,implementation_guidance,expected_state,remediation_guidance,suggested_task,risk_rationale,evidence_examples,evidence_required,evidence_review_frequency,risk_category,default_risk_level,source_type,regulatory_status,role_scope,display_order";

/** Loads every control for the active framework, ordered by the matrix order. */
export async function fetchControls(): Promise<Control[] | null> {
  const sb = getSupabaseBrowser();
  if (!sb) return null;
  const { data, error } = await sb
    .from("framework_controls")
    .select(COLS)
    .eq("framework_code", FRAMEWORK_CODE)
    .eq("version_code", VERSION_CODE)
    .order("display_order", { ascending: true });
  if (error) throw new Error(error.message);
  return (data as unknown as Row[]).map(mapRow);
}
