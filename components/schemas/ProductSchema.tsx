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
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        returnPolicyUrl: absoluteUrl('/termos-de-uso#politica-de-reembolso')
      },
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
            unitCode: "HUR"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "HUR"
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
      url: absoluteUrl('/'),
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        returnPolicyUrl: absoluteUrl('/termos-de-uso#politica-de-reembolso')
      },
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
            unitCode: "HUR"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "HUR"
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
export function XCloudPlanProductSchema({ planName, price, period, features, description }: {
  planName: string;
  price: string;
  period: string;
  features: string[];
  description?: string;
}) {
  const defaultDescription = `Acesso completo ao XCloud IPTV por ${period} com suporte técnico especializado`;

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `XCloud IPTV ${planName}`,
    description: description || defaultDescription,
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
      url: absoluteUrl(`/planos-xcloud-iptv#${planName.toLowerCase()}`),
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        returnPolicyUrl: absoluteUrl('/termos-de-uso#politica-de-reembolso')
      },
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
            unitCode: "HUR"
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 5,
            unitCode: "HUR"
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
