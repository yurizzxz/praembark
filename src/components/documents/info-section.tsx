import type { ReactNode } from "react";
import type { DocumentStep } from "./types";

interface InfoSectionProps {
  title: string;
  description?: string;
  items?: readonly string[];
  steps?: readonly DocumentStep[];
  children?: ReactNode;
}

export function InfoSection({
  title,
  description,
  items,
  steps,
  children,
}: InfoSectionProps) {
  return (
    <section className="border-b border-slate-200 pb-12 last:border-b-0 last:pb-0">
      <h2 className="font-display text-3xl tracking-[-0.02em] text-primary sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-3xl leading-7 text-slate-600 text-pretty">
          {description}
        </p>
      )}

      {items && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-slate-600">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sky-700"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {steps && (
        <ol className="mt-6 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                {step.description && (
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                )}
                {step.items && (
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                    {step.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      {children && <div className="mt-5">{children}</div>}
    </section>
  );
}
