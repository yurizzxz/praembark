import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/section-title";

export default function Vaccines() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <SectionTitle className="text-left">
                Vacinas
              </SectionTitle>
              <p>Doença infecciosa febril aguda causada por vírus transmitido por mosquitos.</p>
              <p className="text-sm text-gray-500 mt-1">Fonte: FIOCRUZ (Ministério da Saúde)</p>
            </div>

            <Card className="bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">O que é</h3>
                <p className="text-gray-700 leading-relaxed">
                  A febre amarela possui dois ciclos de transmissão: silvestre (em áreas rurais ou florestais) e urbano. 
                  O vírus é transmitido pela picada de mosquitos infectados, sem transmissão direta de pessoa a pessoa. 
                  A doença tem importância epidemiológica devido à gravidade clínica e potencial de disseminação.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-l-4 border-green-600 rounded-r-lg mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Prevenção</h3>
                <p className="text-gray-700 leading-relaxed">
                  O SUS oferta vacina contra febre amarela. Desde abril de 2017, o esquema adotado é de apenas uma dose durante toda a vida, conforme recomendações da OMS. Todas as pessoas em áreas com recomendação de vacinação ou viajando para essas áreas devem se imunizar.
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Estados com vacinação recomendada:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Acre, Amazonas, Amapá, Pará, Rondônia, Roraima, Tocantins, Distrito Federal, Goiás, Mato Grosso do Sul, Mato Grosso, Bahia, Maranhão, Piauí, Minas Gerais, São Paulo, Rio de Janeiro, Paraná, Rio Grande do Sul e Santa Catarina. Além dessas, a população do Espírito Santo também está sendo vacinada atualmente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-l-4 border-primary rounded-r-lg mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary/90 mb-4">Certificado Internacional</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para viagens internacionais, é necessário o Certificado Internacional de Vacinação ou Profilaxia (CIVP).  
                  Consulte mais informações nos portais oficiais:
                </p>
                <ul className="list-disc list-inside mt-2 text-primary/10">
                  <li>
                    <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener noreferrer">
                      ANVISA
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer">
                      Ministério da Saúde
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}