import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function VectoramaValues() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Våre verdier"
        title="Innovasjon møter merkevareekspertise"
        invert
      >
        <p>
          Vi kombinerer banebrytende AI-teknologi med dypgående forståelse av
          merkevareidentitet for å skape løsninger som revolusjonerer
          designprosesser.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovasjon" invert>
            Vi utforsker kontinuerlig nye muligheter innen AI og maskinlæring
            for å forbedre designautomatisering og merkevarebygging.
          </GridListItem>
          <GridListItem title="Merkevareintegritet" invert>
            Hver SVG vi genererer respekterer og forsterker din
            merkevareidentitet, og sikrer konsistens på tvers av alle
            plattformer.
          </GridListItem>
          <GridListItem title="Kvalitet" invert>
            Våre AI-modeller er trent til å produsere design i verdensklasse,
            med menneskelig kurering som sikrer perfektion i hvert element.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Ledelse',
    people: [
      {
        name: 'Pål Machulla',
        role: 'AI Lead / Director of Innovation',
        image: { src: imageLeslieAlexander },
        description: 'Vurderer og bistår med AI-løsninger for klienter',
      },
      {
        name: 'Benedicte Kjøde',
        role: 'Client Director',
        image: { src: imageMichaelFoster },
        description:
          'Leder kunderelasjoner og sikrer suksessfulle prosjektleveranser',
      },
      {
        name: 'Thale Håmo',
        role: 'Client Manager',
        image: { src: imageDriesVincent },
        description: '15 år med å seile gjennom komplekse merkevareprosjekter',
      },
    ],
  },
  {
    title: 'Mannskapet',
    people: [
      {
        name: 'Kim Oliver H. Andersson',
        role: 'AI Solutions Architect',
        image: { src: imageChelseaHagon },
        description: 'Designer og implementerer AI-løsninger for klienter',
      },
      {
        name: 'Alam Ali',
        role: 'AI SEO Specialist',
        image: { src: imageEmmaDorsey },
        description:
          'Optimerer merkevaresynlighet med AI-dreven søkemotorstrategi',
      },
      {
        name: 'Henrik Birkeland',
        role: 'Media Lead',
        image: { src: imageLeonardKrasner },
        description: 'Strategisk medieplanlegging og kampanjeoptimalisering',
      },
      {
        name: 'Design Lead',
        role: 'Senior AI Designer',
        image: { src: imageBlakeReid },
        description:
          'Kurerer AI-genererte design og sikrer merkevareriktige resultater',
      },
      {
        name: 'Vector Specialist',
        role: 'SVG Optimization Expert',
        image: { src: imageKathrynMurphy },
        description:
          'Optimaliserer SVG-output for perfekt skalerbarhet og kvalitet',
      },
      {
        name: 'Brand Analyst',
        role: 'Merkevarestrategist',
        image: { src: imageWhitneyFrancis },
        description:
          'Analyserer merkevareidentitet og oversetter til AI-parametre',
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Om Oss',
  description:
    'Vectorama kombinerer AI-teknologi med designekspertise for å revolusjonere merkevarebygging og designautomatisering.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="Om oss" title="AI-powered merkevareautomatisering">
        <p>
          Vi revolusjonerer designbransjen ved å kombinere banebrytende
          AI-teknologi med dypgående forståelse av merkevareidentitet og visuell
          kommunikasjon.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Vectorama ble grunnlagt av et team av designere, teknologer og
            merkevareeksperter som så behovet for en mer effektiv måte å
            produsere konsistente, høykvalitets vektorgrafikk på. Vi oppdaget at
            tradisjonelle designprosesser var for tidkrevende og inkonsistente
            for moderne merkevarer som trengte å skalere raskt.
          </p>
          <p>
            I dag hjelper vi ledende selskaper som Telenor med å automatisere
            designproduksjon uten å kompromittere på kvalitet eller
            merkevareintegritet. Vårt AI-system lærer din unike visuelle
            identitet og produserer SVG-er som føles håndlaget av ditt eget
            designteam.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="1000+" label="SVG-er generert" />
          <StatListItem value="80%" label="Reduksjon i designtid" />
          <StatListItem value="15+" label="Merkevarer transformert" />
        </StatList>
      </Container>

      <VectoramaValues />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Fra bloggen"
        intro="Vårt erfarne team av AI-eksperter og designere deler innsikter om fremtiden for designautomatisering, merkevarebygging og AI-drevne kreative prosesser."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
