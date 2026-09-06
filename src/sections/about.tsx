import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/section-title";

const companyValues = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais competentes e totalmente qualificados na área de turismo",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description:
      "Cuidado individual com cada cliente para garantir a melhor experiência",
  },
  {
    icon: Target,
    title: "Missão Clara",
    description:
      "Garantir que você desfrute da satisfação de viajar em sua plenitude",
  },
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Estrutura organizada e preparada para receber bem e satisfazer suas necessidades",
  },
];

export function About() {
  return (
    <section id="about" className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-1 md:text-center mb-10">
          <SectionTitle>Quem Somos</SectionTitle>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Conheça nossa história e compromisso com sua satisfação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A{" "}
              <span className="font-semibold text-primary">
                Pra Embark Viagens E Turismo
              </span>{" "}
              é uma agência que trabalha com uma proposta diferenciada no
              mercado:{" "}
              <span className="font-semibold">
                Atendimento personalizado ao cliente
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Ao entrar em contato conosco você será atendido por pessoas que
              realmente conhecem o assunto, sendo informado sobre os melhores
              destinos, os melhores hotéis e os preços mais baixos, além de
              locais para diversão e entretenimento. Tudo de acordo com o seu
              gosto e o seu bolso.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Nossa equipe é composta de profissionais competentes e totalmente
              qualificados na área, além de uma estrutura organizada e preparada
              para receber bem e satisfazer suas necessidades. Nossa missão é
              trabalhar para que o cliente desfrute da satisfação de viajar em
              sua plenitude.
            </p>

            <Card className="border-0 bg-primary/5 shadow-none">
              <CardContent className="p-5 sm:p-6">
                <p className="text-lg font-medium text-primary/90 italic">
                  "Nossa paixão é transformar seus sonhos de viagem em
                  realidade, com cuidado, profissionalismo e atenção aos
                  detalhes que fazem toda a diferença."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {companyValues.map((item, index) => (
              <Card
                key={index}
                className="border-border bg-card p-5 sm:p-6"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
