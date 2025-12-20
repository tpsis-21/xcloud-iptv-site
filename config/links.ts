import { SEO_CONFIG } from './seo';

// Validador de âncoras contextuais para SEO
export const anchorValidator = (text: string, url: string): {valid: boolean; suggestion?: string} => {
  const contextualKeywords = {
    'planos': ['assinar xcloud iptv', 'planos xcloud iptv', 'preços xcloud'],
    'teste': ['teste grátis xcloud iptv', 'teste iptv xcloud', 'experimentar xcloud'],
    'download': ['download xcloud iptv', 'baixar xcloud iptv', 'instalar xcloud'],
    'contato': ['contato xcloud iptv', 'suporte xcloud', 'falar com xcloud'],
  };
  
  // Sugerir melhorias para âncoras genéricas
  if (text.toLowerCase() === 'clique aqui' || text.toLowerCase() === 'saiba mais') {
    return { 
      valid: false, 
      suggestion: 'Use âncoras contextuais como "assinar xcloud iptv" ou "teste grátis xcloud"' 
    };
  }
  
  return { valid: true };
};

// 🔗 LINKS EXTERNOS OFICIAIS - XCLOUD TV
export const EXTERNAL_LINKS = {
  // 💰 PAGAMENTOS CAKTO - PLANOS OFICIAIS
  payments: {
    // Plano Mensal - R$ 30,00
    mensal: 'https://pay.cakto.com.br/fhwwr6z',
    // Plano Trimestral - R$ 81,00 
    trimestral: 'https://pay.cakto.com.br/uqczowy',
    // Plano Semestral - R$ 153,00
    semestral: 'https://pay.cakto.com.br/3c2ajtg',
    // Plano Anual - R$ 288,00
    anual: 'https://pay.cakto.com.br/zekbw38',
  },
  
  // 📱 DOWNLOADS APLICATIVOS
  downloads: {
    android: 'https://meu.guru/xcloud-apk-mobile',
    ios: 'https://meu.guru/xcloud-ios',
    windows: 'https://meu.guru/xcloud-win',
    smarttv: 'https://meu.guru/xcloud-apktv',
  },
  
  // 🔔 WEBHOOKS
  webhook: {
    testSignup: 'https://webhook.xcloudtv.com.br/teste-gratis',
  },
  
  // 🏠 LINKS INTERNOS PARA VALIDAÇÃO
  internal: {
    home: '/',
    planos: '/planos-xcloud-iptv',
    teste: '/teste-gratis-xcloud-iptv',
    download: '/download',
    contato: '/contato',
    sobre: '/sobre-nos',
    ativar: '/ativar-xcloud-iptv'
  }
};

// 🔍 FUNÇÃO PARA CRIAR LINKS INTERNOS COM VALIDAÇÃO SEO
export const createInternalLink = (path: string, text: string) => {
  const validation = anchorValidator(text, path);
  
  if (!validation.valid && validation.suggestion) {
    console.warn(`⚠️ Âncora pouco contextual: "${text}". Sugestão: ${validation.suggestion}`);
  }
  
  return {
    href: path as any, // Type assertion para Next.js Link
    text: text,
    isValid: validation.valid,
    suggestion: validation.suggestion
  };
};
