import { documentNavigationItems } from "@/config/navigation";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Seo } from "../common/seo";

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
  const { pathname } = useLocation();

  return (
    <>
      <Seo
        title={`${title} | Pra Embark`}
        description={description}
        path={pathname}
      />

      <article className="min-h-screen bg-slate-50">
        <header className="bg-primary pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20 lg:px-10">
            <div>
              <p className="mb-5 text-sm font-semibold text-sky-300">
                Central do viajante
              </p>
              <h1 className="font-display max-w-[12ch] text-[clamp(3rem,6vw,5.4rem)] leading-[0.98] tracking-[-0.035em] text-balance">
                {title}
              </h1>
            </div>

            <div className="border-t border-white/20 pt-6 lg:mb-1">
              <p className="max-w-xl text-lg leading-8 text-white/80 text-pretty">
                {description}
              </p>
              {source && (
                <p className="mt-4 text-xs text-white/55">Fonte: {source}</p>
              )}
            </div>
          </div>
        </header>

        <nav
          aria-label="Páginas de documentos"
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto flex w-full max-w-7xl gap-7 overflow-x-auto px-5 sm:px-8 lg:px-10">
            {documentNavigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
                className="shrink-0 border-b-2 border-transparent py-5 text-sm font-semibold text-slate-600 transition-colors hover:text-primary aria-[current=page]:border-sky-600 aria-[current=page]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="space-y-12">{children}</div>
        </div>
      </article>
    </>
  );
}
