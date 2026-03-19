import { motion } from 'framer-motion'

type AnimatedHeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
  highlight?: string
  size?: 'hero' | 'section' | 'card'
  id?: string
}

const sizeClasses = {
  hero: 'text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-[64px]',
  section: 'text-3xl font-bold md:text-4xl',
  card: 'text-xl font-semibold md:text-2xl',
}

export function AnimatedHeading({
  as: Tag = 'h2',
  children,
  className = '',
  highlight,
  size = 'section',
  id,
}: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      <Tag id={id} className={sizeClasses[size]}>
        {typeof children === 'string' && highlight ? (
          <>
            {children.toString().split(highlight)[0]}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              {highlight}
            </span>
            {children.toString().split(highlight)[1]}
          </>
        ) : (
          children
        )}
      </Tag>
    </motion.div>
  )
}
