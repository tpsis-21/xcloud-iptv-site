import { validatePageContent, generateValidationReport } from '../lib/validation';
import { createInternalLink } from '../config/seo';

/**
 * Script de validação de conteúdo para todas as páginas
 * Executa validações de conteúdo e âncoras contextuais
 */

interface PageContent {
  title: string;
  description: string;
  headings: string[];
  paragraphs: string[];
  links: Array<{href: string; anchor: string}>;
}

// Conteúdo das páginas para validação
const pages: Record<string, PageContent> = {
  home: {
    title: 'XCloud IPTV | Streaming Completo no Brasil – Planos desde R$ 30',
    description: 'XCloud IPTV: streaming completo com conteúdos variados e ativação imediata. Assine planos acessíveis e teste a xcloud iptv sem complicações. Suporte em português (9h–22h).',
    headings: [
      'XCloud IPTV',
      'Por Que Escolher a XCloud IPTV no Brasil',
      'Streaming Completo XCloud IPTV com Ativação Imediata',
      'Planos Acessíveis XCloud IPTV',
      'Ativação Imediata XCloud IPTV',
      'Compatibilidade Total XCloud IPTV'
    ],
    paragraphs: [
      'XCloud IPTV: streaming completo com canais, filmes, séries e muito mais e que cabe no seu bolso. A partir de R$ 30/mês.',
      'Até 70% mais barato que TV a cabo',
      'Instalação imediata em 5 minutos',
      'Funciona em todos os dispositivos'
    ],
    links: [
      { href: createInternalLink('/planos-xcloud-iptv', 'Planos XCloud IPTV'), anchor: 'Ver Planos XCloud' },
      { href: createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV'), anchor: 'Teste Grátis' },
      { href: createInternalLink('/download', 'Download XCloud IPTV'), anchor: 'Ver Guia Completo de Instalação' }
    ]
  },
  planos: {
    title: 'Planos XCloud IPTV | Assine Sua Assinatura de Streaming',
    description: 'Planos XCloud IPTV: assinatura mensal R$ 30, trimestral R$ 81, semestral R$ 153, anual R$ 288. Streaming completo com conteúdo variado. Ativação imediata.',
    headings: [
      'Planos de Assinatura',
      'Plano Mensal',
      'Plano Trimestral',
      'Plano Semestral',
      'Plano Anual'
    ],
    paragraphs: [
      'Escolha o plano perfeito para sua experiência de streaming',
      'Assinatura mensal ideal para testar nosso serviço',
      'Plano mais popular - Economize 10%',
      'Economize 15% com assinatura semestral',
      'Maior economia - 20% de desconto anual'
    ],
    links: [
      { href: 'https://pay.cakto.com.br/f2h6gau', anchor: 'Assinar Agora' },
      { href: 'https://pay.cakto.com.br/42n8kgr', anchor: 'Assinar Agora' },
      { href: createInternalLink('/teste-gratis-xcloud-iptv', 'Teste Grátis XCloud IPTV'), anchor: 'teste grátis' }
    ]
  }
};

/**
 * Executa validação de todas as páginas
 */
export function runValidation(): void {
  console.log('🚀 Iniciando validação de conteúdo de todas as páginas...\n');
  
  Object.entries(pages).forEach(([pageName, content]) => {
    console.log(`📄 Validando página: ${pageName.toUpperCase()}`);
    
    const validation = validatePageContent(content);
    const report = generateValidationReport(validation);
    
    console.log(report);
    console.log('\n' + '='.repeat(60) + '\n');
  });
  
  console.log('✅ Validação concluída!');
}

/**
 * Executa validação de uma página específica
 */
export function validateSinglePage(pageName: keyof typeof pages): void {
  if (!pages[pageName]) {
    console.error(`❌ Página "${pageName}" não encontrada`);
    console.log(`📋 Páginas disponíveis: ${Object.keys(pages).join(', ')}`);
    return;
  }
  
  console.log(`📄 Validando página: ${pageName.toUpperCase()}`);
  
  const content = pages[pageName];
  const validation = validatePageContent(content);
  const report = generateValidationReport(validation);
  
  console.log(report);
}

// Executar validação se chamado diretamente
runValidation();