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
          logo: 'https://xcloudiptv.com.br/anexos/logo_app_xcloudtv.png',
          description: 'XCloud IPTV - Melhor IPTV do Brasil com conteúdo variado',
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