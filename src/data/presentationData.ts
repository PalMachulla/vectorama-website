import illustration1 from '@/images/illustrations/illustration1.png'
import illustration2 from '@/images/illustrations/illustration2.png'
import illustration5 from '@/images/illustrations/illustration5.png'
import illustrationfanout from '@/images/illustrations/fanout.png'

export type SlideType = 'cover' | 'statement' | 'bulletList' | 'closing'

export interface Slide {
  id: string
  type: SlideType
  content: {
    title?: string
    subtitle?: string
    statement?: string
    author?: string
    bullets?: Array<{ title: string; description: string }>
    closingTitle?: string
    closingSubtitle?: string
    cta?: { text: string; href: string }
  }
  image?: any
  backgroundColor?: string
}

export const geoKiSearchPresentation: Slide[] = [
  {
    id: 'cover',
    type: 'cover',
    content: {
      title: 'GEO and AI Search',
      subtitle: 'How AI agents impact your visibility',
    },
    image: illustrationfanout,
    backgroundColor: 'bg-gradient-to-br from-neutral-900 to-neutral-950',
  },
  {
    id: 'statement',
    type: 'statement',
    content: {
      statement:
        'ChatGPT fans out hundreds of searches to answer simple dialogue. How does it affect your traffic?',
      author: 'AIAKAKI',
    },
    image: illustration1,
    backgroundColor: 'bg-neutral-100',
  },
  {
    id: 'key-points',
    type: 'bulletList',
    content: {
      title: 'Our Solutions',
      bullets: [
        {
          title: 'AI Search Optimization',
          description:
            'Optimize your content to be visible when AI agents search for relevant services.',
        },
        {
          title: 'Robot Traffic Filtering',
          description:
            'Filter out unwanted robot traffic while retaining valuable AI search traffic.',
        },
        {
          title: 'Strategic Positioning',
          description:
            'Get discovered when users talk to Claude, ChatGPT or other AI assistants about your product.',
        },
        {
          title: 'Analysis and Reporting',
          description:
            'Get insights into how AI agents interact with your content and how it affects conversions.',
        },
      ],
    },
    image: illustration2,
    backgroundColor: 'bg-white',
  },
  {
    id: 'closing',
    type: 'closing',
    content: {
      closingTitle: 'Ready to take the next step?',
      closingSubtitle:
        'Let us help you be visible in the new AI-driven search world.',
      cta: {
        text: 'Contact us',
        href: '/contact',
      },
    },
    image: illustration5,
    backgroundColor: 'bg-gradient-to-br from-neutral-50 to-neutral-100',
  },
]

// You can add more presentations for other sections
export const presentations: Record<string, Slide[]> = {
  'geo-ki-search': geoKiSearchPresentation,
  // Add more presentations here as needed
  // vectorama: vectoramaPresentation,
  // panorama: panoramaPresentation,
}
