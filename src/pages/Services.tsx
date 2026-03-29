import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import servicesBanner from '../assets/services-banner.png'

const SERVICE_CATEGORIES = [
  {
    title: 'Product Concept Design',
    desc: 'We turn early ideas into clear product concepts, feature direction, and practical scope so you know what to build first.',
  },
  {
    title: 'Manufacturing-Ready Design (DFM)',
    desc: 'We refine designs for efficient manufacturing to reduce production risk, improve feasibility, and prepare your product for scale.',
  },
  {
    title: 'Rapid Prototyping',
    desc: 'We build functional prototypes that help you test usability, validate assumptions, and improve the product before full development.',
  },
  {
    title: 'AI Product Development',
    desc: 'We create AI-powered products with smart workflows, assistants, and practical automation designed around real user needs.',
  },
  {
    title: 'Web & Mobile App Development',
    desc: 'We design and develop fast, user-friendly web and mobile applications that are ready for launch and growth.',
  },
  {
    title: 'Full-Stack Product Engineering',
    desc: 'We build complete product systems, from frontend and backend to APIs, integrations, and deployment, for reliable delivery at scale.',
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: (i: number) => ({
    opacity: 1,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  }),
}

export function Services() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Services — Dazarus</title>
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl md:text-7xl">
            What We Provide
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl">
            We help teams design, prototype, and build products ready for
            real-world use.
          </p>

          <div
            className="mt-14 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            aria-label="Services — what we build and prototype"
          >
            <img
              src={servicesBanner}
              alt=""
              className="aspect-[21/9] w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <motion.article
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {cat.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">{cat.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
