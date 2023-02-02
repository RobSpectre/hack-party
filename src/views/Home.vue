<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/oscars.mp4')
    VideoSlide(background='/video/egot.mp4')
    VideoSlide(background='/video/oscar_slap.mp4')
      .title One Statue Away
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with an artist one statue away from an EGOT
      h2.fragment You guess whether the artist is missing...
      h2.fragment An Emmy...
      h2.fragment A Grammy...
      h2.fragment An Oscar...
      h2.fragment or a Tony
      h2.fragment Contrarians get 2X!
      h1 Game Play
    Slide(class='darkgray')
      h2.text-white Let's Go!
    PlayerBoard
    CelebrityIntro(
      celebrity='Bette Midler'
      image='/images/bette_midler.png'
      hint1='American singer with a career spanning five decades'
      hint2='Born and raised in Honolulu'
      hint3='Can shred on ukulele'
    )
    ItemGuess(
      :items='items'
      question='What is Bette Midler missing?'
      headerImage='/images/bette_midler.png'
      :winnerIndex='2'
      denomination=''
    )
    CelebrityIntro(
      celebrity='Hugh Jackman'
      image='/images/hugh_jackman.png'
      hint1='Australian actor trained at the Royal National Theatre'
      hint2='Owns a coffee shop in TriBeCa'
      hint3='Holds the record for longest career as a Marvel character until last year'
    )
    ItemGuess(
      :items='items'
      question='What is Hugh Jackman missing?'
      headerImage='/images/hugh_jackman.png'
      :winnerIndex='2'
      denomination=''
    )
    CelebrityIntro(
      celebrity='Eminem'
      image='/images/eminem.png'
      hint1='Shocked this guy shares company with the other folks in this game'
      hint2='Forth least offensive rapper from Detroit'
      hint3='The only white artist more wealthy from black music is Elvis'
    )
    ItemGuess(
      :items='items'
      question='What is Eminem missing?'
      headerImage='/images/eminem.png'
      :winnerIndex='3'
      denomination=''
    )
    CelebrityIntro(
      celebrity='Al Pacino'
      image='/images/al_pacino.png'
      hint1='Unlike the last guy, a living legend in our time'
      hint2='Born and raised in East Harlem in the 40s'
      hint3="Had twins with Beverly D'Angelo but has never married"
    )
    ItemGuess(
      :items='items'
      question='What is Al Pacino missing?'
      headerImage='/images/al_pacino.png'
      :winnerIndex='1'
      denomination=''
    )
    CelebrityIntro(
      celebrity='Dick Van Dyke'
      image='/images/dick_van_dyke.png'
      hint1='This legend passed on the ministry after a high school drama teacher convinced him to be an entertainer'
      hint2='First professional gig was a radio announce for the Air Force in WWII'
      hint3='Came to New York in 1957 and became a household name two years later'
    )
    ItemGuess(
      :items='items'
      question='What is Dick Van Dyke missing?'
      headerImage='/images/dick_van_dyke.png'
      :winnerIndex='2'
      denomination=''
    )
    CelebrityIntro(
      celebrity='Kate Winslet'
      image='/images/kate_winslet.png'
      hint1='Celebrated British actor whose first screen appearance was at 15'
      hint2='Probably the most immaculate taste in scripts of any performer tonight'
      hint3='Who else has Titanic and Eternal Sunshine of the Spotless Mind in the same career?'
    )
    ItemGuess(
      :items='items'
      question='What is Kate Winslet missing?'
      headerImage='/images/kate_winslet.png'
      :winnerIndex='3'
      denomination=''
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/mtg_vpotus.png')
    BackgroundImageSlide(background='/images/mtg_vpotus.png')
      .bossfight OVER AND UNDER
    ItemGuess(
      :items='mtg_aoc'
      question='Who raised more money last cycle?'
      headerImage='/images/aoc_mtg.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/winslet.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are worth 2x!
    CelebrityIntro(
      celebrity='Trent Reznor'
      image='/images/trent_reznor.png'
      hint1='Dropped out of college after a year to start a music career... in Cleveland'
      hint2='Made the music for the 90s FPS Quake'
      hint3="Has been scoring music since David Lynch's Lost Highway"
    )
    ItemGuess(
      :items='items'
      question='What is Trent Reznor missing?'
      headerImage='/images/trent_reznor.png'
      :winnerIndex='3'
      denomination=''
      :prize='2'
    )
    CelebrityIntro(
      celebrity='Lily Tomlin'
      image='/images/lily_tomlin.png'
      hint1='This actor starts on screen with The Merv Griffin Show'
      hint2='One of the OG lesbians working in Hollywood, she married her wife 42 years into their relationship'
      hint3="My favorite role was as POTUS's famously tempermental assistant"
    )
    ItemGuess(
      :items='items'
      question='What is Lily Tomlin missing?'
      headerImage='/images/lily_tomlin.png'
      :winnerIndex='2'
      denomination=''
      :prize='2'
    )
    CelebrityIntro(
      celebrity='Ron Howard'
      image='/images/ron_howard.png'
      hint1='Started in show business at 5 years old'
      hint2='Became a director by striking a deal with Roger Corman'
      hint3='Made the only watchable Formula 1 drama with Rush'
    )
    ItemGuess(
      :items='items'
      question='What is Ron Howard missing?'
      headerImage='/images/ron_howard.png'
      :winnerIndex='3'
      denomination=''
      :prize='2'
    )
    CelebrityIntro(
      celebrity='Frances McDormand'
      image='/images/frances_mcdormand.png'
      hint1='This actor is one half of the most critically successful back-and-front of camera combos with husband Joel Coen'
      hint2="She's worked with every great director on their best films"
      hint3='My fave most recent role was God in Good Omens'
    )
    ItemGuess(
      :items='items'
      question='What is Frances McDormand missing?'
      headerImage='/images/frances_mcdormand.png'
      :winnerIndex='1'
      denomination=''
      :prize='2'
    )
    CelebrityIntro(
      celebrity='Cher'
      image='/images/cher.png'
      hint1='One of the few contraltos in show business, popularity rose in the 60s'
      hint2='Parlayed a multi year run on Broadway to prolific film casting in the 80s'
      hint3='All the while kept cranking out records, selling over 100 million'
    )
    ItemGuess(
      :items='items'
      question='What is Cher missing?'
      headerImage='/images/cher.png'
      :winnerIndex='3'
      denomination=''
      :prize='2'
    )
    CelebrityIntro(
      celebrity='Trey Parker and Matt Stone'
      image='/images/parker_and_stone.png'
      hint1='This pair of brothers started in stop motion animation'
      hint2='First show started with a stop motion Christmas short in film school'
      hint3='Ultimately become the longest running animation that is not The Simpsons'
    )
    ItemGuess(
      :items='items'
      question='What is Trey Parker and Matt Stone missing?'
      headerImage='/images/parker_and_stone.png'
      :winnerIndex='2'
      denomination=''
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/mtg_vpotus.png')
      .bossfight OVER AND UNDER
    ItemGuess(
      :items='crenshaw_jordan'
      question='Who raised more money last cycle?'
      headerImage='/images/crenshaw_jordan.png'
      :winnerIndex='0'
      denomination=''
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/snl_oscar_host.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are worth 3x!
    CelebrityIntro(
      celebrity='Common'
      image='/images/common.png'
      hint1="Delivered the first poetry reading in decades at the White House at Michelle Obama's invitation"
      hint2='Established as a gravitational focus of the current brain trust of hip hop'
      hint3='Parlayed that success in rap to two decades of screen experience'
    )
    ItemGuess(
      :items='items'
      question='What is Common missing?'
      headerImage='/images/common.png'
      :winnerIndex='3'
      denomination=''
      :prize='3'
    )
    CelebrityIntro(
      celebrity='Paul McCartney and Ringo Starr'
      image='/images/paul_mccartney_and_ringo_starr.png'
      hint1='This pair earned knighthood for their contributions to culture through music'
      hint2='Since coming to the States from Liverpool they became the best selling band ever'
      hint3='The only living Beatles'
    )
    ItemGuess(
      :items='items'
      question='What is Paul McCartney and Ringo Starr missing?'
      headerImage='/images/paul_mccartney_and_ringo_starr.png'
      :winnerIndex='3'
      denomination=''
      :prize='3'
    )
    CelebrityIntro(
      celebrity='Elton John'
      image='/images/elton_john.png'
      hint1='Another rock star night from the UK'
      hint2='Went from being a pub pianist to one of the defining pianomen of the 70s'
      hint3="He's a rocketman"
    )
    ItemGuess(
      :items='items'
      question='What is Elton John missing?'
      headerImage='/images/elton_john.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    CelebrityIntro(
      celebrity='Helen Mirren'
      image='/images/helen_mirren.png'
      hint1='From the sirs to the dames, this actor joined the Royal Shakespeare Company in 1975'
      hint2='The only actor to play both Queens Elizabeth'
      hint3='My favorite role of hers is host of Documentary Now!'
    )
    ItemGuess(
      :items='items'
      question='What is Helen Mirren missing?'
      headerImage='/images/helen_mirren.png'
      :winnerIndex='1'
      denomination=''
      :prize='3'
    )
    CelebrityIntro(
      celebrity='Cynthia Nixon'
      image='/images/cynthia_nixon.png'
      hint1='Tried to primary Andrew Cuomo in 2018'
      hint2='One of the few actors known for working only in New York'
      hint3='Best known as Miranda in Sex and the City'
    )
    ItemGuess(
      :items='items'
      question='What is Cynthia Nixon missing?'
      headerImage='/images/cynthia_nixon.png'
      :winnerIndex='2'
      denomination=''
      :prize='3'
    )
    CelebrityIntro(
      celebrity='Bruce Springsteen'
      image='/images/bruce_springsteen.png'
      hint1='Probably the favorite son of New Jersey'
      hint2='Committed my most favorite stage fail in Super Bowl history'
      hint3='The Boss'
    )
    VideoSlide(
      background='/video/bosscocked.mp4'
      :muted='false'
    )
      .bangers.fragment BOSSCOCKED!
    ItemGuess(
      :items='items'
      question='What is Bruce Springsteen missing?'
      headerImage='/images/bruce_springsteen.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/mtg_vpotus.png')
      .bossfight OVER AND UNDER
    ItemGuess(
      :items='schiff_porter'
      question='Who raised more money last cycle?'
      headerImage='/images/schiff_porter.png'
      :winnerIndex='1'
      denomination=''
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

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import CelebrityIntro from '@/components/CameoPriceIsRight/CelebrityIntro.vue'

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
    CelebrityIntro
  },
  data () {
    return {
      items: [
        { name: 'Emmy', emoji: '📺️', value: ' the missing hardware' },
        { name: 'Grammy', emoji: '🎼️', value: ' the missing hardware' },
        { name: 'Oscar', emoji: '📽️', value: ' the missing hardware' },
        { name: 'Tony', emoji: '🎭️', value: ' the missing hardware' }
      ],
      mtg_aoc: [
        { name: 'Marjorie Taylor Greene', emoji: '🐘️', value: ' outraised AOC by $400k' },
        { name: 'Alexandria Ocasio-Cortez', emoji: '🐎️', value: ' the over' }
      ],
      crenshaw_jordan: [
        { name: 'Dan Crenshaw', emoji: '🏴‍☠️️', value: ' outraised Jordan by $2M' },
        { name: 'Jim Jordan', emoji: '😵‍💫️', value: ' the over' }
      ],
      schiff_porter: [
        { name: 'Adam Schiff', emoji: '👨️', value: ' outraised Schiff by $1M' },
        { name: 'Katie Porter', emoji: '👩️', value: ' outraised Schiff by $1M' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Bangers&family=Black+Ops+One&family=Press+Start+2P&display=swap');

html {
  font-size: 36px;
}

.title {
  font-family: 'Aboreto', cursive !important;
  @apply mt-64 text-9xl skew-y-12 text-white #{!important};
}

.bossfight {
  font-family: 'Black Ops One', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.bangers {
  font-family: 'Bangers', cursive !important;
  @apply mt-64 text-9xl text-white #{!important};
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}
</style>
