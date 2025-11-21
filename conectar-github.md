# 🔗 Conectar ao GitHub - Passo a Passo

## 📋 **O que você precisa:**
1. Conta no GitHub (https://github.com)
2. Seu **nome de usuário** do GitHub
3. Copiar os comandos abaixo

---

## 🎯 **PASSO 1: Criar Repositório no GitHub**

### 📱 **Manual pelo site:**
1. Acesse: https://github.com/new
2. **Preencha o formulário:**
   ```
   Repository name: xcloud-iptv-site
   Description: Site oficial XCloud IPTV - Streaming com SEO otimizado
   Public/Private: Escolha (recomendo Public)
   Initialize: ❌ NÃO marque nada (deixe tudo desmarcado)
   ```
3. **Clique em:** "Create repository"

---

## 🚀 **PASSO 2: Copiar os comandos do GitHub**

Quando você criar o repositório, o GitHub vai mostrar uma página com comandos. **Copie esta parte:**

```bash
git remote add origin https://github.com/SEU-USUARIO/xcloud-iptv-site.git
git branch -M main
git push -u origin main
```

> ⚠️ **TROQUE** `SEU-USUARIO` pelo **seu nome de usuário real**

---

## 💻 **PASSO 3: Executar no terminal**

### **Copie e cole cada linha:**

```bash
# Conectar seu repositório local ao GitHub
git remote add origin https://github.com/SEU-USUARIO/xcloud-iptv-site.git

# Renomear branch para main
git branch -M main

# Enviar tudo para o GitHub
git push -u origin main
```

> ⚠️ **IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu nome de usuário real do GitHub

---

## ✅ **PASSO 4: Verificar se deu certo**

### **Se tudo funcionar, você verá:**
```
Enumerating objects: XXX, done.
Counting objects: 100% (XXX/XXX), done.
Delta compression using up to 8 threads
Compressing objects: 100% (XXX/XXX), done.
Writing objects: 100% (XXX/XXX), XXX KiB | XXX KiB/s, done.
Total XXX (delta XXX), reused 0 (delta 0)
remote: Resolving deltas: 100% (XXX/XXX), done.
To https://github.com/SEU-USUARIO/xcloud-iptv-site.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🎉 **SUCESSO!**

### **Acesse seu repositório:**
```
https://github.com/SEU-USUARIO/xcloud-iptv-site
```

### **Você deve ver:**
- ✅ Todos os arquivos do seu site
- ✅ README.md bonito
- ✅ Documentação completa
- ✅ Código fonte organizado

---

## 🆘 **Se der erro:**

### **Erro: "remote origin already exists"**
```bash
# Desconectar e conectar de novo
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/xcloud-iptv-site.git
```

### **Erro: "Authentication failed"**
```bash
# Usar token do GitHub (mais seguro)
# Vá em: GitHub → Settings → Developer settings → Personal access tokens
```

### **Erro: "Permission denied"**
```bash
# Verificar se está logado
git config --global user.name
# Deve mostrar: XCloud IPTV
```

---

## 📞 **Me mande mensagem com:**

```
"Oi! Meu GitHub é: [SEU-USUARIO]
Quando eu executar os comandos, mando print do resultado!"
```

**Vou te ajudar se der qualquer coisa!** 😊

---

## 🎯 **RESUMO EM 3 PASSOS:**

1. **Criar repositório** → https://github.com/new
2. **Copiar seus comandos** → Substitua SEU-USUARIO
3. **Colar no terminal** → Mande tudo pro GitHub

**Pronto! Seu site está salvo na nuvem!** ☁️