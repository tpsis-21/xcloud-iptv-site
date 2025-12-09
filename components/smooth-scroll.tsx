'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function SmoothScroll() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Restaurar comportamento padrão (instantâneo) ao mudar de rota
    document.documentElement.style.scrollBehavior = 'auto'

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      // Se for um link de âncora interno (ex: #faq)
      if (href.startsWith('#')) {
        e.preventDefault()
        const id = href.substring(1)
        const element = document.getElementById(id)
        
        if (element) {
          // Ativar smooth scroll apenas para esta ação
          document.documentElement.style.scrollBehavior = 'smooth'
          element.scrollIntoView({ behavior: 'smooth' })
          
          // Atualizar URL sem recarregar
          window.history.pushState(null, '', href)
          
          // Resetar para auto após a animação (timeout de segurança)
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'auto'
          }, 1000)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [pathname, searchParams])

  return null
}
