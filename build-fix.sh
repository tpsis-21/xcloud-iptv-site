#!/bin/bash

# Script para limpar caches e forçar rebuild completo
echo "🧹 Limpando caches..."

# Limpar caches do Next.js
rm -rf .next
rm -rf node_modules/.cache

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
echo "📦 Reinstalando dependências..."
npm ci

# Build com verbose para debug
echo "🔨 Iniciando build..."
npm run build

echo "✅ Build concluído!"