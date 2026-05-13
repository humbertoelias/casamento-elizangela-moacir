'use client'

import { useEffect, useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

const FORM_ACTION = 'https://formsubmit.co/agapelel.realizacoes@gmail.com'
const SUCCESS_URL = 'https://casamentoelizangelamoacir.vercel.app/?confirmacao=enviada#confirmacao'

export function RsvpSection() {
  const [wasSent, setWasSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setWasSent(params.get('confirmacao') === 'enviada')
  }, [])

  return (
    <section id="confirmacao" className="bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Confirmação"
              title="Confirme sua presença e informe quem vai com você"
              description="A confirmação será enviada por e-mail para a equipe da Ágape Cerimonial."
            />

            <div className="mt-8 rounded-[1.5rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Destino das respostas</p>
              <p className="mt-3 break-all text-base font-medium text-[var(--color-text-strong)]">
                agapelel.realizacoes@gmail.com
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/86 p-6 shadow-[0_24px_80px_rgba(91,112,87,0.14)]">
            {wasSent ? (
              <p className="mb-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-serenity)] px-4 py-3 text-sm font-medium text-[var(--color-text-strong)]">
                Confirmação enviada. Obrigado pelo carinho!
              </p>
            ) : null}

            <form action={FORM_ACTION} method="POST" className="grid gap-4">
              <input type="hidden" name="_subject" value="Confirmação de presença - Elizângela & Moacir" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={SUCCESS_URL} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="Evento" value="Casamento Elizângela & Moacir" />

              <label>
                <span className="mb-2 block text-sm font-medium text-[var(--color-text-strong)]">Seu nome</span>
                <input
                  type="text"
                  name="Nome"
                  required
                  placeholder="Nome completo"
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-strong)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-olive)]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium text-[var(--color-text-strong)]">Acompanhantes</span>
                <textarea
                  name="Acompanhantes"
                  placeholder="Um nome por linha"
                  rows={5}
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
          </div>
        </div>
      </div>
    </section>
  )
}
