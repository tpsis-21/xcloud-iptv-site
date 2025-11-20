import React from 'react';

interface ReviewSchemaProps {
  productName: string;
  reviewText: string;
  authorName: string;
  ratingValue: string;
  datePublished: string;
  reviewTitle?: string;
}

interface ReviewWithProtectionsProps {
  reviews: ReviewSchemaProps[];
  productName: string;
  productSku: string;
}

export function IndividualReviewSchema({
  productName,
  reviewText,
  authorName,
  ratingValue,
  datePublished,
  reviewTitle = `Avaliação de ${productName}`
}: ReviewSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: productName
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: ratingValue,
      bestRating: "5",
      worstRating: "1"
    },
    name: reviewTitle,
    reviewBody: reviewText,
    author: {
      "@type": "Person",
      name: authorName
    },
    datePublished: datePublished,
    publisher: {
      "@type": "Organization",
      name: "XCloud IPTV",
      url: "https://xcloudtv.com.br"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ReviewSchemaWithProtections({ reviews, productName, productSku }: ReviewWithProtectionsProps) {
  // Proteções contra spam e conteúdo inadequado
  const validateReview = (review: ReviewSchemaProps): boolean => {
    // Verificar se o texto tem comprimento adequado
    if (review.reviewText.length < 20 || review.reviewText.length > 1000) {
      return false;
    }

    // Verificar se não contém palavras proibidas
    const prohibitedWords = ['spam', 'fake', 'golpe', 'fraude', 'pirata'];
    const reviewTextLower = review.reviewText.toLowerCase();
    if (prohibitedWords.some(word => reviewTextLower.includes(word))) {
      return false;
    }

    // Verificar se a nota está dentro do intervalo válido
    const rating = parseFloat(review.ratingValue);
    if (rating < 1 || rating > 5) {
      return false;
    }

    // Verificar se o autor tem nome válido
    if (review.authorName.length < 2 || review.authorName.length > 50) {
      return false;
    }

    return true;
  };

  // Filtrar reviews válidos
  const validReviews = reviews.filter(validateReview);

  // Limitar a quantidade de reviews (máximo 10 para evitar excesso)
  const limitedReviews = validReviews.slice(0, 10);

  // Calcular média das avaliações válidas
  const averageRating = limitedReviews.length > 0 
    ? (limitedReviews.reduce((sum, review) => sum + parseFloat(review.ratingValue), 0) / limitedReviews.length).toFixed(1)
    : "0";

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: productName,
    sku: productSku,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: limitedReviews.length.toString()
    },
    review: limitedReviews.map(review => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue,
        bestRating: "5",
        worstRating: "1"
      },
      name: review.reviewTitle || `Avaliação de ${productName}`,
      reviewBody: review.reviewText,
      author: {
        "@type": "Person",
        name: review.authorName
      },
      datePublished: review.datePublished,
      publisher: {
        "@type": "Organization",
        name: "XCloud IPTV",
        url: "https://xcloudtv.com.br"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para exibir reviews com interface visual
export function ReviewDisplay({ reviews, productName }: { reviews: ReviewSchemaProps[], productName: string }) {
  const validReviews = reviews.filter(review => {
    const rating = parseFloat(review.ratingValue);
    return rating >= 1 && rating <= 5 && review.reviewText.length >= 20;
  }).slice(0, 5);

  if (validReviews.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">
        Avaliações de {productName}
      </h3>
      <div className="space-y-4">
        {validReviews.map((review, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex items-center mb-2">
              <span className="font-medium text-white mr-2">{review.authorName}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < parseInt(review.ratingValue) ? 'text-yellow-400' : 'text-gray-600'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-400 text-sm ml-2">{review.ratingValue}/5</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{review.reviewText}</p>
            <p className="text-gray-500 text-sm mt-1">
              {new Date(review.datePublished).toLocaleDateString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Função utilitária para gerar reviews de exemplo (apenas para demonstração)
export function generateSampleReviews(productName: string): ReviewSchemaProps[] {
  return [
    {
      productName,
      reviewText: "Excelente serviço de streaming, muito estável e com ótimo suporte técnico. A interface é intuitiva e fácil de usar.",
      authorName: "Carlos Silva",
      ratingValue: "5",
      datePublished: "2024-01-15",
      reviewTitle: "Ótima experiência com XCloud IPTV"
    },
    {
      productName,
      reviewText: "Muito bom custo-benefício. O suporte responde rapidamente e o serviço tem sido confiável nos últimos meses.",
      authorName: "Ana Santos",
      ratingValue: "4",
      datePublished: "2024-01-10",
      reviewTitle: "Bom custo-benefício"
    },
    {
      productName,
      reviewText: "Instalação simples e funciona perfeitamente no meu Fire TV Stick. Recomendo para quem busca uma solução completa.",
      authorName: "Roberto Oliveira",
      ratingValue: "5",
      datePublished: "2024-01-08",
      reviewTitle: "Funciona perfeitamente"
    }
  ];
}