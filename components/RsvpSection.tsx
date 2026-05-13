'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

type Confirmation = {
  id: string
  name: string
  companions: string[]
}

const STORAGE_KEY = 'elizangela-moacir-rsvp'

export function RsvpSection() {
  const [name, setName] = useState('')
  const [companions, setCompanions] = useState('')
  const [confirmations, setConfirmations] = useState<Confirmation[]>([])

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)

    if (saved) {
      setConfirmations(JSON.parse(saved) as Confirmation[])
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(confirmations))
  }, [confirmations])

  const totalGuests = useMemo(() => {
    return confirmations.reduce((total, confirmation) => total + 1 + confirmation.companions.length, 0)
  }, [confirmations])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName) {
      return
    }

    const companionList = companions
      .split('\n')
      .map((companion) => companion.trim())
      .filter(Boolean)

    setConfirmations((current) => [
      {
        id: crypto.randomUUID(),
        name: trimmedName,
        companions: companionList
      },
      ...current
    ])
    setName('')
    setCompanions('')
  }

  function removeConfirmation(id: string) {
    setConfirmations((current) => current.filter((confirmation) => confirmation.id !== id))
  }

  return (
    <section id="confirmacao" className="bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Confirmação"
              title="Confirme sua presença e informe quem vai com você"
              description="Os nomes confirmados aparecem aqui no site para deixar a lista mais clara e carinhosa para os noivos."
            />

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Respostas</p>
                <p className="mt-3 font-display text-4xl text-[var(--color-text-strong)]">{confirmations.length}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Pessoas</p>
                <p className="mt-3 font-display text-4xl text-[var(--color-text-strong)]">{totalGuests}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/86 p-6 shadow-[0_24px_80px_rgba(91,112,87,0.14)]">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label>
                <span className="mb-2 block text-sm font-medium text-[var(--color-text-strong)]">Seu nome</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nome completo"
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-strong)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-olive)]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium text-[var(--color-text-strong)]">Acompanhantes</span>
                <textarea
                  value={companions}
                  onChange={(event) => setCompanions(event.target.value)}
                  placeholder="Um nome por linha"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-strong)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-olive)]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-[var(--color-olive)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(91,112,87,0.22)]"
              >
                Confirmar presença
              </button>
            </form>

            <div className="mt-8 space-y-4">
              {confirmations.length > 0 ? (
                confirmations.map((confirmation) => (
                  <article
                    key={confirmation.id}
                    className="rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl text-[var(--color-text-strong)]">{confirmation.name}</h3>
                        {confirmation.companions.length > 0 ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {confirmation.companions.map((companion) => (
                              <span
                                key={companion}
                                className="rounded-full bg-[var(--color-serenity)] px-3 py-1 text-xs font-medium text-[var(--color-olive)]"
                              >
                                {companion}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        onClick={() => removeConfirmation(confirmation.id)}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-olive)]"
                      >
                        Remover
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <p className="rounded-[1.4rem] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-bg)] p-5 text-sm leading-7 text-[var(--color-text)]">
                  As confirmações aparecerão aqui conforme forem cadastradas.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
