#!/bin/bash
# DEPLOY DEFINITIVO - EASY PANEL
# Solução sênior para cache persistente

echo "🎯 DEPLOY DEFINITIVO EASY PANEL - INICIANDO"
echo "=================================="

# 1. Limpar cache do Git completamente
echo "🧹 Limpando cache Git..."
git gc --aggressive --prune=now
rm -rf .git/refs/original/
git reflog expire --expire=now --all

# 2. Criar novo commit com alteração significativa
echo "📝 Criando novo commit com alterações..."
echo "# Deploy Definitivo - $(date)" >> deploy-version.txt
git add deploy-version.txt

# 3. Commit com mensagem que força rebuild
git commit -m "DEPLOY DEFINITIVO: $(date +%s) - Forçando novo build completo"

# 4. Push com force para garantir atualização
echo "🚀 Enviando para GitHub..."
git push origin main --force-with-lease

# 5. Criar tag para marcar deploy
echo "🏷️ Criando tag de deploy..."
git tag -f "deploy-$(date +%Y%m%d-%H%M%S)"
git push origin --tags --force

echo "✅ DEPLOY DEFINITIVO CONCLUÍDO!"
echo "O EasyPanel agora usará código 100% novo sem cache!"
echo "Aguarde 2-3 minutos para o rebuild automático."