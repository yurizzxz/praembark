import { cn } from "@/lib/utils";
import { CircleCheck, Info, ShieldAlert, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import type { NoticeTone } from "./types";

const toneStyles: Record<NoticeTone, string> = {
  info: "border-info-border bg-info text-info-foreground",
  success: "border-success-border bg-success text-success-foreground",
  warning: "border-warning-border bg-warning text-warning-foreground",
  danger: "border-danger-border bg-danger text-danger-foreground",
};

const toneIcons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: ShieldAlert,
} as const;

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
  const Icon = toneIcons[tone];

  return (
    <aside
      className={cn("border p-5 sm:p-6", toneStyles[tone], className)}
      role="note"
    >
      <div className="flex gap-4">
        <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
        <div>
          {title && <p className="mb-2 text-lg font-bold">{title}</p>}
          <div className="leading-7">{children}</div>
        </div>
      </div>
    </aside>
  );
}
