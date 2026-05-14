import Image from 'next/image'

type FooterProps = {
  coupleNames: string
}

export function Footer({ coupleNames }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-sm text-[var(--color-text)] lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <p className="font-display text-2xl text-[var(--color-text-strong)]">{coupleNames}</p>
          <p className="mt-2 max-w-xl leading-7">
            Obrigado por fazer parte deste momento. Sua presença, seu carinho e sua lembrança tornam esse capítulo ainda mais especial.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[var(--color-text)]">
            <a href="#inicio" className="transition hover:text-[var(--color-olive)]">Início</a>
            <a href="#confirmacao" className="transition hover:text-[var(--color-olive)]">Confirmação</a>
            <a href="#local" className="transition hover:text-[var(--color-olive)]">Local</a>
            <a href="#presentes" className="transition hover:text-[var(--color-olive)]">Presentes</a>
            <a href="#pix" className="transition hover:text-[var(--color-olive)]">Pix</a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/76 p-5 shadow-[0_18px_54px_rgba(91,112,87,0.1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-olive-soft)]">
            Parceiros
          </p>

          <a
            href="https://www.instagram.com/agapelel?igsh=MWF3ZW5obTJpbzFmaQ%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex flex-col gap-5 rounded-[1.25rem] transition hover:bg-[var(--color-bg)] sm:flex-row sm:items-center"
            aria-label="Abrir Instagram da Ágape Cerimonial"
          >
            <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
              <Image
                src="/parceiros/agape-logo.jpg"
                alt="Logo Ágape Cerimonial"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>

            <div>
              <p className="font-display text-3xl leading-tight text-[var(--color-text-strong)]">
                Ágape Cerimonial
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-olive)]">
                Instagram da Ágape
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--color-text)]">
                Contato:{' '}
                <span className="text-[var(--color-olive)]">
                  (31) 9 9249-4408
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
