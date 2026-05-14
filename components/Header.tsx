'use client'

import { useEffect, useState } from 'react'

type HeaderProps = {
  coupleNames: string
}

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#confirmacao', label: 'Confirmação' },
  { href: '#local', label: 'Local' },
  { href: '#presentes', label: 'Presentes' }
]

export function Header({ coupleNames }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const initials = coupleNames
    .split('&')
    .map((name) => name.trim()[0])
    .filter(Boolean)
    .join('&')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-paper)]/90 shadow-[0_10px_36px_rgba(77,96,53,0.12)] backdrop-blur-xl'
          : 'bg-[var(--color-paper)]/72 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-serenity)] text-sm tracking-[0.22em] text-[var(--color-olive)] shadow-inner transition group-hover:border-[var(--color-olive)]/50">
            {initials}
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-[var(--color-olive)]">{coupleNames}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-text-muted)]">21 . 11 . 2026</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-olive)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/76 text-[var(--color-text-strong)] md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-paper)]/96 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-[var(--color-border)] py-4 text-sm font-medium text-[var(--color-text)] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
