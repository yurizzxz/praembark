import { ArrowUpRight, BedDouble, Car, Map, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Plane, title: "Passagens aéreas", description: "Reservas e emissões nacionais e internacionais com as principais companhias." },
  { icon: BedDouble, title: "Hotéis", description: "Hospedagens selecionadas no Brasil e no exterior, alinhadas ao seu perfil." },
  { icon: Car, title: "Traslados e veículos", description: "Locação, recepção em aeroportos e deslocamentos organizados com antecedência." },
  { icon: Map, title: "Passeios e experiências", description: "Atividades que fazem sentido para seu tempo, interesses e companhia." },
  { icon: Users, title: "Viagens em grupo ou empresa", description: "Coordenação para famílias, grupos e viagens corporativas sem sobrecarregar você." },
];

export function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-slate-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="font-display max-w-[10ch] text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.03em] text-primary text-balance">
              Tudo o que sua viagem precisa.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-600">
              Uma pessoa coordena todas as escolhas. Você recebe uma jornada
              clara, completa e pronta para embarcar.
            </p>
            <Button
              variant="textAction"
              type="button"
              onClick={scrollToContact}
              className="group mt-8"
            >
              Criar minha viagem
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <div className="border-t border-slate-300">
            {services.map((service) => (
              <article key={service.title} className="grid gap-4 border-b border-slate-300 py-7 sm:grid-cols-[3rem_0.7fr_1fr] sm:items-start">
                <service.icon className="size-6 text-sky-700" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                <p className="max-w-lg leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
