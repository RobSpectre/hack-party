<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(
      background='/images/album_cover.png'
    )
      h1 DALL-E > Album Covers
    BackgroundImageSlide(
      background='/images/thats_impossible.gif'
    )
      h1 Rob Said It Wouldn't Work
    BackgroundImageSlide(
      background='/images/diffusion_release.png'
    )
      h1 By Tuesday He Was Wrong
    VideoSlide(
      background='/video/help_computer.mp4'
      :muted='false'
    )
    BackgroundImageSlide(
      background='/images/help_computer.png'
    )
      h2.title Help Computer
    Slide
      h2.fragment You will see an album cover
      h2.fragment Provide a prompt to help the computer to recreate that album cover
      h2.fragment Poker order
      h2.fragment Closest by consensus
      h2.fragment Extra points for unintentional comedy
      h1 Game Play
    Slide(class='darkgray')
      h2.text-white Getting started with grandpa rock
    HelpComputerRound(
      image='/images/led_zeppelin_1.jpg'
      title='Led Zeppelin by Led Zeppelin'
    )
    HelpComputerRound(
      image='/images/rolling_stones_sticky_fingers.webp'
      title='Sticky Fingers by The Rolling Stones'
    )
    HelpComputerRound(
      image='/images/acdc_high_voltage.jpg'
      title='High Voltage by ACDC'
    )
    HelpComputerRound(
      image='/images/fleetwoodmac_rumours.jpg'
      title='Rumours by Fleetwood Mac'
    )
    HelpComputerRound(
      image='/images/the_beatles_abbey_road.webp'
      title='Abbey Road by The Beatles'
    )
    HelpComputerRound(
      image='/images/david_bowie_ziggy_stardust.jpg'
      title='Ziggy Stardust by David Bowie'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/boss_fight_intro_falsehoods_cut.mp4')
      h2.text-white.text-9xl.cursive The Thin Veneer of Legitimacy
    Slide(class='green')
      h2.text-white Each are 3 points
    AudioChoiceRound(
      src='/sounds/devin_nunes.mp3'
      :items='items'
      :winnerIndex='1'
      :prize='3'
      :fragmentItemReveal='true'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
    )
    AudioChoiceRound(
      src='/sounds/tudor_dixon.mp3'
      :items='items'
      :winnerIndex='0'
      :prize='3'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/aunty_donna_kiln.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Intermediate Difficulty with 90's pop
    Slide(class='green')
      h2.text-white Points are 2X
    HelpComputerRound(
      image='/images/shania_twain_self_titled.png'
      title='Shania Twain by Shania Twain'
      :prize='2'
    )
    HelpComputerRound(
      image='/images/variousartists_forrestgump.jpg'
      title='Forrest Gump OST'
      :prize='2'
    )
    HelpComputerRound(
      image='/images/matchboxtwentymatchb_yourselforsomeonelik.jpg'
      title='You or Someone Like You by Matchbox 20'
      :prize='2'
    )
    HelpComputerRound(
      image='/images/alanismorissette_jaggedlittlepill.jpg'
      title='Jagged Little Pill by Alanis Morissette'
      :prize='2'
    )
    HelpComputerRound(
      image='/images/garthbrooks_sevens.jpg'
      title='Sevens by Garth Brooks'
      :prize='2'
    )
    HelpComputerRound(
      image='/images/creed_humanclay.jpg'
      title='Human Clay by Creed'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='green')
      h2.text-white Each are 5 points
    AudioChoiceRound(
      src='/sounds/kari_lake.mp3'
      :items='items'
      :winnerIndex='0'
      :prize='5'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
    )
    AudioChoiceRound(
      src='/sounds/seb_gorka.mp3'
      :items='items'
      :winnerIndex='1'
      :prize='5'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/aunty_donna_cheese.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Full Send with the Classics of Metal
    Slide(class='green')
      h2.text-white Points are 3X
    HelpComputerRound(
      image='/images/metallica_ridethelightning.jpg'
      title='Ride the Lightning by Metallica'
      :prize='3'
    )
    HelpComputerRound(
      image='/images/motrhead_noremorse.jpg'
      title='No Remorse by Motorhead'
      :prize='3'
    )
    HelpComputerRound(
      image='/images/mastodon_leviathan.jpg'
      title='Leviathan by Mastodon'
      :prize='3'
    )
    HelpComputerRound(
      image='/images/ironmaiden_thetrooper.jpg'
      title='The Trooper by Iron Maiden'
      :prize='3'
    )
    HelpComputerRound(
      image='/images/metallica_masterofpuppets.jpg'
      title='Master of Puppets by Metallica'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='green')
      h2.text-white Each are 10 points
    AudioChoiceRound(
      src='/sounds/trump_jr.mp3'
      :items='items'
      :winnerIndex='1'
      :prize='10'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
    )
    AudioChoiceRound(
      src='/sounds/tucker.mp3'
      :items='items'
      :winnerIndex='0'
      :prize='10'
      question='Was this guest on Fox News or an even more crazy right wing "news" station?'
      headerImage='/images/boss_fight_header_fox_news.png'
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

import HelpComputerRound from '@/components/HelpComputer/HelpComputerRound.vue'

import AudioChoiceRound from '@/components/AudioChoice/AudioChoiceRound.vue'

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
    HelpComputerRound,
    AudioChoiceRound
  },
  data () {
    return {
      items: [
        { name: 'Fox News', emoji: '🦊️', value: ' the host' },
        { name: 'Not Fox News', emoji: '🧨️', value: ' the host' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&family=Pacifico&family=Roboto:wght@700&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Share Tech Mono', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.cursive {
  font-family: 'Pacifico', cursive !important;
  @apply mt-64 text-6xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
