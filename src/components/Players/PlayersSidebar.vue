<template lang='pug'>
.hidden(class='md:flex md:flex-shrink-0')
  .hp-rail.flex.flex-col.w-64
    .hp-rail-head.flex.h-24.py-4.green
      h2.hp-rail-title(v-if='uplink') Scoreboard
      img.px-3(v-else src='/images/hackparty_logo.png')
    .h-0.flex-1.flex.flex-col.overflow-hidden
      nav.hp-rail-list.flex-1.px-2.py-4.bg-gray-800
        .hp-rail-row.mt-1.group.flex.items-center.px-2.py-2.text-base.leading-6.font-medium.rounded-md.text-white.transition.ease-in-out.duration-150(v-for='player in players' :key='player.name' class='hover:text-white hover:bg-gray-700 focus:outline-hidden focus:text-white focus:bg-gray-700')
          .hp-rail-name.font-semibold.text-3xl.w-48 {{ player.name }}
          PointsController(
            :playerName='player.name'
            :darkBackground='true'
          )
          ScoreChip.inline-flex.items-center.px-3.py-2.rounded-full.text-sm.font-medium.leading-5.text-3xl.green(:value='player.value')
</template>

<script>
import PointsController from '@/components/Players/PointsController.vue'
import ScoreChip from '@/components/Players/ScoreChip.vue'
import themed from '@/theme/mixin'

export default {
  name: 'PlayersSidebar',
  components: {
    PointsController,
    ScoreChip
  },
  mixins: [themed],
  props: {
    players: {
      type: Array,
      default: undefined
    }
  }
}
</script>
