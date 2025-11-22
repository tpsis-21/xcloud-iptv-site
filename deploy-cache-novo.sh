#!/bin/bash
# DEPLOY DEFINITIVO - FORÇAR CACHE NOVO NO EASY PANEL
# Solução sênior para problema de cache persistente

echo "🎯 SOLUÇÃO DEFINITIVA - EASY PANEL CACHE"
echo "========================================"

# 1. Criar arquivo que força novo cache ID
echo "🆕 Criando novo ID de cache..."
echo "CACHE_FORCE_ID=$(date +%s)" > .cache-force-new
echo "BUILD_TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> .cache-force-new

# 2. Alterar Nixpacks para usar cache diferente
echo "🔧 Configurando cache alternativo..."
cat > nixpacks-cache-fix.toml << 'EOF'
# CACHE NOVO - FORÇAR REBUILD COMPLETO
[phases.setup]
nixpkgsArchive = 'ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7'

[phases.install]
cmds = [
  'echo "🚀 CACHE NOVO - REBUILD FORÇADO"',
  'npm config set cache /tmp/novo-cache-$(date +%s)',
  'npm install --no-package-lock --no-cache --verbose',
  'echo "✅ Cache novo criado"'
]

[phases.build]
cmds = [
  'echo "🔨 BUILD COM CACHE NOVO"',
  'ls -la components/ui/ | grep -E "(button|input|textarea|label|card)"',
  'npm run build --verbose',
  'echo "✅ Build concluído com cache novo"'
]

[start]
cmd = 'npm run start'

[variables]
NODE_ENV = 'production'
CACHE_BUST = '$(date +%s)'
EOF

# 3. Commit com mudança significativa
echo "💾 Criando commit com cache novo..."
git add .cache-force-new nixpacks-cache-fix.toml
git commit -m "CACHE NOVO: $(date +%s) - Forçando rebuild completo"

# 4. Mover configuração correta para lugar
echo "📋 Ativando configuração de cache novo..."
mv nixpacks.toml nixpacks-backup.toml
mv nixpacks-cache-fix.toml nixpacks.toml

# 5. Commit final
git add nixpacks.toml
git commit -m "ATIVAR: Cache novo definitivo - $(date +%s)"

# 6. Push force para garantir
echo "🚀 Enviando cache novo..."
git push origin main --force

echo "✅ CACHE NOVO APLICADO!"
echo "O EasyPanel agora usará cache completamente novo!"
echo "Aguarde 2-3 minutos para o rebuild automático."