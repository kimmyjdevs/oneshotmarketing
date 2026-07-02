'use client'

import { useState } from 'react'
import { PRICING, type AddonId } from '@/lib/config'
import { cn } from '@/lib/utils'

export function AddonsCalculator() {
  const [domain, setDomain] = useState(false)
  const [gmbOption, setGmbOption] = useState<'none' | 'setup' | 'full'>('none')
  const [socialAudit, setSocialAudit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const addons = PRICING.addons
  let total = PRICING.base
  if (domain) total += addons.domain.price
  if (gmbOption === 'setup') total += addons.gmbSetup.price
  if (gmbOption === 'full') total += addons.gmbFull.price
  if (socialAudit) total += addons.socialAudit.price

  const selectedAddonIds: AddonId[] = [
    ...(domain ? ['domain' as AddonId] : []),
    ...(gmbOption === 'setup' ? ['gmbSetup' as AddonId] : []),
    ...(gmbOption === 'full' ? ['gmbFull' as AddonId] : []),
    ...(socialAudit ? ['socialAudit' as AddonId] : []),
  ]

  async function handleCheckout() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          addons: selectedAddonIds,
          answers: JSON.parse(sessionStorage.getItem('osm_qualify_answers') ?? '{}'),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again or email hello@oneshotmarketing.com.au')
      }
    } catch {
      setError('Something went wrong. Please try again or email hello@oneshotmarketing.com.au')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Optional add-ons */}
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-5">Optional Add-Ons</p>

        <div className="border border-teal divide-y divide-teal">
          {/* Domain */}
          <AddonRow
            checked={domain}
            onToggle={() => setDomain((d) => !d)}
            label={addons.domain.label}
            price={addons.domain.price}
            desc={addons.domain.description}
          />

          {/* GMB — mutually exclusive pair */}
          <AddonRow
            checked={gmbOption === 'setup'}
            onToggle={() => setGmbOption(gmbOption === 'setup' ? 'none' : 'setup')}
            label={addons.gmbSetup.label}
            price={addons.gmbSetup.price}
            desc={addons.gmbSetup.description}
            radio
            radioName="gmb"
            radioValue="setup"
          />
          <AddonRow
            checked={gmbOption === 'full'}
            onToggle={() => setGmbOption(gmbOption === 'full' ? 'none' : 'full')}
            label={addons.gmbFull.label}
            price={addons.gmbFull.price}
            desc={addons.gmbFull.description}
            radio
            radioName="gmb"
            radioValue="full"
          />

          {/* Social audit */}
          <AddonRow
            checked={socialAudit}
            onToggle={() => setSocialAudit((s) => !s)}
            label={addons.socialAudit.label}
            price={addons.socialAudit.price}
            desc={addons.socialAudit.description}
          />
        </div>
      </div>

      {/* Live total */}
      <div className="border border-accent p-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-muted text-[14px]">Website in a Week</span>
          <span className="font-mono text-heading">${PRICING.base} AUD</span>
        </div>
        {domain && (
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted">+ Domain Registration</span>
            <span className="font-mono text-muted">+${addons.domain.price}</span>
          </div>
        )}
        {gmbOption === 'setup' && (
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted">+ GMB Setup</span>
            <span className="font-mono text-muted">+${addons.gmbSetup.price}</span>
          </div>
        )}
        {gmbOption === 'full' && (
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted">+ GMB Full Build</span>
            <span className="font-mono text-muted">+${addons.gmbFull.price}</span>
          </div>
        )}
        {socialAudit && (
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-muted">+ Social Audit</span>
            <span className="font-mono text-muted">+${addons.socialAudit.price}</span>
          </div>
        )}
        <div className="border-t border-teal pt-3 flex items-center justify-between">
          <span className="font-display text-heading text-lg font-semibold">Total</span>
          <span className="font-mono text-accent text-2xl font-medium">${total} AUD</span>
        </div>
      </div>

      {/* Checkout CTA */}
      <div className="space-y-4">
        <p className="font-display text-heading text-lg font-semibold">Ready to lock this in?</p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full py-5 bg-accent text-bg font-medium text-base rounded-[2px] hover:bg-[#5da07f] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Redirecting to payment...' : 'Secure Your Website Now →'}
        </button>
        {error && <p className="text-red-400 text-[13px]">{error}</p>}
        <p className="text-muted/50 text-[12px] leading-relaxed">
          Secure payment via Stripe. After payment you'll receive your onboarding form by email within 24 hours.{' '}
          <a href="/terms" className="text-accent hover:underline">View terms.</a>
        </p>
      </div>
    </div>
  )
}

function AddonRow({
  checked,
  onToggle,
  label,
  price,
  desc,
  radio,
  radioName,
  radioValue,
}: {
  checked: boolean
  onToggle: () => void
  label: string
  price: number
  desc: string
  radio?: boolean
  radioName?: string
  radioValue?: string
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full flex items-start gap-4 p-5 text-left transition-colors',
        checked ? 'bg-accent/8' : 'hover:bg-accent/5'
      )}
      role={radio ? 'radio' : 'checkbox'}
      aria-checked={checked}
    >
      <span className={cn(
        'mt-0.5 shrink-0 w-4 h-4 border flex items-center justify-center transition-colors',
        radio ? 'rounded-full' : 'rounded-[2px]',
        checked ? 'bg-accent border-accent' : 'border-teal'
      )}>
        {checked && <span className="text-bg text-[9px] font-bold leading-none">✓</span>}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4">
          <span className={cn('text-[14px] font-medium leading-snug', checked ? 'text-heading' : 'text-muted')}>
            {label}
          </span>
          <span className="font-mono text-accent text-[13px] shrink-0">${price}</span>
        </div>
        <p className="text-muted/60 text-[12px] leading-relaxed mt-1">{desc}</p>
      </div>
    </button>
  )
}
