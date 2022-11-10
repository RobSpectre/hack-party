<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/money.mp4')
    VideoSlide(background='/video/costcap.mp4')
    VideoSlide(background='/video/latifi.mp4')
    VideoSlide(background='/video/money.mp4')
      h2.title Costcappening
    Slide
      h2.fragment Solo
      h2.fragment Presented with a component of a Formula 1 car
      h2.fragment Guess how many thousands of $$$ it costs
      h2.fragment Price is Right rules
      h2.fragment Exact number gets 2x points!
      h1 Game Play
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Fuel Cell'
      hint1='Only component that can not be adjusted during a race'
      hint2='Consists of four or six sections filled with foam'
      hint3='Carries the mere 29 gallons of fuel used in a race'
      image='/images/fuel_tank.png'
      question='How much does this component cost (in thousands USD)?'
      :price='150'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Steering Wheel'
      hint1='F2 and F3 drivers say this part of the car is the hardest to understand'
      hint2='11 buttons, 9 dials and a LCD screen'
      hint3='Molded to the hands of each driver'
      image='/images/steering_wheel.png'
      question='How much does this component cost (in thousands USD)?'
      :price='70'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Exhaust'
      hint1='A car can take 8 of these over the year with no penalty'
      hint2='Responsible for the most iconic sound in the sport'
      hint3='Place most likely to distribute Ferrari turbo parts onto the track'
      image='/images/exhaust.png'
      question='How much does this component cost (in thousands USD)?'
      :price='230'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='DRS system'
      hint1='Introduced to Formula 1 in 2011'
      hint2='Helps with overtakes by reducing drag for an extra 15 kph'
      hint3='Both Verstappen and Tsunoda had trouble with this all season'
      image='/images/drs.png'
      question='How much does this component cost (in thousands USD)?'
      :price='200'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Rear Wing'
      hint1='One of the most expensive Listed Team Components'
      hint2='Manufactured entirely of ultra light carbon fiber with tolerances in mm'
      hint3='Most $$$ sponsorship spot on the car'
      image='/images/rear_wing.png'
      question='How much does this component cost (in thousands USD)?'
      :price='130'
      :prize='1'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/crypto_sponsors_cut.mp4')
      h1 F1 Is Filthy With Crypto
    BackgroundImageSlide(background='/images/sbf_fortune.png')
    BackgroundImageSlide(background='/images/sbf_sale.png')
    BackgroundImageSlide(background='/images/sbf_crash.png')
    BackgroundImageSlide(background='/images/sbf_loss.png')
    BackgroundImageSlide(background='/images/crypto_pullback.png')
    VideoSlide(background='/video/crypto_sponsors_cut.mp4')
      h2.nintendo Bear Market
    CameoPriceIsRightRound(
      celebrity='Velas'
      hint1='Official crypto sponsor for Ferrari Scuderia'
      hint2='Bills itself as the fasted EVM chain'
      hint3='I still do not understand what that is.'
      image='/images/velas.png'
      question="By what percentage did this crypto value decline since joining Formula 1?"
      denomination='%'
      :price='95'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Binance'
      hint1='Official token sponsor for Scuderia Alpha Tauri'
      hint2='Binance is now the only liquid exchange left in crypto'
      hint3='This fan token they made lost 25% in a day this week'
      image='/images/binance.png'
      question="By what percentage did this crypto value decline since joining Formula 1?"
      denomination='%'
      :price='77'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/rocket_monaco.mp4'
      :muted='false'
    )
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Hydraulics'
      hint1='Essential system that has caused 5 DNFs this season'
      hint2='Controls brakes, throttle, clutch, diff, wastegate and DRS'
      hint3='One actuator dies, whole system is inoperable'
      image='/images/MT_Hydraulics_actuators.jpg'
      question='How much does this component cost (in thousands USD)?'
      :price='200'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Monocoque'
      hint1='Single biggest carbon component - one solid piece'
      hint2='Also called the survival cell'
      hint3='Most amusing part name on the car'
      image='/images/monocoque.jpg'
      question='How much does this component cost (in thousands USD)?'
      :price='1200'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Front Wing'
      hint1='Component most responsible for car balance'
      hint2='Also hides the "sacrificial crash structures" that keep drivers alive'
      hint3='Merc famously pushes the boundaries of design here'
      image='/images/frontwing.png'
      question='How much does this component cost (in thousands USD)?'
      :price='300'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Rear end'
      hint1='Clutch, drive shaft, and differential'
      hint2='Missing a lot of features - no traction control, no AWD'
      hint3='Limited slip is configurable by the driver'
      image='/images/rearend.png'
      question='How much does this component cost (in thousands USD)?'
      :price='400'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Cooling System'
      hint1='This system is responsible for cooling six different systems'
      hint2='A normal car has 1 of these - a fast street car might have 2'
      hint3='Many teams have an "icebox" in which they play dry ice before the race'
      image='/images/MT_Cooling_radiators.jpg'
      question='How much does this component cost (in thousands USD)?'
      :price='300'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/crypto_sponsors_cut.mp4')
      h2.nintendo Bear Market
    BackgroundImageSlide(background='/images/bybit.png')
    CameoPriceIsRightRound(
      celebrity='Crypto.com '
      hint1='Official crypto sponsor of Aston Martin F1 Racing Team'
      hint2='Also did a $100M deal with all of F1 last year'
      hint3='Matt Damon'
      image='/images/cryptocom.png'
      question="By what percentage did this crypto value decline since they joined Formula 1?"
      denomination='%'
      :price='91'
      :prize='5'
    )
    CameoPriceIsRightRound(
      celebrity='Tezos'
      hint1='Official crypto sponsor of McLaren F1 team'
      hint2='Slogan is "A blockchain designed to evolve" and "built to last"'
      hint3='Best performing crypto sponsor in Formula 1!'
      image='/images/'
      question="By what percentage did this crypto value decline since they joined Formula 1?"
      denomination='%'
      :price='85'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/rocket_austria.mp4'
      :muted='false'
    )
    PlayerBoard
    CameoPriceIsRightRound(
      celebrity='Transmission'
      hint1='Converts the 1000HP powerunit into drive'
      hint2='Carbon titanium box mounted directly to the engine'
      hint3='Whole thing weighs 88 pounds'
      image='/images/gearbox.png'
      question='How much does this component cost (in thousands USD)?'
      :price='600'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Brakes'
      hint1='These operate at 1200°C'
      hint2='It takes 6 months to manufacture one of these - and the car has four'
      hint3='Can only last 250 miles (e.g. one race)'
      image='/images/brakes.png'
      question='How much does this component cost (in thousands USD)?'
      :price='200'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Four Tires'
      hint1='These you never hear about on DTS and almost only hear about during a race'
      hint2='Teams get 13 sets of these for each race and must use two compounds during the race'
      hint3='Ferrari act like these only seen these for the first time this year'
      image='/images/tires.png'
      question='How much does this component cost (in thousands USD)?'
      :price='5'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Halo'
      hint1='Specified part produced by Cranfield Impact Centre'
      hint2='Can take 10.2 tons of direct force - equivalent to two elephants'
      hint3="Saved several drivers lives' so far including Grojean, Hamilton and this year Zhou"
      image='/images/halo.png'
      question='How much does this component cost (in thousands USD)?'
      :price='17'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Power Unit'
      hint1='Most complex element of the car'
      hint2='ICE, Turbo, MGU-H, MGU-K, Battery and ECU'
      hint3='The primary load bearing element of the car'
      image='/images/powerunit.png'
      question='How much does this component cost (in thousands USD)?'
      :price='11000'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/crypto_sponsors_cut.mp4')
      h2.nintendo Bear Market
    BackgroundImageSlide(background='/images/ftt.png')
    CameoPriceIsRightRound(
      celebrity='FTT'
      hint1='Official crypto sponsor of Mercedes AMG Petronas F1 Team'
      hint2='Evidently FTX loaned this token out and word of that leaked'
      hint3='Contagion coninues to destroy the crypto markets as we speak'
      image='/images/ftx.png'
      question="By what percentage did this crypto value decline since they joined Formula 1?"
      denomination='%'
      :price='97'
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
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@700&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Silkscreen', cursive !important;
  @apply mt-48 text-6xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
