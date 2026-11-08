<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(
      background='/games/help-computer-dall-e/video/openai.mp4'
    )
    BackgroundImageSlide(background='/games/help-computer-dall-e/images/dalle_api.png')
    VideoSlide(background='/games/help-computer-dall-e/video/dalle3.mp4')
    BackgroundImageSlide(
      background='/games/help-computer-dall-e/images/help_computer.png'
    )
      h2.title Help Computer
    Slide
      h2.fragment You will see an album cover
      h2.fragment Provide a prompt to help the computer to recreate that album cover
      h2.fragment Poker order
      h2.fragment Closest by consensus
      h2.fragment Extra points for unintentional comedy
      h1 Game Play
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Rolling Stone's Top 5
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/abbey_road.jpg'
      title='Abbey Road by The Beatles'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/sounds_in_the_key_of_life.jpg'
      title='Sounds in the Key of Life by Stevie Wonder'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/blue.jpg'
      title='Blue by Joni Mitchell'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/pet_sounds.jpg'
      title='Pet Sounds by The Beach Boys'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/whats_going_on.jpg'
      title="What's Going On by Marvin Gaye"
    )
    PlayerBoard
    VideoSlide(
      background='/games/help-computer-dall-e/video/washington_dream.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white $600 tickets
    Slide(class='green')
      h2.text-white Points are 2X
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/american_idiot.jpg'
      title='American Idiot by Green Day'
      :prize='2'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/songs_of_innocence.jpg'
      title='Songs of Innocence by U2'
      :prize='2'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/1989.jpg'
      title='1989 by Taylor Swift'
      :prize='2'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/un_verano_sin_ti.jpg'
      title='Un Verano Sin Ti by Bad Bunny'
      :prize='2'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/one_of_these_nights.jpg'
      title='One of These Nights by Eagles'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/games/help-computer-dall-e/video/gop_debate.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Nashville Is Hell For Music
    Slide(class='green')
      h2.text-white Points are 3X
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/whitsitt_chapel.jpg'
      title='Whitsitt Chapel by Jelly Roll'
      :prize='3'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/bell_bottom_country.jpg'
      title='Bell Bottom Country by Lainey Wilson'
      :prize='3'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/gettin_old.jpg'
      title="Gettin' Old by Luke Combs"
      :prize='3'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/reboot.jpg'
      title='Reboot by Brooks and Dunn'
      :prize='3'
    )
    HelpComputerRound(
      image='/games/help-computer-dall-e/images/old_dominion.jpg'
      title='Memory Lane by Old Dominion'
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

import HelpComputerRound from '@/components/HelpComputer/HelpComputerRound.vue'

import AudioChoiceRound from '@/components/AudioChoice/AudioChoiceRound.vue'

export default {
  name: 'HelpComputerDallEGame',
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
