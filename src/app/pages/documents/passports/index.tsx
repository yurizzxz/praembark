import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/section-title";

export default function Passports() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-6">
              <SectionTitle className="text-left">
                Passaportes
              </SectionTitle>
              <p>Documento essencial para viagens internacionais</p>
            </div>

            <Card className="bg-primary/5 border-l-4 border-primary rounded-r-lg mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary/90 mb-4">
                  O que é o Passaporte?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  O passaporte é um documento oficial emitido pelo governo que
                  identifica o cidadão em viagens internacionais. É obrigatório
                  para entrar na maioria dos países e deve estar válido durante
                  toda a duração da sua viagem.
                </p>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Como Solicitar
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Requisitos Básicos
                        </h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• RG ou CNH originais</li>
                          <li>• Certidão de nascimento</li>
                          <li>• Comprovante de residência</li>
                          <li>• Fotos 3x4 recente</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Local de Solicitação
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Postos da Polícia Federal ou unidades especializadas
                          em grandes cidades. Agende seu atendimento com
                          antecedência.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Prazo de Entrega
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Normalmente de 7 a 15 dias úteis. Em casos urgentes,
                          pode ser solicitado o serviço de prioridade.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Validade do Passaporte
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                      <h4 className="font-semibold text-yellow-900 mb-3">
                        Atenção à Validade
                      </h4>
                      <p className="text-yellow-800 text-sm">
                        Seu passaporte deve ter validade mínima de 6 meses após
                        a data de sua viagem. Alguns países exigem validade
                        maior (ex: EUA exige 6 meses após a data de retorno).
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Regras Importantes:
                      </h4>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>
                          • Verifique sempre a validade antes de comprar
                          passagens
                        </li>
                        <li>
                          • Alguns países exigem páginas em branco no passaporte
                        </li>
                        <li>• Mantenha uma cópia digital guardada</li>
                        <li>• Renove com pelo menos 6 meses de antecedência</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  Em Caso de Perda ou Roubo
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">
                      No Exterior:
                    </h4>
                    <p className="text-red-800 text-sm">
                      Procure imediatamente o Consulado ou Embaixada do Brasil
                      no país onde está. Leve cópias de todos os documentos e
                      registre um Boletim de Ocorrência local.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">
                      De Volta ao Brasil:
                    </h4>
                    <p className="text-red-800 text-sm">
                      Registre um BO na Polícia Federal e solicite um novo
                      passaporte. Para viagens urgentes, solicite o "Passaporte
                      para Situações Emergenciais".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
