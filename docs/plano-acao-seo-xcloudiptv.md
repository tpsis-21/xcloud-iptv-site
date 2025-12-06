# Plano de Ação SEO — XCloud IPTV

Atualizado em: 2025-12-05

## Resumo Executivo

- Objetivo: elevar SEO técnico, conteúdo e A11y para metas Lighthouse (Perf ≥ 90, A11y ≥ 95, SEO ≥ 100) e aumentar captação de leads/assinaturas.
- Foco: corrigir densidade de KW, remover claims não comprovados, consolidar JSON‑LD, garantir robots/sitemap/canonical consistentes, melhorar LCP/FCP.

## Diagnóstico (Achados por área)

### Técnica
- `robots.txt` apresentou 500 em dev; tipagem ajustada, validar 200 em prod (app/robots.ts:4–11).
- Canonical consistente via `MetaTags` (components/seo/MetaTags.tsx:36–38) e páginas. OK.
- Sitemap inclui rotas principais (app/sitemap.ts:1–20). OK.
- OG/Twitter presentes (components/seo/MetaTags.tsx:40–51). OK.
- Fontes com `display=swap` e preload (app/layout.tsx:11). OK.
- LCP alto na Home anteriormente; reduzido com menor blur/backdrop e `quality={65}` (app/page.tsx:219–231, 134–137, 221). Reavaliar com Lighthouse.

### Conteúdo/On‑page
- Densidade de KW em Planos está elevada e repetitiva (app/planos-xcloud-iptv/page.tsx:132–160, 168–192). Ajustar para 2–4% e linguagem natural.
- Teste Grátis com H2/H3 redundantes (app/teste-gratis-xcloud-iptv/page.tsx:109–115, 114–115). Unificar headline secundária.
- Claim superlativo em Organization JSON‑LD: “Melhor IPTV do Brasil” (components/organization-schema.tsx:12). Substituir por texto neutro.
- Evitar “milhares” sem fonte. Revisar benefícios/cartas (app/teste-gratis-xcloud-iptv/page.tsx:117–121; app/page.tsx:280–304).
- Títulos e descrições: garantir 50–60 (title) e 140–160 (description). Ex.: Planos pode estar >160 (app/planos-xcloud-iptv/page.tsx:9–20).

### Estrutura/Linkagem Interna
- 2–5 interlinks por página: Home, Planos, Teste Grátis possuem. Manter consistência e âncoras úteis (createInternalLink em config/seo.ts:48–57).
- Breadcrumb configurado na Teste Grátis (app/teste-gratis-xcloud-iptv/page.tsx:37–41, 75–77). Replicar em Planos e Sobre.

### Acessibilidade
- H1 único por página (Home: app/page.tsx:148–151; Contato: app/contato/page.tsx:99–101). OK.
- `alt` descritivos nas imagens principais (app/page.tsx:224). OK.
- Contraste AA mantido; focos visíveis nas UI (shadcn + classes). OK.

### Performance
- Efeitos blur/backdrop intensos geravam custo de pintura; já reduzidos na Home (app/page.tsx:134–137, 219). Replicar nos outros heros.
- Partículas agora iniciam pós‑LCP e respeitam `prefers-reduced-motion` (components/particles.tsx:12, 71–77). OK.
- Imagens com `quality={65}` e `sizes` adequados no Hero (app/page.tsx:223–230). Reavaliar deviceSizes em `next.config.js` se necessário.

## Benchmark Rápido (Concorrentes)
- `xcloudtv.com.br` e `xcloudtv.app` aparentam foco forte em termos de marca e páginas com copy objetiva. Ações: alinhar títulos/descrições com intenção de busca, evitar redundância e superlativos.

## Plano de Ação (Prioridades, Donos, Critérios)

1) Ajustar densidade e copy natural (Alta)
- Dono: Conteúdo (Copywriter) + SEO
- Ações:
  - Planos: reduzir repetições de “planos xcloud iptv” e “assinar xcloud iptv”. Manter variações semânticas.
  - Teste Grátis: remover redundância de H3 e suavizar claims.
- Onde:
  - `app/planos-xcloud-iptv/page.tsx:132–160, 168–192`
  - `app/teste-gratis-xcloud-iptv/page.tsx:109–115`
- Critério: KW 2–4%, leitura fluida, sem stuffing; Title 50–60; Description 140–160.

2) Neutralizar claims e JSON‑LD (Alta)
- Dono: SEO + Frontend
- Ações:
  - Organization JSON‑LD descrição neutra (sem “melhor”).
  - Remover/restringir Review/Rating Schema onde não há dados reais.
- Onde:
  - `components/organization-schema.tsx:12`
  - `components/schemas/*` (ver uso de reviews/ratings)
- Critério: Schemas válidos sem dados inventados; validação no Rich Results.

3) Robots/Sitemap/Canonical (Alta)
- Dono: SEO + Frontend
- Ações:
  - Validar `robots.txt` 200 e sintaxe (`allow`/`disallow`), prod/dev.
  - Confirmar `sitemap.xml` lista todas páginas públicas.
- Onde:
  - `app/robots.ts:4–11`
  - `app/sitemap.ts:1–20`
- Critério: Resposta 200; cobertura de rotas; Search Console sem erros.

4) Melhorar LCP/FCP nas páginas internas (Média)
- Dono: Frontend
- Ações:
  - Reduzir blur/backdrop nos heros de Teste Grátis, Planos, Contato.
  - Garantir `priority` somente quando necessário; usar `quality` 60–70.
- Onde:
  - `app/teste-gratis-xcloud-iptv/page.tsx:80–86, 93–99`
  - `app/contato/page.tsx:90–92`
- Critério: LCP ≤ 2.5s (mobile), FCP melhorado.

5) Breadcrumb/Interlinks consistentes (Média)
- Dono: Frontend + SEO
- Ações:
  - Adicionar Breadcrumb em Planos e Sobre Nós.
  - Garantir 2–5 links internos contextuais por página.
- Onde:
  - `app/planos-xcloud-iptv/page.tsx`
  - `app/sobre-nos/page.tsx`
- Critério: Navegação clara; rastreabilidade melhor.

6) Metadados refinados (Média)
- Dono: SEO
- Ações:
  - Revisar títulos/descrições de todas as páginas para intenção de busca.
  - Evitar repetições excessivas e uso de KW em série.
- Onde:
  - `export const metadata` nas páginas
  - `MetaTags` props por página
- Critério: Titles 50–60; Descriptions 140–160 com KW primária natural.

7) Validação contínua (Baixa)
- Dono: QA + SEO
- Ações:
  - Rodar Lighthouse (mobile/desktop) em Home, Planos, Teste Grátis, Sobre.
  - Rodar Rich Results Test nos JSON‑LD.
- Critério: Performance ≥ 90; A11y ≥ 95; SEO ≥ 100.

## Sugestões de Copy (Exemplos)

- Planos — Description (≈150 chars):
  “Assine XCloud IPTV com opções mensais, trimestrais, semestrais e anuais. Conteúdo variado, suporte em português e compatível com seus dispositivos.”

- Teste Grátis — Headline secundária:
  “Teste XCloud IPTV sem compromisso. Ativação rápida e acesso temporário.”

- Organization JSON‑LD — description:
  “Plataforma de streaming com conteúdo variado e suporte em português.”

## Checklist de Conformidade

- H1 único por página — OK
- Canonical em todas as páginas — OK
- Robots 200 e sem erros — A validar
- Sitemap atualizado — OK
- OG/Twitter completos — OK
- JSON‑LD neutro e válido — Ajustar Organization, revisar Reviews
- KW 2–4% e linguagem natural — Ajustar Planos/Teste Grátis
- 2–5 interlinks — OK/manter
- A11y AA e foco visível — OK/manter

## Métricas/KPIs

- CTR orgânico por página (Search Console)
- Posições para “xcloud iptv”, “planos xcloud iptv”, “teste iptv xcloud”
- Lighthouse (mobile/desktop): LCP, FCP, Speed Index, SEO score

## Timeline

- Semana 1: Conteúdo e JSON‑LD; Robots/Sitemap validação
- Semana 2: Performance heros; Breadcrumb/Interlinks
- Semana 3: Revisão final, QA e publicação

## Owners

- SEO Lead: responsável por diretrizes e validações
- Frontend: ajustes em componentes/páginas
- Conteúdo/Copy: revisão de textos e densidade
- QA/A11y: validação de acessibilidade e testes
- DevOps: deploy e monitoramento em prod

