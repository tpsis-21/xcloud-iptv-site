# 🚀 Guia de Deploy Simplificado - XCloud IPTV na VPS

## 📋 O que vamos fazer?

Vamos publicar seu site XCloud IPTV na internet usando seu servidor VPS. É como colocar sua loja online, mas ao invés de produtos físicos, venderemos assinaturas IPTV.

## 🎯 Objetivo Final
Seu site `xcloudiptv.com.br` funcionando perfeitamente com:
- ✅ SSL (cadeado verde no navegador)
- ✅ Cloudflare (proteção e velocidade)
- ✅ EasyPanel (painel fácil de gerenciar)
- ✅ Tudo funcionando 24h por dia

---

## 🧩 Passo 1: Preparar o Terreno (5 minutos)

### O que é cada coisa?
- **EasyPanel**: É como um "painel de controle" para seus sites
- **Docker**: Tecnologia que "empacota" seu site
- **Cloudflare**: Protege e deixa seu site mais rápido
- **SSL**: O "cadeado verde" que deixa seu site seguro

### Acesse seu VPS
1. Abra o **PowerShell** (no Windows) ou **Terminal** (no Mac/Linux)
2. Digite: `ssh root@IP_DO_SEU_SERVIDOR`
3. Digite sua senha quando pedir

> 💡 **Dica**: O IP do servidor você deve ter recebido do seu provedor

---

## 🏗️ Passo 2: Criar o Site no EasyPanel (10 minutos)

### Passo a Passo Detalhado:

1. **Abra o EasyPanel**
   - Digite no navegador: `http://IP_DO_SERVIDOR:3000`
   - Faça login com seu usuário e senha

2. **Crie um Novo Projeto**
   ```
   Clique em: "Novo Projeto" ou "+"
   Nome do projeto: xcloud-iptv
   Descrição: Site oficial XCloud IPTV
   ```

3. **Adicione o Serviço do Site**
   ```
   Clique em: "Adicionar Serviço"
   Escolha: "Docker Compose"
   Nome do serviço: site
   ```

4. **Cole esta configuração** (é como uma "receita" para seu site):
   ```yaml
   version: '3.8'
   services:
     xcloud-site:
       image: node:18-alpine
       working_dir: /app
       volumes:
         - ./site:/app
       ports:
         - "3001:3000"
       command: >
         sh -c "
           npm install &&
           npm run build &&
           npm start
         "
       restart: unless-stopped
       environment:
         - NODE_ENV=production
         - PORT=3000
   ```

5. **Configure o Proxy Reverso** (é como um "porteiro" que direciona visitantes):
   ```
   Vá em: "Configurações" → "Proxy Reverso"
   Domínio: xcloudiptv.com.br
   Backend: http://localhost:3001
   Ativar SSL: Sim
   ```

---

## 📁 Passo 3: Enviar Seu Site para o Servidor (15 minutos)

### Método 1: Via Git (Recomendado)

1. **No seu computador**, dentro da pasta do site:
   ```bash
   git init
   git add .
   git commit -m "Primeiro envio"
   ```

2. **No servidor**, crie um repositório:
   ```bash
   mkdir -p /root/xcloud-iptv/site
   cd /root/xcloud-iptv/site
   git init --bare
   ```

3. **Conecte seu computador ao servidor**:
   ```bash
   git remote add production root@IP_DO_SERVIDOR:/root/xcloud-iptv/site
   git push production master
   ```

### Método 2: Via SCP (Mais Simples)

1. **No seu computador**:
   ```bash
   scp -r . root@IP_DO_SERVIDOR:/root/xcloud-iptv/site/
   ```

---

## 🔒 Passo 4: Configurar o SSL (10 minutos)

### O que é SSL?
É o "cadeado verde" que aparece no navegador. Sem ele, os visitantes verão "Site Não Seguro".

### Passos Simples:

1. **No EasyPanel**
   ```
   Vá em: "Configurações" → "SSL/TLS"
   Clique em: "Gerar Certificado SSL"
   Digite: xcloudiptv.com.br
   Aguarde: 2-3 minutos
   ```

2. **Teste o SSL**
   - Abra: `https://xcloudiptv.com.br`
   - Deve aparecer o cadeado verde! 🔒

---

## ☁️ Passo 5: Configurar Cloudflare (15 minutos)

### Por que usar Cloudflare?
- 🚀 Deixa seu site mais rápido
- 🛡️ Protege contra ataques
- 📊 Mostra estatísticas de visitas
- 💰 É grátis!

### Passo a Passo Visual:

1. **Acesse Cloudflare.com**
   ```
   Crie uma conta (é grátis)
   Clique em: "Add Site" ou "+ Adicionar Site"
   Digite: xcloudiptv.com.br
   ```

2. **Escolha o Plano**
   ```
   Selecione: "Free" (Gratuito)
   Clique em: "Continuar"
   ```

3. **Configure os DNS**
   ```
   Type: A
   Name: @ (ou xcloudiptv.com.br)
   IPv4: IP_DO_SEU_SERVIDOR
   Proxy: ☑️ (nuvens laranja)
   
   Type: A
   Name: www
   IPv4: IP_DO_SEU_SERVIDOR
   Proxy: ☑️ (nuvens laranja)
   ```

4. **Mude os Nameservers**
   ```
   Cloudflare vai te dar 2 endereços como:
   - bob.ns.cloudflare.com
   - maria.ns.cloudflare.com
   
   Vá no seu provedor de domínio e troque os DNS
   ```

---

## 🧪 Passo 6: Testar Tudo (5 minutos)

### Checklist Final:

1. **Teste o Site**
   ```
   Digite: xcloudiptv.com.br
   Resultado esperado: Seu site abre!
   ```

2. **Teste o SSL**
   ```
   Digite: https://xcloudiptv.com.br
   Resultado esperado: Cadeado verde aparece!
   ```

3. **Teste o Cloudflare**
   ```
   Digite: xcloudiptv.com.br
   Resultado esperado: Site carrega rápido!
   ```

4. **Teste o Formulário**
   ```
   Preencha o formulário de teste
   Resultado esperado: Dados vão pro webhook!
   ```

---

## 🚨 Problemas Comuns e Soluções

### Problema 1: "Site não carrega"
**Solução:**
```bash
# Verifique se o serviço está rodando
docker ps

# Se não estiver, reinicie
docker-compose up -d
```

### Problema 2: "SSL não funciona"
**Solução:**
```bash
# Verifique os logs
docker logs certbot

# Tente gerar novo certificado
certbot certonly --webroot -w /var/www/html -d xcloudiptv.com.br
```

### Problema 3: "Erro 502 Bad Gateway"
**Solução:**
```bash
# Verifique se o Node.js está rodando
docker logs xcloud-site

# Reinicie o serviço
docker-compose restart
```

---

## 📞 Suporte: O que fazer se der erro?

### Passo 1: Não entre em pânico! 😊
### Passo 2: Verifique os logs
```bash
# Ver logs do Docker
docker logs xcloud-site

# Ver logs do proxy
docker logs nginx
```

### Passo 3: Me mande o erro
```
Copie o erro completo e me envie
Inclua: O que você estava fazendo quando deu erro
```

---

## 🎯 Resumo em 3 Passos

1. **Criar site no EasyPanel** → 10 min
2. **Enviar arquivos** → 15 min  
3. **Configurar SSL + Cloudflare** → 25 min

**Total: 50 minutos** ⏰

---

## 🎉 Parabéns!

Se você seguiu todos os passos, seu site XCloud IPTV agora está:
- ✅ Online e funcionando
- ✅ Seguro com SSL
- ✅ Protegido por Cloudflare
- ✅ Pronto para receber clientes!

### Próximos Passos:
1. Teste o formulário de teste grátis
2. Verifique se os webhooks estão funcionando
3. Comece a divulgar seu site!

Precisando de ajuda, é só chamar! 🚀