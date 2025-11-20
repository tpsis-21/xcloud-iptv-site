'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Gift } from 'lucide-react'

interface TesteFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export default function TesteForm({ onSuccess, onError }: TesteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.email || !formData.telefone) {
      onError?.('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      onError?.('Por favor, insira um email válido.')
      return
    }

    // Validação de telefone brasileiro
    const telefoneLimpo = formData.telefone.replace(/\D/g, '')
    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
      onError?.('Por favor, insira um telefone válido com DDD.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n.tplay21.in/webhook/teste-xcloudtv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          email: formData.email.trim().toLowerCase(),
          telefone: telefoneLimpo,
          timestamp: new Date().toISOString(),
          origem: window.location.href,
          userAgent: navigator.userAgent
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar solicitação')
      }

      const result = await response.json()
      
      if (result.success) {
        onSuccess?.()
        // Limpar formulário
        setFormData({ nome: '', email: '', telefone: '' })
      } else {
        throw new Error(result.message || 'Erro ao processar solicitação')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      onError?.('Erro ao enviar solicitação. Tente novamente ou entre em contato conosco.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Formatação de telefone brasileiro
    if (name === 'telefone') {
      const numeroLimpo = value.replace(/\D/g, '')
      let telefoneFormatado = numeroLimpo
      
      if (numeroLimpo.length <= 11) {
        if (numeroLimpo.length > 6) {
          telefoneFormatado = `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 7)}-${numeroLimpo.slice(7, 11)}`
        } else if (numeroLimpo.length > 2) {
          telefoneFormatado = `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2)}`
        } else if (numeroLimpo.length > 0) {
          telefoneFormatado = `(${numeroLimpo}`
        }
      }
      
      setFormData(prev => ({ ...prev, telefone: telefoneFormatado }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
          placeholder="Seu nome completo"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
          placeholder="seu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
          WhatsApp *
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
          placeholder="(11) 9XXXX-XXXX"
          maxLength={15}
        />
      </div>
      
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="termos"
          name="termos"
          required
          defaultChecked
          disabled={isSubmitting}
          className="mt-1 h-4 w-4 text-green-500 focus:ring-green-500 border-gray-700 rounded disabled:opacity-50"
        />
        <label htmlFor="termos" className="text-sm text-gray-400">
          Ao solicitar o teste, você concorda com nossos{' '}
          <a href="/politica-de-privacidade" className="text-green-400 hover:text-green-300 underline">
            termos de uso e política de privacidade
          </a>{' '}
          e autoriza o envio das credenciais por email e WhatsApp
        </label>
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        <Gift className="mr-2 h-5 w-5" />
        {isSubmitting ? 'Enviando Solicitação...' : 'Receber Teste Grátis XCloud IPTV'}
      </Button>
    </form>
  )
}