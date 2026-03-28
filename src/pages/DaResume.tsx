import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

/** Replace with the live DaResume URL when available. */
const DA_RESUME_TRY_URL = '/contact'

const keyFeatures = [
  'Generate resumes directly from job descriptions',
  'Extract key skills and requirements automatically',
  'Create experience bullets aligned to the role',
  'Maintain factual, evidence-based content',
  'Export clean, ready-to-use resumes instantly',
] as const

const howItWorksSteps = [
  'Paste the job description',
  'Extract key requirements automatically',
  'Generate a tailored resume using your experience',
  'Review and export instantly',
] as const

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 pt-1 text-[0.9375rem] font-bold uppercase tracking-[0.028em] text-slate-900 sm:text-base">
      {children}
    </h2>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul
      className="space-y-2.5 text-[0.9375rem] leading-snug text-slate-800 sm:text-base sm:leading-relaxed sm:space-y-2.5"
      role="list"
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C5F4D]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DaResume() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <Helmet>
        <title>DaResume — Dazarus</title>
        <meta
          name="description"
          content="DaResume is an AI resume builder that creates role-specific resumes from job descriptions—tailored, relevant, and ready to send."
        />
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-7">
          <Link
            to="/products"
            className="inline-block pt-6 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#4C5F4D] sm:pt-7"
          >
            Back to Products
          </Link>

          <header className="grid grid-cols-1 items-start gap-0 pb-6 pt-4 md:grid-cols-[minmax(0,36rem)_1fr] md:gap-12 lg:gap-16 md:pb-7 md:pt-5">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl sm:leading-[1.08] lg:text-5xl lg:leading-[1.06]">
                DaResume — AI Resume Builder for Job-Ready Applications
              </h1>
              <p className="mt-5 text-lg font-semibold leading-snug text-slate-900 sm:text-xl sm:leading-snug">
                Create role-specific resumes instantly from any job description — aligned, relevant, and ready
                to send.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                DaResume helps you generate tailored resumes that match real job requirements. It transforms job
                descriptions into structured, high-quality resumes backed by your actual experience.
              </p>
              <div className="mt-7 sm:mt-8">
                <Link
                  to={DA_RESUME_TRY_URL}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[#4C5F4D] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(15,23,42,0.12)] transition duration-200 ease-out hover:scale-[1.02] hover:bg-[#3d4d3f] active:scale-[0.99] sm:text-[0.9375rem]"
                >
                  Try DaResume
                </Link>
              </div>
            </div>
            <div className="hidden min-h-[120px] md:block" aria-hidden />
          </header>

          <section className="border-t border-slate-300/60 py-7 sm:py-8 md:py-9">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Overview</SectionTitle>
                <p className="text-[0.9375rem] leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                  DaResume is designed for people who want faster, smarter resume creation. Instead of manually
                  editing resumes for every job, it generates a tailored version based on the job
                  description—keeping everything aligned, structured, and relevant.
                </p>
              </div>
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Key features</SectionTitle>
                <BulletList items={keyFeatures} />
              </div>
            </div>
          </section>

          <section className="border-t border-slate-300/60 py-7 pb-12 sm:py-8 sm:pb-14 md:py-8 md:pb-16">
            <div className="max-w-[44rem]">
              <SectionTitle>How it works</SectionTitle>
              <ol
                className="mt-0 space-y-2.5 text-[0.9375rem] leading-snug text-slate-800 sm:space-y-2.5 sm:text-base sm:leading-relaxed"
                role="list"
              >
                {howItWorksSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200/90 text-xs font-bold text-slate-800"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
