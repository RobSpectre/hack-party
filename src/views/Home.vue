<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(
      background='/video/crazy_ivan.mp4'
    )
      h2.title Discriminating Listener
    Slide
      h2.fragment Solo
      h2.fragment Presented with a sound
      h2.fragment Pick between two rival brands
      h2.fragment Contrarian bonus in full effect
      h2.fragment Solo
      h1 Game Play
    PlayerBoard
    Slide(class="green")
      h2.text-white Old Rivals
    VideoSlide(
      background='/video/mariovslink_cut.mp4'
    )
    AudioChoiceRound(
      src='/sounds/smb_fireworks.wav'
      :items='nintendo'
      :winnerIndex='0'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/LOZ_Get_Item.wav'
      :items='nintendo'
      :winnerIndex='1'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/LTTP_Link_Dying.wav'
      :items='nintendo'
      :winnerIndex='1'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/lm_inventory-open.wav'
      :items='nintendo'
      :winnerIndex='0'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/BOTW_Fanfare_SmallItem.wav'
      :items='nintendo'
      :winnerIndex='1'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/sm64_camera_lakitu.wav'
      :items='nintendo'
      :winnerIndex='0'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    AudioChoiceRound(
      src='/sounds/smsunshine_mario_blblblblbl.wav'
      :items='nintendo'
      :winnerIndex='0'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/nintendo_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment Elon Musk announced he's wriggling out of the Twitter deal
        h2.fragment Expensive week and it's not just the $1B breakup fee
        h2.fragment Paternity test evidenced Elon fathered twins this year
      template(v-slot:content)
        img.fragment(src='/images/elon.jpg')
      template(v-slot:footer)
        h1.fragment How many kids does Elon have?
    CelebrityGuess(
      celebrity="Elon children total"
      image='/images/elon.jpg'
      :price='9'
      :prize='5'
      question='How many kids does Elon have?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/star_trek_vs_wars.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Nerd Fight
    Slide(class='darkgray')
      h2.text-white Each round is worth 2x
    AudioChoiceRound(
      src='/sounds/star_trek_nomad_beam.mp3'
      :items='space'
      :winnerIndex='0'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/super_battle_droid_blaster.mp3'
      :items='space'
      :winnerIndex='0'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/shield_impact_tsfs_cut.mp3'
      :items='space'
      :winnerIndex='1'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/hull_hit_cut.mp3'
      :items='space'
      :winnerIndex='1'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/star_trek_blaster.mp3'
      :items='space'
      :winnerIndex='1'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/rare_lightsaber_cut.mp3'
      :items='space'
      :winnerIndex='0'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    AudioChoiceRound(
      src='/sounds/star_trek_warp_cut.mp3'
      :items='space'
      :winnerIndex='1'
      :prize='2'
      question='From which franchise did this sound effect originate?'
      headerImage='/images/star_trek_vs_star_wars.jpg'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment Two more 6 Jan hearing are scheduled this week
        h2.fragment Stephen Bannon announced he wants to testify live
        h2.fragment Comes after over a year of interviewing witnesses
      template(v-slot:content)
        img.fragment(src='/images/6_jan.png')
      template(v-slot:footer)
        h1.fragment How many witnesses have they interviewed?
    CelebrityGuess(
      celebrity="6 Jan witness total"
      image='/images/6_jan.png'
      :price='1036'
      :prize='10'
      question='How many witnesses have they interviewed?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/tim_burton.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Dueling Composers
    Slide(class='darkgray')
      h2.text-white Each round is worth 3x
    AudioChoiceRound(
      src='/sounds/pee_wee.mp3'
      :items='composers'
      :winnerIndex='1'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/harry_potter.mp3'
      :items='composers'
      :winnerIndex='0'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/ford_vs_ferrari.mp3'
      :items='composers'
      :winnerIndex='0'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/chicago.mp3'
      :items='composers'
      :winnerIndex='1'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/good_will_hunting.mp3'
      :items='composers'
      :winnerIndex='1'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/batman_vs_superman.mp3'
      :items='composers'
      :winnerIndex='0'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/army_of_darkness.mp3'
      :items='composers'
      :winnerIndex='1'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    AudioChoiceRound(
      src='/sounds/reys_theme.mp3'
      :items='composers'
      :winnerIndex='0'
      :prize='3'
      question='Which composer wrote this song?'
      headerImage='/images/elfman_vs_williams.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:header)
        h2.fragment Tuesday we finally see images from James Webb telescope
        h2.fragment Four images will be introduced
        h2.fragment Comes after a $10 billion NASA program
      template(v-slot:content)
        img.fragment(src='/images/webb.png')
      template(v-slot:footer)
        h1.fragment How many years did it take to make?
    CelebrityGuess(
      celebrity="Webb telescope years"
      image='/images/webb.png'
      :price='26'
      :prize='20'
      question='How many years did it take to make?'
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

import AudioChoiceRound from '@/components/AudioChoice/AudioChoiceRound.vue'

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
    AudioChoiceRound,
    CelebrityGuess,
    GameContentWithSidebar
  },
  data () {
    return {
      nintendo: [
        { name: 'Mario', emoji: '🍄️', value: ' the game' },
        { name: 'Zelda', emoji: '⚔️', value: ' the game' }
      ],
      space: [
        { name: 'Star Wars', emoji: '🚀️', value: ' the franchise' },
        { name: 'Star Trek', emoji: '👽️', value: ' the franchise' }
      ],
      composers: [
        { name: 'John Williams', emoji: '🐐️', value: ' the composer' },
        { name: 'Danny Elfman', emoji: '🕸️', value: ' the composer' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Audiowide', cursive !important;
  @apply mt-60 text-8xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
