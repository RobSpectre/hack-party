<template lang="pug">
.hp-boot
  ol.hp-boot-log(aria-hidden='true')
    li(v-for='(line, index) in log' :key='line[0]' :style='{ animationDelay: `${index * 140}ms` }')
      span {{ line[0] }}
      span.hp-boot-ok {{ line[1] }}
  h2.hp-boot-title
    Wordmark(size='large' :decryptAfter='620')
  p.hp-boot-tagline Broadcasting live from the year 2387
</template>

<script>
import Wordmark from '@/components/base/Wordmark.vue'

// Uplink's opening: the show's computer boots, then the wordmark decrypts.
export default {
  name: 'TitleBoot',
  components: {
    Wordmark
  },
  data () {
    return {
      log: [
        ['POST', 'ok'],
        ['mount /dev/party', 'ok'],
        ['uplink 1337/tcp', 'established'],
        ['contestants', 'standing by']
      ]
    }
  }
}
</script>

<style lang="scss">
.hp-boot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 48px 56px 44px;
  border-radius: 18px;
  background: rgb(16 12 36 / 0.78);
  backdrop-filter: blur(12px);
  box-shadow: 0 40px 80px -30px rgb(4 2 14 / 0.9);
  font-size: 16px;
  text-align: left;
}

.reveal .hp-boot-log,
.hp-boot-log {
  display: grid !important;
  gap: 4px;
  margin: 0 !important;
  padding: 0;
  list-style: none;
  font-family: var(--hp-font-data);
  font-size: clamp(13px, 1.05vw, 20px);
  color: var(--hp-muted);

  li {
    display: flex;
    gap: 1.2em;
    justify-content: space-between;
    min-width: 26ch;
    animation: hp-boot-line 1ms steps(1, end) both;
  }
}

.hp-boot-ok {
  color: var(--hp-lime);
}

.reveal .hp-boot-title,
.hp-boot-title {
  margin: 0;
  line-height: 1;
  text-transform: none;
}

.hp-boot-tagline {
  margin: 0;
  font-family: var(--hp-font-body);
  font-size: clamp(18px, 1.6vw, 30px);
  letter-spacing: 0.01em;
  color: var(--hp-muted);
  animation: hp-boot-rise 700ms var(--hp-ease) 1500ms both;
}

@keyframes hp-boot-line {
  from {
    visibility: hidden;
  }
}

@keyframes hp-boot-rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hp-boot-log li,
  .hp-boot-tagline {
    animation: none;
  }
}
</style>
