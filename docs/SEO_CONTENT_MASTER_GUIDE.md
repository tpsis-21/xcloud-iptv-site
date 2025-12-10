# 🛡️ SEO & CONTENT MASTER GUIDE — XCLOUD IPTV

**⚠️ PROTOCOLO DE LEITURA OBRIGATÓRIA ⚠️**
> Este documento é a **ÚNICA FONTE DE VERDADE** para SEO e Conteúdo do projeto.
> Qualquer alteração em textos, metadados, imagens ou estrutura de páginas DEVE consultar este guia primeiro.
> **Não altere** regras definidas aqui sem aprovação explícita.

---

## 1. 🚫 Regras de Conteúdo (Content Guardrails)

Para evitar bloqueios em plataformas de anúncios e manter a consistência da marca, os seguintes termos são **ESTRITAMENTE PROIBIDOS** ou devem ser usados com extrema cautela.

### Termos Proibidos (Blacklist)
Estas palavras acionam alertas no validador (`config/seo.ts`) e **não devem** aparecer em textos visíveis, alt tags ou metadados:
*   `qualidade` (Evitar promessas subjetivas)
*   `hd`, `full hd`, `4k` (Não prometer resolução específica)
*   `anti-travamento` (Promessa técnica arriscada)
*   `6 horas`, `6h` (Não especificar duração do teste no texto comercial)
*   `24/7`, `24 horas` (O suporte é Seg-Sáb, 9h-22h)

### Voz e Tom
*   **Tom:** Profissional, Seguro, Tecnológico, Acessível.
*   **Foco:** Benefícios (Estabilidade, Variedade, Suporte) ao invés de especificações técnicas (Bitrate, Resolução).
*   **Marca:** Sempre usar "XCloud IPTV" ou "XCloudTV".

---

## 2. 📸 Padrões de Imagens e Assets

Todo ativo visual deve seguir rigorosamente o padrão de SEO-friendly.

### Nomenclatura de Arquivos
*   **Formato:** `kebab-case` (tudo minúsculo, separado por hífens).
*   **Extensão:** Preferencialmente `.webp` para imagens e `.svg` para vetores.
*   **Palavras-chave:** O nome do arquivo DEVE descrever o conteúdo.
    *   ✅ `xcloud-iptv-interface-streaming-app.webp`
    *   ❌ `img001.jpg`, `print_tela.png`, `logo_novo.svg`

### Atributos Alt (Acessibilidade + SEO)
*   Obrigatório em todas as tags `<Image>`.
*   Deve descrever a imagem e incluir contexto.
    *   ✅ `alt="Interface do aplicativo XCloud IPTV mostrando catálogo de filmes"`
    *   ❌ `alt="imagem"` ou `alt="xcloud"`

### Assets Globais Críticos
*   **Logo:** `/icone-app-xcloud-iptv.png`
*   **Social Share (OG):** `/xcloud-iptv-social-share.svg` (Usado em `layout.tsx` e todas as páginas)

---

## 3. 🧬 Arquitetura de Metadados (SEO Técnico)

### Padrões Globais (`app/layout.tsx`)
*   **Title:** 50-60 caracteres. Padrão: `Página | XCloud IPTV`.
*   **Description:** 140-160 caracteres. Deve conter a KW principal da página.
*   **Canonical:** URL absoluta (`https://xcloudiptv.com.br/slug`).
*   **OpenGraph/Twitter:** Sempre preenchidos com `title`, `description` e `images` apontando para o asset global.

### Mapeamento de Páginas e Palavras-Chave (KWs)

| Página | Slug | KW Principal | Intenção | Schemas Obrigatórios |
| :--- | :--- | :--- | :--- | :--- |
| **Home** | `/` | `xcloud iptv` | Institucional / Conversão | Organization, LocalBusiness, Website |
| **Teste Grátis** | `/teste-gratis-xcloud-iptv` | `teste gratis xcloud iptv` | Conversão (Lead) | FAQPage, BreadcrumbList |
| **Planos** | `/planos-xcloud-iptv` | `planos xcloud iptv` | Transacional | Product (com ofertas), BreadcrumbList |
| **Download** | `/download` | `baixar xcloud iptv` | Informacional / Suporte | SoftwareApplication, HowTo, BreadcrumbList |
| **Sobre Nós** | `/sobre-nos` | `sobre xcloud iptv` | Institucional | Organization, BreadcrumbList |
| **Contato** | `/contato` | `contato xcloud iptv` | Suporte | ContactPoint, BreadcrumbList |

---

## 4. 🧩 Estrutura de Dados (JSON-LD)

Os schemas são gerados centralizadamente via `config/schemas.ts` e componentes em `components/schemas/`.

### Schemas Implementados
1.  **Organization:** Define a marca, logo e contatos. Inserido no `layout.tsx` ou Home.
2.  **Product:** Usado na página de Planos. Deve conter `offers` (preço, moeda) e `aggregateRating` (se houver).
3.  **SoftwareApplication:** Usado na página de Download. Define SO (Android, iOS), categoria e link de download.
4.  **FAQPage:** Usado em páginas com perguntas frequentes (Teste Grátis, Home).
5.  **HowTo:** Usado para tutoriais de instalação.
6.  **BreadcrumbList:** Obrigatório em todas as páginas internas para navegação estrutural.

**⚠️ NÃO DUPLICAR SCHEMAS:** Verificar se o schema já está no `layout.tsx` antes de adicionar na página individual.

---

## 5. 📂 Arquivos Críticos (DO NOT TOUCH)

Estes arquivos contêm a lógica central de SEO. Alterações aqui impactam o site inteiro.

*   `config/seo.ts` - Configurações globais, KWs e **validação de termos proibidos**.
*   `config/schemas.ts` - Templates dos schemas JSON-LD.
*   `components/seo/JsonLD.tsx` - Componente renderizador de schemas.
*   `app/robots.ts` - Controle de indexação.
*   `app/sitemap.ts` - Mapa do site para buscadores.
*   `app/layout.tsx` - Metadados base e referências de assets globais.

---

## 6. 🚀 Checklist de Publicação (QA)

Antes de qualquer deploy ou alteração significativa:

1.  [ ] **Build:** Rodar `npm run build` para verificar erros de tipo e geração estática.
2.  [ ] **Validação de Termos:** Verificar logs do console para avisos de "Termo proibido detectado".
3.  [ ] **Imagens:** Verificar se novas imagens estão em `.webp` e com nomes `kebab-case`.
4.  [ ] **Links:** Testar links internos e externos (Cakto, Downloads).
5.  [ ] **Metadados:** Verificar se o título e descrição da página alterada estão nos padrões.

---

*Documento gerado automaticamente para proteção da integridade de SEO do projeto XCloud IPTV.*
