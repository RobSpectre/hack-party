<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/games/vegas-gp/video/money.mp4')
    VideoSlide(background='/games/vegas-gp/video/costcap.mp4')
    VideoSlide(background='/games/vegas-gp/video/money.mp4')
      h2.title Costcappening
    Slide
      h2.fragment Solo
      h2.fragment Presented with a component of a Formula 1 car
      h2.fragment Guess how many thousands of $$$ it costs
      h2.fragment Price is Right rules
      h2.fragment Exact number gets 2x points!
      h1 Game Play
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Steering Wheel'
      hint1='F2 and F3 drivers say this part of the car is the hardest to understand'
      hint2='11 buttons, 9 dials and a LCD screen'
      hint3='Custom molded to the hands of each driver'
      image='/games/vegas-gp/images/steering_wheel.png'
      question='How much does this component cost (in thousands USD)?'
      :price='70'
    )
    CameoPriceIsRightRound(
      celebrity='Rear Wing'
      hint1='One of the most expensive Listed Team Components'
      hint2='Manufactured entirely of ultra light carbon fiber with tolerances in mm'
      hint3='Most $$$ sponsorship spot on the car'
      image='/games/vegas-gp/images/rear_wing.png'
      question='How much does this component cost (in thousands USD)?'
      :price='130'
    )
    CameoPriceIsRightRound(
      celebrity='Hydraulics'
      hint1="Essential system that caused Leclerc's DNS this season"
      hint2='Controls brakes, throttle, clutch, diff, wastegate and DRS'
      hint3='One actuator dies, whole system is inoperable'
      image='/games/vegas-gp/images/MT_Hydraulics_actuators.jpg'
      question='How much does this component cost (in thousands USD)?'
      :price='200'
    )
    CameoPriceIsRightRound(
      celebrity='Four Tires'
      hint1='These you never hear about on DTS and almost only hear about during a race'
      hint2='Teams get 13 sets of these for each race and must use two compounds during the race'
      hint3="The Ferrari pit crew act like they've seen these for the first time every race"
      image='/games/vegas-gp/images/tires.png'
      question='How much does this component cost (in thousands USD)?'
      :price='5'
    )
    CameoPriceIsRightRound(
      celebrity='Power Unit'
      hint1='Most complex element of the car'
      hint2='ICE, Turbo, MGU-H, MGU-K, Battery and ECU'
      hint3='The primary load bearing element of the car'
      image='/games/vegas-gp/images/powerunit.png'
      question='How much does this component cost (in thousands USD)?'
      :price='11000'
    )
    VideoSlide(background='/games/vegas-gp/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/vegas-gp/video/drive_to_survive_cut.mp4')
    VideoSlide(background='/games/vegas-gp/video/drive_to_survive_cut.mp4')
      .lightsout Lights Out, and away we go!
    Slide
      h2.fragment Solo
      h2.fragment Reproduction of Formula 1 light system
      h2.fragment Five lights go on...
      h2.fragment A random delay between 0.2 and 3 seconds occurs...
      h2.fragment Press the button!
      h2.fragment Sprint points stylee
      h2.fragment Jump == DSQ
      h1 Game Play
    VideoSlide(
      background='/games/vegas-gp/video/you_get_nothing.mp4'
      :muted='false'
    )
    LightsOutRound
    PlayerBoard
    VideoSlide(
      background='/games/vegas-gp/video/conor.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class="green")
      h2.text-white Points are 2X!
    VideoSlide(background='/games/vegas-gp/video/toto_cut.mp4')
    VideoSlide(background='/games/vegas-gp/video/toto_cut.mp4')
      .steward Monday Morning Steward
    Slide
      h2.fragment Solo
      h2.fragment Presented with an incident
      h2.fragment Guess the verdict from the stewards
      h2.fragment Contrarian bonus is in effect
      h1 Game Play
    VideoSlide(
      background='/games/vegas-gp/video/canada_gp_2019_cut.mp4'
      :muted='false'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/vegas-gp/images/steward_header.webp'
      question="What was the stewards' decision?"
      :prize='2'
      :fragmentItemReveal='true'
    )
    VideoSlide(
      background='/games/vegas-gp/video/mexico_gp_2016_cut.mp4'
      :muted='false'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/games/vegas-gp/images/steward_header.webp'
      question="What was the stewards' decision?"
      :prize='2'
    )
    VideoSlide(
      background='/games/vegas-gp/video/european_gp_1997_cut.mp4'
      :muted='false'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='5'
      denomination=''
      headerImage='/games/vegas-gp/images/steward_header.webp'
      question="What was the stewards' decision?"
      :prize='2'
    )
    VideoSlide(
      background='/games/vegas-gp/video/japanese_gp_1989_cut.mp4'
      :muted='false'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='5'
      denomination=''
      headerImage='/games/vegas-gp/images/steward_header.webp'
      question="What was the stewards' decision?"
      :prize='2'
    )
    VideoSlide(
      background='/games/vegas-gp/video/british_gp_2022_cut.mp4'
      :muted='false'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/vegas-gp/images/steward_header.webp'
      question="What was the stewards' decision?"
      :prize='2'
    )
    VideoSlide(background='/games/vegas-gp/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/vegas-gp/video/tennis_ball.mp4')
    VideoSlide(background='/games/vegas-gp/video/tennis_ball.mp4')
      .tennis The Gasly Test
    Slide
      h2.fragment Solo
      h2.fragment Two tennis balls
      h2.fragment Drop left, right or both
      h2.fragment Two points for every catch
      h2.fragment Drop and we stop
      h2.fragment Max 10 catches
      h1 Game Play
    PlayerBoard
    VideoSlide(
      background='/games/vegas-gp/video/bunny_hop.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class="darkgray")
      h2.text-white Final Round
    Slide(class="green")
      h2.text-white Points are 3X!
    VideoSlide(background='/games/vegas-gp/video/f1_engines_cut.mp4')
    VideoSlide(background='/games/vegas-gp/video/f1_engines_cut.mp4')
      .engines No Replacement for Displacement
    Slide
      h2.fragment Solo
      h2.fragment Hear a Ferrari
      h2.fragment Guess the cylinder count of the engine
      h2.fragment Contrarian bonus is in effect
      h1 Game Play
    AudioChoiceRound(
      src='/games/vegas-gp/sounds/v8.mp3'
      :items='engines'
      :winnerIndex='1'
      :prize='3'
      question='Which engine made this noise?'
      headerImage='/games/vegas-gp/images/engine_header.webp'
      :fragmentItemReveal='true'
    )
    AudioChoiceRound(
      src='/games/vegas-gp/sounds/v12.mp3'
      :items='engines'
      :winnerIndex='3'
      :prize='3'
      question='Which engine made this noise?'
      headerImage='/games/vegas-gp/images/engine_header.webp'
    )
    AudioChoiceRound(
      src='/games/vegas-gp/sounds/v6_turbo.mp3'
      :items='engines'
      :winnerIndex='0'
      :prize='3'
      question='Which engine made this noise?'
      headerImage='/games/vegas-gp/images/engine_header.webp'
    )
    AudioChoiceRound(
      src='/games/vegas-gp/sounds/v8_start.mp3'
      :items='engines'
      :winnerIndex='1'
      :prize='3'
      question='Which engine made this noise?'
      headerImage='/games/vegas-gp/images/engine_header.webp'
    )
    AudioChoiceRound(
      src='/games/vegas-gp/sounds/v10.mp3'
      :items='engines'
      :winnerIndex='2'
      :prize='3'
      question='Which engine made this noise?'
      headerImage='/games/vegas-gp/images/engine_header.webp'
    )
    PlayerBoard
    VideoSlide(background='/games/vegas-gp/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb The Ladder
    Slide
      h2.fragment Solo
      h2.fragment Reverse grid
      h2.fragment 30 seconds
      h2.fragment Name every F1 driver you can...
      h2.fragment ...without repeating one already named
      h2.fragment Three points for every driver
      h1 Game Play
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/games/vegas-gp/images/ladder_header.webp'
      :prize='3'
    )
    PlayerBoard
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

import ClimbTheLadderRound from '@/components/ClimbTheLadder/ClimbTheLadderRound.vue'

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import AudioChoiceRound from '@/components/AudioChoice/AudioChoiceRound.vue'

// vegas-gp was played with an earlier LightsOutRound, kept here as-is
import LightsOutRound from './components/LightsOutRound.vue'

export default {
  name: 'VegasGpGame',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    CameoPriceIsRightRound,
    ClimbTheLadderRound,
    ItemGuess,
    AudioChoiceRound,
    LightsOutRound
  },
  data () {
    return {
      items: [
        { name: 'No further investigation', emoji: '😇️', value: ' the verdict' },
        { name: 'Five second penalty', emoji: '🕐️', value: ' the verdict' },
        { name: 'Ten second penalty', emoji: '🕑️', value: ' the verdict' },
        { name: 'Drivethrough penalty', emoji: '🚨️', value: ' the verdict' },
        { name: 'Stop-and-go penalty', emoji: '🛑️', value: ' the verdict' },
        { name: 'Disqualification', emoji: '🏴️', value: ' the verdict' }
      ],
      engines: [
        { name: 'V6 Turbo', emoji: '🥱️', value: ' the engine' },
        { name: 'V8', emoji: '😑️', value: ' the engine' },
        { name: 'V10', emoji: '🔥️', value: ' the engine' },
        { name: 'V12', emoji: '⛽️', value: ' the engine' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Faster+One&family=Press+Start+2P&family=Frederick+the+Great&family=Silkscreen&family=Zen+Dots&family=Monoton&display=swap');

.title {
  font-family: 'Silkscreen', cursive !important;
  @apply mt-48 text-6xl text-white #{!important};
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.tennis {
  font-family: 'Fredericka the Great', cursive !important;
  @apply mt-36 skew-x-6 skew-y-12 text-9xl text-white tracking-tight text-shadow shadow-black #{!important};
}

.steward {
  font-family: 'Zen Dots', cursive !important;
  @apply mt-72 skew-y-12 text-7xl text-white tracking-tight uppercase text-shadow shadow-black #{!important};
}

.engines {
  font-family: 'Monoton', cursive !important;
  @apply mt-72 text-7xl text-white tracking-tight uppercase text-shadow shadow-black #{!important};
}

.lightsout {
  font-family: 'Faster One', cursive !important;
  @apply mt-96 skew-x-6 skew-y-12 text-9xl text-white tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
