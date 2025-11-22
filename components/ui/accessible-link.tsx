import Link from 'next/link'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface AccessibleLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
  underline?: boolean
  external?: boolean
}

const linkVariants = {
  default: 'text-green-400 hover:text-green-300',
  primary: 'text-green-500 hover:text-green-400 font-medium',
  secondary: 'text-gray-300 hover:text-gray-200',
  muted: 'text-gray-400 hover:text-gray-300'
}

export const AccessibleLink = forwardRef<HTMLAnchorElement, AccessibleLinkProps>(
  ({ className, variant = 'default', underline = true, external, children, ...props }, ref) => {
    const variantClasses = linkVariants[variant]
    const underlineClasses = underline ? 'underline underline-offset-2' : ''
    
    return (
      <Link
        ref={ref}
        className={cn(
          variantClasses,
          underlineClasses,
          'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded',
          className
        )}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

AccessibleLink.displayName = 'AccessibleLink'