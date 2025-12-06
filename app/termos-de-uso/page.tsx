import { Metadata } from 'next';
import Link from 'next/link'
import { MetaTags } from '@/components/seo/MetaTags';
import { JsonLD } from '@/components/seo/JsonLD';
import { SCHEMA_TEMPLATES } from '@/config/schemas';

export const metadata: Metadata = {
  title: 'Termos de Uso - XCloud IPTV | Políticas e Condições de Serviço',
  description: 'Termos de uso e condições de serviço do XCloud IPTV. Políticas de uso, direitos autorais e responsabilidades do usuário.',
  alternates: {
    canonical: 'https://xcloudiptv.com.br/termos-de-uso'
  }
};

export default function TermosDeUso() {
  const pageTitle = 'Termos de Uso - XCloud IPTV | Políticas e Condições de Serviço';
  const pageDescription = 'Termos de uso e condições de serviço do XCloud IPTV. Políticas de uso, direitos autorais e responsabilidades do usuário.';
  const pageKeywords = ['termos de uso XCloud IPTV', 'políticas XCloud IPTV', 'condições de serviço IPTV', 'direitos autorais streaming'];

  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical="https://xcloudiptv.com.br/termos-de-uso"
      />
      
      <JsonLD schema={SCHEMA_TEMPLATES.organization} />
      <JsonLD schema={SCHEMA_TEMPLATES.breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Termos de Uso', url: '/termos-de-uso' }
      ])} />

      <main className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 lg:pb-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Termos de Uso
              <span className="block text-emerald-400">XCloud IPTV</span>
            </h1>
            
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-lg prose-invert max-w-none">
              
              {/* Introdução */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bem-vindo ao XCloud IPTV. Ao acessar e utilizar nossos serviços, você concorda em cumprir estes termos de uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar nosso serviço.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  O XCloud IPTV é uma plataforma de aplicativo que fornece acesso técnico e suporte ao uso do app XcloudTV. Não hospedamos, produzimos ou distribuímos conteúdo de mídia e não controlamos o catálogo disponibilizado por provedores parceiros. O acesso é concedido mediante contratação, com suporte por email.
                </p>
              </section>

              {/* Uso do Serviço */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">2. Uso do Serviço</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Você concorda em usar o XCloud IPTV apenas para fins legais e de acordo com estes termos. Você é responsável por garantir que seu uso esteja em conformidade com todas as leis e regulamentos locais aplicáveis.
                </p>
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-medium text-white mb-2">O que você PODE fazer:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Usar nossos tutoriais e guias para configuração técnica</li>
                    <li>• Acessar informações educativas sobre tecnologia de streaming</li>
                    <li>• Participar de nossa comunidade e fóruns de discussão</li>
                    <li>• Solicitar suporte técnico para questões relacionadas ao serviço</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-red-400 mb-2">O que você NÃO pode fazer:</h3>
                  <ul className="text-red-300 space-y-2">
                    <li>• Transmitir ou distribuir conteúdo protegido por direitos autorais</li>
                    <li>• Usar o serviço para atividades ilegais ou não autorizadas</li>
                    <li>• Compartilhar credenciais ou acessos com terceiros</li>
                    <li>• Modificar, hackear ou interferir no funcionamento do serviço</li>
                  </ul>
                </div>
              </section>

              {/* Direitos Autorais */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">3. Direitos Autorais e Propriedade Intelectual</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Importante:</strong> O XCloud IPTV não hospeda, transmite ou controla conteúdo de mídia. Atuamos apenas como facilitador técnico do aplicativo, com foco em acesso e suporte.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Respeitamos os direitos autorais de terceiros e esperamos que nossos usuários façam o mesmo. É responsabilidade exclusiva do usuário garantir que seu uso de qualquer tecnologia de streaming esteja em conformidade com as leis de direitos autorais locais e internacionais.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-yellow-400 mb-2">Aviso Legal:</h3>
                  <p className="text-yellow-300 leading-relaxed">
                    O conteúdo disponibilizado através de tecnologias de streaming pode estar protegido por direitos autorais. O usuário é responsável por obter todas as licenças e permissões necessárias antes de acessar qualquer conteúdo. O XCloud IPTV não se responsabiliza pelo conteúdo acessado por terceiros.
                  </p>
                </div>
              </section>

              {/* Limitação de Responsabilidade */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">4. Limitação de Responsabilidade</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  O XCloud IPTV fornece informações educativas "no estado em que se encontram" e não oferece garantias de qualquer tipo, expressas ou implícitas. Não nos responsabilizamos por:
                </p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Interrupções ou erros no serviço</li>
                  <li>• Perda de dados ou informações</li>
                  <li>• Danos indiretos, especiais ou consequenciais</li>
                  <li>• Uso indevido do serviço por terceiros</li>
                  <li>• Conteúdo acessado através de tecnologias de terceiros</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  O serviço é fornecido para acesso técnico ao aplicativo e suporte ao usuário.
                </p>
              </section>

              {/* Privacidade */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">5. Privacidade e Proteção de Dados</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Respeitamos sua privacidade e estamos comprometidos com a proteção de seus dados pessoais. Coletamos apenas as informações necessárias para fornecer nossos serviços educacionais e de suporte técnico.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Suas informações pessoais são usadas exclusivamente para:
                </p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Fornecer acesso aos materiais educacionais</li>
                  <li>• Enviar atualizações e informações técnicas</li>
                  <li>• Oferecer suporte ao cliente</li>
                  <li>• Melhorar nossos serviços e conteúdo</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Não compartilhamos suas informações com terceiros sem seu consentimento explícito, exceto quando exigido por lei.
                </p>
              </section>

              {/* Modificações dos Termos */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">6. Modificações dos Termos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. É sua responsabilidade revisar periodicamente estes termos.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Alterações significativas serão notificadas por email quando possível. O uso contínuo do serviço após alterações constitui aceitação dos novos termos.
                </p>
              </section>

              {/* Rescisão */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">7. Rescisão</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Podemos rescindir ou suspender seu acesso ao serviço imediatamente, sem aviso prévio, por violação destes termos ou por qualquer conduta que consideremos prejudicial ao serviço ou a outros usuários.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Você também pode encerrar seu uso do serviço a qualquer momento ao cancelar sua assinatura e deixar de usar nossos serviços.
                </p>
              </section>

              {/* Lei Aplicável */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">8. Lei Aplicável e Jurisdição</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Se você tiver alguma dúvida sobre estes termos, entre em contato conosco através dos canais oficiais de suporte.
                </p>
              </section>

              {/* Contato */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">9. Contato</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Para questões relacionadas a estes termos de uso ou nossos serviços, entre em contato:
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">
                    <strong>Email:</strong> contato@xcloudiptv.com.br
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Horário de atendimento:</strong> Segunda a sábado, 9h às 22h (horário de Brasília)
                  </p>
                </div>
              </section>

              {/* Política de Reembolso */}
              <section className="mb-8" id="politica-de-reembolso">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">10. Política de Reembolso</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Por se tratar de serviço digital com ativação imediata, o reembolso é analisado caso a caso quando houver impossibilidade técnica de acesso não resolvida pelo suporte dentro de um prazo razoável. Para solicitar análise de reembolso, entre em contato por email informando nome, email e data da contratação.
                </p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Pagamentos são processados pela plataforma Cakto</li>
                  <li>• Chargebacks e disputas devem ser formalizados diretamente no meio de pagamento</li>
                  <li>• Solicitações de reembolso são avaliadas mediante evidências técnicas do problema</li>
                  <li>• Não há reembolso por uso indevido, descumprimento dos termos ou mudanças de preferência</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  A XCloud IPTV se compromete com suporte por email em português, de segunda a sábado, visando resolver eventuais dificuldades de acesso.
                </p>
              </section>

              {/* Aceitação Final */}
              <section>
                <div className="bg-emerald-900/20 border border-emerald-700 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4">Aceitação dos Termos</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Ao continuar usando o XCloud IPTV, você confirma que leu, compreendeu e concordou com todos estes termos de uso.
                  </p>
                  <p className="text-emerald-300 font-medium">
                    Obrigado por escolher o XCloud IPTV!
                  </p>
                </div>
              </section>

            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Voltar para Home
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
