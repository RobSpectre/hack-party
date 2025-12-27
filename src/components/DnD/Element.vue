<template lang="pug">
.element-card.bg-gray-800.hover_bg-gray-600.p-2.rounded.cursor-pointer.flex.items-center.justify-center.text-center.border.border-gray-500.transition-colors.text-xs(
  @click="handleClick"
)
  span.font-bold {{ label }}
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
