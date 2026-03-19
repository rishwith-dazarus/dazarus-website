import type { ReactNode } from 'react'

type PageSectionProps = {
  children: ReactNode
  className?: string
}

export function PageSection({ children, className = '' }: PageSectionProps) {
  return (
    <section
      className={`mt-12 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm card-smooth card-lift ${className}`}
    >
      {children}
    </section>
  )
}
