import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { 
  Download, 
  Tv, 
  Smartphone, 
  ShieldCheck, 
  ExternalLink, 
  HelpCircle, 
  AlertCircle,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react'
import { createInternalLink } from '@/config/seo'
import { EXTERNAL_LINKS } from '@/config/links'
import { XCloudInstallationHowToSchema, AndroidTVInstallationHowToSchema } from '@/components/schemas/HowToSchema'
import { SoftwareApplicationSchema } from '@/components/schemas/SoftwareApplicationSchema'

export const metadata: Metadata = {
  title: 'Baixar XCloud IPTV | Download App para Android e Smart TV',
  description: 'Faça o download do XCloud IPTV atualizado. Guia de instalação para TV Box, Android, Smart TV (Samsung/LG), Roku e Fire Stick. Baixe agora.',
  keywords: ['download xcloud iptv', 'baixar xcloud tv', 'instalar xcloud iptv', 'apk xcloud iptv', 'xcloud iptv roku', 'xcloud iptv samsung'],
  openGraph: {
    title: 'Baixar XCloud IPTV | Download App para Android e Smart TV',
    description: 'Faça o download do XCloud IPTV atualizado. Guia de instalação para TV Box, Android, Smart TV (Samsung/LG), Roku e Fire Stick.',
    url: '/download',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baixar XCloud IPTV | Download App para Android e Smart TV',
    description: 'Faça o download do XCloud IPTV atualizado. Guia de instalação para TV Box, Android, Smart TV e Fire Stick.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
  },
  alternates: {
    canonical: '/download'
  }
}

export default function DownloadPage() {
  return (
    <>
      {/* Schemas de HowTo para SEO de tutoriais */}
      <XCloudInstallationHowToSchema />
      <AndroidTVInstallationHowToSchema />
      
      {/* Schema de SoftwareApplication */}
      <SoftwareApplicationSchema
        name="XCloud IPTV"
        description="Aplicativo XCloud IPTV para streaming completo com conteúdos variados. Disponível para Android, iOS, Smart TV e mais dispositivos."
        operatingSystem="Android, iOS, Windows, Smart TV"
        applicationCategory="MultimediaApplication"
        downloadUrl="https://xcloudiptv.com.br/download"
        screenshot={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-interface-streaming-app.webp`}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "1250"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background animado com gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 via-transparent to-green-900/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 py-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-6">
              Baixe e Instale XCloud IPTV em Poucos Minutos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guia oficial passo a passo com downloads seguros e código XCloudTV no Downloader. Compatível com Android, iOS, Smart TV e Fire TV Stick. Suporte dedicado incluído.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[50px]">
                  <Link href={createInternalLink('/planos-xcloud-iptv', 'Planos XCloud IPTV')} className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Ver Planos Disponíveis</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:text-green-400 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 min-h-[50px]">
                  <Link href={createInternalLink('/', 'Página Inicial XCloud IPTV')} className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5" />
                    <span>Voltar para Início</span>
                  </Link>
                </Button>
              </div>
            </div>

          {/* Smart TV Section */}
          <div id="smart-tv" className="mb-16 scroll-mt-20">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Smart TV - Instalação Direta
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Samsung (Tizen), LG (WebOS), Roku - Instale diretamente pela loja de apps
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Tv className="h-6 w-6 text-green-500" />
                    <span>Samsung, LG, Roku</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Instalação direta pela loja de aplicativos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">1.</span>
                      <span>Acesse a loja de aplicativos da sua TV</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">2.</span>
                      <span>Procure por "XcloudTV" (exatamente assim)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">3.</span>
                      <span>Clique em "Instalar"</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-green-400 font-bold">4.</span>
                      <span>Aguarde a instalação e abra o aplicativo</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <HelpCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-yellow-200">
                        <p className="font-semibold mb-1">Não encontrou "XcloudTV"?</p>
                        <p>Tente buscar por "Premium IPTV" - É o mesmo app com nome alternativo!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>

          {/* Android TV / Fire Stick / Mi Stick */}
          <div id="android-tv" className="mb-16 scroll-mt-20">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Android TV, Fire Stick, Mi Stick
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Use o aplicativo Downloader para instalação via código
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Fire Stick</CardTitle>
                  <CardDescription className="text-gray-400">Amazon Fire TV Stick</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-blue-400 font-bold">1.</span> Acesse a App Store do Fire Stick</p>
                    <p><span className="text-blue-400 font-bold">2.</span> Procure por "XcloudTV"</p>
                    <p><span className="text-blue-400 font-bold">3.</span> Clique em "Instalar"</p>
                    <p><span className="text-blue-400 font-bold">4.</span> Aguarde e abra o app</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                    <p className="text-xs text-yellow-200">
                      💡 Não encontrou? Tente "Premium IPTV"
                    </p>
                  </div>

                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Mi Stick</CardTitle>
                  <CardDescription className="text-gray-400">Xiaomi Mi TV Stick</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-orange-400 font-bold">1.</span> Instale o Downloader</p>
                    <p><span className="text-orange-400 font-bold">2.</span> Abra e digite: <span className="text-green-400 font-mono">4160059</span></p>
                    <p><span className="text-orange-400 font-bold">3.</span> Clique em GO</p>
                    <p><span className="text-orange-400 font-bold">4.</span> Instale o XcloudTV</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Código Downloader:</p>
                    <p className="text-green-400 font-mono text-lg">4160059</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Android TV</CardTitle>
                  <CardDescription className="text-gray-400">TVs e boxes Android</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-green-400 font-bold">1.</span> Instale o Downloader</p>
                    <p><span className="text-green-400 font-bold">2.</span> Abra e digite: <span className="text-green-400 font-mono">4160059</span></p>
                    <p><span className="text-green-400 font-bold">3.</span> Clique em GO</p>
                    <p><span className="text-green-400 font-bold">4.</span> Instale o XcloudTV</p>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>

          {/* Android TV / Fire Stick / Mi Stick */}
          <div id="mobile-devices" className="mb-16 scroll-mt-20">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Celular, Tablet e Computador
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Android, iOS e Windows - Downloads diretos e seguros
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Android Mobile</CardTitle>
                  <CardDescription className="text-gray-400">Celulares e tablets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-green-400 font-bold">1.</span> Clique no botão abaixo</p>
                    <p><span className="text-green-400 font-bold">2.</span> Baixe o APK</p>
                    <p><span className="text-green-400 font-bold">3.</span> Permita instalação de fontes desconhecidas</p>
                    <p><span className="text-green-400 font-bold">4.</span> Instale e abra o app</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <a href={EXTERNAL_LINKS.downloads.android} target="_blank" rel="nofollow" className="flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Android</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">iOS (iPhone/iPad)</CardTitle>
                  <CardDescription className="text-gray-400">Dispositivos Apple</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-blue-400 font-bold">1.</span> Clique no botão abaixo</p>
                    <p><span className="text-blue-400 font-bold">2.</span> Será redirecionado para App Store</p>
                    <p><span className="text-blue-400 font-bold">3.</span> Toque em "Obter"</p>
                    <p><span className="text-blue-400 font-bold">4.</span> Aguarde a instalação</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <a href={EXTERNAL_LINKS.downloads.ios} target="_blank" rel="nofollow" className="flex items-center justify-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>App Store iOS</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Windows PC</CardTitle>
                  <CardDescription className="text-gray-400">Computadores e notebooks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">

                  <div className="space-y-3 text-sm text-gray-300">
                    <p><span className="text-purple-400 font-bold">1.</span> Baixe o programa Windows</p>
                    <p><span className="text-purple-400 font-bold">2.</span> Execute o instalador</p>
                    <p><span className="text-purple-400 font-bold">3.</span> Siga as instruções</p>
                    <p><span className="text-purple-400 font-bold">4.</span> Configure com suas credenciais</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                    <a href={EXTERNAL_LINKS.downloads.windows} target="_blank" rel="nofollow" className="flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Windows</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-900/50 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Perguntas Frequentes sobre Download e Instalação
                </h2>
                <p className="text-gray-400 text-lg">
                  Tire suas dúvidas sobre como baixar e instalar o XCloud IPTV
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    pergunta: 'Como baixo o aplicativo XCloud IPTV?',
                    resposta: 'Você pode baixar o XCloud IPTV diretamente das lojas de aplicativos (Google Play, App Store, Samsung Apps, LG Content Store) ou usar nossos links diretos. Em dispositivos Android, também é possível instalar via APK. Sempre busque por "XcloudTV" nas lojas.'
                  },
                  {
                    pergunta: 'O aplicativo XCloud IPTV é gratuito?',
                    resposta: 'O download do aplicativo é gratuito. Você só paga pelo plano de assinatura escolhido. Oferecemos um teste grátis para que você possa experimentar antes de assinar um plano.'
                  },
                  {
                    pergunta: 'Em quais dispositivos posso instalar o XCloud IPTV?',
                    resposta: 'O XCloud IPTV é compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, Smart TVs LG, Samsung e Roku. Funciona em praticamente qualquer dispositivo moderno.'
                  },
                  {
                    pergunta: 'Como instalo no Fire TV Stick?',
                    resposta: 'No Fire TV Stick, acesse o menu principal, vá em "Buscar" e digite "XcloudTV". Selecione nosso aplicativo e clique em "Baixar". Após a instalação, abra o app e acesse com suas credenciais. Também é possível usar o Downloader com nosso link direto.'
                  },
                  {
                    pergunta: 'Preciso de alguma configuração especial?',
                    resposta: 'Não! O XCloud IPTV funciona imediatamente após a instalação. Basta abrir o aplicativo, inserir suas credenciais (usuário e senha fornecidos após a assinatura) e começar a assistir. O app se configura automaticamente.'
                  },
                  {
                    pergunta: 'O que fazer se o aplicativo não funcionar?',
                    resposta: 'Primeiro, verifique sua conexão com internet (mínimo 20 Mbps recomendado). Se o problema persistir, entre em contato com nosso suporte via email ou acesse nossa página de contato. Estamos disponíveis de segunda a sábado, das 9h às 22h.'
                  },
                  {
                    pergunta: 'Posso usar o mesmo login em vários dispositivos?',
                    resposta: 'Cada plano permite 1 conexão ativa por vez. Você pode instalar o aplicativo em quantos dispositivos quiser, mas só poderá usar em um dispositivo por vez. Para múltiplas conexões simultâneas, entre em contato conosco.'
                  },
                  {
                    pergunta: 'Como atualizo o aplicativo XCloud IPTV?',
                    resposta: 'As atualizações são automáticas na maioria dos dispositivos. Para Android e iOS, as atualizações vêm através das lojas de aplicativos. Em Smart TVs, verifique regularmente a loja de apps por atualizações. Sempre mantenha o app atualizado para melhor performance.'
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card rounded-xl border-white/10">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="text-white hover:text-green-500 px-6 py-4 text-lg">
                          <div className="flex items-center space-x-3">
                            <HelpCircle className="h-5 w-5 text-green-400" />
                            <span>{item.pergunta}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400 px-6 pb-4">
                          {item.resposta}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Pronto para começar?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Baixe o aplicativo agora e experimente o melhor do entretenimento com XCloud IPTV.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-bold rounded-xl">
                  <Link href={createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV')} className="flex items-center space-x-2">
                    <span>Teste Grátis</span>
                  </Link>
                </Button>
                <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg font-bold rounded-xl">
                  <Link href={createInternalLink('/planos-xcloud-iptv', 'Planos XCloud IPTV')} className="flex items-center space-x-2">
                    <span>Ver Planos</span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>


          {/* JSON-LD Schema - FAQPage */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Como baixo o aplicativo XCloud IPTV?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Você pode baixar o XCloud IPTV diretamente das lojas de aplicativos (Google Play, App Store, Samsung Apps, LG Content Store) ou usar nossos links diretos. Em dispositivos Android, também é possível instalar via APK. Sempre busque por "XcloudTV" nas lojas.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'O aplicativo XCloud IPTV é gratuito?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'O download do aplicativo é gratuito. Você só paga pelo plano de assinatura escolhido. Oferecemos um teste grátis para que você possa experimentar antes de assinar um plano.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Em quais dispositivos posso instalar o XCloud IPTV?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'O XCloud IPTV é compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, Smart TVs LG, Samsung e Roku. Funciona em praticamente qualquer dispositivo moderno.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Como instalo no Fire TV Stick?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No Fire TV Stick, acesse o menu principal, vá em "Buscar" e digite "XcloudTV". Selecione nosso aplicativo e clique em "Baixar". Após a instalação, abra o app e acesse com suas credenciais. Também é possível usar o Downloader com nosso link direto.'
                    }
                  }
                ]
              })
            }}
          />

          {/* JSON-LD Schema - HowTo */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'HowTo',
                name: 'Como instalar XCloud IPTV no Fire TV Stick',
                description: 'Passo a passo para instalar XCloud IPTV no Amazon Fire TV Stick',
                step: [
                  {
                    '@type': 'HowToStep',
                    text: 'Acesse o menu principal do Fire TV Stick'
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Vá em "Buscar" e digite "XcloudTV"'
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Selecione o aplicativo XCloud IPTV'
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Clique em "Baixar" e aguarde a instalação'
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Abra o aplicativo e acesse com suas credenciais'
                  }
                ]
              })
            }}
          />
        </div>
      </section>
    </div>
    </>
  )
}
