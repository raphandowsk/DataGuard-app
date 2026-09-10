"use client";

import type { SupaClient } from "./client";

const FRAMEWORK_CODE = "TZ-PDPA";
const VERSION_CODE = "2022";

export interface LoadedAnswers {
  answers: Record<string, string>;
  notes: Record<string, string>;
}

/** Loads the signed-in user's saved answers for the active framework. */
export async function fetchAnswers(sb: SupaClient): Promise<LoadedAnswers> {
  const { data, error } = await sb
    .from("control_answers")
    .select("control_id,answer,notes")
    .eq("framework_code", FRAMEWORK_CODE)
    .eq("version_code", VERSION_CODE);
  if (error) throw new Error(error.message);
  const answers: Record<string, string> = {};
  const notes: Record<string, string> = {};
  for (const row of (data as unknown as Array<{ control_id: string; answer: string | null; notes: string | null }>)) {
    if (row.answer) answers[row.control_id] = row.answer;
    if (row.notes) notes[row.control_id] = row.notes;
  }
  return { answers, notes };
}

/** Upserts one control's answer + notes for the signed-in user. */
export async function saveAnswer(
  sb: SupaClient,
  userId: string,
  controlId: string,
  answer: string | null,
  notes: string | null,
): Promise<void> {
  const { error } = await sb.from("control_answers").upsert(
    {
      user_id: userId,
      framework_code: FRAMEWORK_CODE,
      version_code: VERSION_CODE,
      control_id: controlId,
      answer,
      notes,
    } as never,
    { onConflict: "user_id,framework_code,version_code,control_id" },
  );
  if (error) throw new Error(error.message);
}
