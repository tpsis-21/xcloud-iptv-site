#!/bin/bash

# Script para garantir que as dependências estão instaladas antes de iniciar
echo "🔍 Verificando dependências..."

# Verificar se o Next.js está instalado
if [ ! -d "node_modules/next" ]; then
    echo "❌ Next.js não encontrado. Instalando dependências..."
    npm ci
fi

# Verificar novamente após instalação
if [ ! -d "node_modules/next" ]; then
    echo "❌ Falha ao instalar dependências do Next.js"
    exit 1
fi

echo "✅ Dependências verificadas. Iniciando Next.js..."
npm run start