export type NoticeTone = "info" | "success" | "warning" | "danger";

export interface DocumentStep {
  title: string;
  description?: string;
  items?: readonly string[];
}

