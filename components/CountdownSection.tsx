'use client'

import { useEffect, useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'

type CountdownSectionProps = {
  weddingDate: string
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(targetDate: string): TimeLeft {
  const target = new Date(targetDate).getTime()
  const now = new Date().getTime()
  const difference = target - now

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export function CountdownSection({ weddingDate }: CountdownSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    setMounted(true)
    setTimeLeft(getTimeLeft(weddingDate))

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [weddingDate])

  const items = [
    {
      label: 'Dias',
      value: mounted ? String(timeLeft.days).padStart(2, '0') : '--'
    },
    {
      label: 'Horas',
      value: mounted ? String(timeLeft.hours).padStart(2, '0') : '--'
    },
    {
      label: 'Minutos',
      value: mounted ? String(timeLeft.minutes).padStart(2, '0') : '--'
    },
    {
      label: 'Segundos',
      value: mounted ? String(timeLeft.seconds).padStart(2, '0') : '--'
    }
  ]

  return (
    <section
      id="countdown"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-panel)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.32em] text-[var(--color-olive-soft)]">
          Contagem regressiva
        </p>

        <SectionHeading
          title="Faltam poucos capítulos para esse grande dia"
          description="Cada dia que passa nos aproxima de um momento inesquecível. Estamos contando os instantes para celebrar esse novo começo."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/82 p-6 text-center shadow-[0_18px_54px_rgba(91,112,87,0.1)]"
            >
              <p className="font-display text-5xl text-[var(--color-text-strong)] sm:text-6xl">
                {item.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
