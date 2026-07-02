import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export const STRIPE_LINE_ITEMS = {
  base: {
    price_data: {
      currency: 'aud',
      product_data: {
        name: 'Website in a Week — One Shot Marketing',
        description:
          'Up to 5 pages, SEO copywriting, contact form, admin panel, Netlify hosting, 2 revisions. Launch-ready in 7 days.',
      },
      unit_amount: 99700,
    },
    quantity: 1,
  },
  domain: {
    price_data: {
      currency: 'aud',
      product_data: {
        name: 'Domain Registration (2 years)',
        description: 'DNS setup, security, and maintenance included.',
      },
      unit_amount: 7500,
    },
    quantity: 1,
  },
  gmbSetup: {
    price_data: {
      currency: 'aud',
      product_data: {
        name: 'Google My Business — Setup Only',
        description: 'Claim and establish your GMB listing.',
      },
      unit_amount: 15000,
    },
    quantity: 1,
  },
  gmbFull: {
    price_data: {
      currency: 'aud',
      product_data: {
        name: 'Google My Business — Full Build',
        description:
          'Fully set up, customised, and populated with copy, categories, and photos.',
      },
      unit_amount: 45000,
    },
    quantity: 1,
  },
  socialAudit: {
    price_data: {
      currency: 'aud',
      product_data: {
        name: 'Social Media Audit',
        description:
          'Full audit of your current social presence with actionable recommendations.',
      },
      unit_amount: 25000,
    },
    quantity: 1,
  },
} as const
