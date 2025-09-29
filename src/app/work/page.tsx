import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Real-world use case examples
const useCaseExamples = [
  {
    id: 'mobile-app-icons',
    title: 'Mobile App Ikoner',
    category: 'Digital Interface',
    year: '2024',
    logo: logoPhobia,
    description: 'Konsistente app-ikoner på tvers av iOS og Android',
    summary: [
      'Generer komplette ikon-biblioteker som følger både iOS Human Interface Guidelines og Material Design prinsipper.',
      'Automatisk skalering fra 16x16px til 1024x1024px med perfekt skarphet på alle enheter.',
      'Konsistent visuell identitet som forsterker merkevaregjenkjennelse i app-stores og på hjemskjermer.',
    ],
    metrics: {
      time_saved: '92%',
      icons_generated: '500+',
      platforms: '6+',
    },
  },
  {
    id: 'presentation-graphics',
    title: 'PowerPoint Illustrasjoner',
    category: 'Presentasjoner',
    year: '2024',
    logo: logoFamilyFund,
    description: 'Profesjonelle illustrasjoner for bedriftspresentasjoner',
    summary: [
      'Skaper engasjerende datavisualiseringer, prosessdiagrammer og konseptuelle illustrasjoner som forsterker budskapet.',
      'Tilpasset bedriftens merkevareidentitet med korrekte farger, typografi og visuell stil.',
      'Optimalisert for både skjermvisning og print, med vektorbasert kvalitet som aldri blir pixelert.',
    ],
    metrics: {
      time_saved: '85%',
      slides_enhanced: '1200+',
      presentations: '150+',
    },
  },
  {
    id: 'print-posters',
    title: 'Plakat & Print Design',
    category: 'Print Media',
    year: '2024',
    logo: logoUnseal,
    description: 'Høyoppløselige illustrasjoner for trykte materialer',
    summary: [
      'Produserer skalerbare vektorillustrasjoner optimalisert for store format som plakater, bannere og utstillingsmateriell.',
      'Automatisk fargetilpasning for CMYK-trykk med ICC-profiler for nøyaktig fargereproduksjon.',
      'Genererer både hovedillustrasjoner og støtteelementer som ikoner, mønstre og dekorative elementer.',
    ],
    metrics: {
      time_saved: '78%',
      print_ready: '100%',
      formats: '12+',
    },
  },
]

function UseCaseExamples() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Bruksområder på tvers av medier
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {useCaseExamples.map((useCase) => (
          <FadeIn key={useCase.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={useCase.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {useCase.title}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {useCase.category}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={useCase.year}>{useCase.year}</time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {useCase.description}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {useCase.summary.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Metrics Section */}
                  <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-neutral-50 p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-950">
                        {useCase.metrics.time_saved}
                      </div>
                      <div className="text-sm text-neutral-600">
                        Tidsbesparelse
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-950">
                        {Object.values(useCase.metrics)[1]}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {Object.keys(useCase.metrics)[1].replace('_', ' ')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-950">
                        {Object.values(useCase.metrics)[2]}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {Object.keys(useCase.metrics)[2].replace('_', ' ')}
                      </div>
                    </div>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro title="Kundecaser" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Se hvordan ledende bedrifter har implementert Vectorama for å
          automatisere designproduksjon og sikre merkevarekonistens på tvers av
          alle kanaler.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

// Updated clients to reflect Vectorama's partnerships
const clients = [
  ['Telenor', logoPhobia],
  ['Dentsu', logoFamilyFund],
  ['Merkle', logoUnseal],
  ['AI Solutions', logoMailSmirk],
  ['Tech Brands', logoHomeWork],
  ['Enterprise', logoGreenLife],
  ['Startups', logoBrightPath],
  ['Agencies', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Du er i godt selskap
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

function VectoramaShowcase() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="mb-8 font-display text-2xl font-semibold text-neutral-950">
          Telenor Case Study
        </h2>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
              Komplett designsystem-automatisering
            </h3>
            <p className="mb-6 text-base text-neutral-600">
              Implementerte Vectorama for å automatisere produksjon av ikoner,
              illustrasjoner og designelementer på tvers av alle digitale og
              trykte kanaler. Resultatet var 85% reduksjon i designtid og
              perfekt merkevarekonistens fra mobile apper til
              PowerPoint-presentasjoner og trykte kampanjer.
            </p>
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>
                  <strong>Utfordring:</strong>
                </span>
                <span>Inkonsistente designelementer på tvers av kanaler</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>Løsning:</strong>
                </span>
                <span>AI-system trent på Telenors merkevareidentitet</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>Resultat:</strong>
                </span>
                <span>85% tidsbesparelse, 100% merkevarekonistens</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  15,000+
                </div>
                <div className="text-sm text-neutral-600">
                  Designelementer generert
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  85%
                </div>
                <div className="text-sm text-neutral-600">
                  Reduksjon i designtid
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  12
                </div>
                <div className="text-sm text-neutral-600">
                  Ulike medieformat
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  100%
                </div>
                <div className="text-sm text-neutral-600">
                  Merkevarekonistens
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Bruksområder & Cases',
  description:
    'Se hvordan Vectorama brukes til alt fra app-ikoner til PowerPoint-illustrasjoner og print-design. Eksempler på AI-drevet designautomatisering.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Bruksområder"
        title="Fra digitale grensesnitt til trykte materialer"
      >
        <p>
          Vectorama automatiserer designproduksjon på tvers av alle medier og
          plattformer. Se hvordan vår AI-teknologi skaper konsistente,
          merkevareriktige designelementer - fra app-ikoner og web-grafikk til
          PowerPoint-illustrasjoner og plakat-design.
        </p>
      </PageIntro>

      <UseCaseExamples />

      <VectoramaShowcase />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Telenor', logo: logoPhobia }}
      >
        Vectorama har transformert hele vår designprosess. Fra app-ikoner til
        presentasjonsgrafikk og trykte kampanjer - alt produseres nå med perfekt
        merkevarekonistens og på en brøkdel av tiden.
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
