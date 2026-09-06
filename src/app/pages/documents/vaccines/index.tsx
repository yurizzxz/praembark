import { DocumentPage, InfoSection, Notice } from "@/components/documents";

const officialLinks = [
  { href: "https://www.gov.br/anvisa/pt-br", label: "ANVISA" },
  { href: "https://www.gov.br/saude/pt-br", label: "Ministério da Saúde" },
] as const;

export default function Vaccines() {
  return (
    <DocumentPage
      title="Vacinas"
      description="Informações sobre febre amarela, prevenção e documentação sanitária."
      source="Fiocruz e Ministério da Saúde"
    >
      <InfoSection
        title="Febre amarela"
        description="A febre amarela possui ciclos de transmissão silvestre e urbano. O vírus é transmitido pela picada de mosquitos infectados, sem transmissão direta entre pessoas."
      />

      <InfoSection title="Prevenção">
        <div className="space-y-3 text-muted-foreground">
          <p>
            O SUS oferece vacina contra febre amarela. Desde abril de 2017, o
            esquema adotado é de uma dose durante toda a vida, conforme
            recomendações da OMS.
          </p>
          <p>
            Pessoas que vivem ou viajam para áreas com recomendação de vacinação
            devem conferir sua situação vacinal antes do embarque.
          </p>
          <p className="text-sm">
            Estados com recomendação: Acre, Amazonas, Amapá, Pará, Rondônia,
            Roraima, Tocantins, Distrito Federal, Goiás, Mato Grosso do Sul,
            Mato Grosso, Bahia, Maranhão, Piauí, Minas Gerais, São Paulo, Rio de
            Janeiro, Paraná, Rio Grande do Sul, Santa Catarina e Espírito Santo.
          </p>
        </div>
      </InfoSection>

      <Notice title="Certificado internacional" tone="info">
        <p>
          Alguns destinos exigem o Certificado Internacional de Vacinação ou
          Profilaxia. Consulte os portais oficiais:
        </p>
        <ul className="mt-3 space-y-2">
          {officialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Notice>
    </DocumentPage>
  );
}
