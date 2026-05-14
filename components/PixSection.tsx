'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SectionHeading } from '@/components/SectionHeading'

type PixSectionProps = {
  pixKey: string
}

export function PixSection({ pixKey }: PixSectionProps) {
  const [copied, setCopied] = useState(false)
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null)

  async function copyToClipboard(value: string) {
    await navigator.clipboard.writeText(value)
  }

  async function handleCopyPix() {
    try {
      await copyToClipboard(pixKey)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  async function handleCopyBankField(label: string, value: string) {
    try {
      await copyToClipboard(value)
      setCopiedBankField(label)
      window.setTimeout(() => setCopiedBankField(null), 2200)
    } catch {
      setCopiedBankField(null)
    }
  }

  const bankDetails = [
    { label: 'Agência', value: '0001' },
    { label: 'Conta', value: '1046068-8' },
    { label: 'Banco', value: '0260' },
    { label: 'Instituição', value: 'Nu Pagamentos S.A. - Instituição de Pagamento' }
  ]

  return (
    <section id="pix" className="bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-white/82 p-8 shadow-[0_24px_80px_rgba(91,112,87,0.12)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Pix"
              title="Contribua com carinho e praticidade"
              description="Se preferir, você pode presentear diretamente via Pix. Assim, ajudará a transformar sonhos, experiências e detalhes do nosso novo lar em memórias reais."
            />

            <div className="mt-8 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Chave Pix</p>
              <p className="mt-3 break-all font-mono text-sm leading-7 text-[var(--color-text-strong)] sm:text-base">{pixKey}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleCopyPix}
                className="inline-flex justify-center rounded-full bg-[var(--color-olive)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {copied ? 'Chave copiada' : 'Copiar chave Pix'}
              </button>
              <p className="text-sm text-[var(--color-text)]">
                {copied
                  ? 'A chave foi copiada. Agora é só abrir o app do seu banco e colar.'
                  : 'Depois de copiar, abra o aplicativo do seu banco e cole a chave na área de Pix.'}
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">Dados bancários</p>
              <div className="mt-5 divide-y divide-[var(--color-border)]">
                {bankDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-[var(--color-text)]">{detail.label}</p>
                      <p className="mt-1 break-words font-display text-2xl font-semibold leading-tight text-[var(--color-text-strong)]">
                        {detail.value}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyBankField(detail.label, detail.value)}
                      className="shrink-0 rounded-full border border-[var(--color-border-strong)] bg-white/72 px-4 py-2 text-xs font-semibold text-[var(--color-text-strong)] transition hover:bg-white"
                    >
                      {copiedBankField === detail.label ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5">
            <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-[1.2rem] border border-[var(--color-border)] bg-white">
              <Image
                src="/pix-placeholder.svg"
                alt="QR Code da chave Pix do casal"
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="mt-5 text-center text-sm leading-7 text-[var(--color-text)]">
              Aponte a câmera do celular para o QR Code ou copie a chave Pix para presentear com praticidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
