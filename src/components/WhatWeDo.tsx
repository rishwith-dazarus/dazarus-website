import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

import productPrototypingImg from '../assets/product-prototyping.png'
import aiEnabledApplicationsImg from '../assets/ai-enabled-applications.png'
import mobileWebAppsImg from '../assets/mobile-web-apps.png'
import hardwareEmbeddedImg from '../assets/hardware-embedded.png'

const CARDS = [
  {
    title: 'Product Prototyping',
    description:
      'We turn product ideas into working prototypes to validate concepts and technical architecture.',
    image: productPrototypingImg,
  },
  {
    title: 'AI-Powered Applications',
    description:
      'We build intelligent applications powered by modern AI, automation, and data systems.',
    image: aiEnabledApplicationsImg,
  },
  {
    title: 'Web & Mobile Applications',
    description:
      'We build full-stack web and mobile applications designed for real-world scalability and performance.',
    image: mobileWebAppsImg,
  },
  {
    title: 'Hardware & Embedded Systems',
    description:
      'We design connected prototypes and embedded systems for testing, iteration, and product innovation.',
    image: hardwareEmbeddedImg,
  },
] as const

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
  },
}

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      className="w-full pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14"
      aria-labelledby="what-we-do-heading"
    >
      <div className="px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="text-left max-w-3xl">
          <h2
            id="what-we-do-heading"
            className="mt-2 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:mt-3 sm:text-5xl md:text-6xl"
          >
            How we turn ideas into products.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:mt-4 sm:text-xl">
            From concept to launch, we help founders and teams design, build, and validate
            software and connected products.
          </p>
        </div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CARDS.map(({ title, description, image }, index) => (
            <motion.article
              key={title}
              variants={cardItem}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              tabIndex={0}
              role="button"
              aria-expanded={activeIndex === index}
              aria-label={`${title}. ${activeIndex === index ? description : 'Hover or focus to read more.'}`}
              className={`
                group relative overflow-hidden rounded-2xl border bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-all duration-300 ease-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C735E] focus-visible:ring-offset-2
                ${activeIndex === index
                  ? 'border-[#5C735E]/40 z-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] scale-[1.02]'
                  : activeIndex !== null
                    ? 'border-slate-200/70 opacity-85'
                    : 'border-slate-200/70 hover:border-[#5C735E]/30 hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)]'
                }
              `}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <ImagePlaceholder
                  src={image}
                  className={`aspect-[4/3] w-full transition-transform duration-500 ${activeIndex === index ? 'scale-105' : 'group-hover:scale-105'}`}
                  ariaLabel={`${title} visual`}
                />
              </div>
              <div className="relative min-h-[10rem] p-5 sm:min-h-[11rem] sm:p-7">
                <h3 className="pr-2 text-xl font-bold text-slate-950 sm:pr-4 sm:text-2xl">
                  {title}
                </h3>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 overflow-y-auto rounded-b-2xl border-t border-l-4 border-l-[#5C735E] border-slate-200/80 bg-[#f0f7f0] p-5 pt-4 shadow-inner sm:p-7"
                    >
                      <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
