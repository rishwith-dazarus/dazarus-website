import { useId, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { EmailOptionsModal } from '../components/EmailOptionsModal'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )
  const [emailOpen, setEmailOpen] = useState(false)
  const statusId = useId()
  const contactEmail = 'accounts@dazarus.com'

  const emailBody = useMemo(
    () => `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    [email, message, name]
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prefer a deployed backend endpoint (Netlify Function). If not available (local dev),
      // fall back to opening a pre-filled email draft.
      const configured = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
      const endpoint =
        configured && configured.trim().length > 0
          ? configured
          : '/.netlify/functions/contact'

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Contact endpoint failed')

      setSubmitStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Contact — Dazarus</title>
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mt-5 text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl">
                Talk to Us
              </h1>
              <p className="mt-6 max-w-none text-xl leading-8 text-slate-600">
                Share your product idea — we’ll respond within 1–2 business days.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-12 rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[#5C735E]/30 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-10"
                aria-describedby={statusId}
              >
                <p id={statusId} className="text-sm text-slate-500">
                  We usually reply within 1–2 business days. We’ll only use your
                  details to respond to this message.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={submitting}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 text-slate-900 transition focus:border-[#5C735E] focus:outline-none focus:ring-2 focus:ring-[#5C735E]/20"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={submitting}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 text-slate-900 transition focus:border-[#5C735E] focus:outline-none focus:ring-2 focus:ring-[#5C735E]/20"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={submitting}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 text-slate-900 transition focus:border-[#5C735E] focus:outline-none focus:ring-2 focus:ring-[#5C735E]/20"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 rounded-xl border border-[#5C735E]/30 bg-[#f0f7f0] px-4 py-3 text-sm text-slate-700">
                    Thanks — your message has been sent. We’ll get back to you
                    soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again, or email us at{' '}
                    <button
                      type="button"
                      onClick={() => setEmailOpen(true)}
                      className="font-medium underline"
                    >
                      {contactEmail}
                    </button>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 rounded-full bg-[#5C735E] px-8 py-4 font-medium text-white transition duration-300 hover:bg-[#4C5F4D] hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>

              <div className="mt-10 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:hidden">
                <p className="text-sm font-bold text-slate-900">
                  Prefer to reach out directly?
                </p>
                <div className="mt-4 space-y-3 text-slate-600">
                  <button
                    type="button"
                    onClick={() => setEmailOpen(true)}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#5C735E]/30"
                  >
                    <Mail className="h-5 w-5 text-[#5C735E]" aria-hidden />
                    <span className="font-medium">{contactEmail}</span>
                  </button>
                  <a
                    href="https://linkedin.com/company/dazarus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#5C735E]/30"
                  >
                    <Linkedin className="h-5 w-5 text-[#5C735E]" aria-hidden />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  We usually reply within 1–2 business days.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-bold text-slate-900">Contact Details</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We usually reply within 1–2 business days.
                </p>
                <div className="mt-6 space-y-4 text-slate-600">
                  <p>
                    <button
                      type="button"
                      onClick={() => setEmailOpen(true)}
                      className="inline-flex items-center gap-2 text-[#5C735E] hover:underline"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      <span className="font-medium">{contactEmail}</span>
                    </button>
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/company/dazarus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5C735E] hover:underline"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </p>
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-500">
                  We’ll only use your details to respond to this message.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <EmailOptionsModal
        open={emailOpen}
        onClose={() => setEmailOpen(false)}
        to={contactEmail}
        subject="Dazarus — New inquiry"
        body={emailBody}
      />
    </div>
  )
}
