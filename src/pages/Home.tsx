import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { WhatWeDo } from '../components/WhatWeDo'
import { Products } from '../components/Products'
import { Experience } from '../components/Experience'
import { WhoWeWorkWith } from '../components/WhoWeWorkWith'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'

export function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-slate-900">
      <Helmet>
        <title>Dazarus — Intelligent Product Prototyping</title>
      </Helmet>
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <WhatWeDo />
      </Reveal>
      <Reveal>
        <Products />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <WhoWeWorkWith />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
    </div>
  )
}
