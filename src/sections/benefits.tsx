import { Check } from "lucide-react";

const promises = [
  "Atendimento personalizado e dedicado",
  "Roteiros sob medida para cada viajante",
  "Orientação antes do embarque",
  "Suporte durante toda a viagem",
];

export function Benefits() {
  return (
    <section id="benefits" className="grid bg-primary text-white lg:min-h-[760px] lg:grid-cols-2">
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
        <img
          src="/france.webp"
          alt="Vista da França escolhida para inspirar uma próxima viagem"
          width="4000"
          height="1800"
          className="absolute inset-0 size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      <div className="flex items-center px-5 py-24 sm:px-12 lg:px-[clamp(3rem,7vw,8rem)]">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-sky-300">Viaje com confiança</p>
          <h2 className="font-display mt-5 text-[clamp(2.75rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.03em] text-balance">
            Conte com alguém que conhece o caminho.
          </h2>
          <p className="mt-7 text-lg leading-8 text-white/75 text-pretty">
            Imprevistos não precisam virar desamparo. A Pra Embark permanece
            perto, da primeira conversa até sua volta para casa.
          </p>
          <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-4 py-4 text-white/88">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-300 text-primary">
                  <Check className="size-4" strokeWidth={2} />
                </span>
                {promise}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
