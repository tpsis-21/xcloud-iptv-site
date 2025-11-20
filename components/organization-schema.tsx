export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'XCloud IPTV',
          url: 'https://xcloudtv.vercel.app',
          logo: 'https://xcloudtv.vercel.app/anexos/logo_app_xcloudtv.png',
          description: 'XCloud IPTV - Melhor IPTV do Brasil com conteúdo variado',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-11-9XXXX-XXXX',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: 'Portuguese'
          },
          sameAs: [
            'https://xcloudtv.vercel.app'
          ]
        })
      }}
    />
  )
}