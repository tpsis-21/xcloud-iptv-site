# 🚀 Guia de Deploy - XCloud IPTV na VPS com EasyPanel

## 📋 Pré-requisitos

### VPS Configurada
- **Sistema:** Ubuntu 20.04/22.04 LTS
- **RAM:** Mínimo 2GB (recomendado 4GB)
- **CPU:** 2 vCPUs
- **Storage:** 20GB SSD
- **EasyPanel:** Já instalado e configurado

### Domínio e SSL
- Domínio configurado apontando para VPS
- Certificado SSL (Let's Encrypt via EasyPanel)
- Domínio principal: `xcloudiptv.com.br`

## 🔧 Configuração do Ambiente

### 1. Preparar EasyPanel

#### Acessar Dashboard
```bash
# URL do EasyPanel
https://sua-vps-ip:3000
# ou
https://seu-dominio:3000 (se configurado)
```

#### Criar Novo Projeto
1. Clique em **"New Project"**
2. Nome: `xcloud-iptv`
3. Tipo: **Node.js Application**
4. Environment: **Production**

### 2. Configurar Variáveis de Ambiente

#### Variáveis Obrigatórias
```env
# Application
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br

# Next.js Optimization
NEXT_TELEMETRY_DISABLED=1
NEXT_OPTIMIZE_FONTS=true
NEXT_OPTIMIZE_IMAGES=true

# Security
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

#### Variáveis Opcionais (Analytics)
```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Hotjar (opcional)
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX

# Facebook Pixel (opcional)
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 📦 Build e Deploy

### 3. Preparar Aplicação Local

#### Build Local (Recomendado)
```bash
# Na máquina local
cd SITE-XCLOUDTV

# Limpar cache
rm -rf .next node_modules package-lock.json

# Instalar dependências
npm install --production=false

# Build otimizado
npm run build

# Testar build local
npm start
```

#### Verificar Build
```bash
# Testar se está funcionando
curl http://localhost:3000
# Deve retornar HTML da página inicial
```

### 4. Upload para VPS

#### Opção A: Via Git (Recomendado)
```bash
# Criar repositório no GitHub/GitLab
git init
git add .
git commit -m "Initial XCloud IPTV deployment"
git remote add origin https://github.com/seu-usuario/xcloud-iptv.git
git push -u origin main
```

#### Opção B: Via SCP/RSYNC
```bash
# Upload direto para VPS
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ./ root@sua-vps:/var/www/xcloud-iptv/
```

### 5. Configurar EasyPanel Deployment

#### No EasyPanel Dashboard

1. **Source Configuration:**
   ```yaml
   Repository: https://github.com/seu-usuario/xcloud-iptv.git
   Branch: main
   Build Command: npm run build
   Start Command: npm start
   ```

2. **Environment Variables:**
   ```yaml
   Environment:
     NODE_ENV: production
     PORT: 3000
     NEXT_PUBLIC_SITE_URL: https://xcloudtv.com.br
   ```

3. **Resource Limits:**
   ```yaml
   Memory: 1GB
   CPU: 0.5 cores
   Storage: 5GB
   ```

4. **Port Configuration:**
   ```yaml
   Internal Port: 3000
   External Port: Auto-assign (3000+)
   Protocol: HTTP
   ```

## 🔐 Configuração de Proxy Reverso

### 6. Nginx Proxy (EasyPanel gerencia automaticamente)

#### Se precisar configurar manualmente:
```nginx
server {
    listen 80;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    # SSL Configuration (EasyPanel gerencia)
    ssl_certificate /etc/nginx/ssl/xcloudiptv.com.br.crt;
    ssl_certificate_key /etc/nginx/ssl/xcloudiptv.com.br.key;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Proxy para aplicação Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000/_next/static/;
        proxy_cache_valid 200 1y;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Images optimization
    location /images/ {
        proxy_pass http://localhost:3000/images/;
        proxy_cache_valid 200 1y;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔄 Deployment Process

### 7. Deploy Automatizado

#### EasyPanel CI/CD
```bash
# EasyPanel automaticamente:
1. Clona repositório
2. Instala dependências
3. Roda build
4. Inicia aplicação
5. Configura proxy/nginx
6. Aplica SSL (Let's Encrypt)
```

#### Verificar Deploy
```bash
# Logs do EasyPanel
docker logs -f xcloud-iptv-container

# Verificar status
curl -I https://xcloudiptv.com.br
# HTTP/2 200 OK
```

## 📊 Monitoramento e Manutenção

### 8. Health Checks

#### EasyPanel Health Check
```yaml
Health Check:
  Path: /api/health
  Interval: 30s
  Timeout: 10s
  Retries: 3
  Start Period: 60s
```

#### Criar endpoint de health
```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
}
```

### 9. Backup Strategy

#### EasyPanel Backups
```yaml
# Configurar no EasyPanel
Backup Schedule: Daily 3AM
Retention: 7 days
Storage: Local + External (S3 opcional)
Include: Database, uploads, config
```

#### Manual Backup
```bash
# Backup dos arquivos
tar -czf xcloud-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  /var/www/xcloud-iptv/

# Backup do banco (se houver)
# mysqldump -u root xcloud_db > backup.sql
```

## 🚨 Troubleshooting

### 10. Problemas Comuns

#### Build Falhando
```bash
# Limpar cache completo
rm -rf .next node_modules package-lock.json
npm install
npm run build

# Verificar logs
docker logs xcloud-iptv-container | tail -100
```

#### Porta 3000 em uso
```bash
# Verificar processos
netstat -tulpn | grep 3000
ps aux | grep node

# Matar processo
kill -9 <PID>
```

#### SSL Certificate Issues
```bash
# Verificar certificado
openssl x509 -in /etc/ssl/certs/xcloudiptv.com.br.crt -text -noout

# Renovar Let's Encrypt
certbot renew --dry-run
```

#### Memory Issues
```bash
# Verificar uso de memória
free -h
docker stats

# Aumentar limite no EasyPanel
Memory Limit: 2GB → 4GB
```

## 🔧 Comandos Úteis

### 11. Comandos de Deploy Rápido

```bash
# Status do serviço
easypanel status xcloud-iptv

# Restart service
easypanel restart xcloud-iptv

# Ver logs em tempo real
easypanel logs xcloud-iptv -f

# Update deployment
easypanel deploy xcloud-iptv --force

# Shell access
easypanel exec xcloud-iptv /bin/bash
```

### 12. Performance Monitoring

```bash
# Monitorar performance
htop
docker stats

# Analisar logs
grep -i error /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Verificar conexões
ss -tuln | grep 3000
netstat -an | grep :3000
```

## 🎯 Verificação Final

### 13. Checklist de Deploy

- [ ] Aplicação rodando na porta 3000
- [ ] Nginx proxy configurado
- [ ] SSL certificate aplicado
- [ ] Domain apontando corretamente
- [ ] Health check respondendo
- [ ] Logs sem erros críticos
- [ ] Performance aceitável (<2s load)
- [ ] Mobile responsive funcionando
- [ ] Forms e webhooks operacionais
- [ ] Analytics tracking ativo

### 14. Testes Pós-Deploy

```bash
# Testar todas as páginas principais
curl -s -o /dev/null -w "%{http_code} %{time_total}s" https://xcloudiptv.com.br/
curl -s -o /dev/null -w "%{http_code} %{time_total}s" https://xcloudiptv.com.br/planos-xcloud-iptv
curl -s -o /dev/null -w "%{http_code} %{time_total}s" https://xcloudiptv.com.br/teste-gratis-xcloud-iptv
curl -s -o /dev/null -w "%{http_code} %{time_total}s" https://xcloudiptv.com.br/termos-de-uso

# Testar formulário (simulação)
curl -X POST https://xcloudiptv.com.br/api/teste \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","email":"test@email.com","telefone":"(11) 99999-9999"}'
```

## 📞 Suporte e Escalabilidade

### 15. Scaling Considerations

#### Vertical Scaling (EasyPanel)
```yaml
# Aumentar recursos via dashboard
Memory: 1GB → 4GB
CPU: 0.5 → 2 cores
Storage: 5GB → 20GB
```

#### Horizontal Scaling (Futuro)
```yaml
# Load balancer + múltiplas instâncias
Instances: 3
Load Balancer: Nginx/HAProxy
Database: External (PostgreSQL)
Cache: Redis
```

### 16. Monitoring Setup

#### EasyPanel + External Tools
```bash
# Uptime monitoring (UptimeRobot/Pingdom)
# Application monitoring (Sentry/New Relic)
# Log aggregation (ELK stack)
# Performance monitoring (GTmetrix)
```

---

## 🎉 Deploy Concluído!

Seu site XCloud IPTV agora está rodando em produção com:
- ✅ SSL automático via Let's Encrypt
- ✅ Proxy reverso otimizado
- ✅ Health checks e monitoramento
- ✅ Backup automático
- ✅ Performance otimizada

**URL Final:** https://xcloudiptv.com.br

**Próximos passos:** Adicionar ao Google Search Console, Analytics e monitorar performance.