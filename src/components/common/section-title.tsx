import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
  subtitle?: string
  as?: 'h1' | 'h2'
}

export function SectionTitle({ children, className, subtitle, as: Heading = 'h2' }: SectionTitleProps) {
  return (
    <div className={cn('md:text-center', className)}>
      <Heading className="text-3xl md:text-4xl font-bold mb-1">
        {children}
      </Heading>
      {subtitle && (
        <p className="text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
