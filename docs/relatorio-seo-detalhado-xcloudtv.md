# 📊 Relatório Técnico de SEO e Conversão — XCloud IPTV

## 🔎 Resumo Executivo
- Foco: conformidade com regras, SEO on‑page, A11y, UX e conversão.
- Criticidades: menções proibidas (“HD”, duração de teste, “24/7”), domínios incorretos em JSON‑LD, claims sem fonte, rating sem base.
- Prioridades: corrigir Teste Grátis, Assinar e Ativar; padronizar metadados/canonicals; ajustar JSON‑LD; reforçar interlinks.

---

## ✅ Diretrizes Globais
- Densidade “xcloud iptv”: 2–4% por página, com distribuição em headings, primeiro parágrafo e âncoras.
- Evitar: termos de qualidade de imagem (HD/4K), duração exata de teste, números exagerados sem fonte, WhatsApp público.
- Interlinks: 2–5 por página com âncoras de intenção.
- Schema: domínio canônico `https://xcloudtv.com.br`; sem `AggregateRating` sem fonte; incluir `BreadcrumbList`.
- Perf: imagens WebP/AVIF, `loading="lazy"`, fontes com `display=swap`, evitar JS/CSS morto.

---

## 🏠 Home — `app/page.tsx`
**Meta tags**
- Atual: title e description otimizados; OG/Twitter com imagem e alt.
- Consistência de geotargeting “Brasil” mantida.

**Schema.org**
- Product com `AggregateRating` sem fonte: `app/page.tsx:830–852` → remover.
- Breadcrumb presente: `app/page.tsx:879–892`.

**Headings**
- H1 correto; padronizar “IPTV” em `app/page.tsx:228`.

**Conteúdo e interlinks**
- Inserir interlinks nos cards: `/teste-gratis-xcloud-iptv`, `/planos-xcloud-iptv`, `/download`, `/sobre-nos`, `/contato`.

**KW e densidade**
- Manter “xcloud iptv” 2–4% com variações naturais.

**Mobile-first e Perf**
- `Image` do hero com `priority`; demais com `loading="lazy"`.
- Confirmar `display=swap` e remover CSS/JS morto.

**A11y**
- `alt` descritivos ok; foco visível em CTAs.

**Conformidade**
- Remover menção a HD em FAQ: `app/page.tsx:523`.

**Ações**
- Remover `AggregateRating` e revisar FAQ de velocidade.

---

## 🚀 Teste Grátis — `app/teste-gratis-xcloud-iptv/page.tsx`
**Meta tags**
- Bons títulos/descriptions; reforçar “sem compromisso”.

**Schema.org**
- `WebPage` e `FAQPage` com tempo proibido: `app/teste-gratis-xcloud-iptv/page.tsx:328–334` e `371–376` → remover menções a duração.

**Headings**
- H1 forte; H2/H3 devem evitar “qualidade” e duração.

**Conteúdo e interlinks**
- Remover “comprove nossa qualidade” em `app/teste-gratis-xcloud-iptv/page.tsx:61`.
- Trocar “6 horas de acesso completo” em `app/teste-gratis-xcloud-iptv/page.tsx:70` por “acesso temporário”.

**KW e densidade**
- Focar “teste gratis xcloud iptv” e “teste iptv xcloud”; manter 2–4%.

**Mobile-first e Perf**
- Imagens e ícones com lazy; evitar scripts pesados.

**A11y**
- Labels nos inputs; `aria-label` nos botões do formulário.

**Canonical/hreflang**
- Canonical configurado; hreflang não aplicável.

**Conformidade**
- Remover qualquer menção a tempo específico.

**Ações**
- Reescrever JSON‑LD e FAQ sem duração; ajustar copy e CTAs.

---

## 💳 Planos — `app/planos-xcloud-iptv/page.tsx`
**Meta tags**
- Bons; reforçar CTA “Assine já”.

**Schema.org**
- `Product` com description “Streaming de qualidade”: `app/planos-xcloud-iptv/page.tsx:346` → trocar por “conteúdos variados”.

**Headings**
- H1/H2 ok; incluir H3 com “Perguntas frequentes sobre planos”.

**Interlinks**
- Links para `/teste-gratis-xcloud-iptv`, `/contato`, `/download`.

**KW e densidade**
- “planos xcloud iptv” e “assinar xcloud iptv” distribuídos 2–4%.

**Perf e A11y**
- Lazy nas imagens; foco visível nos botões.

**Ações**
- Ajustar JSON‑LD description; reforçar microcopy de Cakto e confiança.

---

## 🧾 Assinar — `app/assinar-xcloud-iptv/page.tsx`
**Meta tags**
- Violação: “Teste grátis 6h” e “Streaming HD”: `app/assinar-xcloud-iptv/page.tsx:11–12`.

**Headings e conteúdo**
- Remover “Streaming HD de Qualidade” `app/assinar-xcloud-iptv/page.tsx:30–36` e selo “IPTV de Qualidade Brasil” `app/assinar-xcloud-iptv/page.tsx:24`.

**Interlinks**
- Links para `/teste-gratis-xcloud-iptv` e âncoras para planos.

**KW e densidade**
- “assinar xcloud iptv” e “planos xcloud iptv” 2–4%.

**Ações**
- Reescrever hero e metadados; focar ativação imediata, suporte em português, faturamento em reais.

---

## 📲 Download — `app/download/page.tsx`
**Meta tags**
- Adequado; reforçar “busque por ‘XcloudTV’”.

**Conteúdo**
- Adicionar bloco “Como instalar”: instruções por dispositivo e busca “XcloudTV”.

**Interlinks**
- Links para `/ativar-xcloud-iptv` e `/contato`.

**Ações**
- Incluir instruções de busca “XcloudTV”; revisar JSON‑LD SoftwareApplication.

---

## 🧭 Sobre Nós — `app/sobre-nos/page.tsx`
**Meta tags**
- Claims “Líder” sem fonte: `app/sobre-nos/page.tsx:16–24` → substituir por benefícios práticos.

**Conteúdo**
- Linguagem neutra; evitar números exagerados.

**Ações**
- Ajustar metadados; manter “streaming completo” já aplicado `app/sobre-nos/page.tsx:311`.

---

## ✉️ Contato — `app/contato/page.tsx`
**Meta tags**
- Bons; reforçar geotargeting “Brasil”.

**Schema.org**
- Domínio incorreto `vercel.app`: `app/contato/page.tsx:361–379` → trocar para `https://xcloudtv.com.br`.

**Ações**
- Ajustar JSON‑LD e Breadcrumb; manter sem WhatsApp público.

---

## 🔧 Ativar — `app/ativar-xcloud-iptv/page.tsx`
**Meta tags**
- “Suporte 24/7” em `app/ativar-xcloud-iptv/page.tsx:10` → mudar para “Seg–Sáb, 9h–22h”.

**Conteúdo**
- Remover WhatsApp público `app/ativar-xcloud-iptv/page.tsx:280–288`.
- Trocar “qualidade de imagem” `app/ativar-xcloud-iptv/page.tsx:266` por “melhor experiência de uso”.
- Padronizar instruções com “XcloudTV”.

**Ações**
- Corrigir metadados, bullets e seção de contato; adicionar interlink para `/download` e `/contato`.

---

## 🔗 Estratégia de Interlinking (Global)
- “Solicite o teste grátis” → `/teste-gratis-xcloud-iptv`
- “Ver planos” → `/planos-xcloud-iptv`
- “Como ativar” → `/ativar-xcloud-iptv`
- “Download” → `/download`
- “Contato” → `/contato`

---

## 🧩 Schema/JSON‑LD — Regras Globais
- Domínio canônico: `https://xcloudtv.com.br`.
- Remover `AggregateRating` sem fonte; manter `Organization`, `WebSite`, `Product/Offer`, `FAQPage`.
- Adicionar `BreadcrumbList` em páginas principais.

---

## 📐 A11y, Perf, SEO — Checklist
- [ ] H1 único por página
- [ ] Titles 50–60 com KW primária
- [ ] Descriptions 140–160 com KW primária e CTA
- [ ] 2–5 links internos/página
- [ ] Canonical presente
- [ ] OG/Twitter completos com imagem e alt
- [ ] JSON‑LD válidos (Org, Breadcrumb, FAQ/Local)
- [ ] Fonts `display=swap`
- [ ] Imagens com `loading="lazy"` e `alt` descritivo
- [ ] Sem CSS/JS morto
- [ ] Contraste AA e foco visível

---

## ✅ Plano de Ação (Prioridades)
1) Teste Grátis: remover duração e termos de qualidade; ajustar JSON‑LD e FAQ.
2) Assinar: remover “HD/qualidade” e “6h”; reescrever hero e metadados.
3) Ativar: remover “24/7” e WhatsApp público; ajustar bullets e instruções “XcloudTV”.
4) Home: remover menção a HD em FAQ; retirar `AggregateRating` sem fonte.
5) Contato: padronizar domínios em JSON‑LD para canônico.
6) Planos: ajustar JSON‑LD description.
7) Inserir interlinks contextuais em todas as páginas.

---

## 📎 Referências de Código
- Home: FAQ HD `app/page.tsx:523`; AggregateRating `app/page.tsx:830–852`.
- Teste Grátis: duração `app/teste-gratis-xcloud-iptv/page.tsx:70`; JSON‑LD tempo `app/teste-gratis-xcloud-iptv/page.tsx:328–334`; FAQ tempo `app/teste-gratis-xcloud-iptv/page.tsx:371–376`; “qualidade” `app/teste-gratis-xcloud-iptv/page.tsx:61`.
- Planos: JSON‑LD “qualidade” `app/planos-xcloud-iptv/page.tsx:346`.
- Assinar: metadados “6h/HD” `app/assinar-xcloud-iptv/page.tsx:11–12`; hero “HD” `app/assinar-xcloud-iptv/page.tsx:30–36`; selo “qualidade” `app/assinar-xcloud-iptv/page.tsx:24`.
- Contato: JSON‑LD com `vercel.app` `app/contato/page.tsx:361–379`.
- Ativar: “24/7” `app/ativar-xcloud-iptv/page.tsx:10`; WhatsApp público `app/ativar-xcloud-iptv/page.tsx:280–288`; “qualidade de imagem” `app/ativar-xcloud-iptv/page.tsx:266`.

---

## 📈 Observações Finais
- Alinhar metadados e schemas ao domínio canônico e às regras.
- Manter linguagem natural, focada em benefícios e sem termos proibidos.
- Após ajustes, rodar Lighthouse; metas: Performance ≥ 90, A11y ≥ 95, SEO ≥ 100.
