import { Seo } from "@/components/common/seo";
import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <>
      <Seo
        title="Pra Embark | Agência de Viagens"
        description="Planejamento de viagens com atendimento personalizado."
        path="/"
      />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
    </>
  );
}
