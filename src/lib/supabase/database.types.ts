export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      control_answers: {
        Row: {
          user_id: string
          framework_code: string
          version_code: string
          control_id: string
          answer: string | null
          notes: string | null
          updated_at: string
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      framework_controls: {
        Row: {
          answer_options: string[] | null
          applicability: string | null
          applicability_question: string | null
          control_description: string | null
          control_id: string
          control_status: string | null
          control_title: string | null
          default_risk_level: string | null
          display_order: number | null
          evidence_examples: string[] | null
          evidence_required: string | null
          evidence_review_frequency: string | null
          evidence_strength: string | null
          expected_state: string | null
          framework_code: string
          implementation_guidance: string | null
          legal_reference: string | null
          legal_requirement: string | null
          notes: string | null
          paragraph: string | null
          part_number: string | null
          plain_language_question: string | null
          regulatory_status: string | null
          remediation_guidance: string | null
          required: boolean | null
          requirement_id: string | null
          response_type: string | null
          risk_category: string | null
          risk_rationale: string | null
          role_scope: string | null
          section_number: string | null
          source_type: string | null
          subsection: string | null
          suggested_task: string | null
          suggested_task_priority: string | null
          version: string | null
          version_code: string
          why_this_matters: string | null
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      framework_parts: {
        Row: {
          display_order: number | null
          framework_code: string
          part_number: string
          part_title: string
          version_code: string
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      framework_requirements: {
        Row: {
          framework_code: string
          part_number: string | null
          provision: string | null
          requirement_id: string
          requirement_text: string | null
          requirement_title: string | null
          section_number: string | null
          version_code: string
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      framework_sections: {
        Row: {
          creates_obligation: boolean | null
          display_order: number | null
          framework_code: string
          no_obligation_reason: string | null
          part_number: string
          section_number: string
          section_title: string
          version_code: string
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      framework_versions: {
        Row: {
          act_number: string | null
          chapter: string | null
          commencement_date: string | null
          commencement_reference: string | null
          framework_code: string
          gazette_reference: string | null
          language_note: string | null
          matrix_released: string | null
          matrix_version: string | null
          status: string | null
          version_code: string
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
      frameworks: {
        Row: {
          code: string
          created_at: string | null
          disclaimer: string | null
          jurisdiction: string | null
          name: string
          short_name: string | null
          status: string | null
        }
        Insert: Record<string, unknown>
        Update: Record<string, unknown>
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}
