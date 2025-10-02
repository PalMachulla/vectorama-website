import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import { FadeIn } from '@/components/FadeIn'
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
}

// Configuration data
const sectionConfig = {
  label: 'Smertelindring',
  description:
    'Her kan du se eksempler på våre designelementer og illustrasjoner som vi har utviklet for våre kunder.',
  illustrations: [
    {
      id: 'illustration-1',
      title: 'Illustration 1',
      caption: 'Alt om GEO (KI-Søk)',
      placeholder: 'Illustration 1',
      image: illustration1,
    },
    {
      id: 'illustration-2',
      title: 'Illustration 2',
      caption: 'Visuell Kommunikasjon',
      placeholder: 'Illustration 2',
      image: illustration2,
    },
    {
      id: 'illustration-3',
      title: 'Illustration 3',
      caption: 'KI Strategi',
      placeholder: 'Illustration 3',
      image: illustration3,
    },
    {
      id: 'illustration-4',
      title: 'Illustration 4',
      caption: 'Agentsystemer',
      placeholder: 'Illustration 4',
      image: illustration4,
    },
    {
      id: 'illustration-5',
      title: 'Illustration 5',
      caption: 'Generell Automasjon',
      placeholder: 'Illustration 5',
      image: illustration5,
    },
  ],
}

// Presentation component for individual illustration
function IllustrationCard({ illustration }: { illustration: Illustration }) {
  return (
    <figure className="text-center">
      <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-neutral-100">
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
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Header and Ingress */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-tr-xl rounded-bl-xl bg-neutral-950/10 px-3 py-1 text-sm font-medium text-neutral-950">
              {sectionConfig.label}
            </span>
            <div className="my-12 font-display font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-6xl">
              {children}
            </div>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              {sectionConfig.description}
            </p>
          </div>

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
