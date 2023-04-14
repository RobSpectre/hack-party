<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/smb_headline.png')
    BackgroundImageSlide(background='/images/smb_headline_2.png')
    VideoSlide(background='/video/smb3.mp4')
      .title Box Office Haul
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Resident Evil',
      hint1='2002 action horror film',
      hint2='Paul W.S. Anderson and Milla Jovovich dual career suicide',
      hint3='Make the same movie every 3 years.',
      image='/images/resident_evil.webp',
      :price='103',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    CameoPriceIsRightRound(
      celebrity='Prince of Persia: The Sands of Time',
      hint1='2010 action fantasy vehicle',
      hint2='1st and so far only video game movie produced by Jerry Bruckheimer',
      hint3='Rights were not purchased until 2004 - the first game came out in 1989',
      image='/images/prince_of_persia.webp',
      :price='336',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    CameoPriceIsRightRound(
      celebrity='Sonic the Hedgehog',
      hint1='2020 kids comedy',
      hint2='Trailer was so poorly received the studio delayed release by three months',
      hint3='The CG on the protagonist was so bad it was called "a blight upon a weary world"',
      image='/images/sonic_the_hedgehog.webp',
      :price='319',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    CameoPriceIsRightRound(
      celebrity='Final Fantasy: The Spirits Within',
      hint1='2001 scifi flick',
      hint2='Despite sharing the franchise title, no characters from the games make an appearance',
      hint3='The first photorealistic computer animated feature film',
      image='/images/final_fantasy.webp',
      :price='85',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    CameoPriceIsRightRound(
      celebrity='Need For Speed',
      hint1='2014 car movie',
      hint2='Aaron Paul hot off Breaking Bad and Rami Malek pre-Mr. Robot',
      hint3='Despite 3xing the budget, the franchise never got touched again',
      image='/images/need_for_speed.jpg',
      :price='203',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    CameoPriceIsRightRound(
      celebrity="Assassin's Creed",
      hint1='2016 scif movie - I guess?',
      hint2='Suffered 18% on Rotten Tomatoes',
      hint3='"Best video game movie ever made..."',
      image='/images/assassins_creed.webp',
      :price='240',
      denomination='',
      question='How much did this film rake in at the box office?'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide
      h2.fragment Solo
      h2.fragment Start with the lowest score and go to the highest
      h2.fragment Introduce a franchise
      h2.fragment Name as many titles as possible in 30 seconds...
      h2.fragment ...without repeating one already named.
      h2.fragment 1 point per title!
      h1 Game Play
    Slide(class='green')
      h2.text-white Konami
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/Konami-logo.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/ff.mp4'
      :muted='false'
    )
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Mortal Kombat',
      hint1='1995 martial arts action film',
      hint2='Same director went on to do Resident Evil',
      hint3='Producers wanted a PG-13 but "stay true to the game"',
      image='/images/mortal_kombat.webp',
      :price='122',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Lara Croft: Tomb Raider',
      hint1='2001 summer action movie',
      hint2='Failed scripts were written by folks from Mortal Kombat: Annihilation and Street Fighter',
      hint3='First appearance by Angelina Jolie with her father Jon Voight on film',
      image='/images/lara_croft.webp',
      :price='274',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Pokemon: The Movie',
      hint1='1998 anime kids movie',
      hint2="Like all 90's anime, very existentialist with a morally ambiguous villain",
      hint3='The American producer famously butchered the English adaptation',
      image='/images/pokemon.jpg',
      :price='172',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Rampage',
      hint1='2018 kaiju movie',
      hint2='The video game came from the same studio tht made Mortal Kombat and NBA Jam',
      hint3='Starring The Rock and Negan!',
      image='/images/rampage.jpg',
      :price='428',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Warcraft',
      hint1='2016 high fantasy film',
      hint2='Only did $47.4M in the US',
      hint3='Despite the highest grossing video game film ever released, still lost a shit-ton of money',
      image='/images/warcraft.webp',
      :price='439',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Street Fighter',
      hint1='1994 martial arts flick',
      hint2='One of the reason video game movies have such a hard time getting made',
      hint3="In it's defense, opening weekend was against Dumb and Dumber and The Santa Clause",
      image='/images/street_fighter.png',
      :price='99',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='green')
      h2.text-white Pokemon
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/pokemon_logo.webp'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/rampage.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Sequels & Reboots
    CameoPriceIsRightRound(
      celebrity='Mortal Kombat',
      hint1='2021 martial arts fantasy',
      hint2='Nearly 20 years after a sequel annhilated the franchise, here comes this reboot',
      hint3='Controversially debuted in theaters and home streaming - both rated R',
      image='/images/mortal_kombat_reboot.webp',
      :price='84',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Resident Evil: The Final Chapter',
      hint1='2016 action horror film',
      hint2='Safety was not big on this set',
      hint3='Despite the title, this was not the final chapter',
      image='/images/the_final_chapter.jpg',
      :price='312',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Tomb Raider',
      hint1='2018 action-adventure film',
      hint2='"Gritty" - through paint by numbers',
      hint3='Amazon is rebooting it again!',
      image='/images/tomb_raider.webp',
      :price='274',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Detective Pikachu',
      hint1='2019 mystery... noir... comedy?',
      hint2='Dramatic departure for the franchise into live action',
      hint3='Evidence everything Ryan Reynolds touches turns to gold',
      image='/images/detective.webp',
      :price='449',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Sonic the Hedgehog 2',
      hint1='2022 action kids comedy',
      hint2='This sequel was snatched from the jaws of certain death',
      hint3='First Jim Carrey appearance in a sequel since Ace Ventura',
      image='/images/tails.webp',
      :price='405',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Super Mario Bros: The Movie',
      hint1='1993 fantasy adventure',
      hint2='The effects designers took inspiration from everywhere... but the video game',
      hint3='The only live action Nintendo movie until Detective Pikachu',
      image='/images/smb.jpg',
      :price='38',
      denomination='',
      question='How much did this film rake in at the box office?'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide(class='green')
      h2.text-white Cheat Codes
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/game_genie.png'
      :prize='3'
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

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'

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
    CameoPriceIsRightRound
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Oxanium:wght@600&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Oxanium', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
