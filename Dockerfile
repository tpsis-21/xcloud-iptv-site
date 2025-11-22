# DOCKERFILE DEFINITIVO - EASY PANEL
# Base oficial Node.js 18 Alpine
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Instalar dependências do sistema se necessário
RUN apk add --no-cache git

# Copiar arquivos de configuração primeiro (para cache de camadas)
COPY package*.json ./

# Instalar dependências com limpeza de cache
RUN npm ci --only=production --no-cache --verbose

# Copiar código fonte
COPY . .

# Verificar se os componentes existem
RUN ls -la components/ui/ && \
    ls -la app/contato/ && \
    echo "Componentes verificados"

# Build do Next.js com logs completos
RUN npm run build --verbose

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Comando para iniciar
CMD ["npm", "run", "start"]