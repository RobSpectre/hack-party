<template lang="pug">
Reveal
  .slides
    Title
    Title(
      background='/video/price_is_right.mp4'
      heading='/images/cameo_price_is_right.png'
    )
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with talent from Cameo.com
      h2.fragment Guess the rate
      h2.fragment Closest without going over wins
      h2.fragment Bonus if you guess exactly
      h1 Gameplay
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Back to the Future
    CameoPriceIsRightRound(
      celebrity='Lea Thompson'
      hint1='Native of Rochester, Minnesota'
      hint2='Directed an episode of Star Trek: Picard'
      hint3='Mother to Marty in the trilogy'
      video='https://cdn.cameo.com/video/62c2308eb3dda40f222faab1-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/iIl6Vjcw__avatar-Po5dAawuJ.jpg'
      :price='125'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Christopher Lloyd'
      hint1='His character is the original inspiration for Rick Sanchez'
      hint2='First break was a role on the sitcom Taxi'
      hint3='Great Scott!'
      video='https://cdn.cameo.com/video/622e9d657542d741302ec750-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/GRivAVGDF_S5W6eReg8_avatar-XES1Al3Go.png'
      :price='399'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Don Fullilove'
      hint1="Inspirational talk to Marty's father"
      hint2='First use of the Butterfly Effect in the film'
      hint3='Mayor of Hill Valley - Goldie Wilson'
      video='https://cdn.cameo.com/video/626d56977e375e07e0e171bc-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/fsdAu1kzT_81247224_3069965456561470_5328383480498074183_n.jpg'
      :price='99'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Jeffrey Weissman'
      hint1='Crispin Glover was difficult to work with'
      hint2='He was replaced as George McFly in the 2nd and 3rd films'
      hint3='Heavy makeup made this actor look like George'
      video='https://cdn.cameo.com/video/video-62aa53614cfccaa29912ac79-l22Z2Daov-hLmLbUxg8-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/vj9XJ3xaN-86EF333B-0AD3-4A95-B458-F7D66ADDE475.jpg'
      :price='200'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Tom Wilson'
      hint1='Eerily prescient villain in the 2nd film'
      hint2='Played various incarnations of Biff through the ages'
      hint3='Voices almost every villain on Spongebob Squarepants'
      video='https://cdn.cameo.com/video/video-62373b2704cd26d1a1ab5b63-RijGXzr9W-Di7wwOo_h-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/iyMspeuH3_avatar-cLHiiVgCi.jpg'
      :price='199'
      :prize='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/the_question_song.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Famous Long Islanders
    Slide(class='green')
      h2.text-white Points are 2x!
    CameoPriceIsRightRound(
      celebrity='Lindsay Lohan'
      hint1='Native of Merrick and Cold Spring Harbor'
      hint2='One of the most parabolic swings in stardom from the 2000s'
      hint3='Star of Mean Girls'
      video='https://cdn.cameo.com/video/6192cd9f1d0b844c80b398e0-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/nUSPIYpVq_IMG_0047.jpeg'
      :price='500'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Melissa Joan Hart'
      hint1='This actress grew up in Sayville'
      hint2='Best known for Sabrina the Teenage Witch'
      hint3='Most loved for Clarissa Explains It All'
      video='https://cdn.cameo.com/video/62bba11ce1ac6b7219f24a01-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/OOw2ajcbhE_97jtxDByf.jpeg'
      :price='150'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Mick Foley'
      hint1='Born in Indiana but went to Ward Melville High School'
      hint2='A pro wrestler known for multiple characters'
      hint3='Highest rated person on Cameo by a mile'
      video='https://cdn.cameo.com/video/62d171f7113e4371ea603d6c-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/WQvrig2oV_78774449-1F81-4365-850C-62045091862F.jpeg'
      :price='125'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Criss Angel'
      hint1='This magician was born in Hempstead'
      hint2='Became a star at 41'
      hint3='Parlayed YouTube success to a hit TV show Mindfreak'
      video='https://cdn.cameo.com/v/no-wm-av5DcLlbf.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/7rz0u_1aZ-CB392F20-7CB7-4FBA-BE8B-8A59DD875F9F.jpg'
      :price='999'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Flavor Flav'
      hint1='Born William Jonathan Drayton Jr in Roosevelt'
      hint2='Reality television gave this OG rapper a second shot at celebrity'
      hint3='One half of Public Enemy'
      video='https://cdn.cameo.com/video/62a06d6607276a21edcdce7c-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/static/user/7s03_fqbx.jpg'
      :price='350'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Debbie Gibson'
      hint1='Youngest woman to write, produce and perform a Billboard #1 single'
      hint2='Played Eponine in Les Miserables'
      hint3='Grew up in Merrick and best known for a Beach Boys cover'
      video='https://cdn.cameo.com/video/6276f3a79867e360da8dda47-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/OycMv3HBb_avatar-82SVqEHxL.jpg'
      :price='299'
      :prize='1'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white New York Ballers
    Slide(class='green')
      h2.text-white Points are 3x!
    CameoPriceIsRightRound(
      celebrity='Lenny Dykstra'
      hint1='3x All-star center fielder for the Mets'
      hint2='2011 was arrested for bankruptcy fraud, grand theft auto and indecent exposure'
      hint3='Caught the final out of the 1986 World Series'
      video='https://cdn.cameo.com/v/no-wm-ATDEViT0cO.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/C-9rp8tHw-5D467A79-D146-405E-9B67-EB7BA8434B53.jpg'
      :price='99'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Gary Dunaier (Thumbs Down Guy)'
      hint1='This Mets fan became an Internet legend'
      hint2='Became the theme for the 2017 Yankees squad'
      hint3='The Thumbs Down Guy'
      video='https://cdn.cameo.com/video/62abebf0594c44c850c24aee-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/2ko64isA2_avatar-EXG3o0GqW.jpg'
      :price='25'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Denis Potvin'
      hint1='The true Captain of New York sports'
      hint2='This NHL hall of famer led The Dynasty'
      hint3='Captained four straight Stanley Cup wins'
      video='https://cdn.cameo.com/video/62b1e342e94b646510fccfd5-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/NuwV8TN6y_avatar-D23rRwvAX.jpg'
      :price='145'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Brian Cashman'
      hint1='Usually the deepest wallet in baseball'
      hint2='From Rockville Centre, he is the longest tenured GM'
      hint3='In Nov 2014 he slept on a sidewalk in NYC to raise awareness for homeless youth'
      video='https://cdn.cameo.com/video/61df8f351369017ae29957b6-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/m0-OTFI9U_avatar-W_Juy3nmv.jpg'
      :price='250'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Fireman Ed'
      hint1="Known as the world's biggest Jets fan"
      hint2='Known for an iconic helmet, he leads the JETS chant at home games'
      hint3='Famously quit during halftime after the Butt Fumble'
      video='https://cdn.cameo.com/video/6116c7093f9f9a001deb592d.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/iAPAx4yeM_avatar-_ZN5icAY0.jpg'
      :price='73'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Mariano Rivera'
      hint1='This relief pitcher has only one pitch'
      hint2='With a lifetime ERA of 2.21 his WAR is a stratospheric 56.3'
      hint3='The greatest closer baseball has ever seen'
      video='https://cdn.cameo.com/video/62b4c3a1f3a54be92017accc-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/enC2nDM8Y_ScreenShot2019-08-26at2.00.35PM.png'
      :price='750'
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
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

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
    CameoPriceIsRightRound,
    GameContentWithSidebar,
    CelebrityGuess,
    ItemGuess
  },
  data () {
    return {
      bossfight: [
        { name: 'Laura Jane Grace', emoji: '🤘️' },
        { name: 'The Soup Nazi', emoji: '🥣️' },
        { name: 'Mick Foley', emoji: '🤼️', value: 'the most popular with 4,128 5 star reviews' },
        { name: 'Kevin Conroy', emoji: '🦇️' },
        { name: 'Mark McGrath', emoji: '💩️' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
html {
  font-size: 36px;
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
}
</style>
