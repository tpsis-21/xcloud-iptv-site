#!/bin/bash

# 🚀 Script de Deploy - XCloud IPTV (xcloudiptv.com.br)
# Executar na VPS com EasyPanel instalado

set -e  # Exit on error

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações
PROJECT_NAME="xcloud-iptv"
DOMAIN="xcloudiptv.com.br"
REPO_URL=""  # Preencher com URL do repositório
PORT="3000"

# Funções de utilidade
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar dependências
check_dependencies() {
    log_info "Verificando dependências..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker não está instalado"
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        log_error "Git não está instalado"
        exit 1
    fi
    
    log_success "Dependências verificadas"
}

# Criar estrutura do projeto
create_project_structure() {
    log_info "Criando estrutura do projeto..."
    
    mkdir -p /var/www/${PROJECT_NAME}
    cd /var/www/${PROJECT_NAME}
    
    # Criar Dockerfile
    cat > Dockerfile << EOF
FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta
EXPOSE ${PORT}

# Comando para iniciar
CMD ["npm", "start"]
EOF

    # Criar docker-compose.yml
    cat > docker-compose.yml << EOF
version: '3.8'

services:
  ${PROJECT_NAME}:
    build: .
    container_name: ${PROJECT_NAME}
    restart: unless-stopped
    ports:
      - "${PORT}:${PORT}"
    environment:
      - NODE_ENV=production
      - PORT=${PORT}
      - NEXT_PUBLIC_SITE_URL=https://${DOMAIN}
    volumes:
      - ./logs:/app/logs
    networks:
      - ${PROJECT_NAME}-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:${PORT}/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

networks:
  ${PROJECT_NAME}-network:
    driver: bridge
EOF

    log_success "Estrutura do projeto criada"
}

# Configurar Nginx
setup_nginx() {
    log_info "Configurando Nginx..."
    
    # Criar configuração Nginx
    cat > /etc/nginx/sites-available/${PROJECT_NAME} << EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    
    # Redirect HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${DOMAIN} www.${DOMAIN};
    
    # SSL Configuration - Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Proxy para aplicação Next.js
    location / {
        proxy_pass http://localhost:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:${PORT}/_next/static/;
        proxy_cache_valid 200 1y;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Images optimization
    location /images/ {
        proxy_pass http://localhost:${PORT}/images/;
        proxy_cache_valid 200 1y;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

    # Habilitar site
    ln -sf /etc/nginx/sites-available/${PROJECT_NAME} /etc/nginx/sites-enabled/
    
    log_success "Configuração Nginx criada"
}

# Obter certificado SSL
setup_ssl() {
    log_info "Configurando SSL com Let's Encrypt..."
    
    if ! command -v certbot &> /dev/null; then
        log_info "Instalando Certbot..."
        apt update
        apt install -y certbot python3-certbot-nginx
    fi
    
    # Obter certificado
    certbot --nginx -d ${DOMAIN} -d www.${DOMAIN} --non-interactive --agree-tos -m admin@${DOMAIN}
    
    # Configurar renovação automática
    echo "0 3 * * * root certbot renew --quiet --nginx" >> /etc/crontab
    
    log_success "SSL configurado com sucesso"
}

# Clonar repositório (se fornecido)
clone_repository() {
    if [ -n "$REPO_URL" ]; then
        log_info "Clonando repositório..."
        cd /var/www/${PROJECT_NAME}
        git clone $REPO_URL .
        log_success "Repositório clonado"
    else
        log_warning "URL do repositório não fornecido. Copie os arquivos manualmente para /var/www/${PROJECT_NAME}"
    fi
}

# Build e deploy
deploy_application() {
    log_info "Realizando deploy da aplicação..."
    
    cd /var/www/${PROJECT_NAME}
    
    # Build Docker
    docker-compose build
    
    # Iniciar serviço
    docker-compose up -d
    
    # Aguardar inicialização
    sleep 30
    
    # Verificar health check
    if curl -f http://localhost:${PORT}/api/health > /dev/null 2>&1; then
        log_success "Aplicação está rodando corretamente"
    else
        log_error "Health check falhou. Verifique os logs:"
        docker-compose logs
        exit 1
    fi
}

# Configurar monitoramento
setup_monitoring() {
    log_info "Configurando monitoramento..."
    
    # Criar script de monitoramento
    cat > /usr/local/bin/monitor-${PROJECT_NAME}.sh << EOF
#!/bin/bash
# Monitoramento ${PROJECT_NAME}

if ! curl -f http://localhost:${PORT}/api/health > /dev/null 2>&1; then
    echo "${PROJECT_NAME} está fora do ar. Reiniciando..."
    cd /var/www/${PROJECT_NAME}
    docker-compose restart
fi
EOF

    chmod +x /usr/local/bin/monitor-${PROJECT_NAME}.sh
    
    # Adicionar ao crontab
    echo "*/5 * * * * root /usr/local/bin/monitor-${PROJECT_NAME}.sh" >> /etc/crontab
    
    log_success "Monitoramento configurado"
}

# Limpar configurações antigas
cleanup() {
    log_info "Limpando configurações antigas..."
    
    # Remover containers antigos
    docker-compose -f /var/www/${PROJECT_NAME}/docker-compose.yml down 2>/dev/null || true
    
    # Remover configuração nginx antiga
    rm -f /etc/nginx/sites-available/${PROJECT_NAME}
    rm -f /etc/nginx/sites-enabled/${PROJECT_NAME}
    
    log_success "Limpeza concluída"
}

# Função principal
main() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║            🚀 Deploy XCloud IPTV - xcloudiptv.com.br       ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    # Verificar se está rodando como root
    if [ "$EUID" -ne 0 ]; then
        log_error "Este script deve ser executado como root"
        exit 1
    fi
    
    # Executar etapas
    check_dependencies
    cleanup
    create_project_structure
    setup_nginx
    setup_ssl
    clone_repository
    deploy_application
    setup_monitoring
    
    # Reload nginx
    systemctl reload nginx
    
    echo -e "${GREEN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                 🎉 Deploy Concluído com Sucesso!           ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo -e "${BLUE}Informações:${NC}"
    echo -e "  📍 URL: https://${DOMAIN}"
    echo -e "  📊 Health Check: https://${DOMAIN}/api/health"
    echo -e "  📝 Logs: docker-compose logs -f"
    echo -e "  🔧 Config: /var/www/${PROJECT_NAME}"
    echo -e "  🚀 Status: sudo systemctl status nginx"
    echo ""
    echo -e "${YELLOW}Próximos passos:${NC}"
    echo -e "  1. Adicionar domínio ao Google Search Console"
    echo -e "  2. Configurar Google Analytics"
    echo -e "  3. Testar todos os formulários"
    echo -e "  4. Verificar SSL em: https://www.ssllabs.com/ssltest/"
    echo ""
}

# Tratamento de erros
trap 'log_error "Erro na linha $LINENO. Deploy interrompido."' ERR

# Executar script principal
main "$@"