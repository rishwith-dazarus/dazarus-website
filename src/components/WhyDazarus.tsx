import { motion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

const ADVANTAGES = [
  {
    number: '01',
    title: 'End-to-End Product Thinking',
    description:
      'We approach every project from product concept through architecture, prototyping, and working implementation.',
  },
  {
    number: '02',
    title: 'Prototype-First Execution',
    description:
      'We prioritize building early working prototypes so ideas can be validated and improved quickly.',
  },
  {
    number: '03',
    title: 'Cross-Disciplinary Capability',
    description:
      'Our work spans software, AI systems, hardware experimentation, and embedded platforms.',
  },
  {
    number: '04',
    title: 'Practical AI, Not Hype',
    description:
      'We focus on using AI where it delivers real value rather than treating it as marketing hype.',
  },
] as const

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function WhyDazarus() {
  return (
    <section
      className="w-full py-20 sm:py-24 lg:py-32"
      aria-labelledby="why-dazarus-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <h2
              id="why-dazarus-heading"
              className="mt-5 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl md:text-6xl"
            >
              Product thinking, engineering depth, and prototype speed.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl lg:text-2xl">
            We combine product thinking, engineering depth, and rapid
            prototyping to help ideas become usable products faster.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {ADVANTAGES.map(({ number, title, description }) => (
            <motion.article
              key={title}
              variants={cardItem}
              className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30"
            >
              <div className="overflow-hidden">
                <ImagePlaceholder
                  className="aspect-[5/4] w-full transition-transform duration-500 group-hover:scale-105"
                  ariaLabel={`${title} image placeholder`}
                />
              </div>
              <div className="p-6 sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5C735E]">
                  {number}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
