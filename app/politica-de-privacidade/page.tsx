import { Metadata } from 'next'
import { MetaTags } from '@/components/seo/MetaTags'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'

export const metadata: Metadata = {
  title: 'Política de Privacidade - XCloud IPTV',
  description: 'Como coletamos, usamos e protegemos seus dados na XCloud IPTV.',
  alternates: { canonical: 'https://xcloudiptv.com.br/politica-de-privacidade' }
}

export default function PoliticaPrivacidade() {
  return (
    <>
      <MetaTags 
        title="Política de Privacidade - XCloud IPTV"
        description="Como coletamos, usamos e protegemos seus dados na XCloud IPTV."
        keywords={["política de privacidade", "privacidade xcloud iptv", "dados pessoais iptv"]}
        canonical="https://xcloudiptv.com.br/politica-de-privacidade"
      />
      <JsonLD schema={SCHEMA_TEMPLATES.breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Política de Privacidade', url: '/politica-de-privacidade' }
      ])} />

      <main className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-2">Política de Privacidade</h1>
            <span className="text-emerald-400 font-semibold">XCloud IPTV</span>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-lg prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Coleta de Dados</h2>
                <p className="text-gray-300">Coletamos nome, email e telefone apenas para gerar o teste, prover suporte e comunicações operacionais relacionadas ao uso do aplicativo XcloudTV.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Uso de Dados</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>• Envio de credenciais e instruções por email</li>
                  <li>• Suporte ao cliente em horário de atendimento</li>
                  <li>• Melhorias de produto e prevenção a fraude</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Compartilhamento</h2>
                <p className="text-gray-300">Não compartilhamos dados com terceiros fora de provedores estritamente necessários para processamento e suporte, conforme exigido por lei.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Segurança</h2>
                <p className="text-gray-300">Mantemos medidas técnicas e administrativas para proteger seus dados. Você pode solicitar exclusão pelo email contato@xcloudiptv.com.br.</p>
              </section>
              <section className="mb-2">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Contato</h2>
                <p className="text-gray-300">Email: contato@xcloudiptv.com.br • Atendimento: Segunda a sábado, 9h às 22h.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
