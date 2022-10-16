<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/damages_headline.png')
    BackgroundImageSlide(background='/images/KF.png')
    BackgroundImageSlide(background='/images/jones_crying.gif')
    BackgroundImageSlide(background='/images/infowars_fire_sale.png')
    BackgroundImageSlide(background='/images/infowars_fire_sale.png')
      h2.title Fire Sale at the Loony Bin
    Slide
      h2.fragment Solo
      h2.fragment Presented with a bestselling item from InfoWars Store
      h2.fragment Guess the fire sale price
      h2.fragment Price Is Right rules in effect
      h2.fragment Double Patriot Points for exact price
      h1 Game Play
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Ultimate Krill Oil'
      hint1='A Powerful Alternative To The Traditional Fish Oils'
      hint2='Health boost for heart, joints, cognition, fat metabolism'
      hint3='Never bleached or chemically modified like other oils, our Oil still contains all the original antioxidant capacity'
      image='/images/krilloilthumbnail.png'
      question='How much is this thing on InfoWars?'
      :price='35.95'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Theodore Roosevelt Silver Rounds'
      hint1='Contains 1 oz of .999 pure silver.'
      hint2='Features Theodore Roosevelt on the obverse.'
      hint3='Features a Gladiator “In The Arena” on the reverse.'
      image='/images/roosevelt_coin.webp'
      question='How much is this thing on InfoWars?'
      :price='129.99'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity="Alex's War"
      hint1="A behind the scenes look into Alex's fight against the Globalists"
      hint2='Documentary directed by Alex Lee Moyer'
      hint3='Stars Ali Alexander, the organizer of the 6 Jan rally'
      image='/images/alexwar-dvd_1.jpg'
      question='How much is this thing on InfoWars?'
      :price='24.95'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Ultimate Immune Support Pack'
      hint1='Bundle for immune support'
      hint2='Contains "Whole Food Multivitamin", D3'
      hint3='Retail price is 15 cents less when purchased individually'
      image='/images/ultimate-immune-support-pack.png'
      question='How much is this thing on InfoWars?'
      :price='59.95'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Vaso Beet Complete'
      hint1="Take advantage of one of nature's most hardworking nutrients"
      hint2='Delivering 1% of nitrogen for over 25 mg of nitrogen per serving'
      hint3='No sulfates, sulfites, GMO, or gluten'
      image='/images/vasobeet-single-front.jpg'
      question='How much is this thing on InfoWars?'
      :price='23.95'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Survival Shield X3'
      hint1='This appears to be the product anchoring th store'
      hint2='Nascent tri-iodine - but some quality control problems?'
      hint3="The X-3 turning clear is purely cosmetic and does not negatively impact the product's efficacy."
      image='/images/ssx3updateforsomereason.jpg'
      question='How much is this thing on InfoWars?'
      :price='19.95'
      :prize='1'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/ukraine_offensive_cut.mp4')
      h1 Ukraine Offensive
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/bmp-2.jpeg')
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/ukraine_flag.png'
      question='Is this Soviet or newer?'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/eat_your_ass.mp4'
      :muted='false'
    )
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity="Autographed copy of Alex's book"
      hint1='Somehow while being sued into the stone age, Alex wrote a book'
      hint2='Titled "The Great Reset" it is 264 pages of his usual word salad'
      hint3='It is way, way cheaper on Amazon'
      image='/images/71wgkteqicl_1.jpg'
      question='How much is this thing on InfoWars?'
      :price='99.99'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Limited Edition Infowars Gold Thingy'
      hint1='Exclusive limited edition proprietary one-time run'
      hint2='.999 pure 24 karat gold without paying $2,000 per ounce'
      hint3='One tenth gram of actual gold - worth $5.84 as of Friday'
      image='/images/still_1.jpg'
      question='How much is this thing on InfoWars?'
      :price='89.95'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Faraday Bag for 13 inch Laptop'
      hint1='Weatherproof nylon computer back with... velcro seal?'
      hint2='Instantly block all wireless signals and protect from remote wiping, tracking and tampering'
      hint3='Exact same SKU available on Amazon for half price'
      image='/images/13inchlaptopfront.jpg'
      question='How much is this thing on InfoWars?'
      :price='39.95'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Alpha Power'
      hint1="It’s Time To Show Them What A Real Alpha Male Looks Like!"
      hint2='While the rest of the liberal world cries and gets weaker... words words words!'
      hint3='Longifolia root, horny goat weed, tribulus terrestris fruit extract'
      image='/images/alphapowerthumb.jpg'
      question='How much is this thing on InfoWars?'
      :price='41.95'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Brain Force Ultra'
      hint1='8 beneficial super ingredients - brain supplement'
      hint2='Nootropic used daily by the Infowars Crew'
      hint3='"It is my new secret weapon for increased energy."'
      image='/images/single_2.png'
      question='How much is this thing on InfoWars?'
      :price='24.95'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Tactical Pen'
      hint1='An absolute must for anyone serious about personal defense'
      hint2='Upgrade your EDC today - "Every Day Carry"'
      hint3='Barely visible InfoWars branding at the top'
      image='/images/tacpen1.jpg'
      question='How much is this thing on InfoWars?'
      :price='15.95'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameContentWithSidebar
      template(v-slot:content)
        video(src='/video/t72.mp4' controls)
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/ukraine_flag.png'
      question='Is this Soviet or newer?'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/alex_jones_metal.mp4'
      :muted='false'
    )
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Limited Edition Face Mask'
      hint1='Prob the most curious thing I found in the catalog'
      hint2='Denying COVID is kind of Jones whole thing'
      hint3='Shield yourself and stay safe from incoming germs'
      image='/images/img_1741-newmask.jpg'
      question='How much is this thing on InfoWars?'
      :price='6.95'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='DNA Force Plus'
      hint1='InfoWars marketing are big fans of the words Force and Plus'
      hint2='Contains "Cordyceps sinensis" which is a fungus growing out of caterpillars'
      hint3='Pretty spooky disclaimer'
      image='/images/dnathumbnail-og.png'
      question='How much is this thing on InfoWars?'
      :price='74.95'
      :prize='3'
    )
      template(v-slot:post-intro)
        BackgroundImageSlide(background='/images/disclaimer.png')
    CameoPriceIsRightRound(
      celebrity='President Emoji Shirt'
      hint1='There is not a ton of stuff in this store'
      hint2='Especially light on regular merch - this is one of the few shirts'
      hint3='Show us what you think about the 46th president!'
      image='/images/emojishirt.png'
      question='How much is this thing on InfoWars?'
      :price='9.95'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Bio-RV Pro'
      hint1="Also surprising: no water filters"
      hint2='Only one line of water filtration products'
      hint3='Shitter detergent?'
      image='/images/biorv.jpg'
      question='How much is this thing on InfoWars?'
      :price='53.99'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='KA710 Forever Battery'
      hint1='Starting to run out of gas here'
      hint2="Finally found one category in Survival Accessories that wasn't empty"
      hint3='The shittiest flooblecrank on Amazon - only twice as $$$'
      image='/images/foreverbattery_hand.jpg'
      question='How much is this thing on InfoWars?'
      :price='49.95'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Ultimate Bone Broth Plus 5-Pack'
      hint1='Primal Human Nutrition'
      hint2='This one is just every powder they got in one tub'
      hint3='Bone broth, tumeric root, chaga mushroom, bee pollen, goji berries'
      image='/images/ultimate-bone-broth_5.jpg'
      question='How much is this thing on InfoWars?'
      :price='124.85'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/mt-lb.jpeg')
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/ukraine_flag.png'
      question='Is this Soviet or newer?'
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

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'
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
    CameoPriceIsRightRound,
    ItemGuess,
    GameContentWithSidebar
  },
  data () {
    return {
      items: [
        { name: 'Soviet', emoji: '👴️', value: ' the equipment' },
        { name: 'Post Soviet', emoji: '👶️', value: ' the equipment' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Luckiest Guy', cursive !important;
  @apply mt-64 text-9xl text-blue #{!important};
}

html {
  font-size: 36px;
}
</style>
