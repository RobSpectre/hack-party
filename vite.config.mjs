import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import gameMedia from './scripts/vite-plugin-game-media.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  plugins: [vue({
    template: {
      // Leave /images/... and other public URLs as plain strings. Game media
      // is fetched on demand, so it may not be on disk.
      transformAssetUrls: { includeAbsolute: false },
      compilerOptions: {
        // vue-advanced-chat 2.x ships as web components.
        isCustomElement: tag => tag === 'vue-advanced-chat' || tag === 'emoji-picker'
      }
    }
  }), gameMedia()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['fake-indexeddb/auto', './tests/setup.js'],
    include: ['tests/unit/**/*.spec.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,vue}'],
      reporter: ['html', 'text-summary', 'json']
    }
  }
})
