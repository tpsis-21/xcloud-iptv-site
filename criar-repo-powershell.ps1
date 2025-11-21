# PowerShell Script para criar repositório no GitHub
# Autor: XCloud IPTV
# Execute: .\criar-repo-powershell.ps1

Write-Host "🚀 Criando repositório XCloud IPTV no GitHub..." -ForegroundColor Green

# Verificar se temos token
if (-not $env:GITHUB_TOKEN) {
    Write-Host "❌ Preciso do seu token do GitHub!" -ForegroundColor Red
    Write-Host "📋 Pegue aqui: https://github.com/settings/tokens" -ForegroundColor Yellow
    Write-Host "📝 Token deve ter permissão 'repo'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💡 Execute assim:" -ForegroundColor Cyan
    Write-Host '$env:GITHUB_TOKEN = "seu-token-aqui"' -ForegroundColor White
    Write-Host '.\criar-repo-powershell.ps1' -ForegroundColor White
    exit 1
}

# Configurações
$token = $env:GITHUB_TOKEN
$username = "tpsis-21"  # Seu usuário do GitHub
$repoName = "xcloud-iptv-site"
$description = "Site oficial XCloud IPTV - Streaming com SEO otimizado"

Write-Host "📋 Configurações:" -ForegroundColor Cyan
Write-Host "👤 Usuário: $username" -ForegroundColor White
Write-Host "📦 Repositório: $repoName" -ForegroundColor White
Write-Host "📝 Descrição: $description" -ForegroundColor White

# Headers para a API
$headers = @{
    "Authorization" = "token $token"
    "Accept" = "application/vnd.github.v3+json"
    "User-Agent" = "PowerShell"
}

# Dados do repositório
$body = @{
    name = $repoName
    description = $description
    private = $false
    has_issues = $true
    has_projects = $false
    has_wiki = $false
    auto_init = $false
} | ConvertTo-Json

Write-Host ""
Write-Host "🔄 Criando repositório..." -ForegroundColor Yellow

try {
    # Criar repositório via API
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" `
        -Method Post -Headers $headers -Body $body
    
    Write-Host "✅ Repositório criado com sucesso!" -ForegroundColor Green
    Write-Host "📍 URL: $($response.html_url)" -ForegroundColor White
    Write-Host "🔗 Clone URL: $($response.clone_url)" -ForegroundColor White
    Write-Host "📊 Tamanho: $($response.size) KB" -ForegroundColor White
    
    # Gerar comandos Git
    Write-Host ""
    Write-Host "🚀 Comandos para conectar seu repositório local:" -ForegroundColor Cyan
    Write-Host "git remote add origin https://github.com/$username/$repoName.git" -ForegroundColor White
    Write-Host "git branch -M main" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
    
    # Perguntar se quer executar os comandos automaticamente
    Write-Host ""
    $executar = Read-Host "🤔 Quer executar estes comandos automaticamente? (s/n)"
    
    if ($executar -eq "s" -or $executar -eq "S") {
        Write-Host "🔗 Conectando repositório local..." -ForegroundColor Yellow
        
        # Conectar repositório local ao remoto
        git remote add origin "https://github.com/$username/$repoName.git"
        
        Write-Host "📤 Enviando código..." -ForegroundColor Yellow
        
        # Enviar código
        git branch -M main
        git push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "🎉 SUCESSO! Código enviado para o GitHub!" -ForegroundColor Green
            Write-Host "📋 Repositório: https://github.com/$username/$repoName" -ForegroundColor White
            Write-Host ""
            Write-Host "✅ Próximo passo: Deploy na VPS!" -ForegroundColor Cyan
            Write-Host "📖 Veja: guia-deploy-vps-easypanel-simplificado.md" -ForegroundColor White
        } else {
            Write-Host "❌ Erro ao enviar código!" -ForegroundColor Red
            Write-Host "🔄 Tentando com token na URL..." -ForegroundColor Yellow
            
            # Tentar com token na URL
            git remote set-url origin "https://$token@github.com/$username/$repoName.git"
            git push -u origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ Código enviado com token!" -ForegroundColor Green
                Write-Host "📍 Repositório: https://github.com/$username/$repoName" -ForegroundColor White
            } else {
                Write-Host "❌ Ainda com erro! Verifique seu token." -ForegroundColor Red
            }
        }
    } else {
        Write-Host "✅ Repositório criado! Execute os comandos acima manualmente." -ForegroundColor Green
    }
    
} catch {
    $errorMessage = $_.Exception.Message
    Write-Host "❌ Erro ao criar repositório!" -ForegroundColor Red
    Write-Host "📄 Erro: $errorMessage" -ForegroundColor Red
    
    # Verificar se já existe
    if ($errorMessage -like "*already exists*" -or $errorMessage -like "*422*") {
        Write-Host "⚠️  Repositório já existe! Vamos conectar..." -ForegroundColor Yellow
        $repoUrl = "https://github.com/$username/$repoName.git"
        
        Write-Host "🔗 Conectando ao repositório existente..." -ForegroundColor Yellow
        
        # Conectar ao repositório existente
        git remote add origin $repoUrl
        git branch -M main
        git push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Conectado ao repositório existente!" -ForegroundColor Green
            Write-Host "📍 Repositório: $repoUrl" -ForegroundColor White
        } else {
            Write-Host "❌ Erro ao conectar ao repositório existente!" -ForegroundColor Red
            Write-Host "🔄 Tentando com token..." -ForegroundColor Yellow
            
            git remote set-url origin "https://$token@github.com/$username/$repoName.git"
            git push -u origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ Conectado com token!" -ForegroundColor Green
            } else {
                Write-Host "❌ Verifique seu token e permissões!" -ForegroundColor Red
            }
        }
    }
}

Write-Host ""
Write-Host "🎯 Script finalizado!" -ForegroundColor Green