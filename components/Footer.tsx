import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/app/assets/images/logo_app_xcloudtv.png'
import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  Tv, 
  Download, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck,
  Clock,
  Zap,
  Star,
  MapPin,
  Phone,
  MailIcon
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Seção Principal do Rodapé */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src={logoImg}
                alt="XCloud IPTV Logo"
                width={32}
                height={32}
                className="rounded-lg object-contain"
                priority
              />
              <h3 className="text-xl font-bold text-white">XCloud IPTV</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A melhor experiência de streaming com XCloud IPTV. Milhares de canais, filmes e séries para toda a família.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>100% Seguro</span>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Home
              </Link>
              <Link href="/planos-xcloud-iptv" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Planos
              </Link>
              <Link href="/teste-gratis-xcloud-iptv" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Teste Grátis
              </Link>
              <Link href="/download" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Download
              </Link>
              <Link href="/sobre-nos" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Sobre Nós
              </Link>
              <Link href="/contato" className="block text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline">
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3 - Dispositivos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Dispositivos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Tv className="h-4 w-4 text-green-500" />
                <span>Smart TV Samsung, LG</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Smartphone className="h-4 w-4 text-green-500" />
                <span>Android e iOS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Download className="h-4 w-4 text-green-500" />
                <span>TV Box e Fire TV</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Zap className="h-4 w-4 text-green-500" />
                <span>Computador Web</span>
              </div>
            </div>
          </div>

          {/* Coluna 4 - Suporte e Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Suporte</h3>
            <div className="space-y-3">
              <Link 
                href="/contato" 
                className="flex items-center space-x-2 text-gray-300 hover:text-green-500 transition-colors text-sm underline hover:no-underline"
              >
                <Mail className="h-4 w-4" />
                <span>Email: suporte@xcloudtv.com.br</span>
              </Link>
              <div className="text-xs text-gray-400">
                <p>Atendimento: Segunda a Sábado</p>
                <p>Horário: 9h às 22h</p>
              </div>
              <div className="pt-4">
                <Button 
                  size="sm" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <Link href="/contato">
                    <Mail className="h-4 w-4 mr-2" />
                    Falar com Suporte
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Divisão */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Seção de Links Legais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Legal</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-gray-300">
                Termos de Serviço
              </span>
              <span className="text-gray-300">
                Política de Privacidade
              </span>
              <span className="text-gray-300">
                Política de Reembolso
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300 text-center md:text-left">
              <p>&copy; {currentYear} XCloud IPTV. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-green-500" />
                <span>Excelente experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
