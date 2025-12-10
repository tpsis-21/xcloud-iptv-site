import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Globe,
  CheckCircle2,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react'
import { Particles } from '@/components/particles'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'

export const metadata: Metadata = {
  title: 'Sobre Nós XCloud IPTV - IPTV Streaming Brasil | Conteúdo Variado',
  description:
    'Conheça a XCloud IPTV, plataforma de IPTV streaming no Brasil. Serviço confiável com conteúdos variados, estabilidade e suporte técnico em português. Missão, visão e valores.',
  keywords: ['sobre xcloudtv brasil', 'xcloudtv empresa iptv', 'empresa streaming brasil confiável', 'xcloud iptv brasil origem', 'xcloudtv streaming conteúdo variado brasil', 'plataforma iptv brasil xcloudtv'],
  alternates: { canonical: '/sobre-nos' },
  openGraph: {
    title: 'Sobre Nós XCloud IPTV - IPTV Streaming Brasil | Conteúdo Variado',
    description: 'Conheça a XCloud IPTV, plataforma de IPTV streaming no Brasil. Conteúdos variados, streaming ao vivo com estabilidade e suporte técnico especializado.',
    url: '/sobre-nos',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nós - XCloud IPTV | IPTV Streaming Brasil',
    description: 'Conheça a XCloud IPTV, plataforma confiável com conteúdo variado e suporte especializado.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
  }
}

const valores = [
  {
    icone: ShieldCheck,
    titulo: 'Confiança e Segurança',
    descricao: 'Priorizamos a segurança dos dados e a privacidade dos nossos clientes em todas as nossas operações.'
  },
  {
    icone: Zap,
    titulo: 'Inovação Constante',
    descricao: 'Buscamos sempre as melhores tecnologias para oferecer a melhor experiência de streaming.'
  },
  {
    icone: Headphones,
    titulo: 'Suporte Excepcional',
    descricao: 'Atendimento humano e personalizado, disponível de segunda a sábado das 9h às 22h para garantir sua satisfação.'
  },
  {
    icone: Heart,
    titulo: 'Paixão pelo Entretenimento',
    descricao: 'Amamos o que fazemos e nos dedicamos a levar o melhor conteúdo para você e sua família.'
  }
]

const diferenciais = [
  {
    icone: TrendingUp,
    titulo: 'Estabilidade Superior',
        descricao: 'Servidores de alta performance com disponibilidade confiável para streaming contínuo.'
  },
  {
    icone: Users,
    titulo: 'Atendimento Humano',
    descricao: 'Equipe especializada e treinada para oferecer suporte personalizado e eficiente.'
  },
  {
    icone: Award,
    titulo: 'Excelência Comprovada',
    descricao: 'Milhares de clientes satisfeitos em todo o Brasil nos escolhem como sua plataforma de streaming.'
  },
  {
    icone: Globe,
    titulo: 'Cobertura Nacional',
    descricao: 'Presente em todas as regiões do Brasil, levando entretenimento com conteúdo variado para todos.'
  }
]

const conquistas = [
  { numero: 'Usuários', titulo: 'Satisfeitos' },
  { numero: 'Conteúdos', titulo: 'Variados' },
  { numero: 'Suporte', titulo: 'Seg-Sáb 9h–22h' },
  { numero: 'Disponibilidade', titulo: 'Confiável' }
]

export default function SobreNosPage() {
  const breadcrumb = SCHEMA_TEMPLATES.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Sobre Nós', url: '/sobre-nos' }
  ])

  return (
    <div className="relative min-h-screen">
      <JsonLD schema={SCHEMA_TEMPLATES.organization} />
      <JsonLD schema={breadcrumb} />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Sutil */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 via-transparent to-green-900/5"></div>
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green-400/6 rounded-full blur-md"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="pt-6 px-6 lg:px-8">
            <Breadcrumb items={[{ label: 'Sobre Nós' }]} />
          </div>
          <div className="inline-flex items-center space-x-2 glass-premium rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Conheça Nossa História</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-6">
            XCloud IPTV - IPTV Streaming Brasil
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A XCloud IPTV é a principal plataforma de <strong>IPTV streaming no Brasil</strong>, especializada em oferecer 
            entretenimento com conteúdo variado, estabilidade superior e suporte técnico especializado. 
            Comprometida com a excelência em streaming ao vivo para toda a família brasileira.
          </p>
          <div className="mt-8">
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Fundada com a missão de revolucionar o mercado de <strong>streaming IPTV no Brasil</strong>, 
              a XCloud IPTV se destaca como a escolha número um para quem busca 
              <strong>conteúdo variado</strong>, estabilidade e suporte técnico especializado. 
              Nossa plataforma oferece <strong>streaming ao vivo</strong> com tecnologia de ponta, 
              atendendo desde assinantes individuais até famílias que buscam excelência em entretenimento.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              XCloud IPTV Brasil: Missão, Visão e Valores em IPTV Streaming
            </h2>
            <p className="text-gray-400 text-lg">
              O que nos move e guia nosso trabalho diário
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Nossa Missão em IPTV Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Democratizar o acesso ao entretenimento com conteúdo variado, proporcionando uma experiência 
                  de streaming superior com tecnologia de ponta e suporte humano excepcional.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Nossa Visão como Líder em Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Ser reconhecida como a empresa líder em streaming IPTV no Brasil, 
                  sinônimo de excelência, confiabilidade e inovação no mercado de entretenimento.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Nossos Valores em Streaming IPTV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Transparência, inovação, compromisso com o cliente e excelência em tudo que fazemos. 
                  Sua satisfação é nossa maior prioridade.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icone = valor.icone
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icone className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{valor.titulo}</h3>
                  <p className="text-gray-400 text-sm">{valor.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Nossas Conquistas
            </h2>
            <p className="text-gray-400 text-lg">
              Números que demonstram nosso comprometimento com a excelência
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {conquistas.map((conquista, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                  {conquista.numero}
                </div>
                <p className="text-gray-400">{conquista.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de SEO Adicional - Por Que Somos Líderes */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              XCloud IPTV: Líder em IPTV Streaming no Brasil
            </h2>
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Por Que Milhares Escolhem Nossa Plataforma de Streaming
            </h3>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              A XCloud IPTV se consolidou como a principal escolha para quem busca 
              <strong>IPTV streaming confiável no Brasil</strong>. Nossa plataforma oferece 
              <strong>conteúdo variado</strong> com estabilidade superior, atendendo desde 
              assinantes individuais até famílias que valorizam excelência em 
              <strong>streaming ao vivo</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Tecnologia de Ponta em Streaming IPTV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Investimos constantemente em infraestrutura de última geração para garantir 
                  <strong>streaming ao vivo</strong> com estabilidade superior. Nossa arquitetura 
                  entrega disponibilidade confiável para você aproveitar seus conteúdos.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Conteúdo Variado para Toda Família
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Com <strong>conteúdos variados disponíveis</strong>, nossa plataforma 
                  oferece entretenimento completo em um só lugar.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Suporte Técnico Especializado Brasil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nossa equipe técnica brasileira está disponível de segunda a sábado, 
                  oferecendo suporte especializado em português. Entendemos as necessidades 
                  específicas do mercado brasileiro de <strong>streaming IPTV</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Planos Acessíveis para Todo Brasil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Oferecemos <strong>planos IPTV acessíveis</strong> com preços em reais, 
                  incluindo opções mensais, trimestrais, semestrais e anuais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Por Que Escolher a XCloud IPTV?
            </h2>
            <p className="text-gray-400 text-lg">
              Descubra o que nos torna líderes no mercado de IPTV
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {diferenciais.map((diferencial, index) => {
              const Icone = diferencial.icone
              return (
                <Card key={index} className="glass-card border-white/10">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Icone className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white">{diferencial.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {diferencial.descricao}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção SEO - Compromisso com o Brasil */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              XCloud IPTV: Compromisso com o Mercado Brasileiro de IPTV
            </h2>
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Entenda Por Que Somos a Escolha Certa para Streaming no Brasil
            </h3>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Como empresa <strong>brasileira especializada em IPTV streaming</strong>, 
              a XCloud IPTV entende perfeitamente as necessidades do público local. 
              Oferecemos <strong>streaming ao vivo com conteúdo variado</strong>, 
              preços em reais e suporte técnico em português, diferente de 
              concorrentes internacionais que não compreendem nosso mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  IPTV Brasileiro com Conteúdo Local
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Ao contrário de serviços internacionais, a XCloud IPTV oferece 
                  <strong>conteúdo variado adaptado ao público brasileiro</strong>. 
                  Nossa programação inclui canais nacionais, conteúdo regional e 
                  entretenimento que realmente interessa ao público local.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Planos IPTV com Preços em Reais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Todos os nossos <strong>planos IPTV</strong> são cobrados em reais, 
                  sem surpresas com variação cambial. Oferecemos desde planos 
                  mensais a anuais, com economia de até 20% para quem escolhe 
                  assinatura trimestral ou anual.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Pronto para Fazer Parte da Nossa História?
          </h2>
          <h3 className="text-xl font-semibold text-green-400 mb-4">
            Junte-se à Comunidade XCloud IPTV - Líder em IPTV Streaming Brasil
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Milhares de brasileiros já descobriram por que a XCloud IPTV é a 
            <strong>plataforma de IPTV streaming preferida no Brasil</strong>. 
            Com conteúdo variado, estabilidade superior e suporte técnico especializado, 
            oferecemos a melhor experiência em streaming ao vivo. 
            Junte-se a nós e experimente hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link href="/teste-gratis-xcloud-iptv">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Teste Grátis Agora
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/planos-xcloud-iptv">
                Ver Planos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Sobre Nós - XCloud IPTV',
            description: 'Conheça a XCloud IPTV, plataforma de streaming IPTV no Brasil com conteúdo variado e suporte em português.',
            url: 'https://xcloudiptv.com.br/sobre-nos'
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xcloudiptv.com.br/' },
              { '@type': 'ListItem', position: 2, name: 'Sobre Nós', item: 'https://xcloudiptv.com.br/sobre-nos' }
            ]
          })
        }}
      />

      {/* FAQ SEO Otimizado */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Perguntas Frequentes sobre a XCloud IPTV
            </h2>
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Tire Suas Dúvidas sobre Nossa Plataforma de IPTV Streaming
            </h3>
          </div>

          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  A XCloud IPTV é uma empresa brasileira de IPTV streaming?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Sim! A XCloud IPTV é uma empresa especializada em <strong>IPTV streaming no Brasil</strong>, 
                  com foco em oferecer conteúdo variado adaptado ao público brasileiro. 
                  Nossa equipe técnica e de suporte é 100% brasileira, entendendo perfeitamente 
                  as necessidades do mercado local.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  Por que escolher a XCloud IPTV para streaming IPTV?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A XCloud IPTV se destaca no mercado de <strong>streaming IPTV brasileiro</strong> por oferecer 
                  <strong>conteúdo variado</strong>, estabilidade superior com 99.9% de uptime, 
                  suporte técnico especializado em português e planos acessíveis a partir de R$ 30/mês.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  Quantos conteúdos a XCloud IPTV oferece em seu IPTV?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nossa plataforma de <strong>IPTV streaming</strong> oferece mais de 
                  <strong>100 mil conteúdos</strong>, incluindo filmes, séries, canais ao vivo, 
                  esportes e programação infantil. Tudo organizado e atualizado constantemente 
                  para garantir a melhor experiência de streaming.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  Como é o suporte técnico da XCloud IPTV no Brasil?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Oferecemos <strong>suporte técnico especializado em português</strong>, 
                  disponível de segunda a sábado das 9h às 22h. Nossa equipe brasileira 
                  entende as particularidades do mercado local e oferece assistência 
                  personalizada para garantir sua satisfação total.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ainda tem dúvidas sobre nossa plataforma de IPTV streaming?
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contato">
                Entrar em Contato
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'A XCloud IPTV é uma empresa brasileira de IPTV streaming?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim! A XCloud IPTV é uma empresa especializada em IPTV streaming no Brasil, com foco em oferecer conteúdo variado adaptado ao público brasileiro.'
                }
              },
              {
                '@type': 'Question',
                name: 'Por que escolher a XCloud IPTV para streaming IPTV?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A XcloudTV se destaca no mercado de streaming IPTV brasileiro por oferecer conteúdo variado, estabilidade superior com 99.9% de uptime, suporte técnico especializado em português e planos acessíveis.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quantos conteúdos a XCloud IPTV oferece em seu IPTV?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nossa plataforma de IPTV streaming oferece mais de 100 mil conteúdos, incluindo filmes, séries, canais ao vivo, esportes e programação infantil.'
                }
              },
              {
                '@type': 'Question',
                name: 'Como é o suporte técnico da XCloud IPTV no Brasil?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oferecemos suporte técnico especializado em português, disponível de segunda a sábado das 9h às 22h. Nossa equipe brasileira entende as particularidades do mercado local.'
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
