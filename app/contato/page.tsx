import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Send,
  User,
  AtSign,
  FileText,
  Zap,
  Star
} from 'lucide-react'
import { CONTACTS } from '@/config/contacts'
import { Particles } from '@/components/particles'

export const metadata: Metadata = {
  title: 'Contato XCloud IPTV Brasil - Suporte IPTV Streaming | Email',
  description:
    'Entre em contato com a XCloud IPTV Brasil. Suporte técnico de segunda a sábado, 9h às 22h. Tire suas dúvidas sobre XCloud IPTV streaming. Atendimento rápido e eficiente.',
  keywords: 'contato xcloudtv brasil, suporte xcloud iptv, email xcloudtv, atendimento xcloudtv',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato XCloud IPTV Brasil - Suporte IPTV Streaming | Email',
    description: 'Entre em contato com a XCloud IPTV Brasil. Suporte técnico de segunda a sábado, 9h às 22h. Tire suas dúvidas sobre XCloud IPTV streaming.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato - XCloud IPTV | Suporte por Email',
    description: 'Entre em contato com a XCloud IPTV. Suporte por email.'
  }
}

const canaisSuporte = [
  {
    icone: Mail,
    titulo: 'Email',
    descricao: CONTACTS.email,
    subtitulo: 'Resposta via email',
    acao: 'Enviar Mensagem',
    link: '#formulario-contato'
  },
  {
    icone: Clock,
    titulo: 'Horário de Atendimento',
    descricao: 'Segunda a Sábado',
    subtitulo: '9h às 22h, incluindo feriados',
    acao: 'Ver Horários',
    link: '#canais-atendimento'
  }
]

const perguntasFrequentes = [
  {
    pergunta: 'Qual é o prazo de resposta do suporte?',
    resposta: 'Respondemos todos os emails rapidamente durante nosso horário de atendimento (9h às 22h, segunda a sábado).'
  },
  {
    pergunta: 'Preciso ser cliente para receber suporte?',
    resposta: 'Não! Oferecemos suporte pré-venda para tirar todas suas dúvidas antes de contratar nossos serviços.'
  },
  {
    pergunta: 'Como funciona o suporte para clientes?',
    resposta: 'Clientes ativos recebem acesso prioritário ao nosso suporte via email com resposta ainda mais rápida.'
  },
  {
    pergunta: 'Como faço para testar o serviço?',
    resposta: 'Acesse nossa página de teste grátis em /teste-gratis e preencha o formulário. Você receberá as credenciais instantaneamente.'
  }
]

export default function ContatoPage() {
  return (
    <div className="relative min-h-screen">
      <Particles />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Sutil */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 via-transparent to-green-900/5"></div>
          <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green-400/6 rounded-full blur-md"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 glass-premium rounded-full px-6 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Fale Conosco</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-brand">
            Contato XCloud IPTV
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato com nossa equipe de suporte 
            através dos canais disponíveis. Atendimento rápido, eficiente e humano.
          </p>
        </div>
      </section>

      {/* Canais de Suporte */}
      <section id="canais-atendimento" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Canais de Atendimento
            </h2>
            <p className="text-gray-400 text-lg">
              Escolha o canal que melhor atende sua necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {canaisSuporte.map((canal, index) => {
              const Icone = canal.icone
              return (
                <Card key={index} className="glass-card border-white/10">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Icone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{canal.titulo}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {canal.subtitulo}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 font-medium">{canal.descricao}</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <a href={canal.link} aria-label={canal.acao}>
                        <Send className="mr-2 h-4 w-4" />
                        {canal.acao}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="formulario-contato" className="py-20 px-4 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Envie sua Mensagem
            </h2>
            <p className="text-gray-400 text-lg">
              Preencha o formulário e responderemos o mais rápido possível
            </p>
          </div>

          <Card className="glass-card border-white/10 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-center">Formulário de Contato</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Preencha todos os campos obrigatórios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-gray-300">
                    <User className="inline mr-2 h-4 w-4" />
                    Nome Completo *
                  </Label>
                  <Input 
                    id="nome" 
                    placeholder="Seu nome completo" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    <AtSign className="inline mr-2 h-4 w-4" />
                    Email *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="assunto" className="text-gray-300">
                    <FileText className="inline mr-2 h-4 w-4" />
                    Assunto *
                  </Label>
                  <select 
                    id="assunto" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvidas sobre planos</option>
                    <option value="teste">Solicitar teste grátis</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="pagamento">Dúvidas sobre pagamento</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-gray-300">
                    <FileText className="inline mr-2 h-4 w-4" />
                    Mensagem *
                  </Label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Descreva sua dúvida ou solicitação..." 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 min-h-[120px]"
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="termos"
                    name="termos"
                    required
                    className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-700 rounded bg-gray-800"
                  />
                  <Label htmlFor="termos" className="text-sm text-gray-400">
                    Concordo com os termos de uso e política de privacidade
                  </Label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-500">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-400 text-lg">
              Confira as respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {perguntasFrequentes.map((faq, index) => (
              <Card key={index} className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.pergunta}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {faq.resposta}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ainda com Dúvidas?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experimente nosso teste grátis e conheça o conteúdo variado da XCloud IPTV. 
            Sem compromisso e sem necessidade de cartão de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg"
              asChild
            >
              <Link href="/teste-gratis-xcloud-iptv#formulario-teste">
                <Star className="mr-2 h-5 w-5" />
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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'XCloud IPTV Brasil',
            description: 'XCloud IPTV - IPTV Streaming com conteúdo variado no Brasil',
            url: 'https://xcloudiptv.com.br',
            email: CONTACTS.email,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'BR',
              addressRegion: 'Brasil',
              addressLocality: 'Brasil'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: CONTACTS.email,
              availableLanguage: ['Portuguese'],
              hoursAvailable: 'Mo-Sa 09:00-22:00'
            },
            areaServed: {
              '@type': 'Country',
              name: 'Brasil'
            },
            knowsAbout: ['IPTV Streaming', 'Streaming de TV', 'Entretenimento Digital'],
            sameAs: [
              'https://xcloudiptv.com.br'
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contato - XCloud IPTV',
            description: 'Entre em contato com a XCloud IPTV. Suporte por email e chat web.',
            url: 'https://xcloudiptv.com.br/contato'
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
              { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://xcloudiptv.com.br/contato' }
            ]
          })
        }}
      />
    </div>
  )
}
