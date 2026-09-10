import { ArrowRight, CalendarDays, Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeyDetails = [
  { icon: MapPin, label: "De onde você parte?", value: "Sua cidade" },
  { icon: Compass, label: "Para onde deseja ir?", value: "Seu próximo destino" },
  { icon: CalendarDays, label: "Quando?", value: "Mês ou período" },
];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[87dvh] items-center overflow-hidden bg-primary pt-20 text-white"
    >
      <img
        src="/img1.avif"
        alt="Paisagem de viagem vista entre montanhas ao pôr do sol"
        width="3840"
        height="2160"
        className="absolute inset-0 -z-20 -scale-x-100 size-full object-cover object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-20 sm:px-8 lg:px-10 lg:pb-40 lg:pt-28">
        <div className="max-w-3xl">
          <p className="hero-kicker mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            <span className="h-px w-10 bg-sky-300" aria-hidden="true" />
            Viagens com intenção
          </p>
          <h1 className="font-display max-w-[12ch] text-[clamp(3.25rem,7vw,5.9rem)] leading-[0.96] tracking-[-0.035em] text-balance">
            O mundo espera por uma história que seja sua.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
            A Pra Embark transforma destinos em experiências memoráveis. Você
            sonha; nossa equipe cuida do caminho.
          </p>
          <Button
            variant="accent"
            type="button"
            onClick={scrollToContact}
            className="group mt-9 gap-3"
          >
            Comece a planejar
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid bg-white text-primary shadow-[0_8px_8px_rgba(8,25,55,0.14)] md:grid-cols-[1fr_1fr_1fr_auto]">
          {journeyDetails.map((item) => (
            <div
              key={item.label}
              className="flex min-h-20 items-center gap-3 border-b border-slate-200 px-8 py-4 md:border-b-0 md:border-r"
            >
              <item.icon className="size-4 shrink-0 text-sky-600" />
              <div>
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-slate-700 text-[1rem]">{item.value}</p>
              </div>
            </div>
          ))}
          <Button
            variant="brand"
            type="button"
            onClick={scrollToContact}
            className="m-3 px-7 focus-visible:outline-sky-600"
          >
            Planejar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
