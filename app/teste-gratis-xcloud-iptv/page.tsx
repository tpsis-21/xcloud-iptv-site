import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FormularioTeste } from '@/components/FormularioTeste'
import { Smartphone, Tv, Download, CheckCircle2, Star, Zap, Rocket, Users, Clock, ShieldCheck, Gift, Trophy, Sparkles, TrendingUp } from 'lucide-react'
import { MetaTags } from '@/components/seo/MetaTags'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'
import { EXTERNAL_LINKS, createInternalLink } from '@/config/links'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Teste Grátis XCloud IPTV - Experimente Sem Compromisso',
  description: 'Teste grátis XCloud IPTV: Acesso completo ao conteúdo. Milhares de canais, filmes e séries. Teste IPTV XCloud sem cartão. Ativação imediata.',
  keywords: 'teste gratis xcloud iptv, teste iptv xcloud, teste grátis, iptv, streaming, canais ao vivo, filmes, séries',
  openGraph: {
    title: 'Teste Grátis XCloud IPTV - Acesso Completo',
    description: 'Teste grátis XCloud IPTV. Milhares de canais, filmes e séries. Teste IPTV XCloud sem compromisso.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teste Grátis XCloud IPTV - Sem Compromisso',
    description: 'Teste grátis XCloud IPTV! Acesso completo ao conteúdo. Teste IPTV XCloud sem cartão de crédito.',
  },
  alternates: {
    canonical: 'https://xcloudtv.com.br/teste-gratis-xcloud-iptv'
  }
}

export default function Page() {
  // Criar links internos contextuais
  const planosLink = createInternalLink('/planos-xcloud-iptv', 'Ver Planos XCloud IPTV');
  const downloadLink = createInternalLink('/download', 'Download XCloud IPTV');

  // Schema JSON-LD para página de teste
  const testeSchema = SCHEMA_TEMPLATES.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Teste Grátis XCloud IPTV', url: '/teste-gratis-xcloud-iptv' }
  ]);

  // FAQ Schema para página de teste
  const faqSchema = SCHEMA_TEMPLATES.faqPage([
    {
      question: 'Como funciona o teste grátis XCloud IPTV?',
      answer: 'O teste grátis XCloud IPTV oferece acesso completo à plataforma por um período limitado. Basta preencher o formulário com seus dados que enviaremos as instruções por email.'
    },
    {
      question: 'Preciso de cartão de crédito para o teste?',
      answer: 'Não! O teste grátis XCloud IPTV não requer cartão de crédito. É totalmente gratuito e sem compromisso.'
    },
    {
      question: 'Em quais dispositivos posso usar o teste?',
      answer: 'Você pode usar o teste grátis XCloud IPTV em Android, iOS, Windows, Smart TV, Fire Stick e muitos outros dispositivos.'
    }
  ]);

  return (
    <>
      {/* Meta tags otimizadas */}
      <MetaTags
        title="Teste Grátis XCloud IPTV"
        description="Teste grátis XCloud IPTV: Acesso completo ao conteúdo. Milhares de canais, filmes e séries. Teste IPTV XCloud sem cartão. Ativação imediata."
        canonical="/teste-gratis-xcloud-iptv"
        keywords={['teste gratis xcloud iptv', 'teste iptv xcloud', 'experimentar xcloud']}
      />
      
      {/* Schemas JSON-LD */}
      <JsonLD schema={testeSchema} />
      <JsonLD schema={faqSchema} />

      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-6 px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Teste Grátis XCloud IPTV' }]} />
        </div>
        
        {/* Hero Section Melhorada */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 via-transparent to-green-900/10"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-green-400/15 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center space-y-12 max-w-4xl mx-auto">
              {/* Headline Principal */}
              <div className="space-y-6">
                {/* Badge de Destaque */}
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Gift className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Teste Exclusivo - Sem Compromisso</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-none">
                    <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl">
                      Teste Grátis
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                      XCloud IPTV
                    </span>
                  </h1>
                  
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                    <Sparkles className="inline h-8 w-8 mr-2" />
                    Experimente Agora
                    <Sparkles className="inline h-8 w-8 ml-2" />
                  </div>
                </div>

                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                  Descubra por que milhares de brasileiros escolhem o XCloud IPTV. 
                  <strong className="text-green-400">Acesso completo</strong> por tempo limitado 
                  e experimente streaming de verdade sem pagar nada.
                </p>
              </div>

              {/* Benefícios em Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Ativação Imediata</h3>
                  <p className="text-gray-400 text-sm">Comece em minutos</p>
                </div>

                <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">100% Seguro</h3>
                  <p className="text-gray-400 text-sm">Sem riscos ou compromissos</p>
                </div>

                <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Conteúdo Premium</h3>
                  <p className="text-gray-400 text-sm">Milhares de títulos</p>
                </div>

                <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Sucesso Garantido</h3>
                  <p className="text-gray-400 text-sm">98% de aprovação</p>
                </div>
              </div>

              {/* CTAs Principais */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Link href="#formulario-teste" className="flex items-center space-x-3">
                      <Rocket className="h-7 w-7 group-hover:scale-110 transition-transform" />
                      <span>Quero Experimentar Agora</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300 px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300">
                    <Link href={planosLink.href} className="flex items-center space-x-3">
                      <Star className="h-7 w-7" />
                      <span>Ver Planos Completos</span>
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Sem cartão de crédito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Ativação em minutos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Suporte via email</span>
                  </div>
                </div>
              </div>

              {/* Seção de Urgência/Contador */}
              <div className="bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-yellow-900/20 border border-yellow-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-6 w-6 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-lg">Teste por Tempo Limitado</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-yellow-400">24</div>
                      <div className="text-xs text-gray-300">HORAS</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-yellow-400">60</div>
                      <div className="text-xs text-gray-300">MINUTOS</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-yellow-400">0</div>
                      <div className="text-xs text-gray-300">SEGUNDOS</div>
                    </div>
                  </div>
                  
                  <p className="text-yellow-300 text-sm">
                    🎁 <strong>Bônus Exclusivo:</strong> Teste grátis + 10% de desconto no primeiro mês para quem assinar hoje!
                  </p>
                </div>
              </div>

              {/* Formulário de Teste */}
              <div id="formulario-teste" className="glass-card rounded-2xl p-8 border border-green-500/20 max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Solicite Seu Teste Agora</h2>
                  <p className="text-gray-400">Preencha o formulário abaixo e receba acesso instantâneo por email e WhatsApp</p>
                </div>
                <FormularioTeste />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Prova Social */}
        <section className="py-20 relative bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
                Milhares Já Experimentaram
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Veja o que nossos usuários dizem após experimentar o XCloud IPTV
              </p>
            </div>
            
            {/* Estatísticas de Impacto */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">50K+</div>
                <div className="text-gray-300">Testes Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Taxa de Aprovação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">4.8</div>
                <div className="text-gray-300">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">24h</div>
                <div className="text-gray-300">Ativação Rápida</div>
              </div>
            </div>

            {/* Depoimentos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400 text-sm">5.0</span>
                </div>
                <p className="text-gray-300 mb-4">
                  "Fiz o teste grátis e fiquei impressionado com a qualidade. Assinei o plano anual no mesmo dia!"
                </p>
                <div className="text-green-400 font-semibold">- Carlos M., São Paulo</div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400 text-sm">5.0</span>
                </div>
                <p className="text-gray-300 mb-4">
                  "Melhor custo-benefício do mercado. O teste grátis me convenceu, agora sou assinante fiel."
                </p>
                <div className="text-green-400 font-semibold">- Ana L., Rio de Janeiro</div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400 text-sm">4.5</span>
                </div>
                <p className="text-gray-300 mb-4">
                  "Instalação super fácil e suporte excelente. Recomendo muito!"
                </p>
                <div className="text-green-400 font-semibold">- Roberto S., Belo Horizonte</div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Dispositivos Compatíveis */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
                Disponível em Todos Seus Dispositivos
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Assista onde quiser. Nossa plataforma é compatível com todos os dispositivos populares
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Smartphones</h3>
                <p className="text-gray-400 text-sm">Android e iOS</p>
                <Button variant="link" className="text-green-500 hover:text-green-400 mt-2" aria-label={downloadLink.text}>
                  <Link href={downloadLink.href}>{downloadLink.text}</Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart TVs</h3>
                <p className="text-gray-400 text-sm">Samsung, LG, Android TV</p>
                <Button variant="link" className="text-green-500 hover:text-green-400 mt-2" aria-label={downloadLink.text}>
                  <Link href={downloadLink.href}>{downloadLink.text}</Link>
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Computadores</h3>
                <p className="text-gray-400 text-sm">Windows e macOS</p>
                <Button variant="link" className="text-green-500 hover:text-green-400 mt-2" aria-label={downloadLink.text}>
                  <Link href={downloadLink.href}>{downloadLink.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="py-20 relative bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
                Por Que Experimentar XCloud IPTV?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Descubra os benefícios exclusivos do teste grátis XCloud IPTV
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ativação Imediata</h3>
                <p className="text-gray-400">
                  Receba seu acesso em minutos após preencher o formulário. Sem espera, sem burocracia.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Sem Compromisso</h3>
                <p className="text-gray-400">
                  Teste sem cartão de crédito. Se gostar, você decide se quer continuar com um dos nossos planos.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Suporte Incluso</h3>
                <p className="text-gray-400">
                  Durante o teste, você tem acesso ao nosso suporte via email para qualquer dúvida.
                </p>
              </div>
            </div>

            {/* Seção de Garantia e Escassez */}
            <div className="mt-16 space-y-8">
              {/* Garantia */}
              <div className="glass-card rounded-2xl p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Garantia de Satisfação</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Se você não ficar 100% satisfeito com o teste grátis, 
                  <strong className="text-green-400">não precisa de nada</strong> - 
                  zero compromisso, zero risco.
                </p>
                <div className="text-green-400 font-bold text-lg">
                  ✅ Teste sem preocupação ✅ Sem cartão obrigatório ✅ Cancele quando quiser
                </div>
              </div>

              {/* Escassez */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-2 border-yellow-500/50 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Clock className="h-6 w-6 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-lg">OFERTA POR TEMPO LIMITADO</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  🎁 Bônus Exclusivo: 10% de Desconto no Primeiro Mês
                </h2>
                <p className="text-gray-300 mb-6">
                  Aproveite agora e garanta <strong className="text-yellow-400">10% OFF</strong> no primeiro mês 
                  de assinatura + teste grátis completo. Oferta válida apenas para novos usuários.
                </p>
                <div className="text-yellow-300 font-semibold">
                  ⚡ Últimas 24 horas - Aproveite antes que acabe!
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-12">
              <Link href="#formulario-teste">
                <Button 
                  size="lg" 
                  className="gradient-brand text-white px-8 py-4 text-lg font-semibold rounded-xl"
                  aria-label="Solicitar teste grátis XCloud IPTV agora"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Solicitar Teste Grátis Agora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}