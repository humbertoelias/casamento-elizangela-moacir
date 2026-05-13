import Image from 'next/image'

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
  const carouselImages = [...galleryImages, ...galleryImages]

  return (
    <section id="inicio" className="relative overflow-hidden bg-[var(--color-bg)] pt-[5.5rem]">
      <div className="absolute inset-x-0 top-0 h-52 bg-[linear-gradient(180deg,rgba(226,238,241,0.96),rgba(226,238,241,0))]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 lg:px-8">
        <div className="relative -mx-6 overflow-hidden border-y border-[var(--color-border)] bg-white/70 shadow-[0_22px_80px_rgba(91,112,87,0.14)] lg:mx-0 lg:rounded-[2rem] lg:border">
          <div className="flex w-max animate-hero-photo-marquee gap-4 py-4">
            {carouselImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative h-[clamp(14rem,34vh,22rem)] w-[72vw] shrink-0 overflow-hidden rounded-[1.5rem] sm:w-[44vw] lg:h-[clamp(16rem,38vh,24rem)] lg:w-[28rem]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 768px) 72vw, (max-width: 1024px) 44vw, 31rem"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
        </div>

        <div className="relative z-10 grid flex-1 gap-6 py-8 lg:grid-cols-[1fr_25rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-olive-soft)]">
              Um capítulo especial começa aqui
            </p>
            <h1 className="font-display text-5xl leading-none text-[var(--color-text-strong)] sm:text-6xl lg:text-7xl">
              {coupleNames}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text)] sm:text-lg">
              {tagline}
            </p>

            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white/78 p-5 shadow-[0_18px_60px_rgba(91,112,87,0.12)] backdrop-blur sm:grid-cols-2">
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

          <div id="trilha" className="backdrop-blur">
            <MusicPlayer tracks={tracks} autoPlay />
          </div>
        </div>
      </div>
    </section>
  )
}
