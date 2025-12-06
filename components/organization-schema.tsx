export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'XCloud IPTV',
          url: 'https://xcloudiptv.com.br',
          logo: 'https://xcloudiptv.com.br/logo_app_xcloudtv.png',
          description: 'Plataforma de streaming com conteúdo variado e suporte em português',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'contato@xcloudiptv.com.br',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: 'Portuguese'
          },
          sameAs: [
            'https://xcloudiptv.com.br'
          ]
        })
      }}
    />
  )
}
