import { ArrowRight, MapPin, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-16 relative min-h-[80dvh]">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-background">
        <div className="absolute inset-0 bg-foreground/60"></div>
        <img 
          src="/img1.avif"
          alt="Viagem dos sonhos"
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          style={{
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32 flex justify-center items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
                  Sua Viagem dos Sonhos
                  <span className="block text-primary-foreground">Começa Aqui</span>
                </h1>
                <p className="text-xl leading-relaxed text-primary-foreground/90">
                  Atendimento personalizado com profissionais que realmente conhecem o assunto. 
                  Os melhores destinos, hotéis e preços para você viajar com plena satisfação.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90"
                  aria-label="Fale com um especialista em viagens"
                >
                  Fale com um Especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection('services')}
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/90 px-8 py-6 text-lg"
                  aria-label="Conhecer nossos serviços de viagem"
                >
                  Nossos Serviços
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 relative z-10">
                <Card className="border-0 bg-card/95 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Melhores Destinos</p>
                        <p className="text-sm text-muted-foreground">Nacionais e internacionais</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/95 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Melhores Preços</p>
                        <p className="text-sm text-muted-foreground">Segundo seu bolso</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 opacity-10"></div>
              <Card className="relative border-0 bg-linear-to-br from-primary to-primary/80 p-8 text-primary-foreground">
                <CardContent className="p-0 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Viaje com Confiança</h3>
                    <p className="text-primary-foreground">
                      Especialistas em viagens personalizadas para você, sua família ou sua empresa
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-primary-foreground/10 p-4 text-center">
                      <p className="text-3xl font-bold">15+</p>
                      <p className="text-sm text-primary-foreground">Anos de Experiência</p>
                    </div>
                    <div className="rounded-lg bg-primary-foreground/10 p-4 text-center">
                      <p className="text-3xl font-bold">1000+</p>
                      <p className="text-sm text-primary-foreground">Clientes Satisfeitos</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="mb-4 text-sm text-primary-foreground">Contato Direto</p>
                    <p className="text-xl font-semibold">(17) 3301-2478</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
