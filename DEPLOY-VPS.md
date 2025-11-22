# 🚀 Deploy XCloud IPTV - VPS com EasyPanel

## 📋 **Resumo do Deploy**

Este guia mostra como configurar o site XCloud IPTV na sua VPS usando EasyPanel.

## 🔧 **Configurações do Projeto**

### **Stack Tecnológica**
- **Frontend:** Next.js 14 com React 18
- **Estilização:** Tailwind CSS
- **Build:** Otimizado para produção
- **Servidor:** Node.js com Express (custom server)
- **Porta:** 3000 (configurável via PORT)

### **Scripts Disponíveis**
```bash
npm run dev        # Desenvolvimento local
npm run build      # Build de produção
npm run start      # Next.js padrão
npm run start:prod # Servidor de produção (use este!)
npm run lint       # Verificação de código
```

## 📦 **Deploy no EasyPanel**

### **1. Criar Novo Projeto**
- **Nome:** `xcloud-iptv`
- **Tipo:** Node.js Application
- **Environment:** Production

### **2. Configurar Source Code**
**Opção A - Git (Recomendado):**
```yaml
Repository: https://github.com/tpsis-21/xcloud-iptv-site.git
Branch: main
Build Command: npm install && npm run build
Start Command: npm run start:prod
```

**Opção B - Upload Manual:**
```bash
# Fazer upload de todos os arquivos do projeto
# Incluir: package.json, server.js, deploy.config.js, etc.
```

### **3. Environment Variables**
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br
```

### **4. Resource Allocation**
```yaml
Memory: 1GB (inicial)
CPU: 0.5 cores
Storage: 5GB
Port: 3000
```

### **5. Build & Deploy**
```bash
# O EasyPanel executará automaticamente:
npm install
npm run build
npm run start:prod
```

## 🌐 **Configuração de Domínio**

### **DNS Records (Cloudflare)**
```dns
Type: A
Name: @
IPv4: [IP_DA_SUA_VPS]
Proxy: 🟢 Proxied

Type: A  
Name: www
IPv4: [IP_DA_SUA_VPS]
Proxy: 🟢 Proxied
```

### **SSL/TLS**
- **Mode:** Full (strict)
- **Always HTTPS:** ON
- **Auto Rewrite:** ON

## 🔍 **Verificação do Deploy**

### **Health Check**
```bash
curl https://xcloudiptv.com.br/api/health
# Expected: {"status":"ok","timestamp":"2024-..."}
```

### **Testar Formulário**
```bash
curl -X POST https://xcloudiptv.com.br/api/teste \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test Deploy","email":"test@xcloudiptv.com.br","telefone":"(11) 99999-9999"}'
```

### **Verificar Logs**
```bash
# No EasyPanel Dashboard:
# 1. Acesse o projeto xcloud-iptv
# 2. Vá para "Logs" ou "Deployments"
# 3. Verifique por erros
```

## 🛠 **Solução de Problemas**

### **Build Falhou**
```bash
# Verificar logs de build
# Possíveis causas:
# - Falta de memória (aumentar para 2GB)
# - Dependências faltando (npm install)
# - Erro de TypeScript (npm run check)
```

### **Servidor Não Inicia**
```bash
# Verificar portas
netstat -tlnp | grep 3000

# Verificar logs
pm2 logs xcloud-iptv
# ou
docker logs [container-id]
```

### **Erro 502/503**
```bash
# Verificar se o serviço está rodando
curl http://localhost:3000

# Verificar proxy/nginx
nginx -t
systemctl status nginx
```

## 📊 **Performance & Monitoramento**

### **Métricas Recomendadas**
- **Tempo de resposta:** < 200ms
- **Uso de memória:** < 500MB
- **CPU:** < 30% (média)
- **Disponibilidade:** > 99.9%

### **Ferramentas de Monitoramento**
- **Cloudflare Analytics:** Tráfego e performance
- **EasyPanel Metrics:** Recursos do container
- **GTmetrix/PageSpeed:** Performance do site

## 🔄 **Atualizações Futuras**

### **Deploy de Atualizações**
```bash
# Via Git (automático):
git push origin main
# EasyPanel detecta e re-deploya

# Manual:
# 1. Acesse EasyPanel
# 2. Clique "Redeploy"
# 3. Verifique logs
```

### **Rollback (se necessário)**
```bash
# EasyPanel mantém histórico de deploys
# 1. Acesse "Deployments"
# 2. Selecione versão anterior
# 3. Clique "Rollback"
```

## 🎯 **Checklist Final**

### **Antes do Deploy**
- [ ] Código testado localmente
- [ ] Build funcionando (`npm run build`)
- [ ] Environment variables configuradas
- [ ] Domínio DNS apontando para VPS

### **Durante Deploy**
- [ ] Build completo sem erros
- [ ] Servidor iniciando na porta correta
- [ ] Logs sem warnings críticos
- [ ] Health check respondendo

### **Após Deploy**
- [ ] Site acessível no domínio
- [ ] SSL funcionando (HTTPS)
- [ ] Formulários testados
- [ ] Performance aceitável
- [ ] Mobile responsive

## 📞 **Suporte**

Se encontrar problemas:
1. Verifique os logs no EasyPanel
2. Teste localmente primeiro
3. Confira as environment variables
4. Verifique DNS e SSL

**Boa sorte com o deploy! 🚀**