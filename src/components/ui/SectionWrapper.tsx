import { motion } from 'framer-motion'

type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
  id?: string
  ariaLabelledby?: string
}

export function SectionWrapper({
  children,
  className = '',
  id,
  ariaLabelledby,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`max-w-6xl mx-auto px-6 py-28 ${className}`}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
