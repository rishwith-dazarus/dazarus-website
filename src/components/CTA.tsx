import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section
      className="w-full py-14 sm:py-16 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#4C5F4D] to-[#5C735E] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-20 lg:py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_40%)]" />
          <div className="relative z-10 text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              Start the conversation
            </span>
            <h2
              id="cta-heading"
              className="mt-6 text-4xl font-bold tracking-[-0.03em] sm:text-5xl md:text-6xl"
            >
              Have a Product Idea?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Whether you're exploring a new product concept or looking to build
              a working prototype, Dazarus can help bring your ideas to life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-4 text-base font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
              >
                Discuss a Product Idea
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
