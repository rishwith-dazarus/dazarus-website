import mitraHeroImg from '../assets/case-studies/mitra/mitra-hero-fortis.jpg'
import lovetopiaHeroImg from '../assets/case-studies/lovetopia/lovetopia-hero.jpg'
import lovetopiaRenderPrimaryImg from '../assets/case-studies/lovetopia/lovetopia-render-primary.jpg'
import lovetopiaRenderAltImg from '../assets/case-studies/lovetopia/lovetopia-render-alt.jpg'
import spodHeroImg from '../assets/case-studies/spod/spod-hero.jpg'
import spodStudioProductImg from '../assets/case-studies/spod/spod-studio-product.jpg'
import spodAngleStudioImg from '../assets/case-studies/spod/spod-angle-studio.jpg'
import spodOfficeDeploymentImg from '../assets/case-studies/spod/spod-office-deployment.jpg'
import mitraFullBodyImg from '../assets/case-studies/mitra/mitra-full-body.jpg'
import mitraStudioProductImg from '../assets/case-studies/mitra/mitra-studio-product.jpg'
import mitraDeploymentImg from '../assets/case-studies/mitra/mitra-event-deployment.jpg'
import mitraInterfaceImg from '../assets/case-studies/mitra/mitra-interface-chest.jpg'

export type CaseStudyGalleryImage = {
  src: string
  alt: string
  /** Short label for the gallery grid */
  caption: string
}

export type CaseStudy = {
  slug: string
  name: string
  /** Shown on listing card */
  cardCategory: string
  image: string
  /** Hero image description for accessibility */
  heroImageAlt?: string
  tagline: string
  summary: string
  /** Product, context, challenge, and Dazarus involvement */
  projectOverview: string
  /** Optional right column for overview split */
  overviewSupporting?: string
  /** Label above overviewSupporting (default: "Why it was hard") */
  overviewSupportingTitle?: string
  /** Subtitle next to Gallery heading */
  gallerySubtitle?: string
  /** Tailwind object-* classes for hero image crop */
  heroObjectPosition?: string
  client: string
  category: string
  scope: string
  completion: string
  /** What Dazarus owned on the project */
  ourRole: string[]
  whatWeBuilt: string[]
  outcome: string
  /** Optional image grid on the case study detail page */
  gallery?: CaseStudyGalleryImage[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'mitra-robot',
    name: 'Mitra Robot',
    cardCategory: 'Robotics • AI • Product Development',
    image: mitraHeroImg,
    heroImageAlt:
      'Black and white photo of Mitra humanoid robot in a hospital lobby, arm raised with screening device, Fortis signage and health information poster visible',
    tagline: 'AI-powered humanoid robot for real-world interaction',
    summary:
      'Mitra is Invento’s humanoid service robot for face-to-face engagement in hotels, clinics, and busy public spaces—where safety, uptime, and believable interaction matter as much as the technology demo.',
    projectOverview:
      'The program targets a full humanoid robotics product: a machine people approach, talk to, and trust in real venues. The hard part is not a single feature—it is coherence across mechanics, perception, on-robot software, and field operations. Dazarus worked as a product and prototyping partner from early architecture through integration hardening: aligning the hardware stack with interaction design, shipping iterative builds, and supporting the path to repeatable production rather than one-off show units.',
    overviewSupporting:
      'What made this hard: human-scale hardware in public spaces, safety and reliability expectations, and interaction that reads as capable—not theatrical. Mitra had to survive real venues, real foot traffic, and real operator workflows while the product definition was still tightening.',
    overviewSupportingTitle: 'Why it was hard',
    client: 'Invento Robotics',
    category: 'Robotics • AI • Product Development',
    scope: 'Architecture through production readiness & deployment support',
    completion: 'Production-ready units in live environments',
    ourRole: [
      'Product & systems architecture',
      'End-to-end prototype development and integration',
      'Human–machine interaction (voice, vision, on-robot behaviour)',
      'Hardware / software co-design and test',
      'Validation, documentation, and production handoff support',
    ],
    whatWeBuilt: [
      'Integrated humanoid platform: chassis, sensing, power, and compute as one shippable system',
      'Multimodal interaction stack—speech, visual cues, and scripted venue workflows tuned for public floors',
      'Indoor navigation and obstacle handling calibrated for real building layouts',
      'Operator-facing configuration paths and update-friendly software structure for staged rollout',
      'Reliability cycles, traceability, and engineering package for manufacturing partners',
    ],
    outcome:
      'Mitra moved from concept to production-capable robots operating in the wild—demonstrating that human-scale robotics can meet the same bar as serious consumer hardware: dependable interaction, maintainable software, and a credible path to scale.',
    gallerySubtitle: 'Field, studio, and system detail',
    gallery: [
      {
        src: mitraFullBodyImg,
        alt: 'Mitra humanoid robot full height on a retail floor, chest screen visible',
        caption: 'Full body — product & scale',
      },
      {
        src: mitraStudioProductImg,
        alt: 'Mitra humanoid robot full studio shot on neutral grey, chest screen showing Invento Robotics branding, MITRA logo on arm and base',
        caption: 'Studio product reference',
      },
      {
        src: mitraDeploymentImg,
        alt: 'Mitra robot in a large indoor expo hall with attendees in the background',
        caption: 'Event & deployment environment',
      },
      {
        src: mitraInterfaceImg,
        alt: 'Close-up of Mitra chest tablet showing on-robot UI and camera',
        caption: 'Interface & on-robot interaction',
      },
    ],
  },
  {
    slug: 'lovetopia',
    name: 'LoveTopia',
    cardCategory: 'Retail Experience • Hardware • Prototype',
    image: lovetopiaHeroImg,
    heroImageAlt:
      'LoveTopia orange and chrome capsule dispenser with glass chamber, glowing love topia signage and warm interior lighting',
    tagline: 'Interactive retail prototype for immersive product engagement',
    summary:
      'LoveTopia is a bespoke retail installation that turns a physical product story into something people can touch, trigger, and remember—built as a deployable prototype, not a render.',
    projectOverview:
      'The brand needed more than signage: a tangible system that could dispense, surprise, and hold up under real foot traffic. The challenge was to compress industrial design, electromechanics, and firmware into a single experience that could ship, install, and run reliably on the sales floor. Dazarus translated the concept into a working product: mechanical design for the interaction, custom electronics, embedded control, and build quality suitable for customer-facing deployment.',
    overviewSupporting:
      'The constraint was retail reality: one cohesive electromechanical story with floor polish, service access for pilots, and firmware that could be tuned without spinning new hardware every week.',
    overviewSupportingTitle: 'What made this hard',
    heroObjectPosition: 'object-[center_48%]',
    gallerySubtitle: 'Prototype build, retail context, and detail views',
    client: 'LoveTopia',
    category: 'Retail Experience • Hardware • Prototype',
    scope: 'Concept through field-ready prototype',
    completion: 'Deployed customer-facing prototype',
    ourRole: [
      'Experience and physical product design support',
      'Custom hardware prototype engineering',
      'Embedded systems and motion / dispensing control',
      'Fabrication planning and assembly for trials',
      'On-site validation and iteration',
    ],
    whatWeBuilt: [
      'Electromechanical product core built around the brand’s intended ritual (dispense, reveal, reset)',
      'Low-level control for motors, sensors, and safe failure modes in a public setting',
      'PCB bring-up, firmware, and bench-to-floor debugging cycles',
      'Durable enclosure and internal layout for service access during pilots',
      'End-to-end build, test, and handoff so the client could run the unit in-market',
    ],
    outcome:
      'LoveTopia shipped as a credible retail prototype: interactive, on-brand, and robust enough to prove the experience before committing to a larger hardware program.',
    gallery: [
      {
        src: lovetopiaRenderPrimaryImg,
        alt: 'LoveTopia dispenser render with illuminated love topia logo inside the glass chamber and orange capsules',
        caption: 'Product render — primary concept',
      },
      {
        src: lovetopiaRenderAltImg,
        alt: 'LoveTopia octagonal glass dispenser filled with glowing capsules on orange tiered base',
        caption: 'Product render — alternate view',
      },
    ],
  },
  {
    slug: 'spod',
    name: 'SPOD',
    cardCategory: 'Autonomous Systems • Robotics • IoT',
    image: spodHeroImg,
    heroImageAlt:
      'SPOD autonomous robot: white body with red top panel, front sensor band and SPOD branding on a neutral background',
    tagline: 'Autonomous indoor delivery and utility robot',
    summary:
      'SPOD is an autonomous indoor platform for moving goods and supporting operations in controlled environments—navigation, payload, and fleet-friendly software in one robotics product line.',
    projectOverview:
      'Indoor delivery fails when navigation is brittle or the robot cannot share a building with people and infrastructure. SPOD was scoped as a versatile base: autonomous motion, a usable payload envelope, and connectivity for monitoring and tasking. Dazarus focused on prototyping the integrated robot—embedded control, autonomy stack integration, and the glue between hardware behaviour and cloud-side operations—so Invento could stress-test use cases before locking a single vertical.',
    overviewSupporting:
      'The tension was autonomy performance versus building reality—people, doorways, uneven floors, and operators who need visibility—while keeping the platform modular enough for parallel pilot configurations.',
    overviewSupportingTitle: 'What made this hard',
    heroObjectPosition: 'object-[center_40%]',
    gallerySubtitle: 'Platform, navigation, and integration views',
    client: 'Invento Robotics',
    category: 'Autonomous Systems • Robotics • IoT',
    scope: 'Integrated prototype & system bring-up',
    completion: 'Functional prototype & integration milestone',
    ourRole: [
      'Robotics platform prototyping',
      'Embedded control, drivers, and sensor integration',
      'Autonomous navigation stack integration and tuning',
      'Cloud-connected monitoring / command interfaces',
      'Hardware–software integration and test harnesses',
    ],
    whatWeBuilt: [
      'Indoor autonomy loop with real-sensor inputs mapped to safe motion policies',
      'Modular payload deck and mechanical interfaces for multiple trial configurations',
      'Edge firmware architecture for motor control, safety stops, and state reporting',
      'Lightweight cloud hooks for status, logs, and remote tasking during pilots',
      'Repeatable bench and floor test procedures for regression before feature adds',
    ],
    outcome:
      'SPOD exists as a flexible indoor robotics prototype—ready to anchor logistics, utility, or service workflows in controlled spaces, with engineering depth that supports the next product decision rather than a single demo path.',
    gallery: [
      {
        src: spodStudioProductImg,
        alt: 'SPOD robot front view, white and red housing with front camera recess and SPOD wordmark',
        caption: 'Studio product — reference hardware',
      },
      {
        src: spodAngleStudioImg,
        alt: 'SPOD robot three-quarter studio view, white glossy body and red top',
        caption: 'Product angle — illustrative studio render',
      },
      {
        src: spodOfficeDeploymentImg,
        alt: 'SPOD-style robot in a bright office corridor, deployment context',
        caption: 'Indoor deployment — illustrative environment',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string | undefined): CaseStudy | undefined {
  if (!slug) return undefined
  return CASE_STUDIES.find((s) => s.slug === slug)
}
