<template lang="pug">
.games-index.min-h-screen.w-full.bg-darkgray.text-white.p-12
  img.mx-auto.mb-12.h-24(src='/images/hackparty_logo.png' alt='hack.party')
  ul.games-list.mx-auto.max-w-3xl.space-y-4
    li(v-for='game in games' :key='game.slug')
      //- A full page load per game keeps each game's reveal.js deck and
      //- global styles from leaking into the next one.
      a.game-link.flex.items-baseline.justify-between.rounded-lg.bg-blue.px-6.py-4.text-3xl(
        :href='`/${game.slug}`'
        class='hover:bg-orange'
      )
        span {{ game.title }}
        span.text-xl.opacity-75 {{ game.date }}
</template>

<script>
import games from '@/games'

export default {
  name: 'GamesIndex',
  data () {
    return {
      games
    }
  }
}
</script>
