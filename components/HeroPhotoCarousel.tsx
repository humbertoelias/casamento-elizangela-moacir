'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import type { GalleryImage } from '@/src/data/wedding'

type HeroPhotoCarouselProps = {
  images: GalleryImage[]
}

const AUTO_ADVANCE_DELAY = 4200

export function HeroPhotoCarousel({ images }: HeroPhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const carousel = carouselRef.current
    const selectedSlide = slideRefs.current[currentIndex]

    if (!carousel || !selectedSlide) {
      return
    }

    const centeredLeft =
      selectedSlide.offsetLeft - (carousel.clientWidth - selectedSlide.clientWidth) / 2

    carousel.scrollTo({
      left: Math.max(centeredLeft, 0),
      behavior: 'smooth'
    })
  }, [currentIndex])

  useEffect(() => {
    if (isPaused || images.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, AUTO_ADVANCE_DELAY)

    return () => window.clearInterval(interval)
  }, [images.length, isPaused])

  if (images.length === 0) {
    return null
  }

  function goToPrevious() {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  function goToNext() {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="invite-paper relative -mx-6 overflow-hidden border-y border-[var(--color-border)] lg:mx-0 lg:rounded-[1.25rem] lg:border">
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Carrossel de fotos do casal"
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            ref={(element) => {
              slideRefs.current[index] = element
            }}
            className="relative h-[clamp(14rem,34vh,22rem)] w-[72vw] shrink-0 snap-center overflow-hidden rounded-[1rem] border border-white/80 bg-[var(--color-bg-soft)] shadow-[0_12px_30px_rgba(77,96,53,0.1)] sm:w-[44vw] lg:h-[clamp(16rem,38vh,24rem)] lg:w-[28rem]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 3}
              sizes="(max-width: 768px) 72vw, (max-width: 1024px) 44vw, 28rem"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-paper)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-paper)] to-transparent" />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)]/88 px-3 py-2 shadow-[0_12px_34px_rgba(77,96,53,0.12)] backdrop-blur">
        <button
          type="button"
          onClick={goToPrevious}
          className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-white text-lg leading-none text-[var(--color-text-strong)] transition hover:bg-[var(--color-serenity)]"
          aria-label="Foto anterior"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          className="min-w-24 rounded-full bg-[var(--color-olive)] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
          aria-label={isPaused ? 'Continuar carrossel' : 'Pausar carrossel'}
        >
          {isPaused ? 'Continuar' : 'Pausar'}
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] bg-white text-lg leading-none text-[var(--color-text-strong)] transition hover:bg-[var(--color-serenity)]"
          aria-label="Próxima foto"
        >
          ›
        </button>
        <span className="hidden min-w-20 text-center text-xs font-semibold text-[var(--color-text)] sm:inline">
          Foto {currentIndex + 1} de {images.length}
        </span>
      </div>

      <div className="absolute right-5 top-5 hidden max-w-[45%] flex-wrap justify-end gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)]/82 px-3 py-2 shadow-[0_12px_34px_rgba(77,96,53,0.1)] backdrop-blur sm:flex">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'w-7 bg-[var(--color-olive)]' : 'w-2.5 bg-[var(--color-border-strong)]'
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
