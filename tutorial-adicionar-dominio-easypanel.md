# 🚀 Tutorial: Adicionar xcloudiptv.com.br ao EasyPanel Existente

## 📋 **Cenário Atual vs Novo**

### ✅ **Situação Atual**
- EasyPanel já configurado com domínio atual
- Cloudflare já configurada para domínio atual
- VPS funcionando com outros projetos (n8n, chatwoot)

### 🎯 **Objetivo**
- **Adicionar** xcloudiptv.com.br (sem remover o atual)
- **Cloudflare** para novo domínio
- **SSL** automático via Let's Encrypt
- **Isolamento** do projeto

---

## 🔄 **Opção 1: Adicionar Novo Projeto (RECOMENDADO)**

### **Vantagens:**
- ✅ Isolamento completo dos projetos
- ✅ Recursos dedicados para cada projeto
- ✅ Fácil gerenciamento independente
- ✅ Backup separado
- ✅ Scaling individual

### **Passo a Passo:**

#### **1. Acessar EasyPanel Dashboard**
```
https://sua-vps-ip:3000
# ou
https://seu-dominio-atual:3000
```

#### **2. Criar Novo Projeto**
1. Clique em **"New Project"** ou **"+"**
2. **Nome do Projeto:** `xcloud-iptv`
3. **Tipo:** Node.js Application
4. **Environment:** Production

#### **3. Configurar Source Code**
```yaml
# Opção A: Git Repository
Repository: https://github.com/seu-usuario/xcloud-iptv.git
Branch: main
Build Command: npm run build
Start Command: npm start

# Opção B: Upload Manual (se não usar Git)
Upload: [arquivos do projeto SITE-XCLOUDTV]
```

#### **4. Environment Variables (Crucial)**
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br

# Analytics (opcional por enquanto)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

#### **5. Resource Allocation**
```yaml
Memory: 1GB (pode aumentar depois)
CPU: 0.5 cores
Storage: 5GB
Port: 3000 (EasyPanel assigna porta externa automática)
```

#### **6. Deploy Inicial**
- Clique em **"Deploy"**
- Aguarde build completo (2-5 minutos)
- Verifique logs para erros

---

## 🌐 **Configurar Cloudflare para xcloudiptv.com.br**

### **7. Adicionar Domínio no Cloudflare**
1. Acesse: https://dash.cloudflare.com
2. Clique **"Add a Site"**
3. Digite: `xcloudiptv.com.br`
4. Plano: **Free** (suficiente)
5. Continue o setup

### **8. Configurar DNS Records**
```dns
# A Record - Root Domain
Type: A
Name: @
IPv4 address: [IP_DA_SUA_VPS]
Proxy status: 🟢 Proxied (importante!)
TTL: Auto

# A Record - WWW
Type: A  
Name: www
IPv4 address: [IP_DA_SUA_VPS]
Proxy status: 🟢 Proxied
TTL: Auto
```

### **9. SSL/TLS Configuration**
```
SSL/TLS → Overview:
  Mode: Full (strict)

SSL/TLS → Edge Certificates:
  Always Use HTTPS: ON
  Automatic HTTPS Rewrites: ON

SSL/TLS → Origin Server:
  # Vamos configurar origin certificate depois
```

---

## 🔧 **Configurar Domínio no EasyPanel**

### **10. Adicionar Domínio ao Projeto**
1. No projeto `xcloud-iptv` no EasyPanel
2. Vá para **"Domains"** ou **"Settings"**
3. Clique **"Add Domain"**
4. Digite: `xcloudiptv.com.br`
5. Marque: **"Enable SSL"** (Let's Encrypt)
6. Marque: **"Force HTTPS"**

### **11. Configurar Redirects**
```yaml
# Redirecionar www para root (ou vice-versa)
Primary Domain: xcloudiptv.com.br
Redirects:
  - www.xcloudiptv.com.br → xcloudiptv.com.br (301)
```

---

## 🛡️ **Configurações Avançadas Cloudflare**

### **12. Origin Certificate (Mais Seguro)**
```bash
# No Cloudflare:
SSL/TLS → Origin Server → Create Certificate

# Configuração:
Private Key Type: RSA (2048)
Certificate Validity: 15 years

# Domínios:
xcloudiptv.com.br
*.xcloudiptv.com.br
```

### **13. Configurar Origin Certificate na VPS**
```bash
# Copiar certificado e chave para VPS
# Salvar em: /etc/ssl/certs/xcloudiptv.com.br.pem
# Salvar em: /etc/ssl/private/xcloudiptv.com.br.key

# Ajustar permissões
chmod 644 /etc/ssl/certs/xcloudiptv.com.br.pem
chmod 600 /etc/ssl/private/xcloudiptv.com.br.key
```

### **14. Page Rules (Opcional mas Recomendado)**
```
# Page Rule 1: Always HTTPS
URL: xcloudiptv.com.br/*
Settings: Always Use HTTPS

# Page Rule 2: Security Headers
URL: xcloudiptv.com.br/*
Settings:
  - Security Level: Medium
  - Browser Integrity Check: On
```

---

## 🚀 **Deploy Final e Testes**

### **15. Deploy Completo**
```bash
# No EasyPanel, clique "Deploy" novamente
# Isso aplicará todas as configurações
```

### **16. Testes de Verificação**
```bash
# Testar HTTPS
curl -I https://xcloudiptv.com.br
# HTTP/2 200 OK

# Testar redirects
curl -I http://xcloudiptv.com.br
# HTTP/1.1 301 Moved Permanently → https://

curl -I http://www.xcloudiptv.com.br
# HTTP/1.1 301 Moved Permanently → https://xcloudiptv.com.br

# Testar formulário
curl -X POST https://xcloudiptv.com.br/api/teste \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test Deploy","email":"test@xcloudiptv.com.br","telefone":"(11) 99999-9999"}'
```

---

## 📊 **Verificações Finais**

### **17. SSL Certificate Check**
```bash
# Verificar certificado
openssl s_client -connect xcloudiptv.com.br:443 -servername xcloudiptv.com.br < /dev/null

# Online SSL Checker
https://www.ssllabs.com/ssltest/
```

### **18. Performance Check**
```bash
# GTmetrix
https://gtmetrix.com/

# PageSpeed Insights
https://pagespeed.web.dev/

# Cloudflare Analytics
https://dash.cloudflare.com/[seu-site]/analytics
```

---

## 🎯 **Resposta às Suas Perguntas**

### **❓ Posso usar ambos os domínios?**
**SIM!** Você pode manter **ambos os domínios**:
- Domínio atual: Continua funcionando normalmente
- xcloudiptv.com.br: Novo projeto isolado

### **❓ Preciso trocar o domínio atual?**
**NÃO!** O EasyPanel suporta **múltiplos projetos** com **múltiplos domínios** simultaneamente.

### **❓ Cloudflare para ambos?**
**SIM!** Você pode adicionar **quantos domínios quiser** no Cloudflare:
- Cada domínio tem sua própria configuração
- Cada um com seu SSL independente
- Isolamento completo entre eles

---

## 🎉 **Checklist Final - Deploy Concluído**

### **EasyPanel:**
- [ ] Projeto xcloud-iptv criado
- [ ] Build completo sem erros
- [ ] Porta 3000 funcionando
- [ ] Domínio configurado
- [ ] SSL Let's Encrypt aplicado

### **Cloudflare:**
- [ ] Domínio xcloudiptv.com.br adicionado
- [ ] DNS records configurados
- [ ] SSL/TLS mode: Full (strict)
- [ ] HTTPS redirect ativado
- [ ] Origin certificate (opcional mas recomendado)

### **Testes:**
- [ ] https://xcloudiptv.com.br - ✅ Acessível
- [ ] http://xcloudiptv.com.br - ✅ Redirect para HTTPS
- [ ] http://www.xcloudiptv.com.br - ✅ Redirect correto
- [ ] Formulário de teste - ✅ Funcionando
- [ ] SSL Grade A+ - ✅ Verificado
- [ ] Performance <2s - ✅ Otimizado

---

## 🚀 **Resultado Final**

**✅ Site funcionando:** https://xcloudiptv.com.br
**✅ SSL válido:** Let's Encrypt + Cloudflare
**✅ Performance:** Otimizada via Cloudflare
**✅ Isolamento:** Projeto independente
**✅ Domínio atual:** Mantido e funcionando

**Tempo estimado:** 30-45 minutos
**Dificuldade:** Média (guiado passo a passo)

---

## 📞 **Suporte e Troubleshooting**

### **Problemas Comuns:**

#### **1. Domínio não resolve**
```bash
# Verificar DNS propagation
dig xcloudiptv.com.br
nslookup xcloudiptv.com.br
```

#### **2. SSL não funciona**
```bash
# Verificar certificado
openssl s_client -connect xcloudiptv.com.br:443
```

#### **3. Build falha no EasyPanel**
```bash
# Ver logs no dashboard
# Verificar memory allocation
# Aumentar resources se necessário
```

#### **4. Cloudflare não conecta**
```bash
# Verificar IP da VPS
# Confirmar DNS records
# Testar com proxy desativado primeiro
```

**Precisa de ajuda com alguma etapa específica?**