import React from 'react';
import { absoluteUrl } from '@/config/seo';

interface ProductOffer {
  price: string;
  priceCurrency: string;
  availability: string;
  validThrough?: string;
  url: string;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  sku: string;
  brand: string;
  price: string;
  priceCurrency: string;
  availability: string;
  category: string;
  image: string;
  offers?: ProductOffer[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export function ProductSchema({
  name,
  description,
  sku,
  brand,
  price,
  priceCurrency,
  availability,
  category,
  image,
  offers = [],
  aggregateRating
}: ProductSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description,
    sku,
    brand: {
      "@type": "Brand",
      name: brand
    },
    category,
    image,
    offers: offers.length > 0 ? offers.map(offer => ({
      "@type": "Offer",
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      availability: `https://schema.org/${offer.availability}`,
      ...(offer.validThrough && { priceValidUntil: offer.validThrough }),
      url: offer.url,
      hasMerchantReturnPolicy: absoluteUrl('/termos-de-uso#politica-de-reembolso'),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: offer.priceCurrency || "BRL"
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          }
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR"
        }
      }
    })) : {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: `https://schema.org/${availability}`,
      url: window?.location?.href || '',
      hasMerchantReturnPolicy: absoluteUrl('/termos-de-uso#politica-de-reembolso'),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: priceCurrency || "BRL"
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          }
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR"
        }
      }
    },
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Schema específico para planos XCloud IPTV
export function XCloudPlanProductSchema({ planName, price, period, features }: {
  planName: string;
  price: string;
  period: string;
  features: string[];
}) {
  const planDescriptions = {
    'Mensal': 'Acesso completo ao XCloud IPTV por 1 mês com suporte técnico especializado',
    'Trimestral': 'Acesso completo ao XCloud IPTV por 3 meses com suporte técnico especializado',
    'Semestral': 'Acesso completo ao XCloud IPTV por 6 meses com suporte técnico especializado',
    'Anual': 'Acesso completo ao XCloud IPTV por 12 meses com suporte técnico especializado'
  };

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `XCloud IPTV ${planName}`,
    description: planDescriptions[planName as keyof typeof planDescriptions] || `Acesso ao XCloud IPTV - ${planName}`,
    sku: `XCLOUD-${planName.toUpperCase().replace(' ', '-')}`,
    brand: {
      "@type": "Brand",
      name: "XCloud IPTV"
    },
    category: "Software as a Service",
    image: "https://xcloudiptv.com.br/logo.png",
    offers: {
      "@type": "Offer",
      price: price.replace('R$', '').replace(',', '.'),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      url: `https://xcloudiptv.com.br/planos#${planName.toLowerCase()}`,
      hasMerchantReturnPolicy: absoluteUrl('/termos-de-uso#politica-de-reembolso'),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "BRL"
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "MIN"
          }
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR"
        }
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127"
    },
    additionalProperty: features.map(feature => ({
      "@type": "PropertyValue",
      name: "Funcionalidade",
      value: feature
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
