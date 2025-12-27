<template lang="pug">
.elements-container.bg-gray-900.bg-opacity-90.p-2.border.border-cyan-900.h-full.flex.flex-col.shadow-lg.shadow-cyan-900_20
  h3.text-cyan-400.uppercase.tracking-widest.text-xs.font-bold.border-b.border-cyan-900.mb-2.pb-1 Elements
  .flex.flex-col.gap-1.flex-1.overflow-y-auto
    slot

  // Lightbox
  .fixed.inset-0.z-50.flex.items-center.justify-center.bg-black.bg-opacity-75(
    v-if="activeElement"
    @click.self="close"
  )
    .bg-gray-800.p-6.rounded.max-w-4xl.w-full.max-h-screen.overflow-y-auto.text-white
      .flex.justify-between.items-center.mb-4
        h2.text-2xl.font-bold {{ activeElement.label }}
        button.text-gray-400.hover_text-white.text-2xl(@click="close") ✕
      .markdown-body(v-html="activeContent")
</template>

<script>
import { ref, provide, readonly } from 'vue'
import { marked } from 'marked'

export default {
  name: 'ElementsContainer',
  setup () {
    const activeElement = ref(null)
    const activeContent = ref('')

    const openElement = async (element) => {
      activeElement.value = element
      try {
        const response = await fetch(element.src)
        const text = await response.text()
        activeContent.value = marked(text)
      } catch (e) {
        activeContent.value = 'Error loading content.'
      }
    }

    const close = () => {
      activeElement.value = null
      activeContent.value = ''
    }

    provide('openElement', openElement)

    return { activeElement, activeContent, close }
  }
}
</script>

<style>
.markdown-body {
  color: #e5e7eb;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.8rem; /* Even smaller, document-dense */
  line-height: 1.5;
  text-align: left;
}
.markdown-body h1 {
  display: none;
}
.markdown-body h2 {
  @apply text-xl font-bold mb-3 mt-6;
  color: #a78bfa; /* purple-400 */
}
.markdown-body p {
  @apply mb-4 leading-relaxed;
}
.markdown-body ul {
  @apply list-disc list-outside mb-4 ml-6;
}
.markdown-body li {
  @apply mb-1;
}
.markdown-body strong {
  @apply text-cyan-200;
}
</style>
