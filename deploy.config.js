// Configuração de Deploy para EasyPanel/VP
module.exports = {
  // Configurações de produção
  production: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    
    // URLs
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br',
    
    // Segurança
    trustProxy: true,
    compress: true,
    
    // Performance
    poweredByHeader: false,
    generateEtags: true,
    
    // Logs
    logging: {
      level: 'info',
      format: 'combined'
    }
  },
  
  // Configurações do servidor
  server: {
    // Timeout
    keepAliveTimeout: 65000,
    headersTimeout: 66000,
    
    // Limits
    maxHeaderSize: 16384,
    
    // Compression
    compression: true,
    compressionLevel: 6
  }
};