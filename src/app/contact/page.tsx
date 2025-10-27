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
        className="peer block w-full border border-neutral-700 bg-transparent px-6 pt-12 pb-4 text-base/6 text-white ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-[#009DFF] focus:ring-[#009DFF]/20 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-[#009DFF] peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#009DFF]"
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
        className="h-6 w-6 flex-none appearance-none rounded-full border border-[#009DFF]/40 outline-hidden checked:border-[0.5rem] checked:border-[#009DFF] focus-visible:ring-2 focus-visible:ring-[#009DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      />
      <span className="text-base/6 text-white">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-white">
          Project Inquiries
        </h2>
        <div className="relative isolate mt-6 -space-y-px rounded-2xl border border-[#009DFF]/40 bg-neutral-900 before:absolute before:-inset-1 before:-translate-x-1 before:-translate-y-1 before:rounded-2xl before:border before:border-[#FF00EE]/30 after:absolute after:-inset-1 after:translate-x-1 after:translate-y-1 after:rounded-2xl after:border after:border-[#BBFFA8]/30">
          <div className="relative z-10">
            <TextInput label="Name" name="name" autoComplete="name" />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
            />
            <TextInput label="Project description" name="message" />
            <div className="border border-neutral-700 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-400">
                  Project scope
                </legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput
                    label="Pilot / Test"
                    name="budget"
                    value="pilot"
                  />
                  <RadioInput label="Small brand" name="budget" value="small" />
                  <RadioInput label="Large brand" name="budget" value="large" />
                  <RadioInput
                    label="Enterprise solution"
                    name="budget"
                    value="enterprise"
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Send inquiry
        </Button>
      </form>
    </FadeIn>
  )
}

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Client Manager',
      email: 'contact@aiakaki.com',
      phone: '+47 123 45 678',
      description:
        '15 years of experience with complex brand projects and design automation',
    },
    {
      name: 'Jordan Smith',
      role: 'Client Director',
      email: 'hello@aiakaki.com',
      phone: '+47 234 56 789',
      description:
        'Leads customer relationships and ensures successful project deliveries',
    },
    {
      name: 'Casey Anderson',
      role: 'AI Lead / Director of Innovation',
      email: 'info@aiakaki.com',
      phone: '+47 345 67 890',
      description: 'Specialist in AI solutions and system automation',
    },
  ]

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-white">
        Get in touch with the team
      </h2>
      <p className="mt-6 text-base text-neutral-400">
        Our experts help you implement AI-driven design automation in your
        organization. Book a free consultation to see how AIAKAKI can transform
        your design processes.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.email}
            className="relative rounded-lg border border-[#009DFF]/30 bg-neutral-900 p-6 before:absolute before:-inset-0.5 before:-translate-x-1 before:-translate-y-1 before:rounded-lg before:border before:border-[#FF00EE]/20 after:absolute after:-inset-0.5 after:translate-x-1 after:translate-y-1 after:rounded-lg after:border after:border-[#BBFFA8]/20"
          >
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#009DFF]">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                {member.description}
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link
                  href={`mailto:${member.email}`}
                  className="text-neutral-400 transition hover:text-[#009DFF]"
                >
                  {member.email}
                </Link>
                <Link
                  href={`tel:${member.phone}`}
                  className="text-neutral-400 transition hover:text-[#009DFF]"
                >
                  {member.phone}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Border className="mt-16 pt-16" invert>
        <h2 className="font-display text-base font-semibold text-white">
          Follow us
        </h2>
        <SocialMedia className="mt-6" invert />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the AIAKAKI team for a free consultation about AI-driven design automation.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact us" title="Let's work together">
        <p>
          Ready to automate design production? Contact our experts for a free
          consultation and see how AIAKAKI can transform your design processes
          with AI technology.
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
