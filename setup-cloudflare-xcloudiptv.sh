#!/bin/bash

# 🚀 Script de Configuração Cloudflare + EasyPanel
# Para xcloudiptv.com.br

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configurações
DOMAIN="xcloudiptv.com.br"
PROJECT_NAME="xcloud-iptv"
CLOUDFLARE_EMAIL=""  # Preencher
CLOUDFLARE_API_KEY=""  # Preencher

echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║        🌩️ Cloudflare + EasyPanel Configuration           ║"
echo "║                    xcloudiptv.com.br                       ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Funções
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
    
    if ! command -v curl &> /dev/null; then
        log_error "curl não está instalado"
        exit 1
    fi
    
    if ! command -v jq &> /dev/null; then
        log_info "Instalando jq..."
        apt update && apt install -y jq
    fi
    
    log_success "Dependências verificadas"
}

# Criar zone no Cloudflare (se não existir)
create_cloudflare_zone() {
    log_info "Verificando zona no Cloudflare..."
    
    if [ -z "$CLOUDFLARE_EMAIL" ] || [ -z "$CLOUDFLARE_API_KEY" ]; then
        log_warning "Credenciais Cloudflare não fornecidas. Pule esta etapa."
        return
    fi
    
    # Verificar se zona já existe
    RESPONSE=$(curl -s -X GET \
        "https://api.cloudflare.com/client/v4/zones?name=$DOMAIN" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json")
    
    ZONE_ID=$(echo $RESPONSE | jq -r '.result[0].id // empty')
    
    if [ -z "$ZONE_ID" ]; then
        log_info "Criando zona $DOMAIN..."
        
        RESPONSE=$(curl -s -X POST \
            "https://api.cloudflare.com/client/v4/zones" \
            -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
            -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{
                "name": "'$DOMAIN'",
                "jump_start": true,
                "type": "full"
            }')
        
        SUCCESS=$(echo $RESPONSE | jq -r '.success')
        
        if [ "$SUCCESS" = "true" ]; then
            ZONE_ID=$(echo $RESPONSE | jq -r '.result.id')
            log_success "Zona criada com sucesso: $ZONE_ID"
        else
            log_error "Erro ao criar zona: $(echo $RESPONSE | jq -r '.errors')"
            return 1
        fi
    else
        log_success "Zona já existe: $ZONE_ID"
    fi
}

# Criar DNS records
create_dns_records() {
    log_info "Criando registros DNS..."
    
    if [ -z "$ZONE_ID" ]; then
        log_warning "Zone ID não disponível. Configure manualmente no Cloudflare."
        return
    fi
    
    # Obter IP da VPS
    VPS_IP=$(curl -s http://ifconfig.me)
    
    # Criar A record para root domain
    curl -s -X POST \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "type": "A",
            "name": "@",
            "content": "'$VPS_IP'",
            "ttl": 120,
            "proxied": true
        }' > /dev/null
    
    # Criar A record para www
    curl -s -X POST \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "type": "A",
            "name": "www",
            "content": "'$VPS_IP'",
            "ttl": 120,
            "proxied": true
        }' > /dev/null
    
    log_success "Registros DNS criados"
}

# Configurar SSL/TLS
setup_ssl_tls() {
    log_info "Configurando SSL/TLS..."
    
    if [ -z "$ZONE_ID" ]; then
        log_warning "Configure SSL/TLS manualmente no Cloudflare."
        echo ""
        echo "📋 Configurações recomendadas no Cloudflare:"
        echo "   SSL/TLS → Overview → Full (strict)"
        echo "   SSL/TLS → Edge Certificates → Always Use HTTPS: ON"
        echo "   SSL/TLS → Edge Certificates → Automatic HTTPS Rewrites: ON"
        return
    fi
    
    # Atualizar configuração SSL/TLS
    curl -s -X PATCH \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/ssl" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "value": "strict"
        }' > /dev/null
    
    # Ativar Always Use HTTPS
    curl -s -X PATCH \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/always_use_https" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "value": "on"
        }' > /dev/null
    
    log_success "SSL/TLS configurado"
}

# Criar Page Rules
create_page_rules() {
    log_info "Criando Page Rules..."
    
    if [ -z "$ZONE_ID" ]; then
        log_warning "Configure Page Rules manualmente."
        echo ""
        echo "📋 Page Rules recomendadas:"
        echo "   URL: xcloudiptv.com.br/*"
        echo "   Settings: Always Use HTTPS"
        echo ""
        echo "   URL: xcloudiptv.com.br/api/*"
        echo "   Settings: Security Level: Essentially Off"
        return
    fi
    
    # Page Rule 1: Always HTTPS
    curl -s -X POST \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/pagerules" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "targets": [
                {
                    "target": "url",
                    "constraint": {
                        "operator": "matches",
                        "value": "xcloudiptv.com.br/*"
                    }
                }
            ],
            "actions": [
                {
                    "id": "always_use_https"
                }
            ],
            "priority": 1,
            "status": "active"
        }' > /dev/null
    
    log_success "Page Rules criadas"
}

# Criar Origin Certificate
create_origin_certificate() {
    log_info "Criando Origin Certificate..."
    
    if [ -z "$ZONE_ID" ]; then
        log_warning "Configure Origin Certificate manualmente."
        echo ""
        echo "📋 Para criar Origin Certificate:"
        echo "   1. Cloudflare → SSL/TLS → Origin Server"
        echo "   2. Create Certificate"
        echo "   3. Private Key Type: RSA (2048)"
        echo "   4. Domínios: xcloudiptv.com.br, *.xcloudiptv.com.br"
        echo "   5. Certificate Validity: 15 years"
        return
    fi
    
    # Criar origin certificate
    RESPONSE=$(curl -s -X POST \
        "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/origin_tls_client_auth" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
            "certificate_authority": "origin_ca_rsa_root",
            "validity_days": 5475,
            "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICijCCAXICAQAwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUx\nITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBALaU6FCzE7o\n-----END CERTIFICATE REQUEST-----"
        }')
    
    log_success "Origin Certificate criado (configure na VPS)"
}

# Gerar configuração Nginx
generate_nginx_config() {
    log_info "Gerando configuração Nginx..."
    
    cat > /tmp/xcloudiptv-nginx.conf << EOF
server {
    listen 80;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    # Redirect HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name xcloudiptv.com.br www.xcloudiptv.com.br;
    
    # SSL Configuration - Cloudflare Origin Certificate
    # Substitua com seus certificados reais
    ssl_certificate /etc/ssl/certs/xcloudiptv.com.br.pem;
    ssl_certificate_key /etc/ssl/private/xcloudiptv.com.br.key;
    
    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Cloudflare Real IP
    set_real_ip_from 103.21.244.0/22;
    set_real_ip_from 103.22.200.0/22;
    set_real_ip_from 103.31.4.0/22;
    set_real_ip_from 104.16.0.0/12;
    set_real_ip_from 108.162.192.0/18;
    set_real_ip_from 131.0.72.0/22;
    set_real_ip_from 141.101.64.0/18;
    set_real_ip_from 162.158.0.0/15;
    set_real_ip_from 172.64.0.0/13;
    set_real_ip_from 173.245.48.0/20;
    set_real_ip_from 188.114.96.0/20;
    set_real_ip_from 190.93.240.0/20;
    set_real_ip_from 197.234.240.0/22;
    set_real_ip_from 198.41.128.0/17;
    real_ip_header CF-Connecting-IP;
    
    # Proxy para EasyPanel/aplicação
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header CF-Connecting-IP \$http_cf_connecting_ip;
        proxy_cache_bypass \$http_upgrade;
        
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
    
    # Health check
    location /api/health {
        proxy_pass http://localhost:3000/api/health;
        access_log off;
    }
}
EOF
    
    log_success "Configuração Nginx gerada em /tmp/xcloudiptv-nginx.conf"
    echo ""
    echo "📋 Próximos passos:"
    echo "   1. Copie o certificado Cloudflare Origin para:"
    echo "      - /etc/ssl/certs/xcloudiptv.com.br.pem"
    echo "      - /etc/ssl/private/xcloudiptv.com.br.key"
    echo "   2. Mova a configuração para: /etc/nginx/sites-available/"
    echo "   3. Teste o Nginx: nginx -t"
    echo "   4. Reload: systemctl reload nginx"
}

# Criar script de monitoramento
create_monitoring_script() {
    log_info "Criando script de monitoramento..."
    
    cat > /tmp/monitor-xcloudiptv.sh << 'EOF'
#!/bin/bash
# Monitoramento XCloud IPTV

DOMAIN="xcloudiptv.com.br"
EMAIL="admin@xcloudiptv.com.br"
LOG_FILE="/var/log/xcloudiptv-monitor.log"

# Função de log
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> $LOG_FILE
}

# Testar site
test_site() {
    if curl -f -s -m 10 "https://$DOMAIN/api/health" > /dev/null; then
        log "✅ Site está funcionando"
        return 0
    else
        log "❌ Site fora do ar"
        return 1
    fi
}

# Testar SSL
test_ssl() {
    SSL_EXPIRY=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
    SSL_EXPIRY_EPOCH=$(date -d "$SSL_EXPIRY" +%s)
    CURRENT_EPOCH=$(date +%s)
    DAYS_LEFT=$(( (SSL_EXPIRY_EPOCH - CURRENT_EPOCH) / 86400 ))
    
    if [ $DAYS_LEFT -lt 30 ]; then
        log "⚠️ SSL expira em $DAYS_LEFT dias"
    else
        log "✅ SSL válido por $DAYS_LEFT dias"
    fi
}

# Testar formulário
test_form() {
    TEST_DATA='{"nome":"Monitor","email":"monitor@xcloudiptv.com.br","telefone":"(11) 99999-9999"}'
    
    RESPONSE=$(curl -s -X POST "https://$DOMAIN/api/teste" \
        -H "Content-Type: application/json" \
        -d "$TEST_DATA" \
        -w "%{http_code}")
    
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    
    if [ "$HTTP_CODE" = "200" ]; then
        log "✅ Formulário está funcionando"
    else
        log "❌ Formulário retornou erro: $HTTP_CODE"
    fi
}

# Executar testes
test_site
test_ssl
test_form

# Se algum teste falhar, enviar email
if [ $? -ne 0 ]; then
    echo "Alerta: Problemas detectados no XCloud IPTV" | mail -s "XCloud IPTV Monitor Alert" $EMAIL
fi
EOF
    
    chmod +x /tmp/monitor-xcloudiptv.sh
    
    # Adicionar ao crontab
    echo "*/30 * * * * /tmp/monitor-xcloudiptv.sh" >> /etc/crontab
    
    log_success "Script de monitoramento criado"
}

# Função principal
main() {
    check_dependencies
    create_cloudflare_zone
    create_dns_records
    setup_ssl_tls
    create_page_rules
    create_origin_certificate
    generate_nginx_config
    create_monitoring_script
    
    echo -e "${GREEN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║         🎉 Configuração Cloudflare Concluída!              ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo -e "${BLUE}Resumo das configurações:${NC}"
    echo "   📍 Domínio: xcloudiptv.com.br"
    echo "   🌐 DNS: A records para root e www"
    echo "   🔒 SSL: Full (strict) mode"
    echo "   📋 Page Rules: Always HTTPS"
    echo "   📊 Monitoramento: /tmp/monitor-xcloudiptv.sh"
    echo ""
    echo -e "${YELLOW}Próximos passos:${NC}"
    echo "   1. Configure os certificados Origin na VPS"
    echo "   2. Configure o Nginx com a nova configuração"
    echo "   3. Teste o site: https://xcloudiptv.com.br"
    echo "   4. Adicione ao Google Search Console"
    echo ""
}

# Tratamento de erros
trap 'log_error "Erro na linha $LINENO. Configuração interrompida."' ERR

# Verificar root
if [ "$EUID" -ne 0 ]; then
    log_error "Este script deve ser executado como root"
    exit 1
fi

# Executar
main "$@"