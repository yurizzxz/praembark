import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>404 | Rota não encontrada | Pra Embark</title>

      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-primary px-5 pb-20 pt-28 text-white sm:px-8">
        <img
          src="/img1.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/88" />

        <div className="mx-auto w-full max-w-3xl text-center">
          <Compass
            aria-hidden="true"
            className="mx-auto size-10 text-sky-300"
            strokeWidth={1.5}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
            Erro 404
          </p>
          <h1 className="font-display mt-5 text-[clamp(3.5rem,9vw,6rem)] leading-[0.96] tracking-[-0.035em] text-balance">
            Essa rota não leva ao seu destino.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/75 text-pretty">
            A página pode ter mudado de endereço. Volte ao início para continuar
            planejando sua próxima viagem.
          </p>
          <Button asChild variant="accent" className="group mt-9 gap-3">
            <Link to="/">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
