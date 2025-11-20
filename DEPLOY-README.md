# 🚀 Deploy XCloud IPTV - xcloudiptv.com.br

## 📋 Instruções Rápidas de Deploy na VPS

### ✅ Pré-requisitos
- VPS com EasyPanel instalado
- Domínio `xcloudiptv.com.br` apontando para VPS
- Acesso root à VPS

### 🚀 Opção 1: Script Automatizado (Recomendado)

```bash
# Conectar na VPS
ssh root@sua-vps

# Baixar e executar script
curl -O https://raw.githubusercontent.com/seu-usuario/xcloud-iptv/main/deploy-xcloudiptv.sh
chmod +x deploy-xcloudiptv.sh
./deploy-xcloudiptv.sh
```

### ⚙️ Opção 2: EasyPanel Manual

#### 1. Criar Projeto no EasyPanel
```
Nome: xcloud-iptv
Tipo: Node.js Application
Repositório: [sua-url-git]
Branch: main
Build: npm run build
Start: npm start
```

#### 2. Configurar Variáveis de Ambiente
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br
```

#### 3. Recursos (Resources)
```
Memory: 1GB
CPU: 0.5 cores
Storage: 5GB
Port: 3000
```

### 📊 Verificar Deploy

```bash
# Testar site
curl -I https://xcloudiptv.com.br

# Verificar health check
curl https://xcloudiptv.com.br/api/health

# Testar formulário
curl -X POST https://xcloudiptv.com.br/api/teste \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","email":"test@xcloudiptv.com.br","telefone":"(11) 99999-9999"}'
```

### 🔍 Troubleshooting

#### Build falhando:
```bash
# Limpar cache
docker system prune -a
rm -rf .next node_modules
npm install
npm run build
```

#### Porta 3000 em uso:
```bash
netstat -tulpn | grep 3000
kill -9 [PID]
```

#### Ver logs:
```bash
docker logs -f xcloud-iptv
easypanel logs xcloud-iptv -f
```

### 🔐 SSL Let's Encrypt

O EasyPanel configura automaticamente, mas se precisar manual:
```bash
certbot --nginx -d xcloudiptv.com.br -d www.xcloudiptv.com.br
```

### 📈 Monitoramento

#### Health Check
- URL: `https://xcloudiptv.com.br/api/health`
- Intervalo: 30s
- Timeout: 10s

#### Performance Targets
- Load Time: < 2s
- SSL Grade: A+
- Uptime: 99.9%

### 🎯 Próximos Passos

1. **Google Search Console**
   ```
   https://search.google.com/search-console
   Adicionar propriedade: xcloudiptv.com.br
   ```

2. **Google Analytics**
   ```
   https://analytics.google.com
   Criar propriedade para xcloudiptv.com.br
   ```

3. **Testar Tudo**
   - [ ] Home carregando
   - [ ] Formulário funcionando
   - [ ] SSL válido
   - [ ] Mobile responsive
   - [ ] Webhook respondendo

### 📞 Suporte

Se encontrar problemas:
1. Verificar logs do EasyPanel
2. Testar build local primeiro
3. Verificar DNS propagation
4. Confirmar portas liberadas

---

**URL Final:** https://xcloudiptv.com.br
**Tempo estimado:** 15-30 minutos
**Complexidade:** Fácil (EasyPanel automatiza 90%)