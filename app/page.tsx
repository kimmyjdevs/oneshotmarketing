import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/homepage/hero'
import { Problem } from '@/components/homepage/problem'
import { Solution } from '@/components/homepage/solution'
import { CaseStudies } from '@/components/homepage/case-studies'
import { HowItWorks } from '@/components/homepage/how-it-works'
import { FAQ } from '@/components/homepage/faq'
import { FooterCTA } from '@/components/homepage/footer-cta'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <CaseStudies />
        <HowItWorks />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  )
}
