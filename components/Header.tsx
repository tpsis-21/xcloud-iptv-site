"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/logo_app_xcloudtv.png'

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
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800">
      <nav className="page-container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Página inicial XCloud IPTV" className="flex items-center gap-3 relative z-[60]" onClick={closeMenu}>
          <Image 
            src={logo}
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
          className="md:hidden relative z-[60] inline-flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/50 text-white hover:border-brand hover:text-brand-light transition-all duration-300"
          type="button"
          onClick={toggleMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu - Simplified Logic */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 md:hidden flex flex-col pt-24 px-6 h-screen w-screen overflow-y-auto">
          <div className="flex flex-col gap-4 text-lg animate-in fade-in slide-in-from-top-10 duration-200">
            <Link href="/teste-gratis-xcloud-iptv" onClick={closeMenu} className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 p-4 rounded-xl border border-gray-800 transition-all">
              <Rocket className="h-5 w-5 text-brand" />
              <span className="font-medium">Teste Grátis</span>
            </Link>
            <Link href="/planos-xcloud-iptv" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-gray-800 p-4 rounded-xl border border-gray-800 transition-all">
              <span className="font-medium">Planos</span>
            </Link>
            <Link href="/sobre-nos" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-gray-800 p-4 rounded-xl border border-gray-800 transition-all">
              <span className="font-medium">Sobre Nós</span>
            </Link>
            <Link href="/contato" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-gray-800 p-4 rounded-xl border border-gray-800 transition-all">
              <span className="font-medium">Contato</span>
            </Link>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Comece Agora</div>
                  <div className="text-gray-400 text-sm mt-1">Teste grátis sem compromisso</div>
                </div>
                <Link href="/teste-gratis-xcloud-iptv" onClick={closeMenu} className="block w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold text-center transition-all shadow-lg shadow-brand/20">
                  Ativar Teste Grátis
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}