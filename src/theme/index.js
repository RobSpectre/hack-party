// hack.party themes. The active theme is the data-theme attribute on <html>;
// every theme is a set of --hp-* custom properties plus optional overrides in
// src/assets/styles/themes/. See DESIGN.md for how to add one.
import { ref } from 'vue'

export const themes = [
  { id: 'uplink', name: 'Uplink', description: 'Broadcast live from 2387' },
  { id: 'classic', name: 'Classic', description: 'The original look, as the games were played' }
]

export const defaultTheme = 'uplink'

const storageKey = 'hp-theme'

const isTheme = id => themes.some(theme => theme.id === id)

function stored () {
  try {
    return window.localStorage.getItem(storageKey)
  } catch {
    return null
  }
}

function fromUrl () {
  try {
    return new URLSearchParams(window.location.search).get('theme')
  } catch {
    return null
  }
}

// Which theme to show: ?theme= in the URL, then the viewer's last choice,
// then the game's own pick (its `theme` in src/games/index.js), then the default.
export function resolveTheme (gameTheme) {
  return [fromUrl(), stored(), gameTheme].find(isTheme) || defaultTheme
}

export const currentTheme = ref(defaultTheme)

export function applyTheme (id) {
  const theme = isTheme(id) ? id : defaultTheme

  currentTheme.value = theme
  document.documentElement.dataset.theme = theme

  return theme
}

export function setTheme (id) {
  const theme = applyTheme(id)

  try {
    window.localStorage.setItem(storageKey, theme)
  } catch {
    // Private windows can refuse storage; the theme still applies for this page.
  }

  return theme
}

export function cycleTheme () {
  const index = themes.findIndex(theme => theme.id === currentTheme.value)

  return setTheme(themes[(index + 1) % themes.length].id)
}
