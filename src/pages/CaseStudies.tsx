import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard'
import { CASE_STUDIES } from '../data/caseStudies'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
  },
}

export function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <Helmet>
        <title>Case Studies — Dazarus</title>
        <meta
          name="description"
          content="Products we've designed, built, and shipped — from early prototypes to real-world deployments."
        />
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-24 lg:pt-24 xl:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="mx-auto max-w-[1200px]"
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Case Studies
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed"
            >
              A selection of products we’ve designed, built, and shipped — from early prototypes
              to real-world deployment
            </motion.p>
          </motion.div>

          <div className="mx-auto mt-14 max-w-[1200px] grid grid-cols-1 gap-9 md:mt-16 md:grid-cols-2 md:gap-x-11 md:gap-y-11 lg:mt-20 lg:gap-x-12 lg:gap-y-12">
            {CASE_STUDIES.map((study, i) => {
              const isLast = i === CASE_STUDIES.length - 1
              return (
                <div
                  key={study.slug}
                  className={
                    isLast ? 'md:col-span-2 md:flex md:justify-center' : 'min-w-0'
                  }
                >
                  <div className={isLast ? 'w-full max-w-[640px]' : 'w-full'}>
                    <CaseStudyCard
                      slug={study.slug}
                      name={study.name}
                      cardCategory={study.cardCategory}
                      image={study.image}
                      index={i}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
