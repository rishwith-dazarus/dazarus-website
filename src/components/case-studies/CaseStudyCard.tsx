import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type CaseStudyCardProps = {
  slug: string
  name: string
  cardCategory: string
  image: string
  index: number
}

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 + i * 0.07, ease: [0.22, 0.61, 0.36, 1] as const },
  }),
}

export function CaseStudyCard({ slug, name, cardCategory, image, index }: CaseStudyCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardReveal}
      className="min-w-0"
    >
      <Link
        to={`/case-studies/${slug}`}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C735E]"
      >
        <article className="overflow-hidden rounded-[18px] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.055)] transition-[box-shadow,transform] duration-[280ms] ease-in-out md:group-hover:shadow-[0_14px_36px_rgba(15,23,42,0.11)] md:group-hover:-translate-y-1">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover object-[center_42%] transition-transform duration-[280ms] ease-in-out md:group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-0 transition-opacity duration-[280ms] ease-in-out md:group-hover:opacity-100"
              aria-hidden
            />
          </div>
          <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 transition-transform duration-[280ms] ease-in-out md:group-hover:-translate-y-0.5">
              {cardCategory}
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-slate-900 transition-transform duration-[280ms] ease-in-out sm:text-2xl md:group-hover:-translate-y-0.5">
              {name}
            </h2>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
