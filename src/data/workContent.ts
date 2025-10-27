import illustration1 from '@/images/illustrations/illustration1.png'
import illustration2 from '@/images/illustrations/illustration2.png'
import illustration5 from '@/images/illustrations/illustration5.png'

export const workSections = [
  {
    id: 'vesen',
    title: 'VESEN',
    image: { src: illustration1, alt: 'VESEN platform illustration' },
    content: {
      description:
        'A new platform for entertainment, mixing gaming with rich media experiences into true agentic omni experiences. VESEN reimagines how users interact with content, blending immersive gameplay, dynamic storytelling, and AI-driven personalization into a seamless experience.',
      buttons: [
        {
          text: 'Explore platform',
          href: '/contact',
          variant: 'primary' as const,
        },
        {
          text: 'See demo',
          href: '/contact',
          variant: 'secondary' as const,
        },
      ],
      metrics: [
        { value: 'Active', label: 'Status' },
        { value: '2025', label: 'Launch' },
        { value: 'Omni', label: 'Experience' },
      ],
    },
  },
  {
    id: 'publo',
    title: 'Publo',
    image: { src: illustration2, alt: 'Publo platform illustration' },
    content: {
      description:
        'Set to revolutionize publishing houses with AI-driven content creation and distribution workflows. Publo empowers publishers to scale their content operations, maintain quality, and reach audiences across multiple channels with intelligent automation.',
      buttons: [
        {
          text: 'Learn more',
          href: '/contact',
          variant: 'primary' as const,
        },
        {
          text: 'Request access',
          href: '/contact',
          variant: 'secondary' as const,
        },
      ],
      metrics: [
        { value: 'Active', label: 'Status' },
        { value: '10x', label: 'Speed increase' },
        { value: 'AI-first', label: 'Workflow' },
      ],
    },
  },
  {
    id: 'canary',
    title: 'Canary',
    image: { src: illustration5, alt: 'Canary platform illustration' },
    content: {
      description:
        'Agentic management consulting for companies strongly adapted for AI-first business transformation. Canary provides strategic guidance and hands-on implementation support to help organizations embrace AI-driven operating models and unlock exponential growth.',
      buttons: [
        {
          text: 'Book consultation',
          href: '/contact',
          variant: 'primary' as const,
        },
        {
          text: 'View framework',
          href: '/contact',
          variant: 'secondary' as const,
        },
      ],
      metrics: [
        { value: 'Active', label: 'Status' },
        { value: 'Agentic', label: 'Approach' },
        { value: 'AI-first', label: 'Transformation' },
      ],
    },
  },
]

export const pageIntro = {
  eyebrow: 'Services',
  title: 'A palette of possibilities',
  description:
    'We help you with a range of solutions tailored to your needs. Whether it is creative automation of specialized visual artifacts, or multi-agent frameworks that serve multiple business areas in your company. Below you can see a selection of solutions we have implemented for our customers.',
}

export const caseStudiesIntro = {
  title: 'Projects',
  description:
    'Examples of how we have implemented automation solutions across different domains - from design automation to intelligent workflow systems and advanced AI agents.',
}

export const testimonial = {
  text: "AIAKAKI has transformed how we work. From design automation with AIAKAKI to intelligent workflows with N8N and AI agents - we have saved countless hours and achieved a consistency we didn't think was possible.",
  client: {
    name: 'Satisfied customer',
    logo: 'logoPhobia', // Reference to logo import
  },
}

export const clientsSection = {
  title: 'You are in good company',
  clients: [
    ['Telenor', 'logoPhobia'],
    ['AIAKAKI', 'logoFamilyFund'],
    ['Merkle', 'logoUnseal'],
    ['AI Solutions', 'logoMailSmirk'],
    ['Tech Brands', 'logoHomeWork'],
    ['Enterprise', 'logoGreenLife'],
    ['Startups', 'logoBrightPath'],
    ['Agencies', 'logoNorthAdventures'],
  ],
}
