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
    <section id="inicio" className="relative overflow-hidden bg-transparent pt-[5.5rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(255,255,250,0.92),rgba(255,255,250,0.58),rgba(255,255,250,0))]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 lg:px-8">
        <HeroPhotoCarousel images={galleryImages} />

        <div className="relative z-10 grid flex-1 gap-6 py-8 lg:grid-cols-[1fr_25rem] lg:items-start">
          <div className="w-full min-w-0 max-w-[calc(100vw-3rem)] lg:max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-olive-soft)]">
              Um capítulo especial começa aqui
            </p>
            <h1 className="break-words font-display text-5xl leading-none text-[var(--color-text-strong)] sm:text-6xl lg:text-7xl">
              {coupleNames}
            </h1>
            <p className="mt-5 w-[19rem] max-w-full break-words text-base leading-8 text-[var(--color-text)] sm:w-auto sm:max-w-2xl sm:text-lg">
              {tagline}
            </p>

            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[var(--shadow-botanical)] backdrop-blur sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Data</p>
                <p className="mt-2 text-base font-medium text-[var(--color-text-strong)]">{weddingDateLabel}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Local</p>
                <p className="mt-2 text-base font-medium text-[var(--color-text-strong)]">{weddingLocation}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#confirmacao"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-olive)] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(91,112,87,0.24)]"
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

          <div id="trilha" className="min-w-0 backdrop-blur">
            <MusicPlayer tracks={tracks} autoPlay />
          </div>
        </div>
      </div>
    </section>
  )
}
