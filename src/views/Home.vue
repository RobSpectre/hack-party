<template lang="pug">
Reveal
  .slides
    Title
    PlayerBoard
    VideoSlide(
      background='/video/thisisfine.mp4'
    )
      h1 The News
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/peace_and_prosperity.jpg')
    Slide(class='darkgray')
      h2.text-white theon1on.com
    Slide(class='darkgray')
      h2.text-white /r/nottheonion
    GameContentWithSidebar
      template(v-slot:content)
        h-screen.flex.items-center.items-justify
          img(src='/images/thehardtimes.jpg')
          img(src='/images/clickhole.jpg')
          img(src='/images/newsthump.jpg')
    VideoSlide(
      background='/video/thisisfine_loop.mp4'
    )
      h2.title Onion or On1on
    Slide
      h2.fragment Solo
      h2.fragment Headline
      h2.fragment Real News or Fake News?
      h2.fragment Contrarian bonus!
      h1 Gameplay
    Slide(class='blue')
      h2.text-white School Practices Drill For When There’s Not An Active Shooter
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/activeshooter.png')
    Slide(class='blue')
      h2.text-white US Marines honors Pride Month with rainbow bullets
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/marines.png')
    Slide(class='blue')
      h2.text-white Alaskan Woman Removes Possum From New York Bar
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/possum.png')
    Slide(class='blue')
      h2.text-white Morbius Is So Bad That It's Coming Back to Theaters
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/morbius.png')
    Slide(class='blue')
      h2.text-white Record Number Of Canadians Tragically Lose Handguns In Ice Fishing Accidents
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/canadians.png')
    Slide(class='blue')
      h2.text-white In light of privacy law allegations, Elon Musk decides Snapchat makes more sense for him to buy
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/elonmusk.png')
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo Boss Fight!!
    Slide(class='green')
      h2.text-white What Cameo Talent responds the fastest?
    ItemGuess(
      :items='cameospeed'
      :winnerIndex='1'
      denomination=''
      question='Who is the fastest Cameo Talent?'
      :prize='3'
      :fragmentItemReveal='true'
      headerImage='https://i.pcmag.com/imagery/reviews/05mF8sOiSR8xktyu3Zfan5D-1..v1610564943.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/the_fridge.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='blue')
      h2.text-white Pandemic Enters Dangerous Phase as Dave Matthews Concerts Spread
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/davematthews.png')
    Slide(class='blue')
      h2.text-white Bees are legally considered fish in California, judge rules
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/bees.png')
    Slide(class='blue')
      h2.text-white "Prince Andrew Is A Sweaty Nonce" hits UK top 20 during Jubilee celebrations
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/princeandrew.png')
    Slide(class='blue')
      h2.text-white “Period Crunch” Cereal Wants to Normalize Menstruation Talk at the Breakfast Table
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/periodcrunch.png')
    Slide(class='blue')
      h2.text-white Eric Adams Announces Budget Increase For NYPD To Fight Ghosts
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/ericadams.png')
    Slide(class='blue')
      h2.text-white Robot orders increase 40% amid labour shortage
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/robots.png')
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo Boss Fight!!
    Slide(class='green')
      h2.text-white What Cameo category is slowest to respond?
    ItemGuess(
      :items='cameocategory'
      :winnerIndex='3'
      denomination=''
      question='What category responds slowest on Cameo ?'
      :prize='5'
      :fragmentItemReveal='true'
      headerImage='https://i.pcmag.com/imagery/reviews/05mF8sOiSR8xktyu3Zfan5D-1..v1610564943.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/mona_lisa.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='blue')
      h2.text-white 'We Gave Up Our Guns And It Turned Out Fine For Us,' Says Australian Man Who Couldn't Leave His House For Two Years
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/australian.png')
    Slide(class='blue')
      h2.text-white Amber Heard Hired By The Daily Wire
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/amberheard.png')
    Slide(class='blue')
      h2.text-white Individual Open Carrying AR-15 Gets Robbed at Gunpoint in St. Louis
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/ar15.png')
    Slide(class='blue')
      h2.text-white Taser maker to put stun guns on drones to stop school shootings
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/axon.png')
    Slide(class='blue')
      h2.text-white Rep Louie Gohmert: ‘If you’re a Republican, you can’t even lie to Congress or lie to an FBI agent or they’re coming after you’
    ItemGuess(
      :items='real'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/gohmert.png')
    Slide(class='blue')
      h2.text-white Dr. Oz Sells Garcinia Cambogia Supplement Guaranteed To Lower Taxes
    ItemGuess(
      :items='fake'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/realorfake.jpg'
      question='Is this headline real or fake?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/droz.png')
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo Boss Fight!!
    Slide(class='green')
      h2.text-white What is the most popular price point on Cameo?
    ItemGuess(
      :items='cameoprice'
      :winnerIndex='1'
      denomination=''
      question='Who is most popular Cameo price?'
      :prize='10'
      :fragmentItemReveal='true'
      headerImage='https://i.pcmag.com/imagery/reviews/05mF8sOiSR8xktyu3Zfan5D-1..v1610564943.png'
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
import GameContentWithSidebar from '../components/base/GameContentWithSidebar.vue'

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
    GameContentWithSidebar
  },
  data () {
    return {
      real: [
        { name: 'Real News', emoji: '📰️', value: ' the headline' },
        { name: 'Fake News', emoji: '🦄️' }
      ],
      fake: [
        { name: 'Real News', emoji: '📰️' },
        { name: 'Fake News', emoji: '🦄️', value: ' the headline' }
      ],
      cameospeed: [
        { name: 'Kurt Angle', emoji: '🤼️' },
        { name: 'Perez Hilton', emoji: '🍾️', value: ' responds within 4.3 minutes on average' },
        { name: 'Antoine Dodson', emoji: '😶️' },
        { name: 'John Randle', emoji: '🏈️' }
      ],
      cameocategory: [
        { name: 'Actors', emoji: '🗣️' },
        { name: 'Musicians', emoji: '🎼️' },
        { name: 'Reality TV', emoji: '📺️' },
        { name: 'YouTubers', emoji: '🖱️', value: ' take 3.3 days to respond' }
      ],
      cameoprice: [
        { name: '$20', emoji: '💵️', value: ' the most popular price point.' },
        { name: '$50', emoji: '💵️💵️' },
        { name: '$99', emoji: '💵️💵️💵️' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Rubik Glitch', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
