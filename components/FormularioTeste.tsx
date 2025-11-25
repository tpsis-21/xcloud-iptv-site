'use client';

import { useState } from 'react';
import { Zap, Loader2, CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import Link from 'next/link';
import { FormInput } from '@/components/ui/FormInput';
import { FormButton } from '@/components/ui/FormButton';
import { 
  enviarDadosTeste, 
  validarDadosTeste, 
  formatarMensagemResposta,
  type WebhookResponse 
} from '@/lib/webhook-service';

interface FormularioTesteProps {
  onSuccess?: (response: WebhookResponse) => void;
  onError?: (error: string) => void;
}

export function FormularioTeste({ onSuccess, onError }: FormularioTesteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<WebhookResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Limpar erro ao digitar
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResponse(null);

    try {
      // Validação de dados
      const payload = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: formData.telefone.trim(),
      };

      // Validação customizada - removida a verificação de termos

      const validacao = validarDadosTeste(payload);
      if (!validacao.valido) {
        throw new Error(validacao.erros.join('\\n'));
      }

      // Enviar para webhook
      const webhookResponse = await enviarDadosTeste(payload);

      if (webhookResponse.success) {
        setResponse(webhookResponse);
        onSuccess?.(webhookResponse);
      } else {
        setResponse(webhookResponse);
        onError?.(webhookResponse.message);
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatarTelefone = (value: string) => {
    // Remove tudo que não é número
    const numero = value.replace(/\D/g, '');
    
    // Aplica formatação progressiva
    if (numero.length <= 10) {
      return numero.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      return numero.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatarTelefone(e.target.value);
    setFormData(prev => ({
      ...prev,
      telefone: formatted,
    }));
  };

  if (response?.success) {
    return (
      <div className="glass-card rounded-2xl p-8 border border-green-500/20 relative">
        <button
          type="button"
          aria-label="Fechar mensagem"
          className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
          onClick={() => { setResponse(null); setError(''); }}
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <div className="text-gray-300 whitespace-pre-line">
            {response.message || 'Teste gerado com sucesso!'}
          </div>
          
          {response.data && (
            <div className="bg-gray-800/50 rounded-lg p-4 text-left">
              <div className="space-y-1 text-sm text-gray-300">
                {response.data.usuario && (
                  <p><span className="text-green-400">Usuário:</span> {response.data.usuario}</p>
                )}
                {response.data.senha && (
                  <p><span className="text-green-400">Senha:</span> {response.data.senha}</p>
                )}
                {response.data.url_acesso && (
                  <p><span className="text-green-400">URL:</span> {response.data.url_acesso}</p>
                )}
                {response.data.validade && (
                  <p><span className="text-green-400">Validade:</span> {response.data.validade}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (response && !response.success) {
    return (
      <div className="glass-card rounded-2xl p-8 border border-yellow-500/20 relative" role="status" aria-live="polite">
        <button
          type="button"
          aria-label="Fechar mensagem"
          className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
          onClick={() => { setResponse(null); setError(''); }}
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
            <Info className="h-8 w-8 text-black" />
          </div>
          <div className="text-gray-200 whitespace-pre-line">
            {response.message}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/planos-xcloud-iptv#planos" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Ver Planos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8 border border-green-500/20">
      <div className="text-center pb-6">
        <h3 className="text-2xl font-bold text-white">Solicitar Experiência Grátis</h3>
        <p className="text-gray-400">Preencha o formulário e receba seu acesso em minutos</p>
      </div>
      
      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="nome"
          label="Nome Completo"
          type="text"
          placeholder="Seu nome completo"
          required
          value={formData.nome}
          onChange={handleInputChange}
          ariaDescribedBy="nome-help"
        />
        <p id="nome-help" className="text-sm text-gray-400 -mt-4">
          Seu nome será usado para criar sua conta XCloud IPTV
        </p>
        
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="seu@email.com"
          required
          value={formData.email}
          onChange={handleInputChange}
          ariaDescribedBy="email-help"
        />
        <p id="email-help" className="text-sm text-gray-400 -mt-4">
          Enviaremos as instruções do teste para este email
        </p>
        
        <FormInput
          id="telefone"
          label="Telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          required
          value={formData.telefone}
          onChange={handleTelefoneChange}
          ariaDescribedBy="telefone-help"
        />
        <p id="telefone-help" className="text-sm text-gray-400 -mt-4">
          Usado apenas para confirmação do teste grátis
        </p>
        
        <div className="text-xs text-gray-400 text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700">
          <p>Ao solicitar o teste você concorda com os <a href="/termos-de-uso" className="text-green-400 hover:text-green-300 underline">termos de uso</a>.</p>
        </div>
        
        <FormButton 
          type="submit"
          disabled={isLoading}
          ariaLabel="Solicitar teste grátis XCloud IPTV"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Processando...
            </>
          ) : (
            <>
              <Zap className="h-5 w-5 mr-2" />
              Solicitar Teste Grátis
            </>
          )}
        </FormButton>
      </form>
    </div>
  );
}
