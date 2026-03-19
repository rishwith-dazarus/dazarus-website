import { motion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

import whoWeWorkWithImg from '../assets/who-we-work-with.png'

const AUDIENCES = [
  'Startups and founders who need an MVP to validate and ship.',
  'Teams that need a prototype before full-scale investment.',
  'Companies building real products in robotics, medical equipment, or connected devices.',
  'Businesses that need AI, web, or mobile applications built and shipped.',
  'Organizations that need hardware or embedded prototyping and a partner to bring ideas to life.',
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
      className="w-full py-20 sm:py-24 lg:py-32"
      aria-labelledby="who-we-work-with-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-left max-w-3xl"
          >
            <h2
              id="who-we-work-with-heading"
              className="mt-5 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl"
            >
              Built for founders, startups, and teams with a product to ship.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
              From MVP to prototype to production — we work with startups and
              companies who need a partner to bring their product to life.
            </p>
            <motion.ul
              className="mt-10 space-y-4"
              role="list"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
            >
              {AUDIENCES.map((audience) => (
                <motion.li
                  key={audience}
                  variants={listItem}
                  className="flex items-start gap-3 text-base leading-7 text-slate-700"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C735E]"
                    aria-hidden
                  />
                  {audience}
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
