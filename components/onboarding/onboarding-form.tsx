'use client'

import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { STYLE_OPTIONS } from '@/lib/config'
import { cn } from '@/lib/utils'

const TOTAL_STEPS = 5

type PageChoice = 'gallery' | 'blog'

interface FormData {
  // Step 1
  businessName: string
  isRegistered: boolean | null
  whatYouDo: string
  idealCustomer: string
  email: string
  hasWebsite: boolean | null
  websiteUrl: string
  // Step 2
  hasLogo: boolean | null
  logoFile: File | null
  brandColours: string
  styleChoice: string
  referenceLinks: { url: string; note: string }[]
  // Step 3
  hasContent: boolean | null
  contentLink: string
  photosLink: string
  // Step 4
  homepageFirst: string
  homepageCTA: string
  services: string
  displayPrices: boolean | null
  aboutStory: string
  aboutTeam: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  socialLinks: string
  fifthPage: PageChoice | null
  fifthPageContent: string
  // Step 5
  anything: string
}

const EMPTY: FormData = {
  businessName: '', isRegistered: null, whatYouDo: '', idealCustomer: '',
  email: '', hasWebsite: null, websiteUrl: '',
  hasLogo: null, logoFile: null, brandColours: '', styleChoice: '',
  referenceLinks: [{ url: '', note: '' }, { url: '', note: '' }, { url: '', note: '' }],
  hasContent: null, contentLink: '', photosLink: '',
  homepageFirst: '', homepageCTA: '', services: '', displayPrices: null,
  aboutStory: '', aboutTeam: '', contactEmail: '', contactPhone: '',
  contactAddress: '', socialLinks: '', fifthPage: null, fifthPageContent: '',
  anything: '',
}

export function OnboardingForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }

  async function handleSubmit() {
    setSubmitting(true)
    setError('')
    try {
      const body = { ...data, logoFile: undefined }
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email hello@oneshotmarketing.com.au with your details.')
      }
    } catch {
      setError('Something went wrong. Please email hello@oneshotmarketing.com.au with your details.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 space-y-6">
        <p className="font-mono text-[11px] text-accent tracking-widest uppercase">Submitted</p>
        <h2 className="font-display text-heading text-3xl font-semibold">
          That's everything we need. Your build starts now.
        </h2>
        <p className="text-muted text-[15px] leading-relaxed">
          Watch your inbox for progress updates from hello@oneshotmarketing.com.au.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto space-y-10">
      <Progress value={step} max={TOTAL_STEPS} label="Onboarding form progress" />

      {step === 1 && <Step1 data={data} set={set} onNext={() => setStep(2)} />}
      {step === 2 && <Step2 data={data} set={set} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && <Step3 data={data} set={set} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
      {step === 4 && <Step4 data={data} set={set} onBack={() => setStep(3)} onNext={() => setStep(5)} />}
      {step === 5 && (
        <Step5 data={data} set={set} onBack={() => setStep(4)} onSubmit={handleSubmit} submitting={submitting} error={error} />
      )}
    </div>
  )
}

/* ─── STEP 1: Business Basics ─── */
function Step1({ data, set, onNext }: { data: FormData; set: <K extends keyof FormData>(k: K, v: FormData[K]) => void; onNext: () => void }) {
  return (
    <div className="space-y-6">
      <StepHeader step={1} title="Business Basics" />
      <F label="Business name" required>
        <Input value={data.businessName} onChange={(v) => set('businessName', v)} placeholder="Acme Services" required />
      </F>
      <F label="Is this a registered business name?">
        <Toggle value={data.isRegistered} onChange={(v) => set('isRegistered', v)} />
      </F>
      <F label="What do you do?" desc="2–3 sentences" required>
        <Textarea value={data.whatYouDo} onChange={(v) => set('whatYouDo', v)} placeholder="We provide..." rows={3} />
      </F>
      <F label="Who is your ideal customer?" required>
        <Textarea value={data.idealCustomer} onChange={(v) => set('idealCustomer', v)} placeholder="Our clients are..." rows={2} />
      </F>
      <F label="Email for contact form submissions" required>
        <Input type="email" value={data.email} onChange={(v) => set('email', v)} placeholder="enquiries@yourbusiness.com" required />
      </F>
      <F label="Do you have an existing website?">
        <Toggle value={data.hasWebsite} onChange={(v) => set('hasWebsite', v)} />
        {data.hasWebsite && (
          <Input value={data.websiteUrl} onChange={(v) => set('websiteUrl', v)} placeholder="https://..." className="mt-2" />
        )}
      </F>
      <Button className="w-full py-4 text-base" onClick={onNext}>Next →</Button>
    </div>
  )
}

/* ─── STEP 2: Brand Direction ─── */
function Step2({ data, set, onBack, onNext }: { data: FormData; set: <K extends keyof FormData>(k: K, v: FormData[K]) => void; onBack: () => void; onNext: () => void }) {
  return (
    <div className="space-y-6">
      <StepHeader step={2} title="Brand Direction" />
      <F label="Do you have a logo?">
        <Toggle value={data.hasLogo} onChange={(v) => set('hasLogo', v)} />
        {data.hasLogo === true && (
          <div className="mt-2 border border-teal p-4 rounded-[2px]">
            <label className="font-mono text-[10px] text-muted tracking-wider uppercase block mb-2">
              Upload logo (PNG, JPG, SVG)
            </label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.svg"
              className="text-muted text-[13px] file:mr-3 file:py-1.5 file:px-3 file:border file:border-teal file:rounded-[2px] file:text-accent file:bg-transparent file:text-[12px] file:cursor-pointer"
              onChange={(e) => set('logoFile', e.target.files?.[0] ?? null)}
            />
          </div>
        )}
        {data.hasLogo === false && (
          <p className="text-muted/60 text-[12px] mt-2 leading-relaxed">
            No worries — we'll set your business name in a bold title font until you have one.
          </p>
        )}
      </F>
      <F label="Brand colours" desc="Optional — names or hex codes">
        <Input value={data.brandColours} onChange={(v) => set('brandColours', v)} placeholder="#2A6B55, sage green, navy blue..." />
      </F>
      <F label="Which of these feels like your vibe?" desc="Choose one">
        <div className="grid grid-cols-1 gap-2">
          {STYLE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => set('styleChoice', opt.id)}
              className={cn(
                'flex items-center gap-4 p-4 border rounded-[2px] text-left transition-all',
                data.styleChoice === opt.id
                  ? 'border-accent bg-accent/10'
                  : 'border-teal hover:border-accent/60'
              )}
            >
              <span className={cn(
                'w-4 h-4 shrink-0 rounded-full border transition-colors',
                data.styleChoice === opt.id ? 'bg-accent border-accent' : 'border-teal'
              )} />
              <div>
                <p className={cn('text-[14px] font-medium', data.styleChoice === opt.id ? 'text-heading' : 'text-muted')}>
                  {opt.label}
                </p>
                <p className="text-muted/60 text-[12px]">{opt.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </F>
      <F label="Websites you love" desc="Optional — paste up to 3 links. For each link, tell us what you like about it.">
        {data.referenceLinks.map((ref, i) => (
          <div key={i} className="space-y-2 mb-4">
            <Input
              value={ref.url}
              onChange={(v) => {
                const links = [...data.referenceLinks]
                links[i] = { ...links[i], url: v }
                set('referenceLinks', links)
              }}
              placeholder={`Reference link ${i + 1} (optional)`}
            />
            {ref.url && (
              <Textarea
                value={ref.note}
                onChange={(v) => {
                  const links = [...data.referenceLinks]
                  links[i] = { ...links[i], note: v }
                  set('referenceLinks', links)
                }}
                placeholder="What do you like about this one?"
                rows={2}
                required
              />
            )}
          </div>
        ))}
      </F>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 py-4" onClick={onBack}>← Back</Button>
        <Button className="flex-1 py-4" onClick={onNext}>Next →</Button>
      </div>
    </div>
  )
}

/* ─── STEP 3: Content ─── */
function Step3({ data, set, onBack, onNext }: { data: FormData; set: <K extends keyof FormData>(k: K, v: FormData[K]) => void; onBack: () => void; onNext: () => void }) {
  return (
    <div className="space-y-6">
      <StepHeader step={3} title="Content" />
      <F label="Do you have existing copy?">
        <Toggle value={data.hasContent} onChange={(v) => set('hasContent', v)} />
        {data.hasContent === true && (
          <div className="mt-3 space-y-2">
            <p className="text-muted/70 text-[13px] leading-relaxed">
              Drop everything into a shared folder (Google Drive or Dropbox) and paste the link below.
              We'll rework your copy to meet current SEO principles.
            </p>
            <Input value={data.contentLink} onChange={(v) => set('contentLink', v)} placeholder="https://drive.google.com/..." />
          </div>
        )}
        {data.hasContent === false && (
          <p className="text-muted/60 text-[12px] mt-2 leading-relaxed">
            No problem. We write your copy for you — it's included. Your answers in the next section give us everything we need.
          </p>
        )}
      </F>
      <F label="Photos and imagery" desc="Shared folder link — upload everything you've got. We'll curate the best. Aim for highest-resolution originals.">
        <Input value={data.photosLink} onChange={(v) => set('photosLink', v)} placeholder="https://drive.google.com/..." />
      </F>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 py-4" onClick={onBack}>← Back</Button>
        <Button className="flex-1 py-4" onClick={onNext}>Next →</Button>
      </div>
    </div>
  )
}

/* ─── STEP 4: Page Direction ─── */
function Step4({ data, set, onBack, onNext }: { data: FormData; set: <K extends keyof FormData>(k: K, v: FormData[K]) => void; onBack: () => void; onNext: () => void }) {
  return (
    <div className="space-y-8">
      <StepHeader step={4} title="Page-by-Page Direction" />

      <PageSection title="Homepage">
        <F label="What's the first thing people should know about your business?" required>
          <Textarea value={data.homepageFirst} onChange={(v) => set('homepageFirst', v)} rows={3} placeholder="We're Brisbane's..." />
        </F>
        <F label="What's your main call-to-action?">
          <Input value={data.homepageCTA} onChange={(v) => set('homepageCTA', v)} placeholder="Book a treatment / Request a quote / View my portfolio..." />
        </F>
      </PageSection>

      <PageSection title="Services">
        <F label="List your services or products" desc="One per line">
          <Textarea value={data.services} onChange={(v) => set('services', v)} rows={5} placeholder="Garden maintenance&#10;Lawn mowing&#10;Hedge trimming" />
        </F>
        <F label="Should we display prices?">
          <Toggle value={data.displayPrices} onChange={(v) => set('displayPrices', v)} />
          {data.displayPrices && (
            <p className="text-muted/60 text-[12px] mt-1">Include prices in your services list above.</p>
          )}
        </F>
      </PageSection>

      <PageSection title="About">
        <F label="Tell us your story" desc="How you started, why you do what you do — ~100–200 words" required>
          <Textarea value={data.aboutStory} onChange={(v) => set('aboutStory', v)} rows={5} placeholder="I started this business because..." />
        </F>
        <F label="Team members to feature?" desc="Optional — names and roles">
          <Input value={data.aboutTeam} onChange={(v) => set('aboutTeam', v)} placeholder="Kim — Lead Developer, Alex — Designer..." />
        </F>
      </PageSection>

      <PageSection title="Contact">
        <F label="Confirm enquiry inbox" required>
          <Input type="email" value={data.contactEmail} onChange={(v) => set('contactEmail', v)} placeholder="enquiries@yourbusiness.com" />
        </F>
        <F label="Phone to display?" desc="Optional">
          <Input type="tel" value={data.contactPhone} onChange={(v) => set('contactPhone', v)} placeholder="+61 400 000 000" />
        </F>
        <F label="Business address to display?" desc="Optional">
          <Input value={data.contactAddress} onChange={(v) => set('contactAddress', v)} placeholder="Brisbane QLD 4000" />
        </F>
        <F label="Social media links" desc="Optional — paste all that apply">
          <Textarea value={data.socialLinks} onChange={(v) => set('socialLinks', v)} rows={3} placeholder="Instagram: @yourhandle&#10;Facebook: facebook.com/yourpage&#10;TikTok: @yourhandle" />
        </F>
      </PageSection>

      <PageSection title="Fifth Page — Choose One">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {(['gallery', 'blog'] as PageChoice[]).map((choice) => (
            <button
              key={choice}
              onClick={() => set('fifthPage', choice)}
              className={cn(
                'py-4 border rounded-[2px] font-display text-xl font-semibold capitalize transition-all',
                data.fifthPage === choice
                  ? 'border-accent bg-accent/10 text-heading'
                  : 'border-teal text-muted hover:border-accent hover:text-heading'
              )}
            >
              {choice}
            </button>
          ))}
        </div>
        {data.fifthPage === 'gallery' && (
          <p className="text-muted/70 text-[13px] leading-relaxed">
            Point us to 10–15 images in your shared folder that best showcase your work. We'll curate.
          </p>
        )}
        {data.fifthPage === 'blog' && (
          <F label="Blog posts or topics">
            <Textarea value={data.fifthPageContent} onChange={(v) => set('fifthPageContent', v)} rows={3}
              placeholder="Link or paste any posts you'd like featured, or topics you want us to draft..." />
          </F>
        )}
      </PageSection>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 py-4" onClick={onBack}>← Back</Button>
        <Button className="flex-1 py-4" onClick={onNext}>Next →</Button>
      </div>
    </div>
  )
}

/* ─── STEP 5: Anything Else ─── */
function Step5({
  data, set, onBack, onSubmit, submitting, error,
}: {
  data: FormData
  set: <K extends keyof FormData>(k: K, v: FormData[K]) => void
  onBack: () => void
  onSubmit: () => void
  submitting: boolean
  error: string
}) {
  return (
    <div className="space-y-6">
      <StepHeader step={5} title="Anything Else?" />
      <p className="text-muted text-[15px] leading-relaxed">
        Deadlines, events you're launching around, things you definitely don't want — tell us everything.
      </p>
      <Textarea
        value={data.anything}
        onChange={(v) => set('anything', v)}
        rows={6}
        placeholder="Launch before my event on [date]... I really don't want [X]... A few things worth knowing..."
      />
      {error && <p className="text-red-400 text-[13px]">{error}</p>}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 py-4" onClick={onBack}>← Back</Button>
        <Button className="flex-1 py-4" onClick={onSubmit} disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit →'}
        </Button>
      </div>
    </div>
  )
}

/* ─── Shared sub-components ─── */

function StepHeader({ step, title }: { step: number; title: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-1">Step {step} of {TOTAL_STEPS}</p>
      <h2 className="font-display text-heading text-2xl font-semibold">{title}</h2>
    </div>
  )
}

function PageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-teal p-5 space-y-4">
      <p className="font-mono text-[10px] text-accent tracking-widest uppercase border-b border-teal/50 pb-3">{title}</p>
      {children}
    </div>
  )
}

function F({ label, desc, required, children }: { label: string; desc?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-[10px] tracking-widest uppercase text-muted block">
        {label}{required && <span className="text-accent ml-1">*</span>}
        {desc && <span className="text-muted/40 ml-2 normal-case tracking-normal font-body text-[11px]">— {desc}</span>}
      </label>
      {children}
    </div>
  )
}

function Input({ value, onChange, placeholder, type = 'text', required, className }: {
  value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; required?: boolean; className?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className={cn(
        'w-full bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30',
        className
      )}
    />
  )
}

function Textarea({ value, onChange, placeholder, rows = 3, required }: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number; required?: boolean
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30 resize-none"
    />
  )
}

function Toggle({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="flex gap-3">
      {[true, false].map((opt) => (
        <button
          key={String(opt)}
          onClick={() => onChange(opt)}
          className={cn(
            'px-6 py-2 border rounded-[2px] text-[14px] font-medium transition-all',
            value === opt
              ? 'border-accent bg-accent/10 text-heading'
              : 'border-teal text-muted hover:border-accent/60'
          )}
        >
          {opt ? 'Yes' : 'No'}
        </button>
      ))}
    </div>
  )
}
