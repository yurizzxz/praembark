import { SectionTitle } from "@/components/common/section-title";
import type { ReactNode } from "react";

interface DocumentPageProps {
  title: string;
  description: string;
  source?: string;
  children: ReactNode;
}

export function DocumentPage({
  title,
  description,
  source,
  children,
}: DocumentPageProps) {
  return (
    <section className="min-h-screen bg-background py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <SectionTitle as="h1" className="text-left">
            {title}
          </SectionTitle>
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
          {source && (
            <p className="mt-2 text-sm text-muted-foreground">Fonte: {source}</p>
          )}
        </header>

        <div className="space-y-10">{children}</div>
      </div>
    </section>
  );
}

