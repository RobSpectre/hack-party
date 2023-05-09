<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/headline.png')
    BackgroundImageSlide(background='/images/dinner.png')
    BackgroundImageSlide(background='/images/trumpdump.png')
    BackgroundImageSlide(background='/images/midjourney.png')
    BackgroundImageSlide(background='/images/headline.png')
      .title NFT or GPT?
    Slide
      h2.fragment Solo
      h2.fragment An image containing Big Chungus
      h2.fragment Is it a minted NFT?
      h2.fragment Or is it a generated image?
      h2.fragment Contrarians get 2x
      h1 Game Play
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_rockstar.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_rockstar.png'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_trump_captain_america.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_trump_captain_america.avif'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_king_of_hearts.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_king_of_hearts.avif'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_bbq.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_bbq.avif'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_motorcycle.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_motorcycle.avif'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/rocklahoma.png')
    BackgroundImageSlide(background='/images/heardle.png')
    BackgroundImageSlide(background='/images/rocklahoma.png')
      .bossfight Headliner at the Shit Show
    AuctionEarRound(
      src='/sounds/godsmack.mp3'
      answer='Godsmack is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='false'
    )
    AuctionEarRound(
      src='/sounds/cherrypie.mp3'
      answer='Warrant is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='false'
    )
    PlayerBoard
    VideoSlide(
      background='/video/fuel.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_ghostrider.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_ghostrider.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_golf.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_golf.avif'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_rambo.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_rambo.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_batman.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_batman.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_liberty_bell.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_liberty_bell.avif'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    AuctionEarRound(
      src='/sounds/limpbizkit.mp3'
      answer='Limp Bizkit is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='false'
    )
    AuctionEarRound(
      src='/sounds/pantera.mp3'
      answer='Pantera is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='false'
    )
    PlayerBoard
    VideoSlide(
      background='/video/coachella.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_wolves.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_wolves.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_surfing.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_surfing.avif'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/ai_rushmore.png')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/ai_rushmore.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_trump_uncle_sam.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_trump_uncle_sam.avif'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img.fragment(src='/images/nft_washington.avif')
    ItemGuess(
      :items='scam_or_fake'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/nft_washington.avif'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    AuctionEarRound(
      src='/sounds/daughtry.mp3'
      answer='Daughtry is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='true'
    )
    AuctionEarRound(
      src='/sounds/buckcherry.mp3'
      answer='Buckcherry is the crappy band!'
      :chunks='5'
      gameType='bidForChunk',
      :ascending='true'
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
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'
import AuctionEarRound from '../components/AuctionEar/AuctionEarRound.vue'

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
    AuctionEarRound
  },
  data () {
    return {
      scam_or_fake: [
        { name: 'NFT', emoji: '🍑️', value: ' the image' },
        { name: 'GPT', emoji: '🤖️', value: ' the image' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Diplomata+SC&family=Amarante&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.bossfight {
  font-family: 'Amarante', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Diplomata SC', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-green #{!important};
}

html {
  font-size: 36px;
}
</style>
