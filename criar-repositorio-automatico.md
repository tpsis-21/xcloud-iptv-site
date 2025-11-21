# 🚀 Criar Repositório e Enviar Automaticamente

## 📋 **O que vamos fazer:**
1. Criar repositório no GitHub via API
2. Conectar seu repositório local
3. Enviar todo o código
4. Verificar se deu certo

---

## 🎯 **PASSO 1: Pegar seu Token do GitHub**

### 📱 **Pegar Token (1 minuto):**
1. Acesse: https://github.com/settings/tokens
2. Clique em: "Generate new token (classic)"
3. **Preencha:**
   - Name: `xcloud-iptv-deploy`
   - Expiration: 90 days
   - Scopes: Marque apenas ✅ `repo`
4. Clique em: "Generate token"
5. **Copie o token** (vai ser tipo: `ghp_abc123def456`)

---

## 🚀 **PASSO 2: Executar script automático**

### 💻 **Copie e cole no terminal:**

```powershell
# Instalar GitHub CLI (se não tiver)
winget install GitHub.cli

# Fazer login com token
gh auth login --with-token
# Cole seu token aqui e dê Enter

# Criar repositório automaticamente
gh repo create xcloud-iptv-site --public --description "Site oficial XCloud IPTV - Streaming com SEO otimizado" --confirm

# Conectar repositório local ao remoto
git remote add origin https://github.com/%USERNAME%/xcloud-iptv-site.git

# Enviar código
git branch -M main
git push -u origin main
```

---

## 🎯 **OPÇÃO B: Manual com comandos**

### **Se preferir fazer manualmente:**

```bash
# Criar repositório (substitua SEU-USUARIO)
curl -X POST -H "Authorization: token SEU-TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "xcloud-iptv-site",
    "description": "Site oficial XCloud IPTV - Streaming com SEO otimizado",
    "private": false,
    "has_issues": true,
    "has_projects": false,
    "has_wiki": false
  }'

# Conectar e enviar
git remote add origin https://github.com/SEU-USUARIO/xcloud-iptv-site.git
git branch -M main
git push -u origin main
```

---

## ✅ **PASSO 3: Verificar se deu certo**

### **Comando para testar:**
```bash
# Verificar conexão
git remote -v

# Ver se está tudo no GitHub
gh repo view xcloud-iptv-site --web
```

---

## 🆘 **Se der erro de autenticação:**

### **Use HTTPS com token:**
```bash
# Remover conexão antiga
git remote remove origin

# Adicionar com token (substitua SEU-TOKEN e SEU-USUARIO)
git remote add origin https://SEU-TOKEN@github.com/SEU-USUARIO/xcloud-iptv-site.git

# Enviar
git push -u origin main
```

---

## 📞 **Me ajude a te ajudar:**

**Me responda com:**
```
1. Meu GitHub é: [seu-usuario]
2. Meu token é: [ghp_abc123...] (ou prefere fazer manual?)
3. Quero fazer: [automatico/manual]
```

**Vou te dar os comandos exatos!** 🎯

---

## 🎉 **RESUMO:**
- ✅ Seu código já está commitado
- ✅ README.md está pronto
- ✅ Só falta conectar ao GitHub
- ✅ Vou te dar comandos prontos

**Qual é seu usuário do GitHub?** 😊