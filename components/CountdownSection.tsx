'use client'

import { useEffect, useMemo, useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

type CountdownSectionProps = {
  weddingDate: string
}

type CountdownValues = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: string): CountdownValues {
  const difference = new Date(targetDate).getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export function CountdownSection({ weddingDate }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() => calculateTimeLeft(weddingDate))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [weddingDate])

  const countdownItems = useMemo(
    () => [
      { label: 'Dias', value: String(timeLeft.days).padStart(2, '0') },
      { label: 'Horas', value: String(timeLeft.hours).padStart(2, '0') },
      { label: 'Minutos', value: String(timeLeft.minutes).padStart(2, '0') },
      { label: 'Segundos', value: String(timeLeft.seconds).padStart(2, '0') }
    ],
    [timeLeft]
  )

  return (
    <section className="relative border-y border-white/8 bg-[linear-gradient(180deg,rgba(10,16,23,0.94),rgba(13,20,28,1))] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contagem regressiva"
          title="Falta pouco para vivermos esse dia"
          description="Cada segundo nos aproxima de um momento que já mora no coração."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
            >
              <p className="font-display text-5xl text-white sm:text-6xl">{item.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
