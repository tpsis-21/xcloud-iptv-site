import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teste Grátis XCloud IPTV - Experimente Gratuitamente',
  description: 'Teste grátis XCloud IPTV! Experimente streaming com conteúdo variado, filmes e séries. Sem compromisso. Smart TV Samsung, LG, Roku, iOS e Android.',
  keywords: 'teste gratis xcloudtv, teste grátis xcloudtv, experimentar xcloudtv, teste streaming gratis, xcloudtv teste, streaming trial gratis',
  alternates: { canonical: '/teste-gratis' },
  openGraph: {
    title: 'Teste Grátis XCloud IPTV - Experimente Gratuitamente',
    description: 'Teste grátis XCloud IPTV! Streaming com conteúdo variado para Smart TV e dispositivos móveis.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teste Grátis XCloud IPTV - Experimente Gratuitamente',
    description: 'Teste grátis XCloud IPTV! Compatível com Smart TV Samsung, LG, Roku, iOS e Android.'
  }
}

export default function TesteGratisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}