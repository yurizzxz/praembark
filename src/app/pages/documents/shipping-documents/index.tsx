import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/section-title";

export default function Documentation() {
  return (
    <section id="documentation" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <SectionTitle className="text-left">
            Documentos de Embarque
          </SectionTitle>
          <p className="text-lg">
            Documentos necessários para garantir uma viagem tranquila e segura
          </p>
        </div>

        <Card className="bg-primary/5 border-l-4 border-primary rounded-r-lg mb-8">
          <CardContent className="p-6">
            <p className="text-lg font-medium text-primary/90">
              Para garantir a tranquilidade e conforto de sua viagem, organize a
              documentação necessária antes do embarque. Os documentos devem
              estar em boas condições para identificação por foto.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Voos Nacionais
              </h3>
              <p className="text-primary mb-6">
                Tenha em mãos um dos documentos abaixo:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Passaporte nacional",
                  "Carteira de identidade (RG)",
                  "Cartão de identidade expedido por ministério",
                  "Carteira nacional de habilitação (CNH)",
                  "Carteira de trabalho",
                  "Carteira de identidade emitida por Conselho ou Federação",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary/10 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>

              <Card className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-yellow-900">
                    <strong>Atenção:</strong> Documentos podem ser aceitos
                    independentemente da validade. Em caso de furto/roubo,
                    Boletim de Ocorrência com menos de 60 dias é aceito.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Voos Internacionais
              </h3>
              <p className="text-primary mb-6">
                Documentos aceitos para países do Mercosul:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Argentina - Documento Nacional de Identidade ou Passaporte",
                  "Paraguai - Cédula de Identidade ou Passaporte",
                  "Uruguai - Cédula de Identidade ou Passaporte",
                  "Chile - Cédula de Identidade ou Passaporte",
                  "Bolívia - Cédula de Identidade ou Passaporte",
                ].map((country, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary/10 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span className="text-gray-700">{country}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-red-900">
                    <strong>Importante:</strong> Documentos devem ser originais
                    e dentro da validade. CNH, carteiras de trabalho e BO não
                    são aceitos para voos internacionais.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Autorização para Menores
            </h3>
            <p className="text-gray-700 mb-4">
              Nenhuma criança ou adolescente menor de 16 anos poderá viajar
              desacompanhado dos pais sem expressa autorização em voos nacionais
              (Lei nº 13.812/2019).
            </p>
            <p className="text-gray-700">
              A ANAC disponibiliza formulário de autorização em seu site. A
              partir de 16 anos, o embarque pode ser realizado sem necessidade
              de autorização.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
