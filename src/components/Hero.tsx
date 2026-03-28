import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import heroBgImage from '../assets/hero-bg-image.png'

const EASE = [0.22, 0.61, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false

  const container = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  }

  const item = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.5,
        ease: EASE,
      },
    },
  }

  return (
    <section
      id="home-hero"
      className="relative isolate flex min-h-[78svh] w-full items-center overflow-x-hidden lg:min-h-screen"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={heroBgImage}
          alt=""
          className="h-full w-full object-cover object-[center_30%] lg:object-[center_40%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Light overall veil — keeps depth without flattening the image */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/28" aria-hidden />

      {/* Readability on the copy side; image opens up toward the right */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/92 via-black/68 to-black/25 md:from-black/88 md:via-black/58 md:to-transparent"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-transparent"
        aria-hidden
      />

      {/* Optional subtle dark floor — no white / gray mist */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-b from-transparent to-black/35 sm:h-32 lg:h-36"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-[5.25rem] sm:px-10 sm:pb-20 sm:pt-[6.5rem] lg:px-16 lg:pb-24 lg:pt-28 xl:px-20">
        <motion.div
          className="max-w-[min(100%,680px)]"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={item}
            className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-white/48 sm:text-[11px] sm:tracking-[0.24em]"
          >
            AI SOFTWARE • CONNECTED PROTOTYPES • MVP DEVELOPMENT
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 max-w-[20ch] text-balance text-[clamp(42px,11vw,50px)] font-bold leading-[1.05] tracking-[-0.034em] text-white sm:max-w-none lg:mt-8 lg:text-[clamp(64px,7vw,88px)] lg:leading-[1.02] lg:tracking-[-0.036em]"
          >
            From idea to working MVP.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-[33rem] text-base leading-[1.68] text-slate-200/88 sm:mt-9 sm:text-[1.0625rem] sm:leading-[1.65] lg:mt-10 lg:text-lg lg:leading-[1.62]"
          >
            Dazarus helps founders and teams design, prototype, and ship AI-enabled software and
            connected products built for real-world validation.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5 lg:mt-14"
          >
            <Link
              to="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#5C735E] px-7 py-3 text-center text-[0.9375rem] font-medium text-white transition duration-300 hover:bg-[#4C5F4D] hover:shadow-[0_12px_32px_rgba(76,95,77,0.32)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[10.5rem]"
            >
              Talk to Us
            </Link>
            <Link
              to="/work"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/28 bg-white/[0.06] px-7 py-3 text-center text-[0.9375rem] font-medium text-white/95 backdrop-blur-[12px] transition duration-300 hover:border-white/42 hover:bg-white/[0.11] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[10.5rem]"
            >
              See Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
