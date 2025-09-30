import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { HeroCarousel } from '@/components/HeroCarousel'
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
import imageCopymachine from '@/images/copymachine.png'
import imageAimachine from '@/images/aimachine.png'
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
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 1024px) {
            .aimachine-bg {
              background-image: url(${imageAimachine.src});
              background-repeat: no-repeat;
              background-position: calc(100% + 80px) center;
              background-size: 60% auto;
            }
          }
        `,
        }}
      />
      <div className="aimachine-bg mx-0 mt-24 bg-neutral-50 py-20 sm:mt-32 sm:py-32 lg:mx-0 lg:mt-32">
        <Container>
          <FadeInStagger faster>
            <div className="flex flex-col items-start">
              {/* Content */}
              <div className="flex w-full flex-col lg:w-1/2">
                <FadeIn>
                  <h2 className="mr-10 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                    Hvordan ser automasjon ut s&aring;nn p&aring; tampen av
                    2025?
                  </h2>
                </FadeIn>
                <FadeIn>
                  <p className="mt-6 mr-10 text-lg text-neutral-600">
                    <i>Marketing automation er bare s&aring; 2015...</i> Vel,
                    ikke helt, det er i h&oslash;yeste grad levende. Det er bare
                    det at i dag kan vi gj&oslash;re s&aring; mye, mye mer. Tenk
                    bare p&aring; hvor langt KI har kommet. Hva? har dere ikke
                    kommet i gang Med KI enn&aring;? Da vil vi snakke med deg.
                  </p>
                </FadeIn>
              </div>
            </div>
          </FadeInStagger>
        </Container>
      </div>
    </>
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
        title="Hva vi kan hjelpe til med n&aring;r det kommer til automasjon"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Automasjon kan v&aelig;re s&aring; langt. Fra enkle flows til mer
          avanserte agent-oppsett. Vi hjelper deg med sm&aring; eller store
          prosjekter som passer til ditt behov og din bedrift..
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
        eyebrow="Generativ AI + designerekspertise"
        title="Komplett designsystem-automatisering"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Vi transformerer designprosesser ved &aring; kombinere avansert
          AI-teknologi med dypg&aring;ende forst&aring;else av
          merkevareidentitet, og skaper komplette designsystemer som skalerer
          p&aring; tvers av alle plattformer.
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
            <ListItem title="Designsystem-analyse">
              Vi analyserer deres eksisterende designsystem, merkevareidentitet
              og visuelle retningslinjer for &aring; skape en skreddersydd
              AI-modell.
            </ListItem>
            <ListItem title="Komplett elementbibliotek">
              Generer ikoner, piktogrammer, illustrasjoner og
              datavisualiseringselementer - alt fra app-ikoner til
              PowerPoint-illustrasjoner og plakatdesign.
            </ListItem>
            <ListItem title="Plattformtilpasning">
              Automatisk optimalisering for web, mobile apper, print,
              presentasjoner og sosiale medier med korrekt oppl&oslash;sning og
              format.
            </ListItem>
            <ListItem title="Kvalitetssikring">
              Ekspertdesignere kurerer og validerer alle AI-genererte elementer
              for &aring; sikre h&oslash;yeste kvalitet og merkevareintegritet.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function ProcessSteps() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-32">
      <SectionIntro title="V&aring;r metodikk" className="mb-16">
        <p>
          Ut i fra deres designsystem og deres merkevareidentitet skaper vi en
          AI-l&oslash;sning som genererer konsistente designelementer p&aring;
          tvers av alle medier og plattformer.
        </p>
      </SectionIntro>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              1
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              Designsystem-kartlegging
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Vi kartlegger deres eksisterende designsystem, merkevareidentitet,
              fargepaletter og typografi for &aring; forst&aring; deres unike
              visuelle spr&aring;k.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              2
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              AI-modell trening
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              V&aring;r AI l&aelig;rer deres spesifikke designprinsipper og
              merkevareidentitet for &aring; produsere konsistente,
              merkevareriktige resultater.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
              3
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
              Produksjon & levering
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Generer komplette designelementer optimalisert for alle deres
              behov - fra digitale grensesnitt til trykte materialer.
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  description:
    'Vectorama - AI-powered designsystem automatisering. Generer merkevarekonistente ikoner, illustrasjoner og designelementer p&aring; tvers av alle plattformer.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <HeroCarousel />
      </Container>

      <Clients />

      <ProcessSteps />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Telenor', logo: logoPhobiaDark }}
      >
        Vectorama har transformert v&aring;r designprosess. Vi kan n&aring;
        produsere konsistente, merkevareriktige designelementer p&aring; en
        br&oslash;kdel av tiden det tok tidligere, alt fra app-ikoner til
        presentasjonsgrafikk.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
