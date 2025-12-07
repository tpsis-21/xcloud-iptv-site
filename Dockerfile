# DOCKERFILE DEFINITIVO - EASY PANEL
# Base oficial Node.js 18 Alpine
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Instalar dependências do sistema se necessário
RUN apk add --no-cache git libc6-compat

# Copiar arquivos de configuração primeiro (para cache de camadas)
COPY package*.json ./

# Instalar dependências com limpeza de cache
RUN npm ci --no-cache --verbose

# Copiar código fonte
COPY . .

# Build do Next.js
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build --verbose

# --- Runner Stage ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos do builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Permissões
USER nextjs

# Expor porta
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar
CMD ["node", "server.js"]