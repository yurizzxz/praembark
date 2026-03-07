import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/section-title";

export default function Visas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SectionTitle className="text-left">
              Vistos
            </SectionTitle>
            <p>
              Vistos de turismo: permissão de entrada concedida por um país ao cidadão estrangeiro.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Fonte: Ministério das Relações Exteriores
            </p>
          </div>

          <Card className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">O que é</h3>
              <p className="text-gray-700 leading-relaxed">
                O visto é a permissão de entrada concedida por um país ao cidadão estrangeiro. Varia de acordo com a duração e o objetivo da viagem, e deve ser solicitado no consulado ou embaixada do país de destino.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-l-4 border-green-600 rounded-r-lg mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Como Solicitar</h3>
              <p className="text-gray-700 leading-relaxed">
                Brasileiros que desejam obter o visto devem comparecer ao consulado ou embaixada do país de destino. Estados Unidos, Japão, China, Índia, entre outros, exigem documentação nos passaportes brasileiros. A maioria dos países da Oceania, África e Europa oriental também solicita visto.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Nações da Europa ocidental e América Latina geralmente não solicitam visto para turistas brasileiros, devido a acordos de reciprocidade com o Brasil.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Processo e Formulário</h3>
              <p className="text-gray-700 leading-relaxed">
                O interessado deve preencher o máximo possível de informações no formulário obrigatório do Sistema de Controle e Emissão de Documentos de Viagem (SCEDV), reduzindo o prazo de processamento.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Em seguida, é necessário entregar o protocolo assinado com os documentos originais do viajante e o comprovante de pagamento ao agente consular na embaixada ou consulado respectivo. Todo o processo pode ser acompanhado pelo site do SCEDV.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Mais Informações</h3>
              <p className="text-gray-700 leading-relaxed">
                Consulte os portais oficiais para informações detalhadas:
              </p>
              <ul className="list-disc list-inside mt-2 text-blue-800">
                <li>
                  <a href="https://www.gov.br/mre/pt-br/assuntos/Embaixadas-Consulados-Missoes/de-outros-paises-no-brasil" target="_blank" rel="noopener noreferrer">
                    Embaixadas e Consulados de outros países no Brasil
                  </a>
                </li>
                <li>
                  <a href="https://www.gov.br/mre/pt-br" target="_blank" rel="noopener noreferrer">
                    Ministério das Relações Exteriores
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}