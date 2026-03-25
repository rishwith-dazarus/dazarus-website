import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import heroBgImage from '../assets/hero-bg-image.png'

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 0.61, 0.36, 1] as const },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full items-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={heroBgImage}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-black/20"
        aria-hidden
      />

      <div className="relative z-10 w-full px-6 pb-28 pt-32 sm:px-10 sm:pb-32 lg:px-16 lg:pb-36 xl:px-20">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]"
          >
            <motion.span className="block" variants={lineVariants} custom={0}>
              We build intelligent software
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#8ba88d] via-[#a8c5aa] to-[#6b8a6d] bg-clip-text text-transparent"
              variants={lineVariants}
              custom={1}
            >
              and connected systems.
            </motion.span>
          </h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90 sm:text-xl md:text-2xl"
          >
            From idea to working product — we help founders and teams ship
            AI-enabled software and connected prototypes.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-full bg-[#5C735E] px-8 py-4 text-base font-medium text-white transition duration-300 hover:bg-[#4C5F4D] hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(92,115,94,0.4)]"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/50"
            >
              Talk to Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/60"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
