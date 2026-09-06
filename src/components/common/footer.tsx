import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.facebook.com/Praembark",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/Praembark",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://wa.me/551733012478",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

const quickLinks = [
  { section: "home", title: "Início" },
  { section: "about", title: "Sobre Nós" },
  { section: "services", title: "Serviços" },
  { section: "contact", title: "Contato" },
];

const servicesList = [
  "Passagens Aéreas",
  "Reservas de Hotéis",
  "Aluguel de Veículos",
  "Pacotes de Viagens",
  "Trasladados e Passeios",
];

const contactInfo = [
  { icon: Phone, content: "(17) 3301-2478" },
  { icon: Mail, content: "patricia@praembark.com.br" },
  {
    icon: MapPin,
    content:
      "Rua Elizabeth, 453 - Jardim Soraia<br />São José do Rio Preto, SP<br />CEP: 15075-030",
    multiline: true,
  },
];

export function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-42 h-16 overflow-hidden">
                  <img
                    src="/praembark-white.png"
                    className="relative"
                    alt="Logo Praembark - Agência de Viagens"
                  />
                </div>
              </div>
              <p className="leading-relaxed text-primary-foreground/80">
                Sua agência de viagens com atendimento personalizado para
                transformar seus sonhos em realidade.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                    aria-label={`Visitar nosso ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.section}>
                    <a
                      href={`/#${link.section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.section);
                      }}
                      className="text-left text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      aria-label={`Navegar para ${link.title}`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Serviços</h3>
              <ul className="space-y-2">
                {servicesList.map((service) => (
                  <li key={service} className="text-primary-foreground/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <div
                    key={contact.content}
                    className={`flex items-start space-x-3 ${contact.multiline ? "items-start" : "items-center"}`}
                  >
                    <contact.icon
                      className={`size-4 text-primary-foreground/70 ${contact.multiline ? "mt-1" : ""}`}
                    />
                    <span
                      className={`text-primary-foreground/80 ${contact.multiline ? "text-sm" : ""}`}
                      dangerouslySetInnerHTML={{ __html: contact.content }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Pra Embark Viagens E Turismo. Todos
              os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
