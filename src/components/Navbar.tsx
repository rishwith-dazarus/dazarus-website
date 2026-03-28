import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pastHomeHero, setPastHomeHero] = useState(false)
  const { pathname } = useLocation()

  /** Transparent over homepage hero only */
  const heroOverlayNav = pathname === '/' && !pastHomeHero
  /** Solid dark bar after leaving hero (and on all routes off home) */
  const solidDarkNav = !heroOverlayNav

  useEffect(() => {
    const navH = 72

    function updatePastHero() {
      if (pathname !== '/') {
        setPastHomeHero((p) => (p === true ? p : true))
        return
      }
      const hero = document.getElementById('home-hero')
      if (!hero) {
        setPastHomeHero(window.scrollY > navH)
        return
      }
      const threshold = hero.offsetTop + hero.offsetHeight - navH
      const next = window.scrollY > threshold
      setPastHomeHero((prev) => (prev === next ? prev : next))
    }

    updatePastHero()
    window.addEventListener('scroll', updatePastHero, { passive: true })
    window.addEventListener('resize', updatePastHero)
    return () => {
      window.removeEventListener('scroll', updatePastHero)
      window.removeEventListener('resize', updatePastHero)
    }
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-solid transition-[background-color,box-shadow,border-color] duration-[260ms] ease-in-out ${
        heroOverlayNav
          ? 'border-b-transparent bg-transparent shadow-none'
          : 'border-b-[rgba(255,255,255,0.05)] bg-[rgba(8,12,16,0.96)] shadow-[0_6px_20px_rgba(0,0,0,0.24)]'
      }`}
      role="banner"
    >
      <nav
        className="flex h-[72px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className={`text-xl font-bold tracking-[-0.03em] transition-colors duration-300 ease-in-out ${
            heroOverlayNav
              ? 'text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] hover:text-white/90'
              : 'text-white hover:text-white/95'
          }`}
        >
          Dazarus
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`group relative text-sm font-medium transition-colors duration-200 ease-in-out ${
                heroOverlayNav
                  ? 'text-white/82 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] hover:text-white'
                  : 'text-white/[0.95] hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 ${
                  solidDarkNav ? 'bg-white/90' : 'bg-white'
                }`}
                aria-hidden
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={`ml-2 rounded-full px-6 py-2.5 text-sm font-medium transition duration-[260ms] ease-in-out hover:-translate-y-0.5 ${
              heroOverlayNav
                ? 'border border-white/40 bg-white/[0.16] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] hover:border-white/52 hover:bg-white/[0.22]'
                : 'bg-[#5C735E] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28),0_2px_8px_rgba(76,95,77,0.28)] hover:bg-[#4C5F4D] hover:shadow-[0_6px_18px_rgba(0,0,0,0.32),0_3px_10px_rgba(76,95,77,0.35)]'
            }`}
          >
            Talk to Us
          </Link>
        </div>

        <button
          type="button"
          className={`flex rounded-lg p-2 transition-colors duration-200 ease-in-out md:hidden ${
            heroOverlayNav
              ? 'text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] hover:bg-white/10'
              : 'text-white hover:bg-white/[0.08]'
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed left-4 right-4 top-20 z-50 md:hidden"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded-lg p-2 text-white/60 transition-colors duration-200 ease-in-out hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4 rounded-[24px] border border-[rgba(255,255,255,0.05)] bg-[rgba(8,12,16,0.98)] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.24)] transition-[background-color,box-shadow,border-color] duration-[260ms] ease-in-out">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block py-1 text-[0.9375rem] text-white/[0.95] transition-colors duration-200 ease-in-out hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block rounded-full bg-[#5C735E] px-5 py-3 text-center text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.28),0_2px_8px_rgba(76,95,77,0.26)] transition duration-[260ms] ease-in-out hover:bg-[#4C5F4D] hover:shadow-[0_6px_18px_rgba(0,0,0,0.32),0_3px_10px_rgba(76,95,77,0.32)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
