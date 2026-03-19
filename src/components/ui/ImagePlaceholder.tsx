import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  className?: string
  ariaLabel?: string
  /** When provided, shows this image fitting inside the placeholder without cropping. */
  src?: string
}

export function ImagePlaceholder({
  className = '',
  ariaLabel = 'Image placeholder',
  src,
}: ImagePlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`relative min-h-0 overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${className}`}
      aria-label={ariaLabel}
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,115,94,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(76,95,77,0.16),transparent_36%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(226,232,240,0.5))]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-x-6 top-6 h-px bg-white/60" />
          <div className="absolute inset-x-6 bottom-6 h-px bg-slate-200/70" />
        </>
      )}
    </motion.div>
  )
}
