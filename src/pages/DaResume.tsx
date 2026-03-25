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
        <section className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
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
                  One-Click JD-to-Resume Generation: Instantly generate tailored resumes from
                  job descriptions in a single click.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Structured JD Extraction: Extract and structure key job details into a
                  concise “JD Gist” (title, skills, highlights, and keywords).
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Evidence-Grounded Content: Create evidence-based summaries and bullet
                  points with strict “do not invent” safeguards.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Company-Specific Experience Mapping: Generate company-specific experience
                  bullets across multiple roles and projects.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Optional Semantic Retrieval (Pinecone Integration): Enhances accuracy by
                  matching job description highlights with verified past experience using
                  vector-based retrieval.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Editable Resume Builder with Live Preview: Edit and preview resumes in
                  real time, with one-click PDF export and saved versions.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Saved Artifacts & Debugging Logs: Access full logs and artifacts for
                  transparency, debugging, and continuous iteration.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
              <ol
                className="mt-4 space-y-3 list-decimal list-inside text-slate-600"
                role="list"
              >
                <li>Add the Job Description: Start by pasting the target job description.</li>
                <li>
                  Extract Key Requirements: The system converts the job description into
                  structured elements such as role title, core skills, and key highlights.
                </li>
                <li>
                  Retrieve Relevant Experience (Optional): Relevant work samples and
                  experience are intelligently retrieved from your document library using
                  advanced vector search.
                </li>
                <li>
                  AI-Powered Content Generation: Our AI creates a tailored professional
                  summary and role-aligned bullet points for your key experience sections,
                  ensuring relevance and impact.
                </li>
                <li>
                  Seamless Content Integration: Existing static profile information is
                  combined with dynamically generated content to form a cohesive narrative.
                </li>
                <li>
                  Resume Template Rendering: The system formats the drafted information into
                  a clean, professional template.
                </li>
                <li>
                  Review, Edit & Export: Make final edits as needed and export your polished
                  resume as a PDF.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
