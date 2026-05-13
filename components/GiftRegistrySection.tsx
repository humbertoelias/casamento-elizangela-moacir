'use client'

import { useMemo, useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'
import type { PhysicalGift, PixGift } from '@/src/data/wedding'

type GiftRegistrySectionProps = {
  physicalGifts: PhysicalGift[]
  pixGifts: PixGift[]
}

type FilterKey = 'Todos' | 'Físicos' | 'Pix' | 'Exclusivos' | 'Múltiplos'

type UnifiedGift = {
  id: string
  title: string
  category: string
  description: string
  chip: string
  type: 'Físicos' | 'Pix'
  priceLabel?: string
  statusLabel: string
}

const filters: FilterKey[] = ['Todos', 'Físicos', 'Pix', 'Exclusivos', 'Múltiplos']

function formatMoney(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value)
}

export function GiftRegistrySection({ physicalGifts, pixGifts }: GiftRegistrySectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('Todos')
  const [search, setSearch] = useState('')

  const gifts = useMemo<UnifiedGift[]>(() => {
    const physical = physicalGifts.map((gift) => ({
      id: gift.id,
      title: gift.name,
      category: gift.category,
      description: gift.description,
      chip: gift.status,
      type: 'Físicos' as const,
      statusLabel: gift.status
    }))

    const pix = pixGifts.map((gift) => ({
      id: gift.id,
      title: gift.name,
      category: 'Pix',
      description: gift.description,
      chip: gift.amount >= 1000 ? 'Compra única' : 'Pode presentear mais de uma vez',
      type: 'Pix' as const,
      priceLabel: formatMoney(gift.amount),
      statusLabel: gift.amount >= 1000 ? 'Exclusivo' : 'Múltiplo'
    }))

    return [...physical, ...pix]
  }, [physicalGifts, pixGifts])

  const filteredGifts = useMemo(() => {
    return gifts.filter((gift) => {
      const normalizedSearch = search.trim().toLowerCase()
      const matchesSearch =
        normalizedSearch.length === 0 ||
        gift.title.toLowerCase().includes(normalizedSearch) ||
        gift.description.toLowerCase().includes(normalizedSearch) ||
        gift.category.toLowerCase().includes(normalizedSearch)

      const matchesFilter = (() => {
        switch (activeFilter) {
          case 'Físicos':
            return gift.type === 'Físicos'
          case 'Pix':
            return gift.type === 'Pix'
          case 'Exclusivos':
            return gift.type === 'Pix' && gift.statusLabel === 'Exclusivo'
          case 'Múltiplos':
            return gift.type === 'Pix' && gift.statusLabel === 'Múltiplo'
          default:
            return true
        }
      })()

      return matchesSearch && matchesFilter
    })
  }, [activeFilter, gifts, search])

  return (
    <section id="presentes" className="bg-[var(--color-panel-2)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Presentes"
          title="Escolha um presente com o seu jeito de demonstrar carinho"
          description="Você pode presentear com um item para o nosso lar ou contribuir com experiências em Pix que vão fazer parte das nossas memórias."
          align="center"
        />

        <div className="mt-12 rounded-[1.75rem] border border-[var(--color-border)] bg-white/78 p-6 shadow-[0_24px_80px_rgba(91,112,87,0.12)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="w-full lg:max-w-md">
              <span className="sr-only">Buscar presente</span>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar presente, categoria ou experiência"
                className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 text-sm text-[var(--color-text-strong)] placeholder:text-[var(--color-text-muted)] outline-none ring-0 transition focus:border-[var(--color-olive)]"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? 'bg-[var(--color-olive)] text-white'
                      : 'border border-[var(--color-border)] bg-white/70 text-[var(--color-text)] hover:bg-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredGifts.map((gift) => (
              <article
                key={gift.id}
                className="group rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">{gift.type}</p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--color-text-strong)]">{gift.title}</h3>
                  </div>
                  <span className="rounded-full border border-[var(--color-border)] bg-white/74 px-3 py-1 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-text)]">
                    {gift.category}
                  </span>
                </div>

                <p className="mt-4 min-h-24 leading-7 text-[var(--color-text)]">{gift.description}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--color-serenity)] px-3 py-1 text-xs font-semibold text-[var(--color-olive)]">
                    {gift.chip}
                  </span>
                  {gift.priceLabel ? (
                    <span className="rounded-full border border-[var(--color-border-strong)] bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--color-olive)]">
                      {gift.priceLabel}
                    </span>
                  ) : null}
                </div>

                <div className="mt-6">
                  <a
                    href="#pix"
                    className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/72 px-5 py-3 text-sm font-semibold text-[var(--color-text-strong)] transition group-hover:border-[var(--color-olive)]"
                  >
                    {gift.type === 'Pix' ? 'Presentear com Pix' : 'Ver chave Pix'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
