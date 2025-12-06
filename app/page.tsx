import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import heroImg from './assets/images/interface_xcloudtv.webp'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Bolt, Headphones, Smartphone, Tv, Download, Lock, Rocket, CheckCircle2, CreditCard, Star, Zap, Crown } from 'lucide-react'
import dynamic from 'next/dynamic'
const Particles = dynamic(() => import('@/components/particles').then(m => m.Particles), { ssr: false })
import { createInternalLink } from '@/config/seo'
import { EXTERNAL_LINKS } from '@/config/links'
import { MetaTags } from '@/components/seo/MetaTags'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'
import { contentRules } from '@/config/seo'
import { XCloudAppSchema } from '@/components/schemas/SoftwareApplicationSchema'
import { XCloudLocalBusinessSchema } from '@/components/schemas/LocalBusinessSchema'

// Função para validar conteúdo antes de renderizar
function validateContent(content: string, context: string): { valid: boolean; violations: string[] } {
  const result = contentRules.validateText(content);
  if (!result.valid) {
    console.warn(`Violação de conteúdo em ${context}:`, result.violations);
  }
  return result;
}

const faqQuestions = [
  {
    question: 'Como funciona o teste grátis XCloud IPTV?',
    answer: 'Basta preencher seu nome, e-mail e telefone que enviaremos as instruções de acesso instantaneamente por email.'
  },
  {
    question: 'Quais dispositivos são compatíveis com XCloud IPTV?',
    answer: 'XCloud IPTV é compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, TVs LG, Samsung e Roku.'
  },
  {
    question: 'O que é XCloud IPTV?',
    answer: 'XCloud IPTV é sua plataforma de streaming completa, oferecendo milhares de canais, filmes e séries.'
  },
  {
    question: 'Como funciona o suporte XCloud IPTV?',
    answer: 'Oferecemos suporte especializado via e-mail e chat web com tempo de resposta ultra-rápido. Canais exclusivos para clientes ativos.'
  },
  {
    question: 'Qual a velocidade mínima de internet necessária para XCloud IPTV?',
    answer: 'Recomendamos conexão de pelo menos 20 Mbps para streaming. Conexões mais lentas funcionam, e o conteúdo se adapta automaticamente.'
  },
  {
    question: 'Posso usar XCloud IPTV em mais de um dispositivo simultaneamente?',
    answer: 'Cada plano inclui 1 conexão ativa por vez. Você pode usar em diferentes dispositivos, mas não simultaneamente. Para múltiplas conexões, entre em contato.'
  },
  {
    question: 'Como é feita a instalação do XCloud IPTV?',
    answer: 'A instalação é simples e guiada. Após a assinatura, você recebe um email com tutorial passo a passo para seu dispositivo específico. Suporte disponível se precisar.'
  },
  {
    question: 'Quais são as formas de pagamento aceitas pela XCloud IPTV?',
    answer: 'Aceitamos pagamento via cartão de crédito, débito e boleto bancário através da plataforma Cakto, totalmente segura e confiável.'
  },
  {
    question: 'Posso cancelar XCloud IPTV a qualquer momento?',
    answer: 'Sim! Você pode cancelar quando quiser sem multas ou burocracias. O acesso continua até o final do período pago. Você tem controle total.'
  },
  {
    question: 'O conteúdo XCloud IPTV é atualizado regularmente?',
    answer: 'Sim! Nossa biblioteca é atualizada diariamente com novos canais, filmes e séries. Você sempre tem acesso aos conteúdos mais recentes.'
  },
  {
    question: 'XCloud IPTV funciona fora do Brasil?',
    answer: 'XCloud IPTV funciona em qualquer lugar do mundo com conexão de internet. Perfeito para viajantes e brasileiros no exterior.'
  },
  {
    question: 'Qual a diferença entre XCloud IPTV e streaming tradicional?',
    answer: 'IPTV oferece mais canais ao vivo, conteúdo sob demanda, menor custo e maior flexibilidade que TV a cabo tradicional. É o futuro do entretenimento.'
  },
  {
    question: 'É seguro usar XCloud IPTV?',
    answer: 'Totalmente seguro! Usamos tecnologia de criptografia avançada e não compartilhamos seus dados. Sua privacidade é nossa prioridade.'
  },
  {
    question: 'Como funciona o período de teste grátis XCloud IPTV?',
    answer: 'O teste grátis oferece acesso completo ao conteúdo. É necessário apenas nome, email e telefone. Sem cartão de crédito ou compromisso.'
  },
  {
    question: 'Posso mudar de plano XCloud IPTV depois?',
    answer: 'Sim! Você pode mudar de plano a qualquer momento. O novo plano entra em vigor após o término do atual. Upgrade ou downgrade conforme sua necessidade.'
  },
  {
    question: 'O que está incluído em cada plano XCloud IPTV?',
    answer: 'Todos os planos incluem acesso completo a milhares de canais, filmes, séries, suporte técnico e atualizações. A diferença é apenas o período de duração e o desconto aplicado.'
  }
];

export default function Page() {
  const pageTitle = 'XCloud IPTV | Assine XCloud IPTV e Teste Grátis no Brasil';
  const pageDescription = 'XCloud IPTV com conteúdos variados. Teste grátis e assine planos acessíveis. Suporte em português (9h–22h). Compatível com Android, iOS, Windows e Smart TVs.';
  const pageKeywords = ['xcloud iptv', 'assinar xcloud iptv', 'planos xcloud iptv', 'teste grátis xcloud iptv', 'streaming iptv', 'xcloud tv'];
  
  // Validar conteúdo crítico
  validateContent(pageTitle, 'Home - Title');
  validateContent(pageDescription, 'Home - Description');
  validateContent(pageKeywords.join(', '), 'Home - Keywords');
  
  // Schemas JSON-LD
  const organizationSchema = SCHEMA_TEMPLATES.organization;
  const faqSchema = SCHEMA_TEMPLATES.faqPage(faqQuestions.map(q => ({
    question: q.question,
    answer: q.answer
  })));
  
  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical="/"
        ogImage={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/og-image.svg`}
      />
      <JsonLD schema={organizationSchema} />
      <JsonLD schema={faqSchema} />
      
      {/* Schemas avançados */}
      <XCloudAppSchema />
      <XCloudLocalBusinessSchema />
      
      <div className="relative min-h-screen">
      <Particles />
      
      {/* Hero Section - Layout Exato conforme Imagem */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Sutil */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 via-transparent to-green-900/5"></div>
          <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green-400/6 rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo textual - Lado Esquerdo */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">

              {/* Headline Principal - Layout Exato */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl sm:whitespace-nowrap">
                  XCloud IPTV
                  </h1>
                </div>

                <div className="space-y-6">
                  <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    XCloud IPTV oferece streaming completo com canais ao vivo, filmes e séries. Assine por apenas R$ 30/mês e faça o teste grátis hoje mesmo.
                  </p>
                  
                  {/* Benefícios em Bullets - Diferenciais de Valor */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">Até 70% mais barato que TV a cabo</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">Instalação imediata em poucos minutos</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">Funciona em todos os dispositivos — veja como instalar XCloud IPTV</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs - Estratégia de Conversão Otimizada */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex flex-col items-center gap-3">
                  <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px]">
                    <Link href={createInternalLink('/planos-xcloud-iptv', 'Planos XCloud IPTV')} className="flex items-center space-x-2 w-full h-full justify-center">
                      <Crown className="h-5 w-5" />
                      <span>Ver Planos XCloud</span>
                    </Link>
                  </Button>
                  <Link href={createInternalLink('/planos-xcloud-iptv#mensal', 'Planos XCloud IPTV Mensal')} className="text-xs text-green-300 underline underline-offset-2 hover:text-green-200">Planos a partir de R$ 30/mês</Link>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Button asChild variant="outline" className="border-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:text-green-400 px-6 py-3 text-base font-bold rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px]">
                    <Link href={createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV')} className="flex items-center space-x-2 w-full h-full justify-center">
                      <Rocket className="h-5 w-5" />
                      <span>Teste Grátis</span>
                    </Link>
                  </Button>
                  <span className="text-xs text-gray-300">Sem cartão • Sem compromisso</span>
                </div>
              </div>

              {/* Trust indicators - Layout Exato */}
              <div className="flex items-center justify-start space-x-8 pt-8">
                <div className="flex items-center space-x-2 text-gray-300">
                  <ShieldCheck className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">Acesso Seguro</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">Ativação Imediata</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Zap className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">Streaming Rápido</span>
                </div>
              </div>
            </div>

            {/* Imagem do dispositivo - Lado Direito com Enquadramento Profissional */}
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Glow effect sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/15 via-green-400/8 to-green-600/15 rounded-3xl blur-md"></div>
                
                <div className="relative bg-gray-800/40 backdrop-blur-sm border border-green-500/20 rounded-3xl p-4 sm:p-6 shadow-xl transition-all duration-300">
                  <Image
                    src={heroImg}
                    alt="Interface da plataforma de streaming com variedade de conteúdo disponível"
                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    priority
                    quality={65}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAgAAkA4JQBOgB6gEAAAGgA"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full px-4 py-1.5 text-white font-bold text-xs shadow-lg border border-green-400/30">
                    Streaming Completo
                  </div>
                  
                  {/* Overlay para cobrir os 3 pontos na imagem */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-900/70 backdrop-blur-sm rounded-full"></div>
                </div>
                
                {/* Stats Cards - Prova Social e Urgência */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="glass-card rounded-xl p-4 text-center border border-green-500/20 hover:border-green-400/40 transition-all duration-300 min-w-0 break-words">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent mb-1">Conteúdos Variados</div>
                    <div className="text-xs text-gray-300 font-medium">Biblioteca atualizada</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center border border-green-500/20 hover:border-green-400/40 transition-all duration-300 min-w-0 break-words">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent mb-1">Alta Disponibilidade</div>
                    <div className="text-xs text-gray-300 font-medium">Serviço confiável</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center border border-green-500/20 hover:border-green-400/40 transition-all duration-300 min-w-0 break-words">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent mb-1">Compatibilidade Total</div>
                    <div className="text-xs text-gray-300 font-medium">Android, iOS, Windows, Smart TVs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Por que escolher nossa plataforma no Brasil
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra os benefícios exclusivos da plataforma
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mt-6">
              Streaming completo com ativação imediata
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Planos Acessíveis</h4>
              <p className="text-gray-300">
                Assine com descontos progressivos. <Link href={createInternalLink('/planos-xcloud-iptv#anual', 'Plano Anual')} className="text-green-300 underline underline-offset-2 hover:text-green-200">Plano anual com 20% de economia</Link> e maior custo-benefício.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Ativação Imediata</h4>
              <p className="text-gray-400">
                Comece a usar em minutos. <span className="text-green-300">Suporte especializado</span> disponível de segunda a sábado (9h às 22h) quando você precisar.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Compatibilidade Total</h4>
              <p className="text-gray-300 mb-4">
                Compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, TVs LG, Samsung e Roku. Instale e comece a assistir hoje mesmo em qualquer dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Como começar em minutos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforme seu entretenimento em minutos. Economize até 70% comparado à TV tradicional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Escolha seu plano</h3>
              <p className="text-gray-300">Selecione o plano ideal para você. <Link href={createInternalLink('/planos-xcloud-iptv#mensal', 'Planos XCloud IPTV Mensal')} className="text-green-500 hover:text-green-400 underline">Planos a partir de R$ 30/mês</Link> com descontos progressivos.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. Receba Acesso Imediato</h3>
              <p className="text-gray-300">Pagamento confirmado = conta ativada instantaneamente. <span className="text-green-500">Suporte especializado</span> 9h-22h.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Aproveite Seu Streaming</h3>
              <p className="text-gray-300">Ativação imediata em minutos. Milhares de conteúdos disponíveis em todos os dispositivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Planos */}
      <section id="planos" className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Planos de Assinatura
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare nossos valores de ativação mensal, trimestral, semestral e anual. Encontre o plano perfeito para você.
            </p>
            <div className="mt-6">
              <p className="text-lg text-green-500 font-semibold">
                ✅ Compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, Smart TVs LG, Samsung e Roku
              </p>
              <p className="text-gray-300 mt-2">
                Escolha o plano perfeito para sua experiência de streaming
              </p>
            </div>
          </div>

          {/* Planos de Assinatura XCloud IPTV */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                meses: 1, 
                preco: 30, 
                link: EXTERNAL_LINKS.payments.mensal, 
                popular: false,
                titulo: 'Plano Mensal',
                descricao: 'Assinatura mensal ideal para testar nosso serviço'
              },
              { 
                meses: 3, 
                preco: 81, 
                link: EXTERNAL_LINKS.payments.trimestral, 
                popular: true,
                titulo: 'Plano Trimestral',
                descricao: 'Plano mais popular - Economize 10%'
              },
              { 
                meses: 6, 
                preco: 153, 
                link: EXTERNAL_LINKS.payments.semestral, 
                popular: false,
                titulo: 'Plano Semestral',
                descricao: 'Economize 15% com assinatura semestral'
              },
              { 
                meses: 12, 
                preco: 288, 
                link: EXTERNAL_LINKS.payments.anual, 
                popular: false,
                titulo: 'Plano Anual',
                descricao: 'Maior economia - 20% de desconto anual'
              }
            ].map((plano) => (
              <div key={plano.meses} className={`relative group ${plano.popular ? 'lg:scale-110' : ''}`}>
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="gradient-brand text-white px-4 py-2 font-bold">
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}
                
                <div className={`glass-card rounded-2xl p-8 h-full transition-all duration-300 group-hover:scale-105 ${
                  plano.popular ? 'border-green-500/50 shadow-2xl shadow-green-500/20' : 'border-white/10'
                }`}>
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {plano.titulo}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {plano.descricao}
                      </p>
                      <div className="text-4xl font-bold text-gradient-brand mt-2">
                        R$ {plano.preco}
                      </div>
                      <div className="text-gray-300">
                        {plano.meses === 1 ? 'Mensal' : `R$ ${(plano.preco/plano.meses).toFixed(2)}/mês`}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>1 Conexão Ativa</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Conteúdo Variado</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Suporte Especializado</span>
                      </div>
                    </div>
                    
                    <Button asChild className={`w-full ${plano.popular ? 'gradient-brand text-white' : 'border-green-500/50 text-green-500 hover:bg-green-500/10'} py-6 text-lg font-semibold min-h-[48px]`}>
                      <a
                        href={plano.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full text-center"
                        aria-label={`Assinar plano ${plano.meses === 1 ? 'Mensal' : plano.meses === 3 ? 'Trimestral' : plano.meses === 6 ? 'Semestral' : 'Anual'} por R$ ${plano.preco}`}
                        title={`Assinar plano ${plano.meses === 1 ? 'Mensal' : plano.meses === 3 ? 'Trimestral' : plano.meses === 6 ? 'Semestral' : 'Anual'} por R$ ${plano.preco}`}
                      >
                        {plano.meses === 1 ? 'Assinar Mensal R$ 30' : plano.meses === 3 ? 'Assinar Trimestral R$ 81' : plano.meses === 6 ? 'Assinar Semestral R$ 153' : 'Assinar Anual R$ 288'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Dispositivos - Link para Download */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Funciona em Todos Seus Dispositivos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa plataforma é compatível com todos os dispositivos que você já possui. Instale em minutos e comece a assistir hoje mesmo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart TVs</h3>
              <p className="text-gray-300 text-sm mb-4">Samsung, LG, Android TV</p>
              <span className="text-green-400 text-xs">✓ Compatível</span>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Celulares</h3>
              <p className="text-gray-300 text-sm mb-4">Android e iOS</p>
              <span className="text-green-400 text-xs">✓ Compatível</span>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dispositivos</h3>
              <p className="text-gray-300 text-sm mb-4">Fire Stick, Mi Stick, Roku</p>
              <span className="text-green-400 text-xs">✓ Compatível</span>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Computador</h3>
              <p className="text-gray-300 text-sm mb-4">Windows e Mac</p>
              <span className="text-green-400 text-xs">✓ Compatível</span>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl min-h-[48px]">
              <Link href={createInternalLink('/download', 'Download XCloud IPTV')} className="flex items-center space-x-3">
                <Download className="h-6 w-6" />
                <span>Ver Guia Completo de Instalação</span>
              </Link>
            </Button>
            <p className="text-gray-300 text-sm mt-4">Instalação em menos de 5 minutos • Suporte incluído</p>
          </div>
        </div>
      </section>

      {/* Seção Comparativo */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Nossa Plataforma vs TV Tradicional
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compare e descubra as vantagens do streaming moderno
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="pb-4 text-white font-semibold">Características</th>
                    <th className="pb-4 text-green-500 font-semibold">Nossa Plataforma</th>
                    <th className="pb-4 text-gray-300 font-semibold">TV Tradicional</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-white">Preço Mensal</td>
                    <td className="py-4 text-green-500">A partir de R$ 30</td>
                    <td className="py-4 text-gray-300">R$ 150-300</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-white">Conteúdo Variado</td>
                    <td className="py-4 text-green-500">✅ Biblioteca ampla de conteúdos</td>
                    <td className="py-4 text-gray-300">❌ Limitado</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-white">Filmes e Séries</td>
                    <td className="py-4 text-green-500">✅ Biblioteca completa</td>
                    <td className="py-4 text-gray-300">❌ Pago extra</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 text-white">Instalação</td>
                    <td className="py-4 text-green-500">✅ Imediata online</td>
                    <td className="py-4 text-gray-300">❌ Técnico necessário</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-white">Suporte</td>
                    <td className="py-4 text-green-500">✅ Segunda a sábado, 9h às 22h</td>
                    <td className="py-4 text-gray-300">❌ Horário comercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Dicas */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Top 5 Dicas Para Melhorar sua Experiência de Streaming
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maximize seu entretenimento com estas estratégias comprovadas
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Invista em uma Boa Conexão de Internet</h3>
                <p className="text-gray-300">Uma conexão estável de pelo menos 20 Mbps garante streaming ao vivo sem travamentos. Use conexão via cabo quando possível para maior estabilidade.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Utilize Dispositivos Adequados</h3>
                <p className="text-gray-400">Smart TVs modernas, dispositivos Android TV ou Roku oferecem melhor desempenho que aparelhos antigos. Mantenha sempre atualizado o aplicativo.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Organize Seu Conteúdo</h3>
                <p className="text-gray-400">Crie listas de favoritos e organize por categorias. Use a função de busca para encontrar rapidamente seus filmes e séries preferidos.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Ajuste as Configurações de Vídeo e Áudio</h3>
                <p className="text-gray-400">Ajuste as configurações de acordo com sua conexão. Ative legendas quando necessário e configure o áudio para melhor experiência.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Crie um Ambiente Confortável</h3>
                <p className="text-gray-400">Controle a iluminação do ambiente, ajuste a distância da TV e use sistema de som adequado para uma experiência cinematográfica em casa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient-brand mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-400">
              Tire suas dúvidas sobre a plataforma
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                pergunta: 'Como funciona o teste grátis?',
                resposta: 'Basta preencher seu nome, e-mail e telefone que enviaremos as instruções de acesso instantaneamente.'
              },
              {
                pergunta: 'Quais dispositivos são compatíveis?',
                resposta: 'Nossa plataforma é compatível com Android TV, celular Android, iOS, Fire Stick, Mi Stick, Windows, Smart TVs LG, Samsung e Roku.'
              },
              {
                pergunta: 'O que é XCloud IPTV?',
                resposta: 'A xcloud iptv é uma plataforma de streaming completa com conteúdos variados, ativação imediata e suporte em português. Oferecemos programação ao vivo, filmes e séries em um só lugar.'
              },
              {
                pergunta: 'Como funciona o suporte?',
                resposta: 'Oferecemos suporte especializado via e-mail e chat web com tempo de resposta ultra-rápido. Canais exclusivos para clientes ativos.'
              },
              {
                pergunta: 'Qual a velocidade mínima de internet necessária?',
                resposta: 'Recomendamos conexão de pelo menos 20 Mbps para streaming. Conexões mais lentas funcionam, mas o conteúdo se adapta automaticamente.'
              },
              {
                pergunta: 'Posso usar em mais de um dispositivo simultaneamente?',
                resposta: 'Cada plano inclui 1 conexão ativa por vez. Você pode usar em diferentes dispositivos, mas não simultaneamente. Para múltiplas conexões, entre em contato.'
              },
              {
                pergunta: 'Como é feita a instalação?',
                resposta: 'A instalação é simples e guiada. Após a assinatura, você recebe um email com tutorial passo a passo para seu dispositivo específico. Suporte disponível se precisar.'
              },
              {
                pergunta: 'Quais são as formas de pagamento aceitas?',
                resposta: 'Aceitamos pagamento via cartão de crédito, débito e boleto bancário através da plataforma Cakto, totalmente segura e confiável.'
              },
              {
                pergunta: 'Posso cancelar a qualquer momento?',
                resposta: 'Sim! Você pode cancelar quando quiser sem multas ou burocracias. O acesso continua até o final do período pago. Você tem controle total.'
              },
              {
                pergunta: 'O conteúdo é atualizado regularmente?',
                resposta: 'Sim! Nossa biblioteca é atualizada diariamente com novos canais, filmes e séries. Você sempre tem acesso aos conteúdos mais recentes.'
              },
              {
                pergunta: 'Funciona fora do Brasil?',
                resposta: 'XCloud IPTV funciona em qualquer lugar do mundo com conexão de internet. Perfeito para viajantes e brasileiros no exterior.'
              },
              {
                pergunta: 'Qual a diferença entre IPTV e streaming tradicional?',
                resposta: 'IPTV oferece mais canais ao vivo, conteúdo sob demanda, menor custo e maior flexibilidade que TV a cabo tradicional. É o futuro do entretenimento.'
              },
              {
                pergunta: 'É seguro usar XCloud IPTV?',
                resposta: 'Totalmente seguro! Usamos tecnologia de criptografia avançada e não compartilhamos seus dados. Sua privacidade é nossa prioridade.'
              },
              {
                pergunta: 'Como funciona o período de teste grátis?',
                resposta: 'O teste grátis oferece acesso completo por tempo limitado. É necessário apenas nome, email e telefone. Sem cartão de crédito ou compromisso.'
              },
              {
                pergunta: 'Posso mudar de plano depois?',
                resposta: 'Sim! Você pode mudar de plano a qualquer momento. O novo plano entra em vigor após o término do atual. Upgrade ou downgrade conforme sua necessidade.'
              },
              {
                pergunta: 'O que está incluído em cada plano?',
                resposta: 'Todos os planos incluem acesso completo a milhares de canais, filmes, séries, suporte técnico e atualizações. A diferença é apenas o período de duração e o desconto aplicado.'
              }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-xl border-white/10">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="text-white hover:text-green-500 px-6 py-4 text-lg">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 px-6 pb-4">
                      {item.resposta}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Com Urgência */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-medium">Oferta por tempo limitado</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient-brand mb-6">
            Pronto para Transformar Seu Entretenimento?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a clientes satisfeitos no Brasil. Ativação imediata e suporte especializado incluído.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-8 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl min-h-[48px]">
              <Link href={createInternalLink('/planos-xcloud-iptv', 'Escolher Plano')} className="flex items-center space-x-3">
                <Crown className="h-6 w-6" />
                <span>Escolher Meu Plano</span>
              </Link>
            </Button>
            <Button variant="outline" className="px-10 py-8 text-xl font-bold rounded-2xl border-green-500/50 text-green-500 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 min-h-[48px]">
              <Link href={createInternalLink('/teste-gratis-xcloud-iptv', 'Experimentar Grátis XCloud IPTV')} className="flex items-center space-x-3 underline underline-offset-2">Experimentar Grátis</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}
