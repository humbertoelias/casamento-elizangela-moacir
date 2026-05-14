'use client'

import { useEffect, useMemo, useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'
import type { PhysicalGift, PixGift } from '@/src/data/wedding'

type GiftRegistrySectionProps = {
  physicalGifts: PhysicalGift[]
  pixGifts: PixGift[]
}

type FilterKey = 'Todos' | 'Experiências' | 'Físicos' | 'Exclusivos' | 'Múltiplos'

type UnifiedGift = {
  id: string
  title: string
  category: string
  description: string
  chip: string
  type: 'Experiências' | 'Físicos'
  emailValue: string
  priceLabel?: string
  statusLabel: string
}

const FORM_ACTION = 'https://formsubmit.co/agapelel.realizacoes@gmail.com'
const SUCCESS_URL = 'https://casamentoelizangelamoacir.vercel.app/?presente=enviado#presentes'
const DISCOUNT_MULTIPLIER = 0.295
const filters: FilterKey[] = ['Todos', 'Experiências', 'Físicos', 'Exclusivos', 'Múltiplos']

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
  const [wasSent, setWasSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setWasSent(params.get('presente') === 'enviado')
  }, [])

  const gifts = useMemo<UnifiedGift[]>(() => {
    const experiences = pixGifts.map((gift) => {
      const discountedAmount = gift.amount * DISCOUNT_MULTIPLIER

      return {
        id: gift.id,
        title: gift.name,
        category: 'Experiência',
        description: gift.description,
        chip: discountedAmount >= 1000 ? 'Compra única' : 'Pode presentear mais de uma vez',
        type: 'Experiências' as const,
        emailValue: formatMoney(discountedAmount),
        priceLabel: formatMoney(discountedAmount),
        statusLabel: gift.amount >= 1000 ? 'Exclusivo' : 'Múltiplo'
      }
    })

    const physical = physicalGifts.map((gift) => ({
      id: gift.id,
      title: gift.name,
      category: gift.category,
      description: gift.description,
      chip: gift.status,
      type: 'Físicos' as const,
      emailValue: 'Item físico',
      statusLabel: gift.status
    }))

    return [...experiences, ...physical]
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
          case 'Experiências':
            return gift.type === 'Experiências'
          case 'Físicos':
            return gift.type === 'Físicos'
          case 'Exclusivos':
            return gift.type === 'Experiências' && gift.statusLabel === 'Exclusivo'
          case 'Múltiplos':
            return gift.type === 'Experiências' && gift.statusLabel === 'Múltiplo'
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
          description="Você pode presentear com um item para o nosso lar ou contribuir com experiências que vão fazer parte das nossas memórias."
          align="center"
        />

        {wasSent ? (
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-serenity)] px-5 py-3 text-center text-sm font-medium text-[var(--color-text-strong)]">
            Presente escolhido. Obrigado pelo carinho!
          </p>
        ) : null}

        <div className="mt-10 rounded-[1.75rem] border border-[var(--color-border)] bg-white/78 p-4 shadow-[0_24px_80px_rgba(91,112,87,0.12)] sm:p-5">
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

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGifts.map((gift) => (
              <article
                key={gift.id}
                className="group rounded-[1.15rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-olive-soft)]">
                      {gift.type}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-[var(--color-text-strong)]">
                      {gift.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-white/74 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text)]">
                    {gift.category}
                  </span>
                </div>

                <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--color-text)]">
                  {gift.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--color-serenity)] px-3 py-1 text-xs font-semibold text-[var(--color-olive)]">
                    {gift.chip}
                  </span>
                  {gift.priceLabel ? (
                    <span className="rounded-full border border-[var(--color-border-strong)] bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--color-olive)]">
                      {gift.priceLabel}
                    </span>
                  ) : null}
                </div>

                <form action={FORM_ACTION} method="POST" className="mt-4 grid gap-3 border-t border-[var(--color-border)] pt-4">
                  <input type="hidden" name="_subject" value="Escolha de presente - Elizângela & Moacir" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={SUCCESS_URL} />
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="Evento" value="Casamento Elizângela & Moacir" />
                  <input type="hidden" name="Presente escolhido" value={gift.title} />
                  <input type="hidden" name="Tipo" value={gift.type} />
                  <input type="hidden" name="Categoria" value={gift.category} />
                  <input type="hidden" name="Valor" value={gift.emailValue} />

                  <label>
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-text-strong)]">Seu nome</span>
                    <input
                      type="text"
                      name="Nome"
                      required
                      placeholder="Nome completo"
                      className="w-full rounded-xl border border-[var(--color-border)] bg-white/74 px-3 py-2 text-sm text-[var(--color-text-strong)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-olive)]"
                    />
                  </label>

                  <label>
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-text-strong)]">Mensagem opcional</span>
                    <textarea
                      name="Mensagem"
                      placeholder="Escreva uma mensagem"
                      rows={2}
                      className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/74 px-3 py-2 text-sm text-[var(--color-text-strong)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-olive)]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-full bg-[var(--color-olive)] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Escolher presente
                  </button>
                </form>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
