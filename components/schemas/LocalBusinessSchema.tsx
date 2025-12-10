import React from 'react';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  image
}: LocalBusinessSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        ...geo
      }
    }),
    ...(openingHours && { openingHoursSpecification: openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.includes('Mo') ? 'Monday' : 
                hours.includes('Tu') ? 'Tuesday' :
                hours.includes('We') ? 'Wednesday' :
                hours.includes('Th') ? 'Thursday' :
                hours.includes('Fr') ? 'Friday' :
                hours.includes('Sa') ? 'Saturday' : 'Sunday',
      opens: hours.split('-')[0],
      closes: hours.split('-')[1]
    })) }),
    ...(priceRange && { priceRange }),
    ...(image && { image }),
    areaServed: {
      "@type": "Country",
      name: "BR"
    },
    sameAs: [
      "https://www.facebook.com/xcloudtv",
      "https://www.instagram.com/xcloudtv",
      "https://twitter.com/xcloudtv"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Schema específico para XCloud IPTV como negócio local
export function XCloudLocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: "XCloud IPTV",
    description: "Serviço de consultoria e tecnologia para streaming com suporte especializado em IPTV e soluções de entretenimento digital.",
    url: "https://xcloudiptv.com.br",
    email: "contato@xcloudiptv.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atendimento Online",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01000-000",
      addressCountry: "BR"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "22:00"
      }
    ],
    priceRange: "R$",
    image: "https://xcloudiptv.com.br/icone-app-xcloud-iptv.png",
    areaServed: {
      "@type": "Country",
      name: "BR"
    },
    sameAs: [
      "https://www.facebook.com/xcloudtv",
      "https://www.instagram.com/xcloudtv",
      "https://twitter.com/xcloudtv"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}