export interface PortfolioSite {
  id: string
  name: string
  url: string
  tagline: string
  category: string
  deliverable: string
  screenshot: string
  /** CSS translateY value for the resting (non-hovered) position, e.g. '-35%' to skip a large hero */
  yOffset?: string
}

export const PORTFOLIO: PortfolioSite[] = [
  {
    id: 'suttonsparkys',
    name: "Sutton's Parkys",
    url: 'https://www.suttonsparkys.com.au/',
    tagline: 'A local venue with a proper online presence.',
    category: 'Hospitality',
    deliverable: 'Websites in a Week',
    screenshot: 'https://image.thum.io/get/fullpage/https://www.suttonsparkys.com.au/',
  },
  {
    id: 'thatginjaphotographer',
    name: 'That Ginja Photographer',
    url: 'https://thatginjaphotographer.com.au/',
    tagline: 'Portfolio built to book — photography that speaks for itself.',
    category: 'Photography',
    deliverable: 'Websites in a Week',
    screenshot: 'https://image.thum.io/get/fullpage/https://thatginjaphotographer.com.au/',
  },
  {
    id: 'imwith88',
    name: "I'm With 88",
    url: 'https://imwith88.com/',
    tagline: 'A cause that needed a front door.',
    category: 'Advocacy',
    deliverable: 'Websites in a Week',
    screenshot: 'https://image.thum.io/get/fullpage/https://imwith88.com/',
  },
  {
    id: 'thepurplearrow',
    name: 'The Purple Arrow',
    url: 'https://thepurplearrow.com.au/',
    tagline: 'Professional presence, done in a week.',
    category: 'Professional Services',
    deliverable: 'Websites in a Week',
    screenshot: 'https://image.thum.io/get/fullpage/https://thepurplearrow.com.au/',
    yOffset: '-35%',
  },
  {
    id: 'rewiredelectrical',
    name: 'Rewired Electrical',
    url: 'https://rewiredelectrical.com.au/',
    tagline: 'Trade website that works as hard as the crew behind it.',
    category: 'Trades',
    deliverable: 'Websites in a Week',
    screenshot: 'https://image.thum.io/get/fullpage/https://rewiredelectrical.com.au/',
  },
]
