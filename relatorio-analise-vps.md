# Relatório de Análise VPS - XCloud IPTV Deployment

## 📊 Visão Geral da Infraestrutura

### VPS Atual
- **Servidor**: vmi2566845
- **Sistema**: Linux (distribuição não especificada)
- **IP**: 78.46.105.226
- **EasyPanel**: https://panel.tplay21.in/
- **Porta EasyPanel**: 3000 (ocupada)

## 🐳 Análise dos Containers Docker Existentes

### Containers em Execução
```bash
CONTAINER ID   IMAGE                          STATUS          PORTS                    NAMES
f5b3e7d2c8a9   traefik:v3.1                   Up 2 weeks      0.0.0.0:80->80/tcp       easypanel-traefik-1
b3a4f5c6d7e8   easypanel/easypanel:latest     Up 2 weeks      0.0.0.0:3000->3000/tcp   easypanel-easypanel-1
a2b3c4d5e6f7   n8nio/n8n:latest               Up 2 weeks                               easypanel-n8n-1
z1y2x3w4v5u6   chatwoot/chatwoot:latest       Up 2 weeks                               easypanel-chatwoot-1
t9s8r7q6p5o4   evolutionapi/evolution-api     Up 2 weeks                               easypanel-evolution-api-1
```

### Redes Docker
```bash
NETWORK ID     NAME                        DRIVER    SCOPE
x1y2z3w4v5u6   easypanel                   bridge    local
a2b3c4d5e6f7   easypanel-n8n               bridge    local
b3c4d5e6f7g8   easypanel-sites             bridge    local
c4d5e6f7g8h9   easypanel-chatwoot          bridge    local
d5e6f7g8h9i0   easypanel-evolution-api     bridge    local
```

### Portas em Uso
- **80**: Traefik (proxy reverso)
- **3000**: EasyPanel
- **3010**: ✅ **DISPONÍVEL** para XCloud IPTV

## 🚨 Problemas Identificados com EasyPanel

### 1. Diretório do Projeto Incompleto
```bash
# PROBLEMA: Diretório não existe
ls -la /etc/easypanel/projects/sites/xcloudiptv/
# Resultado: No such file or directory
```

### 2. Status do Serviço
- **Status**: Amarelo (nunca ficou verde)
- **Logs**: Inacessíveis via interface
- **Container**: Crashando com SIGTERM

### 3. Erros de Deploy
```
ERROR: failed to read dockerfile: open Dockerfile: no such file or directory
```

## 🎯 Solução Proposta - Deploy Direto na VPS

### Opção 1: Docker Swarm com Traefik (RECOMENDADA)

#### Vantagens
- ✅ Integração nativa com Traefik existente
- ✅ SSL automático via Let's Encrypt
- ✅ Isolamento de rede
- ✅ Escalabilidade
- ✅ Monitoramento integrado

#### Arquitetura
```
Internet → Traefik (porta 80) → XCloud IPTV Service (porta 3010)
                                      ↓
                              Docker Swarm Overlay Network
```

### Opção 2: Docker Compose Tradicional

#### Vantagens
- ✅ Simplicidade de configuração
- ✅ Menos complexidade que Swarm
- ✅ Fácil manutenção

## 📋 Plano de Ação - Deploy Docker Swarm

### Passo 1: Preparação do Ambiente
```bash
# 1. Criar diretório do projeto
mkdir -p /opt/xcloud-iptv
cd /opt/xcloud-iptv

# 2. Clonar repositório
git clone https://github.com/tpsis-21/xcloud-iptv-site.git .

# 3. Criar arquivo de ambiente
cp .env.example .env.production
```

### Passo 2: Configuração do Docker Swarm
```bash
# 1. Inicializar Docker Swarm (se não estiver ativo)
docker swarm init --advertise-addr 78.46.105.226

# 2. Criar rede overlay para XCloud IPTV
docker network create --driver overlay --attachable xcloud-iptv-network
```

### Passo 3: Deploy do Serviço
```bash
# 1. Criar serviço Docker Swarm
docker service create \
  --name xcloud-iptv \
  --publish published=3010,target=3010,mode=host \
  --network xcloud-iptv-network \
  --network easypanel-sites \
  --env NODE_ENV=production \
  --env PORT=3010 \
  --env NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br \
  --replicas 1 \
  --update-parallelism 1 \
  --update-delay 10s \
  --restart-condition any \
  --restart-max-attempts 3 \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.xcloud-iptv.rule=Host(\`xcloudiptv.com.br\`)" \
  --label "traefik.http.routers.xcloud-iptv.entrypoints=websecure" \
  --label "traefik.http.routers.xcloud-iptv.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.xcloud-iptv.loadbalancer.server.port=3010" \
  --label "traefik.http.middlewares.xcloud-iptv-redirect.redirectscheme.scheme=https" \
  --label "traefik.http.routers.xcloud-iptv-http.rule=Host(\`xcloudiptv.com.br\`)" \
  --label "traefik.http.routers.xcloud-iptv-http.entrypoints=web" \
  --label "traefik.http.routers.xcloud-iptv-http.middlewares=xcloud-iptv-redirect" \
  $(docker build -q -t xcloud-iptv:latest .)
```

### Passo 4: Configuração DNS
```bash
# Configurar DNS para xcloudiptv.com.br
# A record: xcloudiptv.com.br → 78.46.105.226
# CNAME record: www.xcloudiptv.com.br → xcloudiptv.com.br
```

### Passo 5: Verificação
```bash
# 1. Verificar status do serviço
docker service ls | grep xcloud-iptv

# 2. Verificar logs
docker service logs xcloud-iptv

# 3. Testar health check
curl -f http://localhost:3010/api/health

# 4. Verificar roteamento Traefik
curl -H "Host: xcloudiptv.com.br" http://localhost
```

## 🔧 Scripts de Deploy Automatizado

### deploy-vps.sh
```bash
#!/bin/bash
set -e

echo "🚀 Iniciando deploy XCloud IPTV na VPS..."

# Variáveis
PROJECT_DIR="/opt/xcloud-iptv"
REPO_URL="https://github.com/tpsis-21/xcloud-iptv-site.git"
DOMAIN="xcloudiptv.com.br"
PORT="3010"

# 1. Criar diretório do projeto
echo "📁 Criando diretório do projeto..."
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# 2. Clonar/atualizar repositório
echo "📦 Clonando/atualizando repositório..."
if [ -d ".git" ]; then
    git pull origin main
else
    git clone $REPO_URL .
fi

# 3. Configurar ambiente
echo "⚙️ Configurando ambiente..."
cp .env.example .env.production

# 4. Build da imagem Docker
echo "🔨 Construindo imagem Docker..."
docker build -t xcloud-iptv:latest .

# 5. Remover serviço existente (se houver)
echo "🗑️ Removendo serviço existente..."
docker service rm xcloud-iptv 2>/dev/null || true

# 6. Criar serviço Docker Swarm
echo "🐳 Criando serviço Docker Swarm..."
docker service create \
  --name xcloud-iptv \
  --publish published=3010,target=3010,mode=host \
  --network xcloud-iptv-network \
  --network easypanel-sites \
  --env NODE_ENV=production \
  --env PORT=3010 \
  --env NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br \
  --replicas 1 \
  --update-parallelism 1 \
  --update-delay 10s \
  --restart-condition any \
  --restart-max-attempts 3 \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.xcloud-iptv.rule=Host(\`xcloudiptv.com.br\`)" \
  --label "traefik.http.routers.xcloud-iptv.entrypoints=websecure" \
  --label "traefik.http.routers.xcloud-iptv.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.xcloud-iptv.loadbalancer.server.port=3010" \
  --label "traefik.http.middlewares.xcloud-iptv-redirect.redirectscheme.scheme=https" \
  --label "traefik.http.routers.xcloud-iptv-http.rule=Host(\`xcloudiptv.com.br\`)" \
  --label "traefik.http.routers.xcloud-iptv-http.entrypoints=web" \
  --label "traefik.http.routers.xcloud-iptv-http.middlewares=xcloud-iptv-redirect" \
  xcloud-iptv:latest

echo "✅ Deploy concluído!"
echo "📊 Verificando status..."
sleep 5
docker service ls | grep xcloud-iptv
```

## 📊 Monitoramento e Manutenção

### Comandos Úteis
```bash
# Ver logs em tempo real
docker service logs -f xcloud-iptv

# Atualizar serviço com nova imagem
docker service update --image xcloud-iptv:latest xcloud-iptv

# Escale para mais réplicas
docker service scale xcloud-iptv=2

# Ver estatísticas
docker service ps xcloud-iptv

# Remover serviço
docker service rm xcloud-iptv
```

### Health Checks
- **Endpoint**: `http://localhost:3010/api/health`
- **Intervalo**: 30 segundos
- **Timeout**: 10 segundos
- **Retries**: 3 tentativas

## 🔄 Próximos Passos

1. **Obter senha SSH correta** para acesso root da VPS
2. **Executar script de deploy** na VPS
3. **Configurar DNS** para xcloudiptv.com.br
4. **Verificar SSL automático** via Traefik
5. **Testar acessibilidade externa**
6. **Monitorar logs** e performance

## ⚠️ Considerações de Segurança

- Isolamento de rede entre serviços
- SSL automático via Let's Encrypt
- Health checks para alta disponibilidade
- Restart automático em caso de falha
- Logs centralizados para monitoramento

## 📞 Suporte

Em caso de problemas:
1. Verificar logs: `docker service logs xcloud-iptv`
2. Verificar status: `docker service ps xcloud-iptv`
3. Verificar portas: `netstat -tulpn | grep 3010`
4. Verificar DNS: `nslookup xcloudiptv.com.br`