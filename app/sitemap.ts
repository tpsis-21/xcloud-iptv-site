import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://xcloudiptv.com.br'
  const lastModified = new Date().toISOString().split('T')[0]
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/teste-gratis-xcloud-iptv`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/planos-xcloud-iptv`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contato`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sobre-nos`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/download`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/termos-de-uso`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/politica-de-privacidade`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/politica-de-reembolso`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}

