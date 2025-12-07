"use client"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const lt = lastTouchRef.current
      if (!lt) return
      const dx = Math.abs(e.clientX - lt.x)
      const dy = Math.abs(e.clientY - lt.y)
      const dt = Date.now() - lt.t
      if (dt < 600 && dx < 25 && dy < 25) {
        e.preventDefault()
        e.stopPropagation()
      }
      lastTouchRef.current = null
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])
  const [canClose, setCanClose] = useState(false)
  const [entered, setEntered] = useState(false)
  const lastTouchRef = useRef<{ x: number; y: number; t: number } | null>(null)
  const handleOpen = (e?: any) => {
    if (e) { e.preventDefault(); e.stopPropagation() }
    setCanClose(false)
    setEntered(false)
    setTimeout(() => {
      setOpen(true)
      setTimeout(() => {
        setEntered(true)
        setTimeout(() => setCanClose(true), 450)
      }, 0)
    }, 0)
  }
  
  return (
    <header className="fixed top-0 w-full z-[2147483647] bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <nav className="page-container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Página inicial XCloud IPTV" className="flex items-center gap-3">
          <img 
            src="/logo_app_xcloudtv.png"
            alt="XCloud IPTV"
            width={150}
            height={40}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-10 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/teste-gratis-xcloud-iptv" className="text-gray-300 hover:text-brand-light transition-colors relative group">
            Teste Grátis
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/planos-xcloud-iptv" className="text-gray-300 hover:text-brand-light transition-colors relative group">
            Planos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/sobre-nos" className="text-gray-300 hover:text-brand-light transition-colors relative group">
            Sobre Nós
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contato" className="text-gray-300 hover:text-brand-light transition-colors relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/teste-gratis-xcloud-iptv" 
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className="flex items-center space-x-2">
              <Rocket className="h-4 w-4" />
              <span>Teste Grátis</span>
            </span>
          </Link>
        </div>
        
        <button 
          aria-label="Abrir menu" 
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="md:hidden relative z-50 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-black/50 text-white hover:border-brand hover:text-brand-light transition-all duration-300"
          style={{ touchAction: 'manipulation' }}
          type="button"
          disabled={open}
          onClick={handleOpen}
          onTouchEnd={(ev) => { const t = (ev as unknown as TouchEvent).changedTouches?.[0]; if (t) { lastTouchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() } } ; handleOpen(ev) }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(e) }}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      
      {mounted && open && createPortal(
        <div role="dialog" aria-modal="true" className="fixed inset-0 w-full h-screen bg-black/90 z-[2147483647] flex justify-end" style={{ WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}>
          <div className="absolute inset-0" style={{ pointerEvents: canClose ? 'auto' : 'none' }} onClick={() => setOpen(false)} />
          <aside 
            id="mobile-menu" 
            aria-label="Menu de navegação" 
            className={`fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-gray-900 border-l border-gray-800 shadow-2xl overflow-y-auto z-[2147483647] touch-pan-y transform transition-transform duration-300 ${entered ? 'translate-x-0' : 'translate-x-full'}`}
            onTransitionEnd={() => setCanClose(true)}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button 
                aria-label="Fechar menu" 
                className="absolute right-6 top-8 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 hover:border-brand hover:text-brand-light transition-all duration-300 z-50 bg-gray-800 text-white" 
                disabled={!canClose}
                style={{ pointerEvents: canClose ? 'auto' : 'none' }}
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="mt-16 flex flex-col gap-4 text-lg">
                <Link href="/teste-gratis-xcloud-iptv" onClick={() => setOpen(false)} className="flex items-center space-x-3 text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  <Rocket className="h-5 w-5" />
                  <span>Teste Grátis</span>
                </Link>
                <Link href="/planos-xcloud-iptv" onClick={() => setOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Planos
                </Link>
                <Link href="/sobre-nos" onClick={() => setOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Sobre Nós
                </Link>
                <Link href="/contato" onClick={() => setOpen(false)} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Contato
                </Link>
              </div>
              <div className="mt-12 p-4 glass-card rounded-xl">
                <div className="text-center space-y-3">
                  <Rocket className="h-8 w-8 text-brand mx-auto" />
                  <div className="text-white font-semibold">Pronto para começar?</div>
                  <div className="text-gray-400 text-sm">Teste grátis sem compromisso</div>
                  <Link href="/teste-gratis-xcloud-iptv" onClick={() => setOpen(false)} className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold text-center">
                    Ativar Teste Grátis
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>, document.body
      )}
    </header>
  )
}
