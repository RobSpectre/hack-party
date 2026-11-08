<template lang="pug">
main.hp-404
  p.hp-404-status $ ./play {{ path }}
  h1.hp-404-code 404
  p.hp-404-message Game not found. Have you tried turning it off and on again?
  router-link.hp-404-link(to='/') Back to the channel guide
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
.hp-404 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
  font-family: var(--hp-font-body);
  color: var(--hp-text);
}

.hp-404-status {
  margin: 0;
  font-family: var(--hp-font-data, monospace);
  font-size: 16px;
  color: var(--hp-dim, var(--hp-darkgray));
  overflow-wrap: anywhere;
}

.hp-404 .hp-404-code {
  margin: 0;
  font-family: var(--hp-font-display);
  font-size: clamp(120px, 26vw, 320px);
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--hp-accent-text, var(--hp-accent, var(--hp-orange)));
}

.hp-404-message {
  margin: 0;
  max-width: 30ch;
  font-size: clamp(22px, 3vw, 36px);
  line-height: 1.25;
}

.hp-404-link {
  margin-top: 12px;
  padding: 12px 20px;
  border-radius: 12px;
  background: var(--hp-accent, var(--hp-blue));
  color: var(--hp-on-accent, #fff);
  font-weight: 800;
  text-decoration: none;
}
</style>
