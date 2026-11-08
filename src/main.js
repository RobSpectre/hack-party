import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import '@/assets/styles/reveal_theme.scss'
import '@/assets/styles/emoji-fix.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(router).use(pinia)

app.use(Vue3Toastify, { position: 'top-right', theme: 'colored' })

app.mount('#app')
