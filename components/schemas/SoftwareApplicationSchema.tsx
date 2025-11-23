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
    description: "Aplicativo XCloud IPTV para streaming completo com canais ao vivo, filmes e séries. Disponível para Android, iOS, Smart TV e mais dispositivos.",
    operatingSystem: "Android, iOS, Windows, Smart TV",
    applicationCategory: "MultimediaApplication",
    downloadUrl: "https://xcloudiptv.com.br/download",
    screenshot: "https://xcloudiptv.com.br/anexos/logo_app_xcloudtv.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "256"
    },
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
    requirements: "Android 5.0+, iOS 12.0+, Windows 10+, Smart TV compatível",
    datePublished: "2023-01-01",
    softwareVersion: "2.0.0"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}