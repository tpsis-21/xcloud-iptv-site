# 🎨 XCloud IPTV - Design System Documentation

**Version:** 1.0.0  
**Date:** 17/11/2025  
**Status:** Production Ready  
**Maintainer:** Development Team

---

## 📋 Table of Contents

1. [Design Tokens](#design-tokens)
2. [Typography](#typography)
3. [Color System](#color-system)
4. [Spacing System](#spacing-system)
5. [Components](#components)
6. [Layout Patterns](#layout-patterns)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Usage Examples](#usage-examples)
9. [Best Practices](#best-practices)

---

## 🎯 Design Tokens

### Brand Identity
```
Brand Name: XCloud IPTV
Brand Personality: Modern, Reliable, User-Friendly, Tech-Savvy
Target Audience: Brazilian IPTV users (18-65 years)
Brand Values: Quality, Innovation, Accessibility, Customer Support
```

### Design Principles
```
1. Mobile-First: All designs start with mobile
2. Accessibility: WCAG 2.1 AA compliance minimum
3. Performance: Lightweight, fast-loading components
4. Consistency: Unified experience across all pages
5. Clarity: Intuitive navigation and clear CTAs
```

---

## 📝 Typography

### Font Families
```css
/* Primary Font - Headings */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Secondary Font - Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace Font - Code/Special */
font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
```

### Font Sizes
```css
/* Heading Sizes */
.text-xs     { font-size: 0.75rem;   } /* 12px */
.text-sm     { font-size: 0.875rem;  } /* 14px */
.text-base   { font-size: 1rem;      } /* 16px */
.text-lg     { font-size: 1.125rem;  } /* 18px */
.text-xl     { font-size: 1.25rem;   } /* 20px */
.text-2xl    { font-size: 1.5rem;    } /* 24px */
.text-3xl    { font-size: 1.875rem;  } /* 30px */
.text-4xl    { font-size: 2.25rem;   } /* 36px */
.text-5xl    { font-size: 3rem;      } /* 48px */
```

### Font Weights
```css
font-thin      { font-weight: 100; }
font-extralight { font-weight: 200; }
font-light     { font-weight: 300; }
font-normal    { font-weight: 400; }
font-medium    { font-weight: 500; }
font-semibold  { font-weight: 600; }
font-bold      { font-weight: 700; }
font-extrabold { font-weight: 800; }
font-black     { font-weight: 900; }
```

### Line Heights
```css
leading-none    { line-height: 1;         }
leading-tight   { line-height: 1.25;      }
leading-snug    { line-height: 1.375;    }
leading-normal  { line-height: 1.5;       }
leading-relaxed { line-height: 1.625;     }
leading-loose   { line-height: 2;         }
```

### Typography Hierarchy
```html
<!-- H1 - Page Title -->
<h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
  XCloud IPTV - Streaming Completo
</h1>

<!-- H2 - Section Title -->
<h2 class="text-3xl md:text-4xl font-semibold text-white leading-snug">
  Planos e Preços
</h2>

<!-- H3 - Subsection -->
<h3 class="text-2xl md:text-3xl font-medium text-gray-200 leading-normal">
  Mensal
</h3>

<!-- Body Text -->
<p class="text-base md:text-lg text-gray-300 leading-relaxed">
  Assista a mais de 1000 canais ao vivo...
</p>

<!-- Small Text -->
<span class="text-sm text-gray-400 leading-normal">
  *Suporte em português
</span>
```

---

## 🎨 Color System

### Brand Colors
```css
/* Primary Brand Colors */
--color-primary: #10B981;        /* Emerald 500 - Main green */
--color-primary-dark: #059669;   /* Emerald 600 - Dark green */
--color-primary-light: #34D399;  /* Emerald 400 - Light green */

/* Secondary Brand Colors */
--color-secondary: #1F2937;      /* Gray 800 - Dark background */
--color-secondary-light: #374151; /* Gray 700 - Medium background */
--color-secondary-dark: #111827; /* Gray 900 - Darker background */
```

### Semantic Colors
```css
/* Success States */
--color-success: #10B981;        /* Emerald 500 */
--color-success-bg: #D1FAE5;     /* Emerald 100 */
--color-success-border: #A7F3D0; /* Emerald 200 */

/* Error States */
--color-error: #EF4444;          /* Red 500 */
--color-error-bg: #FEE2E2;       /* Red 100 */
--color-error-border: #FECACA;   /* Red 200 */

/* Warning States */
--color-warning: #F59E0B;        /* Amber 500 */
--color-warning-bg: #FEF3C7;     /* Amber 100 */
--color-warning-border: #FDE68A; /* Amber 200 */

/* Info States */
--color-info: #3B82F6;           /* Blue 500 */
--color-info-bg: #DBEAFE;        /* Blue 100 */
--color-info-border: #BFDBFE;  /* Blue 200 */
```

### Neutral Colors
```css
/* Grayscale for text and backgrounds */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-black: #000000;
```

### Color Usage Guidelines
```html
<!-- Primary CTA Button -->
<button class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
  Assinar Agora
</button>

<!-- Secondary Button -->
<button class="bg-gray-700 hover:bg-gray-600 text-white font-medium">
  Saiba Mais
</button>

<!-- Error Message -->
<div class="bg-red-100 border border-red-200 text-red-700 p-4 rounded-lg">
  Erro: Por favor, verifique seus dados.
</div>

<!-- Success Message -->
<div class="bg-emerald-100 border border-emerald-200 text-emerald-700 p-4 rounded-lg">
  Sucesso! Teste gratuito ativado.
</div>
```

---

## 📏 Spacing System

### Spacing Scale
```css
/* Based on 4px grid system */
.space-0   { margin/padding: 0;       } /* 0px */
.space-1   { margin/padding: 0.25rem; } /* 4px */
.space-2   { margin/padding: 0.5rem;  } /* 8px */
.space-3   { margin/padding: 0.75rem; } /* 12px */
.space-4   { margin/padding: 1rem;    } /* 16px */
.space-5   { margin/padding: 1.25rem; } /* 20px */
.space-6   { margin/padding: 1.5rem;  } /* 24px */
.space-8   { margin/padding: 2rem;    } /* 32px */
.space-10  { margin/padding: 2.5rem;  } /* 40px */
.space-12  { margin/padding: 3rem;    } /* 48px */
.space-16  { margin/padding: 4rem;    } /* 64px */
.space-20  { margin/padding: 5rem;    } /* 80px */
.space-24  { margin/padding: 6rem;    } /* 96px */
```

### Responsive Spacing
```html
<!-- Mobile-first spacing -->
<div class="p-4 md:p-6 lg:p-8">
  <!-- Mobile: 16px, Tablet: 24px, Desktop: 32px -->
</div>

<!-- Consistent spacing patterns -->
<section class="py-12 md:py-16 lg:py-20">
  <!-- Section padding -->
</section>

<!-- Component spacing -->
<div class="space-y-4">
  <!-- Consistent vertical spacing between children -->
</div>
```

---

## 🧩 Components

### Button Components
```html
<!-- Primary Button -->
<button class="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
  Assinar XCloud IPTV
</button>

<!-- Secondary Button -->
<button class="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
  Ver Planos
</button>

<!-- Outline Button -->
<button class="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
  Teste Grátis
</button>

<!-- Loading Button -->
<button disabled class="inline-flex items-center justify-center px-6 py-3 bg-emerald-400 text-white font-semibold rounded-lg cursor-not-allowed">
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processando...
</button>
```

### Form Components
```html
<!-- Form Input -->
<div class="space-y-2">
  <label for="email" class="block text-sm font-medium text-gray-300">
    Email
  </label>
  <input 
    type="email" 
    id="email" 
    name="email"
    class="block w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
    placeholder="seu@email.com"
    aria-describedby="email-error"
  >
  <p id="email-error" class="text-sm text-red-400 hidden">
    Por favor, insira um email válido.
  </p>
</div>

<!-- Form Select -->
<div class="space-y-2">
  <label for="plan" class="block text-sm font-medium text-gray-300">
    Plano
  </label>
  <select 
    id="plan" 
    name="plan"
    class="block w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
  >
    <option value="mensal">Mensal - R$ 30</option>
    <option value="trimestral">Trimestral - R$ 85</option>
    <option value="semestral">Semestral - R$ 160</option>
    <option value="anual">Anual - R$ 300</option>
  </select>
</div>

<!-- Form Checkbox -->
<div class="flex items-center space-x-3">
  <input 
    type="checkbox" 
    id="terms" 
    name="terms"
    class="w-4 h-4 text-emerald-600 bg-gray-800 border-gray-600 rounded focus:ring-emerald-500 focus:ring-2"
  >
  <label for="terms" class="text-sm text-gray-300">
    Aceito os termos e condições
  </label>
</div>
```

### Card Components
```html
<!-- Pricing Card -->
<div class="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-colors duration-300">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-xl font-semibold text-white">Plano Mensal</h3>
    <span class="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      MAIS POPULAR
    </span>
  </div>
  <div class="mb-6">
    <span class="text-3xl font-bold text-white">R$ 30</span>
    <span class="text-gray-400">/mês</span>
  </div>
  <ul class="space-y-3 mb-6">
    <li class="flex items-center text-gray-300">
      <svg class="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      +1000 canais ao vivo
    </li>
    <li class="flex items-center text-gray-300">
      <svg class="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      Suporte 24/7
    </li>
  </ul>
  <button class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
    Assinar Agora
  </button>
</div>

<!-- Feature Card -->
<div class="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">
  <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <!-- Icon SVG path -->
    </svg>
  </div>
  <h3 class="text-xl font-semibold text-white mb-2">Canais 4K</h3>
  <p class="text-gray-300 leading-relaxed">
    Conteúdo em ultra alta definição para uma experiência visual impressionante.
  </p>
</div>
```

---

## 📐 Layout Patterns

### Container Patterns
```html
<!-- Main Container -->
<div class="min-h-screen bg-gray-900">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <!-- Content goes here -->
  </div>
</div>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>

<!-- Flex Layout -->
<div class="flex flex-col md:flex-row items-center justify-between gap-6">
  <!-- Flex items -->
</div>
```

### Hero Section Pattern
```html
<section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        XCloud IPTV
        <span class="block text-emerald-400">Streaming Completo</span>
      </h1>
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Mais de 1000 canais ao vivo, filmes e séries em ultra alta qualidade.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
          Assinar Agora
        </button>
        <button class="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
          Teste Grátis
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## ♿ Accessibility Guidelines

### Semantic HTML Requirements
```html
<!-- Correct semantic structure -->
<main>
  <header>
    <nav aria-label="Main navigation">
      <!-- Navigation items -->
    </nav>
  </header>
  
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">XCloud IPTV</h1>
  </section>
  
  <footer>
    <!-- Footer content -->
  </footer>
</main>
```

### ARIA Labels and Roles
```html
<!-- Interactive elements -->
<button aria-label="Abrir menu de navegação" aria-expanded="false">
  ☰
</button>

<!-- Form elements -->
<input 
  type="email" 
  aria-label="Endereço de email"
  aria-required="true"
  aria-describedby="email-error"
>

<!-- Error messages -->
<div id="email-error" role="alert" class="text-red-400">
  Por favor, insira um email válido.
</div>

<!-- Loading states -->
<div role="status" aria-live="polite" class="sr-only">
  Carregando planos...
</div>
```

### Color Contrast Requirements
```css
/* All text must meet WCAG 2.1 AA standards */
/* Normal text: 4.5:1 contrast ratio */
/* Large text: 3:1 contrast ratio */

.text-white { color: #FFFFFF; } /* 21:1 on dark backgrounds */
.text-gray-900 { color: #111827; } /* 21:1 on white backgrounds */
.text-emerald-500 { color: #10B981; } /* 3.5:1 on white - use carefully */
```

---

## 💡 Usage Examples

### Complete Component Example
```tsx
// Button Component with full accessibility
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  ariaLabel,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500',
    outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white focus:ring-emerald-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-busy={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};
```

### Form Component Example
```tsx
// Input Component with validation
import React, { useState } from 'react';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  error,
  value,
  onChange
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        className="block text-sm font-medium text-gray-300"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={label.toLowerCase().replace(/\s+/g, '-')}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${label.toLowerCase().replace(/\s+/g, '-')}-error` : undefined}
          className={`
            block w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400
            focus:outline-none focus:ring-2 transition-colors duration-200
            ${error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-600 focus:ring-emerald-500 focus:border-emerald-500'
            }
            ${isFocused ? 'bg-gray-700' : 'bg-gray-800'}
          `}
        />
      </div>
      {error && (
        <p 
          id={`${label.toLowerCase().replace(/\s+/g, '-')}-error`}
          className="text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
```

---

## 🏆 Best Practices

### Component Development Guidelines
```
1. Single Responsibility: Each component should do one thing well
2. Props Interface: Always define TypeScript interfaces for props
3. Default Props: Provide sensible defaults for optional props
4. Accessibility: Include ARIA labels, keyboard navigation, and screen reader support
5. Performance: Use React.memo for expensive components
6. Error Boundaries: Wrap components with error handling
7. Loading States: Always handle loading and error states
8. Responsive Design: Mobile-first approach with responsive breakpoints
```

### CSS Best Practices
```
1. Utility-First: Use Tailwind utilities before custom CSS
2. Consistency: Follow the spacing and color system
3. Performance: Minimize custom CSS, use built-in utilities
4. Dark Mode: Ensure all components work in dark theme
5. Focus States: Always include visible focus indicators
6. Transitions: Use consistent transition durations (200ms default)
7. Hover States: Include hover effects for interactive elements
```

### Testing Guidelines
```
1. Unit Tests: Test component logic and state management
2. Integration Tests: Test component interactions
3. Accessibility Tests: Use automated accessibility testing tools
4. Visual Regression: Test for visual consistency
5. Performance Tests: Monitor component render performance
6. Cross-Browser: Test in major browsers (Chrome, Firefox, Safari, Edge)
```

---

## 📚 Additional Resources

### Design System Dependencies
```json
{
  "tailwindcss": "^3.x",
  "@headlessui/react": "^1.x",
  "@heroicons/react": "^2.x",
  "clsx": "^2.x",
  "class-variance-authority": "^0.x"
}
```

### Browser Support
```
- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Mobile
```

### Performance Targets
```
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1
- Speed Index: < 2.0s
```

---

## 🔄 Maintenance & Updates

### Version Control
- Document all changes in CHANGELOG.md
- Use semantic versioning for major updates
- Maintain backward compatibility when possible
- Test thoroughly before releasing updates

### Contributing Guidelines
- Follow the established patterns and conventions
- Test all changes across devices and browsers
- Update documentation for new components
- Ensure accessibility compliance for all additions

---

*This design system is a living document and should be updated as the project evolves. For questions or suggestions, please contact the development team.*