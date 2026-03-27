import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const useSolidNav = !isHome || scrolled

  useEffect(() => {
    function onScroll() {
      const nextScrolled = window.scrollY > 50
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        useSolidNav
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      role="banner"
    >
      <nav
        className="flex h-[72px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className={`text-xl font-bold tracking-[-0.03em] transition-colors duration-300 ${
            useSolidNav ? 'text-slate-950 hover:text-[#4C5F4D]' : 'text-white hover:text-white/80'
          }`}
        >
          Dazarus
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`group relative text-sm font-medium transition-colors duration-200 ${
                useSolidNav
                  ? 'text-slate-700 hover:text-[#4C5F4D]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                  useSolidNav ? 'bg-[#5C735E]' : 'bg-white'
                }`}
                aria-hidden
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={`ml-2 rounded-full px-6 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
              useSolidNav
                ? 'bg-slate-950 text-white hover:bg-slate-800'
                : 'border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
            }`}
          >
            Talk to Us
          </Link>
        </div>

        <button
          type="button"
          className={`flex md:hidden rounded-lg p-2 transition-colors ${
            useSolidNav
              ? 'text-slate-700 hover:bg-slate-100'
              : 'text-white hover:bg-white/10'
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
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
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
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed left-4 right-4 top-20 z-50 md:hidden"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4 rounded-[24px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block py-1 text-slate-700 transition-colors duration-200 hover:text-[#4C5F4D]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-medium text-white transition duration-300 hover:bg-slate-800"
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
