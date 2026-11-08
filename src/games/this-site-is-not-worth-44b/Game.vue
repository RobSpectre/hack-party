<template lang="pug">
Reveal
  .slides
    Title
    Slide(class='darkgray')
      h2.text-white This is not my best work
    VideoSlide(background='/games/this-site-is-not-worth-44b/video/elon_musk_dance.mp4')
    VideoSlide(
      background='/games/this-site-is-not-worth-44b/video/ratio.mp4'
      :muted='false'
    )
    VideoSlide(background='/games/this-site-is-not-worth-44b/video/elon_musk_dance.mp4')
      h1 Is this site worth $44B?
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/bill_ackman_tweet.png')
    CelebrityGuess(
      celebrity='Bill Ackman'
      image='/games/this-site-is-not-worth-44b/images/bill_ackman_tweet.png'
      :price='4.42'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/bill_ackman_tweet_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/house_judiciary_gop.png')
    CelebrityGuess(
      celebrity='House Judiciary GOP'
      image='/games/this-site-is-not-worth-44b/images/house_judiciary_gop.png'
      :price='4.06'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/house_judiciary_gop_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/david_frum.png')
    CelebrityGuess(
      celebrity='David Frum'
      image='/games/this-site-is-not-worth-44b/images/david_frum.png'
      :price='15.75'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/david_frum_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_mccarthy.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/kevin_mccarthy.png'
      :price='6.35'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_mccarthy_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_sorbo.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/kevin_sorbo.png'
      :price='1.5'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_sorbo_reveal.png')
    PlayerBoard
    VideoSlide(
      background='/games/this-site-is-not-worth-44b/video/dylan_impression.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/buck_sexton.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/buck_sexton.png'
      :price='3.9'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/buck_sexton_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/biz_stone.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/biz_stone.png'
      :price='1.03'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/biz_stone_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/josh_denny.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/josh_denny.png'
      :price='11.9'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/josh_denny_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/skyward_avery.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/skyward_avery.png'
      :price='145'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/skyward_avery_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/erick_erickson.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/erick_erickson.png'
      :price='3.6'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/erick_erickson_reveal.png')
    PlayerBoard
    VideoSlide(
      background='/games/this-site-is-not-worth-44b/video/stable_girl.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/jason_calacanis.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/jason_calacanis.png'
      :price='2'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/jason_calacanis_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_mccarthy_2.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/kevin_mccarthy_2.png'
      :price='2.36'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kevin_mccarthy_2_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kyle_rittenhouse.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/kyle_rittenhouse.png'
      :price='4.41'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/kyle_rittenhouse_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/lauren_boebert.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/lauren_boebert.png'
      :price='4.56'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/lauren_boebert_reveal.png')
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/erica_marsh.png')
    CelebrityGuess(
      celebrity=''
      image='/games/this-site-is-not-worth-44b/images/erica_marsh.png'
      :price='1.44'
      denomination=''
      question='How ratioed was this tweet?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .h-screen.flex.items-center.justify-center
          img.fragment(src='/games/this-site-is-not-worth-44b/images/erica_marsh_reveal.png')
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

import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

export default {
  name: 'ThisSiteIsNotWorth44bGame',
  components: {
    PlayerBoard,
    Title,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    CelebrityGuess,
    GameContentWithSidebar
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
