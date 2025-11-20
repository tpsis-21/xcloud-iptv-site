# 🚀 Comandos Prontos - Só Copiar e Colar!

## 📋 ANTES DE COMEÇAR - O que você precisa:

✅ **IP do seu servidor VPS** (exemplo: 123.45.67.89)  
✅ **Senha do servidor** (seu provedor enviou por email)  
✅ **Domínio** xcloudiptv.com.br (já comprou?)  
✅ **Acesso ao PowerShell** (Windows) ou Terminal (Mac/Linux)  

---

## 🔑 PASSO 1: Entrar no Servidor (Copie esta linha)

```bash
ssh root@123.45.67.89
```

> ⚠️ **TROQUE** `123.45.67.89` pelo **SEU IP real**

---

## 🏠 PASSO 2: Criar Pastas (Copie tudo de uma vez)

```bash
mkdir -p /root/xcloud-iptv/site
cd /root/xcloud-iptv/site
git init --bare
```

---

## 📁 PASSO 3: Enviar Seu Site do Computador

### 📍 **NO SEU COMPUTADOR** - Abra PowerShell/Terminal:

```bash
# Entrar na pasta do site (ajuste o caminho)
cd C:\Users\pc-tp\Documents\SITE XCLOUDTV

# Enviar tudo pro servidor
scp -r . root@123.45.67.89:/root/xcloud-iptv/site/
```

> ⚠️ **TROQUE** `123.45.67.89` pelo **SEU IP real**

---

## 🐳 PASSO 4: Criar Docker Compose (Copie tudo)

```bash
cd /root/xcloud-iptv
cat > docker-compose.yml << 'EOF'
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
EOF
```

---

## 🚀 PASSO 5: Ligar o Site (Copie estas 3 linhas)

```bash
docker-compose up -d
docker ps
```

✅ **Se aparecer algo verde, está funcionando!**

---

## 🔒 PASSO 6: Instalar SSL (Certificado Seguro)

```bash
# Instalar Certbot (gerador de SSL)
docker run -it --rm --name certbot \
  -v "/etc/letsencrypt:/etc/letsencrypt" \
  -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
  -v "/var/www/html:/var/www/html" \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/html \
  --email seu-email@gmail.com \
  --agree-tos \
  --no-eff-email \
  -d xcloudiptv.com.br \
  -d www.xcloudiptv.com.br
```

> ⚠️ **TROQUE** `seu-email@gmail.com` pelo **SEU EMAIL real**

---

## 🌐 PASSO 7: Configurar Nginx (Proxy)

```bash
# Criar configuração do nginx
cat > /root/xcloud-iptv/nginx.conf << 'EOF'
server {
    listen 80;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 443 ssl http2;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    ssl_certificate /etc/letsencrypt/live/xcloudiptv.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xcloudiptv.com.br/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
```

---

## 🔄 PASSO 8: Ligar Nginx (Copie tudo)

```bash
docker run -d --name nginx-proxy \
  -p 80:80 -p 443:443 \
  -v /root/xcloud-iptv/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  --restart always \
  nginx:alpine
```

---

## 🧪 PASSO 9: Testar Tudo

### Teste 1: Site está funcionando?
```bash
curl http://localhost:3001
```
✅ **Deve aparecer HTML do seu site**

### Teste 2: Nginx está funcionando?
```bash
curl http://xcloudiptv.com.br
```
✅ **Deve aparecer HTML do seu site**

### Teste 3: SSL está funcionando?
```bash
curl https://xcloudiptv.com.br
```
✅ **Deve aparecer HTML do seu site (sem erros)**

---

## 📊 PASSO 10: Ver Logs (Se der erro)

```bash
# Ver logs do site
docker logs xcloud-site

# Ver logs do nginx
docker logs nginx-proxy

# Ver logs do sistema
journalctl -f
```

---

## 🔄 COMANDOS ÚTEIS - Salve estas gemas:

```bash
# Reiniciar tudo
docker-compose restart

# Ver o que está rodando
docker ps

# Parar tudo
docker-compose down

# Atualizar site (depois de mudanças)
cd /root/xcloud-iptv/site && git pull
docker-compose restart
```

---

## 🎯 CHECKLIST FINAL - Copie e cole no WhatsApp quando terminar:

```
✅ Deploy XCloud IPTV Completo!
📍 Site: https://xcloudiptv.com.br
🔒 SSL: Ativado
☁️ Cloudflare: Configurado
📧 Webhook: Funcionando
⏰ Tempo total: [X] minutos
🎯 Status: 🟢 ONLINE!
```

---

## 🆘 SE DER ERRO - Me mande isso:

```bash
# Copie o erro completo
docker logs xcloud-site > erro.txt
docker logs nginx-proxy >> erro.txt

# Me envie o arquivo erro.txt
```

**Pronto! Só copiar, colar e mandar "funcionou!" 🚀**