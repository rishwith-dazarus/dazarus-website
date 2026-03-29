import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

/** Replace with the live Play Store listing URL when Dazfin is published. */
const DAZFIN_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.dazarus.dazfin'

const roadmapItems = [
  'Smarter receipt data extraction',
  'Better search and filtering',
  'Improved spending insights and categorization',
  'Faster upload and review flows',
  'Export options for record keeping',
] as const

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 pt-1 text-[0.9375rem] font-bold uppercase tracking-[0.028em] text-slate-900 sm:text-base">
      {children}
    </h2>
  )
}

function BulletList({ items, dense }: { items: readonly string[]; dense?: boolean }) {
  return (
    <ul
      className={`text-[0.9375rem] leading-snug text-slate-800 sm:text-base sm:leading-relaxed ${
        dense ? 'space-y-2' : 'space-y-2.5 sm:space-y-2.5'
      }`}
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

export function Dazfin() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <Helmet>
        <title>Dazfin — Dazarus</title>
        <meta
          name="description"
          content="AI-assisted expense tracking for households. Capture receipts, organize expenses, and keep personal finance records clear and easy to manage."
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

          {/* Hero: content + reserved right column */}
          <header className="grid grid-cols-1 items-start gap-0 pb-6 pt-4 md:grid-cols-[minmax(0,36rem)_1fr] md:gap-12 lg:gap-16 md:pb-7 md:pt-5">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl lg:leading-[1.02]">
                Dazfin
              </h1>
              <p className="mt-5 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl sm:leading-snug">
                AI-assisted expense tracking for households and personal spending.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-800 sm:mt-5 sm:text-base sm:leading-relaxed">
                Dazfin helps individuals and families capture receipts, organize expenses, and keep personal
                finance records clear, searchable, and easy to manage.
              </p>
              <div className="mt-7 sm:mt-8">
                <a
                  href={DAZFIN_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[#4C5F4D] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(15,23,42,0.12)] transition duration-200 ease-out hover:scale-[1.02] hover:bg-[#3d4d3f] active:scale-[0.99] sm:text-[0.9375rem]"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="hidden min-h-[120px] md:block" aria-hidden />
          </header>

          {/* Group 1 */}
          <section className="border-t border-slate-300/60 py-7 sm:py-8 md:py-9">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Overview</SectionTitle>
                <p className="text-[0.9375rem] leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                  Dazfin is a mobile-first expense management app designed for people who want a simpler way to
                  handle receipts and household spending. It brings receipt capture, expense organization, and
                  searchable records into one clean experience, making it easier to stay on top of day-to-day
                  finances without relying on paper or scattered files.
                </p>
              </div>
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Who it&apos;s for</SectionTitle>
                <BulletList
                  items={[
                    'Individuals managing personal spending and monthly budgets',
                    'Families organizing shared household expenses',
                    'Anyone who wants to replace paper receipts with a digital record',
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Group 2 */}
          <section className="border-t border-slate-300/60 py-7 sm:py-8 md:py-9">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Why it matters</SectionTitle>
                <BulletList
                  items={[
                    'Keeps receipts and expense records in one place',
                    'Reduces manual effort in tracking everyday spending',
                    'Makes financial records easier to review, search, and manage',
                  ]}
                />
              </div>
              <div className="min-w-0 max-w-[700px]">
                <SectionTitle>Key features</SectionTitle>
                <BulletList
                  items={[
                    'Capture receipts directly from your phone',
                    'Add expenses manually when needed',
                    'Organize records by date, merchant, or category',
                    'Search and review expenses quickly',
                    'Track spending through clear summaries',
                    'Keep records securely stored and easy to access',
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Group 3 */}
          <section className="border-t border-slate-300/60 py-7 sm:py-8 md:py-9">
            <div className="max-w-[44rem]">
              <SectionTitle>What makes Dazfin useful</SectionTitle>
              <p className="text-[0.9375rem] leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                Dazfin is built for practical, everyday use. Instead of turning expense tracking into a
                complicated finance workflow, it focuses on speed, clarity, and convenience — helping users
                capture receipts quickly, stay organized, and keep better control over personal and household
                spending.
              </p>
            </div>
          </section>

          {/* Group 4: Roadmap */}
          <section className="border-t border-slate-300/60 py-7 pb-12 sm:py-8 sm:pb-14 md:py-8 md:pb-16">
            <div className="max-w-none">
              <SectionTitle>Roadmap</SectionTitle>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="min-w-0 max-w-[700px]">
                  <BulletList dense items={roadmapItems.slice(0, 3)} />
                </div>
                <div className="min-w-0 max-w-[700px]">
                  <BulletList dense items={roadmapItems.slice(3)} />
                </div>
              </div>
              <p className="mt-6 text-sm font-normal text-slate-500 sm:mt-5">
                Launching soon on Google Play
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
