import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { createInternalLink } from '@/config/links'
import { Particles } from '@/components/particles'
import { Home, Crown, Sparkles, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: "Página não encontrada (404)",
  description: "O link acessado não existe ou foi movido. Acesse Home, Planos, Teste grátis ou Contato para continuar.",
  keywords: ["xcloud iptv", "planos xcloud iptv", "teste xcloud iptv"],
  robots: {
    index: false,
    follow: false
  }
}

export default function NotFoundPage() {
  const home = createInternalLink('/', 'Voltar para Home XCloud IPTV')
  const planos = createInternalLink('/planos-xcloud-iptv', 'Ver Planos XCloud IPTV')
  const teste = createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV')
  const download = createInternalLink('/download', 'Guia de Instalação XCloud IPTV')

  return (
    <>
      <div className="relative min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <Particles />
        <div className="absolute inset-0">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-24">
          <div className="text-center mb-10">
            <div className="text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600">404</div>
            <h1 className="mt-4 text-3xl lg:text-5xl font-black text-gradient-brand">Página não encontrada</h1>
            <p className="mt-4 text-gray-300 text-base lg:text-lg">O endereço pode estar incorreto ou a página foi movida. Escolha um caminho para continuar.</p>
          </div>
          <div className="glass-card rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl max-w-3xl mx-auto">
            <div className="p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button asChild className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold min-h-[48px]">
                  <Link href={home.href} className="flex items-center justify-center gap-2"><Home className="h-5 w-5" aria-hidden="true" />Home</Link>
                </Button>
                <Button asChild className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold min-h-[48px]">
                  <Link href={planos.href} className="flex items-center justify-center gap-2"><Crown className="h-5 w-5" aria-hidden="true" />Planos</Link>
                </Button>
                <Button asChild variant="outline" className="w-full py-4 rounded-2xl border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 min-h-[48px]">
                  <Link href={teste.href} className="flex items-center justify-center gap-2"><Sparkles className="h-5 w-5" aria-hidden="true" />Teste grátis</Link>
                </Button>
                <Button asChild variant="outline" className="w-full py-4 rounded-2xl border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 min-h-[48px]">
                  <Link href={download.href} className="flex items-center justify-center gap-2"><Download className="h-5 w-5" aria-hidden="true" />Instalação</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
