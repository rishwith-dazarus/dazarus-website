import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'
import dazfinProductImg from '../assets/dazfin-product.png'
import daresumeHomeImg from '../assets/daresume-home.png'

const DAZFIN_FEATURES = [
  'Receipt capture',
  'Expense categorization',
  'Household finance tracking',
  'AI-assisted expense organization and finance insights',
]

const DARESUME_FEATURES = [
  'AI-guided resume creation',
  'Job-specific resume optimization',
  'Skill-based resume building',
]

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

export function Products() {
  return (
    <section
      className="w-full py-20 sm:py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <h2
              id="products-heading"
              className="mt-5 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl md:text-6xl"
            >
              Products we build.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl lg:text-2xl">
            We ship our own products and partner on yours. Here's what we've
            built.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          <motion.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blockVariants}
            className="group grid items-center gap-8 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:p-8"
          >
            <div className="overflow-hidden rounded-xl">
              <ImagePlaceholder
                src={dazfinProductImg}
                className="aspect-[5/4] w-full transition-transform duration-500 group-hover:scale-105"
                ariaLabel="Dazfin product image placeholder"
              />
            </div>
            <div>
              <span className="rounded-full border border-[#5C735E]/40 bg-[#5C735E]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#4C5F4D]">
                Mobile product
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Dazfin
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A mobile app for receipt tracking and household finance
                management, designed to make personal expense capture and
                organization effortless.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600" role="list">
                {DAZFIN_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/products/dazfin"
                className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.article>

          <motion.article
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blockVariants}
            className="group grid items-center gap-8 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:p-8"
          >
            <div className="order-2 lg:order-1">
              <span className="rounded-full border border-[#5C735E]/40 bg-[#5C735E]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#4C5F4D]">
                AI web product
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                DaResume
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                An AI-powered web application that helps professionals create
                job-relevant resumes grounded in their actual experience, skills,
                and career goals.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600" role="list">
                {DARESUME_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/products/daresume"
                className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="order-1 overflow-hidden rounded-xl lg:order-2">
              <ImagePlaceholder
                src={daresumeHomeImg}
                className="aspect-[5/4] w-full transition-transform duration-500 group-hover:scale-105"
                ariaLabel="DaResume product image placeholder"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
