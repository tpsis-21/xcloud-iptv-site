/**
 * Serviço de integração com webhook para geração de testes XCloud IPTV
 */

export interface WebhookPayload {
  nome: string;
  email: string;
  telefone: string;
}

export interface WebhookResponse {
  success: boolean;
  message: string;
  data?: {
    usuario?: string;
    senha?: string;
    url_acesso?: string;
    validade?: string;
    instrucoes?: string[];
  };
  error?: string;
}

/**
 * Envia dados para o webhook de geração de teste
 */
export async function enviarDadosTeste(payload: WebhookPayload): Promise<WebhookResponse> {
  const WEBHOOK_URL = 'https://n8n.tplay21.in/webhook/teste-xcloudtv';
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    
    // Validar estrutura da resposta
    if (data.success === undefined) {
      throw new Error('Resposta do webhook inválida: missing success field');
    }

    return data as WebhookResponse;
    
  } catch (error) {
    console.error('Erro ao enviar dados para webhook:', error);
    
    // Retornar erro estruturado para tratamento na interface
    return {
      success: false,
      message: 'Erro ao processar solicitação',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}

/**
 * Valida dados antes de enviar para o webhook
 */
export function validarDadosTeste(payload: WebhookPayload): { valido: boolean; erros: string[] } {
  const erros: string[] = [];
  
  // Validação de nome
  if (!payload.nome || payload.nome.trim().length < 3) {
    erros.push('Nome deve ter pelo menos 3 caracteres');
  }
  
  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email)) {
    erros.push('Email inválido');
  }
  
  // Validação de telefone (formato brasileiro)
  const telefoneRegex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
  if (!payload.telefone || !telefoneRegex.test(payload.telefone.replace(/\D/g, ''))) {
    erros.push('Telefone inválido (use formato: (XX) XXXXX-XXXX)');
  }
  
  return {
    valido: erros.length === 0,
    erros,
  };
}

/**
 * Formata mensagem de resposta para exibição na interface
 */
export function formatarMensagemResposta(response: WebhookResponse): string {
  return response.message || 'Teste gerado com sucesso!';
}