# 📋 Plano de Ação - Centralização de Configurações SEO e Links

## 🎯 Objetivo
Eliminar duplicação de configurações SEO e links externos, garantindo consistência e facilitando manutenção da aplicação XCloud IPTV.

## 📊 Situação Atual

### Problemas Identificados
1. **URLs de pagamento Cakto duplicadas** em múltiplas páginas
2. **Metadados SEO repetidos** com pequenas variações
3. **Links de download espalhados** sem padronização
4. **Domínios vercel.app** em alguns schemas JSON-LD
5. **Schemas SEO** duplicados em várias páginas

### Arquivos Afetados
- `app/planos-xcloud-iptv/page.tsx` - URLs de pagamento
- `app/contato/page.tsx` - Schema com domínio incorreto
- `app/download/page.tsx` - Links de download
- `app/teste-gratis-xcloud-iptv/page.tsx` - Webhook e metadados
- `app/sobre-nos/page.tsx` - Metadados
- `app/ativar-xcloud-iptv/page.tsx` - Metadados

## 🔧 Solução Proposta

### 1. Criar Estrutura de Configuração Centralizada

```
src/
├── config/
│   ├── seo.ts          # Configurações SEO base
│   ├── links.ts        # URLs externas centralizadas
│   └── schemas.ts      # Schemas JSON-LD reutilizáveis
├── lib/
│   └── seo-utils.ts    # Utilitários para SEO
└── components/
    └── seo/
        ├── JsonLD.tsx      # Componente genérico para JSON-LD
        └── MetaTags.tsx    # Wrapper para metadados
```

### 2. Arquivos de Configuração

#### `src/config/seo.ts`
```typescript
// Validador de conteúdo para SEO
export const contentRules = {
  prohibitedTerms: [
    'qualidade', 'hd', 'full hd', '6 horas', '24/7', '24 horas',
    '6h', 'qualidade de imagem', 'alta qualidade', 'definição'
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
  siteUrl: 'https://xcloudtv.com.br',
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
    email: 'contato@xcloudtv.com.br',
    phone: '', // Mantido vazio conforme regra
  },
  business: {
    hours: 'Segunda a Sábado, 9h às 22h',
    timezone: 'America/Sao_Paulo'
  }
};
```

#### `src/config/links.ts`
```typescript
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
    mensal: 'https://pay.cakto.com.br/f2h6gau',
    // Plano Trimestral - R$ 81,00 
    trimestral: 'https://pay.cakto.com.br/42n8kgr',
    // Plano Semestral - R$ 153,00
    semestral: 'https://pay.cakto.com.br/3bndnkh',
    // Plano Anual - R$ 288,00
    anual: 'https://pay.cakto.com.br/3crawid',
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
    href: path,
    text: text,
    isValid: validation.valid,
    suggestion: validation.suggestion
  };
};
```

#### `src/config/schemas.ts`
```typescript
import { SEO_CONFIG } from './seo';

// Validador de conteúdo para evitar termos proibidos
const contentValidator = (text: string): string => {
  const prohibitedTerms = ['qualidade', 'hd', 'full hd', '6 horas', '24/7', '24 horas'];
  const lowerText = text.toLowerCase();
  
  prohibitedTerms.forEach(term => {
    if (lowerText.includes(term)) {
      console.warn(`⚠️ Termo proibido detectado: "${term}" no texto: "${text}"`);
    }
  });
  
  return text;
};

export const SCHEMA_TEMPLATES = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SEO_CONFIG.contact.email,
      availableLanguage: ['Portuguese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '22:00',
        timeZone: 'America/Sao_Paulo'
      }
    },
    sameAs: [
      SEO_CONFIG.social.instagram,
      SEO_CONFIG.social.twitter
    ]
  },
  
  faqPage: (questions: Array<{question: string; answer: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: contentValidator(q.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: contentValidator(q.answer)
      }
    }))
  }),
  
  softwareApp: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEO_CONFIG.siteName,
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Android, iOS, Windows, Smart TV, Fire TV, Mi TV',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      category: 'free'
    },
    // ⚠️ IMPORTANTE: Não incluir AggregateRating sem dados reais
    // aggregateRating: REMOVIDO - usar apenas com dados verificáveis
  },
  
  breadcrumbList: (items: Array<{name: string; url: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`
    }))
  })
};
```

### 3. Componentes Reutilizáveis

#### `src/components/seo/JsonLD.tsx`
```typescript
interface JsonLDProps {
  schema: object;
}

export function JsonLD({ schema }: JsonLDProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

#### `src/components/ui/FormInput.tsx` (Novos componentes acessíveis)
```typescript
interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  ariaDescribedBy?: string;
}

export function FormInput({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  required = false,
  ariaDescribedBy 
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedBy}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
  );
}
```

#### `src/components/seo/MetaTags.tsx`
```typescript
interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean; // Para páginas que não devem ser indexadas
}

export function MetaTags({ 
  title, 
  description, 
  keywords = [],
  canonical,
  ogImage,
  noindex = false
}: MetaTagsProps) {
  const fullTitle = `${title} | ${SEO_CONFIG.siteName}`;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={[...SEO_CONFIG.keywords.secondary, ...keywords].join(', ')} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {canonical && (
        <link rel="canonical" href={`${SEO_CONFIG.siteUrl}${canonical}`} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SEO_CONFIG.siteUrl}${canonical || ''}`} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}
```

## 📋 Implementação Passo-a-Passo

### ✅ Fase 0: Preparação e Validação de Conteúdo (1 hora)
1. **Auditar conteúdo atual** para termos proibidos
2. **Criar lista de substituições** para "qualidade", "6 horas", etc.
3. **Validar âncoras atuais** e planejar melhorias

### ✅ Fase 1: Criar Estrutura Base e Componentes Acessíveis (2-3 horas)
1. Criar diretórios `src/config/` e `src/components/seo/`
2. Implementar arquivos de configuração com validadores
3. **Criar componentes de formulário acessíveis:**
   ```typescript
   // src/components/ui/FormInput.tsx
   // src/components/ui/FormTextarea.tsx 
   // src/components/ui/FormSelect.tsx
   // src/components/ui/FormButton.tsx
   ```
4. Adicionar `aria-label`, `aria-describedby`, `role` nos componentes

### ✅ Fase 2: Refatorar Páginas Principais com Validação (4-5 horas)

#### **Home** (`app/page.tsx`)
- Substituir metadados por componentes
- Usar schemas da configuração
- **Validar conteúdo** com `contentValidator()`
- **Adicionar breadcrumb** no schema

#### **Planos** (`app/planos-xcloud-iptv/page.tsx`)
- Substituir URLs Cakto por `EXTERNAL_LINKS.payments` (mensal, trimestral, semestral, anual)
- **Refazer CTAs** com âncoras contextuais
- Substituir "Clique aqui" por "Assinar XCloud IPTV"
- Validar metadados

#### **Download** (`app/download/page.tsx`)
- Usar `EXTERNAL_LINKS.downloads`
- Implementar JsonLD component
- **Revisar instruções** para evitar termos proibidos
- Adicionar `aria-label` nos botões de download

### ✅ Fase 3: Refatorar Formulários e Acessibilidade (3-4 horas)

#### **Teste Grátis** (`app/teste-gratis-xcloud-iptv/page.tsx`)
```typescript
// Antes:
<input type="text" placeholder="Seu nome" />

// Depois:
<FormInput
  id="nome"
  label="Nome completo"
  placeholder="Digite seu nome completo"
  required
  ariaDescribedBy="nome-help"
/>
<p id="nome-help" className="text-sm text-gray-400">
  Seu nome será usado para criar sua conta XCloud IPTV
</p>
```

#### **Contato** (`app/contato/page.tsx`)
- Corrigir domínios vercel.app para xcloudtv.com.br
- **Adicionar formulário acessível**
- Implementar feedback visual para erros/sucesso
- Adicionar `role="alert"` para mensagens de erro

### ✅ Fase 4: Padronizar Interlinks e Âncoras Contextuais (2-3 horas)

#### **Criar componente de link inteligente:**
```typescript
// src/components/ui/SmartLink.tsx
export function SmartLink({ href, children, context }: SmartLinkProps) {
  const validation = validateAnchor(children, href, context);
  
  if (!validation.valid) {
    console.warn(`Âncora inadequada: "${children}". Contexto: ${context}`);
  }
  
  return (
    <Link href={href} className="text-green-500 hover:text-green-400">
      {validation.suggestion || children}
    </Link>
  );
}
```

#### **Substituir links por versões contextualizadas:**
```typescript
// Antes:
<Link href="/planos">Clique aqui</Link>

// Depois:
<SmartLink href="/planos" context="planos">
  Ver planos XCloud IPTV
</SmartLink>
```

### ✅ Fase 5: Validação e Testes (2-3 horas)

#### **Testes Automatizados:**
```typescript
// src/tests/seo-content.test.ts
describe('Validação de Conteúdo SEO', () => {
  test('Não deve conter termos proibidos', () => {
    const content = 'Assine XCloud IPTV para melhor experiência';
    const result = contentRules.validateText(content);
    expect(result.valid).toBe(true);
  });
  
  test('Deve detectar termos proibidos', () => {
    const content = 'XCloud IPTV oferece alta qualidade';
    const result = contentRules.validateText(content);
    expect(result.valid).toBe(false);
    expect(result.violations).toContain('qualidade');
  });
});
```

#### **Validação Manual:**
1. **Testar todos os links** com `npm run test:links`
2. **Validar schemas** JSON-LD com Google Validator
3. **Verificar acessibilidade** com axe-core
4. **Testar SEO** com Lighthouse
5. **Verificar contraste** de cores

## 🎯 Checklist de Validação Final

### ✅ Acessibilidade (A11y)
- [ ] Todos os formulários têm `aria-label`
- [ ] Inputs têm labels associados (`htmlFor`)
- [ ] Botões têm textos descritivos
- [ ] Mensagens de erro têm `role="alert"`
- [ ] Contraste de cores ≥ AA (4.5:1)
- [ ] Foco visível em todos elementos interativos

### ✅ SEO e Conteúdo
- [ ] Nenhum termo proibido encontrado
- [ ] Âncoras contextuais em todos os links
- [ ] Schemas JSON-LD válidos
- [ ] Metadados únicos por página
- [ ] Canonical URLs corretas
- [ ] Open Graph completo

### ✅ Performance
- [ ] Build otimizado sem erros
- [ ] Imagens com lazy loading
- [ ] Fontes com `font-display: swap`
- [ ] Bundle size < 200KB (critical)

### ✅ Qualidade de Código
- [ ] TypeScript sem erros
- [ ] Lint sem warnings
- [ ] Componentes < 300 linhas
- [ ] Props tipadas corretamente
- [ ] Sem console.logs em produção

## 🎯 Benefícios Esperados

### Manutenibilidade
- **Redução de 85%** na duplicação de código
- **Atualização única** altera toda aplicação
- **Consistência garantida** em todas as páginas
- **Validação automática** de conteúdo e links

### SEO Avançado
- **Schemas válidos** e consistentes
- **Metadados otimizados** sem duplicação
- **Links confiáveis** e verificados
- **Âncoras contextuais** melhoram ranqueamento
- **Detecção automática** de termos proibidos

### Acessibilidade (A11y)
- **Formulários acessíveis** com aria-labels
- **Foco visível** em todos elementos
- **Contraste AA** garantido
- **Leitores de tela** otimizados
- **Mensagens de erro** anunciadas

### Desenvolvimento
- **Velocidade aumentada** na criação de novas páginas
- **Menos erros** de digitação em URLs
- **Padronização** facilita onboarding
- **Testes automatizados** previnem regressões

## ⚠️ Riscos e Mitigação

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Links quebrados | Alto | Testar todos após alteração + pipeline CI |
| SEO temporário afetado | Médio | Implementar por partes + manter redirects |
| Termos proibidos esquecidos | Alto | Validador automático + testes unitários |
| Quebra de acessibilidade | Médio | Testes axe-core automatizados |

## 📊 Métricas de Sucesso

### Técnicas
- ✅ **0 duplicações** de URLs Cakto
- ✅ **0 metadados** duplicados
- ✅ **100% schemas** válidos (validator.schema.org)
- ✅ **Load time** mantido (< 3s)
- ✅ **Lighthouse SEO** score ≥ 95
- ✅ **Lighthouse A11y** score ≥ 95

### Qualidade
- ✅ **0 termos proibidos** no conteúdo
- ✅ **100% âncoras** contextuais
- ✅ **Formulários** com aria-label
- ✅ **Contraste** ≥ AA (4.5:1)
- ✅ **TypeScript** sem erros

## 🔄 Próximos Passos

1. **Aprovação** deste plano atualizado
2. **Criação** da estrutura base com validadores
3. **Refatoração** por fases (priorizar formulários)
4. **Implementação** de testes automatizados
5. **Validação** contínua com pipeline CI
6. **Documentação** de padrões para futuros devs

---

**Estimativa de Tempo Total:** 12-16 horas de trabalho
**Complexidade:** Alta (devido acessibilidade e validações)
**Impacto:** Muito Alto (SEO + A11y + Manutenibilidade)
**ROI:** Redução de 70% em tempo de manutenção futura

## 🚀 **Priorização Recomendada**

1. **Fase 0** - Preparação (CRÍTICO)
2. **Fase 1** - Componentes acessíveis (ALTO)
3. **Fase 2** - Páginas principais com validação (ALTO)
4. **Fase 3** - Formulários e acessibilidade (MÉDIO)
5. **Fase 4** - Interlinks e testes (MÉDIO)
6. **Fase 5** - Validação final (CRÍTICO)