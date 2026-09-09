import { Headphones, Route, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Route,
    title: "Roteiros que respeitam seu jeito",
    description: "Destino, ritmo e orçamento pensados para sua viagem real.",
  },
  {
    icon: Headphones,
    title: "Atendimento humano do início ao fim",
    description: "Você fala com quem conhece o roteiro e acompanha cada etapa.",
  },
  {
    icon: ShieldCheck,
    title: "Escolhas com segurança",
    description: "Parceiros confiáveis, documentação orientada e suporte presente.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-10">
        <div>
          <p className="mb-5 text-sm font-semibold text-sky-700">Sobre a Pra Embark</p>
          <h2 className="font-display max-w-[11ch] text-[clamp(2.75rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.03em] text-primary text-balance">
            Sua viagem começa muito antes do embarque.
          </h2>
        </div>

        <div className="lg:pt-10">
          <p className="max-w-2xl text-lg leading-8 text-slate-700 text-pretty">
            Planejar bem é poder aproveitar sem ruído. Nossa equipe combina
            conhecimento de turismo, escuta atenta e cuidado com os detalhes
            para criar uma experiência coerente com você.
          </p>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {values.map((item) => (
              <div key={item.title} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]">
                <item.icon className="size-6 text-sky-700" strokeWidth={1.6} />
                <div>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 max-w-xl leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
