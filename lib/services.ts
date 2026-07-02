export interface Service {
  id: string
  number: string
  name: string
  hook: string
  description: string
  outputs?: string[]
  price?: number
  priceLabel?: string
  note?: string
  ctaLabel: string
  packagePlaceholder?: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'social-media-audit',
    number: '01',
    name: 'Social Media Audit',
    hook: 'Find out what\'s actually working — and what\'s quietly costing you.',
    description:
      'A full review of your current Instagram, Facebook, and TikTok presence. We assess content, consistency, engagement patterns, and positioning, then deliver a clear report with actionable recommendations you can implement immediately.',
    price: 250,
    priceLabel: '250 AUD — fixed price',
    ctaLabel: 'Book Your Audit',
  },
  {
    id: 'content-creation',
    number: '02',
    name: 'Content Creation',
    hook: 'Content that looks like you hired someone. Because you did.',
    description:
      'We come to you and capture content — photo and video shot on location for your business — or work with content you provide and shape it into platform-ready assets. Built for small businesses who know they need consistent, quality content but don\'t have time to produce it.',
    outputs: [
      'Shoot days',
      'Edited photo sets',
      'Short-form video',
      'Platform-ready asset packs',
    ],
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'social-media-management',
    number: '03',
    name: 'Social Media Management',
    hook: 'Your socials, handled. You do the business, we do the posting.',
    description:
      'Ongoing management of your social channels — content scheduling, posting, community engagement, and monthly reporting. Available as tiered monthly packages scoped to your channels and posting cadence.',
    note: 'Packages tailored to your channels and volume — scoped in our first conversation.',
    packagePlaceholder: true,
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'marketing-strategy',
    number: '04',
    name: 'Marketing Strategy',
    hook: 'Stop guessing. Start compressing decisions.',
    description:
      'A complete marketing strategy built on our decision compression methodology — identifying the one high-leverage move that does five jobs at once, instead of ten scattered tactics doing half a job each. You leave with a documented strategy, priorities, and a rollout plan.',
    outputs: [
      'Documented strategy',
      'Priority action list',
      'Channel recommendations',
      'Rollout plan',
    ],
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'business-planning',
    number: '05',
    name: 'Business Planning & Consulting',
    hook: 'The thinking partner your business plan deserves.',
    description:
      'Business plan creation and ongoing business and marketing consulting for owners who want a strategist in their corner — whether that\'s a formal plan for lenders and stakeholders or regular sessions to pressure-test decisions as you grow.',
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'bespoke-websites',
    number: '06',
    name: 'Bespoke Websites',
    hook: 'When your website needs to do more than exist.',
    description:
      'Custom website builds for businesses that have outgrown the straightforward — complex page architectures, booking systems, CRM and API integrations, e-commerce, custom functionality. Scoped, designed, and built to spec. This is also where you land if Websites in a Week wasn\'t quite the fit.',
    outputs: [
      'Custom architecture',
      'Booking & calendar systems',
      'CRM and API integrations',
      'E-commerce',
      'Custom functionality',
    ],
    ctaLabel: 'Scope Your Build',
  },
  {
    id: 'web-app-development',
    number: '07',
    name: 'Website & App Development',
    hook: 'From landing page to full product.',
    description:
      'Full web application and app development — custom platforms, client portals, internal tools, and products. If you can describe it, we can scope it.',
    outputs: [
      'Web applications',
      'Client portals',
      'Internal tools',
      'Custom products',
    ],
    ctaLabel: 'Scope Your Build',
  },
] as const

export const SERVICE_NAMES = SERVICES.map((s) => s.name)
