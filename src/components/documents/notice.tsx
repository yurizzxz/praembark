import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { NoticeTone } from "./types";

const toneStyles: Record<NoticeTone, string> = {
  info: "border-info-border bg-info text-info-foreground",
  success: "border-success-border bg-success text-success-foreground",
  warning: "border-warning-border bg-warning text-warning-foreground",
  danger: "border-danger-border bg-danger text-danger-foreground",
};

interface NoticeProps {
  title?: string;
  tone?: NoticeTone;
  children: ReactNode;
  className?: string;
}

export function Notice({
  title,
  tone = "info",
  children,
  className,
}: NoticeProps) {
  return (
    <aside
      className={cn("rounded-xl border p-5 sm:p-6", toneStyles[tone], className)}
      role="note"
    >
      {title && <p className="mb-2 text-lg font-bold">{title}</p>}
      <div className="leading-relaxed">{children}</div>
    </aside>
  );
}
