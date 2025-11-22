#!/bin/bash

# DEPLOY XCLOUD IPTV - VPS DIRETO
# Execute este script na sua VPS

echo "🚀 Iniciando deploy XCloud IPTV na VPS..."

# Verificar se está no diretório certo
if [ ! -d "/etc/easypanel/projects/sites/xcloudiptv/code" ]; then
    echo "❌ Diretório do projeto não encontrado!"
    echo "Criando estrutura..."
    mkdir -p /etc/easypanel/projects/sites/xcloudiptv/code
    cd /etc/easypanel/projects/sites/xcloudiptv/code
    
    # Clonar repositório se não existir
    echo "📥 Clonando repositório..."
    git clone https://github.com/tpsis-21/xcloud-iptv-site.git .
else
    cd /etc/easypanel/projects/sites/xcloudiptv/code
    echo "📥 Atualizando repositório..."
    git pull origin main
fi

# Build da imagem Docker
echo "🔨 Build Docker image..."
docker build -t xcloud-iptv:latest .

# Parar serviço antigo do EasyPanel se existir
echo "🛑 Parando serviço antigo..."
docker service rm xcloud-iptv-app 2>/dev/null || true

# Criar serviço Docker Swarm
echo "🐳 Criando serviço Docker Swarm..."
docker service create \
  --name xcloud-iptv-app \
  --network easypanel-sites \
  --publish 3010:3010 \
  --env NODE_ENV=production \
  --env PORT=3010 \
  --env HOST=0.0.0.0 \
  --env NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.xcloud.rule=Host(\`xcloudiptv.com.br\`)" \
  --label "traefik.http.routers.xcloud.entrypoints=websecure" \
  --label "traefik.http.routers.xcloud.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.xcloud.loadbalancer.server.port=3010" \
  --restart-condition=any \
  xcloud-iptv:latest

# Verificar status
echo "⏳ Aguardando serviço iniciar..."
sleep 30

echo "✅ Verificando status do serviço..."
docker service ls | grep xcloud-iptv-app
docker service ps xcloud-iptv-app

# Testar conexão
echo "🧪 Testando conexão..."
curl -f http://localhost:3010/api/health && echo "✅ Serviço funcionando!" || echo "⚠️ Verificar logs"

echo "🏁 Deploy concluído!"
echo ""
echo "📍 INFORMAÇÕES:"
echo "Serviço: xcloud-iptv-app"
echo "Porta: 3010"
echo "Network: easypanel-sites"
echo "SSL: Automático via Traefik"
echo ""
echo "🔗 URLs:"
echo "Local: http://localhost:3010"
echo "Domínio: https://xcloudiptv.com.br (após DNS configurado)"