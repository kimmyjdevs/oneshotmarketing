import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms | One Shot Marketing',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6 space-y-10">
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">Terms of Service</p>
            <h1 className="font-display text-heading text-3xl font-semibold mb-2">Website in a Week — Terms</h1>
            <p className="text-muted/50 text-[13px]">Last updated: 2025</p>
          </div>

          {[
            {
              title: 'Revisions',
              body: 'Two rounds of revisions are included in the base price. A revision round covers meaningful structural or content changes. Minor copy corrections (typos, small factual updates) are always handled without counting toward your revisions. Further revision rounds beyond two are quoted at our hourly rate.',
            },
            {
              title: 'Timeline Guarantee',
              body: 'We guarantee your website will be launch-ready within seven calendar days of payment, provided the client supplies all required onboarding information within 48 hours of payment. Revision turnaround time is the client\'s responsibility — the seven-day clock covers our build time, not client review time.',
            },
            {
              title: 'Integrations and Additional Pages',
              body: 'The "Website in a Week" product covers up to five pages with a standard contact form. Booking systems, CRM integrations, payment processing, API connections, and additional pages are not included and will be scoped and quoted separately.',
            },
            {
              title: 'Refunds',
              body: 'If we are unable to deliver your website within the agreed timeline due to our error, we will offer a full refund or a discount on the final payment. Refunds are not available once onboarding information has been received and the build has commenced. Refunds are not available where delays are caused by the client failing to supply required assets or feedback.',
            },
            {
              title: 'Content Ownership',
              body: 'All content, copy, and imagery provided by the client remains the property of the client. Original copy written by One Shot Marketing for the client becomes the property of the client upon final payment.',
            },
            {
              title: 'Hosting',
              body: 'Websites are deployed to Netlify hosting. Hosting fees (if applicable) are separate from the build fee and are noted in the add-ons at the time of purchase. One Shot Marketing is not responsible for downtime caused by the hosting provider.',
            },
            {
              title: 'Contact',
              body: 'For any questions about these terms, contact us at hello@oneshotmarketing.com.au.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-teal pt-8">
              <h2 className="font-display text-heading text-xl font-semibold mb-3">{title}</h2>
              <p className="text-muted text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
