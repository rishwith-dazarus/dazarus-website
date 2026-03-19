import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type ProductCardProps = {
  title: string
  description: string
  features: string[]
  to: string
  gradientFrom: string
  gradientTo: string
  index?: number
}

export function ProductCard({
  title,
  description,
  features,
  to,
  gradientFrom,
  gradientTo,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative"
    >
      <Link to={to} className="block">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-md card-smooth hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#2563EB]/15">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-150" />
          <div className="relative">
            <div
              className="flex h-[320px] items-center justify-center rounded-2xl shadow-inner"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              }}
            >
              <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <span className="text-lg font-medium text-white/95">
                  {title} UI
                </span>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[#0F172A]">
              {title}
            </h3>
            <p className="mt-3 text-[18px] leading-relaxed text-slate-600">
              {description}
            </p>
            <ul className="mt-5 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-600">
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: gradientFrom }}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-block rounded-lg bg-[#2563EB] px-6 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#2563EB]/30">
              Learn More
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
