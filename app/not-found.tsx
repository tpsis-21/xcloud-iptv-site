import Link from 'next/link'
import { MetaTags } from '@/components/seo/MetaTags'
import { Button } from '@/components/ui/button'
import { createInternalLink } from '@/config/links'

export default function NotFoundPage() {
  const home = createInternalLink('/', 'Voltar para Home XCloud IPTV')
  const planos = createInternalLink('/planos-xcloud-iptv', 'Ver Planos XCloud IPTV')
  const teste = createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV')
  const contato = createInternalLink('/contato', 'Falar com Suporte XCloud IPTV')
  const download = createInternalLink('/download', 'Guia de Instalação XCloud IPTV')

  return (
    <>
      <MetaTags
        title="Página não encontrada (404)"
        description="O link acessado não existe ou foi movido. Acesse Home, Planos, Teste grátis ou Contato para continuar."
        keywords={["xcloud iptv", "planos xcloud iptv", "teste xcloud iptv"]}
        noindex
      />
      <div className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
          <p className="text-green-500 font-semibold tracking-wide">Erro 404</p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-black text-gradient-brand">Página não encontrada</h1>
          <p className="mt-6 text-gray-300 text-lg">O endereço pode estar incorreto ou a página foi movida. Escolha um caminho para continuar.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Button asChild className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold min-h-[48px]">
              <Link href={home as any}>Home</Link>
            </Button>
            <Button asChild className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold min-h-[48px]">
              <Link href={planos as any}>Planos</Link>
            </Button>
            <Button asChild className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold min-h-[48px]">
              <Link href={teste as any}>Teste grátis</Link>
            </Button>
            <Button asChild variant="outline" className="w-full py-4 rounded-2xl border-green-500/50 text-green-500 hover:bg-green-500/10 min-h-[48px]">
              <Link href={download as any}>Instalação</Link>
            </Button>
            <Button asChild variant="outline" className="w-full py-4 rounded-2xl border-green-500/50 text-green-500 hover:bg-green-500/10 min-h-[48px]">
              <Link href={contato as any}>Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

