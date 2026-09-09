import type { Field } from "@/components/shell/AddRecordDialog";

/** Build a dialog `initial` map from an existing record, keyed by field name.
 *  Field names line up with the mapped row property names for every register. */
export function prefillFrom(fields: Field[], row: Record<string, unknown>): Record<string, string | boolean> {
  const v: Record<string, string | boolean> = {};
  for (const f of fields) {
    const raw = row[f.name];
    if (f.type === "checkbox") v[f.name] = Boolean(raw);
    else v[f.name] = raw === null || raw === undefined ? "" : String(raw);
  }
  return v;
}
