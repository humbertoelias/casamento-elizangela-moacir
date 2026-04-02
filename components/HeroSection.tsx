import Image from 'next/image'

type HeroSectionProps = {
  coupleNames: string
  tagline: string
  weddingDateLabel: string
  weddingLocation: string
  heroImage: string
}

export function HeroSection({
  coupleNames,
  tagline,
  weddingDateLabel,
  weddingLocation,
  heroImage
}: HeroSectionProps) {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <Image
        src={heroImage}
        alt="Foto principal do casal"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,160,168,0.18),transparent_32%),linear-gradient(180deg,rgba(5,9,14,0.22),rgba(5,9,14,0.84)_72%,rgba(5,9,14,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,17,0.76),rgba(6,11,17,0.3),rgba(6,11,17,0.7))]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-[var(--color-accent)]">
            Um capítulo especial começa aqui
          </p>
          <h1 className="font-display text-5xl leading-none text-white sm:text-7xl lg:text-8xl">
            {coupleNames}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {tagline}
          </p>

          <div className="mt-8 grid gap-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-md sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">Data</p>
              <p className="mt-2 text-lg text-white">{weddingDateLabel}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">Local</p>
              <p className="mt-2 text-lg text-white">{weddingLocation}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#historia"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-medium text-[var(--color-bg)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(123,160,168,0.25)]"
            >
              Nossa História
            </a>
            <a
              href="#presentes"
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/6 px-7 py-3 text-sm font-medium text-white transition hover:border-white/28 hover:bg-white/12"
            >
              Ver Presentes
            </a>
            <a
              href="#pix"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-olive-soft)]/45 px-7 py-3 text-sm font-medium text-[var(--color-olive-soft)] transition hover:bg-[var(--color-olive-soft)]/10"
            >
              Presentear com Pix
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
