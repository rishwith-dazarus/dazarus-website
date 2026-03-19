import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type BentoCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  size?: 'large' | 'small' | 'wide'
  index?: number
}

const sizeClasses = {
  large: 'md:col-span-2 md:row-span-2',
  small: 'md:col-span-1 md:row-span-1',
  wide: 'md:col-span-2',
}

export function BentoCard({
  icon: Icon,
  title,
  description,
  className = '',
  size = 'small',
  index = 0,
}: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={`
        group relative overflow-hidden rounded-2xl border border-white/10
        bg-gradient-to-b from-white/5 to-white/[0.02] p-8
        shadow-lg backdrop-blur-sm
        card-smooth card-lift
        before:absolute before:inset-0 before:rounded-2xl before:border before:border-transparent
        before:bg-gradient-to-br before:from-[#2563EB]/20 before:via-transparent before:to-[#06B6D4]/20
        before:opacity-0 before:transition before:duration-300 before:content-['']
        hover:before:opacity-100
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 text-[#2563EB] transition duration-300 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#0F172A] md:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-[18px] leading-relaxed text-slate-600">
        {description}
      </p>
    </motion.article>
  )
}
