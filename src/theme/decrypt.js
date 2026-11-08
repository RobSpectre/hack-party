// The Uplink decrypt: text resolves out of random glyphs, left to right.
// Returns a function that cancels the effect and shows the final text.
const glyphs = '!<>-_\\/[]{}=+*^?#$%&01ABCDEF'

export function prefersReducedMotion () {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function decrypt (el, text, { duration = 900, delay = 0 } = {}) {
  if (!el) {
    return () => {}
  }

  if (prefersReducedMotion() || typeof window.requestAnimationFrame !== 'function') {
    el.textContent = text
    return () => {}
  }

  let frame
  let start

  const step = now => {
    if (start === undefined) {
      start = now
    }

    const progress = Math.max(0, (now - start - delay) / duration)
    const settled = Math.floor(progress * text.length)

    el.textContent = Array.from(text, (char, index) => {
      if (index < settled || char === ' ') {
        return char
      }

      return glyphs[Math.floor(Math.random() * glyphs.length)]
    }).join('')

    if (progress < 1) {
      frame = window.requestAnimationFrame(step)
    } else {
      el.textContent = text
    }
  }

  frame = window.requestAnimationFrame(step)

  return () => {
    window.cancelAnimationFrame(frame)
    el.textContent = text
  }
}
