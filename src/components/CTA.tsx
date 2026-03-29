import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section
      className="w-full py-10 sm:py-12 lg:py-14"
      aria-labelledby="cta-heading"
    >
      <div className="px-5 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#4C5F4D] to-[#5C735E] px-5 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_40%)]" />
          <div className="relative z-10 text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              Start the conversation
            </span>
            <h2
              id="cta-heading"
              className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-6xl"
            >
              Have a Product Idea?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 sm:mt-5 sm:text-xl sm:leading-8">
              Whether you're exploring a new product concept or ready to build a
              working prototype, Dazarus can help turn your ideas into real products.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
              >
                Discuss Your Product Idea
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
