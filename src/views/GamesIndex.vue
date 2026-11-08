<template lang="pug">
//- Uplink: the channel guide.
.games-index.hp-guide(v-if='uplink')
  header.hp-guide-masthead
    .hp-guide-brand
      h1.hp-guide-wordmark
        Wordmark(size='large' :decryptAfter='150')
      p.hp-guide-tagline Quarantine friendly party games where everyone is welcome and anyone can play.
    .hp-guide-tools
      ThemeSwitch
      span.hp-guide-hint
        kbd Shift
        | +
        kbd T

  //- A full page load per game keeps each game's reveal.js deck and global
  //- styles from leaking into the next one.
  a.hp-feature(v-if='featured' :href='`/${featured.slug}`')
    span.hp-feature-meta
      span.hp-live-dot
      | Up next · CH {{ channel(0) }} · {{ featured.date }}
    span.hp-feature-title {{ featured.title }}
    span.hp-feature-cta
      | Tune in
      ArrowRightIcon.hp-feature-arrow

  section.hp-guide-listing(aria-labelledby='guide-heading')
    .hp-guide-bar
      h2#guide-heading.hp-guide-heading Channel guide
      label.hp-grep
        span.hp-grep-sigil(aria-hidden='true') $ grep -i
        input(
          v-model='query'
          type='search'
          placeholder='title'
          aria-label='Filter games by title'
          spellcheck='false'
          autocomplete='off'
        )
        span.hp-grep-count {{ matched.length }} / {{ games.length }}

    template(v-for='group in groups' :key='group.year')
      h3.hp-guide-year {{ group.year }}
      ul.hp-guide-list
        li(v-for='game in group.games' :key='game.slug' :style='{ "--i": game.order }')
          a.game-link(:href='`/${game.slug}`')
            span.hp-ch CH {{ channel(game.index) }}
            span.hp-title {{ game.title }}
            span.hp-date {{ game.date }}
            ArrowRightIcon.hp-arrow(aria-hidden='true')

    p.hp-guide-empty(v-if='matched.length === 0')
      | grep: no game matches “{{ query }}”. Exit 1.

  footer.hp-guide-footer
    p Lovingly crafted in the greatest city in the world, New York.

//- Classic: the original list.
.games-index.min-h-screen.w-full.bg-darkgray.text-white.p-12.relative(v-else)
  .absolute.top-6.right-6
    ThemeSwitch
  img.mx-auto.mb-12.h-24(src='/images/hackparty_logo.png' alt='hack.party')
  ul.games-list.mx-auto.max-w-3xl.space-y-4
    li(v-for='game in games' :key='game.slug')
      a.game-link.flex.items-baseline.justify-between.rounded-lg.bg-blue.px-6.py-4.text-3xl(
        :href='`/${game.slug}`'
        class='hover:bg-orange'
      )
        span {{ game.title }}
        span.text-xl.opacity-75 {{ game.date }}
</template>

<script>
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

import games from '@/games'
import themed from '@/theme/mixin'

import ThemeSwitch from '@/components/base/ThemeSwitch.vue'
import Wordmark from '@/components/base/Wordmark.vue'

export default {
  name: 'GamesIndex',
  components: {
    ArrowRightIcon,
    ThemeSwitch,
    Wordmark
  },
  mixins: [themed],
  data () {
    return {
      games,
      query: ''
    }
  },
  computed: {
    featured () {
      return this.games[0]
    },
    matched () {
      const query = this.query.trim().toLowerCase()

      return this.games
        .map((game, index) => ({ ...game, index }))
        .filter(game => game.title.toLowerCase().includes(query))
    },
    groups () {
      const groups = []

      this.matched.forEach((game, order) => {
        const year = game.date.slice(0, 4)
        let group = groups.find(g => g.year === year)

        if (!group) {
          group = { year, games: [] }
          groups.push(group)
        }

        group.games.push({ ...game, order: Math.min(order, 14) })
      })

      return groups
    }
  },
  methods: {
    // Newest game gets the highest channel.
    channel (index) {
      return String(this.games.length - index).padStart(3, '0')
    }
  }
}
</script>

<style lang="scss">
.hp-guide {
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 40px 40px;
  color: var(--hp-fg);
  font-family: var(--hp-font-body);
  font-size: 18px;
}

.hp-guide-masthead {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 40px;
  margin-bottom: 56px;
}

.hp-guide-wordmark {
  margin: 0;
}

.hp-guide-tagline {
  margin: 18px 0 0;
  max-width: 46ch;
  font-size: 20px;
  line-height: 1.45;
  color: var(--hp-muted);
}

.hp-guide-tools {
  display: flex;
  align-items: center;
  gap: 14px;
}

.hp-guide-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--hp-font-data);
  font-size: 12px;
  color: var(--hp-dim);

  kbd {
    padding: 2px 6px;
    border-radius: 6px;
    font-family: inherit;
    color: var(--hp-muted);
    background: var(--hp-panel);
    box-shadow: inset 0 -2px 0 var(--hp-rule);
  }
}

// The next show, billed like one.
.hp-feature {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 18px 32px;
  padding: 36px 40px 40px;
  margin-bottom: 64px;
  overflow: hidden;
  border-radius: 18px;
  background:
    radial-gradient(ellipse 70% 120% at 0% 0%, rgb(51 70 240 / 0.45), transparent 70%),
    var(--hp-panel);
  box-shadow: var(--hp-shadow);
  color: var(--hp-fg);
  text-decoration: none;
  animation: hp-guide-rise 700ms var(--hp-ease) 250ms both;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 8px;
    background: var(--hp-bars);
    transform: scaleX(0);
    transform-origin: left;
    animation: hp-guide-bars 900ms var(--hp-ease) 450ms forwards;
  }

  &:hover .hp-feature-cta,
  &:focus-visible .hp-feature-cta {
    background: var(--hp-fg);
  }

  &:hover .hp-feature-arrow {
    transform: translateX(4px);
  }
}

.hp-feature-meta {
  grid-column: 1 / -1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--hp-font-data);
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hp-muted);

  .hp-live-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--hp-red);
  }
}

.hp-feature-title {
  font-family: var(--hp-font-display);
  font-size: clamp(36px, 5.4vw, 72px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.hp-feature-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  background: var(--hp-signal);
  color: var(--hp-ink);
  font-weight: 800;
  font-size: 18px;
  white-space: nowrap;
  transition: background-color 150ms var(--hp-ease);
}

.hp-feature-arrow {
  width: 22px;
  height: 22px;
  transition: transform 150ms var(--hp-ease);
}

.hp-guide-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  margin-bottom: 8px;
}

.hp-guide-heading {
  margin: 0;
  font-family: var(--hp-font-display);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hp-grep {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: min(100%, 420px);
  padding: 10px 14px;
  border-radius: 12px;
  background: var(--hp-ink-2);
  box-shadow: inset 0 0 0 1px var(--hp-rule);
  font-family: var(--hp-font-data);
  font-size: 15px;
  transition: box-shadow 150ms var(--hp-ease);

  &:focus-within {
    box-shadow: inset 0 0 0 2px var(--hp-signal);
  }

  input {
    flex: 1;
    min-width: 0;
    background: transparent;
    color: var(--hp-fg);
    font: inherit;
    outline: none;
  }

  input::placeholder {
    color: var(--hp-dim);
  }

  input::-webkit-search-cancel-button {
    filter: invert(1);
  }
}

.hp-grep-sigil {
  color: var(--hp-lime);
  white-space: nowrap;
}

.hp-grep-count {
  color: var(--hp-dim);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.hp-guide-year {
  margin: 40px 0 10px;
  font-family: var(--hp-font-data);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--hp-signal);
}

.hp-guide-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    animation: hp-guide-rise 450ms var(--hp-ease) both;
    animation-delay: calc(400ms + var(--i, 0) * 22ms);
  }

  li + li {
    box-shadow: 0 -1px 0 var(--hp-rule);
  }
}

.hp-guide-list .game-link {
  display: grid;
  grid-template-columns: 76px 1fr auto 24px;
  align-items: center;
  gap: 20px;
  padding: 16px 16px;
  border-radius: 12px;
  color: var(--hp-fg);
  text-decoration: none;
  transition: background-color 150ms var(--hp-ease);

  &:hover,
  &:focus-visible {
    background: var(--hp-panel);

    .hp-ch {
      color: var(--hp-signal);
    }

    .hp-arrow {
      opacity: 1;
      transform: none;
    }
  }
}

.hp-ch,
.hp-date {
  font-family: var(--hp-font-data);
  font-size: 14px;
  color: var(--hp-dim);
  font-variant-numeric: tabular-nums;
  transition: color 150ms var(--hp-ease);
}

.hp-date {
  color: var(--hp-muted);
}

.hp-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
}

.hp-arrow {
  width: 20px;
  height: 20px;
  color: var(--hp-signal);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 150ms var(--hp-ease), transform 150ms var(--hp-ease);
}

.hp-guide-empty {
  margin: 32px 0;
  font-family: var(--hp-font-data);
  color: var(--hp-magenta);
}

.hp-guide-footer {
  margin-top: 72px;
  padding-top: 24px;
  box-shadow: 0 -1px 0 var(--hp-rule);
  font-size: 15px;
  color: var(--hp-dim);
}

@keyframes hp-guide-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes hp-guide-bars {
  to {
    transform: scaleX(1);
  }
}

@media (max-width: 640px) {
  .hp-guide {
    padding: 32px 16px;
    font-size: 16px;
  }

  .hp-guide-masthead {
    margin-bottom: 36px;
  }

  .hp-guide-tagline {
    font-size: 17px;
  }

  .hp-guide-hint {
    display: none;
  }

  .hp-feature {
    grid-template-columns: 1fr;
    padding: 28px 22px 24px;
    margin-bottom: 44px;
  }

  .hp-feature-cta {
    justify-self: start;
  }

  .hp-guide-list .game-link {
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    padding: 14px 8px;
  }

  .hp-guide-list .hp-ch {
    grid-row: 1;
  }

  .hp-guide-list .hp-title {
    grid-column: 1 / -1;
    grid-row: 2;
    font-size: 19px;
  }

  .hp-guide-list .hp-date {
    grid-row: 1;
    grid-column: 2;
  }

  .hp-arrow {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hp-feature,
  .hp-guide-list li {
    animation: hp-guide-fade 150ms linear both;
  }

  .hp-feature::before {
    animation: none;
    transform: none;
  }
}

@keyframes hp-guide-fade {
  from {
    opacity: 0;
  }
}
</style>
