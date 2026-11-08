<template lang="pug">
//- Uplink: the channel guide.
.games-index.hp-guide(v-if='stage')
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
      | {{ copy.upNext }} · {{ copy.channelPrefix }} {{ channel(0) }} · {{ featured.date }}
    span.hp-feature-title {{ featured.title }}
    span.hp-feature-cta
      | {{ copy.tuneIn }}
      ArrowRightIcon.hp-feature-arrow

  section.hp-guide-listing(aria-labelledby='guide-heading')
    .hp-guide-bar
      h2#guide-heading.hp-guide-heading {{ copy.guide }}
      label.hp-grep
        span.hp-grep-sigil(aria-hidden='true') {{ copy.filter }}
        input(
          v-model='query'
          type='search'
          :placeholder='copy.filterPlaceholder'
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
            span.hp-ch {{ copy.channelPrefix }} {{ channel(game.index) }}
            span.hp-title {{ game.title }}
            span.hp-date {{ game.date }}
            ArrowRightIcon.hp-arrow(aria-hidden='true')

    p.hp-guide-empty(v-if='matched.length === 0') {{ copy.empty.replace('{query}', query) }}

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

