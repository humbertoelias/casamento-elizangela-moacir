'use client'

import { useEffect, useState } from 'react'

type HeaderProps = {
  coupleNames: string
}

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#trilha', label: 'Trilha Sonora' },
  { href: '#presentes', label: 'Presentes' },
  { href: '#pix', label: 'Pix' }
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
          ? 'border-b border-white/10 bg-[rgba(7,12,18,0.78)] shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm tracking-[0.25em] text-[var(--color-accent)] transition group-hover:border-[var(--color-accent)]/50">
            {initials}
          </div>
          <div>
            <p className="font-display text-xl text-white">{coupleNames}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">21 . 11 . 2026</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/78 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
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
        className={`overflow-hidden border-t border-white/10 bg-[rgba(8,12,18,0.95)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/8 py-4 text-sm text-white/82 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
