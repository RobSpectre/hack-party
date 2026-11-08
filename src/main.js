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
