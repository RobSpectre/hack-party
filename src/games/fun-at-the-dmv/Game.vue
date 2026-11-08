<template lang="pug">
Reveal
  .slides
    Title
    Slide(class='darkgray')
      .flex.flex-col.items-center.justify-center
        img(src='/games/fun-at-the-dmv/images/dmv.jpg')
    Slide(class='darkgray')
      .flex.flex-col.items-center.justify-center
        img(src='/games/fun-at-the-dmv/images/dmv_bot_github.png')
    VideoSlide(background='/games/fun-at-the-dmv/video/dmv.mp4')
      h2.title Be The DMV
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with a license plate
      h2.fragment You will see the driver's explanation
      h2.fragment And the DMV's motivation for review
      h2.fragment Guess if it was accepted or denied
      h2.fragment Contrarians get 2x!
      h1 Game Play
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: TURTLE POWER AFTER THE TEENAGE MUTANT NINJA TURTLES
        h2.text-white.fragment DMV: TURD AS IN POOP
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/turd_pwr.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/turd_pwr.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: FUN MULES
        h2.text-white.fragment DMV: FUN MULES, FUCKING MULES
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/fnmules.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/fnmules.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: FRANKY'S 69
        h2.text-white.fragment DMV: LOOKS LIKE FREAKY 69
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/frnky69.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/frnky69.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: MY DJ NAME
        h2.text-white.fragment DMV: ENJOY A BOWL (MARIJUANA REFERENCE) OR ENJOYABLE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/njyabwl.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/njyabwl.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: SOMETHING I BELIEVE IN
        h2.text-white.fragment DMV: HATERS
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/luv_h8trs.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/luv_h8trs.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: NICKNAME
        h2.text-white.fragment DMV: urban dictionary says it is Tagalog slang for N word
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/4_nugnug.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/4_nugnug.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='1'
    )
    VideoSlide(background='/games/fun-at-the-dmv/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(
      background='/games/fun-at-the-dmv/video/wordle_tutorial_cut.mp4'
    )
      h2.title Wordle for Edgelords
    WordleRipoffRound(answer='shext')
    PlayerBoard
    VideoSlide(
      background='/games/fun-at-the-dmv/video/dmv.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: INITIALS CAR MODEL
        h2.text-white.fragment DMV: PULLED FOR MF.  NAME IS LARRY M FEDER. HAS PORSCHE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/lmfx911.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/lmfx911.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: SJ SHARKS HOCKEY FAN
        h2.text-white.fragment DMV: FN CAN STAND FOR FUCKING
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/shrk_fn.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/shrk_fn.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: CLOSE FRIENDS
        h2.text-white.fragment DMV: COULD BE GANG REFERENCE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/homboys.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/homboys.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: JAGER IS GERMAN FOR HUNTER, AND MY CAR IS GERMAN. BM IS BOOST MANAGEMENT BECAUSE  IT HAS A TURBO.
        h2.text-white.fragment DMV: JAGER BOMB IS A DRINK BUT BOMB IS A WEAPON REFERENCE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/jagerbm.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/jagerbm.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: MUSTANG MODEL "GT" AND PERSONAL NICKNAME "PEPE
        h2.text-white.fragment DMV: PEPE-PENIS ON URBAN 378 UP 257 DOWN
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/gtpepe.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/gtpepe.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: DUNG BEETLE A NAME OF A CAR IN A SHOW ON TV
        h2.text-white.fragment DMV: DUNG BEETLE, DUNG IS ANOTHER WORD FOR POOP, OBSCENE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/dngbeetle.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/dngbeetle.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='2'
    )
    VideoSlide(background='/games/fun-at-the-dmv/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(
      background='/games/fun-at-the-dmv/video/wordle_tutorial_cut.mp4'
    )
      h2.title Wordle for Edgelords
    WordleRipoffRound(answer='hundo')
    PlayerBoard
    VideoSlide(
      background='/games/fun-at-the-dmv/video/primus.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: TRY PSYCHOLOGY
        h2.text-white.fragment DMV: LOOKS LIKE TRY PUSSY
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/trypsyc.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/trypsyc.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: DON'T LIKE PAVEMENT
        h2.text-white.fragment DMV: HATE?
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/h8pvmnt.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/h8pvmnt.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: SAINT ANN IS AN IMPORTANT HISTORICAL FIGURE AND SOMEONE WHO I MODEL MY LIFE AFTER.
        h2.text-white.fragment DMV: Satan
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/s8tan.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='0'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/s8tan.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: BYRNE IS OUR LAST NAME AND FIREFIGHTER
        h2.text-white.fragment DMV: MARIJUANA REFERENCE (Legacy plate, name is BYRNE)
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/byrne_it.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/byrne_it.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: CHRIST IN YOU
        h2.text-white.fragment DMV: HOSTILE
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/xinyou.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/xinyou.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Customer: TACO BELL MENU ITEM
        h2.text-white.fragment DMV: EXTRA LARGE STUFFED. THE ONLY THING THAT SHOWS ON GOOGLE IS TACO BELL BURRITOS
      template(v-slot:content)
        img.fragment(src='/games/fun-at-the-dmv/images/xl_stuft.jpeg')
    ItemGuess(
      :items='dmv'
      :winnerIndex='1'
      denomination=''
      headerImage='/games/fun-at-the-dmv/images/xl_stuft.jpeg'
      question='Was this plate accepted or rejected?'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(background='/games/fun-at-the-dmv/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(
      background='/games/fun-at-the-dmv/video/wordle_tutorial_cut.mp4'
    )
      h2.title Wordle for Edgelords
    WordleRipoffRound(answer='salty')
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

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import WordleRipoffRound from '@/components/WordleRipoff/WordleRipoffRound.vue'

export default {
  name: 'FunAtTheDmvGame',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    ItemGuess,
    GameContentWithSidebar,
    WordleRipoffRound
  },
  data () {
    return {
      dmv: [
        { name: 'ACCEPTED', emoji: '👍️', value: ' the verdict' },
        { name: 'DENIED', emoji: '👎️', value: ' the verdict' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Special Elite', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-white #{!important};
}
html {
  font-size: 36px;
}
</style>
