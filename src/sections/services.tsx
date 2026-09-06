import { Plane, Hotel, Car, MapPin, Calendar, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/common/section-title'

export function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Passagens Aéreas',
      description: 'Sistema "on line" de reservas e emissões de passagens aéreas nacionais e internacionais com todas as companhias aéreas.',
      features: ['Reservas online', 'E-ticket', 'Todas as companhias', 'Nacional e internacional']
    },
    {
      icon: Hotel,
      title: 'Reservas de Hotéis',
      description: 'Sistema de reservas e informações de hotéis no Brasil e exterior com as melhores opções e preços.',
      features: ['Hotéis no Brasil', 'Hotéis no exterior', 'Melhores preços', 'Ampla variedade']
    },
    {
      icon: Car,
      title: 'Aluguel de Veículos',
      description: 'Aluguel de veículos no Brasil e exterior com as melhores locadoras e condições.',
      features: ['Brasil e exterior', 'Melhores locadoras', 'Condições especiais', 'Variedade de veículos']
    },
    {
      icon: MapPin,
      title: 'Trasladados e Passeios',
      description: 'Serviços de traslados aeroporto/hotel/aeroporto, "city tour" e passeios específicos de interesse.',
      features: ['Trasladados', 'City tour', 'Passeios específicos', 'Guias especializados']
    },
    {
      icon: Calendar,
      title: 'Pacotes de Viagens',
      description: 'Preparação de pacotes de viagens nacionais e internacionais, individuais, para famílias, grupos e empresas.',
      features: ['Pacotes nacionais', 'Pacotes internacionais', 'Para famílias', 'Para grupos e empresas']
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Equipe de profissionais qualificados pronta para atender suas necessidades específicas de viagem.',
      features: ['Profissionais qualificados', 'Atendimento personalizado', 'Consultoria especializada', 'Suporte completo']
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className='mb-6' subtitle="Conheça todos os serviços que oferecemos para tornar sua viagem inesquecível">
          Nossos Serviços
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-border bg-card transition-shadow duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 size-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-primary/5 border-0">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Precisa de um serviço personalizado?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                Nossa equipe está preparada para criar soluções sob medida para suas necessidades específicas de viagem.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                aria-label="Fale conosco para serviço personalizado"
              >
                Fale Conosco
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
