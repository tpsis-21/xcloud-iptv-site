// API Health Check - XCloud IPTV
// Endpoint: /api/health

export default function handler(req, res) {
  // Verificar status do sistema
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    memory: process.memoryUsage(),
    platform: process.platform,
    node: process.version,
    
    // Status dos serviços
    services: {
      web: 'running',
      database: 'connected', // Adicionar verificação real quando tiver DB
      cache: 'connected'     // Adicionar verificação real quando tiver cache
    },
    
    // Informações do site
    site: {
      name: 'XCloud IPTV',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br',
      ssl: req.headers['x-forwarded-proto'] === 'https' || req.connection.encrypted
    }
  };

  res.status(200).json(health);
}