'use client'

import { useState } from 'react'
import { SERVICE_NAMES } from '@/lib/services'
import { cn } from '@/lib/utils'

interface EnquiryFormProps {
  defaultService?: string
}

export function EnquiryForm({ defaultService }: EnquiryFormProps) {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: defaultService ?? '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function set(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/services-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Email us directly at hello@oneshotmarketing.com.au')
      }
    } catch {
      setError('Something went wrong. Email us directly at hello@oneshotmarketing.com.au')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <span className="font-mono text-[11px] text-accent tracking-widest uppercase block">
          Received
        </span>
        <h3 className="font-display text-heading text-2xl font-semibold">
          Got it. We'll be in touch within one business day.
        </h3>
        <p className="text-muted text-[15px]">
          Watch for an email from hello@oneshotmarketing.com.au.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" required>
          <Input
            value={form.name}
            onChange={(v) => set('name', v)}
            placeholder="Kim"
            required
            autoComplete="given-name"
          />
        </Field>
        <Field label="Business name">
          <Input
            value={form.business}
            onChange={(v) => set('business', v)}
            placeholder="Acme Co."
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email address" required>
          <Input
            type="email"
            value={form.email}
            onChange={(v) => set('email', v)}
            placeholder="you@yourbusiness.com"
            required
            autoComplete="email"
          />
        </Field>
        <Field label="Phone" hint="optional">
          <Input
            type="tel"
            value={form.phone}
            onChange={(v) => set('phone', v)}
            placeholder="+61 400 000 000"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Which service are you interested in?">
        <div className="relative">
          <select
            value={form.service}
            onChange={(e) => set('service', e.target.value)}
            aria-label="Select a service"
            className="w-full bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] appearance-none focus:outline-none focus:border-accent transition-colors pr-10"
          >
            <option value="" className="bg-bg">
              — Select a service —
            </option>
            {SERVICE_NAMES.map((name) => (
              <option key={name} value={name} className="bg-bg">
                {name}
              </option>
            ))}
            <option value="Not sure yet" className="bg-bg">
              Not sure yet — let's talk
            </option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-accent pointer-events-none text-[10px]">
            ▾
          </span>
        </div>
      </Field>

      <Field label="Tell us what you're after" required>
        <textarea
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Where you're at, where you're trying to go, and what's getting in the way..."
          rows={5}
          required
          className="w-full bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] resize-none focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30"
        />
      </Field>

      {error && <p className="text-red-400 text-[13px]">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-accent text-bg font-medium text-[15px] rounded-[2px] hover:bg-[#5da07f] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Start a Conversation →'}
      </button>

      <p className="text-muted/40 text-[12px] text-center">
        We respond within one business day. No pitch decks, no pressure.
      </p>
    </form>
  )
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
        {hint && (
          <span className="text-muted/40 ml-2 normal-case tracking-normal font-body text-[11px]">
            ({hint})
          </span>
        )}
      </label>
      {children}
    </div>
  )
}

function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  autoComplete,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className="w-full bg-accent/5 border border-teal text-heading text-[14px] p-3 rounded-[2px] focus:outline-none focus:border-accent transition-colors placeholder:text-muted/30"
    />
  )
}
