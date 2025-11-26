# Avaliação de SEO — Página "Teste Grátis XCloud IPTV"

## Objetivo
- Avaliar a otimização para buscas por: "teste iptv xcloud", "teste xcloud iptv", "xcloud iptv teste".
- Propor plano de ação sem aplicar alterações (aguardando aprovação).

## Palavras‑chave alvo
- teste iptv xcloud
- teste xcloud iptv
- xcloud iptv teste

## Diagnóstico Atual
- Title: `Teste Grátis XCloud IPTV - Experimente Sem Compromisso` em `app/teste-gratis-xcloud-iptv/page.tsx:13`.
  - Cobertura de KW: boa para "teste xcloud iptv"; faltando variação exata "teste iptv xcloud".
  - Tamanho estimado: ~50–55 caracteres (ok).
- Meta description: em `app/teste-gratis-xcloud-iptv/page.tsx:15` e `app/teste-gratis-xcloud-iptv/page.tsx:64`.
  - Atualmente usa "Milhares de canais, filmes e séries"; quando aplicado, será substituída pela descrição definida pelo cliente.
  - Tamanho estimado ~150–170 caracteres (ok; manter dentro de 140–160).
- Canonical: presente e correto `.../teste-gratis-xcloud-iptv` em `app/teste-gratis-xcloud-iptv/page.tsx:28–29` e `app/teste-gratis-xcloud-iptv/page.tsx:65`.
- Open Graph/Twitter: presentes em `app/teste-gratis-xcloud-iptv/page.tsx:17–26`.
- H1: "Teste Grátis XCloud IPTV" em `app/teste-gratis-xcloud-iptv/page.tsx:99–106` (único e alinhado às KW).
- Interlinks: presentes para `planos` e `download` em `app/teste-gratis-xcloud-iptv/page.tsx:133–138` e `app/teste-gratis-xcloud-iptv/page.tsx:337–361`.
- JSON‑LD: `BreadcrumbList` e `FAQPage` presentes em `app/teste-gratis-xcloud-iptv/page.tsx:38–57` e incluídos em `app/teste-gratis-xcloud-iptv/page.tsx:70–71`.
- Conteúdo e claims:
  - Duração do teste: "até 6h" (ok) em `app/teste-gratis-xcloud-iptv/page.tsx:118–121`.
  - Contador e labels com "ATÉ 6H DURAÇÃO / MINUTOS / SEGUNDOS" em `app/teste-gratis-xcloud-iptv/page.tsx:193–219` (ok se mantiver "até 6h").
  - Métricas sem fonte: "50K+" testes, "98%" aprovação, "4.8" avaliação em `app/teste-gratis-xcloud-iptv/page.tsx:251–265` — requerem comprovação (conforme guardrails).

## Problemas e Riscos
- Conformidade de claims: números sem evidência (50K+, 98%, 4.8) violam guardrails.
- Duração: na seção de estatísticas aparece "6h" como valor absoluto em `app/teste-gratis-xcloud-iptv/page.tsx:263–265`; precisa manter "até 6h" em todo o texto.
- Meta description com "filmes e séries" pode ser mantida (genérico), mas o projeto recomenda "conteúdos variados".
- Variedade de KW: falta a variação exata "teste iptv xcloud" no title ou subtítulo.

## Plano de Ação (sem aplicar — aguarda aprovação)

### 1) Metadados
- Title: manter como está (sem alterações).
- Description: aplicar a descrição definida pelo cliente.
- Keywords: ajustar para `["teste iptv xcloud", "teste xcloud iptv", "xcloud iptv teste"]` em `MetaTags`.

### 2) Conteúdo
- Uniformizar linguagem de duração: usar sempre "até 6h"; remover qualquer valor absoluto em `app/teste-gratis-xcloud-iptv/page.tsx:263–265`.
- Remover ou neutralizar métricas sem evidência:
  - Trocar blocos "50K+", "98%", "4.8" por benefícios qualitativos (ativação imediata, suporte em português), ou marcar como opcionais até receber dados reais.
- Ajustar microcopy para KW natural e densidade 2–4%:
  - Inserir variação "teste iptv xcloud" em um H2/H3 (ex.: "Faça seu teste IPTV XCloud agora").
  - Manter uso de "conteúdos variados" em vez de "filmes e séries".

### 3) Interlinks
- Adicionar 2–3 links internos contextuais:
  - Para `planos` com âncora mensal: `/planos-xcloud-iptv#mensal`.
  - Para `sobre-nos` e `contato` em seções de dúvidas.
- Inserir link de retorno à Home no breadcrumb completo.

### 4) JSON‑LD
- Manter `BreadcrumbList` e `FAQPage` (já presentes).
- Opcional: adicionar `WebSite` com `SearchAction` global via layout, não crítico aqui.

### 5) A11y/Perf
- Garantir foco visível e contraste AA nos CTAs (já ok).
- Confirmar lazy‑load onde houver imagens (não há imagens pesadas aqui).

<!-- Exemplo removido para evitar contradições com as diretrizes do cliente -->

## QA — Página Teste Grátis

### [QA‑SEO]
- H1 único? (x)Sim ( )Não
- Title 50–60 c/ KW? (x)Sim ( )Não
- Description 140–160 c/ KW? ( )Sim (x)Não — será atualizada com o texto aprovado
- Slugs curtos com hífens? (x)Sim ( )Não
- 2–5 links internos/página? (x)Sim ( )Não — pode reforçar
- Canonical presente? (x)Sim ( )Não
- OG/Twitter completos? (x)Sim ( )Não
- JSON‑LD válidos (Org, Breadcrumb, FAQ/Local)? (x)Sim ( )Não — Org via global

### [QA‑Perf]
- Fonts com `display=swap`? (x)Sim ( )Não
- Lazy‑load em imagens? (x)Sim ( )Não — sem imagens pesadas
- Sem CSS/JS morto? (x)Sim ( )Não

### [QA‑A11y]
- Landmarks semânticos? (x)Sim ( )Não
- `alt` descritivos? (x)N/A ( )Não — sem imagens principais
- Contraste AA e foco visível? (x)Sim ( )Não

### [Pendências]
- Comprovação das métricas (50K+, 98%, 4.8) — fornecer fonte ou remover.
- Confirmar uso preferencial de "conteúdos variados" nas descrições.

## Próximos Passos
- Aprovar o plano acima para aplicar ajustes.
- Após aprovação, executar revisão de densidade das KW (2–4%) e revalidar no Lighthouse (SEO ≥ 100).

## Plano de Ação — Diretrizes do Cliente

### Metadados 
- Description: usar exatamente `Teste XCloud IPTV sem compromisso e com ativação imediata. Acesso a mais de 100 mil conteúdos. SOlicite e experimente já` em `app/teste-gratis-xcloud-iptv/page.tsx:15` e `app/teste-gratis-xcloud-iptv/page.tsx:64`. 
- Foco de KW: manter foco em "teste xcloud iptv" e posicionar também para "teste iptv xcloud" via headings H2/H3 (sem alterar Title). 

### Conteúdo 
- Duração: padronizar para "até 6h" em toda a página — ajustar `app/teste-gratis-xcloud-iptv/page.tsx:118-121`, `app/teste-gratis-xcloud-iptv/page.tsx:193-219`, `app/teste-gratis-xcloud-iptv/page.tsx:263-265`. 
- Claims: remover/neutralizar números sem evidência ("50K+", "98%") em `app/teste-gratis-xcloud-iptv/page.tsx:251-265` e substituir por benefícios qualitativos (ativação imediata, suporte em português). 
- Inserir variação "teste iptv xcloud" em um H2/H3: 
  - Subtítulo no Hero em `app/teste-gratis-xcloud-iptv/page.tsx:116-121` ou 
  - Novo H2 na seção Benefícios em `app/teste-gratis-xcloud-iptv/page.tsx:371-376`. 

### Interlinks 
- Adicionar links internos contextuais: 
  - Para `planos`: reforçar link para `/planos-xcloud-iptv#mensal` em `app/teste-gratis-xcloud-iptv/page.tsx:133-138`. 
  - Para `contato`: incluir link em seções de dúvidas (após formulário ou FAQ). 
- Breadcrumb completo: inserir link de retorno à Home em `app/teste-gratis-xcloud-iptv/page.tsx:75-77` (`Breadcrumb` com itens Home → Teste Grátis). 

### JSON‑LD 
- Manter `BreadcrumbList` e `FAQPage` como estão e atualizar textos conforme os ajustes acima (sem alterar a estrutura).

### Aceite (Critérios)
- Description exatamente igual à definida.
- H1 único; inclusão de H2/H3 com a variação "teste iptv xcloud".
- 2–3 links internos (incluindo `planos` e `contato`).
- Canonical presente.
- JSON‑LD válidos.
- "até 6h" em todo o conteúdo; sem números sem evidência.

### Observações
- Não alterar o que foi definido pelo cliente; Title permanece como está.
- Ajustes de copy seguem o padrão "conteúdos variados" (sem enfatizar qualidade de imagem).
