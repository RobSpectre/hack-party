<template lang="pug">
.element-card.bg-black.border.border-gray-700.hover_border-cyan-500.hover_shadow-lg.hover_shadow-cyan-500_20.p-2.rounded-sm.cursor-pointer.flex.items-center.justify-center.text-center.transition-all.text-xs.text-cyan-300(
  @click="handleClick"
)
  span.font-mono.tracking-wider {{ label }}
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'ElementCard',
  props: {
    label: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const openElement = inject('openElement')

    const handleClick = () => {
      openElement({ label: props.label, src: props.src })
    }

    return { handleClick }
  }
}
</script>
