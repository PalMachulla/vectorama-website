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

function AIAKAKIValues() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Technology meets design expertise"
        invert
      >
        <p>
          We combine advanced AI technology with deep understanding of brand
          identity and design principles to create solutions that transform
          design processes.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            We continuously explore new possibilities in AI and machine learning
            to improve design automation and brand building across all media.
          </GridListItem>
          <GridListItem title="Brand integrity" invert>
            Every design element we generate respects and reinforces your brand
            identity, ensuring consistency from app icons to presentation
            graphics.
          </GridListItem>
          <GridListItem title="Quality" invert>
            Our AI models are trained to produce world-class design, with expert
            validation ensuring perfection in every element.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Alex Chen',
        role: 'AI Lead / Director of Innovation',
        image: { src: imageLeslieAlexander },
        description: 'Specialist in AI solutions and design system automation',
      },
      {
        name: 'Sarah Mitchell',
        role: 'Client Director',
        image: { src: imageMichaelFoster },
        description:
          'Leads customer relationships and ensures successful project deliveries',
      },
      {
        name: 'Marcus Rodriguez',
        role: 'Client Manager',
        image: { src: imageDriesVincent },
        description:
          '15 years of experience with complex brand projects and design automation',
      },
    ],
  },
  {
    title: 'Expert Team',
    people: [
      {
        name: 'Jordan Kim',
        role: 'AI Solutions Architect',
        image: { src: imageChelseaHagon },
        description:
          'Designs and implements AI solutions for design automation',
      },
      {
        name: 'Taylor Singh',
        role: 'AI SEO Specialist',
        image: { src: imageEmmaDorsey },
        description:
          'Optimizes brand visibility with AI-driven search engine strategy',
      },
      {
        name: 'River Johnson',
        role: 'Media Lead',
        image: { src: imageLeonardKrasner },
        description: 'Strategic media planning and campaign optimization',
      },
      {
        name: 'Casey Anderson',
        role: 'Senior AI Designer',
        image: { src: imageBlakeReid },
        description:
          'Curates AI-generated designs and ensures brand-appropriate results',
      },
      {
        name: 'Morgan Lee',
        role: 'Design System Expert',
        image: { src: imageKathrynMurphy },
        description:
          'Optimizes design elements for perfect scalability and quality',
      },
      {
        name: 'Avery Park',
        role: 'Brand Strategist',
        image: { src: imageWhitneyFrancis },
        description:
          'Analyzes brand identity and translates it into AI parameters',
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
                <h2 className="font-display text-2xl font-semibold text-white">
                  <span className="font-mono text-[#009DFF]">{'$ '}</span>
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
                        <div className="group relative overflow-hidden rounded-3xl border border-[#009DFF]/30 bg-neutral-900">
                          <div className="relative">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />
                            {/* Glitch effect overlay */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <Image
                                alt=""
                                {...person.image}
                                className="absolute inset-0 h-full w-full object-cover mix-blend-screen grayscale"
                                style={{
                                  filter: 'blur(0.5px)',
                                  transform: 'translate(-2px, -2px)',
                                  clipPath: 'inset(0 0 70% 0)',
                                }}
                              />
                              <Image
                                alt=""
                                {...person.image}
                                className="absolute inset-0 h-full w-full object-cover mix-blend-screen grayscale"
                                style={{
                                  filter: 'blur(0.5px) hue-rotate(90deg)',
                                  transform: 'translate(2px, 2px)',
                                  clipPath: 'inset(70% 0 0 0)',
                                }}
                              />
                            </div>
                          </div>
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black via-black/50 to-black/0 to-40% p-6">
                            <p className="font-mono text-base/6 font-semibold tracking-wide text-white">
                              <span className="text-[#FF00EE]">{'const '}</span>
                              <span className="text-[#009DFF]">
                                {person.name}
                              </span>
                            </p>
                            <p className="mt-2 font-mono text-sm text-[#BBFFA8]">
                              <span className="text-neutral-500">{'// '}</span>
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
  title: 'About Us',
  description:
    'AIAKAKI combines AI technology with design expertise to revolutionize brand building and design automation.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="AI-driven design system automation">
        <p>
          We revolutionize the design industry by combining groundbreaking AI
          technology with deep understanding of brand identity and visual
          communication.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            AIAKAKI was founded by a team of designers, technologists and brand
            experts who saw the need for a more efficient way to produce
            consistent, high-quality design elements. We discovered that
            traditional design processes were too time-consuming and
            inconsistent for modern brands that needed to scale rapidly across
            all media.
          </p>
          <p>
            Today we help leading companies like Telenor automate design
            production without compromising on quality or brand integrity. Our
            AI system learns your unique design identity and produces everything
            from app icons to presentation graphics that feel handcrafted by
            your own design team.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10,000+" label="Design elements generated" />
          <StatListItem value="85%" label="Reduction in design time" />
          <StatListItem value="25+" label="Brands transformed" />
        </StatList>
      </Container>

      <AIAKAKIValues />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our experienced team of AI experts and designers share insights on the future of design automation, brand building and AI-driven creative processes."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
