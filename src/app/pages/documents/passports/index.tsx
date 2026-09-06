import {
  DocumentPage,
  InfoSection,
  Notice,
  type DocumentStep,
} from "@/components/documents";

const applicationSteps: readonly DocumentStep[] = [
  {
    title: "Requisitos básicos",
    items: [
      "RG ou CNH originais",
      "Certidão de nascimento",
      "Comprovante de residência",
      "Foto 3x4 recente",
    ],
  },
  {
    title: "Local de solicitação",
    description:
      "Postos da Polícia Federal ou unidades especializadas em grandes cidades. Agende seu atendimento com antecedência.",
  },
  {
    title: "Prazo de entrega",
    description:
      "Normalmente de 7 a 15 dias úteis. Em casos urgentes, pode ser solicitado o serviço de prioridade.",
  },
] as const;

const validityChecks = [
  "Verifique sempre a validade antes de comprar passagens",
  "Alguns países exigem páginas em branco no passaporte",
  "Mantenha uma cópia digital guardada",
  "Renove com pelo menos 6 meses de antecedência",
] as const;

export default function Passports() {
  return (
    <DocumentPage
      title="Passaportes"
      description="Documento essencial para viagens internacionais."
    >
      <Notice>
        O passaporte é um documento oficial emitido pelo governo que identifica
        o cidadão em viagens internacionais. É obrigatório para entrar na
        maioria dos países e deve estar válido durante toda a viagem.
      </Notice>

      <div className="grid gap-10 lg:grid-cols-2">
        <InfoSection title="Como solicitar" steps={applicationSteps} />

        <InfoSection
          title="Validade do passaporte"
          description="Confira a validade mínima exigida após a data da viagem. Alguns países aplicam regras adicionais."
          items={validityChecks}
        >
          <Notice tone="warning" title="Planeje com antecedência">
            Alguns destinos exigem pelo menos seis meses de validade após a data
            de retorno. Confirme a regra oficial antes da compra.
          </Notice>
        </InfoSection>
      </div>

      <Notice tone="danger" title="Perda ou roubo">
        <div className="space-y-3">
          <p>
            No exterior, procure imediatamente o consulado ou a embaixada do
            Brasil. Leve cópias dos documentos e registre uma ocorrência local.
          </p>
          <p>
            De volta ao Brasil, registre um boletim de ocorrência na Polícia
            Federal e solicite um novo passaporte.
          </p>
        </div>
      </Notice>
    </DocumentPage>
  );
}
