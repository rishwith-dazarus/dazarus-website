import { motion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

import whoWeWorkWithImg from '../assets/who-we-work-with.png'

const AUDIENCES = [
  'We support founders who need a fast, reliable MVP to validate ideas and launch quickly.',
  'For teams preparing for full scale investment, we design and build functional prototypes that demonstrate feasibility and impact.',
  'Our expertise extends to companies developing real-world products, including robotics, medical equipment, and connected devices.',
  'We also help businesses design, build, and deploy AI, web, and mobile applications.',
  'From software to hardware and embedded systems, we act as a hands-on partner for the organizations to turn innovative ideas into tangible products.',
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
      className="w-full py-14 sm:py-16 lg:py-20"
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
              Built for founders, startups and teams focused on delivering products successfully
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
              We partner with founders, startups, and product teams to turn
              ideas into real, scalable products—from MVP to prototype to
              production.
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
