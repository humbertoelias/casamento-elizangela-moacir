import { SectionHeading } from '@/components/SectionHeading'
import Image from 'next/image'

type VenueSectionProps = {
  venueName: string
  venueUrl: string
}

export function VenueSection({ venueName, venueUrl }: VenueSectionProps) {
  return (
    <section id="local" className="bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[1.75rem] border border-[var(--color-border)] bg-white/78 p-8 shadow-[0_24px_80px_rgba(91,112,87,0.12)] lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-12">
          <SectionHeading
            eyebrow="Localização"
            title={venueName}
            description="A celebração será no Sítio Santana. Abra a página do local para conferir referências, fotos e informações atualizadas."
          />

          <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-serenity),rgba(255,255,255,0.72))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Endereço do evento</p>
            <p className="mt-4 font-display text-4xl leading-tight text-[var(--color-text-strong)]">{venueName}</p>
            <a
              href={venueUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white shadow-[0_14px_30px_rgba(91,112,87,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(91,112,87,0.24)]"
              aria-label="Abrir Facebook do Sítio Santana"
            >
              <Image
                src="/social/facebook.svg"
                alt=""
                width={24}
                height={24}
                className="h-7 w-7"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
