#!/bin/bash

# Script para criar repositório no GitHub e enviar código
# Execute: ./criar-repo-direto.sh

echo "🚀 Criando repositório XCloud IPTV no GitHub..."

# Verificar se temos token
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Preciso do seu token do GitHub!"
    echo "📋 Pegue aqui: https://github.com/settings/tokens"
    echo "📝 Token deve ter permissão 'repo'"
    echo ""
    echo "💡 Execute assim:"
    echo "export GITHUB_TOKEN='seu-token-aqui'"
    echo "./criar-repo-direto.sh"
    exit 1
fi

# Verificar se temos username
if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Preciso do seu usuário do GitHub!"
    echo "💡 Execute assim:"
    echo "export GITHUB_USERNAME='seu-usuario'"
    echo "./criar-repo-direto.sh"
    exit 1
fi

echo "📋 Criando repositório..."
echo "👤 Usuário: $GITHUB_USERNAME"
echo "📦 Nome: xcloud-iptv-site"

# Criar repositório via API
response=$(curl -s -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "xcloud-iptv-site",
    "description": "Site oficial XCloud IPTV - Streaming com SEO otimizado",
    "private": false,
    "has_issues": true,
    "has_projects": false,
    "has_wiki": false,
    "auto_init": false
  }')

# Verificar se deu certo
if echo "$response" | grep -q '"full_name"'; then
    echo "✅ Repositório criado com sucesso!"
    repo_url=$(echo "$response" | grep -o '"clone_url": "[^"]*' | grep -o '[^"]*$')
    echo "📍 URL do repositório: $repo_url"
    
    # Conectar repositório local ao remoto
    echo "🔗 Conectando repositório local..."
    git remote add origin "$repo_url"
    
    # Enviar código
    echo "📤 Enviando código..."
    git branch -M main
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo "🎉 SUCESSO! Código enviado para o GitHub!"
        echo "📋 Repositório: https://github.com/$GITHUB_USERNAME/xcloud-iptv-site"
        echo ""
        echo "✅ Próximo passo: Deploy na VPS!"
        echo "📖 Veja: guia-deploy-vps-easypanel-simplificado.md"
    else
        echo "❌ Erro ao enviar código!"
        echo "🔄 Tentando com HTTPS..."
        
        # Tentar com token na URL
        repo_url_with_token=$(echo "$repo_url" | sed "s|https://|https://$GITHUB_TOKEN@|")
        git remote set-url origin "$repo_url_with_token"
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo "✅ Código enviado com token!"
            echo "📍 Repositório: https://github.com/$GITHUB_USERNAME/xcloud-iptv-site"
        else
            echo "❌ Ainda com erro! Verifique seu token."
        fi
    fi
    
else
    echo "❌ Erro ao criar repositório!"
    echo "📄 Resposta: $response"
    
    # Verificar se já existe
    if echo "$response" | grep -q 'already exists'; then
        echo "⚠️  Repositório já existe! Vamos conectar..."
        repo_url="https://github.com/$GITHUB_USERNAME/xcloud-iptv-site.git"
        
        # Conectar ao repositório existente
        git remote add origin "$repo_url"
        git branch -M main
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo "✅ Conectado ao repositório existente!"
            echo "📍 Repositório: $repo_url"
        else
            echo "❌ Erro ao conectar ao repositório existente!"
        fi
    fi
fi

echo ""
echo "🎯 Script finalizado!"