import { SectionHeading } from '@/components/SectionHeading'

type VenueSectionProps = {
  venueName: string
  venueUrl: string
}

export function VenueSection({ venueName, venueUrl }: VenueSectionProps) {
  const mainVenueName = venueName.split('(')[0].trim()

  return (
    <section id="local" className="bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="invite-paper grid gap-10 rounded-[1.25rem] border border-[var(--color-border)] p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-12">
          <SectionHeading
            eyebrow="Localização"
            title={mainVenueName}
            description={`A celebração será em ${venueName}. Abra a página do local para conferir referências, fotos e informações atualizadas.`}
          />

          <div className="rounded-[1rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-serenity),rgba(255,254,246,0.8))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Endereço do evento</p>
            <p className="mt-4 font-display text-4xl leading-tight text-[var(--color-text-strong)]">{mainVenueName}</p>
            <p className="mt-3 leading-7 text-[var(--color-text)]">{venueName}</p>
            <a
              href={venueUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[var(--color-olive)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(91,112,87,0.22)]"
            >
              Abrir página do Sítio Santana
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
