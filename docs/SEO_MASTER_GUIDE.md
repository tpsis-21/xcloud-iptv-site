# SEO Master Guide - XCloud IPTV
> Documento vivo de padrões de Otimização para Motores de Busca (SEO).
> Última atualização: 12/12/2025

Este guia define os padrões técnicos e de conteúdo para garantir o posicionamento do **XCloud IPTV** no topo da SERP, evitando penalizações (Google Panda/Penguin) e garantindo alta conversão.

---

## 1. Pilares da Estratégia (E-E-A-T)

O Google prioriza sites que demonstram **Experiência, Especialidade, Autoridade e Confiabilidade**.

*   **Experiência:** Conteúdo focado na *usabilidade* do usuário (ex: "Como instalar em 5 minutos").
*   **Autoridade:** Links internos fortes, Schema Markup validado e presença de termos técnicos corretos (sem exageros).
*   **Confiabilidade:** HTTPS, Política de Privacidade clara, Sem promessas falsas (ex: "Anti-travamento").

## 2. Regras de Conteúdo (On-Page)

### 2.1. Densidade e Palavras-Chave
*   **Densidade Ideal:** 2% a 4%.
*   **KW Primária:** `XCloud IPTV` (Deve aparecer no H1, primeiro parágrafo e pelo menos 1 H2).
*   **KW Secundárias (LSI):** `App de streaming`, `TV via internet`, `Canais ao vivo`, `Teste grátis`.
*   **Anti-Spam:** Evite repetir a KW principal em *todos* os subtítulos. Use variações naturais.
    *   ❌ *Ruim:* "Planos XCloud, Instalar XCloud, Baixar XCloud"
    *   ✅ *Bom:* "Planos XCloud, Instalar o App, Baixar a plataforma"

### 2.2. Termos Proibidos (Blacklist)
Para evitar bloqueios em Ads e penalizações, **NUNCA** use:
*   "Qualidade de imagem" / "4K" / "Full HD" (Foco deve ser estabilidade, não resolução).
*   "6 Horas" (Use "Teste Grátis" ou "Até 6 horas").
*   Nomes de filmes/séries específicos (Risco de Copyright).
*   "Anti-travamento" (Promessa impossível tecnicamente).

### 2.3. Hierarquia de Títulos (Headings)
*   **H1:** Apenas UM por página. Deve conter a KW principal.
*   **H2:** Seções principais.
*   **H3:** Subseções (ex: Cards de planos, itens de FAQ).
*   **H4-H6:** Uso estético ou estrutural menor.

---

## 3. SEO Técnico

### 3.1. Metadados (Padrão Next.js)
Todo arquivo `page.tsx` deve exportar `metadata`:

```typescript
export const metadata: Metadata = {
  title: 'Título | XCloud IPTV', // 50-60 caracteres
  description: 'Descrição persuasiva com KW principal. 140-160 caracteres.',
  alternates: { canonical: '/slug-da-pagina' }, // Essencial para evitar conteúdo duplicado
  openGraph: { ... } // Para compartilhamento social
}
```

### 3.2. URLs (Slugs)
*   Curtas e descritivas.
*   Use hífens para separar palavras.
*   Exemplo: `/teste-gratis-xcloud-iptv` (Bom) vs `/teste_gratis` (Ruim).

### 3.3. Performance (Core Web Vitals)
*   **LCP (Largest Contentful Paint):** Imagens acima da dobra devem ter `priority` no componente `Next/Image`.
*   **CLS (Layout Shift):** Sempre defina `width` e `height` (ou aspect ratio) para imagens e vídeos.
*   **Fontes:** Use `display: 'swap'` (já configurado no `layout.tsx`).

### 3.4. Dados Estruturados (Schema.org / JSON-LD)
O site utiliza Schemas avançados para Rich Snippets:
*   `Organization`: Na Home (Logo, nome, contato).
*   `FAQPage`: Na seção de perguntas frequentes.
*   `Product`: Nas páginas de planos (Preço, moeda, disponibilidade).
*   `SoftwareApplication`: Para indicar que é um App.

**Nunca remova o componente `<JsonLD />` ou os schemas injetados.**

---

## 4. Acessibilidade (A11y) como Fator de Rankeamento
O Google penaliza sites inacessíveis.
*   **Imagens:** Todas devem ter atributo `alt` descritivo.
*   **Contraste:** Cores de texto devem ter contraste AA (Verde sobre preto funciona bem, cuidado com cinza claro).
*   **Botões:** Devem ter `aria-label` se o texto for apenas um ícone ou pouco descritivo.

---

## 5. Checklist de Publicação
Antes de subir qualquer alteração:
1.  [ ] O H1 é único?
2.  [ ] As imagens novas têm `alt`?
3.  [ ] A KW principal aparece no primeiro parágrafo?
4.  [ ] Os termos proibidos foram evitados?
5.  [ ] O Link Preview (OpenGraph) está configurado?
6.  [ ] O site carrega rápido no Mobile (3G)?

---

## 6. Manutenção Mensal
*   Atualizar Sitemap (`sitemap.ts`).
*   Verificar links quebrados.
*   Validar Schemas no [Rich Results Test](https://search.google.com/test/rich-results).
*   Monitorar Search Console para erros de indexação 404/5xx.
