import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function DaResume() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>DaResume — Dazarus</title>
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-20">
          <Link
            to="/products"
            className="text-sm font-medium text-slate-500 transition hover:text-[#4C5F4D]"
          >
            ← Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="mt-10 text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl">
              DaResume — Evidence‑Grounded AI Resume Builder
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl">
              DaResume generates job‑specific resumes from a Job Description using grounded
              AI, so every line stays aligned to the role and backed by real experience.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Product overview</h2>
              <p className="mt-4 text-slate-600 leading-7">
                DaResume generates job‑specific resumes from a Job Description using grounded
                AI. It extracts key role requirements, optionally retrieves matching evidence
                from the candidate’s work library, and produces an editable resume draft with
                one‑click PDF export. The goal is to reduce manual tailoring time while
                keeping every line consistent, factual, and aligned to the JD.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Key features</h2>
              <ul className="mt-4 space-y-3 text-slate-600" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  JD‑to‑resume generation in one click.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Structured JD extraction (title, skills, highlights, and keywords distilled
                  into a “JD gist”).
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Evidence‑grounded summary and bullets with strong “don’t invent” guardrails.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Company‑specific bullet generation for multiple experience buckets.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Optional Pinecone retrieval to match JD highlights with proven experience.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Editable resume editor + preview, with one‑click PDF export and saved
                  artifacts.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Full logs and artifacts for traceability, debugging, and iteration.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
              <ol
                className="mt-4 space-y-3 list-decimal list-inside text-slate-600"
                role="list"
              >
                <li>User pastes the Job Description.</li>
                <li>JD is distilled into structured requirements (title, keywords, highlights).</li>
                <li>
                  (Optional) Retrieval fetches relevant work evidence from the user’s document
                  library (vector database).
                </li>
                <li>
                  AI generates a grounded Professional Summary and role‑aligned bullets for key
                  experience sections.
                </li>
                <li>Static profile and dynamic content are merged.</li>
                <li>Template rendering produces the final resume draft.</li>
                <li>User edits and exports the resume to PDF.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
