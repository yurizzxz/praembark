'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/common/section-title'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. Gostaria de mais informações sobre seus serviços.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%AMensagem: ${formData.message}`
    const whatsappUrl = `https://wa.me/551733012478?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(17) 3301-2478',
      action: 'tel:1733012478'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'patricia@praembark.com.br',
      action: 'mailto:patricia@praembark.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Elizabeth, 453 - Jardim Soraia, São José do Rio Preto, SP',
      action: 'https://maps.google.com/?q=Rua+Elizabeth+453+Jardim+Soraia+São+José+do+Rio+Preto+SP'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 9h às 18h | Sábado: 9h às 12h',
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className='mb-8' subtitle="Entre em contato conosco e comece a planejar sua próxima aventura">
          Fale Conosco
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Estamos à disposição para atender suas necessidades e ajudar a planejar a viagem dos seus sonhos.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-0">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg py-1">
              <CardContent className="p-6">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Resposta Rápida
                </h4>
                <p className="text-blue-800">
                  Nossa equipe se compromete a responder sua mensagem em até 24 horas úteis. 
                  Para assuntos urgentes, ligue diretamente para nosso telefone.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-50 rounded-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Nos conte mais sobre sua viagem dos sonhos..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem via WhatsApp
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
