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
    id: 'vectorama',
    title: 'Vectorama',
    category: 'AI-drevet Vektorisering',
    year: '2024',
    logo: logoPhobia,
    description: 'Automatisk vektorisering av digitale assets med AI',
    summary: [
      'Transformerer rasterbilder til perfekte vektorgrafier ved hjelp av avansert AI. Generer skalerbare designelementer som bevarer merkevareidentitet på tvers av alle plattformer.',
      'Fra app-ikoner til illustrasjoner - AI-modellen lærer designsystemet ditt og produserer konsistente elementer tilpasset din visuelle identitet.',
      'Automatisk optimalisering for web, mobil, print og presentasjoner. Eksporter i alle formater (SVG, PDF, EPS) med perfekt kvalitet uansett størrelse.',
    ],
    metrics: {
      time_saved: '90%',
      assets_generated: '10K+',
      quality: '100%',
    },
  },
  {
    id: 'n8n-automation',
    title: 'N8N Automatisering',
    category: 'Workflow Automation',
    year: '2024',
    logo: logoFamilyFund,
    description: 'Enkle og effektive automatiseringsworkflows',
    summary: [
      'Implementerer kraftige automatiseringsworkflows med N8N som kobler sammen alle dine verktøy og tjenester. Fra enkel datasynkronisering til komplekse forretningsprosesser.',
      'Visuell workflow-designer gjør det enkelt å bygge, teste og vedlikeholde automatiseringer. Integrer med 400+ tjenester uten å skrive kode.',
      'Automatiser repetitive oppgaver som dataimport, rapportgenerering, kundevarsler og systemsynkronisering. Spar timer hver dag med smart automatisering.',
    ],
    metrics: {
      time_saved: '85%',
      workflows: '150+',
      integrations: '50+',
    },
  },
  {
    id: 'dag-agents',
    title: 'Avanserte AI-Agenter',
    category: 'Agentic Workflows (DAG)',
    year: '2024',
    logo: logoUnseal,
    description: 'Intelligente agentsystemer med DAG-arkitektur',
    summary: [
      'Bygger sofistikerte AI-agentsystemer basert på Directed Acyclic Graphs (DAG) for komplekse beslutningsprosesser og autonome workflows.',
      'Agentene kan resonnere, planlegge og utføre oppgaver selvstendig ved å kombinere flere AI-modeller, verktøy og datakilder i strukturerte grafnettverk.',
      'Perfekt for avanserte bruksområder som kundeservice-automatisering, intelligent dokumentbehandling, forskningsanalyse og dynamisk beslutningsstøtte.',
    ],
    metrics: {
      accuracy: '95%',
      autonomy: 'Høy',
      complexity: 'Avansert',
    },
  },
]

function UseCaseExamples() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Våre automatiseringstjenester
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
      <SectionIntro title="Prosjekter" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Eksempler på hvordan vi har implementert automatiseringsløsninger på
          tvers av ulike domener - fra designautomatisering til intelligente
          workflow-systemer og avanserte AI-agenter.
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

function AutomationShowcase() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="mb-8 font-display text-2xl font-semibold text-neutral-950">
          Suksesshistorie: Komplett automatiseringsløsning
        </h2>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
              Fra manuelle prosesser til smart automatisering
            </h3>
            <p className="mb-6 text-base text-neutral-600">
              Implementerte en helhetlig automatiseringsløsning som kombinerer
              Vectorama for designautomatisering, N8N for workflow-orkestrering,
              og AI-agenter for intelligent beslutningsstøtte. Resultatet var
              85% reduksjon i manuelt arbeid og betydelig forbedret konsistens
              på tvers av alle prosesser.
            </p>
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>
                  <strong>Utfordring:</strong>
                </span>
                <span>Tidkrevende manuelle prosesser og inkonsistens</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>Løsning:</strong>
                </span>
                <span>Tredelt automatiseringsstrategi med AI</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>Resultat:</strong>
                </span>
                <span>85% tidsbesparelse, full automatisering</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-neutral-50 p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  200+
                </div>
                <div className="text-sm text-neutral-600">
                  Automatiserte workflows
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  85%
                </div>
                <div className="text-sm text-neutral-600">
                  Reduksjon i manuelt arbeid
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  24/7
                </div>
                <div className="text-sm text-neutral-600">
                  Autonome AI-agenter
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-neutral-950">
                  100%
                </div>
                <div className="text-sm text-neutral-600">
                  Prosess-konsistens
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
  title: 'Tjenester & Cases',
  description:
    'Fra AI-drevet vektorisering (Vectorama) og N8N workflow-automatisering til avanserte AI-agenter med DAG-arkitektur. Se våre automatiseringsløsninger.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro eyebrow="Tjenester" title="Automatisering på alle nivåer">
        <p>
          Vi tilbyr tre hovednivåer av automatisering: Vectorama for AI-drevet
          vektorisering av digitale assets, N8N for effektive
          workflow-automatiseringer, og avanserte AI-agentsystemer med
          DAG-arkitektur for komplekse, autonome beslutningsprosesser.
        </p>
      </PageIntro>

      <UseCaseExamples />

      <AutomationShowcase />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Fornøyd kunde', logo: logoPhobia }}
      >
        Automateket har transformert hvordan vi jobber. Fra designautomatisering
        med Vectorama til intelligente workflows med N8N og AI-agenter - vi har
        spart utallige timer og oppnådd en konsistens vi ikke trodde var mulig.
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
