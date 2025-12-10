import { Metadata } from 'next'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'

export const metadata: Metadata = {
  title: 'Política de Reembolso - XCloud IPTV | Garantia e Cancelamento',
  description: 'Conheça nossa Política de Reembolso e Cancelamento. Saiba como funciona o Direito de Arrependimento (Art. 49 CDC), prazos para estorno e condições para devolução.',
  keywords: ["política de reembolso", "cancelamento xcloud iptv", "direito de arrependimento", "estorno iptv", "garantia xcloud", "CDC artigo 49"],
  alternates: { canonical: '/politica-de-reembolso' },
  openGraph: {
    title: 'Política de Reembolso - XCloud IPTV | Garantia e Cancelamento',
    description: 'Conheça nossa Política de Reembolso e Cancelamento. Saiba como funciona o Direito de Arrependimento (Art. 49 CDC) e prazos para estorno.',
    url: '/politica-de-reembolso',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Reembolso - XCloud IPTV | Garantia e Cancelamento',
    description: 'Conheça nossa Política de Reembolso e Cancelamento. Saiba como funciona o Direito de Arrependimento (Art. 49 CDC) e prazos para estorno.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'}/xcloud-iptv-social-share.svg`],
  }
}

export default function PoliticaReembolso() {
  return (
    <>
      <JsonLD schema={SCHEMA_TEMPLATES.breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Política de Reembolso', url: '/politica-de-reembolso' }
      ])} />

      <main className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gradient-brand drop-shadow-2xl mb-2">Política de Reembolso</h1>
            <span className="text-emerald-400 font-semibold">Transparência e Respeito ao Consumidor</span>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-2xl">
            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400 hover:prose-a:text-emerald-300">
              
              <section className="mb-10">
                <h2>1. Visão Geral e Compromisso</h2>
                <p>
                  A <strong>XCloud IPTV</strong> preza pela satisfação total de seus clientes e pela transparência em todas as transações comerciais. Nossa Política de Reembolso foi elaborada em total conformidade com o <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, visando esclarecer os direitos e deveres de ambas as partes em relação ao cancelamento de serviços e devolução de valores.
                </p>
                <p>
                  Recomendamos fortemente que todos os usuários leiam atentamente este documento antes de realizar a assinatura de qualquer um de nossos planos. Ao contratar nossos serviços, você declara estar ciente e de acordo com os termos aqui estipulados.
                </p>
              </section>

              <section className="mb-10">
                <h2>2. O Papel do Teste Gratuito</h2>
                <p>
                  Entendemos que a qualidade da conexão e a compatibilidade de dispositivos podem variar. Por isso, oferecemos a todos os interessados um <strong>Teste Gratuito de até 6 horas</strong>.
                </p>
                <p>
                  Este período de teste tem como objetivo principal permitir que você verifique:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A compatibilidade do nosso serviço com o seu dispositivo (Smart TV, Smartphone, TV Box, Computador, etc.);</li>
                  <li>A estabilidade da sua conexão de internet com nossos servidores;</li>
                  <li>A variedade e organização da nossa grade de canais e conteúdo.</li>
                </ul>
                <p>
                  <strong>Sugerimos enfaticamente que utilize o teste gratuito antes de efetivar qualquer pagamento</strong>, minimizando assim a necessidade de cancelamentos posteriores por incompatibilidade técnica.
                </p>
              </section>

              <section className="mb-10">
                <h2>3. Direito de Arrependimento (Art. 49 do CDC)</h2>
                <p>
                  Conforme estabelecido no Artigo 49 do Código de Defesa do Consumidor, o cliente tem o direito de desistir da contratação do serviço no prazo de <strong>7 (sete) dias corridos</strong> a contar da data da assinatura ou do ato de recebimento do acesso, sempre que a contratação ocorrer fora do estabelecimento comercial (como é o caso de compras online).
                </p>
                <p>
                  Se você se arrepender da compra dentro deste prazo, poderá solicitar o reembolso integral do valor pago, sem necessidade de justificativa complexa, embora agradeçamos o feedback para melhoria contínua dos nossos serviços.
                </p>
                <p className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-emerald-500 italic">
                  <strong>Importante:</strong> Para exercer este direito, a solicitação deve ser formalizada dentro do prazo de 7 dias através dos nossos canais oficiais de atendimento. Solicitações feitas após este período estarão sujeitas às regras de cancelamento padrão (sem reembolso proporcional, mantendo-se o acesso até o fim do ciclo).
                </p>
              </section>

              <section className="mb-10">
                <h2>4. Condições para Reembolso e Exceções</h2>
                <p>
                  Após o período de 7 dias do Direito de Arrependimento, o reembolso será avaliado mediante as seguintes condições:
                </p>
                
                <h3 className="text-xl font-bold text-white mt-6 mb-3">4.1. Falhas Técnicas Comprovadas</h3>
                <p>
                  Se o serviço apresentar falhas técnicas persistentes que impeçam a utilização (e que não sejam decorrentes da conexão de internet do cliente ou limitações do dispositivo), e nossa equipe de suporte não conseguir solucionar o problema em um prazo razoável (até 48 horas úteis após o reporte), o cliente poderá solicitar o cancelamento e reembolso proporcional ao período não utilizado.
                </p>

                <h3 className="text-xl font-bold text-white mt-6 mb-3">4.2. Pagamentos em Duplicidade</h3>
                <p>
                  Caso ocorra, por erro sistêmico, uma cobrança duplicada na fatura do cliente, o reembolso do valor excedente será realizado integralmente e com prioridade, assim que identificado e comprovado o erro.
                </p>

                <h3 className="text-xl font-bold text-white mt-6 mb-3">4.3. Situações Não Reembolsáveis</h3>
                <p>
                  Não serão aceitos pedidos de reembolso nas seguintes situações (após o prazo de 7 dias):
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Problemas de Internet do Cliente:</strong> Instabilidade, baixa velocidade ou bloqueios (traffic shaping) por parte da operadora de internet do cliente.</li>
                  <li><strong>Incompatibilidade de Hardware:</strong> Troca de aparelho por parte do cliente para um não compatível após a contratação.</li>
                  <li><strong>Apps de Terceiros:</strong> Valores pagos em licenças de aplicativos reprodutores (como Ibo Player, Duplex Play, etc.) não são de responsabilidade da XCloud IPTV e não são reembolsáveis por nós, pois são pagos diretamente aos desenvolvedores desses softwares.</li>
                  <li><strong>Violação dos Termos de Uso:</strong> Contas banidas por compartilhamento indevido de senha ou retransmissão de sinal não terão direito a reembolso.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>5. Procedimento para Solicitação</h2>
                <p>
                  Para solicitar um reembolso ou cancelamento, siga os passos abaixo para garantir agilidade no seu atendimento:
                </p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Entre em contato exclusivamente através do e-mail: <a href="mailto:contato@xcloudiptv.com.br">contato@xcloudiptv.com.br</a>;</li>
                  <li>No assunto do e-mail, coloque: <strong>"Solicitação de Reembolso - [Seu Nome/Login]"</strong>;</li>
                  <li>No corpo da mensagem, informe:
                    <ul className="list-disc pl-5 mt-2 text-gray-400">
                      <li>Nome completo e CPF utilizado na compra;</li>
                      <li>Data da compra e forma de pagamento;</li>
                      <li>Motivo da solicitação (opcional dentro dos 7 dias, obrigatório após);</li>
                      <li>Comprovante de pagamento (anexo ou print).</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-4">
                  Nossa equipe de suporte analisará sua solicitação e responderá em até <strong>24 horas úteis</strong>.
                </p>
              </section>

              <section className="mb-10">
                <h2>6. Prazos e Formas de Restituição</h2>
                <p>
                  Uma vez aprovado o reembolso, a restituição dos valores ocorrerá da seguinte forma:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cartão de Crédito:</strong> O estorno será solicitado à operadora do cartão e poderá aparecer em até duas faturas subsequentes, dependendo da data de fechamento da sua fatura e das políticas da administradora do cartão.</li>
                  <li><strong>PIX ou Boleto Bancário:</strong> O reembolso será feito via transferência bancária ou PIX para uma conta de mesma titularidade do pagador, em até <strong>5 (cinco) dias úteis</strong> após a confirmação dos dados bancários.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>7. Cancelamento de Renovação Automática</h2>
                <p>
                  Se você possui um plano recorrente e deseja apenas cancelar a renovação automática, sem solicitar reembolso do período já pago, você pode fazer isso a qualquer momento. O serviço continuará ativo até o fim do ciclo já quitado e não haverá novas cobranças.
                </p>
                <p>
                  Para cancelar a renovação, envie um e-mail para <a href="mailto:contato@xcloudiptv.com.br">contato@xcloudiptv.com.br</a> com pelo menos 48 horas de antecedência da data de renovação.
                </p>
              </section>

              <section>
                <h2>8. Contato e Suporte</h2>
                <p>
                  Se restar alguma dúvida sobre nossa Política de Reembolso, nossa equipe está à disposição para esclarecimentos.
                </p>
                <div className="bg-gray-900 p-6 rounded-lg mt-4 border border-gray-700">
                  <p className="mb-2"><strong className="text-emerald-400">E-mail:</strong> <a href="mailto:contato@xcloudiptv.com.br" className="text-white hover:text-emerald-400">contato@xcloudiptv.com.br</a></p>
                  <p className="mb-0"><strong className="text-emerald-400">Horário de Atendimento:</strong> Segunda a Sábado, das 09h às 22h.</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
