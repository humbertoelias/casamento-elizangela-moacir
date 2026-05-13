'use client'

import { useEffect } from 'react'

export function OpenAtTop() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (window.location.hash) {
      return
    }

    const scrollToTop = () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'auto'
      })
    }

    scrollToTop()

    const animationFrame = window.requestAnimationFrame(scrollToTop)
    const timeout = window.setTimeout(scrollToTop, 120)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(timeout)
    }
  }, [])

  return null
}
