<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/starship.mp4')
    VideoSlide(background='/video/starship.mp4')
      .title Over / Under in Outer Space
    Slide
      h2.fragment Solo
      h2.fragment Two space programs
      h2.fragment Brief intro on each
      h2.fragment Guess which cost the most
      h2.fragment Contrarian bonus in effect!
      h1 Game Play
    WhichIsWhichRound(
      v-for='(round, index) in game.slice(0, 5)'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='Which mission was more expensive?'
      headerImage='/images/header_space.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/sheeran_trial.mp4')
    BackgroundImageSlide(background='/images/times_article.png')
    VideoSlide(background='/video/sheeran_trial.mp4')
      .bosstitle You Be The Judge
    Slide
      h2.fragment Solo
      h2.fragment Excerpts of two tunes involved in copyright suit
      h2.fragment Guess which won at trial
      h2.fragment Contrarian bonus in effect!
      h1 Game Play
    AudioChoiceRound(
      src='/sounds/a-harrison.mp3'
      :items='chiffon_v_harrison'
      :winnerIndex='0'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='3'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/a-chiffons.mp3')
    AudioChoiceRound(
      src='/sounds/b-twolivecrew.mp3'
      :items='orbison_v_twolivecrew'
      :winnerIndex='0'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='3'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/b-orbison.mp3')
    PlayerBoard
    VideoSlide(
      background='/video/every_scifi_show.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 2x!
    WhichIsWhichRound(
      v-for='(round, index) in game.slice(5, 10)'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='Which mission was more expensive?'
      headerImage='/images/header_space.png'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/sheeran_trial.mp4')
      .bosstitle You Be The Judge
    AudioChoiceRound(
      src='/sounds/c-bolton.mp3'
      :items='isley_v_bolton'
      :winnerIndex='0'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='5'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/c-isleybrothers.mp3')
    AudioChoiceRound(
      src='/sounds/d-thicke.mp3'
      :items='gaye_v_thicke'
      :winnerIndex='0'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='5'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/d-thicke.mp3')
    PlayerBoard
    VideoSlide(
      background='/video/xo.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are 3x!
    WhichIsWhichRound(
      v-for='(round, index) in game.slice(10, 15)'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='Which mission was more expensive?'
      headerImage='/images/header_space.png'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/sheeran_trial.mp4')
      .bosstitle You Be The Judge
    PlayerBoard
    AudioChoiceRound(
      src='/sounds/e-zeppelin.mp3'
      :items='spirit_v_zeppelin'
      :winnerIndex='1'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='10'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/e-taurus.mp3')
    AudioChoiceRound(
      src='/sounds/f-perry.mp3'
      :items='flame_v_perry'
      :winnerIndex='1'
      question='Who won the case?'
      headerImage='/images/sheeran_case.png'
      :prize='10'
    )
      template(v-slot:header)
        AudioPlayer(src='/sounds/f-joyfulnoise.mp3')
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
import WhichIsWhichRound from '@/components/WhichIsWhich/WhichIsWhichRound.vue'
import GameContentWithSidebar from '../components/base/GameContentWithSidebar.vue'
import AudioPlayer from '../components/AuctionEar/AudioPlayer.vue'
import AudioChoiceRound from '../components/AudioChoice/AudioChoiceRound.vue'

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
    WhichIsWhichRound,
    GameContentWithSidebar,
    AudioPlayer,
    AudioChoiceRound
  },
  data () {
    return {
      chiffon_v_harrison: [
        { name: 'The Chiffons', emoji: '💃', value: ' the victor' },
        { name: 'George Harrison', emoji: '🎸', value: ' the victor' }
      ],
      orbison_v_twolivecrew: [
        { name: 'Roy Orbison', emoji: '🕶️', value: ' the victor' },
        { name: '2 Live Crew', emoji: '🎤', value: ' the victor' }
      ],
      isley_v_bolton: [
        { name: 'The Isley Brothers', emoji: '🎙️', value: ' the victor' },
        { name: 'Michael Bolton', emoji: '🎤', value: ' the victor' }
      ],
      gaye_v_thicke: [
        { name: 'Marvin Gaye', emoji: '🎶', value: ' the victor' },
        { name: 'Robin Thicke', emoji: '🕺', value: ' the victor' }
      ],
      spirit_v_zeppelin: [
        { name: 'Spirit', emoji: '👻', value: ' the victor' },
        { name: 'Led Zeppelin', emoji: '🎸', value: ' the victor' }
      ],
      flame_v_perry: [
        { name: 'Flame', emoji: '🔥', value: ' the victor' },
        { name: 'Katy Perry', emoji: '🌈 ', value: ' the victor' }
      ],
      game: [
        [
          {
            name: 'GLONASS',
            hints: ['Global Navigation Satellite System', 'Russian satellite system', 'Operational since 1995'],
            value: 2000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Stamp-russia2016-glonass.png',
            emoji: '🛰️'
          },
          {
            name: 'GPS',
            hints: ['Global Positioning System', 'US satellite system', 'Operational since 1978'],
            value: 10000,
            image: 'https://insidegnss-com.exactdn.com/wp-content/uploads/2018/01/GPS%20IIR-M_2_illustration_web.jpg?strip=all&lossy=1&ssl=1',
            emoji: '🌎'
          }
        ],
        [
          {
            name: 'Deep Impact',
            hints: ['NASA mission to study comet Tempel 1', 'Launched in 2005', 'Created an impact crater on the comet'],
            value: 333,
            image: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2M2IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--776c30a09052b30f2a5da68148b110d4a5c04995/deep_impact.jpg?disposition=attachment',
            emoji: '💥'
          },
          {
            name: 'Psyche',
            hints: ['NASA mission to study asteroid Psyche', 'Pushed to 2029', 'The asteroid may be a metallic core of a planet'],
            value: 850,
            image: 'https://static01.nyt.com/images/2022/06/24/science/24nasa-psyche/24nasa-psyche-jumbo.jpg?quality=75&auto=webp',
            emoji: '🪐'
          }
        ],
        [
          {
            name: 'Voyager',
            hints: ['NASA mission to study outer Solar System', 'Launched in 1977', 'Voyager 1 is the farthest human-made object from Earth'],
            value: 2500,
            image: 'https://voyager.jpl.nasa.gov/assets/images/galleries/illustrations/Voyager_1_and_2_position.jpg',
            emoji: '🛸'
          },
          {
            name: 'Viking',
            hints: ['NASA mission to Mars', 'Launched in 1975', 'First successful Mars landings'],
            value: 935,
            image: 'https://mars.nasa.gov/system/content_pages/main_images/382_viking-lander-PIA09703.jpg',
            emoji: '🚀'
          }
        ],
        [
          {
            name: 'Curiosity',
            hints: ['NASA Mars Science Laboratory mission', 'Landed in 2012', 'Carries the most advanced suite of scientific instruments ever sent to Mars'],
            value: 3049,
            image: 'https://mars.nasa.gov/system/resources/detail_files/25382_PIA24173-1600.jpg',
            emoji: '🤖'
          },
          {
            name: 'Perseverance',
            hints: ['NASA Mars 2020 mission', 'Landed in 2021', 'Carries the first helicopter to fly on another planet'],
            value: 2930,
            image: 'https://mars.nasa.gov/system/resources/detail_files/25790_First_selfie-1200.gif',
            emoji: '🚁'
          }
        ],
        [
          {
            name: 'Galileo',
            hints: ['NASA mission to Jupiter', 'Orbited Jupiter and its moons', 'Sent a probe into Jupiter'],
            value: 1500,
            image: 'https://solarsystem.nasa.gov/internal_resources/800/',
            emoji: '🛰️'
          },
          {
            name: 'Magellan',
            hints: ['NASA mission to Venus', 'Orbited and mapped Venus surface', 'Ended mission by plunging into Venus'],
            value: 1080,
            image: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ003IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b7bcfec4fab31c6464d3d9c39607148587b5c840/Magellan_deploy.jpg?disposition=attachment',
            emoji: '🪐'
          }
        ],
        [
          {
            name: 'Cassini',
            hints: ['NASA mission to Saturn', 'Orbited Saturn and its moons', 'Sent a probe into the atmosphere of Saturn'],
            value: 3278,
            image: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBak03IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f778beeef78154b94d5c03c4cf92a82d8a3d67dd/69_IMG001942_768.jpg?disposition=attachment',
            emoji: '🪐'
          },
          {
            name: 'Mars Odyssey',
            hints: ['NASA mission to Mars', 'Began orbiting Mars in 2001', 'Carried instruments to study the Martian surface and atmosphere'],
            value: 297,
            image: 'https://mars.nasa.gov/layout/odyssey/images/odyssey-spacecraft.png',
            emoji: '🔴'
          }
        ],
        [
          {
            name: 'Apollo 11',
            hints: ['First crewed mission to land on the Moon', 'Neil Armstrong and Buzz Aldrin walked on the Moon', 'Launched on July 16, 1969'],
            value: 355,
            image: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/as11-40-5944.jpg',
            emoji: '🌕'
          },
          {
            name: 'SpaceX Crew-1',
            hints: ['First operational crewed mission by SpaceX', 'Carried four astronauts to the ISS', 'Launched on November 15, 2020'],
            value: 207,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ISS-64_SpaceX_Crew-1_docked_to_IDA-2.jpg/1920px-ISS-64_SpaceX_Crew-1_docked_to_IDA-2.jpg',
            emoji: '🚀'
          }
        ],
        [
          {
            name: 'Mir',
            hints: ['Modular space station', 'Longest continuous human presence in space', 'Operated from 1986 to 2001'],
            value: 4200,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mir_Space_Station_viewed_from_Endeavour_during_STS-89.jpg',
            emoji: '🛰️'
          },
          {
            name: 'Galileo',
            hints: ['Global satellite navigation system', 'Launched by the European Union', 'Operational since 2016'],
            value: 6300,
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Artwork_Galileo-Io-Jupiter.JPG',
            emoji: '🌍'
          }
        ],
        [
          {
            name: 'Phoenix',
            hints: ['Mars lander mission', 'Discovered water ice on Mars', 'Operated from 2007 to 2008'],
            value: 420,
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Phoenix_landing.jpg',
            emoji: '🚀'
          },
          {
            name: 'Apollo 14',
            hints: ['Third manned mission to land on the Moon', 'Carried out scientific experiments and collected samples', 'Launched in 1971'],
            value: 417,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Apollo_14_Shepard.jpg',
            emoji: '🌕'
          }
        ],
        [
          {
            name: 'Stardust',
            hints: ['Sample return mission', 'Collected dust samples from comet Wild 2', 'Operated from 1999 to 2006'],
            value: 300,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Stardust_-_Concepcao_artistica.jpg',
            emoji: '✨'
          },
          {
            name: 'NEAR',
            hints: ['Asteroid orbiter and lander mission', 'First spacecraft to orbit and land on an asteroid', 'Operated from 1996 to 2001'],
            value: 225,
            image: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEE3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1c3a0204187124ab224d7789ae8aa5863d332133/nearspacecraft.jpg',
            emoji: '🪐'
          }
        ],
        [
          {
            name: 'International Space Station',
            hints: ['Orbital space station', 'Collaborative project among multiple countries', 'First component launched in 1998'],
            value: 160000,
            image: 'https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg',
            emoji: '🛰️'
          },
          {
            name: 'Space Shuttle Program',
            hints: ['Re-usable spacecraft system', 'Launched and landed like a conventional aircraft', 'Operated from 1981 to 2011'],
            value: 199000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg',
            emoji: '🚀'
          }
        ],
        [
          {
            name: 'Hubble Space Telescope',
            hints: ['Orbiting observatory', 'Launched in 1990', 'Has made over 1.3 million observations'],
            value: 10500,
            image: 'https://i.insider.com/60d0e3c9db3f80001848d09f?width=700',
            emoji: '🔭'
          },
          {
            name: 'James Webb Telescope',
            hints: ['Next-generation space observatory', 'Planned to launch in 2021', 'Intended to study every phase in the history of our Universe'],
            value: 10000,
            image: 'https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDA2IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--99c920b7431d0815e8f94fa95f1508d2503f1cbd/JWST_Illustration-1280.jpg',
            emoji: '🚀'
          }
        ],
        [
          {
            name: 'Atlas',
            hints: ['Family of US missiles and space launch vehicles', 'First launched in 1957', 'Flew 605 missions'],
            value: 17000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Atlas_EELV_family.png',
            emoji: '🚀'
          },
          {
            name: 'Space Launch System (SLS)',
            hints: ['Powerful rocket designed for deep space exploration', 'Intended to launch NASA\'s Artemis program', 'First launch Nov 2022'],
            value: 23000,
            image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/1-sls_block1_noeas_afterburner_engmarkings_sm_5_-_copy.jpg',
            emoji: '🚀'
          }
        ],
        [
          {
            name: 'Project Mercury',
            hints: ['First human spaceflight program of the United States', 'Operated from 1958 to 1963, consisted of six manned missions', 'Put the first American astronaut in space'],
            value: 384.2,
            image: 'https://www.nasa.gov/sites/default/files/gpn-2000-000859.jpg',
            emoji: '♈️'
          },
          {
            name: 'Project Gemini',
            hints: ['Second human spaceflight program of the United States', 'Operated from 1961 to 1966, consisted of ten manned missions', 'Conducted important precursor missions for the Apollo program'],
            value: 1636.3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/S66-63536.jpg',
            emoji: '♊️'
          }
        ],
        [
          {
            name: 'New Horizons',
            hints: ['Launched in 2006 to study Pluto and the Kuiper Belt', 'First spacecraft to fly by Pluto', 'Continues to explore the outer solar system'],
            value: 700,
            image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nh-surface.jpg',
            emoji: '🪐'
          },
          {
            name: 'Dawn',
            hints: ['Launched in 2007 to study two asteroids, Vesta and Ceres', 'First spacecraft to orbit two extraterrestrial bodies', 'Used ion propulsion for interplanetary travel'],
            value: 472,
            image: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/missionswebdawn_XLMpck3.jpg',
            emoji: '🛰️'
          }
        ]
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Foldit:wght@700&family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Bruno Ace', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.bosstitle {
  font-family: 'Foldit', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
