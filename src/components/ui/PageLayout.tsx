import type { ReactNode } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

type PageLayoutProps = {
  children: ReactNode
  title: string
  description: string
  maxWidth?: '2xl' | '4xl' | '6xl'
}

const maxWidthClasses = {
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
}

export function PageLayout({
  children,
  title,
  description,
  maxWidth = '4xl',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-[#0F172A]">
      <Navbar />
      <main
        className={`${maxWidthClasses[maxWidth]} mx-auto px-6 py-20 md:py-28`}
      >
        <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-[18px] leading-relaxed text-slate-600">
          {description}
        </p>
        {children}
      </main>
      <Footer />
    </div>
  )
}
