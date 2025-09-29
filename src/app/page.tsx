import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Updated clients to reflect Vectorama's partnerships
const clients = [
  ['Telenor', logoPhobiaLight], // Using existing logo as placeholder for Telenor
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
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by leading brands and innovative companies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Showcases: Transforming brand design workflows"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          See how we've revolutionized design processes for leading companies,
          enabling them to generate brand-consistent SVGs at scale with our
          AI-powered vector generation platform.
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

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Generativ AI + designerkurering"
        title="Skalerbar merkevarebygging med AI-drevne vektorløsninger"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Vi transformerer designprosesser ved å kombinere kraftig AI-teknologi
          med ekspert designerkurering, slik at dere kan produsere konsistente,
          merkevareriktige SVG-er på sekunder.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="AI-Merkevareanalyse">
              Vi analyserer deres merkevareidentitet og visuelle elementer for å
              forstå deres unike stil og skape et skreddersydd AI-system.
            </ListItem>
            <ListItem title="Automatisert SVG-generering">
              Produser konsistente, skalerbare ikoner, illustrasjoner og
              pictogrammer på sekunder - alle perfekt tilpasset deres merkevare.
            </ListItem>
            <ListItem title="Smart organisering">
              Semantisk navngiving, strukturerte biblioteker og direkte eksport
              til Figma, Sketch og Adobe for sømløs integrering i arbeidsflyten.
            </ListItem>
            <ListItem title="Kvalitetssikring">
              Ekspertdesignere kurerer og finjusterer AI-output for å sikre
              optimal kvalitet og fullstendig merkevarekonsistens.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function ProcessSteps() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="Slik fungerer det" className="mb-16">
        <p>
          Vi tar deres designelementer og skaper et GenAI-system som genererer
          SVG-er i henhold til merkevareguiden deres.
        </p>
      </SectionIntro>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              1
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              Last opp designelementer
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Send oss deres logoer, fargepaletter, typografi og
              designretningslinjer. Vi støtter alle vanlige formater.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              2
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              AI studerer merkevaren
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Våre AI-modeller analyserer deres eksisterende designelementer for
              å produsere konsistente, on-brand resultater.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              3
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              Generer & rediger
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Få uendelig med merkevareriktige SVG-er som er fullt redigerbare,
              skalerbare og klare for alle plattformer.
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  description:
    'Vectorama - AI-powered vector generation platform for consistent brand assets and illustrations. Seil ut med vår GenAI vektorløsning.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Vectorama
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Seil ut med vår GenAI vektorløsning. Generer fantastiske
            illustrasjoner og ikoner øyeblikkelig med AI-drevet
            merkevarebygging.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Sett seil
            </Link>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <ProcessSteps />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Telenor', logo: logoPhobiaDark }}
      >
        Vectorama har revolutionert vår designprosess. Vi kan nå produsere
        konsistente, merkevareriktige ikoner og illustrasjoner på en brøkdel av
        tiden det tok tidligere.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
