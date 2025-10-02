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
  label: 'Smertelindring',
  description:
    'Vel, du trenger det først og fremst fordi du føler du må komme i gang med KI. Og samtidig føler du det er vanskelig å skille signalet i fra støyen. Du føler simpelthen du trenger å komme i kontakt med noen som kan veilede deg på en god måte, slik at du får den beste løsningen for deg og ditt selskap. Under er det noen områder du kan se litt nærmere på.',
  illustrations: [
    {
      id: 'illustration-1',
      title: 'Illustration 1',
      caption: 'Alt om GEO (KI-Søk)',
      placeholder: 'Illustration 1',
      image: illustration1,
      bgColor: 'bg-pink-100',
    },
    {
      id: 'illustration-2',
      title: 'Illustration 2',
      caption: 'Visuell Kommunikasjon',
      placeholder: 'Illustration 2',
      image: illustration2,
      bgColor: 'bg-blue-100',
    },
    {
      id: 'illustration-3',
      title: 'Illustration 3',
      caption: 'KI Strategi',
      placeholder: 'Illustration 3',
      image: illustration3,
      bgColor: 'bg-green-100',
    },
    {
      id: 'illustration-4',
      title: 'Illustration 4',
      caption: 'Agentsystemer',
      placeholder: 'Illustration 4',
      image: illustration4,
      bgColor: 'bg-purple-100',
    },
    {
      id: 'illustration-5',
      title: 'Illustration 5',
      caption: 'Generell Automasjon',
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
        <figcaption className="text-sm text-neutral-600">
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
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_70%)] fill-neutral-100 stroke-neutral-950/5"
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
