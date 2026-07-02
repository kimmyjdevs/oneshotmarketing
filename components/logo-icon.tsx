interface LogoIconProps {
  className?: string
  color?: string
}

export function LogoIcon({ className, color = 'currentColor' }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Concentric rings */}
      <circle cx="50" cy="50" r="43" stroke={color} strokeWidth="2" />
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" />
      <circle cx="50" cy="50" r="17" stroke={color} strokeWidth="2" />
      {/* Centre dot */}
      <circle cx="50" cy="50" r="4.5" fill={color} />
      {/* Arrow shaft — from bottom of arrowhead to near centre */}
      <line
        x1="79"
        y1="23"
        x2="53"
        y2="47"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Diamond arrowhead */}
      <polygon points="79,7 87,15 79,23 71,15" fill={color} />
    </svg>
  )
}

export function LogoFull({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  const iconColor = variant === 'dark' ? '#4E8C70' : '#4E8C70'
  const primaryColor = variant === 'dark' ? '#C8DDD4' : '#1a3329'
  const secondaryColor = variant === 'dark' ? '#9BBDB3' : '#4E8C70'

  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ''}`}>
      <LogoIcon className="w-20 h-20" color={iconColor} />
      <div className="text-center">
        <p
          style={{
            color: iconColor,
            fontFamily: 'var(--font-inter)',
            fontWeight: 900,
            fontSize: '22px',
            letterSpacing: '0.22em',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          ONE SHOT
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span style={{ color: iconColor, fontSize: '10px' }}>——</span>
          <p
            style={{
              color: secondaryColor,
              fontFamily: 'var(--font-jetbrains)',
              fontWeight: 400,
              fontSize: '10px',
              letterSpacing: '0.28em',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            MARKETING
          </p>
          <span style={{ color: iconColor, fontSize: '10px' }}>——</span>
        </div>
      </div>
    </div>
  )
}
