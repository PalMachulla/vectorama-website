import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import illustration1 from '@/images/illustrations/illustration1.png'
import illustration2 from '@/images/illustrations/illustration2.png'
import illustration3 from '@/images/illustrations/illustration3.png'
import illustration4 from '@/images/illustrations/illustration4.png'
import illustration5 from '@/images/illustrations/illustration5.png'

// Data structure for illustrations
interface Illustration {
  id: string
  title: string
  caption: string
  placeholder?: string
  image?: ImageProps['src']
  bgColor: string
}

// Configuration data
const sectionConfig = {
  label: 'Engineering Intelligence',
  description:
    'Well, you need it first and foremost because you feel you need to get started with AI. And at the same time, you find it difficult to separate the signal from the noise. You simply feel you need to get in touch with someone who can guide you in a good way, so you get the best solution for you and your company. Below are some areas you can take a closer look at.',
  illustrations: [
    {
      id: 'illustration-1',
      title: 'Illustration 1',
      caption: 'GEO (AI Search)',
      placeholder: 'Illustration 1',
      image: illustration1,
      bgColor: 'bg-pink-100',
    },
    {
      id: 'illustration-2',
      title: 'Illustration 2',
      caption: 'Visual Communication',
      placeholder: 'Illustration 2',
      image: illustration2,
      bgColor: 'bg-blue-100',
    },
    {
      id: 'illustration-3',
      title: 'Illustration 3',
      caption: 'AI Strategy',
      placeholder: 'Illustration 3',
      image: illustration3,
      bgColor: 'bg-green-100',
    },
    {
      id: 'illustration-4',
      title: 'Illustration 4',
      caption: 'Agent Systems',
      placeholder: 'Illustration 4',
      image: illustration4,
      bgColor: 'bg-purple-100',
    },
    {
      id: 'illustration-5',
      title: 'Illustration 5',
      caption: 'General Automation',
      placeholder: 'Illustration 5',
      image: illustration5,
      bgColor: 'bg-yellow-100',
    },
  ],
}

// Presentation component for individual illustration
function IllustrationCard({ illustration }: { illustration: Illustration }) {
  return (
    <FadeIn>
      <figure className="text-center">
        <div
          className={`mb-4 flex aspect-square items-center justify-center overflow-hidden ${illustration.bgColor}`}
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
            borderRadius: '12px',
          }}
        >
          {illustration.image ? (
            <Image
              src={illustration.image}
              alt={illustration.title}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-neutral-400">{illustration.placeholder}</span>
          )}
        </div>
        <figcaption className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
          <span className="text-[#009DFF]">{'> '}</span>
          {illustration.caption}
        </figcaption>
      </figure>
    </FadeIn>
  )
}

// Main component
export function SectionPattern({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate border-y border-[#009DFF]/10 bg-neutral-900 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,black_40%,transparent_70%)] fill-neutral-800 stroke-[#009DFF]/10"
        yOffset={-96}
      />
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Use SectionIntro for consistent styling */}
          <SectionIntro
            eyebrow={sectionConfig.label}
            title={children as string}
            className="mb-12"
          >
            {sectionConfig.description}
          </SectionIntro>

          {/* Illustrations Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectionConfig.illustrations.map((illustration) => (
              <IllustrationCard
                key={illustration.id}
                illustration={illustration}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
