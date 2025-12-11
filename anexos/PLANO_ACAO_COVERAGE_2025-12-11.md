# Plano de Ação: Correção de Cobertura (Google Search Console)
**Data:** 11/12/2025
**Status:** Aguardando Aprovação

## 1. Diagnóstico
Analisamos os arquivos da pasta `xcloudiptv.com.br-Coverage-Drilldown-2025-12-11` e identificamos que as seguintes URLs estão com status **"Rastreada, mas não indexada no momento"**:

1.  `https://xcloudiptv.com.br/` (Home)
2.  `https://xcloudiptv.com.br/planos-xcloud-iptv`
3.  `https://xcloudiptv.com.br/sobre-nos`
4.  `http://xcloudiptv.com.br/` (Versão não segura)

**Causa Provável:**
O Google rastreou essas páginas (em 22-23/Nov) mas optou por não indexá-las, geralmente devido a **"Conteúdo Raso" (Thin Content)**. As páginas atuais de "Planos" e "Sobre Nós" são muito baseadas em componentes visuais (cards/ícones) e possuem pouco texto narrativo único, o que dificulta o entendimento de relevância pelo buscador.

## 2. Ações Propostas

### A. Enriquecimento de Conteúdo (Prioridade Alta)
Para reverter o status de "não indexada", precisamos adicionar conteúdo textual relevante e único.

*   **Página de Planos (`/planos-xcloud-iptv`):**
    *   **Adicionar Seção de FAQ (Texto):** Incluir perguntas e respostas detalhadas sobre formas de pagamento (Pix/Cartão), tempo de liberação, renovação automática e compatibilidade.
    *   **Adicionar Bloco Narrativo:** Um parágrafo explicativo "Por que escolher os planos XCloud?" para aumentar a densidade de palavras-chave semânticas.

*   **Página Sobre Nós (`/sobre-nos`):**
    *   **Adicionar Seção "Nossa História/Missão":** Texto corrido (3-4 parágrafos) contando a origem da empresa, compromisso com estabilidade e suporte brasileiro. Isso humaniza a marca e gera conteúdo indexável.

### B. Validação Técnica (Prioridade Média)
*   **Home Page:** O não indexamento da Home geralmente é temporário ou ligado a conteúdo duplicado. Como já otimizamos a Home recentemente, a ação recomendada é solicitar a reindexação manual no GSC após as melhorias de conteúdo acima.
*   **Redirecionamento HTTP:** Confirmar se a versão `http://` está redirecionando 301 para `https://`. (Ação de infraestrutura/DNS, mas verificaremos via meta tags canonical que já estão corretas).

## 3. Cronograma Estimado
*   **Execução:** 1 hora (Implementação dos textos e FAQs).
*   **Validação:** Imediata (via código).
*   **Resultado Esperado:** Indexação das páginas na próxima visita do Googlebot (3-7 dias).

---
**Aguardando sua aprovação para iniciar a execução do item 2.A (Enriquecimento de Conteúdo).**
