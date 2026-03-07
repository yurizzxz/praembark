import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
  subtitle?: string
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
