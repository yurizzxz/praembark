"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isHeaderSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 50);
    } else {
      scrollToSection(sectionId);
    }
  };

  const navigationItems = [
    { title: "Início", href: "home" },
    { title: "Sobre Nós", href: "about" },
    { title: "Serviços", href: "services" },
    { title: "Benefícios", href: "benefits" },
  ];

  const dropdownItems = [
    { title: "Documentos de Embarque", href: "/documents/shipping-documents" },
    { title: "Passaportes", href: "/documents/passports" },
    { title: "Vacinas", href: "/documents/vaccines" },
    { title: "Vistos", href: "/documents/visas" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHeaderSolid
          ? "border-b border-border bg-background shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 0);
              }}
            >
              <div className="w-42 h-16 overflow-hidden">
                <img
                  src="/logo.png"
                  className="relative -top-5 -left-3"
                  alt="Logo Praembark - Agência de Viagens"
                />
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            <NavigationMenu className="">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={`cursor-pointer bg-transparent px-3 py-2 text-sm font-medium transition-colors ${
                        isHeaderSolid
                          ? "text-foreground hover:text-primary "
                          : "text-primary-foreground hover:bg-transparent hover:text-primary-foreground/80"
                      }`}
                      onClick={() => handleNavigation(item.href)}
                      aria-label={`Navegar para ${item.title}`}
                      href={`/#${item.href}`}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:bg-transparent" asChild>
                <Button
                  variant="ghost"
                  className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors ${
                    isHeaderSolid
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground hover:text-primary-foreground/80"
                  }`}
                  aria-label="Abrir menu de documentação"
                >
                  Documentação
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {dropdownItems.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <DropdownMenuItem className="cursor-pointer">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))}
                <a
                  href="https://br.usembassy.gov/pt/visas-pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar site oficial de vistos americanos"
                >
                  <DropdownMenuItem className="cursor-pointer">
                    Visto Americano
                  </DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div
            className={`hidden items-center gap-4 xl:flex ${
              isHeaderSolid
                ? "text-muted-foreground"
                : "text-primary-foreground"
            }`}
          >
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <span
                className={
                  isHeaderSolid
                    ? "text-muted-foreground"
                    : "text-primary-foreground"
                }
              >
                (17) 3301-2478
              </span>
            </div>

            <Button
              onClick={() => handleNavigation("contact")}
              className={`${
                isHeaderSolid
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-primary hover:bg-background/90"
              }`}
              asChild
            >
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant={isHeaderSolid ? "outline" : "ghost"}
                size="icon"
                aria-label="Abrir menu de navegação"
                className={
                  isHeaderSolid
                    ? ""
                    : "text-primary-foreground hover:bg-primary-foreground/20"
                }
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-4">
              <div className="w-42 h-16 overflow-hidden">
                <img
                  src="/logo.png"
                  className="relative -top-5 -left-4"
                  alt="Logo Praembark - Agência de Viagens"
                />
              </div>
              <div className="flex flex-col">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={`/#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                    className="min-h-11 px-0 py-2 text-left text-base text-foreground transition-colors hover:text-primary"
                    aria-label={`Navegar para ${item.title}`}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="pt-4 space-y-6">
                  <Button
                    onClick={() => handleNavigation("contact")}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Fale Conosco
                  </Button>
                  <div className="mb-2.5 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(17) 3301-2478</span>
                  </div>
                  <div className="mb-2.5 flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>patricia@praembark.com.br</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
