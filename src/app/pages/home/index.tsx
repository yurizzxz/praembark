import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
    </>
  )
}