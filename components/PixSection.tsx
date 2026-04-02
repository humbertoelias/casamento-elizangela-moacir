'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

type PixSectionProps = {
  pixKey: string
}

export function PixSection({ pixKey }: PixSectionProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="pix" className="bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_110px_rgba(0,0,0,0.18)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Pix"
              title="Contribua com carinho e praticidade"
              description="Se preferir, você pode presentear diretamente via Pix. Assim, ajudará a transformar sonhos, experiências e detalhes do nosso novo lar em memórias reais."
            />

            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[var(--color-bg-soft)] p-5">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">Chave Pix</p>
              <p className="mt-3 break-all font-mono text-sm leading-7 text-white/88 sm:text-base">{pixKey}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition hover:-translate-y-0.5"
              >
                {copied ? 'Chave copiada' : 'Copiar chave Pix'}
              </button>
              <p className="text-sm text-[var(--color-text)]">
                {copied
                  ? 'A chave foi copiada. Agora é só abrir o app do seu banco e colar.'
                  : 'Depois de copiar, abra o aplicativo do seu banco e cole a chave na área de Pix.'}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[var(--color-bg-soft)]">
              <Image
                src="/pix-placeholder.svg"
                alt="QR Code ilustrativo para área de Pix"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-center text-sm leading-7 text-[var(--color-text)]">
              Você também pode substituir este QR Code ilustrativo por um QR Code real depois. Basta trocar o arquivo
              <span className="mx-1 rounded bg-white/8 px-2 py-1 font-mono text-xs text-white">public/pix-placeholder.svg</span>
              por uma imagem da sua chave Pix.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
