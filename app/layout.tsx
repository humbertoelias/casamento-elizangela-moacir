import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import { weddingData } from '@/src/data/wedding'

import './globals.css'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
})

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: `${weddingData.coupleNames} | Casamento`,
  description: `Site de casamento de ${weddingData.coupleNames} com visual luxuoso e cinematográfico.`
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}>
        {children}
      </body>
    </html>
  )
}
