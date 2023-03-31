<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/pureflix_website.png')
      h1 Thanks Keegan!
    VideoSlide(background='/video/tammy_faye_cut.mp4')
      h2.text-white.text-9xl.monoton(style='margin-top: 24rem;') Pureflix or Netflix?
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with the title and description of some content
      h2.fragment Is it Pureflix?
      h2.fragment Netflix?
      h2.fragment Nyetflix?
      h2.fragment Contrarian bonus is in effect!
      h1 Game Play
    PlayerBoard
    Slide(class='green')
      h2.text-white Let's go!
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Luther: The Fallen Sun
      template(v-slot:content)
        h3.fragment An epic continuation of the award-winning television saga reimagined for film — a gruesome serial killer is terrorizing London while brilliant but disgraced detective John Luther  sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On what service does this title stream?'
      :fragmentItemReveal='true'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/luther.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Love's Sweet Recipe
      template(v-slot:content)
        h3.fragment Armed with a family heirloom her father left behind called the "Rule Book of Love,” talented chef Courtney finds love in the most unexpected place when handsome Jack is there to help.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/loves_sweet_recipe.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Rockin' on Heavens Door
      template(v-slot:content)
        h3.fragment Very famous rockers who love Jesus share their life of faith and inspiration. How they persevered and the strength they have through their faith. Each share a favorite Bible verse that inspires them.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/heavens_door.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Heaven's Gamble
      template(v-slot:content)
        h3.fragment When a former professional gambler dies and finds himself at the gates of Heaven, he is given the opportunity to redeem himself by participating in a high-stakes game with the Devil himself. Will he be able to outsmart the Prince of Darkness and earn his place in paradise?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/heavens_gamble.jpeg')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment El Camino Christmas
      template(v-slot:content)
        h3.fragment When Eric Roth (Luke Grimes) goes on an impulsive journey to find the father he never knew, his search takes him to the remote desert town of El Camino, Nevada, where he's mistaken for a drug dealer by local, dim-witted law enforcement and winds up pinned down in a liquor store holdup with five other lost souls on Christmas Eve...one of which is his father.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/el_camino_christmas.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Holy Rollers
      template(v-slot:content)
        h3.fragment A group of misfit skateboarders discover their true calling when they become street preachers, using their skills on the board to spread the word of God to the youth of their city. But when a rival gang starts causing trouble, they must learn to rely on their faith and each other to overcome the obstacles in their path.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/holy_rollers.jpeg')
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide
      h2.fragment Solo
      h2.fragment Start with the lowest score and go to the highest
      h2.fragment Introduce a multimedia franchise
      h2.fragment Name as many characters as possible in 30 seconds...
      h2.fragment ...without repeating one already named.
      h2.fragment 1 point per character!
      h1 Game Play
    Slide(class='green')
      h2.text-white Star Wars
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/Star_Wars_Logo.svg'
    )
    PlayerBoard
    VideoSlide(
      background='/video/rockin_on_heavens_door.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Home-Schooled
      template(v-slot:content)
        h3.fragment A self-centered business woman, living in the city, is shocked to discover she has inherited five sheltered Home-Schooled kids in the Midwest.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/homeschooled.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Christmas on the Square
      template(v-slot:content)
        h3.fragment A rich and nasty woman, Regina Fuller, returns to her small hometown after her father’s death to evict everyone and sell the land to a mall developer - right before Christmas. However, after listening to stories of the local townsfolk, reconnecting with an old love, and accepting the guidance of an actual angel, Regina starts to have a change of heart. This is the story about family, love, and how a small town’s Christmas spirit can warm even the coldest of hearts.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/christmas_on_the_square.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The Heavenly Heist
      template(v-slot:content)
        h3.fragment A group of former thieves and con artists team up to pull off the ultimate heist: stealing the Ark of the Covenant from a heavily guarded museum. But when they realize the true power of the relic, they must choose between using it for their own gain or returning it to its rightful place in the hands of God.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/heavenly_heist.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment A Boy Called Christmas
      template(v-slot:content)
        h3.fragment An ordinary young boy called Nikolas sets out on an extraordinary adventure into the snowy north in search of his father who is on a quest to discover the fabled village of the elves, Elfhelm. Taking with him a headstrong reindeer called Blitzen and a loyal pet mouse, Nikolas soon meets his destiny in this magical, comic and endearing story that proves nothing is impossible.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/a_boy_called_christmas.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Finding Love in Quarantine
      template(v-slot:content)
        h3.fragment Amid a crisis that has forced everyone into quarantine, Rick Baldwin is seeking sanity – and maybe even…. love?
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/love_in_quarantine.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Sintonia
      template(v-slot:content)
        h3.fragment Told through three characters’ perspectives, the story of Sintonia explores the universe of music, crime, and religion in São Paulo's capital. Doni, Nando, and Rita all grew up together in the same favela, where they were influenced by the draw of funk, drug trafficking, and the evangelical church. Despite them following very different paths, the three childhood friends ultimately realize that to achieve their dreams, they'll need to rely on and support each other throughout this journey.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/sintonia.png')
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='green')
      h2.text-white Star Trek
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/star-trek-logo.jpg'
    )
    PlayerBoard
    VideoSlide(
      background='/video/what_if.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Chosen
      template(v-slot:content)
        h3.fragment An epic fantasy adventure set in a world of magic and mystery, where a young hero must overcome incredible odds to fulfill his destiny as the chosen one. Along the way, he discovers the power of faith and the importance of standing up for what is right, even in the face of great evil.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/chosen.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Christmas Full of Grace
      template(v-slot:content)
        h3.fragment After discovering a betrayal, Carlinhos takes a fun stranger to accompany him on Christmas. But Graça proves to be a madwoman capable of bringing the traditional family home down.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/christmas_full_of_grace.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The Last Trumpet
      template(v-slot:content)
        h3.fragment As the world spirals into darkness and despair, a lone trumpet sounds, heralding the coming of the Lord. In the midst of the chaos, a group of faithful believers comes together to share the message of salvation and prepare for the end times.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/the_last_trumpet.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Revelation Road: The Beginning of the End
      template(v-slot:content)
        h3.fragment Caught in the wrong place at the wrong time, a salesman struggles to make it home during the aftermath of the Rapture.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/revelation_road.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Play The Flute
      template(v-slot:content)
        h3.fragment Faced with an indifferent youth group, a new youth Pastor tries to motivate his students to read God's Word and get serious about their faith.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/play_the_flute.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The Miracle of Life
      template(v-slot:content)
        h3.fragment When a group of pro-choice activists launch a campaign to prove that life begins at birth, a team of Christian doctors and researchers set out to present a counter-argument based on science and faith. Through their work, they demonstrate that life is a miracle that begins at conception, and that God's hand is evident in every aspect of creation.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/pureflix_banner.webp'
      question='On which service does this title stream?'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/the_miracle_of_life.png')
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='green')
      h2.text-white The Simpsons
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/simpsons_header.webp'
    )
    PlayerBoard
    VideoSlide(
      background='/video/revelation_road.mp4'
      :muted='false'
    )
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
import ClimbTheLadderRound from '@/components/ClimbTheLadder/ClimbTheLadderRound.vue'

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
    GameContentWithSidebar,
    ItemGuess,
    ClimbTheLadderRound
  },
  data () {
    return {
      items: [
        { name: 'Pureflix', emoji: '😇️', value: ' the streaming service' },
        { name: 'Netflix', emoji: '📺️', value: ' the streaming service' },
        { name: 'Nyetflix', emoji: '💻️', value: ' the streaming service' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Monoton&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.monoton {
  font-family: 'Monoton', cursive !important;
}

html {
  font-size: 36px;
}
</style>
