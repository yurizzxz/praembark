import { DocumentPage, InfoSection, Notice } from "@/components/documents";

const officialLinks = [
  {
    href: "https://www.gov.br/mre/pt-br/assuntos/Embaixadas-Consulados-Missoes/de-outros-paises-no-brasil",
    label: "Embaixadas e consulados de outros países no Brasil",
  },
  {
    href: "https://www.gov.br/mre/pt-br",
    label: "Ministério das Relações Exteriores",
  },
] as const;

export default function Visas() {
  return (
    <DocumentPage
      title="Vistos"
      description="Vistos de turismo: permissão de entrada concedida por um país ao cidadão estrangeiro."
      source="Ministério das Relações Exteriores"
    >
      <InfoSection
        title="O que é"
        description="O visto é a permissão de entrada concedida por um país ao cidadão estrangeiro. Varia conforme a duração e o objetivo da viagem e deve ser solicitado no consulado ou na embaixada do país de destino."
      />

      <InfoSection title="Como solicitar">
        <div className="space-y-3 text-muted-foreground">
          <p>
            Brasileiros que desejam obter visto devem procurar o consulado ou a
            embaixada do país de destino. Estados Unidos, Japão, China e Índia,
            entre outros, exigem documentação no passaporte brasileiro.
          </p>
          <p>
            Países da Europa ocidental e da América Latina geralmente dispensam
            visto para turismo, conforme acordos de reciprocidade com o Brasil.
          </p>
        </div>
      </InfoSection>

      <InfoSection title="Processo e formulário">
        <div className="space-y-3 text-muted-foreground">
          <p>
            Preencha as informações solicitadas pelo sistema consular e guarde
            o protocolo da solicitação.
          </p>
          <p>
            Entregue o protocolo assinado, os documentos originais e o
            comprovante de pagamento conforme instruções do consulado.
          </p>
        </div>
      </InfoSection>

      <Notice title="Confirme antes da viagem" tone="warning">
        Regras migratórias mudam. Verifique prazos e exigências nos canais
        oficiais do destino.
      </Notice>

      <InfoSection title="Portais oficiais">
        <ul className="space-y-3">
          {officialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </InfoSection>
    </DocumentPage>
  );
}
