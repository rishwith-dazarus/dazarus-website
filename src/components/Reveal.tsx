import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { pathname } = useLocation()

  const visibleAtTop =
    pathname === '/' ||
    (typeof window !== 'undefined' && typeof window.scrollY === 'number' && window.scrollY < 400)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={
        visibleAtTop || inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 40 }
      }
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
