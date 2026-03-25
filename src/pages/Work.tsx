import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'

import healthcareSystemsImg from '../assets/healthcare-systems.png'
import roboticsPrototypingImg from '../assets/robotics-prototyping.png'
import endToEndProductImg from '../assets/end-to-end-product-development.png'
import embeddedSystemsImg from '../assets/embedded-systems.png'

const WORK_ITEMS = [
  {
    title: 'Healthcare systems and medical software',
    slug: 'healthcare',
    image: healthcareSystemsImg,
    description:
      'We build software platforms that support healthcare workflows, medical data systems, and integrations with clinical and imaging equipment. Our work helps teams streamline operations, keep data secure and compliant, and deliver better patient outcomes.',
  },
  {
    title: 'Robotics and automation prototyping',
    slug: 'robotics',
    image: roboticsPrototypingImg,
    description:
      'We design and prototype robotics platforms, control systems, and automation solutions—from proof-of-concept to near-production. Our focus is on reliable sensing, motion, and human–machine interaction so you can validate ideas before scaling.',
  },
  {
    title: 'End-to-end product development',
    slug: 'product',
    image: endToEndProductImg,
    description:
      'We take product ideas from concept and architecture through early prototype and validation. That includes requirements, technical design, build, and iteration so founders and teams can ship faster and de-risk before full-scale investment.',
  },
  {
    title: 'Embedded and connected systems',
    slug: 'embedded',
    image: embeddedSystemsImg,
    description:
      'We develop connected devices and embedded platforms for product experimentation and IoT use cases. From firmware and edge logic to cloud connectivity and APIs, we help you test hardware–software integration and get to a shippable prototype.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export function Work() {
  const { pathname } = useLocation()
  const isWorkPage = pathname === '/work'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Work — Dazarus</title>
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl md:text-7xl">
            Where We&apos;ve Shipped
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl">
            Our experience spans healthcare, robotics, software platforms, and
            embedded product development.
          </p>
          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
            {WORK_ITEMS.map((item, i) => (
              <motion.article
                key={item.slug}
                custom={i}
                initial="hidden"
                animate={isWorkPage && i < 2 ? 'visible' : undefined}
                whileInView={isWorkPage && i < 2 ? undefined : 'visible'}
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30"
              >
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    src={item.image}
                    className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-105"
                    ariaLabel={`${item.title} image placeholder`}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
