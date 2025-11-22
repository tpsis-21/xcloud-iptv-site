import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { hexToHslComponents } from '@/lib/color'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudtv.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'XCloud IPTV | Streaming de conteúdo completo',
  description:
    'XCloud IPTV: melhor streaming do Brasil. Milhares de canais, filmes e séries. Teste grátis, planos acessíveis e suporte por e-mail. Assine com segurança via Cakto.',
  alternates: { canonical: new URL('/', siteUrl).href },
  openGraph: {
    title: 'XCloud IPTV | Streaming de conteúdo completo',
    description:
      'XCloud IPTV: melhor streaming do Brasil. Milhares de canais, filmes e séries. Teste grátis, planos acessíveis e suporte por e-mail.',
    url: '/',
    siteName: 'XCloud IPTV',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'XCloud IPTV - Streaming de conteúdo completo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XCloud IPTV | Streaming de conteúdo completo',
    description:
      'XCloud IPTV: melhor streaming do Brasil. Milhares de canais, filmes e séries. Teste grátis e planos acessíveis.',
    images: ['/og-image.svg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const brandHex = process.env.NEXT_PUBLIC_BRAND_PRIMARY_HEX
  const brandDarkHex = process.env.NEXT_PUBLIC_BRAND_DARK_PRIMARY_HEX
  const styleVars: React.CSSProperties = {
    ['--brand' as any]: brandHex ? hexToHslComponents(brandHex) : undefined,
    ['--brand-dark' as any]: brandDarkHex ? hexToHslComponents(brandDarkHex) : undefined,
  }
  return (
    <html lang="pt-BR" style={styleVars} suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="bg-black text-white">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'XCloud IPTV',
              url: siteUrl,
              logo: `${siteUrl}/logo-xcloudtv.svg`
            })
          }}
        />
      </body>
    </html>
  )
}