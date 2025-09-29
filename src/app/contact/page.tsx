import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Prosjektforespørsler
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Navn" name="name" autoComplete="name" />
          <TextInput
            label="E-post"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Bedrift"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Telefon"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput label="Beskrivelse av prosjekt" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Prosjektomfang
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Pilot / Test" name="budget" value="pilot" />
                <RadioInput
                  label="Mindre merkevare"
                  name="budget"
                  value="small"
                />
                <RadioInput
                  label="Stor merkevare"
                  name="budget"
                  value="large"
                />
                <RadioInput
                  label="Enterprise løsning"
                  name="budget"
                  value="enterprise"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Send forespørsel
        </Button>
      </form>
    </FadeIn>
  )
}

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Thale Håmo',
      role: 'Client Manager',
      email: 'thale.hamo@merkle.com',
      phone: '+47 988 61 118',
      description: '15 år med å seile gjennom komplekse merkevareprosjekter',
    },
    {
      name: 'Benedicte Kjøde',
      role: 'Client Director',
      email: 'benedicte.kjode@dentsu.com',
      phone: '+47 922 22 920',
      description:
        'Leder kunderelasjoner og sikrer suksessfulle prosjektleveranser',
    },
    {
      name: 'Pål Machulla',
      role: 'AI lead / Director of innovation',
      email: 'pal@vectorama.no',
      phone: '+47 123 45 678',
      description: 'Vurderer og bistår med AI-løsninger for klienter',
    },
  ]

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Klar for boarding?
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Ta kontakt med våre navigatører for en skreddersydd reise. Book en
        gratis &ldquo;Kapteinens runde&rdquo; - 30 min demo der vi viser deg
        nøyaktig hvordan vi gjør din merkevare til en velkjørt maskin.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.email}
            className="border-b border-neutral-200 pb-8 last:border-b-0"
          >
            <h3 className="font-display text-lg font-semibold text-neutral-950">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-neutral-600">
              {member.role}
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              {member.description}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                href={`mailto:${member.email}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {member.email}
              </Link>
              <Link
                href={`tel:${member.phone}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {member.phone}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Følg oss
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Kontakt Oss',
  description:
    'Ta kontakt med Vectorama teamet. Vi kan ikke vente på å høre fra deg.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Kontakt oss" title="La oss samarbeide">
        <p>
          Vi kan ikke vente på å høre fra deg. Book en gratis demo eller send
          oss en melding om ditt prosjekt.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <TeamMembers />
        </div>
      </Container>
    </RootLayout>
  )
}
