#!/bin/bash

# DEPLOY XCLOUD IPTV DIRETO NA VPS
# Execute: bash deploy-vps-direto.sh

echo "🚀 Iniciando deploy XCloud IPTV na VPS..."

# Parar e remover container antigo se existir
echo "📦 Parando container antigo..."
docker stop xcloud-iptv-app 2>/dev/null || true
docker rm xcloud-iptv-app 2>/dev/null || true

# Build da imagem
echo "🔨 Build da imagem Docker..."
cd /etc/easypanel/projects/sites/xcloudiptv/code
docker build -t xcloud-iptv:latest .

# Rodar container com configurações corretas
echo "🐳 Iniciando container..."
docker run -d \
  --name xcloud-iptv-app \
  --restart unless-stopped \
  -p 3010:3010 \
  -e NODE_ENV=production \
  -e PORT=3010 \
  -e HOST=0.0.0.0 \
  -e NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br \
  xcloud-iptv:latest

# Verificar se está rodando
echo "✅ Verificando status..."
sleep 10
docker ps | grep xcloud-iptv-app

# Testar health check
echo "🔍 Testando health check..."
curl -f http://localhost:3010/api/health || echo "⚠️ Health check falhou"

echo "🏁 Deploy concluído!"
echo "Acesse: http://SEU_IP:3010"