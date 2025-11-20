# 🚀 Configuração de Deploy - xcloudiptv.com.br

## 📋 Checklist de Preparação para Deploy

### 1. Atualizar URLs no Código

#### `config/seo.ts` - Verificar URLs
```typescript
// Verificar se as URLs estão corretas
export const siteConfig = {
  url: 'https://xcloudiptv.com.br', // ✅ Já está correto
  name: 'XCloud IPTV',
  // ... resto da config
};
```

#### `next.config.js` - Atualizar se necessário
```javascript
module.exports = {
  // ... outras configurações
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://xcloudiptv.com.br',
  },
  // Domínios de imagem
  images: {
    domains: ['xcloudiptv.com.br'],
  },
};
```

### 2. Variáveis de Ambiente (`.env.production`)
```env
# Domínio Principal
NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br

# Analytics (quando configurar)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Webhook (já está correto)
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.tplay21.in/webhook/teste-xcloudtv
```

### 3. Testes Locais antes do Deploy

#### Build de Produção Local
```bash
# Limpar cache
rm -rf .next node_modules package-lock.json

# Instalar dependências
npm install

# Build de produção
npm run build

# Testar build local (production)
npm start

# Verificar se está rodando em http://localhost:3000
```

#### Testar URLs no Build Local
```bash
# Verificar se não há erros de URL
grep -r "xcloudtv.com.br" . --exclude-dir=.next --exclude-dir=node_modules
# Deve retornar vazio (sem referências antigas)

grep -r "xcloudiptv.com.br" . --exclude-dir=.next --exclude-dir=node_modules
# Deve mostrar as referências corretas
```

### 4. Preparar para EasyPanel

#### Arquivo `deploy.config.js`
```javascript
module.exports = {
  appName: 'xcloud-iptv',
  buildCommand: 'npm run build',
  startCommand: 'npm start',
  env: {
    NODE_ENV: 'production',
    PORT: 3000,
    NEXT_PUBLIC_SITE_URL: 'https://xcloudiptv.com.br',
  },
  resources: {
    memory: '1GB',
    cpu: '0.5',
    storage: '5GB'
  },
  healthCheck: {
    path: '/api/health',
    interval: 30,
    timeout: 10,
    retries: 3
  }
};
```

### 5. Verificar Schemas e Meta Tags

#### JSON-LD Schemas
```typescript
// Verificar todos os schemas estão com domínio correto
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://xcloudiptv.com.br", // ✅ Confirmar
  "name": "XCloud IPTV",
  "logo": "https://xcloudiptv.com.br/logo.png"
}
```

#### Meta Tags e Canonical
```html
<!-- Verificar no build final -->
<link rel="canonical" href="https://xcloudiptv.com.br/pagina">
<meta property="og:url" content="https://xcloudiptv.com.br/pagina">
```

### 6. Testes de Performance

#### Lighthouse CI (opcional)
```bash
# Instalar Lighthouse CI globalmente
npm install -g @lhci/cli

# Rodar audit completo
lhci autorun --config=lighthouserc.js
```

#### Configuração `lighthouserc.js`
```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
  },
};
```

### 7. Preparação Final para Deploy

#### Commit e Push
```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Commit com descrição clara
git commit -m "deploy: configuração para xcloudiptv.com.br"

# Push para repositório
git push origin main
```

#### Documentação do Deploy
```markdown
## Deploy Checklist - xcloudiptv.com.br
- [ ] URLs atualizadas para xcloudiptv.com.br
- [ ] Build local testado (npm run build + npm start)
- [ ] Variáveis de ambiente configuradas
- [ ] Schemas JSON-LD verificados
- [ ] Meta tags e canonical URLs ok
- [ ] Performance testada
- [ ] Commit e push realizado
- [ ] EasyPanel configurado
- [ ] Domínio apontando para VPS
- [ ] SSL configurado (Let's Encrypt)
```

### 8. Comandos de Deploy no EasyPanel

```bash
# No painel do EasyPanel:
# 1. Criar novo projeto: xcloud-iptv
# 2. Conectar repositório Git
# 3. Configurar variáveis de ambiente
# 4. Deploy automático ativado
```

### 9. Verificação Pós-Deploy

#### Testar URLs em Produção
```bash
# Verificar todas as páginas principais
curl -I https://xcloudiptv.com.br/
curl -I https://xcloudiptv.com.br/planos-xcloud-iptv
curl -I https://xcloudiptv.com.br/teste-gratis-xcloud-iptv
curl -I https://xcloudiptv.com.br/termos-de-uso

# Testar formulário
curl -X POST https://xcloudiptv.com.br/api/teste \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test Deploy","email":"test@xcloudiptv.com.br","telefone":"(11) 99999-9999"}'
```

#### Verificar SSL e Performance
```bash
# Testar SSL
openssl s_client -connect xcloudiptv.com.br:443 -servername xcloudiptv.com.br < /dev/null

# Testar com GTmetrix ou PageSpeed Insights
# https://gtmetrix.com/
# https://pagespeed.web.dev/
```

### 10. Rollback (se necessário)

```bash
# Se algo der errado, no EasyPanel:
# 1. Acessar histórico de deploys
# 2. Selecionar versão anterior
# 3. Rollback automático
```

---

## 🎯 **URL Final:** https://xcloudiptv.com.br

**Status:** ✅ Pronto para deploy
**Tempo estimado:** 15-30 minutos
**Complexidade:** Fácil (EasyPanel automatiza 90%)