import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/Praembark", label: "Facebook", icon: FaFacebookF },
  { href: "https://www.instagram.com/Praembark", label: "Instagram", icon: FaInstagram },
  { href: "https://wa.me/551733012478", label: "WhatsApp", icon: FaWhatsapp },
];

export function Footer() {
  return (
    <footer className="bg-[#081936] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-white/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <img
              src="/praembark-white.png"
              alt="Pra Embark Viagens e Turismo"
              width="933"
              height="264"
              loading="lazy"
              decoding="async"
              className="h-auto w-47"
            />
            <p className="mt-3 max-w-md text-sm leading-6 text-white/65">Viagens e turismo com atendimento pessoal, planejamento cuidadoso e suporte próximo.</p>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex size-11 items-center justify-center border border-white/20 text-white/75 transition-colors hover:border-sky-300 hover:text-sky-300">
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Pra Embark Viagens e Turismo.</p>
          <p>São José do Rio Preto, SP</p>
        </div>
      </div>
    </footer>
  );
}
