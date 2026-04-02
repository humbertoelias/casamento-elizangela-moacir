'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'
import type { GalleryImage } from '@/src/data/wedding'

type GallerySectionProps = {
  images: GalleryImage[]
}

export function GallerySection({ images }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  return (
    <section id="galeria" className="bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Memórias que já parecem cenas de filme"
          description="Momentos que carregam a leveza, a alegria e a beleza de tudo o que estamos vivendo."
          align="center"
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group mb-5 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left shadow-[0_25px_80px_rgba(0,0,0,0.14)] transition hover:-translate-y-1"
            >
              <div className="relative min-h-[320px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/88 px-4 py-10"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
          >
            Fechar
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
