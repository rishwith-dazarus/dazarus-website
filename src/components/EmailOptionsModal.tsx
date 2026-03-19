import { useEffect } from 'react'
import { ExternalLink, Mail, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type EmailOptionsModalProps = {
  open: boolean
  onClose: () => void
  to: string
  subject?: string
  body?: string
}

function enc(value: string) {
  return encodeURIComponent(value)
}

export function EmailOptionsModal({
  open,
  onClose,
  to,
  subject = 'Dazarus — New inquiry',
  body = '',
}: EmailOptionsModalProps) {
  const mailto = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close email options"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Choose email option"
            className="fixed left-4 right-4 top-24 z-[60] mx-auto max-w-md"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">Email Dazarus</p>
                  <p className="mt-1 text-sm text-slate-600">{to}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href={mailto}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-slate-800 transition hover:border-[#5C735E]/30"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#5C735E]" aria-hidden />
                    Default mail app
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden />
                </a>

                <a
                  href={gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-slate-800 transition hover:border-[#5C735E]/30"
                >
                  <span>Gmail (web)</span>
                  <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden />
                </a>

                <a
                  href={outlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-slate-800 transition hover:border-[#5C735E]/30"
                >
                  <span>Outlook (web)</span>
                  <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

