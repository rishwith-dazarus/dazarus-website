import { motion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

import whoWeWorkWithImg from '../assets/who-we-work-with.png'

const AUDIENCES = [
  {
    title: 'Founders',
    desc: 'Validate new ideas with a focused MVP.',
  },
  {
    title: 'Startups',
    desc: 'Move faster from concept to launch.',
  },
  {
    title: 'Product Teams',
    desc: 'Prototype, test, and refine with confidence.',
  },
  {
    title: 'Businesses',
    desc: 'Build AI, web, mobile, or hardware products with a reliable end-to-end partner.',
  },
] as const

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

export function WhoWeWorkWith() {
  return (
    <section
      className="w-full py-10 sm:py-12 lg:py-14"
      aria-labelledby="who-we-work-with-heading"
    >
      <div className="px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-6 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:gap-8 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left max-w-3xl"
          >
            <h2
              id="who-we-work-with-heading"
              className="mt-2 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:mt-3 sm:text-5xl"
            >
              Built for teams turning ideas into real products
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 sm:mt-4 sm:text-xl sm:leading-8">
              We partner with founders, startups, and product teams that need a
              clear path from concept to prototype, MVP, and production-ready
              products.
            </p>
            <motion.ul
              className="mt-6 space-y-3 sm:mt-9 sm:space-y-4 lg:mt-10"
              role="list"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
            >
              {AUDIENCES.map(({ title, desc }) => (
                <motion.li
                  key={title}
                  variants={listItem}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]"
                    aria-hidden
                  />
                  <div>
                    <span className="font-semibold text-slate-900">{title}</span>
                    <span className="mt-0.5 block text-slate-600">{desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ImagePlaceholder
              src={whoWeWorkWithImg}
              className="aspect-[5/4] w-full"
              ariaLabel="Who we work with image placeholder"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
