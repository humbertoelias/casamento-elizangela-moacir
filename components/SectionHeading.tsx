type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-olive-soft)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-semibold leading-tight text-[var(--color-olive)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--color-text)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
