<template lang="pug">
Reveal
  .slides
    Title
    Slide
      h2.fragment Tournament of Game Show Champions
      h2.fragment You will be presented with two game show hosts
      h2.fragment Choose which has more nominations for Daytime Emmy for Game Show Host
      h2.fragment Single elimination
      h2.fragment Contrarian bonus is in effect
      h1 Game Play
    PlayerBoard
    WhichIsWhichRound(
      :items='hosts.slice(0, 2)'
      :winnerIndex='0'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(2, 4)'
      :winnerIndex='0'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(4, 6)'
      :winnerIndex='0'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(6, 8)'
      :winnerIndex='0'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(8, 10)'
      :winnerIndex='0'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(10, 12)'
      :winnerIndex='1'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(12, 14)'
      :winnerIndex='1'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    WhichIsWhichRound(
      :items='hosts.slice(14, 16)'
      :winnerIndex='1'
      question='Which host has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Climb the Ladder
    Slide
      h2.fragment Solo
      h2.fragment Start with the lowest score and go to the highest
      h2.fragment Introduce something you should name
      h2.fragment Name as many as possible in 30 seconds...
      h2.fragment ...without repeating one already named.
      h2.fragment 1 point per title!
      h1 Game Play
    Slide(class='darkgray')
      h2.text-white NASA Program Names
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/nasa_header.png'
      :prize='1'
    )
    PlayerBoard
    VideoSlide(
      background='/video/career_venn_diagram.mp4'
      :muted='false'
    )
    PlayerBoard
    ItemGuess(
      :items='[hosts[0], hosts[2]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='2'
    )
    ItemGuess(
      :items='[hosts[4], hosts[6]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='2'
    )
    ItemGuess(
      :items='[hosts[8], hosts[11]]'
      :winnerIndex='0'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='2'
    )
    ItemGuess(
      :items='[hosts[13], hosts[15]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='darkgray')
      h2.text-white Film Franchises With More Than 3 Sequels
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/franchise.png'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/robot_goalie.mp4'
      :muted='false'
    )
    PlayerBoard
    ItemGuess(
      :items='[hosts[2], hosts[6]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='3'
    )
    ItemGuess(
      :items='[hosts[8], hosts[15]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Ways To Cook An Egg
    ClimbTheLadderRound(
      :timer='30'
      headerImage='/images/franchise.png'
      :prize='3'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Championship Round!
    ItemGuess(
      :items='[hosts[6], hosts[15]]'
      :winnerIndex='1'
      question='Which hosts has more Emmy nominations?'
      headerImage='/images/showcase_showdown_header.png'
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

import WhichIsWhichRound from '@/components/WhichIsWhich/WhichIsWhichRound.vue'
import ClimbTheLadderRound from '@/components/ClimbTheLadder/ClimbTheLadderRound.vue'
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
    WhichIsWhichRound,
    ClimbTheLadderRound,
    ItemGuess
  },
  data () {
    return {
      hosts: [
        {
          name: 'Ben Bailey',
          hints: ['Comic from New York',
            'His game show was running a trivia show in a taxi cab',
            'Cash Cab ran from 2005 to 2020 (Thanks COVID)'],
          value: 7,
          image: '/images/ben_bailey.png',
          emoji: '🚖'
        },
        {
          name: 'Vicki Lawrence',
          hints: ['Comic from California',
            'Starred on the Carol Burnett show for the entire run',
            'Famed stint as a game show host for Win, Lose or Draw'],
          value: 2,
          image: '/images/vicki_lawrence.png',
          emoji: '🎭'
        },
        {
          name: 'Wayne Brady',
          hints: ['Star of the primetime improv show Whose Line Is It Anyway?',
            'Rare talent with Broadway singing chops and extensive time as a TV host',
            "Now has the reins of the classic game show from the 60s, Let's Make a Deal"
          ],
          value: 12,
          image: '/images/wayne_brady.png',
          emoji: '🎤'
        },
        {
          name: 'Steve Harvey',
          hints: ['One of the most recognizable mustaches in television',
            'Born with a severe stuttering problem in West Virginia',
            'One of the Original Kings of Comedy and now host of Family Feud'
          ],
          value: 9,
          image: '/images/steve_harvey.png',
          emoji: '🥸 '
        },
        {
          name: 'Dick Clark',
          hints: ['Aside from his apperance in Bowling for Columbine, best known for American Bandstand',
            'His personality was resurrected in the zeitgeist was his conflict with Col. Tom Parker',
            "His game show was one I still can't understand, The $20,000 Pyramid"
          ],
          value: 10,
          image: '/images/dick_clark.png',
          emoji: '🎉'
        },
        {
          name: 'Meredith Vieira',
          hints: ['I had no idea this person was a game show host',
            'Journalist who was one of the original hosts of The View',
            'Took Who Wants To Be A Millionaire to daytime'
          ],
          value: 7,
          image: '/images/meredith_vieira.png',
          emoji: '🎙️'
        },
        {
          name: 'Bob Barker',
          hints: ['Unlike many in this bracket, his only job on TV was game show host',
            'Passed at the age of 99 this year',
            'One of the few funny moments in an Adam Sandler movie'
          ],
          value: 23,
          image: '/images/bob_barker.png',
          emoji: '🎲'
        },
        {
          name: 'Jimmy Kimmel',
          hints: ['Boston comic whose cancellation for The Man Show is imminent',
            'Before his own late night show he was a routine daytime sidekick',
            "His game show was Win Ben Stein's Money before the titular host went batshit"
          ],
          value: 2,
          image: '/images/jimmy_kimmel.png',
          emoji: '🌙'
        },
        {
          name: 'Pat Sajak',
          hints: ['Was the host of the same radio show for which the dramatization Good Morning Vietnam was made',
            'Served LA as a weatherman before getting the nod to host Wheel of Fortune',
            'Retired this year after clearly hating his job for the past decade'
          ],
          value: 21,
          image: '/images/pat_sajak.png',
          emoji: '🎡'
        },
        {
          name: 'Betty White',
          hints: ['A national treasure who did literally every gig in show business',
            'She became the first woman ever to host a game show on broadcast television',
            'It was called Just Men! and featured two women competing by guessing the answers to yes/no questions from seven men'
          ],
          value: 2,
          image: '/images/betty_white.png',
          emoji: '👵'
        },
        {
          name: 'Regis Philbin',
          hints: ['Born and raised in my neighborhood in New York, no stranger to daytime TV',
            'Got his start on the talk show circuit',
            'Original host for Who Wants To Be A Millionaire, which was a total ripoff of a British show'
          ],
          value: 2,
          image: '/images/regis_philbin.png',
          emoji: '☕'
        },
        {
          name: 'Ben Stein',
          hints: ["Most famous for one scene in Ferris Bueller's Day Off",
            "Hosted Comedy Central's only successful game show",
            'Now slumming it on conservative talk radio'
          ],
          value: 4,
          image: '/images/jimmy_kimmel.png',
          emoji: '💵'
        },
        {
          name: 'Louie Anderson',
          hints: ['This famously gap toothed comic has a Saturday morning cartoon when we grew up',
            "Won an Emmy most recently for his performance as Zach Galifinakis' mom in Baskets",
            'For a long stretch, he was the host of Family Feud'
          ],
          value: 0,
          image: '/images/louie_anderson.png',
          emoji: '🤣'
        },
        {
          name: 'Alfonso Ribeiro',
          hints: ['Responsibly from one of the most instantly recognizable dance moves in television history',
            'Struggled with his career after Fresh Prince of Bel-Air',
            'Became the host of Catch 21'
          ],
          value: 2,
          image: '/images/alfonso_ribeiro.png',
          emoji: '📺'
        },
        {
          name: 'Craig Ferguson',
          hints: ['Scottish comic who never found an audience on the BBC',
            'Now among this last passing guard of late night television',
            'Had a successful run with Celebrity Name Game'
          ],
          value: 3,
          image: '/images/craig_ferguson.png',
          emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
        },
        {
          name: 'Alex Trebek',
          hints: ['Another host we recently lost, he was born in Sudbury, the setting for Shoresy',
            'He was actually the second host of the show that generated his celebrity',
            'Looked better with a mustache'
          ],
          value: 32,
          image: '/images/alex_trebek.png',
          emoji: '📚'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
