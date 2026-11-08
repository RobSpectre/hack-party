<template lang="pug">
.hp-board.bg-white.shadow-sm.overflow-hidden.mt-5.mx-20(class='sm:rounded-md' v-if='getPlayersByScore.length > 0')
  .hp-board-head.bg-green.px-2.py-2.border-b.border-gray-200(class='sm:px-6')
    .-ml-2.-mt-1.flex.items-center.justify-between.flex-wrap(class='sm:flex-no-wrap')
      .ml-2.mt-1
        span.reset-this.text-lg.leading-6.font-semibold.text-white
          | {{ stage ? copy.players : 'Players' }}
  div(v-for='player in getPlayersByScore')
    span.transition.duration-150.ease-in-out(class='hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50')
      .hp-board-row.bg-white
        .px-6.py-6.flex.items-center
          .flex-1(class='sm:flex sm:items-center sm:justify-between')
            .text-5xl.leading-5.font-medium
              | {{ player.name }}
            .flex.flex-row.mt-1(class='sm:mt-0')
              PointsController(:playerName='player.name')
              ScoreChip.inline-flex.items-center.px-2.py-4.rounded-full.text-4xl.text-white.font-semibold.leading-5.green(:value='player.score')
          .ml-5.flex-shrink-0
            div(v-on:click='removePlayer(player.name)')
              TrashIcon.h-10.w-10.text-slate-400(class='hover:text-slate-700')
</template>

<script>
import { mapGetters, mapActions } from 'pinia'
import { useGameStore } from '@/store'

import { TrashIcon } from '@heroicons/vue/24/solid'

import PointsController from '@/components/Players/PointsController.vue'
import ScoreChip from '@/components/Players/ScoreChip.vue'
import themed from '@/theme/mixin'

export default {
  name: 'DisplayPlayers',
  components: {
    TrashIcon,
    PointsController,
    ScoreChip
  },
  mixins: [themed],
  computed: {
    ...mapGetters(useGameStore, ['getPlayersByScore'])
  },
  methods: {
    ...mapActions(useGameStore, ['removePlayer'])
  }
}
</script>
