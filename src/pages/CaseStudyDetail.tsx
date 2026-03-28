import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PremiumCaseStudyDetail } from '../components/case-studies/PremiumCaseStudyDetail'
import { getCaseStudyBySlug } from '../data/caseStudies'

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return <Navigate to="/case-studies" replace />
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <Helmet>
        <title>
          {study.name} — Case Studies — Dazarus
        </title>
        <meta name="description" content={study.tagline} />
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <PremiumCaseStudyDetail study={study} />
      </main>
      <Footer />
    </div>
  )
}
