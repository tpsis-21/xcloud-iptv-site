import type { NextRequest } from 'next/server'

interface WebhookPayload {
  nome: string
  email: string
  telefone: string
}

interface WebhookResponse {
  success: boolean
  message: string
  data?: {
    usuario?: string
    senha?: string
    url_acesso?: string
    validade?: string
    instrucoes?: string[]
  }
  error?: string
}

export async function POST(req: NextRequest) {
  const fallback = 'https://n8n.tplay21.in/webhook/teste-xcloudtv'
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_TEST_WEBHOOK_URL || fallback

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 10000)

  try {
    const body = (await req.json()) as WebhookPayload

    const resp = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'XCloudIPTV-Site/1.0',
        Origin: 'https://xcloudiptv.com.br',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
      signal: controller.signal,
    })

    clearTimeout(timer)

    let payload: any
    const contentType = resp.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      payload = await resp.json()
    } else {
      const text = await resp.text()
      try {
        payload = JSON.parse(text)
      } catch {
        payload = { status: resp.status, message: text }
      }
    }

    let normalized: WebhookResponse

    if (Array.isArray(payload) && payload.length > 0) {
      const first: any = payload[0]
      const status = String(first.status ?? '').toLowerCase()
      normalized = {
        success: status === 'sucesso' || status === 'success',
        message: String(first.message || ''),
        data: first.data,
        error: typeof first.code === 'string' ? first.code : undefined,
      }
    } else if (typeof (payload as any).success !== 'undefined') {
      normalized = {
        success: Boolean((payload as any).success),
        message: String((payload as any).message || ''),
        data: (payload as any).data,
        error: typeof (payload as any).code === 'string' ? (payload as any).code : undefined,
      }
    } else if (typeof (payload as any).status !== 'undefined') {
      const status = String((payload as any).status).toLowerCase()
      normalized = {
        success: status === 'sucesso' || status === 'success',
        message: String((payload as any).message || ''),
        data: (payload as any).data,
        error: typeof (payload as any).code === 'string' ? (payload as any).code : undefined,
      }
    } else {
      normalized = {
        success: false,
        message: 'Falha ao interpretar a resposta do gerador de testes',
        error: 'invalid_response',
      }
    }

    if (!resp.ok) {
      const upstreamMessage = (normalized?.message || '').trim()
      normalized = {
        success: false,
        message: upstreamMessage || `${resp.status} ${resp.statusText}`,
        error: normalized?.error || 'upstream_error',
        data: normalized?.data,
      }
      console.error('Webhook upstream error:', {
        status: resp.status,
        statusText: resp.statusText,
        message: normalized.message,
      })
    }

    return new Response(JSON.stringify(normalized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    clearTimeout(timer)

    const isAbort = error?.name === 'AbortError'
    const normalized: WebhookResponse = {
      success: false,
      message: isAbort
        ? 'Tempo de resposta excedido. Tente novamente em alguns minutos.'
        : 'Falha de comunicação com o gerador de testes. Tente novamente em alguns minutos.',
      error: isAbort ? 'timeout' : 'network_error',
    }

    return new Response(JSON.stringify(normalized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
