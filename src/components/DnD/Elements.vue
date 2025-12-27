<template lang="pug">
.elements-container.bg-gray-700.p-4.rounded.border.border-gray-600.h-full.flex.flex-col
  h3.text-xl.font-bold.mb-2 Elements
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
  font-size: 0.875rem; /* text-sm */
}
.markdown-body h1 {
  @apply text-xl font-bold mb-2 border-b border-gray-600 pb-1;
}
.markdown-body h2 {
  @apply text-lg font-bold mb-2 mt-4;
}
.markdown-body p {
  @apply mb-2;
}
.markdown-body ul {
  @apply list-disc list-inside mb-2;
}
.markdown-body li {
  @apply mb-0.5;
}
</style>
