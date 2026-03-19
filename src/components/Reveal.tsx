import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [visibleAtTop, setVisibleAtTop] = useState(false)
  const { pathname } = useLocation()

  // When on Home or when mounting near top of page, show immediately
  // so content isn't stuck dim after navigating to Home (scroll-to-top runs after paint)
  useEffect(() => {
    if (pathname === '/') {
      setVisibleAtTop(true)
    } else if (typeof window !== 'undefined' && window.scrollY < 400) {
      setVisibleAtTop(true)
    }
  }, [pathname])

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
