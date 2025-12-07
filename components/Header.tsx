"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Rocket } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <nav className="page-container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Página inicial XCloud IPTV" className="flex items-center gap-3" onClick={closeMenu}>
          <Image 
            src="/logo_app_xcloudtv.png"
            alt="XCloud IPTV"
            width={150}
            height={40}
            priority
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
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="md:hidden relative z-50 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-black/50 text-white hover:border-brand hover:text-brand-light transition-all duration-300"
          type="button"
          onClick={toggleMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {open && createPortal(
        <div role="dialog" aria-modal="true" className="fixed inset-0 w-full h-screen bg-black/90 z-[100] flex justify-end" style={{ WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}>
          <div className="absolute inset-0" onClick={closeMenu} />
          <aside 
            id="mobile-menu" 
            aria-label="Menu de navegação" 
            className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-gray-900 border-l border-gray-800 shadow-2xl overflow-y-auto z-[100] touch-pan-y"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button 
                  aria-label="Fechar menu" 
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 hover:border-brand hover:text-brand-light transition-all duration-300 bg-gray-800 text-white" 
                  onClick={closeMenu}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-4 text-lg">
                <Link href="/teste-gratis-xcloud-iptv" onClick={closeMenu} className="flex items-center space-x-3 text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  <Rocket className="h-5 w-5" />
                  <span>Teste Grátis</span>
                </Link>
                <Link href="/planos-xcloud-iptv" onClick={closeMenu} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Planos
                </Link>
                <Link href="/sobre-nos" onClick={closeMenu} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Sobre Nós
                </Link>
                <Link href="/contato" onClick={closeMenu} className="text-gray-300 hover:text-brand-light transition-colors p-3 rounded-lg hover:bg-gray-800/50 min-h-[44px]">
                  Contato
                </Link>
              </div>
              <div className="mt-12 p-4 glass-card rounded-xl">
                <div className="text-center space-y-3">
                  <Rocket className="h-8 w-8 text-brand mx-auto" />
                  <div className="text-white font-semibold">Pronto para começar?</div>
                  <div className="text-gray-400 text-sm">Teste grátis sem compromisso</div>
                  <Link href="/teste-gratis-xcloud-iptv" onClick={closeMenu} className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold text-center">
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