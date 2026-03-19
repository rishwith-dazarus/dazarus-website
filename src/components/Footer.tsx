import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { EmailOptionsModal } from './EmailOptionsModal'

export function Footer() {
  const [emailOpen, setEmailOpen] = useState(false)
  const contactEmail = 'accounts@dazarus.com'

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="w-full bg-slate-950 px-6 py-10 text-slate-300 sm:px-10 sm:py-12 lg:px-16 xl:px-20"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-[-0.03em] text-white">
            Dazarus
          </p>
          <p className="mt-2 text-sm text-slate-400">
            © 2024 by Dazarus Private Limited
          </p>
        </div>

        <div className="flex items-center gap-3 text-slate-400 sm:justify-end">
          <button
            type="button"
            onClick={() => setEmailOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
            aria-label="Email Dazarus"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </button>
          <a
            href="https://linkedin.com/company/dazarus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
            aria-label="Dazarus on LinkedIn"
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      <EmailOptionsModal
        open={emailOpen}
        onClose={() => setEmailOpen(false)}
        to={contactEmail}
        subject="Dazarus — New inquiry"
      />
    </motion.footer>
  )
}
