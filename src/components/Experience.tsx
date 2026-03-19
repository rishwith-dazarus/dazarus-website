import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import { ImagePlaceholder } from './ui/ImagePlaceholder'

import healthcareSystemsImg from '../assets/healthcare-systems.png'
import roboticsPrototypingImg from '../assets/robotics-prototyping.png'
import embeddedSystemsImg from '../assets/embedded-systems.png'
import endToEndProductImg from '../assets/end-to-end-product-development.png'

const EXPERIENCE_ITEMS = [
  {
    title: 'Healthcare Systems',
    description:
      'Development of software platforms supporting healthcare workflows, data systems, and medical integrations.',
    image: healthcareSystemsImg,
  },
  {
    title: 'Robotics Prototyping',
    description:
      'Design and experimentation with robotics platforms, control systems, and prototype automation.',
    image: roboticsPrototypingImg,
  },
  {
    title: 'Embedded Systems',
    description:
      'Development of connected devices and embedded platforms for product experimentation.',
    image: embeddedSystemsImg,
  },
  {
    title: 'End-to-End Product Development',
    description:
      'Taking product ideas from concept and architecture through early prototype and validation.',
    image: endToEndProductImg,
  },
] as const

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const cardItem = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.55,
      ease: [0.22, 0.61, 0.36, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
}

const numberItem = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

const TILT_MAX = 6

function ExperienceCard({
  index,
  title,
  description,
  image,
  reducedMotion,
}: {
  index: number
  title: string
  description: string
  image: string
  reducedMotion: boolean
}) {
  const cardRef = useRef<HTMLElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useTransform(y, [0, 1], [TILT_MAX, -TILT_MAX])
  const rotateY = useTransform(x, [0, 1], [-TILT_MAX, TILT_MAX])

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reducedMotion) return
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const relX = (e.clientX - centerX) / (rect.width / 2)
    const relY = (e.clientY - centerY) / (rect.height / 2)
    x.set(0.5 + Math.max(-0.5, Math.min(0.5, relX * 0.5)))
    y.set(0.5 + Math.max(-0.5, Math.min(0.5, relY * 0.5)))
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      ref={cardRef}
      variants={cardItem}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        reducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 800,
            }
      }
      className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-[box-shadow,border-color] duration-300 ease-out hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30 hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <motion.div
          className="aspect-[5/4] w-full"
          transition={{ duration: 0.4 }}
          whileHover={reducedMotion ? undefined : { y: -4 }}
        >
          <ImagePlaceholder
            src={image}
            className="aspect-[5/4] w-full transition-transform duration-500 group-hover:scale-105"
            ariaLabel={`${title} image placeholder`}
          />
        </motion.div>
      </div>
      <div className="relative p-6 sm:p-7">
        <motion.span
          variants={numberItem}
          className="text-xs font-bold tabular-nums tracking-[0.2em] text-[#5C735E]"
          aria-hidden
        >
          {number}
        </motion.span>
        <h3 className="mt-3 text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-600 opacity-90 transition-opacity duration-200 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </motion.article>
  )
}

export function Experience() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="w-full py-20 sm:py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="text-left max-w-3xl">
          <h2
            id="experience-heading"
            className="mt-5 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl md:text-6xl"
          >
            Where we've shipped — and what we've learned.
          </h2>
        </div>

        <motion.div
          className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
