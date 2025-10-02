import illustrationfanout from '@/images/illustrations/fanout.png'
import illustration3 from '@/images/illustrations/illustration3.png'
import illustrationtopology from '@/images/illustrations/topology.png'

export const workSections = [
  {
    id: 'geo-ki-search',
    title: 'GEO og KI-søk',
    image: { src: illustrationfanout, alt: 'GEO og KI-søk illustrasjon' },
    content: {
      description:
        'ChatGPT vifter ut hundrevis av søk for så svare opp enkel dialog. Hvordan påvirker det trafikken din? Eller, hvordan blir du søkt opp dersom en bruker snakker med Claude om noe som angår ditt produkt eller dine tjenester? Vi har ekspertisen som kan hjelpe deg til å være synlig, uten at du drukner i robot-trafikk på sidene dine.',
      buttons: [
        {
          text: 'Last ned dokumentasjon',
          href: '/contact',
          variant: 'primary' as const,
        },
        {
          text: 'Ta kontakt for mer informasjon',
          href: '/contact',
          variant: 'secondary' as const,
        },
      ],
    },
  },
  {
    id: 'vectorama',
    title: 'Vectorama - AI-drevet Vektorisering',
    image: { src: illustration3, alt: 'Vectorama illustrasjon' },
    content: {
      description:
        'Transformerer rasterbilder til perfekte vektorgrafier ved hjelp av avansert AI. Generer skalerbare designelementer som bevarer merkevareidentitet på tvers av alle plattformer.',
      metrics: [
        { value: '90%', label: 'Tidsbesparelse' },
        { value: '10K+', label: 'Assets generert' },
        { value: '100%', label: 'Kvalitet' },
      ],
    },
  },
  {
    id: 'panorama',
    title: 'Panorama - Topologigenerert visualisering',
    image: { src: illustrationtopology, alt: 'panorama illustrasjon' },
    content: {
      description:
        'Implementerer kraftige automatiseringsworkflows med N8N som kobler sammen alle dine verktøy og tjenester. Fra enkel datasynkronisering til komplekse forretningsprosesser.',
      metrics: [
        { value: '85%', label: 'Tidsbesparelse' },
        { value: '150+', label: 'Workflows' },
        { value: '50+', label: 'Integrasjoner' },
      ],
    },
  },
]

export const pageIntro = {
  eyebrow: 'Tjenester',
  title: 'En pallett av muligheter',
  description:
    'Vi hjelper deg med en rekke løsninger som er tilpasest dine behov. Det være seg kreativ automasjon av spesialiserte visuelle artefakter, eller multi-agentiske rammeverk som tjener flere forretningsområder i din bedrift. Nedenfor ser du et knippe løsninger som vi har implementert for våre kunder.',
}

export const caseStudiesIntro = {
  title: 'Prosjekter',
  description:
    'Eksempler på hvordan vi har implementert automatiseringsløsninger på tvers av ulike domener - fra designautomatisering til intelligente workflow-systemer og avanserte AI-agenter.',
}

export const testimonial = {
  text: 'Automateket har transformert hvordan vi jobber. Fra designautomatisering med Vectorama til intelligente workflows med N8N og AI-agenter - vi har spart utallige timer og oppnådd en konsistens vi ikke trodde var mulig.',
  client: {
    name: 'Fornøyd kunde',
    logo: 'logoPhobia', // Reference to logo import
  },
}

export const clientsSection = {
  title: 'Du er i godt selskap',
  clients: [
    ['Telenor', 'logoPhobia'],
    ['Dentsu', 'logoFamilyFund'],
    ['Merkle', 'logoUnseal'],
    ['AI Solutions', 'logoMailSmirk'],
    ['Tech Brands', 'logoHomeWork'],
    ['Enterprise', 'logoGreenLife'],
    ['Startups', 'logoBrightPath'],
    ['Agencies', 'logoNorthAdventures'],
  ],
}
