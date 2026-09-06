interface SeoProps {
  title: string;
  description: string;
  path: string;
}

const baseUrl = "https://praembark.com.br";

export function Seo({ title, description, path }: SeoProps) {
  const url = `${baseUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Pra Embark",
    url: baseUrl,
    telephone: "+55 17 3301-2478",
    email: "patricia@praembark.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Elizabeth, 453 - Jardim Soraia",
      addressLocality: "São José do Rio Preto",
      addressRegion: "SP",
      postalCode: "15075-030",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Pra Embark" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}