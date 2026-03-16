import { CheckCircle, Star, Shield, Clock, DollarSign, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/section-title'

const benefitsList = [
  {
    icon: CheckCircle,
    title: 'Profissionais Qualificados',
    description: 'Equipe composta por profissionais competentes e totalmente qualificados na área de turismo.'
  },
  {
    icon: Star,
    title: 'Melhores Destinos',
    description: 'Acesso aos melhores destinos nacionais e internacionais com roteiros personalizados.'
  },
  {
    icon: Shield,
    title: 'Segurança e Confiança',
    description: 'Estrutura organizada e preparada para receber bem e satisfazer todas as suas necessidades.'
  },
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Sistema online de reservas e emissões com agilidade e eficiência para sua comodidade.'
  },
  {
    icon: DollarSign,
    title: 'Melhores Preços',
    description: 'Preços competitivos e condições especiais adaptadas ao seu orçamento e preferências.'
  },
  {
    icon: Globe,
    title: 'Abrangência Completa',
    description: 'Atuação nacional e internacional com ampla rede de parceiros e fornecedores.'
  }
]

const promisesList = [
  'Atendimento personalizado e dedicado',
  'Melhores preços do mercado',
  'Roteiros sob medida para você',
  'Suporte completo durante sua viagem'
]

export function Benefits() {

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className='mb-6' subtitle="Vantagens que fazem da Pra Embark sua melhor escolha para viagens memoráveis">
          Por Que Escolher a Pra Embark
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 bg-primary border-0 rounded-2xl text-white">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Satisfação Garantida
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Nossa missão é trabalhar para que você desfrute da satisfação de viajar em sua plenitude. 
                  Cada detalhe é cuidadosamente planejado para superar suas expectativas.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">15+ anos</div>
                    <div className="text-white/60">de experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">1000+</div>
                    <div className="text-white/60">clientes satisfeitos</div>
                  </div>
                </div>
              </div>
              <Card className="bg-white/10 border-0">
                <CardContent className="p-6">
                  <h4 className="text-3xl font-semibold text-white mb-4">Nossa Promessa</h4>
                  <ul className="space-y-3">
                    {promisesList.map((promise, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 shrink-0" />
                        <span className="text-white/70">{promise}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
