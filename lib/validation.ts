import { contentRules } from '@/config/seo';

export interface ValidationResult {
  valid: boolean;
  violations: string[];
  suggestions: string[];
}

export interface LinkValidationResult {
  valid: boolean;
  issues: string[];
  suggestions: string[];
}

/**
 * Valida texto contra termos proibidos e fornece sugestões
 */
export function validateContent(text: string, context: string = 'geral'): ValidationResult {
  const result = contentRules.validateText(text);
  const suggestions: string[] = [];
  
  if (!result.valid) {
    // Adicionar sugestões específicas para cada violação
    result.violations.forEach(violation => {
      switch (violation.toLowerCase()) {
        case 'qualidade':
          suggestions.push('Use "4k" ou "conteúdo variado" em vez de "qualidade"');
          break;
        case 'hd':
        case 'full hd':
          suggestions.push('Use "conteúdo variado" ou "streaming completo" em vez de "HD"');
          break;
        case '6 horas':
        case '6h':
          suggestions.push('Evite mencionar duração específica do teste');
          break;
        case '24/7':
        case '24 horas':
          suggestions.push('Use "suporte especializado" ou "atendimento completo" em vez de "24/7"');
          break;
        case '4k':
          suggestions.push('Use "conteúdo variado" ou "streaming completo" em vez de "4k"');
          break;
        case 'definição':
          suggestions.push('Use "conteúdo variado" ou "streaming completo" em vez de "definição"');
          break;
        default:
          suggestions.push(`Revise o uso de "${violation}" no contexto`);
      }
    });
  }
  
  return {
    valid: result.valid,
    violations: result.violations,
    suggestions
  };
}

/**
 * Valida se uma âncora de link é contextual e relevante
 */
export function validateAnchorText(anchorText: string, href: string): LinkValidationResult {
  const issues: string[] = [];
  const suggestions: string[] = [];
  
  // Verificar se a âncora é genérica
  const genericAnchors = ['clique aqui', 'saiba mais', 'veja aqui', 'link', 'aqui'];
  const isGeneric = genericAnchors.some(generic => 
    anchorText.toLowerCase().includes(generic)
  );
  
  if (isGeneric) {
    issues.push('Âncora genérica detectada');
    suggestions.push('Use uma âncora descritiva que inclua palavras-chave relevantes');
  }
  
  // Verificar se a âncora contém palavras-chave relevantes
  const keywords = ['xcloud', 'iptv', 'streaming', 'plano', 'teste', 'download', 'instalação'];
  const hasRelevantKeyword = keywords.some(keyword => 
    anchorText.toLowerCase().includes(keyword)
  );
  
  if (!hasRelevantKeyword && anchorText.length > 10) {
    suggestions.push('Considere incluir "XCloud" ou "IPTV" na âncora para melhor SEO');
  }
  
  // Verificar comprimento da âncora
  if (anchorText.length < 3) {
    issues.push('Âncora muito curta');
    suggestions.push('Use uma âncora com pelo menos 3 palavras descritivas');
  }
  
  if (anchorText.length > 60) {
    issues.push('Âncora muito longa');
    suggestions.push('Mantenha a âncora concisa, idealmente entre 3-8 palavras');
  }
  
  // Verificar se a âncora descreve o destino
  const pathKeywords = {
    '/planos': ['plano', 'preço', 'valor', 'assinatura'],
    '/teste-gratis': ['teste', 'grátis', 'experimentar', 'avaliação'],
    '/download': ['download', 'instalar', 'aplicativo', 'guia'],
    '/contato': ['contato', 'suporte', 'ajuda', 'atendimento'],
    '/sobre': ['sobre', 'empresa', 'informação']
  };
  
  const relevantPathKeywords = Object.entries(pathKeywords).find(([path]) => 
    href.includes(path)
  );
  
  if (relevantPathKeywords) {
    const [, expectedKeywords] = relevantPathKeywords;
    const hasExpectedKeyword = expectedKeywords.some(keyword => 
      anchorText.toLowerCase().includes(keyword)
    );
    
    if (!hasExpectedKeyword) {
      suggestions.push(`Considere incluir uma destas palavras na âncora: ${expectedKeywords.join(', ')}`);
    }
  }
  
  return {
    valid: issues.length === 0,
    issues,
    suggestions
  };
}

/**
 * Validação completa de conteúdo de página
 */
export function validatePageContent(content: {
  title: string;
  description: string;
  headings: string[];
  paragraphs: string[];
  links: Array<{href: string; anchor: string}>;
}): {
  contentValid: boolean;
  linksValid: boolean;
  issues: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const recommendations: string[] = [];
  
  // Validar título
  const titleValidation = validateContent(content.title, 'título da página');
  if (!titleValidation.valid) {
    issues.push(`Título: ${titleValidation.violations.join(', ')}`);
    recommendations.push(...titleValidation.suggestions);
  }
  
  // Validar descrição
  const descValidation = validateContent(content.description, 'descrição da página');
  if (!descValidation.valid) {
    issues.push(`Descrição: ${descValidation.violations.join(', ')}`);
    recommendations.push(...descValidation.suggestions);
  }
  
  // Validar headings
  content.headings.forEach((heading, index) => {
    const headingValidation = validateContent(heading, `heading H${index + 1}`);
    if (!headingValidation.valid) {
      issues.push(`Heading ${index + 1}: ${headingValidation.violations.join(', ')}`);
      recommendations.push(...headingValidation.suggestions);
    }
  });
  
  // Validar parágrafos
  content.paragraphs.forEach((paragraph, index) => {
    const paraValidation = validateContent(paragraph, `parágrafo ${index + 1}`);
    if (!paraValidation.valid) {
      issues.push(`Parágrafo ${index + 1}: ${paraValidation.violations.join(', ')}`);
      recommendations.push(...paraValidation.suggestions);
    }
  });
  
  // Validar links
  let linksValid = true;
  content.links.forEach((link, index) => {
    const linkValidation = validateAnchorText(link.anchor, link.href);
    if (!linkValidation.valid) {
      linksValid = false;
      issues.push(`Link ${index + 1} (${link.href}): ${linkValidation.issues.join(', ')}`);
      recommendations.push(...linkValidation.suggestions);
    }
  });
  
  return {
    contentValid: issues.filter(issue => !issue.startsWith('Link')).length === 0,
    linksValid,
    issues: [...new Set(issues)], // Remover duplicatas
    recommendations: [...new Set(recommendations)]
  };
}

/**
 * Gera relatório de validação formatado
 */
export function generateValidationReport(validation: ReturnType<typeof validatePageContent>): string {
  const lines: string[] = [];
  
  lines.push('# Relatório de Validação SEO');
  lines.push('');
  lines.push(`**Data:** ${new Date().toLocaleDateString('pt-BR')}`);
  lines.push(`**Status:** ${validation.contentValid && validation.linksValid ? '✅ Aprovado' : '❌ Revisão Necessária'}`);
  lines.push('');
  
  if (validation.issues.length > 0) {
    lines.push('## Problemas Encontrados');
    validation.issues.forEach(issue => {
      lines.push(`- ${issue}`);
    });
    lines.push('');
  }
  
  if (validation.recommendations.length > 0) {
    lines.push('## Recomendações');
    validation.recommendations.forEach(rec => {
      lines.push(`- ${rec}`);
    });
    lines.push('');
  }
  
  lines.push('## Resumo');
  lines.push(`- **Conteúdo:** ${validation.contentValid ? '✅ Válido' : '❌ Com problemas'}`);
  lines.push(`- **Links:** ${validation.linksValid ? '✅ Válidos' : '❌ Com problemas'}`);
  lines.push(`- **Total de problemas:** ${validation.issues.length}`);
  lines.push(`- **Total de recomendações:** ${validation.recommendations.length}`);
  
  return lines.join('\n');
}