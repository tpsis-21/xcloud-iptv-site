import { Metadata } from 'next'
import { MetaTags } from '@/components/seo/MetaTags'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'

export const metadata: Metadata = {
  title: 'Política de Reembolso - XCloud IPTV',
  description: 'Regras de reembolso e cancelamento de assinatura na XCloud IPTV.',
  alternates: { canonical: 'https://xcloudiptv.com.br/politica-de-reembolso' }
}

export default function PoliticaReembolso() {
  return (
    <>
      <MetaTags 
        title="Política de Reembolso - XCloud IPTV"
        description="Regras de reembolso e cancelamento de assinatura na XCloud IPTV."
        keywords={["política de reembolso", "cancelamento xcloud iptv", "reembolso iptv"]}
        canonical="https://xcloudiptv.com.br/politica-de-reembolso"
      />
      <JsonLD schema={SCHEMA_TEMPLATES.breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Política de Reembolso', url: '/politica-de-reembolso' }
      ])} />

      <main className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">Política de Reembolso</h1>
            <span className="text-emerald-400 font-semibold">XCloud IPTV</span>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-lg prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Assinaturas e Acesso</h2>
                <p className="text-gray-300">O acesso ao aplicativo é liberado após confirmação de pagamento. Por se tratar de serviço digital com ativação imediata, não oferecemos reembolso por uso parcial.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Exceções</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cobrança duplicada comprovada</li>
                  <li>• Falha técnica de ativação não resolvida em até 24h após contato</li>
                </ul>
                <p className="text-gray-400 mt-2">Casos são analisados individualmente pelo suporte.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Cancelamento</h2>
                <p className="text-gray-300">Você pode cancelar a renovação a qualquer momento; o acesso permanece até o fim do período vigente.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Contato</h2>
                <p className="text-gray-300">Solicitações devem ser feitas por email: contato@xcloudiptv.com.br. Atendimento de segunda a sábado, 9h às 22h.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}