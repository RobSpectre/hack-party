<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/podcast.png')
      h1 Long Play Listening Party
    VideoSlide(background='/video/tripping_billies_cut.mp4')
      h1 DMB Cover Band
    VideoSlide(background='/video/mbmbam_cut.mp4')
      h1 MbMbAM
    VideoSlide(background='/video/tripping_billies_cut.mp4')
      h2.title Under The Table And Phishing
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with a lyric
      h2.fragment Determine if it is Dave Matthews Band...
      h2.fragment ... or Phish
      h2.fragment Contrarian bonus!
      h1 Game Play
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white.fragment Caught you just then, hands were in the cookie jar
      h2.text-white.fragment How can we share when you sneak up and go?
      h2.text-white.fragment I've no intention of losing my beard
      h2.text-white.fragment How they design and then we go again
    ItemGuess(
      :items='dmb'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    Slide(class='darkgray')
      h2.text-white.fragment  I had to get away
      h2.text-white.fragment I was losing my interest
      h2.text-white.fragment Instead of expanding my world
      h2.text-white.fragment I was just scanning Pinterest
    ItemGuess(
      :items='dmb'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    Slide(class='darkgray')
      h2.text-white.fragment Woman please please I'm in your possession
      h2.text-white.fragment Drink it drink it drink it drink it
      h2.text-white.fragment Let me go let me go
      h2.text-white.fragment Let me go down
      h2.text-white.fragment down
      h2.text-white.fragment down
      h2.text-white.fragment down
      h2.text-white.fragment down
      h2.text-white.fragment down
      h2.text-white.fragment down
      h2.text-white.fragment down
    ItemGuess(
      :items='dmb'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    Slide(class='darkgray')
      h2.text-white.fragment And then one day you find to your intense delight
      h2.text-white.fragment That three wrong turns can really make a right
      h2.text-white.fragment So why not be like me? be proud of all your crimes
      h2.text-white.fragment 'Cause when I screw up once, I do it two more times
    ItemGuess(
      :items='dmb'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    Slide(class='darkgray')
      h2.text-white.fragment And then one day you find to your intense delight
      h2.text-white.fragment That three wrong turns can really make a right
      h2.text-white.fragment So why not be like me? be proud of all your crimes
      h2.text-white.fragment 'Cause when I screw up once, I do it two more times
    ItemGuess(
      :items='dmb'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    Slide(class='darkgray')
      h2.text-white.fragment If you give, you, you begin to live.
      h2.text-white.fragment If you give, you begin to live.
      h2.text-white.fragment You begin, you get the world.
      h2.text-white.fragment If you give, you begin to give
      h2.text-white.fragment You get the world, you get the world.
      h2.text-white.fragment If you give, you begin to live.
    ItemGuess(
      :items='dmb'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/dmb.png'
      question='Is the lyric DMB or Phish?'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/phantom.mp4')
      h1 13,517 Performances
    CelebrityGuess(
      celebrity="Total performances for Chicago?"
      image='/images/phantom.png'
      :price='10098'
      :prize='3'
      question='How many performances of Chicago on Broadway?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/dmb_poop.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Taylor Swift or Shakespeare?
    Slide(class='darkgray')
      h2.text-white I'd meet you where the spirit meets the bones, in a faith forgotten land.
    ItemGuess(
      :items='swift'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    Slide(class='darkgray')
      h2.text-white I do believe her, though I know she lies.
    ItemGuess(
      :items='swift'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    Slide(class='darkgray')
      h2.text-white Let me wipe it first, it smells of mortality.
    ItemGuess(
      :items='swift'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    Slide(class='darkgray')
      h2.text-white Is love a tender thing? It is too rough, too rude?
    ItemGuess(
      :items='swift'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    Slide(class='darkgray')
      h2.text-white Is it romantic how all my elegies eulogize me?
    ItemGuess(
      :items='swift'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    Slide(class='darkgray')
      h2.text-white Who coaxed you into paradise and left you there?
    ItemGuess(
      :items='swift'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/swift.png'
      question='Is the line Taylor Swift or Shakespeare?'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/phantom.mp4')
      h1 13,517 Performances
    CelebrityGuess(
      celebrity="Total performances for Cats?"
      image='/images/phantom.png'
      :price='7485'
      :prize='5'
      question='How many performances of Cats on Broadway?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/drum_styles.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Kid Rock or Nickelback?
    Slide(class='darkgray')
      h2.text-white.fragment I want a brand new house on an episode of Cribs
      h2.text-white.fragment And a bathroom I can play baseball in
      h2.text-white.fragment And a king size tub big enough for ten plus me
    ItemGuess(
      :items='rock'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    Slide(class='darkgray')
      h2.text-white.fragment Twisted Brown gets down with no assistance
      h2.text-white.fragment We won't quit until we're banned from existence
      h2.text-white.fragment Persistence pays if that holds true
      h2.text-white.fragment Then I'm gonna buy this fucking planet before the time I'm through
    ItemGuess(
      :items='rock'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    Slide(class='darkgray')
      h2.text-white.fragment Splashing through the sand bar
      h2.text-white.fragment Talking by the campfire
      h2.text-white.fragment It's the simple things in life, like when and where
      h2.text-white.fragment We didn't have no internet
    ItemGuess(
      :items='rock'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    Slide(class='darkgray')
      h2.text-white.fragment In and out my life
      h2.text-white.fragment You come and you go
      h2.text-white.fragment Leaving just your picture behind
      h2.text-white.fragment And I kissed it a thousand times
    ItemGuess(
      :items='rock'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    Slide(class='darkgray')
      h2.text-white.fragment We're going out tonight (Hey!)
      h2.text-white.fragment To kick out every light (Hey!)
      h2.text-white.fragment Take anything we want (Hey!)
      h2.text-white.fragment Drink everything in sight (Hey!)
    ItemGuess(
      :items='rock'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    Slide(class='darkgray')
      h2.text-white.fragment Jack be nimble, jack be quick
      h2.text-white.fragment Jack wound up with a broken neck
      h2.text-white.fragment Humpty Dumpty, do your thing
      h2.text-white.fragment Daddy’s gonna buy you a diamond ring
    ItemGuess(
      :items='rock'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/kidrock.png'
      question='Is the line Kid Rock or Nickelback?'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/phantom.mp4')
      h1 13,517 Performances
    CelebrityGuess(
      celebrity="Total performances for Rent?"
      image='/images/phantom.png'
      :price='5123'
      :prize='10'
      question='How many performances of Rent on Broadway?'
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

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

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
    ItemGuess,
    GameContentWithSidebar,
    CelebrityGuess
  },
  data () {
    return {
      dmb: [
        { name: 'Dave Matthews Band', emoji: '🐜️', value: ' the lyric' },
        { name: 'Phish', emoji: '🐟️', value: ' the lyric' }
      ],
      swift: [
        { name: 'Taylor Swift', emoji: '🪡️', value: ' the lyric' },
        { name: 'William Shakespeare', emoji: '✒️', value: ' the lyric' }
      ],
      rock: [
        { name: 'Kid Rock', emoji: '⛓️', value: ' the lyric' },
        { name: 'Nickelback', emoji: '🪙️', value: ' the lyric' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Bungee+Spice&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Bungee Spice', cursive !important;
  @apply mt-32 text-9xl text-white #{!important};
}
html {
  font-size: 36px;
}
</style>
