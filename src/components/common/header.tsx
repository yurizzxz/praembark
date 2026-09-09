import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  documentNavigationItems,
  sectionNavigationItems,
} from "@/config/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSolid = pathname !== "/" || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (section: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(
        () =>
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${isSolid ? "bg-primary/96 shadow-[0_1px_0_rgba(255,255,255,0.12)]" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="block" aria-label="Pra Embark — início">
          <img
            src="/praembark-white.png"
            alt="Pra Embark Viagens e Turismo"
            width="933"
            height="264"
            decoding="async"
            fetchPriority="high"
            className="h-auto w-42"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Navegação principal"
        >
          {sectionNavigationItems.map((item) => (
            <Button
              key={item.section}
              variant="navigation"
              type="button"
              onClick={() => goToSection(item.section)}
            >
              {item.label}
            </Button>
          ))}

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="navigation"
                type="button"
                className="group gap-1.5"
              >
                Documentos
                <ChevronDown
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={14}
              className="w-80 rounded-none border-0 bg-white p-2 text-primary shadow-[0_8px_8px_rgba(8,25,55,0.16)]"
            >
              {documentNavigationItems.map((item) => (
                <DropdownMenuItem
                  key={item.path}
                  asChild
                  className="cursor-pointer rounded-none p-0 focus:bg-sky-50"
                >
                  <Link
                    to={item.path}
                    aria-current={pathname === item.path ? "page" : undefined}
                    className="w-full grid px-4 py-3 aria-[current=page]:bg-sky-50"
                  >
                    <span className="text-sm font-semibold text-primary">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-600">
                      {item.description}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+551733012478"
            className="flex items-center gap-2 text-xs text-white/75 hover:text-white"
          >
            <Phone className="size-3.5" />
            (17) 3301-2478
          </a>
          <Button
            variant="outlineLight"
            type="button"
            onClick={() => goToSection("contact")}
          >
            Planeje sua viagem
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="navigationIcon"
              type="button"
              className="lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-0 bg-primary px-6 text-white">
            <img
              src="/praembark-white.png"
              alt="Pra Embark Viagens e Turismo"
              width="933"
              height="264"
              decoding="async"
              className="mt-3 h-auto w-45"
            />
            <nav
              className="mt-12 flex flex-col border-t border-white/15"
              aria-label="Navegação móvel"
            >
              {sectionNavigationItems.map((item) => (
                <Button
                  key={item.section}
                  variant="navigationMobile"
                  type="button"
                  onClick={() => goToSection(item.section)}
                >
                  {item.label}
                </Button>
              ))}

              <details className="group border-b border-white/15">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between text-lg text-white [&::-webkit-details-marker]:hidden">
                  Documentos
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="pb-4">
                  {documentNavigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname === item.path ? "page" : undefined}
                      className="block border-l border-white/20 py-2.5 pl-4 text-sm text-white/75 hover:text-white aria-[current=page]:border-sky-300 aria-[current=page]:text-sky-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            </nav>
            <Button
              variant="accentLarge"
              type="button"
              onClick={() => goToSection("contact")}
              className="mt-8 w-full"
            >
              Planeje sua viagem
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
