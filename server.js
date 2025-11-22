#!/usr/bin/env node

/**
 * Script de inicialização para produção - EasyPanel/VPS
 * Este script configura e inicia o servidor de produção
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');
const config = require('./deploy.config.js');

// Verificar ambiente
const dev = process.env.NODE_ENV !== 'production';
const hostname = config.production.host;
const port = config.production.port;

console.log('🚀 Iniciando XCloud IPTV - Modo Produção');
console.log(`📡 Ambiente: ${process.env.NODE_ENV || 'production'}`);
console.log(`🌐 URL: ${config.production.siteUrl}`);
console.log(`📍 Porta: ${port}`);

// Criar app Next.js
const app = next({ 
  dev, 
  hostname, 
  port,
  conf: {
    poweredByHeader: config.production.poweredByHeader,
    generateEtags: config.production.generateEtags,
    compress: config.production.compress,
    distDir: '.next'
  }
});

const handle = app.getRequestHandler();

// Preparar e iniciar servidor
app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Compressão Gzip
      compression()(req, res, async () => {
        // Parse URL
        const parsedUrl = parse(req.url, true);
        
        // Security headers
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // CORS para formulários
        res.setHeader('Access-Control-Allow-Origin', config.production.siteUrl);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        // Handle requests
        await handle(req, res, parsedUrl);
      });
    } catch (err) {
      console.error('Erro ao processar request:', err);
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    }
  });

  // Configurar timeouts
  server.keepAliveTimeout = config.server.keepAliveTimeout;
  server.headersTimeout = config.server.headersTimeout;

  // Iniciar servidor
  server.listen(port, hostname, (err) => {
    if (err) {
      console.error('❌ Erro ao iniciar servidor:', err);
      process.exit(1);
    }
    
    console.log(`✅ Servidor rodando em ${config.production.siteUrl}`);
    console.log(`📊 Health check: ${config.production.siteUrl}/api/health`);
  });

}).catch((err) => {
  console.error('❌ Erro ao preparar Next.js:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM recebido, encerrando gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT recebido, encerrando gracefully...');
  process.exit(0);
});