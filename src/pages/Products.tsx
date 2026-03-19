import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'
import dazfinProductPageImg from '../assets/dazfin-product-page.png'
import daresumeProductPageImg from '../assets/daresume-product-page.png'

const PRODUCTS = [
  {
    slug: 'dazfin',
    title: 'Dazfin',
    description:
      'A mobile app for receipt tracking and household finance management, designed to make personal expense capture and organization effortless.',
  },
  {
    slug: 'daresume',
    title: 'DaResume',
    description:
      'An AI-powered web application that helps professionals create job-relevant resumes grounded in their actual experience, skills, and career goals.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Products — Dazarus</title>
      </Helmet>
      <Navbar />
      <main className="pt-[72px]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-20">
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-slate-900 sm:text-6xl md:text-7xl">
            Products
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 sm:text-2xl">
            Dazarus doesn't just offer services — it builds products too.
          </p>
          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <motion.article
                key={product.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:border-[#5C735E]/30"
              >
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    src={
                      product.slug === 'dazfin'
                        ? dazfinProductPageImg
                        : product.slug === 'daresume'
                          ? daresumeProductPageImg
                          : undefined
                    }
                    className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-105"
                    ariaLabel={`${product.title} image placeholder`}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {product.title}
                  </h2>
                  <p className="mt-4 text-slate-600">{product.description}</p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-6 inline-block rounded-full bg-[#5C735E] px-7 py-3.5 font-medium text-white transition duration-300 hover:bg-[#4C5F4D] hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Learn More
                  </Link>
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
