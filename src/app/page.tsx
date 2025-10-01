import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { HeroCarousel } from '@/components/HeroCarousel'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionPattern } from '@/components/SectionPattern'
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
      <SectionIntro
        title="Hva er Automateket?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Automakeriet er en konsulenttjeneste som hjelper bedrifter med å
          implementere og optimalisere KI-løsninger. Vi er spesialister på
          Generative Engine Optimization (GEO), og hjelper bedrifter med å
          strukturere, merke og presentere data slik at generative AI-systemer
          forstår og prioriterer ditt innhold. Dette gir økt synlighet, bedre
          brukeropplevelser og sikrer at merkevaren din er relevant i en tid der
          kunstig intelligens former informasjonsflyten.
        </p>
      </SectionIntro>
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
        title="Noe av det arbeidet vi har stablet på beina over tid"
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
    <>
      <SectionIntro
        title="Noe av det vi gjør i dag"
        className="mt-12 sm:mt-16 lg:mt-16"
      >
        <p>
          Vi huser flinke folk med bred ekspertise på alle omr&aring;der hvor KI
          har gjort sitt inntog. Det betyr at vi r&aring;dgir og hjelper til med
          endringer, samt bidrar inn i innovasjonsprosesser der avansert KI tas
          i bruk.
        </p>
      </SectionIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <FadeIn>
            <div className="flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
                1
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Hverdagskost
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Vi bistår med GEO-tilpassing og optimalisering, slik at dere kan
                ta neste steg etter SEO.
                <br />
                <strong>Generative Engine Optimization (GEO)</strong> handler om
                å optimalisere innhold og digitale løsninger for generative
                AI-motorer, ikke bare søkemotorer. Vi hjelper din virksomhet med
                å strukturere, merke og presentere data slik at generative
                AI-systemer forstår og prioriterer ditt innhold. Dette gir økt
                synlighet, bedre brukeropplevelser og sikrer at merkevaren din
                er relevant i en tid der kunstig intelligens former
                informasjonsflyten.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-lg font-bold text-white">
                2
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Innholdsproduksjon
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
                Automasjon
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Generer komplette designelementer optimalisert for alle deres
                behov - fra digitale grensesnitt til trykte materialer.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
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
      <div className="mt-16 sm:mt-20 md:mt-24">
        <Container>
          <HeroCarousel />
        </Container>
      </div>
      <SectionPattern
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Telenor', logo: logoPhobiaDark }}
      >
        <div>Hva er Automateket, og hvorfor trenger du det?</div>
      </SectionPattern>

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
