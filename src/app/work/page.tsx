import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { StylizedImage } from '@/components/StylizedImage'
import { WorkSections } from '@/components/WorkSections'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import {
  workSections,
  pageIntro,
  caseStudiesIntro,
  testimonial,
  clientsSection,
} from '@/data/workContent'

// Logo mapping for dynamic logo selection
const logoMap = {
  logoPhobia,
  logoFamilyFund,
  logoUnseal,
  logoMailSmirk,
  logoHomeWork,
  logoGreenLife,
  logoBrightPath,
  logoNorthAdventures,
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title={caseStudiesIntro.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{caseStudiesIntro.description}</p>
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

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          {clientsSection.title}
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clientsSection.clients.map(([client, logoKey]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image
                    src={logoMap[logoKey as keyof typeof logoMap]}
                    alt={client}
                    unoptimized
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Tjenester & Cases',
  description:
    'Fra AI-drevet vektorisering (Vectorama) og N8N workflow-automatisering til avanserte AI-agenter med DAG-arkitektur. Se våre automatiseringsløsninger.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro eyebrow={pageIntro.eyebrow} title={pageIntro.title}>
        <p>{pageIntro.description}</p>
      </PageIntro>

      <WorkSections sections={workSections} />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: testimonial.client.name, logo: logoPhobia }}
      >
        {testimonial.text}
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
