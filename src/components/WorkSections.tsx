'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { PresentationCarousel } from '@/components/PresentationCarousel'
import { presentations } from '@/data/presentationData'

interface WorkSection {
  id: string
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  content: {
    description: string
    buttons?: Array<{
      text: string
      href: string
      variant: 'primary' | 'secondary'
      isPresentationTrigger?: boolean
    }>
    metrics?: Array<{
      value: string
      label: string
    }>
  }
}

function Section({
  section,
  onOpenPresentation,
}: {
  section: WorkSection
  onOpenPresentation?: () => void
}) {
  // Color mapping for each solution
  const colors: Record<string, string> = {
    vesen: '#009DFF',
    publo: '#BBFFA8',
    canary: '#FF00EE',
  }
  const sectionColor = colors[section.id] || '#009DFF'

  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...section.image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-mono text-base font-semibold before:text-[#BBFFA8] before:content-['$_'] after:text-[#009DFF] after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              <span className="font-mono text-[#FF00EE]">{'const '}</span>
              <span style={{ color: sectionColor }}>{section.title}</span>
              <span className="font-mono text-neutral-400">{' = {'}</span>
            </h2>
            <div className="mt-6">
              <p className="font-mono text-base leading-relaxed text-neutral-400">
                {section.content.description}
              </p>

              {section.content.buttons && (
                <div className="mt-8 flex gap-4">
                  {section.content.buttons.map((button, index) => {
                    // If this button should trigger a presentation and we have one
                    if (
                      button.isPresentationTrigger &&
                      presentations[section.id]
                    ) {
                      return (
                        <button
                          key={index}
                          onClick={onOpenPresentation}
                          className="inline-flex items-center justify-center rounded-lg bg-neutral-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                        >
                          {button.text}
                        </button>
                      )
                    }
                    // Regular button
                    return (
                      <Button
                        key={index}
                        href={button.href}
                        className="flex-none"
                        invert={button.variant === 'secondary'}
                      >
                        {button.text}
                      </Button>
                    )
                  })}
                </div>
              )}

              {section.content.metrics && (
                <div
                  className="mt-6 grid grid-cols-3 gap-4 rounded-lg border bg-neutral-900/50 p-6"
                  style={{ borderColor: `${sectionColor}40` }}
                >
                  {section.content.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="font-mono text-xl font-bold"
                        style={{ color: sectionColor }}
                      >
                        {metric.value}
                      </div>
                      <div className="mt-1 font-mono text-xs text-neutral-500">
                        <span className="text-neutral-600">{'// '}</span>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 font-mono text-neutral-400">{'};'}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

export function WorkSections({ sections }: { sections: WorkSection[] }) {
  const [activePresentationId, setActivePresentationId] = useState<
    string | null
  >(null)

  const activePresentation = activePresentationId
    ? presentations[activePresentationId]
    : null

  return (
    <>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            onOpenPresentation={
              presentations[section.id]
                ? () => setActivePresentationId(section.id)
                : undefined
            }
          />
        ))}
      </div>

      {activePresentation && (
        <PresentationCarousel
          slides={activePresentation}
          isOpen={!!activePresentationId}
          onClose={() => setActivePresentationId(null)}
        />
      )}
    </>
  )
}
