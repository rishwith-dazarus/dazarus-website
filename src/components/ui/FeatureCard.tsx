import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/50 p-8 shadow-lg backdrop-blur-sm card-smooth card-lift hover:shadow-[#2563EB]/10"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/15 to-[#06B6D4]/15 text-[#2563EB] ring-1 ring-[#2563EB]/10">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">{title}</h3>
      <p className="mt-3 text-[18px] leading-relaxed text-slate-600">
        {description}
      </p>
    </motion.article>
  )
}
