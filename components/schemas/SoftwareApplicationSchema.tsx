import React from 'react';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  operatingSystem: string;
  applicationCategory: string;
  downloadUrl: string;
  screenshot?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export function SoftwareApplicationSchema({
  name,
  description,
  operatingSystem,
  applicationCategory,
  downloadUrl,
  screenshot,
  aggregateRating
}: SoftwareApplicationSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    name,
    description,
    operatingSystem,
    applicationCategory,
    downloadUrl,
    ...(screenshot && { screenshot }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount
      }
    }),
    publisher: {
      "@type": "Organization",
      name: "XCloud IPTV",
      url: "https://xcloudiptv.com.br"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Schema específico para o aplicativo XCloud IPTV
export function XCloudAppSchema() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "SoftwareApplication",
    name: "XCloud IPTV",
    description: "Aplicativo XCloud IPTV para streaming completo com conteúdos variados. Disponível para Android, iOS, Smart TV e mais dispositivos.",
    operatingSystem: "Android, iOS, Windows, Smart TV",
    applicationCategory: "MultimediaApplication",
    downloadUrl: "https://xcloudiptv.com.br/download",
    screenshot: "https://xcloudiptv.com.br/icone-app-xcloud-iptv.png",
    publisher: {
      "@type": "Organization",
      name: "XCloud IPTV",
      url: "https://xcloudiptv.com.br"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
