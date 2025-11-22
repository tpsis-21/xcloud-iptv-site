#!/bin/bash

# INSTALAÇÃO COMPLETA XCLOUD IPTV NA VPS
# Execute na VPS: bash setup-xcloud-vps.sh

echo "🚀 Iniciando instalação completa XCloud IPTV..."

# Atualizar sistema
echo "📦 Atualizando sistema..."
apt update && apt upgrade -y

# Instalar Docker se não tiver
if ! command -v docker &> /dev/null; then
    echo "🐳 Instalando Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    bash get-docker.sh
    systemctl enable docker
    systemctl start docker
fi

# Instalar nginx se não tiver
if ! command -v nginx &> /dev/null; then
    echo "🌐 Instalando nginx..."
    apt install nginx -y
    systemctl enable nginx
    systemctl start nginx
fi

# Instalar certbot para SSL
if ! command -v certbot &> /dev/null; then
    echo "🔒 Instalando certbot..."
    apt install certbot python3-certbot-nginx -y
fi

# Criar diretório do projeto
mkdir -p /opt/xcloud-iptv
cd /opt/xcloud-iptv

# Clonar repositório (se não tiver)
if [ ! -d "xcloud-iptv-site" ]; then
    echo "📥 Clonando repositório..."
    git clone https://github.com/tpsis-21/xcloud-iptv-site.git
fi

cd xcloud-iptv-site

# Build Docker
echo "🔨 Build Docker image..."
docker build -t xcloud-iptv:latest .

# Parar container antigo
echo "🛑 Parando container antigo..."
docker stop xcloud-iptv-app 2>/dev/null || true
docker rm xcloud-iptv-app 2>/dev/null || true

# Rodar container
echo "🐳 Iniciando container..."
docker run -d \
  --name xcloud-iptv-app \
  --restart unless-stopped \
  -p 127.0.0.1:3010:3010 \
  -e NODE_ENV=production \
  -e PORT=3010 \
  -e HOST=0.0.0.0 \
  -e NEXT_PUBLIC_SITE_URL=https://xcloudiptv.com.br \
  xcloud-iptv:latest

# Copiar config nginx
echo "⚙️ Configurando nginx..."
cp nginx-xcloudiptv.conf /etc/nginx/sites-available/xcloudiptv.com.br
ln -sf /etc/nginx/sites-available/xcloudiptv.com.br /etc/nginx/sites-enabled/

# Testar nginx
echo "🔍 Testando nginx..."
nginx -t && systemctl reload nginx

# Verificar status
echo "✅ Verificando status..."
sleep 10
docker ps | grep xcloud-iptv-app

# Testar localmente
echo "🧪 Testando aplicação..."
curl -f http://127.0.0.1:3010/api/health && echo "✅ App funcionando!" || echo "⚠️ App com problema"

echo "🏁 Instalação concluída!"
echo "Acesse: http://SEU_IP_VPS"
echo "Domínio: xcloudiptv.com.br"