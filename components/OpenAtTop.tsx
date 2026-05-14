'use client'

import { useEffect } from 'react'

export function OpenAtTop() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const params = new URLSearchParams(window.location.search)
    const shouldKeepAnchor =
      params.get('confirmacao') === 'enviada' || params.get('presente') === 'enviado'

    if (window.location.hash && !shouldKeepAnchor) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }

    if (window.location.hash && shouldKeepAnchor) {
      return
    }

    let userInteracted = false

    const scrollToTop = () => {
      if (userInteracted) {
        return
      }

      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'auto'
      })
    }

    const stopOpeningScroll = () => {
      userInteracted = true
    }

    window.addEventListener('touchstart', stopOpeningScroll, { passive: true })
    window.addEventListener('wheel', stopOpeningScroll, { passive: true })
    window.addEventListener('keydown', stopOpeningScroll)

    scrollToTop()

    const animationFrame = window.requestAnimationFrame(scrollToTop)
    const timeouts = [120, 360, 760, 1200].map((delay) => window.setTimeout(scrollToTop, delay))

    return () => {
      window.cancelAnimationFrame(animationFrame)
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
      window.removeEventListener('touchstart', stopOpeningScroll)
      window.removeEventListener('wheel', stopOpeningScroll)
      window.removeEventListener('keydown', stopOpeningScroll)
    }
  }, [])

  return null
}
