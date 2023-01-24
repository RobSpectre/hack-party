<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/title_video_cut.mp4')
    VideoSlide(background='/video/title_video_cut.mp4')
      .title Two Lies and... another total lie(ish)
    Slide
      h2.fragment Solo
      h2.fragment You will be given three statements about George Santos
      h2.fragment Two are statements George Santos fabricated
      h2.fragment You pick the statement Santos did *not* lie about
      h2.fragment Contrarians get double!
      h1 Game Play
    PlayerBoard
    RandomTriviaRound(
      :wrongAnswers='round_one.wrongAnswers'
      :rightAnswers='round_one.rightAnswers'
      :answersLength='3'
      question='Which was not made up by George Santos?'
      denomination=''
      :fragmentItemReveal='true'
      headerImage='/images/santos_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/supergroup.mp4')
    VideoSlide(background='/video/supergroup.mp4')
      .nintendo Rockstar Recruiting with ChatGPT
    ItemMultiSelect(
      :items='vedder_and_cuomo'
      :winnerIndice='[1, 2]'
      :fragmentItemReveal='true'
      question='Who did ChatGPT pick to play bass and drums?'
      :prize='3'
      denomination=''
      headerImage='/images/vedder_and_cuomo.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/subtitles.mp4'
      :muted='false'
    )
    PlayerBoard
    RandomTriviaRound(
      :wrongAnswers='round_two.wrongAnswers'
      :rightAnswers='round_two.rightAnswers'
      :answersLength='3'
      question='Which was not made up by George Santos?'
      denomination=''
      :fragmentItemReveal='true'
      :prize='2'
      headerImage='/images/santos_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/supergroup.mp4')
      .nintendo Rockstar Recruiting with ChatGPT
    ItemMultiSelect(
      :items='bono_and_mills'
      :winnerIndice='[0, 3]'
      :fragmentItemReveal='true'
      question='Who did ChatGPT pick to play guitar and drums?'
      :prize='3'
      denomination=''
      headerImage='/images/bono_and_mike_mills.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/burgers.mp4'
      :muted='false'
    )
    PlayerBoard
    RandomTriviaRound(
      :wrongAnswers='round_three.wrongAnswers'
      :rightAnswers='round_three.rightAnswers'
      :answersLength='3'
      question='Which was not made up by George Santos?'
      denomination=''
      :fragmentItemReveal='true'
      :prize='3'
      headerImage='/images/santos_header.png'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/supergroup.mp4')
      .nintendo Rockstar Recruiting with ChatGPT
    ItemMultiSelect(
      :items='madonna_and_snoop_dogg'
      :winnerIndice='[0, 2]'
      :fragmentItemReveal='true'
      question='Who did ChatGPT pick to play bass and drums?'
      :prize='10'
      denomination=''
      headerImage='/images/madonna_and_snoop_dogg.png'
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

import RandomTriviaRound from '@/components/RandomTrivia/RandomTriviaRound.vue'

import ItemMultiSelect from '@/components/WhichIsWhich/ItemMultiSelect.vue'

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
    RandomTriviaRound,
    ItemMultiSelect
  },
  data () {
    return {
      round_one: {
        wrongAnswers: [
          { name: "George's ma was in Tower Seven on 9/11", emoji: '🏢️' },
          { name: 'George was mugged trying to pay back rent', emoji: '🤑️' },
          { name: "George's ma died on two different dates in 5 months", emoji: '☠️' },
          { name: 'George losts friends at the Pulse nightclub', emoji: '🌃️' },
          { name: 'George is an American Jew', emoji: '✡️' },
          { name: 'George is a real estate developer', emoji: '🏘️' },
          { name: "George's grandparents survived the Holocaust", emoji: '🇩🇪️' },
          { name: 'George ran a rescue kennel', emoji: '🙀️' },
          { name: 'George worked at Goldman Sachs', emoji: '🏦️' },
          { name: 'George worked at Citigroup', emoji: '🏦️' },
          { name: 'George went to Baruch College', emoji: '🏫️' },
          { name: 'George went to Horace Mann', emoji: '🎒️' }
        ],
        rightAnswers: [
          { name: 'George performed as a drag queen', emoji: '💃️', value: ' totally true' },
          { name: 'George worked at Lehman Brothers', emoji: '🏦️', value: ' something Rob made up' },
          { name: 'George has a blackbelt in BJJ', emoji: '🥋️', value: ' something Rob made up' },
          { name: 'George went to grad school at Yale', emoji: '🎒️', value: ' something Rob made up' },
          { name: 'George took $$$ from a GoFundMe for a dog with cancer', emoji: '🐕️', value: ' totally true' },
          { name: 'George blamed Donald Trump for 6 Jan', emoji: '🏛️', value: ' totally true' }
        ]
      },
      round_two: {
        wrongAnswers: [
          { name: 'George had both knees replaced', emoji: '🧎️' },
          { name: 'George was a scholarship volleyball player', emoji: '🏐️' },
          { name: 'George had a brain tumor', emoji: '🧠️' },
          { name: 'George did private equity', emoji: '🏛️' },
          { name: 'George loaned his campaign $700k', emoji: '💳️' },
          { name: 'George doubled revenue in 2.5 years', emoji: '💹️' },
          { name: 'George worked with the Trump org', emoji: '🎺️' },
          { name: 'George earned $55k in 2020', emoji: '💵️' },
          { name: "George has photos of dogs he's rescued", emoji: '🐕️' },
          { name: 'George raffled tickets to Aladdin on Broadway', emoji: '🎭️' },
          { name: 'George bought a luxury box for a Mets game', emoji: '⚾️' },
          { name: 'George took on no student debt', emoji: '💳️' }
        ],
        rightAnswers: [
          { name: 'George did regional sales for a Ponzi scheme', emoji: '💸️', value: ' totally true' },
          { name: 'George stole a tie for a SOS rally', emoji: '👔️', value: ' something Rob made up' },
          { name: 'George worked at a call center for Dish Network', emoji: '📡️', value: ' totally true' },
          { name: 'George lives with his sister', emoji: '👭️', value: ' totally true' },
          { name: 'George is Catholic', emoji: '⛪️', value: ' totally true' },
          { name: 'George promoted Trump at a trans event', emoji: '🎺️', value: ' totally true' }
        ]
      },
      round_three: {
        wrongAnswers: [
          { name: 'George captained Pride Parade in NYC', emoji: '🥳️' },
          { name: 'George learned Spanish at yeshiva', emoji: '✡️' },
          { name: 'George speaks four languages', emoji: '🇲🇽️' },
          { name: 'George did not see descrimination in GOP', emoji: '🐘️' },
          { name: 'George claimed Lady Gaga is a globalist', emoji: '🌐️' },
          { name: 'George played pro-am tennis', emoji: '🎾️' },
          { name: 'George got an MBA from NYU', emoji: '🏫️' },
          { name: 'George drove a GOP registration drive for trans youth', emoji: '🐘️' },
          { name: 'George shut down a homeless shelter', emoji: '🛖️' },
          { name: 'George applied to the FBI', emoji: '👮️' },
          { name: "George said he was Steve Israel's first GOP vote", emoji: '🐘️' },
          { name: 'George recovered from COVID with an inhaler', emoji: '🫁️' }
        ],
        rightAnswers: [
          { name: 'George chaired Gays for Trump', emoji: '🏳️‍🌈️', value: ' a sign he held up once' },
          { name: "George mocked Stewart Rhodes' eye injury", emoji: '🏴‍☠️️', value: ' something Rob made up' },
          { name: 'George had a public access TV show', emoji: '📺️', value: ' totally true' },
          { name: 'George was Young Republican Man of the Year', emoji: '🏆️', value: ' totally true' },
          { name: 'George has a 5 star rating on Cameo', emoji: '📜️', value: ' something Rob made up' },
          { name: 'George got a hole-in-one at Mar-a-lago', emoji: '⛳️', value: ' something Rob made up' }
        ]
      },
      vedder_and_cuomo: [
        { name: 'Jeff Ament', emoji: '🦪️', value: ' the lineup' },
        { name: 'Flea', emoji: '🪲️', value: ' the lineup' },
        { name: 'Dave Grohl', emoji: '🤘️', value: ' the lineup' },
        { name: 'Josh Freese', emoji: '💅️', value: ' the lineup' }
      ],
      bono_and_mills: [
        { name: 'Johnny Marr', emoji: '🐭️', value: ' the lineup' },
        { name: 'The Edge', emoji: '🪒️', value: ' the lineup' },
        { name: 'Larry Mullen Jr.', emoji: '🥁️', value: ' the lineup' },
        { name: 'Stewart Copeland', emoji: '👮️', value: ' the lineup' }
      ],
      madonna_and_snoop_dogg: [
        { name: 'Nile Rodgers', emoji: '🐣️', value: ' the lineup' },
        { name: 'Elton John', emoji: '🚀️', value: ' the lineup' },
        { name: 'John Frusciante', emoji: '🌶️', value: ' the lineup' },
        { name: 'Jack White', emoji: '🎸️', value: ' the lineup' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&df&family=Fredericka+the+Great&family=Creepster&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Fredericka the Great', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.spooky {
  font-family: 'Creepster', cursive !important;
  @apply mt-32 text-9xl text-red-600 #{!important};
}
html {
  font-size: 36px;
}
</style>
