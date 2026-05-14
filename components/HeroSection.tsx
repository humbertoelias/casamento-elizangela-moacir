import { HeroPhotoCarousel } from '@/components/HeroPhotoCarousel'
import { MusicPlayer } from '@/components/MusicPlayer'
import type { AudioTrack, GalleryImage } from '@/src/data/wedding'

type HeroSectionProps = {
  coupleNames: string
  tagline: string
  weddingDateLabel: string
  weddingLocation: string
  galleryImages: GalleryImage[]
  tracks: AudioTrack[]
}

export function HeroSection({
  coupleNames,
  tagline,
  weddingDateLabel,
  weddingLocation,
  galleryImages,
  tracks
}: HeroSectionProps) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[var(--color-bg)] pt-[5.5rem]">
      <div className="invite-floral-corner invite-floral-corner--top-left" />
      <div className="invite-floral-corner invite-floral-corner--top-right" />
      <div className="invite-floral-corner invite-floral-corner--bottom-left hidden lg:block" />
      <div className="invite-floral-corner invite-floral-corner--bottom-right hidden lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 lg:px-8">
        <HeroPhotoCarousel images={galleryImages} />

        <div className="relative z-10 grid flex-1 gap-6 py-8 lg:grid-cols-[1fr_25rem] lg:items-end">
          <div className="invite-paper max-w-3xl rounded-[1.25rem] border border-[var(--color-border)] px-6 py-8 text-center sm:px-10">
            <p className="text-lg leading-8 tracking-[0.08em] text-[var(--color-text)]">
              Convidamos você para a celebração do nosso casamento
            </p>

            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-[var(--color-olive)]">
              <p className="font-display text-4xl uppercase leading-none sm:text-5xl">Novembro</p>
              <p className="font-display text-6xl leading-none sm:text-7xl">21</p>
              <p className="font-display text-4xl leading-none sm:text-5xl">2026</p>
            </div>

            <p className="mt-6 text-base leading-8 tracking-[0.08em] text-[var(--color-text)]">
              {weddingDateLabel} | {weddingLocation}
            </p>

            <div className="invite-divider mx-auto mt-8 max-w-md">
              <span />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text)] sm:text-lg">
              Em cada olhar, um universo de promessas; em cada toque, uma eternidade de amor.
            </p>

            <h1 className="mt-8 font-display text-5xl font-semibold uppercase leading-none tracking-[0.04em] text-[var(--color-olive)] sm:text-6xl lg:text-7xl">
              {coupleNames}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text)] sm:text-lg">
              {tagline}
            </p>

            <div className="mt-8 grid gap-4 rounded-[1rem] border border-[var(--color-border)] bg-white/60 p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Data</p>
                <p className="mt-2 text-base font-medium text-[var(--color-text-strong)]">{weddingDateLabel}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Local</p>
                <p className="mt-2 text-base font-medium text-[var(--color-text-strong)]">{weddingLocation}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#confirmacao"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-olive)] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(77,96,53,0.24)]"
              >
                Confirmar presença
              </a>
              <a
                href="#local"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/70 px-7 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Ver localização
              </a>
            </div>
          </div>

          <div id="trilha" className="backdrop-blur">
            <MusicPlayer tracks={tracks} autoPlay />
          </div>
        </div>
      </div>
    </section>
  )
}
