interface FaqItem {
  question: string
  answer: string
}

interface FaqSchemaProps {
  faqs: FaqItem[]
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
  const faqItems = faqs.map((faq, index) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems
        })
      }}
    />
  )
}