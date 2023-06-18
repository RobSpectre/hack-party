<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/cartoon_criminals_full.png')
      .title Cartoon Criminals
    Slide
      h2.fragment Solo
      h2.fragment Presented with the mugshot of a cartoon character
      h2.fragment Guess the crime for which the character was charged
      h2.fragment Closest (according to Science) wins
      h2.fragment Guessing the exact crime is double points!
      h1 Game Play
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/spongebob_willfully_retaining_top_secret_government_documents.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to willfully retaining top secret government documents'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/bugs_bunny_running_a_cryptocurrency_ponzi_scheme.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to running a cryptocurrency ponzi scheme'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/popeye_violating_sanctions_by_selling_russia_computer_chips.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to violating sanctions by selling Russia computer chips'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/fred_flintstone_selling_counterfeit_baseball_memorabilia.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to selling counterfeit baseball memorabilia'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/pink_panther_failing_to_register_as_an_agent_for_a_foreign_intelligence_service.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to failing to register as an agent of a foreign intelligence service.'
      :prize='1'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/maga_rap.mp4')
      .bossfight Over / Under In Magaverse
    Slide
      h2.fragment Solo
      h2.fragment MAGA Personality
      h2.fragment Who has the better rating on Cameo?
      h2.fragment Contrarian bonus in effect!
      h1 Game Play
    WhichIsWhichRound(
      :items='round_one'
      :winnerIndex='round_one[0].value > round_one[1].value ? 0 : 1'
      question='Who has the higher rating on Cameo?'
      headerImage='/images/header_space.png'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/aliens.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/homer_simpson_rustling_cattle.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to rustling cattle'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/charlie_brown_piracy_on_the_high_seas.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to piracy on the high seas'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/rick_sanchez_impersonating_a_police_officer.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to impersonating a police officer'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/stewie_griffin_distributing_meth_in_monster_energy_drinks.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to distributing meth in Monster Energy drinks'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/carl_fredricksen_doing_a_hit_and_run.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to doing a hit and run'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/maga_rap.mp4')
      .bossfight Over / Under In Magaverse
    WhichIsWhichRound(
      :items='round_two'
      :winnerIndex='round_two[0].value > round_two[1].value ? 0 : 1'
      question='Who has the higher rating on Cameo?'
      headerImage='/images/header_space.png'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/calm_down.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/shrek_ostrich_beastiality.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to ostrich beastiality, allegedlys'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/elsa_murdering_the_mascot_at_a_chiefs_game.png')
    ChooseWinner(
      headerImage='/images/cartoon_criminals_header.png'
      winnerSuffix='was closest to murdering the mascot at a Chiefs game'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/beavis_operating_an_unlicensed_distillery.png')
    ChooseWinner(
      headerImage='/images/cartoon-criminals-header.png'
      winnerSuffix='was closest to operating an unlicensed distillery'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/woody_running_a_torrent_website.png')
    ChooseWinner(
      headerImage='/images/cartoon-criminals-header.png'
      winnerSuffix='was closest to running a torrent website'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/eric_cartman_treason_and_sedition.png')
    ChooseWinner(
      headerImage='/images/cartoon-criminals-header.png'
      winnerSuffix='was closest to treason and sedition'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/maga_rap.mp4')
      .bossfight Over / Under In Magaverse
    WhichIsWhichRound(
      :items='round_three'
      :winnerIndex='round_three[0].value > round_three[1].value ? 0 : 1'
      question='Who has the higher rating on Cameo?'
      headerImage='/images/header_space.png'
      :prize='10'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import ChooseWinner from '@/components/Players/ChooseWinner.vue'

import WhichIsWhichRound from '@/components/WhichIsWhich/WhichIsWhichRound.vue'

export default {
  name: 'Home',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    GameContentWithSidebar,
    ChooseWinner,
    WhichIsWhichRound
  },
  data () {
    return {
      round_one: [
        {
          name: 'Rudy Guiliani',
          hints: ["Donald Trump's personal lawyer", 'Known for his stunning press conferences', 'Former mayor of New York'],
          value: 4.68,
          image: 'https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=800,height=800/https://cdn.cameo.com/resizer/~Y8fbmY_B_RWGHeadshot.jpg',
          emoji: '💄️'
        },
        {
          name: 'Michael Cohen',
          hints: ["Donald Trump's personal lawyer", 'Known for his stunning press conferences', 'Said he would take a bullet for Trump'],
          value: 4.99,
          image: 'https://www.cameo.com/cdn-cgi/image/format=auto,width=800,height=800/https://cdn.cameo.com/resizer/8CaAARC31_avatar-iXH3TtDW_.jpg',
          emoji: '🚅️'
        }
      ],
      round_two: [
        {
          name: 'Roger Stone',
          hints: ["Donald Trump's personal advisor", 'Known for his stunning crimes', 'Tattoo of Richard Nixon on his back'],
          value: 4.87,
          image: 'https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=800,height=800/https://cdn.cameo.com/resizer/knMwUsX7P_BD0A7F27-C051-42B7-AB85-C74430D8F7C1.jpeg',
          emoji: '🕵️'
        },
        {
          name: 'Anthony Scaramucci',
          hints: ["Donald Trump's personal advisor", 'Known for his stunning crimes', 'After the White House, he got deep into FTX'],
          value: 4.85,
          image: 'https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=800,height=800/https://cdn.cameo.com/resizer/avatar-Ukk6mnYcw.jpg',
          emoji: '💱️'
        }
      ],
      round_three: [
        {
          name: 'George Papadopoulos',
          hints: ["Donald Trump's National Security Advisor", 'Known for his relationship with Russia', 'Plead guilty for lying to the FBI'],
          value: 3.67,
          image: 'https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=800,height=800/https://cdn.cameo.com/resizer/KkvUqR78b_zoS_UMCp-F26F4AF2-AFD0-4A8C-BFE8-E5F26430ACC1.jpg',
          emoji: '🇷🇺️'
        },
        {
          name: 'Michael Flynn',
          hints: ["Donald Trump's National Security Advisor", 'Known for his relationship with Russia', 'Plead guilty for lying to the FBI'],
          value: 5.00,
          image: 'https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=800,height=800/https://cdn.cameo.com/resizer/Oc5BBnU96Y_avatar-1683578116274.jpg',
          emoji: '🎖️'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Black+Ops+One&family=Bruno+Ace&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Black Ops One', cursive !important;
  @apply mt-36 origin-bottom-right skew-x-6 skew-y-6 text-9xl text-rose-600 text-shadow-lg tracking-tight shadow-black #{!important};
}

.bossfight {
  font-family: 'Bruno Ace', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
