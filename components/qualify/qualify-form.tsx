'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Step = 1 | 2 | 3
type ScopeAnswer = 'up-to-five' | 'more-than-five'
type Integration =
  | 'booking'
  | 'crm'
  | 'payment'
  | 'api'
  | 'video'
  | 'none'

interface Answers {
  budget: boolean | null
  scope: ScopeAnswer | null
  integrations: Integration[]
}

type NonQualifyReason = 'budget' | 'scope' | 'complexity'

export function QualifyForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [answers, setAnswers] = useState<Answers>({
    budget: null,
    scope: null,
    integrations: [],
  })
  const [showInterstitial, setShowInterstitial] = useState(false)
  const [nonQualifyReason, setNonQualifyReason] = useState<NonQualifyReason | null>(null)

  function goNonQualify(reason: NonQualifyReason) {
    setNonQualifyReason(reason)
    sessionStorage.setItem('osm_qualify_answers', JSON.stringify({ ...answers, reason }))
  }

  function goSuccess() {
    sessionStorage.setItem('osm_qualify_answers', JSON.stringify(answers))
    router.push('/qualify/success')
  }

  // Non-qualify screen
  if (nonQualifyReason) {
    return <NonQualifyPanel reason={nonQualifyReason} answers={answers} />
  }

  // Interstitial for complex integrations
  if (showInterstitial) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="font-mono text-[11px] tracking-widest uppercase text-accent">One moment</p>
        <h2 className="font-display text-heading text-2xl font-semibold leading-snug">
          These features add complexity.
        </h2>
        <p className="text-muted text-[15px] leading-relaxed">
          The integrations you selected may not fit the one-week timeline and would be quoted
          separately. You have two options:
        </p>
        <div className="flex flex-col gap-3 pt-2">
          <Button
            variant="outline"
            className="w-full py-4"
            onClick={() => goNonQualify('complexity')}
          >
            I'd like to discuss this first →
          </Button>
          <Button
            variant="primary"
            className="w-full py-4"
            onClick={goSuccess}
          >
            Skip those for now — build me the straightforward site
          </Button>
        </div>
        <p className="text-muted/50 text-[12px]">
          If you proceed, we'll note your integration interest for a follow-up conversation after launch.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto space-y-10">
      <Progress value={step} max={3} />

      {step === 1 && (
        <StepBudget
          onYes={() => { setAnswers((a) => ({ ...a, budget: true })); setStep(2) }}
          onNo={() => { setAnswers((a) => ({ ...a, budget: false })); goNonQualify('budget') }}
        />
      )}

      {step === 2 && (
        <StepScope
          onUpToFive={() => { setAnswers((a) => ({ ...a, scope: 'up-to-five' })); setStep(3) }}
          onMoreThanFive={() => { setAnswers((a) => ({ ...a, scope: 'more-than-five' })); goNonQualify('scope') }}
        />
      )}

      {step === 3 && (
        <StepIntegrations
          selected={answers.integrations}
          onChange={(integrations) => setAnswers((a) => ({ ...a, integrations }))}
          onContinue={() => {
            const hasIntegrations = answers.integrations.length > 0 && !answers.integrations.includes('none')
            if (hasIntegrations) {
              setShowInterstitial(true)
            } else {
              goSuccess()
            }
          }}
        />
      )}
    </div>
  )
}

function StepBudget({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">Step 1 of 3</p>
        <h2 className="font-display text-heading text-2xl md:text-3xl font-semibold leading-snug">
          Our website builds start at{' '}
          <span className="text-accent">997 AUD, all-inclusive.</span>
          <br />Does this fit your budget?
        </h2>
        <p className="text-muted text-[14px] mt-3">
          No payment now — just making sure we're the right fit.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ChoiceCard label="Yes" onClick={onYes} />
        <ChoiceCard label="No" onClick={onNo} />
      </div>
    </div>
  )
}

function StepScope({
  onUpToFive,
  onMoreThanFive,
}: {
  onUpToFive: () => void
  onMoreThanFive: () => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">Step 2 of 3</p>
        <h2 className="font-display text-heading text-2xl md:text-3xl font-semibold leading-snug">
          How many pages do you need?
        </h2>
        <p className="text-muted text-[14px] mt-3 leading-relaxed">
          Our one-week build covers up to five pages: homepage, services, about, contact, plus
          your choice of a gallery or blog.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ChoiceCard
          label="Up to five pages — that's all I need"
          onClick={onUpToFive}
          className="text-left px-6 py-5 h-auto"
        />
        <ChoiceCard
          label="More than five pages"
          onClick={onMoreThanFive}
          className="text-left px-6 py-5 h-auto"
        />
      </div>
    </div>
  )
}

const INTEGRATIONS: { id: Integration; label: string }[] = [
  { id: 'booking', label: 'Booking system or calendar integration' },
  { id: 'crm', label: 'CRM or email automation connection' },
  { id: 'payment', label: 'Payment processing (beyond a contact form)' },
  { id: 'api', label: 'Custom API integrations' },
  { id: 'video', label: 'Video hosting or streaming' },
  { id: 'none', label: 'None of the above — just a clean website with a contact form' },
]

function StepIntegrations({
  selected,
  onChange,
  onContinue,
}: {
  selected: Integration[]
  onChange: (v: Integration[]) => void
  onContinue: () => void
}) {
  function toggle(id: Integration) {
    if (id === 'none') {
      onChange(['none'])
      return
    }
    const without = selected.filter((s) => s !== 'none')
    if (without.includes(id)) {
      onChange(without.filter((s) => s !== id))
    } else {
      onChange([...without, id])
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">Step 3 of 3</p>
        <h2 className="font-display text-heading text-2xl md:text-3xl font-semibold leading-snug">
          Do you need any of the following built into your site?
        </h2>
        <p className="text-muted text-[14px] mt-3">Select all that apply.</p>
      </div>

      <div className="space-y-2">
        {INTEGRATIONS.map(({ id, label }) => {
          const checked = selected.includes(id)
          return (
            <button
              key={id}
              onClick={() => toggle(id)}
              className={cn(
                'w-full flex items-center gap-4 p-4 border rounded-[2px] text-left transition-all',
                checked
                  ? 'border-accent bg-accent/10 text-heading'
                  : 'border-teal text-muted hover:border-accent/60 hover:text-heading'
              )}
              aria-pressed={checked}
            >
              <span className={cn(
                'w-4 h-4 shrink-0 border rounded-[2px] flex items-center justify-center transition-colors',
                checked ? 'bg-accent border-accent' : 'border-teal'
              )}>
                {checked && <span className="text-bg text-[10px] leading-none font-bold">✓</span>}
              </span>
              <span className="text-[14px] leading-relaxed">{label}</span>
            </button>
          )
        })}
      </div>

      <Button
        variant="primary"
        className="w-full py-4 text-base"
        onClick={onContinue}
        disabled={selected.length === 0}
      >
        Continue →
      </Button>
    </div>
  )
}

function ChoiceCard({
  label,
  onClick,
  className,
}: {
  label: string
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'border border-teal text-heading font-display text-xl font-semibold h-24 flex items-center justify-center rounded-[2px] hover:border-accent hover:bg-accent/10 transition-all',
        className
      )}
    >
      {label}
    </button>
  )
}

function NonQualifyPanel({
  reason,
  answers,
}: {
  reason: NonQualifyReason
  answers: Answers
}) {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const messages: Record<NonQualifyReason, { heading: string; body: string }> = {
    budget: {
      heading: "We'd Still Love to Help",
      body: "997 AUD isn't the right fit right now — and that's completely okay. It doesn't mean we can't help. It might mean what you need deserves a proper conversation.",
    },
    scope: {
      heading: "Sounds Like a Bigger Build",
      body: "More than five pages isn't necessarily complicated — it might just be duplicating a template for each team member or location. We'd love to scope it properly before giving you a number.",
    },
    complexity: {
      heading: "Let's Scope This Properly",
      body: "Integrations add complexity and deserve a real conversation rather than a rushed quote. We'd love to understand exactly what you need before we commit to a timeline.",
    },
  }

  const msg = messages[reason]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const reasonLabel = { budget: 'Budget', scope: 'Scope — More than 5 pages', complexity: 'Complexity — Integrations needed' }[reason]
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, reason: reasonLabel, answers }),
    })
    setSubmitted(true)
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-6 py-12">
        <span className="font-mono text-[11px] text-accent tracking-widest uppercase">Received</span>
        <h2 className="font-display text-heading text-2xl font-semibold">We'll be in touch soon.</h2>
        <p className="text-muted text-[15px] leading-relaxed">
          We'll reach out to hello@oneshotmarketing.com.au within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div>
        <h2 className="font-display text-heading text-2xl md:text-3xl font-semibold leading-snug mb-4">
          {msg.heading}
        </h2>
        <p className="text-muted text-[15px] leading-relaxed">{msg.body}</p>
      </div>

      <div>
        <p className="font-display text-heading text-lg font-semibold mb-4">
          Want to chat with someone about what we could do for you?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setConsent(true)}
            className={cn(
              'py-4 border rounded-[2px] font-display text-lg font-semibold transition-all',
              consent === true
                ? 'border-accent bg-accent/10 text-heading'
                : 'border-teal text-muted hover:border-accent hover:text-heading'
            )}
          >
            Yes
          </button>
          <button
            onClick={() => setConsent(false)}
            className={cn(
              'py-4 border rounded-[2px] font-display text-lg font-semibold transition-all',
              consent === false
                ? 'border-accent bg-accent/10 text-heading'
                : 'border-teal text-muted hover:border-accent hover:text-heading'
            )}
          >
            No
          </button>
        </div>
      </div>

      {consent === true && (
        <form onSubmit={handleSubmit} className="space-y-4 border-t border-teal pt-6">
          <Field label="Your name" id="nq-name" required value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
          <Field label="Email address" id="nq-email" type="email" required value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
          <Field label="Phone" id="nq-phone" type="tel" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nq-msg" className="font-mono text-[10px] tracking-widest uppercase text-muted">What are you after?</label>
            <textarea
              id="nq-msg"
              rows={3}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] resize-none focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30"
              placeholder="Tell us what you're after..."
            />
          </div>
          <Button type="submit" className="w-full py-4 text-base" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send →'}
          </Button>
        </form>
      )}

      {consent === false && (
        <div className="border-t border-teal pt-6">
          <p className="font-display text-heading text-lg italic">No worries at all. We'll be here if that changes.</p>
          <a href="/" className="inline-block mt-4 font-mono text-[11px] text-accent tracking-wider hover:underline">← Back to One Shot Marketing</a>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  id,
  type = 'text',
  required,
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[10px] tracking-widest uppercase text-muted">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30"
      />
    </div>
  )
}
