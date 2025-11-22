import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FormularioTeste } from '@/components/FormularioTeste'
import { Smartphone, Tv, Download, CheckCircle2, Star, Zap, Rocket, Users, Clock, ShieldCheck, Gift, Trophy, Sparkles, TrendingUp } from 'lucide-react'
import { MetaTags } from '@/components/seo/MetaTags'
import { JsonLD } from '@/components/seo/JsonLD'
import { SCHEMA_TEMPLATES } from '@/config/schemas'
import { EXTERNAL_LINKS, createInternalLink } from '@/config/links'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Teste Grátis XCloud IPTV - Experimente Sem Compromisso',
  description: 'Teste grátis XCloud IPTV: Acesso completo ao conteúdo. Milhares de canais, filmes e séries. Teste IPTV XCloud sem cartão. Ativação imediata.',
  keywords: 'teste gratis xcloud iptv, teste iptv xcloud, teste grátis, iptv, streaming, canais ao vivo, filmes, séries',
  openGraph: {
    title: 'Teste Grátis XCloud IPTV - Acesso Completo',
    description: 'Teste grátis XCloud IPTV. Milhares de canais, filmes e séries. Teste IPTV XCloud sem compromisso.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teste Grátis XCloud IPTV - Sem Compromisso',
    description: 'Teste grátis XCloud IPTV! Acesso completo ao conteúdo. Teste IPTV XCloud sem cartão de crédito.',
  },
  alternates: {
    canonical: 'https://xcloudtv.com.br/teste-gratis-xcloud-iptv'
  }
}