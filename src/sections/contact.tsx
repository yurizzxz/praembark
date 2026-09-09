import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = [
      `Olá! Meu nome é ${formData.name}.`,
      "Gostaria de planejar uma viagem com a Pra Embark.",
      `Telefone: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Viagem: ${formData.message}`,
    ].join("\n");
    window.open(
      `https://wa.me/551733012478?${new URLSearchParams({ text }).toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contact" className="bg-white py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-10">
        <div>
          <p className="text-sm font-semibold text-sky-700">
            Sua próxima história
          </p>
          <h2 className="font-display mt-5 max-w-[10ch] text-[clamp(2.75rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.03em] text-primary text-balance">
            Vamos planejar seu próximo embarque?
          </h2>
          <p className="mt-7 max-w-md leading-7 text-slate-600">
            Conte o que imagina. Nossa equipe retorna com as perguntas certas
            para transformar ideia em roteiro.
          </p>

          <address className="mt-10 space-y-5 not-italic text-sm text-slate-600">
            <a
              href="tel:+551733012478"
              className="flex items-center gap-3 hover:text-primary"
            >
              <Phone className="size-4 text-sky-700" /> (17) 3301-2478
            </a>
            <a
              href="mailto:patricia@praembark.com.br"
              className="flex items-center gap-3 hover:text-primary"
            >
              <Mail className="size-4 text-sky-700" /> patricia@praembark.com.br
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky-700" /> Rua
              Elizabeth, 453 — Jardim Soraia
              <br />
              São José do Rio Preto, SP
            </p>
            <p className="flex items-center gap-3">
              <Clock className="size-4 text-sky-700" /> Segunda a sexta, 9h às
              18h
            </p>
          </address>
        </div>

        <form onSubmit={handleSubmit} className=" bg-slate-50 space-y-6 p-6 sm:p-10">
          <div className="sm:grid-cols-2 grid gap-x-6 gap-y-7 ">
            <label className="grid gap-2 text-sm font-semibold text-primary">
              Nome
              <Input
                variant="underline"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-primary">
              Telefone
              <Input
                variant="underline"
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-primary sm:col-span-2">
              E-mail
              <Input
                variant="underline"
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="voce@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-primary sm:col-span-2">
              Como você imagina essa viagem?
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Destino, período, número de viajantes..."
                className="resize-none border-b border-slate-300 bg-transparent px-0 py-3 font-normal text-slate-900 outline-none placeholder:text-slate-500 focus:border-sky-700"
              />
            </label>
          </div>
          <div className="w-full text-center">
            <Button
              variant="brand"
              type="submit"
              className="group w-full gap-3"
            >
              Conversar pelo WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Ao enviar, o WhatsApp abrirá com sua mensagem pronta.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
