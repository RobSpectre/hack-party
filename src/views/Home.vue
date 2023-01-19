<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/boil_the_frog.png')
    BackgroundImageSlide(background='/images/boil_the_frog_example.png')
    VideoSlide(background='/video/boil_the_frog.mp4')
      .title Boil The Frog
    Slide
      h2.fragment Solo
      h2.fragment You will be fed a song track by track
      h2.fragment With each incorrect answer, more tracks are added
      h2.fragment Drums, bass, guitars, other stuff and vocals
      h2.fragment Guess artist and title to score points
      h2.fragment 2X bonus for nailing it on drums only
      h2.fragment We're going to switch up play order each round
      h1 Game Play
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Let's Go!
    SnackTrackRound(
      :tracks='fuel_by_metallica'
      :items='items'
      :winnerIndex='0'
      answer='Fuel by Metallica'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='duality_by_slipknot'
      :items='items'
      :winnerIndex='0'
      answer='Duality by Slipknot'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='freak_on_a_leash_by_korn'
      :items='items'
      :winnerIndex='0'
      answer='Freak On A Leash by Korn'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='sleep_now_in_the_fire_by_rage_against_the_machine'
      :items='items'
      :winnerIndex='0'
      answer='Sleep Now In The Fire by Rage Against The Machine'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='i_am_the_highway_by_audioslave'
      :items='items'
      :winnerIndex='0'
      answer='I Am The Highway by Audioslave'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='head_like_a_haunted_house_by_queens_of_the_stone_age'
      :items='items'
      :winnerIndex='0'
      answer='Head Like A Haunted House by Queens of the Stone Age'
      playerOrder='button'
    )
    SnackTrackRound(
      :tracks='beverly_hills_by_weezer'
      :items='items'
      :winnerIndex='0'
      answer='Beverly Hills by Weezer'
      playerOrder='button'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/bigger_loser_cut.mp4')
      .loser The Biggest Loser
    ItemGuess(
      :items='tesla'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/The_Biggest_Loser_2013_logo.webp'
      question='Who is the biggest loser in 2023?'
      :fragmentItemReveal='true'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/this_place_rules.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Tracks are worth 2X
    SnackTrackRound(
      :tracks='hey_soul_sister_by_train'
      :items='items'
      :winnerIndex='0'
      answer='Hey Soul Sister by Train'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='iris_by_the_goo_goo_dolls'
      :items='items'
      :winnerIndex='0'
      answer='Iris by The Goo Goo Dolls'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='push_by_matchbox_20'
      :items='items'
      :winnerIndex='0'
      answer='Push by Matchbox 20'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='hanging_by_a_moment_by_lifehouse'
      :items='items'
      :winnerIndex='0'
      answer='Hanging by a Moment by Lifehouse'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='the_reason_by_hoobastank'
      :items='items'
      :winnerIndex='0'
      answer='The Reason by Hoobastank'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='she_hates_me_by_puddle_of_mudd'
      :items='items'
      :winnerIndex='0'
      answer='She Hates Me by Puddle of Mudd'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck'
      :items='items'
      :winnerIndex='0'
      answer='Nobody Tells Me How To Live by Kid Rock featuring Monster Truck'
      playerOrder='lowestScoreFirst'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/bigger_loser_cut.mp4')
      .loser The Biggest Loser
    ItemGuess(
      :items='coinbase'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/The_Biggest_Loser_2013_logo.webp'
      question='Who is the biggest loser in 2023?'
      :fragmentItemReveal='true'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/alex_jones.mp4'
      :muted='false'
    )
    PlayerBoard
    SnackTrackRound(
      :tracks='fancy_like_by_walker_hayes'
      :items='items'
      :winnerIndex='0'
      answer='Fancy Like by Walker Hayes'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='follow_me_by_uncle_kracker'
      :items='items'
      :winnerIndex='0'
      answer='Follow Me by Uncle Kracker'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='wherever_you_will_go_by_the_calling'
      :items='items'
      :winnerIndex='0'
      playerOrder='lowestScoreFirst'
      answer='Wherever You Will Go by The Calling'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='kiss_me_by_sixpence_none_the_richer'
      :items='items'
      :winnerIndex='0'
      playerOrder='lowestScoreFirst'
      answer='Kiss Me by Sixpence None The Richer'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='dont_speak_by_no_doubt'
      :items='items'
      :winnerIndex='0'
      playerOrder='lowestScoreFirst'
      answer='Dont Speak by No Doubt'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='believe_by_lenny_kravitz'
      :items='items'
      :winnerIndex='0'
      playerOrder='lowestScoreFirst'
      answer='Believe by Lenny Kravitz'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/video/bigger_loser_cut.mp4')
      .loser The Biggest Loser
    ItemGuess(
      :items='broadway'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/The_Biggest_Loser_2013_logo.webp'
      question='Who is the biggest loser in 2023?'
      :fragmentItemReveal='true'
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

import SnackTrackRound from '@/components/SnackTrack/SnackTrackRound.vue'

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
    SnackTrackRound,
    ItemGuess
  },
  data () {
    return {
      believe_by_lenny_kravitz: [
        '/sounds/believe_by_lenny_kravitz/0.wav',
        '/sounds/believe_by_lenny_kravitz/1.wav',
        '/sounds/believe_by_lenny_kravitz/2.wav',
        '/sounds/believe_by_lenny_kravitz/3.wav',
        '/sounds/believe_by_lenny_kravitz/4.wav'
      ],
      dont_speak_by_no_doubt: [
        '/sounds/dont_speak_by_no_doubt/0.wav',
        '/sounds/dont_speak_by_no_doubt/1.wav',
        '/sounds/dont_speak_by_no_doubt/2.wav',
        '/sounds/dont_speak_by_no_doubt/3.wav',
        '/sounds/dont_speak_by_no_doubt/4.wav'
      ],
      kiss_me_by_sixpence_none_the_richer: [
        '/sounds/kiss_me_by_sixpence_none_the_richer/0.wav',
        '/sounds/kiss_me_by_sixpence_none_the_richer/1.wav',
        '/sounds/kiss_me_by_sixpence_none_the_richer/2.wav',
        '/sounds/kiss_me_by_sixpence_none_the_richer/3.wav',
        '/sounds/kiss_me_by_sixpence_none_the_richer/4.wav'
      ],
      wherever_you_will_go_by_the_calling: [
        '/sounds/wherever_you_will_go_by_the_calling/0.wav',
        '/sounds/wherever_you_will_go_by_the_calling/1.wav',
        '/sounds/wherever_you_will_go_by_the_calling/2.wav',
        '/sounds/wherever_you_will_go_by_the_calling/3.wav',
        '/sounds/wherever_you_will_go_by_the_calling/4.wav'
      ],
      follow_me_by_uncle_kracker: [
        '/sounds/follow_me_by_uncle_kracker/0.wav',
        '/sounds/follow_me_by_uncle_kracker/1.wav',
        '/sounds/follow_me_by_uncle_kracker/2.wav',
        '/sounds/follow_me_by_uncle_kracker/3.wav',
        '/sounds/follow_me_by_uncle_kracker/4.wav'
      ],
      fancy_like_by_walker_hayes: [
        '/sounds/fancy_like_by_walker_hayes/0.wav',
        '/sounds/fancy_like_by_walker_hayes/1.wav',
        '/sounds/fancy_like_by_walker_hayes/2.wav',
        '/sounds/fancy_like_by_walker_hayes/3.wav',
        '/sounds/fancy_like_by_walker_hayes/4.wav'
      ],
      nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck: [
        '/sounds/nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck/0.wav',
        '/sounds/nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck/1.wav',
        '/sounds/nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck/2.wav',
        '/sounds/nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck/3.wav',
        '/sounds/nobody_tells_me_how_to_live_by_kid_rock_featuring_monster_truck/4.wav'
      ],
      she_hates_me_by_puddle_of_mudd: [
        '/sounds/she_hates_me_by_puddle_of_mudd/0.wav',
        '/sounds/she_hates_me_by_puddle_of_mudd/1.wav',
        '/sounds/she_hates_me_by_puddle_of_mudd/2.wav',
        '/sounds/she_hates_me_by_puddle_of_mudd/3.wav',
        '/sounds/she_hates_me_by_puddle_of_mudd/4.wav'
      ],
      the_reason_by_hoobastank: [
        '/sounds/the_reason_by_hoobastank/0.wav',
        '/sounds/the_reason_by_hoobastank/1.wav',
        '/sounds/the_reason_by_hoobastank/2.wav',
        '/sounds/the_reason_by_hoobastank/3.wav',
        '/sounds/the_reason_by_hoobastank/4.wav'
      ],
      hanging_by_a_moment_by_lifehouse: [
        '/sounds/hanging_by_a_moment_by_lifehouse/0.wav',
        '/sounds/hanging_by_a_moment_by_lifehouse/1.wav',
        '/sounds/hanging_by_a_moment_by_lifehouse/2.wav',
        '/sounds/hanging_by_a_moment_by_lifehouse/3.wav',
        '/sounds/hanging_by_a_moment_by_lifehouse/4.wav'
      ],
      push_by_matchbox_20: [
        '/sounds/push_by_matchbox_20/0.wav',
        '/sounds/push_by_matchbox_20/1.wav',
        '/sounds/push_by_matchbox_20/2.wav',
        '/sounds/push_by_matchbox_20/3.wav',
        '/sounds/push_by_matchbox_20/4.wav'
      ],
      iris_by_the_goo_goo_dolls: [
        '/sounds/iris_by_the_goo_goo_dolls/0.wav',
        '/sounds/iris_by_the_goo_goo_dolls/1.wav',
        '/sounds/iris_by_the_goo_goo_dolls/2.wav',
        '/sounds/iris_by_the_goo_goo_dolls/3.wav',
        '/sounds/iris_by_the_goo_goo_dolls/4.wav'
      ],
      hey_soul_sister_by_train: [
        '/sounds/hey_soul_sister_by_train/0.wav',
        '/sounds/hey_soul_sister_by_train/1.wav',
        '/sounds/hey_soul_sister_by_train/2.wav',
        '/sounds/hey_soul_sister_by_train/3.wav',
        '/sounds/hey_soul_sister_by_train/4.wav'
      ],
      beverly_hills_by_weezer: [
        '/sounds/beverly_hills_by_weezer/0.wav',
        '/sounds/beverly_hills_by_weezer/1.wav',
        '/sounds/beverly_hills_by_weezer/2.wav',
        '/sounds/beverly_hills_by_weezer/3.wav',
        '/sounds/beverly_hills_by_weezer/4.wav'
      ],
      head_like_a_haunted_house_by_queens_of_the_stone_age: [
        '/sounds/head_like_a_haunted_house_by_queens_of_the_stone_age/0.wav',
        '/sounds/head_like_a_haunted_house_by_queens_of_the_stone_age/1.wav',
        '/sounds/head_like_a_haunted_house_by_queens_of_the_stone_age/2.wav',
        '/sounds/head_like_a_haunted_house_by_queens_of_the_stone_age/3.wav',
        '/sounds/head_like_a_haunted_house_by_queens_of_the_stone_age/4.wav'
      ],
      i_am_the_highway_by_audioslave: [
        '/sounds/i_am_the_highway_by_audioslave/0.wav',
        '/sounds/i_am_the_highway_by_audioslave/1.wav',
        '/sounds/i_am_the_highway_by_audioslave/2.wav',
        '/sounds/i_am_the_highway_by_audioslave/3.wav',
        '/sounds/i_am_the_highway_by_audioslave/4.wav'
      ],
      sleep_now_in_the_fire_by_rage_against_the_machine: [
        '/sounds/sleep_now_in_the_fire_by_rage_against_the_machine/0.wav',
        '/sounds/sleep_now_in_the_fire_by_rage_against_the_machine/1.wav',
        '/sounds/sleep_now_in_the_fire_by_rage_against_the_machine/2.wav',
        '/sounds/sleep_now_in_the_fire_by_rage_against_the_machine/3.wav',
        '/sounds/sleep_now_in_the_fire_by_rage_against_the_machine/4.wav'
      ],
      freak_on_a_leash_by_korn: [
        '/sounds/freak_on_a_leash_by_korn/0.wav',
        '/sounds/freak_on_a_leash_by_korn/1.wav',
        '/sounds/freak_on_a_leash_by_korn/2.wav',
        '/sounds/freak_on_a_leash_by_korn/3.wav',
        '/sounds/freak_on_a_leash_by_korn/4.wav'
      ],
      duality_by_slipknot: [
        '/sounds/duality_by_slipknot/0.wav',
        '/sounds/duality_by_slipknot/1.wav',
        '/sounds/duality_by_slipknot/2.wav',
        '/sounds/duality_by_slipknot/3.wav',
        '/sounds/duality_by_slipknot/4.wav'
      ],
      fuel_by_metallica: [
        '/sounds/fuel_by_metallica/0.wav',
        '/sounds/fuel_by_metallica/1.wav',
        '/sounds/fuel_by_metallica/2.wav',
        '/sounds/fuel_by_metallica/3.wav',
        '/sounds/fuel_by_metallica/4.wav'
      ],
      items: [
        { name: 'Correct', emoji: '👍️', value: ' the song' },
        { name: 'Wrong', emoji: '👎️', value: ' the song' }
      ],
      tesla: [
        { name: 'New Teslas $$$', emoji: '🚗️', value: ' 19%' },
        { name: 'Used Teslas at Carmax', emoji: '🏪️', value: ' 57%' }
      ],
      coinbase: [
        { name: 'Coinbase Employees', emoji: '🚗️', value: ' 20%' },
        { name: 'Coinbase Volume', emoji: '🏪️', value: ' 18%' }
      ],
      broadway: [
        { name: 'Broadway shows', emoji: '🎭️', value: ' 11' },
        { name: 'Netflix shows', emoji: '📺️', value: ' 3' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Slackey&family=Unbounded:wght@900&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Unbounded', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-white normal-case #{!important};
}

.loser {
  font-family: 'Slackey', cursive !important;
  @apply mt-72 text-9xl skew-y-12 text-white normal-case #{!important};
}

html {
  font-size: 36px;
}

</style>
