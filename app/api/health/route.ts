export async function GET(request: Request) {
  const now = new Date()
  const response = {
    status: 'ok',
    timestamp: now.toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    memory: process.memoryUsage(),
    platform: process.platform,
    node: process.version,
    services: {
      web: 'running',
      database: 'connected',
      cache: 'connected',
    },
    site: {
      name: 'XCloud IPTV',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br',
      ssl:
        request.headers.get('x-forwarded-proto') === 'https' || false,
    },
  }
  return Response.json(response)
}
