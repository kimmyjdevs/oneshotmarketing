export const PRICING = {
  base: 997,
  addons: {
    domain: {
      id: 'domain',
      label: 'Domain Registration',
      price: 75,
      description:
        'We register your domain and handle DNS, security, and maintenance for two years.',
    },
    gmbSetup: {
      id: 'gmbSetup',
      label: 'Google My Business — Setup Only',
      price: 150,
      description: 'We claim and establish your Google My Business listing.',
    },
    gmbFull: {
      id: 'gmbFull',
      label: 'Google My Business — Full Build',
      price: 450,
      description:
        'Fully set up, customised, and populated: copy, categories, photos, business details.',
    },
    socialAudit: {
      id: 'socialAudit',
      label: 'Social Media Audit',
      price: 250,
      description:
        'We audit your current social presence and deliver actionable recommendations.',
    },
  },
} as const

export type AddonId = keyof typeof PRICING.addons

export const CASE_STUDIES = [
  {
    id: 'ryan',
    client: 'Ryan',
    businessName: 'That Ginja Photographer',
    url: 'https://thatginjaphotographer.com.au',
    category: 'Photography',
    challenge:
      'Strong social following, zero Google presence. Losing potential clients to discoverability.',
    solution:
      "Minimal, elegant portfolio site. Clean gallery, professional SEO copywriting. Ryan had his photos ready and knew exactly what he wanted — we translated his vision into a website he owns.",
    resultStat: '36 hours',
    resultDetail:
      'Client inquiries landing within days of launch. Google and AI search can now find him.',
    quote:
      "Ryan had everything ready. Strong work, clear vision. We moved fast and got out of the way.",
  },
  {
    id: 'noah',
    client: 'Noah',
    businessName: 'IM WITH 88',
    url: 'https://imwith88.com.au',
    category: 'Events / Nightlife',
    challenge:
      'Underground hip-hop event brand needing to sell tickets fast. No time for a months-long build.',
    solution:
      'Sleek, dark event site with integrated YourKind ticketing. Copy focused on the vibe and driving ticket sales.',
    resultStat: 'Live in days',
    resultDetail:
      'Tickets selling from a real website instead of buried social posts.',
    quote:
      "Noah sent assets and direction. We executed, tested, deployed. No back-and-forth, no scope creep.",
  },
] as const

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Click the button',
    desc: '"Give Me My Website in a Week." One action. Start the clock.',
  },
  {
    step: 2,
    title: 'Answer three quick questions',
    desc: "Make sure we're the right fit — takes sixty seconds.",
  },
  {
    step: 3,
    title: 'See exactly what you get',
    desc: 'Plus optional add-ons. No hidden extras, no fine print surprises.',
  },
  {
    step: 4,
    title: 'Pay securely via Stripe',
    desc: '997 AUD. All in. No retainer, no ongoing commitment.',
  },
  {
    step: 5,
    title: 'Fill in your onboarding form',
    desc: 'Content, brand direction, photos. We ask exactly what we need and nothing more.',
  },
  {
    step: 6,
    title: 'We build. You review.',
    desc: 'Two revisions included. We move fast. You stay in control.',
  },
  {
    step: 7,
    title: 'Your website goes live',
    desc: 'Launch-ready within seven days of payment. Yours to own, yours to edit.',
  },
] as const

export const FAQ_ITEMS = [
  {
    q: "What if I don't have a logo?",
    a: "We'll set your business name in a bold title font until you provide one. No problem.",
  },
  {
    q: 'Can I make edits myself after launch?',
    a: 'Yes. Every build includes a custom admin panel where you can update text, photos, services, and contact details anytime.',
  },
  {
    q: 'What if I need more revisions?',
    a: 'Two revisions are included. Small word changes are always fine. Bigger changes beyond two rounds are a quick conversation and may incur a fee.',
  },
  {
    q: 'What about booking systems or integrations?',
    a: "That's custom work and may not fit the one-week timeline. Tell us in the qualifying form and we'll talk it through.",
  },
  {
    q: "What if I'm slow getting back to you with revisions?",
    a: "Your site will be built and launch-ready within seven days. Revision turnaround after that is in your hands — we'll be ready when you are.",
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Not for this product. 997 AUD upfront, website in a week.',
  },
] as const

export const INCLUSIONS = [
  'Up to five pages: homepage, services, about, contact, plus your choice of gallery or blog',
  'Professional SEO-optimised copywriting — written for you, or your existing copy reworked',
  'Contact form wired directly to your inbox, with a backup capture on our end',
  'Custom admin panel so you can edit content, photos, and details yourself',
  'Netlify hosting: secure, fast, and reliable',
  'Two revisions included',
  'Launch-ready within seven days of payment',
] as const

export const STYLE_OPTIONS = [
  {
    id: 'minimal-portfolio',
    label: 'Minimal Portfolio',
    desc: 'Clean, image-led. Let the work speak.',
  },
  {
    id: 'event-landing',
    label: 'Event / Nightlife',
    desc: 'Dark, bold, energetic. Built for hype.',
  },
  {
    id: 'service-business',
    label: 'Service Business',
    desc: 'Professional, trustworthy. Built to convert.',
  },
  {
    id: 'creative-studio',
    label: 'Creative Studio',
    desc: 'Bold, modern. Unapologetically different.',
  },
  {
    id: 'local-business',
    label: 'Local Business',
    desc: 'Warm, approachable. Community-first.',
  },
] as const
