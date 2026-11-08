import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

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
      // is fetched on demand (npm run media), so it may not be on disk.
      transformAssetUrls: { includeAbsolute: false }
    }
  })],
  // The vendored vue-advanced-chat build is CommonJS outside node_modules,
  // so tell Vite to convert it like a regular dependency.
  optimizeDeps: {
    include: ['vue-advanced-chat']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /vendor\/vue-advanced-chat/]
    }
  },
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
