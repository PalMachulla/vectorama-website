import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-600 before:content-['/_'] after:text-white after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 font-mono text-base leading-relaxed text-neutral-400">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-[#009DFF]">needs</strong> and
          goals. We dive into daily operations to uncover what actually drives
          the business forward.
        </p>
        <p>
          Our team of private investigators shadows the company&apos;s directors
          for several weeks, while our account managers focus on thorough review
          of their garbage to get a deep understanding of their{' '}
          <strong className="font-semibold text-[#009DFF]">value chains</strong>
          .
        </p>
        <p>
          Just kidding. But we do want to sit close with you to map out your AI
          maturity level and how we can best contribute with our expertise.
          Through dialogue and analysis, we identify opportunity areas and
          develop a tailored approach plan.
        </p>
      </div>

      <h3 className="mt-12 font-mono text-base font-semibold text-white">
        <span className="text-[#FF00EE]">{'const '}</span>
        <span className="text-[#009DFF]">includedInPhase</span>
        <span className="text-neutral-400">{' = ['}</span>
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Opportunity and feasibility studies</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proof of concept (PoC)</TagListItem>
        <TagListItem>AI maturity analysis</TagListItem>
        <TagListItem>Other consultation</TagListItem>
      </TagList>
      <div className="mt-2 font-mono text-neutral-400">{'];'}</div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 font-mono text-base leading-relaxed text-neutral-400">
        <p>
          Based on the discovery phase, we develop a comprehensive{' '}
          <strong className="font-semibold text-[#009DFF]">roadmap</strong> for
          the project and begin work towards delivery. We select the best AI
          models and technologies that fit your specific needs.
        </p>
        <p>
          Each client is assigned a dedicated project manager who keeps
          communication lines open and ensures the project stays on track. They
          serve as a liaison between your team and our AI specialists who work
          to develop tailored solutions.
        </p>
        <p>
          We work iteratively with regular updates and demonstrations, so you
          are always involved in the development. This ensures that the end
          result matches expectations and delivers real value to your business.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Thomas Hansen', role: 'CTO at TechCorp' }}
        className="mt-12"
      >
        The team kept us updated throughout the process. We felt confident that
        the project was in good hands.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 font-mono text-base leading-relaxed text-neutral-400">
        <p>
          When the solution is ready, we conduct thorough{' '}
          <strong className="font-semibold text-[#009DFF]">
            testing and validation
          </strong>{' '}
          to ensure everything works optimally. We set up necessary
          infrastructure and ensure systems are ready for production.
        </p>
        <p>
          Implementation happens in a controlled manner, often in{' '}
          <strong className="font-semibold text-[#009DFF]">phases</strong> to
          minimize risk. We closely monitor performance and adjust along the way
          to ensure the best possible{' '}
          <strong className="font-semibold text-[#009DFF]">results</strong>.
        </p>
        <p>
          We ensure all key components are{' '}
          <strong className="font-semibold text-[#009DFF]">
            fully functional
          </strong>{' '}
          at launch. In addition, we provide training to your team so they can
          use the solution effectively, with our{' '}
          <strong className="font-semibold text-[#009DFF]">support</strong>{' '}
          available for further optimization.
        </p>
      </div>

      <h3 className="mt-12 font-mono text-base font-semibold text-white">
        <span className="text-[#FF00EE]">{'const '}</span>
        <span className="text-[#009DFF]">includedInPhase</span>
        <span className="text-neutral-400">{' = {'}</span>
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Thorough testing of all components to ensure quality and reliability.
          We validate that AI models perform as expected in real-world
          scenarios.
        </ListItem>
        <ListItem title="Infrastructure">
          We set up robust infrastructure tailored to your needs, whether
          it&apos;s cloud-based solutions or on-premise systems.
        </ListItem>
        <ListItem title="Support">
          Continuous support and maintenance ensures the solution continues to
          deliver value over time. We help with updates and improvements as your
          needs evolve.
        </ListItem>
      </List>
      <div className="mt-2 font-mono text-neutral-400">{'};'}</div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-[#2d0a29] via-neutral-950 to-black">
        <GridPattern
          className="absolute inset-0 h-full w-full"
          yOffset={-270}
          interactive
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
        invert
      >
        <p>
          We strive to be at the forefront of new trends and technologies in AI
          and automation. We combine proven methods with innovation to deliver
          solutions that are both robust and groundbreaking. Our core values
          guide all our decisions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precise" invert>
            We are detail-oriented in our approach to AI development. Each
            solution is carefully tailored to your brand and needs, from color
            palette to design principles.
          </GridListItem>
          <GridListItem title="Efficient" invert>
            We pride ourselves on delivering on time by using smart tools and
            methodology. Experience enables us to work quickly without
            compromising on quality.
          </GridListItem>
          <GridListItem title="Adaptable" invert>
            Every business has unique needs, and our greatest strength is the
            ability to tailor solutions that fit perfectly to your specific
            situation.
          </GridListItem>
          <GridListItem title="Open" invert>
            We are transparent about our processes and communicate clearly
            throughout the project. You will always know where we stand and what
            is happening.
          </GridListItem>
          <GridListItem title="Loyal" invert>
            We build long-term relationships with our clients that go beyond
            just delivering a product. We are here to support you in the long
            term.
          </GridListItem>
          <GridListItem title="Innovative" invert>
            The technological landscape is constantly evolving, and so are we.
            We stay updated on the latest advances in AI and automation.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best possible value to our clients.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best possible value to our clients. We combine proven methodology with
          tailored AI solutions adapted to our customers&apos; unique needs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
