import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Websites in a Week | One Shot Marketing — Brisbane',
  description:
    'Your business needs its own front door. Not borrowed land on social media. We build real websites in a week — 997 AUD, all-inclusive. Brisbane-based, Australia-wide.',
  keywords: [
    'website in a week',
    'fast website build Australia',
    'small business website Brisbane',
    'affordable website Gold Coast',
    'website designer Brisbane',
    'One Shot Marketing',
  ],
  openGraph: {
    title: 'Websites in a Week | One Shot Marketing',
    description:
      'Stop relying on social media. Get a real website built in seven days. 997 AUD, all in.',
    url: 'https://oneshotmarketing.com.au',
    siteName: 'One Shot Marketing',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/banner-dark.png', width: 3780, height: 1890 }],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://oneshotmarketing.com.au'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  )
}
