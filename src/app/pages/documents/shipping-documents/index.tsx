import { DocumentPage, InfoSection, Notice } from "@/components/documents";

const nationalDocuments = [
  "Passaporte nacional",
  "Carteira de identidade (RG)",
  "Cartão de identidade expedido por ministério",
  "Carteira Nacional de Habilitação (CNH)",
  "Carteira de trabalho",
  "Carteira emitida por conselho ou federação profissional",
] as const;

const mercosurDocuments = [
  "Argentina — documento nacional de identidade ou passaporte",
  "Paraguai — cédula de identidade ou passaporte",
  "Uruguai — cédula de identidade ou passaporte",
  "Chile — cédula de identidade ou passaporte",
  "Bolívia — cédula de identidade ou passaporte",
] as const;

export default function Documentation() {
  return (
    <DocumentPage
      title="Documentos de embarque"
      description="Prepare a documentação necessária antes do embarque para evitar atrasos e impedimentos."
    >
      <Notice>
        Para garantir tranquilidade e conforto, organize a documentação antes
        do embarque. Os documentos devem estar em boas condições para
        identificação por foto.
      </Notice>

      <div className="grid gap-10 lg:grid-cols-2">
        <InfoSection
          title="Voos nacionais"
          description="Tenha em mãos um dos documentos aceitos para identificação."
          items={nationalDocuments}
        >
          <Notice tone="warning" title="Atenção">
            Documentos podem ser aceitos independentemente da validade. Em caso
            de furto ou roubo, boletim de ocorrência com menos de 60 dias pode
            ser aceito.
          </Notice>
        </InfoSection>

        <InfoSection
          title="Voos internacionais"
          description="Para países do Mercosul, confira os documentos aceitos para brasileiros."
          items={mercosurDocuments}
        >
          <Notice tone="danger" title="Importante">
            Documentos devem ser originais e estar válidos. CNH, carteira de
            trabalho e boletim de ocorrência não são aceitos para voos
            internacionais.
          </Notice>
        </InfoSection>
      </div>

      <InfoSection title="Autorização para menores">
        <div className="max-w-3xl space-y-3 text-muted-foreground">
          <p>
            Nenhuma criança ou adolescente menor de 16 anos poderá viajar
            desacompanhado dos pais sem autorização expressa em voos nacionais
            (Lei nº 13.812/2019).
          </p>
          <p>
            A ANAC disponibiliza um formulário de autorização. A partir de 16
            anos, o embarque pode ser realizado sem autorização.
          </p>
        </div>
      </InfoSection>
    </DocumentPage>
  );
}
