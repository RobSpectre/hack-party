import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import '@fontsource-variable/unbounded'
import '@fontsource-variable/atkinson-hyperlegible-next'
import '@fontsource-variable/jetbrains-mono'

import '@/assets/styles/themes/classic.css'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/reveal_theme.scss'
import '@/assets/styles/emoji-fix.css'
import '@/assets/styles/themes/uplink.scss'

import { applyTheme, resolveTheme } from '@/theme'

applyTheme(resolveTheme())
router.beforeEach(to => {
  applyTheme(resolveTheme(to.meta.theme))
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(router).use(pinia)

app.use(Vue3Toastify, { position: 'top-right', theme: 'colored' })

app.mount('#app')

// For whoever opens the dev tools at a party.
const banner = String.raw`
 _                _                       _
| |__   __ _  ___| | __  _ __   __ _ _ __| |_ _   _
| '_ \ / _' |/ __| |/ / | '_ \ / _' | '__| __| | | |
| | | | (_| | (__|   < _| |_) | (_| | |  | |_| |_| |
|_| |_|\__,_|\___|_|\_(_) .__/ \__,_|_|   \__|\__, |
                        |_|                    |___/`

console.log(`%c${banner}\n%cIf you can read this, you're one of us. Try the Konami code during a game.`,
  'color:#ffd23f;font-family:monospace', 'color:#45e3ff;font-family:monospace')
