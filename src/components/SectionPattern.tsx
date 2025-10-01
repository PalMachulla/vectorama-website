import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

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
        {/* <FadeIn> */}
        <div className="mx-auto max-w-6xl">
          {/* Header and Ingress */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-tr-xl rounded-bl-xl bg-neutral-950/10 px-3 py-1 text-sm font-medium text-neutral-950">
              Smertelindring
            </span>
            <div className="my-12 font-display font-medium tracking-tight text-neutral-950 sm:text-4xl md:text-6xl">
              {children}
            </div>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Her kan du se eksempler på våre designelementer og illustrasjoner
              som vi har utviklet for våre kunder.
            </p>
          </div>

          {/* Five Illustrations */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {/* Illustration 1 */}
            <figure className="text-center">
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-neutral-100">
                <span className="text-neutral-400">Illustration 1</span>
              </div>
              <figcaption className="text-sm text-neutral-600">
                Caption for illustration 1
              </figcaption>
            </figure>

            {/* Illustration 2 */}
            <figure className="text-center">
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-neutral-100">
                <span className="text-neutral-400">Illustration 2</span>
              </div>
              <figcaption className="text-sm text-neutral-600">
                Caption for illustration 2
              </figcaption>
            </figure>

            {/* Illustration 3 */}
            <figure className="text-center">
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-neutral-100">
                <span className="text-neutral-400">Illustration 3</span>
              </div>
              <figcaption className="text-sm text-neutral-600">
                Caption for illustration 3
              </figcaption>
            </figure>

            {/* Illustration 4 */}
            <figure className="text-center">
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-neutral-100">
                <span className="text-neutral-400">Illustration 4</span>
              </div>
              <figcaption className="text-sm text-neutral-600">
                Caption for illustration 4
              </figcaption>
            </figure>

            {/* Illustration 5 */}
            <figure className="text-center">
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-neutral-100">
                <span className="text-neutral-400">Illustration 5</span>
              </div>
              <figcaption className="text-sm text-neutral-600">
                Caption for illustration 5
              </figcaption>
            </figure>
          </div>
        </div>
        {/* </FadeIn> */}
      </Container>
    </div>
  )
}
