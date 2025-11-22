#!/bin/bash
# Script para forçar rebuild completo no EasyPanel

echo "🔄 FORÇANDO REBUILD COMPLETO..."

# Limpar TUDO
echo "🧹 Limpando caches e arquivos..."
rm -rf node_modules
rm -rf .next
rm -rf package-lock.json
rm -rf npm-debug.log*
rm -rf yarn-debug.log*
rm -rf yarn-error.log*

# Criar arquivo de flag para forçar rebuild
echo "$(date) - Forçando rebuild completo" > .force-rebuild

# Instalar dependências do zero
echo "📦 Instalando dependências..."
npm install

# Build limpo
echo "🔨 Executando build limpo..."
npm run build

echo "✅ Rebuild completo finalizado!"