<template lang="pug">
#app(class='flex flex-col')
  router-view
</template>

<script>
import { cycleTheme } from '@/theme'

export default {
  name: 'HackParty',
  mounted () {
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount () {
    window.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    // Shift+T flips between themes, unless someone is typing.
    onKeydown (event) {
      const typing = event.target.closest && event.target.closest('input, textarea, select, [contenteditable]')

      if (event.shiftKey && !event.metaKey && !event.ctrlKey && !event.altKey &&
          event.key === 'T' && !typing) {
        cycleTheme()
      }
    }
  }
}
</script>
