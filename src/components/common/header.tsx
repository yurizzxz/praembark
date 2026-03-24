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
import { Link, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
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
    { title: "Contato", href: "contact" },
  ];

  const dropdownItems = [
    { title: "Documentos de Embarque", href: "/documents/shipping-documents" },
    { title: "Passaportes", href: "/documents/passports" },
    { title: "Vacinas", href: "/documents/vaccines" },
    { title: "Vistos", href: "/documents/visas" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white border-b border-zinc-200 shadow-md' 
        : 'bg-transparent border-transparent'
    }`}>
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
                <img src="/logo.png" className="relative -top-5 -left-3" alt="Logo Praembark - Agência de Viagens" />
              </div>
            </Link>
          </div>

          <div className="items-center space-x-2 hidden md:flex">
            <NavigationMenu className="">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={`px-3 py-2 text-md font-medium cursor-pointer transition-colors ${
                        isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-white/80'
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
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-md font-medium cursor-pointer transition-colors ${
                    isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-white/80'
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

          <div className={`hidden lg:flex items-center space-x-4 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(17) 3301-2478</span>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className={`${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Fale Conosco
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant={isScrolled ? "outline" : "ghost"} 
                size="icon" 
                aria-label="Abrir menu de navegação"
                className={isScrolled ? "" : "text-white hover:bg-white/20"}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-4">
              <div className="w-42 h-16 overflow-hidden">
                <img src="/logo.png" className="relative -top-5 -left-4" alt="Logo Praembark - Agência de Viagens" />
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
                    className="text-left text-md px-0 py-2 text-gray-700 hover:text-primary transition-colors"
                    aria-label={`Navegar para ${item.title}`}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="pt-4 space-y-6">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Fale Conosco
                  </Button>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2.5">
                    <Phone className="w-4 h-4" />
                    <span>(17) 3301-2478</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2.5">
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
