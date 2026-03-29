import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { CaseStudy, CaseStudyGalleryImage } from '../../data/caseStudies'
import { itemFade, sectionVariants, staggerHeader } from '../../caseStudyMotion'

type Props = {
  study: CaseStudy
}

type GallerySlot = CaseStudyGalleryImage | { kind: 'placeholder'; caption: string }

function buildGallerySlots(study: CaseStudy): [GallerySlot, GallerySlot, GallerySlot, GallerySlot] {
  const raw = study.gallery ?? []
  const ph = (caption: string): GallerySlot => ({ kind: 'placeholder', caption })

  if (raw.length === 0) {
    return [
      ph('Project photography to be added'),
      ph('Field & context views'),
      ph('Build and integration detail'),
      ph('Additional imagery'),
    ]
  }

  const g0: GallerySlot = raw[0]
  const g1: GallerySlot = raw[1] ?? ph('Additional build views')
  const g2: GallerySlot = raw[2] ?? ph('Deployment & context')
  const g3: GallerySlot = raw[3] ?? ph('System detail')
  return [g0, g1, g2, g3]
}

function isPlaceholder(slot: GallerySlot): slot is { kind: 'placeholder'; caption: string } {
  return 'kind' in slot && slot.kind === 'placeholder'
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((line) => (
        <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate-700 sm:text-base">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5C735E]" aria-hidden />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  )
}

function GalleryFigure({
  slot,
  featured,
  supporting,
}: {
  slot: GallerySlot
  featured?: boolean
  supporting?: boolean
}) {
  if (isPlaceholder(slot)) {
    return (
      <figure className="min-w-0">
        <div
          className={`w-full rounded-xl border border-dashed border-slate-200/90 bg-slate-50/70 ${
            supporting
              ? 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[420px]'
              : featured
                ? 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1] lg:max-h-[440px]'
                : 'aspect-[16/10]'
          }`}
        />
        <figcaption className="mt-2 text-[11px] text-slate-400">{slot.caption}</figcaption>
      </figure>
    )
  }

  const imgClass = supporting
    ? 'aspect-[4/3] w-full object-cover object-center transition-transform duration-[280ms] ease-out sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[420px] lg:object-[center_40%] lg:group-hover:scale-[1.02]'
    : featured
      ? 'aspect-[4/3] w-full object-cover object-[center_35%] transition-transform duration-[280ms] ease-out sm:aspect-[16/10] lg:aspect-[2/1] lg:max-h-[440px] lg:group-hover:scale-[1.02]'
      : 'aspect-[16/10] w-full object-cover object-[center_42%] transition-transform duration-[280ms] ease-out group-hover:scale-[1.02]'

  return (
    <figure className="group min-w-0">
      <div className="overflow-hidden rounded-xl border border-slate-200/50 bg-slate-100">
        <img src={slot.src} alt={slot.alt} className={imgClass} loading="lazy" decoding="async" />
      </div>
      <figcaption className="mt-2 text-[11px] text-slate-500">{slot.caption}</figcaption>
    </figure>
  )
}

export function PremiumCaseStudyDetail({ study }: Props) {
  const infoRows = [
    { label: 'Client', value: study.client },
    { label: 'Category', value: study.category },
    { label: 'Scope', value: study.scope },
    { label: 'Completion', value: study.completion },
  ]

  const [g0, g1, g2, g3] = buildGallerySlots(study)
  const supportingTitle = study.overviewSupportingTitle ?? 'Why it was hard'
  const gallerySubtitle = study.gallerySubtitle ?? 'Build detail and environment'
  const heroObject = study.heroObjectPosition ?? 'object-[center_30%]'

  const summaryId = `${study.slug}-summary`
  const overviewId = `${study.slug}-overview`
  const keyInfoId = `${study.slug}-key-info`
  const capId = `${study.slug}-capabilities`
  const galleryId = `${study.slug}-gallery`
  const outcomeId = `${study.slug}-outcome`

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12 xl:px-16">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerHeader}
        className="pt-6 sm:pt-8"
      >
        <motion.nav variants={itemFade} aria-label="Breadcrumb" className="max-w-4xl">
          <Link
            to="/case-studies"
            className="text-sm font-medium text-slate-500 transition-colors duration-200 ease-in-out hover:text-[#4C5F4D]"
          >
            ← Case Studies
          </Link>
        </motion.nav>

        <div className="mt-8 max-w-4xl lg:mt-10">
          <motion.h1
            variants={itemFade}
            className="text-[2.75rem] font-bold leading-[1.05] tracking-[-0.038em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[4.35rem]"
          >
            {study.name}
          </motion.h1>
          <motion.p
            variants={itemFade}
            className="mt-4 max-w-2xl text-lg leading-snug text-slate-600 sm:mt-5 sm:text-xl sm:leading-snug"
          >
            {study.tagline}
          </motion.p>
        </div>

        <motion.div variants={itemFade} className="mt-10 sm:mt-12 lg:mt-14">
          <div className="overflow-hidden rounded-2xl bg-slate-200/60">
            <img
              src={study.image}
              alt={study.heroImageAlt ?? study.name}
              className={`h-auto w-full min-h-[280px] object-cover sm:min-h-[360px] lg:min-h-[min(52vh,580px)] lg:max-h-[640px] ${heroObject}`}
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </motion.header>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mx-auto max-w-[42rem] pt-14 sm:pt-16 lg:pt-[4.5rem]"
        aria-labelledby={summaryId}
      >
        <h2 id={summaryId} className="sr-only">
          Project summary
        </h2>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
          {study.summary}
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mt-12 border-t border-slate-200/80 pt-12 sm:mt-14 sm:pt-14 lg:mt-16 lg:pt-16"
        aria-labelledby={overviewId}
      >
        <div
          className={`grid grid-cols-1 gap-10 lg:gap-14 xl:gap-16 ${study.overviewSupporting ? 'lg:grid-cols-12' : ''}`}
        >
          <div className={study.overviewSupporting ? 'lg:col-span-7' : 'max-w-3xl'}>
            <h2
              id={overviewId}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Project overview
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
              {study.projectOverview}
            </p>
          </div>
          {study.overviewSupporting ? (
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200/70 bg-slate-50/90 px-5 py-6 sm:px-6 sm:py-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {supportingTitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-[0.9375rem] sm:leading-relaxed">
                  {study.overviewSupporting}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mt-12 sm:mt-14 lg:mt-16"
        aria-labelledby={keyInfoId}
      >
        <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-11">
          <h2
            id={keyInfoId}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400"
          >
            Key info
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:mt-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
            {infoRows.map((row) => (
              <div key={row.label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {row.label}
                </dt>
                <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-slate-900 sm:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mt-12 border-t border-slate-200/80 pt-12 sm:mt-14 sm:pt-14 lg:mt-16 lg:pt-16"
        aria-labelledby={capId}
      >
        <h2 id={capId} className="sr-only">
          Our role and deliverables
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Our role
            </h3>
            <BulletList items={study.ourRole} />
          </div>
          <div className="border-t border-slate-200/80 pt-12 lg:border-t-0 lg:border-l lg:border-slate-200/80 lg:pt-0 lg:pl-16 xl:pl-20">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What we built
            </h3>
            <BulletList items={study.whatWeBuilt} />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mt-14 sm:mt-16 lg:mt-[4.5rem]"
        aria-labelledby={galleryId}
      >
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2
            id={galleryId}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Gallery
          </h2>
          <p className="text-[11px] text-slate-500 sm:text-right">{gallerySubtitle}</p>
        </div>

        <div className="mt-6 space-y-4 sm:mt-8 lg:space-y-5">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-8">
              <GalleryFigure slot={g0} featured />
            </div>
            <div className="lg:col-span-4">
              <GalleryFigure slot={g1} supporting />
            </div>
          </div>
          {(!isPlaceholder(g2) || !isPlaceholder(g3)) && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {!isPlaceholder(g2) && <GalleryFigure slot={g2} />}
              {!isPlaceholder(g3) && <GalleryFigure slot={g3} />}
            </div>
          )}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={sectionVariants}
        className="mt-14 sm:mt-16 lg:mt-20"
        aria-labelledby={outcomeId}
      >
        <div className="rounded-2xl bg-slate-100/80 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <h2
            id={outcomeId}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Outcome
          </h2>
          <p className="mt-5 max-w-[48rem] text-lg font-medium leading-snug text-slate-800 sm:mt-6 sm:text-xl sm:leading-snug lg:text-[1.35rem] lg:leading-snug">
            {study.outcome}
          </p>
        </div>
      </motion.section>
    </div>
  )
}
