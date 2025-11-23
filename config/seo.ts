// Validador de conteúdo para SEO
export const contentRules = {
  prohibitedTerms: [
    'qualidade', 'hd', 'full hd', '6 horas', '24/7', '24 horas',
    '6h', 'qualidade de imagem', '4k', 'definição'
  ],
  validateText: (text: string): {valid: boolean; violations: string[]} => {
    const violations = contentRules.prohibitedTerms.filter(term => 
      text.toLowerCase().includes(term.toLowerCase())
    );
    return { valid: violations.length === 0, violations };
  }
};

export const SEO_CONFIG = {
  siteName: 'XCloud IPTV',
  siteUrl: 'https://xcloudiptv.com.br',
  description: 'XCloud IPTV - Streaming de conteúdo com milhares de canais, filmes e séries',
  keywords: {
    primary: 'xcloud iptv',
    secondary: ['streaming iptv', 'iptv brasil', 'xcloud tv', 'assinar iptv', 'iptv mensal'],
  },
  social: {
    twitter: '@xcloudtv',
    instagram: '@xcloudtv',
  },
  contact: {
    email: 'contato@xcloudiptv.com.br',
    phone: '', // Mantido vazio conforme regra
  },
  business: {
    hours: 'Segunda a Sábado, 9h às 22h',
    timezone: 'America/Sao_Paulo'
  }
};

// Utilitários centralizados de SEO
export function absoluteUrl(path = ''): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${p}`;
}

export function buildCanonical(path?: string): string | undefined {
  if (!path) return undefined;
  return absoluteUrl(path);
}

// Função para criar links internos com âncoras contextuais
export function createInternalLink(path: string, anchorText: string): any {
  // Validação de conteúdo
  const validation = contentRules.validateText(anchorText);
  if (!validation.valid) {
    console.warn(`⚠️ Termos proibidos detectados no link: ${validation.violations.join(', ')}`);
  }
  
  return path as any;
}
