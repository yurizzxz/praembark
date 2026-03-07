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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Conheça todos os serviços que oferecemos para tornar sua viagem inesquecível">
          Nossos Serviços
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-blue-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Precisa de um serviço personalizado?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossa equipe está preparada para criar soluções sob medida para suas necessidades específicas de viagem.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
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
