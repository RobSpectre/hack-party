<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(
      background='/video/nftglasses.mp4'
    )
      .title Non Flushable Turds
    Slide
      h2.fragment Solo
      h2.fragment An NFT will be presented
      h2.fragment How many percentage points did the NFT go up or down from minting
      h2.fragment Double modifier for getting it exactly
      h1 Game Play
    PlayerBoard
    CelebrityIntro(
      hint1='Brooklyn Rapper? I guess?'
      hint2='Was saved from a 47 year prison sentence by snitching on his gang'
      hint3='Literal racketeer who ran a NFT scam already'
      celebrity="Tekashi69's Gine"
      image='/images/tekashi69.webp'
    )
    GameVideo(video='/video/gine.mp4')
    CelebrityGuess(
      celebrity="Tekashi69's Gine"
      image='/images/tekashi69.webp'
      :price='-85'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='1'
    )
    CelebrityIntro(
      hint1='This guy got his start in the wine business'
      hint2='Early social media game kind of created the influencer as a career choice'
      hint3='Prob the worst looking NFTs ever minted'
      celebrity="Gary Vee's VeeFriends"
      image='/images/veefriends_header.png'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/veefriends.png')
    CelebrityGuess(
      celebrity="Gary Vee's VeeFriends"
      image='/images/veefriends_header.png'
      :price='350'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='1'
    )
    CelebrityIntro(
      hint1="Rob's old neighbor in Williamsburg"
      hint2='Launched early this year'
      hint3='10,777 were minted at launch'
      celebrity='Inbetweeners'
      image='/images/justin_bieber_plug.png'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/inbetweeners.png')
    CelebrityGuess(
      celebrity='Inbetweeners'
      image='/images/inbetweeners.png'
      :price='-30'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='1'
    )
    CelebrityIntro(
      hint1='Former Playboy cover model'
      hint2='Current adult actress'
      hint3='Deleted Twitter account shortly after launch'
      celebrity="Lana Rhodes' Crypto Sis"
      image='/images/cryptosis.jpeg'
    )
    GameVideo(video='/video/cryptosis.mp4')
    CelebrityGuess(
      celebrity="Lana Rhodes' Crypto Sis"
      image='/images/cryptosis.jpeg'
      :price='-99'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='1'
    )
    CelebrityIntro(
      hint1='Oscar, Emmy and Two Golden Globes'
      hint2='Philatropist with a focus on gender equality'
      hint3='Multi-channel NFT with accompanying TV show'
      celebrity="Reese Witherspoon's World of Women"
      image='/images/worldofwomen.webp'
    )
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/worldofwomen.png')
    CelebrityGuess(
      celebrity="Reese Witherspoon's World of Women"
      image='/images/worldofwomen.webp'
      :price='-75'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='1'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(
      background='/images/maz_kanata.gif'
    )
      h2.title LASIK Racing
    Slide(class='darkgray')
      h2.text-white MAGANAUTS
    LasikRacingRound(
      src='/images/markmeadows.jpg'
      :answer="{ name: 'Mark Meadows', value: 'the MAGAnaut' }"
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/snl_nft.mp4'
      :muted='false'
    )
    PlayerBoard
    CelebrityIntro(
      hint1='Previously appeared on a Sunday Service game'
      hint2='Introduced NFTs with kind of menacing dogs'
      hint3='Total sales yesterday: 3'
      celebrity="Lindsay Lohan's Canine Cartel"
      image='/images/caninecartel.jpg'
    )
    GameVideo(video='/video/caninecartel.mp4')
    CelebrityGuess(
      celebrity="Lindsay Lohan's Canine Cartel"
      image='/images/caninecartel.jpg'
      :price='-90'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='2'
    )
    CelebrityIntro(
      hint1='Another featured celeb on Cameo Price Is Right'
      hint2='Dispensed with the pretense and minted his face 10,000 times'
      hint3='Looks like he spent $45 to launch it.'
      celebrity="Floyd Mayweather's Floyd's World"
      image='/images/floydsworld.png'
    )
    GameVideo(video='/video/floydsworld.mp4')
    CelebrityGuess(
      celebrity="Floyd Mayweather's Floyd's World"
      image='/images/floydsworld.png'
      :price='-99'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='2'
    )
    CelebrityIntro(
      hint1='Seth Green did not execute the NFT -> TV idea first'
      hint2='A-list comic Kevin Hart has a Roku original series up right now'
      hint3='If you thought the latest Facebook metaverse screenshots were bad...'
      celebrity="Kevin Hart's Confessions from the Hart"
      image='/images/confessions.png'
    )
    GameVideo(video='/video/confessions.mp4')
    CelebrityGuess(
      celebrity="Kevin Hart's Confessions from the Hart"
      image='/images/confessions.png'
      :price='-50'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='2'
    )
    CelebrityIntro(
      hint1='Another ex-con! Another boxer!'
      hint2='This former heavyweight has a fairly popular podcast now'
      hint3='Features big career moments and... pigeons?'
      celebrity="Mike Tyson's NFT collection"
      image='/images/miketyson.png'
    )
    CelebrityGuess(
      celebrity="Mike Tyson's NFT collection"
      image='/images/miketyson.png'
      :price='-40'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='2'
    )
    CelebrityIntro(
      hint1='Top 5 basketball player and reigning champ'
      hint2='Known for the clutch three pointer and big endorsement deals'
      hint3='100% of profits from this NFT go to charity?'
      celebrity="Steph Curry's 2974"
      image='/images/stephcurry.png'
    )
    CelebrityGuess(
      celebrity="Steph Curry's 2974"
      image='/images/stephcurry.png'
      :price='-75'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    LasikRacingRound(
      src='/images/kellyanne.webp'
      :answer="{ name: 'Kellyanne Conway', value: 'the MAGAnaut' }"
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/cokeprank.mp4'
      :muted='false'
    )
    PlayerBoard
    CelebrityIntro(
      hint1='Had no idea who these guys were - still wish that were true'
      hint2='"Nelk Boys" are Canadian prank bros?'
      hint3='$23 million of these NFTs were sold at minting'
      celebrity="Nelk Boys' Full Send Card"
      image='/images/fullsend.png'
    )
    GameVideo(video='/video/fullsend.mp4')
    CelebrityGuess(
      celebrity="Nelk Boys' Full Send Card"
      image='/images/fullsend.png'
      price='-20'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='3'
    )
    CelebrityIntro(
      hint1='This project ties in two insanely markets'
      hint2='Sneaker resale is a $30 billion market'
      hint3='You buy the NFT, you also buy the shoes'
      celebrity="French Montana's Cokeboys Kicks"
      image='/images/cokeboyskicks.png'
    )
    CelebrityGuess(
      celebrity="French Montana's Cokeboys Kicks"
      image='/images/cokeboyskicks.png'
      :price='-80'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='3'
    )
    CelebrityIntro(
      hint1='Known as the grandfather of 20th century comics'
      hint2='Creator of my favorite superhero of all time'
      hint3="First posthumous NFT collection I've heard of"
      celebrity="Stan Lee's Chakraverse"
      image='/images/stanlee.png'
    )
    CelebrityGuess(
      celebrity="Stan Lee's Chakraverse"
      image='/images/stanlee.png'
      price='-75'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='3'
    )
    CelebrityIntro(
      hint1='This celeb appeared in our last NFT game'
      hint2="Mother of two of Elon Musk's children"
      hint3='Unlike most of this game, very early to the party'
      celebrity="Grimes' Earth"
      image='/images/earth.png'
    )
    GameVideo(video='/video/earth.mp4')
    CelebrityGuess(
      celebrity="Grimes' Earth"
      image='/images/earth.png'
      price='-97'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='3'
    )
    CelebrityIntro(
      hint1='One of the best actors from Mr. Robot'
      hint2='Also early to the NFT game'
      hint3='Collection included IRL visit and mid-80s rally cars'
      celebrity="ASAP Rocky's NFT collection"
      image='/images/asaprocky.png'
    )
    CelebrityGuess(
      celebrity="ASAP Rocky's NFT collection"
      image='/images/asaprocky.png'
      price='-80'
      denomination=''
      question='What percent up or down is this NFT since minting?'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    LasikRacingRound(
      src='/images/rudy.jpg'
      :answer="{ name: 'Rudy Giuliani', value: 'the MAGAnaut' }"
      :prize='10'
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
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'
import CelebrityIntro from '@/components/CameoPriceIsRight/CelebrityIntro.vue'
import LasikRacingRound from '@/components/LasikRacing/LasikRacingRound.vue'

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
    CelebrityGuess,
    CelebrityIntro,
    LasikRacingRound
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Graduate&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Graduate', cursive !important;
  @apply text-8xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
