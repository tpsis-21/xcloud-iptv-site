import { SEO_CONFIG } from './seo';

// Validador de conteúdo para evitar termos proibidos
const contentValidator = (text: string): string => {
  const prohibitedTerms = ['qualidade', 'hd', 'full hd', '6 horas', '24/7', '24 horas'];
  const lowerText = text.toLowerCase();
  
  prohibitedTerms.forEach(term => {
    if (lowerText.includes(term)) {
      console.warn(`⚠️ Termo proibido detectado: "${term}" no texto: "${text}"`);
    }
  });
  
  return text;
};

export const SCHEMA_TEMPLATES = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SEO_CONFIG.contact.email,
      availableLanguage: ['Portuguese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '22:00',
        timeZone: 'America/Sao_Paulo'
      }
    },
    sameAs: [
      SEO_CONFIG.social.instagram,
      SEO_CONFIG.social.twitter
    ]
  },
  
  faqPage: (questions: Array<{question: string; answer: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: contentValidator(q.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: contentValidator(q.answer)
      }
    }))
  }),
  
  softwareApp: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEO_CONFIG.siteName,
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Android, iOS, Windows, Smart TV, Fire TV, Mi TV',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      category: 'free'
    },
    // ⚠️ IMPORTANTE: Não incluir AggregateRating sem dados reais
    // aggregateRating: REMOVIDO - usar apenas com dados verificáveis
  },
  
  breadcrumbList: (items: Array<{name: string; url: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`
    }))
  })
};