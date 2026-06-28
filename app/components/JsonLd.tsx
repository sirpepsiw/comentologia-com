const SITE_URL = "https://comentologia.online";

interface ArticleSchemaProps {
  title: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  imageUrl,
  datePublished,
  url,
}: ArticleSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: imageUrl,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: "Marifer Centeno",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Comentologia",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/portada.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comentologia",
    url: SITE_URL,
    description:
      "Revista de farándula y espectáculos. Tu ventana al mundo del entretenimiento con noticias, chismes y tendencias.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Comentologia",
    url: SITE_URL,
    description:
      "Revista de farándula y espectáculos. Tu ventana al mundo del entretenimiento con noticias, chismes y tendencias.",
    inLanguage: "es-MX",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
