type FooterProps = {
  coupleNames: string
}

export function Footer({ coupleNames }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[var(--color-bg-soft)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-[var(--color-text)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl text-white">{coupleNames}</p>
          <p className="mt-2 max-w-xl leading-7">
            Obrigado por fazer parte deste momento. Sua presença, seu carinho e sua lembrança tornam esse capítulo ainda mais especial.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/78">
          <a href="#inicio" className="transition hover:text-white">Início</a>
          <a href="#historia" className="transition hover:text-white">Nossa História</a>
          <a href="#galeria" className="transition hover:text-white">Galeria</a>
          <a href="#presentes" className="transition hover:text-white">Presentes</a>
          <a href="#pix" className="transition hover:text-white">Pix</a>
        </div>
      </div>
    </footer>
  )
}
