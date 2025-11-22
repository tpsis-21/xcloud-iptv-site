# Dockerfile para XCloud IPTV - EasyPanel Deploy
FROM node:18-alpine

# Criar diretório do app
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY .env.example ./

# Instalar dependências
RUN npm ci --only=production && npm cache clean --force

# Copiar código fonte
COPY . .

# Build do Next.js
RUN npm run build

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Mudar permissões
RUN chown -R nextjs:nodejs /app
RUN chmod -R 755 /app

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Trocar para usuário não-root
USER nextjs

# Comando de inicialização
CMD ["npm", "run", "start:prod"]