import { currentTheme, themeById } from '@/theme'

// Components that look different on stage themes mix this in. `stage` is
// true for every theme but Classic; `theme` holds the active theme's words.
export default {
  computed: {
    theme () {
      return themeById(currentTheme.value)
    },
    stage () {
      return this.theme.stage
    },
    copy () {
      return this.theme.copy
    }
  }
}
