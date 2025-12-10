import { Metadata } from 'next'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'

export const metadata: Metadata = {
  title: 'Política de Privacidade - XCloud IPTV | Proteção de Dados e LGPD',
  description: 'Política de Privacidade completa da XCloud IPTV. Saiba como coletamos, armazenamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  keywords: ["política de privacidade", "privacidade xcloud iptv", "LGPD iptv", "proteção de dados", "segurança xcloud"],
  alternates: { canonical: '/politica-de-privacidade' },
  openGraph: {
    title: 'Política de Privacidade - XCloud IPTV | Proteção de Dados',
    description: 'Saiba como a XCloud IPTV protege seus dados e privacidade.',
    url: '/politica-de-privacidade',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidade - XCloud IPTV | Proteção de Dados',
    description: 'Saiba como a XCloud IPTV protege seus dados e privacidade.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
  }
}

export default function PoliticaPrivacidade() {
  return (
    <>
      <JsonLD schema={SCHEMA_TEMPLATES.breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Política de Privacidade', url: '/politica-de-privacidade' }
      ])} />

      <main className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-2">Política de Privacidade</h1>
            <span className="text-emerald-400 font-semibold text-lg">Última atualização: 10 de Dezembro de 2025</span>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-2xl">
            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400 hover:prose-a:text-emerald-300">
              
              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">1. Introdução</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A <strong>XCloud IPTV</strong> valoriza profundamente a sua privacidade e o compromisso com a proteção dos seus dados pessoais. Esta Política de Privacidade descreve de forma transparente como coletamos, usamos, armazenamos e compartilhamos suas informações ao utilizar nosso site, aplicativos e serviços.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nossas práticas estão alinhadas com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras regulamentações aplicáveis, garantindo que você tenha total controle e entendimento sobre o tratamento de suas informações.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">2. Dados que Coletamos</h2>
                <p className="text-gray-300 mb-4">Coletamos apenas as informações estritamente necessárias para a prestação adequada dos nossos serviços:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-3">
                  <li><strong>Dados de Identificação:</strong> Nome completo, endereço de e-mail e número de telefone (WhatsApp). Estes dados são essenciais para a criação de contas de teste, assinaturas e comunicação de suporte.</li>
                  <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de dispositivo, sistema operacional, navegador e logs de acesso. Essas informações são coletadas automaticamente para fins de segurança, prevenção de fraudes e melhoria da experiência do usuário.</li>
                  <li><strong>Dados de Pagamento:</strong> Não armazenamos dados completos de cartão de crédito. As transações são processadas por gateways de pagamento seguros e certificados (Cakto), que nos fornecem apenas a confirmação da transação.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">3. Finalidade do Uso dos Dados</h2>
                <p className="text-gray-300 mb-4">Utilizamos seus dados para as seguintes finalidades legítimas:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-bold text-white mb-3">Prestação de Serviços</h3>
                    <p className="text-sm text-gray-300">Liberar acesso ao teste grátis, ativar assinaturas, renovar planos e fornecer suporte técnico personalizado.</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-bold text-white mb-3">Comunicação</h3>
                    <p className="text-sm text-gray-300">Enviar credenciais de acesso, tutoriais de instalação, avisos de manutenção e atualizações importantes sobre o serviço.</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-bold text-white mb-3">Segurança</h3>
                    <p className="text-sm text-gray-300">Monitorar atividades suspeitas, prevenir acessos não autorizados e proteger a integridade da nossa infraestrutura.</p>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-bold text-white mb-3">Melhoria Contínua</h3>
                    <p className="text-sm text-gray-300">Analisar tendências de uso para otimizar a qualidade do streaming e a usabilidade do aplicativo.</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">4. Compartilhamento de Dados</h2>
                <p className="text-gray-300 leading-relaxed">
                  A XCloud IPTV <strong>não vende, aluga ou comercializa</strong> seus dados pessoais com terceiros. O compartilhamento ocorre apenas nas seguintes situações restritas:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Com processadores de pagamento (para efetivar transações).</li>
                  <li>Com fornecedores de infraestrutura de servidor (para garantir a entrega do streaming).</li>
                  <li>Quando exigido por lei ou ordem judicial competente.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">5. Armazenamento e Segurança</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Adotamos rigorosas medidas de segurança técnica e administrativa para proteger seus dados contra acessos não autorizados, perdas ou alterações. Utilizamos criptografia (SSL/TLS) em todas as comunicações do site e armazenamos dados em servidores protegidos com controle de acesso restrito.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Seus dados são mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais ou de prestação de contas.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">6. Seus Direitos (LGPD)</h2>
                <p className="text-gray-300 mb-4">Como titular dos dados, você possui os seguintes direitos garantidos pela LGPD:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e solicitar uma cópia deles.</li>
                  <li><strong>Correção:</strong> Solicitar a atualização de dados incorretos, incompletos ou desatualizados.</li>
                  <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a exclusão de dados desnecessários ou tratados em desconformidade.</li>
                  <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento para o tratamento de dados a qualquer momento.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@xcloudiptv.com.br" className="text-emerald-400 hover:text-emerald-300 underline">contato@xcloudiptv.com.br</a>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">7. Cookies e Tecnologias de Rastreamento</h2>
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos cookies essenciais para o funcionamento do site (como manter sua sessão ativa) e cookies analíticos para entender como os visitantes interagem com nosso conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade de algumas partes do site.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">8. Alterações nesta Política</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossos serviços ou na legislação. Recomendamos que você revise esta página regularmente. A data da última atualização estará sempre visível no topo deste documento.
                </p>
              </section>

              <section className="bg-emerald-900/20 border border-emerald-500/30 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">Dúvidas? Entre em contato</h2>
                <p className="text-gray-300 mb-6">
                  Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, nossa equipe de Proteção de Dados está à disposição.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Email:</span>
                    <a href="mailto:contato@xcloudiptv.com.br" className="text-emerald-400 hover:text-emerald-300 underline">contato@xcloudiptv.com.br</a>
                  </div>
                  <div className="hidden sm:block text-gray-600">|</div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Horário:</span>
                    <span>Segunda a Sábado, 09h às 22h</span>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
