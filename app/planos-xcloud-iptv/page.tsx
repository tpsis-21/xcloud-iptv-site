import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Star, Zap, ShieldCheck, CreditCard, Clock, Users, Smartphone, Tv, Download } from 'lucide-react'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'
import { EXTERNAL_LINKS, createInternalLink } from '@/config/links'
import { SEO_CONFIG } from '@/config/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { XCloudPlanProductSchema } from '@/components/schemas/ProductSchema'
import { ReviewSchemaWithProtections, ReviewDisplay, generateSampleReviews } from '@/components/schemas/ReviewSchema'

export const metadata: Metadata = {
  title: 'Planos e Preços XCloud IPTV | Assine a Partir de R$ 30',
  description: 'Confira os planos XCloud IPTV: Mensal, Trimestral e Anual com descontos progressivos. A partir de R$ 30/mês. Liberação imediata e suporte incluso.',
  keywords: ['planos xcloud iptv', 'preço xcloud iptv', 'valor xcloud iptv', 'comprar xcloud iptv', 'assinatura iptv'],
  openGraph: {
    title: 'Planos e Preços XCloud IPTV | Assine a Partir de R$ 30',
    description: 'Confira os planos XCloud IPTV: Mensal, Trimestral e Anual com descontos progressivos. A partir de R$ 30/mês. Liberação imediata.',
    url: '/planos-xcloud-iptv',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planos e Preços XCloud IPTV | Assine a Partir de R$ 30',
    description: 'Confira os planos XCloud IPTV: Mensal, Trimestral e Anual com descontos progressivos. A partir de R$ 30/mês.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`]
  },
  alternates: {
    canonical: '/planos-xcloud-iptv'
  }
}

export default function Page() {
  // Usar links centralizados do config/links.ts
  const planos = [
    { 
      meses: 1, 
      preco: 30, 
      link: EXTERNAL_LINKS.payments.mensal, // ✅ URL centralizada
      popular: false,
      titulo: 'Plano Mensal',
      descricao: 'Mensal R$ 30 — ideal para começar',
      economia: '0%',
      precoPorMes: 30
    },
    { 
      meses: 3, 
      preco: 81, 
      link: EXTERNAL_LINKS.payments.trimestral, // ✅ URL centralizada
      popular: true,
      titulo: 'Plano Trimestral',
      descricao: 'Trimestral R$ 81 — economize 10%',
      economia: '10%',
      precoPorMes: 27
    },
    { 
      meses: 6, 
      preco: 153, 
      link: EXTERNAL_LINKS.payments.semestral, // ✅ URL centralizada
      popular: false,
      titulo: 'Plano Semestral',
      descricao: 'Semestral R$ 153 — economize 15%',
      economia: '15%',
      precoPorMes: 25.50
    },
    { 
      meses: 12, 
      preco: 288, 
      link: EXTERNAL_LINKS.payments.anual, // ✅ URL centralizada
      popular: false,
      titulo: 'Plano Anual',
      descricao: 'Anual R$ 288 — economize 20%',
      economia: '20%',
      precoPorMes: 24
    }
  ]

  // Criar link interno contextual para teste grátis
  const testeGratisLink = createInternalLink('/teste-gratis-xcloud-iptv#formulario-teste', 'Teste Grátis XCloud IPTV');

  // Schema JSON-LD para página de planos
  const plansSchema = SCHEMA_TEMPLATES.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Planos XCloud IPTV', url: '/planos-xcloud-iptv' }
  ]);

  // Features comuns dos planos
  const planFeatures = [
    'Conteúdos variados',
    '1 conexão simultânea', 
    'Suporte exclusivo via WhatsApp (clientes)',
    'Ativação imediata'
  ];

  // Gerar reviews de exemplo (em produção, vir do backend)
  const sampleReviews = generateSampleReviews('XCloud IPTV');

  // FAQ Data
  const faqItems = [
    {
      question: 'Quais as formas de pagamento aceitas?',
      answer: 'Aceitamos pagamentos via PIX para aprovação imediata e cartões de crédito. Todo o processo é seguro e processado automaticamente.'
    },
    {
      question: 'Em quanto tempo meu acesso é liberado?',
      answer: 'A liberação é imediata e automática assim que o pagamento é confirmado pelo sistema. Você recebe os dados de acesso no seu email.'
    },
    {
      question: 'A renovação é automática?',
      answer: 'Não. Prezamos pela sua liberdade. Você renova apenas se quiser, sem cobranças surpresas no seu cartão.'
    },
    {
      question: 'Funciona em quais dispositivos?',
      answer: 'O XCloud IPTV é compatível com Smart TVs (Samsung, LG, Android TV), TV Box, Fire Stick, Mi Stick, Celulares (Android/iOS) e Computadores.'
    }
  ];

  const faqSchema = SCHEMA_TEMPLATES.faqPage(faqItems);

  return (
    <>
      {/* Schema JSON-LD */}
      <JsonLD schema={plansSchema} />
      <JsonLD schema={faqSchema} />

      {/* Product schemas para cada plano */}
      {planos.map((plano) => (
        <XCloudPlanProductSchema
          key={plano.meses}
          planName={plano.meses === 1 ? 'Mensal' : plano.meses === 3 ? 'Trimestral' : plano.meses === 6 ? 'Semestral' : 'Anual'}
          price={plano.preco.toString()}
          period={`${plano.meses} meses`}
          features={planFeatures}
          description={plano.descricao}
        />
      ))}

      {/* Review schema com proteções */}
      <ReviewSchemaWithProtections
        reviews={sampleReviews}
        productName="XCloud IPTV"
        productSku="XCLOUD-IPTV-SERVICE"
      />

      <div className="relative min-h-screen">
        {/* Breadcrumb */}
        <div className="pt-6 px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Planos XCloud IPTV' }]} />
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 via-transparent to-green-900/5"></div>
            <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green-400/6 rounded-full blur-md"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-6">
                Planos XCloud IPTV
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Assinaturas mensais, trimestrais, semestrais e anuais. Teste grátis disponível e suporte em português (9h–22h).
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Teste grátis disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Cancelamento a qualquer momento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Suporte exclusivo via WhatsApp (clientes)</span>
                </div>
              </div>
            </div>

            {/* Planos */}
            <div id="planos" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto scroll-mt-24">
              {planos.map((plano) => (
                <div
                  key={plano.meses}
                  id={plano.meses === 1 ? 'mensal' : plano.meses === 3 ? 'trimestral' : plano.meses === 6 ? 'semestral' : 'anual'}
                  className={`relative group ${plano.popular ? 'lg:scale-110' : ''} scroll-mt-24`}
                >
                  {plano.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="gradient-brand text-white px-4 py-2 font-bold">
                        <Star className="h-4 w-4 mr-1" />
                        MAIS POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`glass-card rounded-2xl p-8 h-full transition-all duration-300 group-hover:scale-105 ${
                    plano.popular ? 'border-green-500/50 shadow-2xl shadow-green-500/20' : 'border-white/10'
                  }`}>
                    <div className="text-center space-y-6">
                      {/* Header do plano */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {plano.titulo}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {plano.descricao}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="text-4xl font-bold text-gradient-brand">
                            R$ {plano.preco}
                          </div>
                          <div className="text-gray-400">
                            {plano.meses === 1 ? 'Mensal' : `${plano.meses} meses`}
                          </div>
                          <div className="text-sm text-green-500 font-semibold">
                            Economia de {plano.economia}
                          </div>
                          <div className="text-xs text-gray-500">
                            R$ {plano.precoPorMes.toFixed(2)}/mês
                          </div>
                        </div>
                      </div>
                      
                      {/* Benefícios */}
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Milhares de conteúdos</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>1 Conexão simultânea</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Conteúdos Variados</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Suporte exclusivo via WhatsApp (clientes)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Ativação imediata</span>
                        </div>
                      </div>
                      
                      {/* Botão CTA com link centralizado */}
                      <Button asChild className={`w-full py-2.5 text-base font-semibold rounded-xl transition-all duration-300 min-h-[44px] ${
                        plano.popular 
                          ? 'gradient-brand text-white shadow-lg hover:shadow-xl' 
                          : 'border-green-500/50 text-green-500 hover:bg-green-500/10'
                      }`}>
                        <a
                          href={plano.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full h-full"
                          aria-label={`Assinar plano ${plano.meses === 1 ? 'Mensal' : plano.meses === 3 ? 'Trimestral' : plano.meses === 6 ? 'Semestral' : 'Anual'} por R$ ${plano.preco}`}
                          title={`Assinar plano ${plano.meses === 1 ? 'Mensal' : plano.meses === 3 ? 'Trimestral' : plano.meses === 6 ? 'Semestral' : 'Anual'} por R$ ${plano.preco}`}
                        >
                          <CreditCard className="h-5 w-5" />
                          <span>
                            {plano.meses === 1 ? 'Assinar Mensal R$ 30' : plano.meses === 3 ? 'Assinar Trimestral R$ 81' : plano.meses === 6 ? 'Assinar Semestral R$ 153' : 'Assinar Anual R$ 288'}
                          </span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA para teste grátis com link contextual */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">Ainda Não Assinou XCloud IPTV?</h3>
              <p className="text-gray-400 mb-4">Ainda não tem certeza?</p>
              <Link href={testeGratisLink.href}>
                <Button 
                  variant="outline" 
                  className="border-green-500/50 text-green-500 hover:bg-green-500/10 hover:text-green-400 px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-300"
                  aria-label={testeGratisLink.text}
                >
                  <Clock className="h-5 w-5 mr-2" />
                  {testeGratisLink.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="py-20 relative bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
                Por Que Nos Escolher? Experimente Grátis
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Descubra os benefícios exclusivos que nossa plataforma oferece
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Alta Disponibilidade</h3>
                <p className="text-gray-400">
                  Servidores de alta performance com disponibilidade confiável para streaming contínuo.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Suporte Exclusivo via WhatsApp</h3>
                <p className="text-gray-400">
                  Atendimento exclusivo para clientes pelo WhatsApp (9h–22h). Para dúvidas gerais, utilize o e‑mail.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ativação Imediata</h3>
                <p className="text-gray-400">
                  Assinatura ativada em até 5 minutos após confirmação do pagamento. Sem espera, sem burocracia.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-dispositivos</h3>
                <p className="text-gray-400">
                  Assista em Android, iOS, Windows, Smart TV, Fire Stick e muito mais. 
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Milhares de Conteúdos</h3>
                <p className="text-gray-400">
                  Acesso completo a filmes, séries, documentários e muito mais. Conteúdo atualizado regularmente.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Download Aplicativo</h3>
                <p className="text-gray-400">
                  Baixe nosso aplicativo e assista onde quiser. Disponível para diversos dispositivos e sistemas operacionais.
                </p>
              </div>
            </div>

            {/* Bloco Narrativo SEO */}
            <div className="mt-24 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Por que escolher os planos XCloud IPTV?
              </h2>
              <div className="prose prose-invert mx-auto text-gray-300 leading-relaxed">
                <p>
                  Escolher o plano ideal no <strong>XCloud IPTV</strong> é garantir acesso a uma plataforma estável e completa. 
                  Nossos pacotes foram desenhados para atender desde quem busca economia com o plano anual até quem prefere 
                  flexibilidade com o plano mensal. Com <strong>ativação imediata</strong> e <strong>suporte dedicado em português</strong>, 
                  você tem a tranquilidade de um serviço que prioriza a sua experiência de entretenimento, sem travamentos e com a melhor qualidade de imagem.
                </p>
              </div>
            </div>

            {/* Seção FAQ */}
            <div className="mt-24 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Dúvidas Frequentes sobre os Planos
                </h2>
                <p className="text-gray-400">
                  Tudo o que você precisa saber antes de assinar
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {faqItems.map((faq, index) => (
                  <Card key={index} className="glass-card border-white/10 hover:border-green-500/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white text-lg flex items-start gap-3">
                        <span className="text-green-500 mt-1">?</span>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-12">
              <Button asChild 
                  size="lg" 
                  className="gradient-brand text-white px-8 py-4 text-lg font-semibold rounded-xl"
                  aria-label="Experimente XCloud IPTV grátis"
                >
                <Link href={testeGratisLink.href} className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Experimente XCloud IPTV Grátis</span>
                </Link>
              </Button>
            </div>

            {/* Seção de Reviews com Display Visual */}
            <ReviewDisplay reviews={sampleReviews} productName="XCloud IPTV" />
          </div>
        </section>
      </div>
    </>
  )
}
