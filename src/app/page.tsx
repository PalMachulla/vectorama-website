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
  ['AIAKAKI', logoFamilyFund],
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
        title="What is AIAKAKI?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          AIAKAKI is a consulting service that helps businesses implement and
          optimize AI solutions. We specialize in Generative Engine Optimization
          (GEO), helping businesses structure, label and present data so that
          generative AI systems understand and prioritize your content. This
          provides increased visibility, better user experiences and ensures
          that your brand is relevant in an era where artificial intelligence
          shapes the flow of information.
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
        title="Some of the work we have accomplished over time"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Automation can go far. From simple flows to more advanced agent
          setups. We help you with small or large projects that fit your needs
          and your business.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-lg border border-[#009DFF]/30 bg-neutral-950 p-6 transition hover:border-[#009DFF]/50 hover:bg-neutral-900 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-lg" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 font-mono text-sm text-neutral-400">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold text-[#009DFF]"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-600" aria-hidden="true">
                    /
                  </span>
                  <span className="text-neutral-500">Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-white">
                  {caseStudy.title}
                </p>
                <p className="mt-4 font-mono text-base leading-relaxed text-neutral-400">
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
  const solutions = [
    {
      name: 'VESEN',
      description:
        'A new platform for entertainment, mixing gaming with rich media experiences into true agentic omni experiences.',
      status: 'active',
      color: '#009DFF',
    },
    {
      name: 'Publo',
      description:
        'Set to revolutionize publishing houses with AI-driven content creation and distribution workflows.',
      status: 'active',
      color: '#BBFFA8',
    },
    {
      name: 'Canary',
      description:
        'Agentic management consulting for companies strongly adapted for AI-first business transformation.',
      status: 'active',
      color: '#FF00EE',
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Solutions"
        title="Platforms & Products"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We build platforms that push the boundaries of what&apos;s possible
          with AI. From entertainment to publishing to consulting - each
          solution represents a leap forward in agentic systems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <FadeIn key={solution.name}>
              <div
                className="relative flex h-full flex-col rounded-lg border bg-neutral-950 p-8"
                style={{ borderColor: `${solution.color}40` }}
              >
                <div
                  className="mb-6 font-mono text-xs tracking-wider uppercase"
                  style={{ color: solution.color }}
                >
                  <span className="text-neutral-500">{'$ '}</span>
                  {solution.status}
                </div>
                <h3 className="font-mono text-2xl font-bold text-white">
                  <span className="text-[#FF00EE]">{'const '}</span>
                  <span style={{ color: solution.color }}>{solution.name}</span>
                  <span className="text-neutral-400">{' = {'}</span>
                </h3>
                <p className="mt-6 flex-1 font-mono text-base leading-relaxed text-neutral-400">
                  {solution.description}
                </p>
                <div className="mt-6 font-mono text-neutral-400">{'};'}</div>
                <div
                  className="absolute -right-px -bottom-px h-16 w-16 opacity-20"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${solution.color}, transparent)`,
                  }}
                />
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-neutral-500">
            <span className="text-[#BBFFA8]">{'// '}</span>
            More solutions coming soon...
          </p>
        </div>
      </Container>
    </>
  )
}

function ProcessSteps() {
  return (
    <>
      <SectionIntro title="Our Approach" className="mt-12 sm:mt-16 lg:mt-16">
        <p>
          We house talented people with broad expertise in all areas where AI
          has made its mark. This means we advise and help with changes, as well
          as contribute to innovation processes where advanced AI is put to use.
        </p>
      </SectionIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <FadeIn>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#009DFF] font-mono text-sm font-bold text-white">
                01
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                Core Philosophy
              </h3>
              <div className="mt-4 w-full rounded-lg bg-neutral-950/50 p-4 font-mono text-xs leading-relaxed">
                <div className="text-neutral-500">
                  <span className="text-[#FF00EE]">const</span>{' '}
                  <span className="text-[#009DFF]">growthCurve</span>{' '}
                  <span className="text-neutral-400">=</span>{' '}
                  <span className="text-[#BBFFA8]">
                    &apos;exponential&apos;
                  </span>
                  <span className="text-neutral-400">;</span>
                </div>
                <div className="mt-1 text-neutral-500">
                  <span className="text-[#FF00EE]">let</span>{' '}
                  <span className="text-[#009DFF]">innovation</span>{' '}
                  <span className="text-neutral-400">=</span>{' '}
                  <span className="text-[#BBFFA8]">true</span>
                  <span className="text-neutral-400">;</span>
                </div>
                <div className="mt-3 text-neutral-600">
                  <span className="text-neutral-500">{'// '}</span>We recognize
                  the exponential
                </div>
                <div className="text-neutral-600">
                  <span className="text-neutral-500">{'// '}</span>nature of AI
                  advancement
                </div>
                <div className="mt-3 text-neutral-500">
                  <span className="text-[#FF00EE]">if</span>{' '}
                  <span className="text-neutral-400">(</span>
                  <span className="text-[#009DFF]">growthCurve</span>{' '}
                  <span className="text-neutral-400">===</span>{' '}
                  <span className="text-[#BBFFA8]">
                    &apos;exponential&apos;
                  </span>
                  <span className="text-neutral-400">) {'{'}</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">adapt</span>
                  <span className="text-neutral-400">(</span>
                  <span className="text-[#BBFFA8]">
                    &apos;continuously&apos;
                  </span>
                  <span className="text-neutral-400">);</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">embrace</span>
                  <span className="text-neutral-400">(</span>
                  <span className="text-[#BBFFA8]">&apos;change&apos;</span>
                  <span className="text-neutral-400">);</span>
                </div>
                <div className="text-neutral-400">{'}'}</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#BBFFA8] font-mono text-sm font-bold text-neutral-950">
                02
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                Agentic First
              </h3>
              <div className="mt-4 w-full rounded-lg bg-neutral-950/50 p-4 font-mono text-xs leading-relaxed">
                <div className="text-neutral-500">
                  <span className="text-[#FF00EE]">interface</span>{' '}
                  <span className="text-[#009DFF]">NextLeap</span>{' '}
                  <span className="text-neutral-400">{'{'}</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">technology</span>
                  <span className="text-neutral-400">:</span>{' '}
                  <span className="text-[#BBFFA8]">&apos;agentic&apos;</span>
                  <span className="text-neutral-400">;</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">autonomous</span>
                  <span className="text-neutral-400">:</span>{' '}
                  <span className="text-[#BBFFA8]">true</span>
                  <span className="text-neutral-400">;</span>
                </div>
                <div className="text-neutral-400">{'}'}</div>
                <div className="mt-3 text-neutral-600">
                  <span className="text-neutral-500">{'// '}</span>Anchored in
                  next-gen AI
                </div>
                <div className="mt-3 text-neutral-500">
                  <span className="text-[#FF00EE]">return</span>{' '}
                  <span className="text-[#009DFF]">systems</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">map</span>
                  <span className="text-neutral-400">(</span>
                  <span className="text-[#009DFF]">agent</span>{' '}
                  <span className="text-[#FF00EE]">=&gt;</span>{' '}
                  <span className="text-neutral-400">{'{'}</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">agent</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">learn</span>
                  <span className="text-neutral-400">();</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">agent</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">decide</span>
                  <span className="text-neutral-400">();</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">agent</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">execute</span>
                  <span className="text-neutral-400">();</span>
                </div>
                <div className="text-neutral-400">{'});'}</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex w-full flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF00EE] font-mono text-sm font-bold text-white">
                03
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                Innovated Imagination
              </h3>
              <div className="mt-4 w-full rounded-lg bg-neutral-950/50 p-4 font-mono text-xs leading-relaxed">
                <div className="text-neutral-500">
                  <span className="text-[#FF00EE]">class</span>{' '}
                  <span className="text-[#009DFF]">ThoughtLeader</span>{' '}
                  <span className="text-neutral-400">{'{'}</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">crossDomain</span>
                  <span className="text-neutral-400">:</span>{' '}
                  <span className="text-[#BBFFA8]">Knowledge</span>
                  <span className="text-neutral-400">[];</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">reasoning</span>
                  <span className="text-neutral-400">:</span>{' '}
                  <span className="text-[#BBFFA8]">&apos;inductive&apos;</span>
                  <span className="text-neutral-400">;</span>
                </div>
                <div className="mt-3 text-neutral-600">
                  <span className="text-neutral-500">{'  // '}</span>Creativity
                  + Logic
                </div>
                <div className="mt-2 text-neutral-500">
                  {'  '}
                  <span className="text-[#009DFF]">innovate</span>
                  <span className="text-neutral-400">() {'{'}</span>
                </div>
                <div className="text-neutral-500">
                  {'    '}
                  <span className="text-[#FF00EE]">const</span>{' '}
                  <span className="text-[#009DFF]">ideas</span>{' '}
                  <span className="text-neutral-400">=</span>{' '}
                  <span className="text-[#FF00EE]">this</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">combine</span>
                  <span className="text-neutral-400">(</span>
                </div>
                <div className="text-neutral-500">
                  {'      '}
                  <span className="text-[#FF00EE]">this</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">crossDomain</span>
                  <span className="text-neutral-400">,</span>
                </div>
                <div className="text-neutral-500">
                  {'      '}
                  <span className="text-[#FF00EE]">this</span>
                  <span className="text-neutral-400">.</span>
                  <span className="text-[#009DFF]">reasoning</span>
                </div>
                <div className="text-neutral-500">
                  {'    '}
                  <span className="text-neutral-400">);</span>
                </div>
                <div className="text-neutral-500">
                  {'  '}
                  <span className="text-neutral-400">{'}'}</span>
                </div>
                <div className="text-neutral-400">{'}'}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'AIAKAKI - AI-powered design system automation. Generate brand-consistent icons, illustrations and design elements across all platforms.',
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
        <div>What is AIAKAKI, and why do you need it?</div>
      </SectionPattern>

      <ProcessSteps />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Telenor', logo: logoPhobiaDark }}
      >
        AIAKAKI has transformed our design process. We can now produce
        consistent, brand-appropriate design elements in a fraction of the time
        it took previously, everything from app icons to presentation graphics.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
