import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: FaFacebookF,
    hover: "hover:bg-blue-600",
  },
  {
    href: "https://www.instagram.com",
    icon: FaInstagram,
    hover: "hover:bg-blue-600",
  },
  {
    href: "https://wa.me/551733012478",
    icon: FaWhatsapp,
    hover: "hover:bg-green-600",
  },
];

const quickLinks = [
  { section: "hero", title: "Início" },
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-42 h-16 overflow-hidden">
                  <img src="/logo.png" className="relative -top-5 -left-3" alt="Logo Praembark - Agência de Viagens" />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Sua agência de viagens com atendimento personalizado para
                transformar seus sonhos em realidade.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.hover}`}
                    aria-label={`Visitar nosso ${social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : 'WhatsApp'}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`/#${link.section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.section);
                      }}
                      className="text-gray-300 hover:text-white transition-colors text-left"
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
                {servicesList.map((service, index) => (
                  <li key={index} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${contact.multiline ? "items-start" : "items-center"}`}
                  >
                    <contact.icon
                      className={`w-4 h-4 text-blue-400 ${contact.multiline ? "mt-1" : ""}`}
                    />
                    <span
                      className={`text-gray-300 ${contact.multiline ? "text-sm" : ""}`}
                      dangerouslySetInnerHTML={{ __html: contact.content }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Pra Embark Viagens E Turismo. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com ❤️ para fazer seus sonhos alçarem voo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
