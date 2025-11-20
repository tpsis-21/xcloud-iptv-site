"use client"
import * as React from 'react'

function rgbToHslComponents(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  const hh = Math.round(h * 360)
  const ss = Math.round(s * 100)
  const ll = Math.round(l * 100)
  return `${hh} ${ss}% ${ll}%`
}

type Props = { src: string }

export function BrandThemeProvider({ src }: Props) {
  React.useEffect(() => {
    if (!src) return
    const img = new Image()
    img.src = src
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.drawImage(img, 0, 0)
        const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height)
        let r = 0, g = 0, b = 0, count = 0
        const step = Math.max(4, Math.floor((width * height) / 5000))
        for (let i = 0; i < data.length; i += 4 * step) {
          r += data[i]
          g += data[i + 1]
          b += data[i + 2]
          count++
        }
        if (count === 0) return
        r = Math.round(r / count)
        g = Math.round(g / count)
        b = Math.round(b / count)
        const hsl = rgbToHslComponents(r, g, b)
        const [hStr, sStr, lStr] = hsl.split(' ')
        const h = parseInt(hStr, 10)
        const s = parseInt(sStr, 10)
        const l = parseInt(lStr, 10)
        const darkL = Math.max(0, Math.min(100, l - 5))
        const accentL = Math.max(0, Math.min(100, l + 40))
        document.documentElement.style.setProperty('--brand', `${h} ${s}% ${l}%`)
        document.documentElement.style.setProperty('--brand-dark', `${h} ${s}% ${darkL}%`)
        document.documentElement.style.setProperty('--accent', `${h} ${Math.min(100, s - 10)}% ${accentL}%`)
        document.documentElement.style.setProperty('--ring', `var(--brand)`)
      } catch {}
    }
  }, [src])
  return null
}
