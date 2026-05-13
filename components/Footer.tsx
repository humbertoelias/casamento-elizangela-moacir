type FooterProps = {
  coupleNames: string
}

export function Footer({ coupleNames }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-[var(--color-text)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl text-[var(--color-text-strong)]">{coupleNames}</p>
          <p className="mt-2 max-w-xl leading-7">
            Obrigado por fazer parte deste momento. Sua presença, seu carinho e sua lembrança tornam esse capítulo ainda mais especial.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-medium text-[var(--color-text)]">
          <a href="#inicio" className="transition hover:text-[var(--color-olive)]">Início</a>
          <a href="#confirmacao" className="transition hover:text-[var(--color-olive)]">Confirmação</a>
          <a href="#local" className="transition hover:text-[var(--color-olive)]">Local</a>
          <a href="#galeria" className="transition hover:text-[var(--color-olive)]">Galeria</a>
          <a href="#presentes" className="transition hover:text-[var(--color-olive)]">Presentes</a>
          <a href="#pix" className="transition hover:text-[var(--color-olive)]">Pix</a>
        </div>
      </div>
    </footer>
  )
}
