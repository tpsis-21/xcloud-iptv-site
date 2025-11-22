import { useEffect, useState } from 'react'

interface OptimizedStylesProps {
  href: string
  onLoad?: () => void
}

export function OptimizedStyles({ href, onLoad }: OptimizedStylesProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.media = 'print'
    link.onload = () => {
      link.media = 'all'
      setIsLoaded(true)
      onLoad?.()
    }
    
    document.head.appendChild(link)
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [href, onLoad])

  return null
}

// Componente para preload de fontes críticas
export function PreloadFont({ href, type = 'font/woff2' }: { href: string; type?: string }) {
  return (
    <link
      rel="preload"
      href={href}
      as="font"
      type={type}
      crossOrigin="anonymous"
    />
  )
}