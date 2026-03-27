import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isDesktop = window.innerWidth >= 768

    // Keep native scrolling on small viewports and reduced-motion environments.
    if (!isDesktop || isReducedMotion) {
      lenisRef.current = null
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 0.95,
      wheelMultiplier: 0.85,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }
    rafIdRef.current = requestAnimationFrame(raf)

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Scroll to top on every route change so new pages always start at the top
  useEffect(() => {
    if (!lenisRef.current) {
      // Fallback in case Lenis isn't ready yet
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }
    lenisRef.current.scrollTo(0, { duration: 0 })
  }, [pathname])

  return <>{children}</>
}
