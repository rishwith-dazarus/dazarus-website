import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function Dazfin() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Dazfin — Dazarus</title>
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
            <h1 className="mt-10 text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl">Dazfin</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl">
              An AI-assisted expense management mobile app for organising and
              managing household finances effortlessly.
            </p>
            <p className="mt-4 text-base text-slate-500">
              Pricing: Coming soon (public preview / demo project).
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Product overview</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Dazfin is a mobile-first app that revolutionizes personal receipt
                tracking and household finance management. By enabling fast
                receipt capture—via photo or manual entry—and secure cloud
                storage. Dazfin ensures users expense records are always
                organized, searchable, and accessible anytime, anywhere.
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#5C735E]">
                Why it matters
              </h3>
              <ul className="mt-4 space-y-3 text-slate-600" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Eliminates paper clutter by consolidating all receipts in one
                  digital hub
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Accelerates expense capture with a simple snap-and-upload
                  workflow
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Boosts data accuracy and consistency with AI-powered
                  automated extraction
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Key features</h2>
              <ul className="mt-4 space-y-3 text-slate-600" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Mobile-first receipt capture: Upload receipt images directly from the app
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Manual entry: Add receipts even when you don’t have a photo
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Receipt management: View, update, and delete receipts whenever needed
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Secure sign-in: User authentication with AWS Cognito (JWT-protected APIs)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Cloud storage: Receipt images stored in Amazon S3; metadata stored in DynamoDB
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Optional smart processing: Automated extraction pipeline (OCR with optional LLM fallback when confidence is low)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Production-ready backend: Serverless API using API Gateway + AWS Lambda, managed via Terraform
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Future roadmap</h2>
              <ul className="mt-4 space-y-3 text-slate-600" role="list">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Enhanced data extraction: Improved detection of merchant,
                  date, totals, and line-item details with advanced confidence
                  scoring
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Advanced search &amp; filters: Quickly find receipts by
                  merchant, date range, amount, or category
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Insights &amp; categorization: Spending summaries by category
                  and time, with basic budgeting tools
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Review workflows: “Needs review” queue for low-confidence
                  extractions
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Export capabilities: CSV and PDF export options for
                  record-keeping and sharing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
                  Refined user experience: Faster uploads, offline draft
                  support, and an improved receipt timeline
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
