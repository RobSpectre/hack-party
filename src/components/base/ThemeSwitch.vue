<template lang="pug">
.hp-theme-switch(role='radiogroup' aria-label='Theme')
  button(
    v-for='theme in themes'
    :key='theme.id'
    type='button'
    role='radio'
    :aria-checked='String(theme.id === current)'
    :title='theme.description'
    @click='choose(theme.id)'
  ) {{ theme.name }}
</template>

<script>
import { themes, currentTheme, setTheme } from '@/theme'

export default {
  name: 'ThemeSwitch',
  data () {
    return {
      themes
    }
  },
  computed: {
    current () {
      return currentTheme.value
    }
  },
  methods: {
    choose (id) {
      setTheme(id)
    }
  }
}
</script>

<style lang="scss">
.hp-theme-switch {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: rgb(0 0 0 / 0.25);
  font-size: 14px;

  button {
    padding: 6px 14px;
    border-radius: 999px;
    font-weight: 700;
    color: inherit;
    opacity: 0.75;
    transition: background-color 150ms ease-out, color 150ms ease-out, opacity 150ms ease-out;
  }

  button:hover {
    opacity: 1;
  }

  button[aria-checked='true'] {
    background: #fff;
    color: #232323;
    opacity: 1;
  }
}

:root[data-theme='uplink'] .hp-theme-switch {
  background: var(--hp-panel);
  box-shadow: inset 0 0 0 1px var(--hp-rule);
  font-family: var(--hp-font-data);
  font-size: 13px;
  letter-spacing: 0.04em;

  button {
    color: var(--hp-muted);
    opacity: 1;
  }

  button:hover {
    color: var(--hp-fg);
  }

  button[aria-checked='true'] {
    background: var(--hp-signal);
    color: var(--hp-ink);
  }
}
</style>
