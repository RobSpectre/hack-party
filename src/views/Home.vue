<template lang="pug">
Reveal
  .slides
    Title
    Slide(class='darkgray')
      h2.text-white Pop Tunes In Big Flicks
    SnackTrackRound(
      :tracks='miserlou_by_dick_dale_and_his_del_tones'
      :items='items'
      :winnerIndex='0'
      answer='Miserlou by Dick Dale and His Del-tones'
    )
    SnackTrackRound(
      :tracks='tequila_by_the_champs'
      :items='items'
      :winnerIndex='0'
      answer='Tequila by The Champs'
    )
    SnackTrackRound(
      :tracks='lust_for_life_by_iggy_pop'
      :items='items'
      :winnerIndex='0'
      answer='Lust for Life by Iggy Pop'
    )
    SnackTrackRound(
      :tracks='hip_to_be_square_by_huey_lewis_and_the_news'
      :items='items'
      :winnerIndex='0'
      answer='Hip To Be Square by Huey Lewis and the News'
    )
    SnackTrackRound(
      :tracks='where_is_my_mind_by_pixies'
      :items='items'
      :winnerIndex='0'
      answer='Where Is My Mind by Pixies'
    )
    SnackTrackRound(
      :tracks='tiny_dancer_by_elton_john'
      :items='items'
      :winnerIndex='0'
      answer='Tiny Dancer by Elton John'
    )
    SnackTrackRound(
      :tracks='every_sperm_is_sacred_by_monty_python'
      :items='items'
      :winnerIndex='0'
      answer='Every Sperm Is Sacred by Monty Python'
    )
    PlayerBoard
    BackgroundImageSlide(background='/images/ken_block_obit.png')
    BackgroundImageSlide(background='/images/dc_shoes.jpg')
    VideoSlide(background='/video/gymkhan_5_cut.mp4')
    BackgroundImageSlide(background='/images/hoonigan.jpg')
    BackgroundImageSlide(background='/images/ken_block_redefined.png')
    BackgroundImageSlide(background='/images/43_retired.png')
    BackgroundImageSlide(background='/video/dakar_tribute.mp4')
    VideoSlide(
      background='/video/gymkhana_7.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white VH1 One Hit Wonders
    SnackTrackRound(
      :tracks='luftballons_by_nena'
      :items='items'
      :winnerIndex='0'
      answer='99 Luftballons by Nena'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='jump_around_by_house_of_pain'
      :items='items'
      :winnerIndex='0'
      answer='Jump Around by House of Pain'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='bitch_by_meredith_brooks'
      :items='items'
      :winnerIndex='0'
      answer='Bitch by Meredith Brooks'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='hell_by_squirrel_nut_zippers'
      :items='items'
      :winnerIndex='0'
      answer='Hell by Squirrel Nut Zippers'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='mmm_mmm_mmm_mmm_by_crash_test_dummies'
      :items='items'
      :winnerIndex='0'
      answer='Mmm mmm mmm mmm by Crash Test Dummies'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='how_do_you_talk_to_an_angel_by_the_heights'
      :items='items'
      :winnerIndex='0'
      answer='How Do You Talk To An Angel by The Heights'
      :prize='2'
    )
    SnackTrackRound(
      :tracks='eat_it_by_weird_al_yankovic'
      :items='items'
      :winnerIndex='0'
      answer='Eat It by Weird Al Yankovic'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/zac_learns_pace_notes.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Rob's most listened from 2022
    SnackTrackRound(
      :tracks='sea_level_by_dan_andriano_and_the_bygones'
      :items='items'
      :winnerIndex='0'
      answer='Sea Level by Dan Andriano and the Bygones'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='daytona_sand_by_orville_peck'
      :items='items'
      :winnerIndex='0'
      answer='Daytona Sand by Orville Peck'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='the_devils_swing_by_bridge_city_sinners'
      :items='items'
      :winnerIndex='0'
      answer='The Devils Swing by Bridge City Sinners'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='roll_away_like_a_stone_by_butch_walker_as_glenn'
      :items='items'
      :winnerIndex='0'
      answer='Roll Away Like A Stone By Butch Walker As Glenn'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='on_the_dark_side_by_corey_taylor'
      :items='items'
      :winnerIndex='0'
      answer='On The Dark Side by Corey Taylor'
      :prize='3'
    )
    SnackTrackRound(
      :tracks='here_i_go_again_by_whitesnake'
      :items='items'
      :winnerIndex='0'
      answer='Here I Go Again By Whitesnake'
      :prize='3'
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

import SnackTrackRound from '@/components/SnackTrack/SnackTrackRound.vue'

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
    SnackTrackRound
  },
  data () {
    return {
      on_the_dark_side_by_corey_taylor: [
        '/sounds/on_the_dark_side_by_corey_taylor/0.wav',
        '/sounds/on_the_dark_side_by_corey_taylor/1.wav',
        '/sounds/on_the_dark_side_by_corey_taylor/2.wav',
        '/sounds/on_the_dark_side_by_corey_taylor/3.wav',
        '/sounds/on_the_dark_side_by_corey_taylor/4.wav'
      ],
      roll_away_like_a_stone_by_butch_walker_as_glenn: [
        '/sounds/roll_away_like_a_stone_by_butch_walker_as_glenn/0.wav',
        '/sounds/roll_away_like_a_stone_by_butch_walker_as_glenn/1.wav',
        '/sounds/roll_away_like_a_stone_by_butch_walker_as_glenn/2.wav',
        '/sounds/roll_away_like_a_stone_by_butch_walker_as_glenn/3.wav',
        '/sounds/roll_away_like_a_stone_by_butch_walker_as_glenn/4.wav'
      ],
      the_devils_swing_by_bridge_city_sinners: [
        '/sounds/the_devils_swing_by_bridge_city_sinners/0.wav',
        '/sounds/the_devils_swing_by_bridge_city_sinners/1.wav',
        '/sounds/the_devils_swing_by_bridge_city_sinners/2.wav',
        '/sounds/the_devils_swing_by_bridge_city_sinners/3.wav',
        '/sounds/the_devils_swing_by_bridge_city_sinners/4.wav'
      ],
      daytona_sand_by_orville_peck: [
        '/sounds/daytona_sand_by_orville_peck/0.wav',
        '/sounds/daytona_sand_by_orville_peck/1.wav',
        '/sounds/daytona_sand_by_orville_peck/2.wav',
        '/sounds/daytona_sand_by_orville_peck/3.wav',
        '/sounds/daytona_sand_by_orville_peck/4.wav'
      ],
      sea_level_by_dan_andriano_and_the_bygones: [
        '/sounds/sea_level_by_dan_andriano_and_the_bygones/0.wav',
        '/sounds/sea_level_by_dan_andriano_and_the_bygones/1.wav',
        '/sounds/sea_level_by_dan_andriano_and_the_bygones/2.wav',
        '/sounds/sea_level_by_dan_andriano_and_the_bygones/3.wav',
        '/sounds/sea_level_by_dan_andriano_and_the_bygones/4.wav'
      ],
      here_i_go_again_by_whitesnake: [
        '/sounds/here_i_go_again_by_whitesnake/0.wav',
        '/sounds/here_i_go_again_by_whitesnake/1.wav',
        '/sounds/here_i_go_again_by_whitesnake/2.wav',
        '/sounds/here_i_go_again_by_whitesnake/3.wav',
        '/sounds/here_i_go_again_by_whitesnake/4.wav'
      ],
      eat_it_by_weird_al_yankovic: [
        '/sounds/eat_it_by_weird_al_yankovic/0.wav',
        '/sounds/eat_it_by_weird_al_yankovic/1.wav',
        '/sounds/eat_it_by_weird_al_yankovic/2.wav',
        '/sounds/eat_it_by_weird_al_yankovic/3.wav',
        '/sounds/eat_it_by_weird_al_yankovic/4.wav'
      ],
      how_do_you_talk_to_an_angel_by_the_heights: [
        '/sounds/how_do_you_talk_to_an_angel_by_the_heights/0.wav',
        '/sounds/how_do_you_talk_to_an_angel_by_the_heights/1.wav',
        '/sounds/how_do_you_talk_to_an_angel_by_the_heights/2.wav',
        '/sounds/how_do_you_talk_to_an_angel_by_the_heights/3.wav',
        '/sounds/how_do_you_talk_to_an_angel_by_the_heights/4.wav'
      ],
      mmm_mmm_mmm_mmm_by_crash_test_dummies: [
        '/sounds/mmm_mmm_mmm_mmm_by_crash_test_dummies/0.wav',
        '/sounds/mmm_mmm_mmm_mmm_by_crash_test_dummies/1.wav',
        '/sounds/mmm_mmm_mmm_mmm_by_crash_test_dummies/2.wav',
        '/sounds/mmm_mmm_mmm_mmm_by_crash_test_dummies/3.wav',
        '/sounds/mmm_mmm_mmm_mmm_by_crash_test_dummies/4.wav'
      ],
      hell_by_squirrel_nut_zippers: [
        '/sounds/hell_by_squirrel_nut_zippers/0.wav',
        '/sounds/hell_by_squirrel_nut_zippers/1.wav',
        '/sounds/hell_by_squirrel_nut_zippers/2.wav',
        '/sounds/hell_by_squirrel_nut_zippers/3.wav',
        '/sounds/hell_by_squirrel_nut_zippers/4.wav'
      ],
      bitch_by_meredith_brooks: [
        '/sounds/bitch_by_meredith_brooks/0.wav',
        '/sounds/bitch_by_meredith_brooks/1.wav',
        '/sounds/bitch_by_meredith_brooks/2.wav',
        '/sounds/bitch_by_meredith_brooks/3.wav',
        '/sounds/bitch_by_meredith_brooks/4.wav'
      ],
      jump_around_by_house_of_pain: [
        '/sounds/jump_around_by_house_of_pain/0.wav',
        '/sounds/jump_around_by_house_of_pain/1.wav',
        '/sounds/jump_around_by_house_of_pain/2.wav',
        '/sounds/jump_around_by_house_of_pain/3.wav',
        '/sounds/jump_around_by_house_of_pain/4.wav'
      ],
      luftballons_by_nena: [
        '/sounds/99_luftballons_by_nena/0.wav',
        '/sounds/99_luftballons_by_nena/1.wav',
        '/sounds/99_luftballons_by_nena/2.wav',
        '/sounds/99_luftballons_by_nena/3.wav',
        '/sounds/99_luftballons_by_nena/4.wav'
      ],
      every_sperm_is_sacred_by_monty_python: [
        '/sounds/every_sperm_is_sacred_by_monty_python/0.wav',
        '/sounds/every_sperm_is_sacred_by_monty_python/1.wav',
        '/sounds/every_sperm_is_sacred_by_monty_python/2.wav',
        '/sounds/every_sperm_is_sacred_by_monty_python/4.wav',
        '/sounds/every_sperm_is_sacred_by_monty_python/3.wav'
      ],
      tiny_dancer_by_elton_john: [
        '/sounds/tiny_dancer_by_elton_john/0.wav',
        '/sounds/tiny_dancer_by_elton_john/1.wav',
        '/sounds/tiny_dancer_by_elton_john/2.wav',
        '/sounds/tiny_dancer_by_elton_john/4.wav',
        '/sounds/tiny_dancer_by_elton_john/3.wav'
      ],
      where_is_my_mind_by_pixies: [
        '/sounds/where_is_my_mind_by_pixies/0.wav',
        '/sounds/where_is_my_mind_by_pixies/1.wav',
        '/sounds/where_is_my_mind_by_pixies/2.wav',
        '/sounds/where_is_my_mind_by_pixies/4.wav',
        '/sounds/where_is_my_mind_by_pixies/3.wav'
      ],
      tequila_by_the_champs: [
        '/sounds/tequila_by_the_champs/0.wav',
        '/sounds/tequila_by_the_champs/1.wav',
        '/sounds/tequila_by_the_champs/2.wav',
        '/sounds/tequila_by_the_champs/4.wav',
        '/sounds/tequila_by_the_champs/3.wav'
      ],
      miserlou_by_dick_dale_and_his_del_tones: [
        '/sounds/miserlou_by_dick_dale_and_his_del_tones/0.wav',
        '/sounds/miserlou_by_dick_dale_and_his_del_tones/1.wav',
        '/sounds/miserlou_by_dick_dale_and_his_del_tones/2.wav',
        '/sounds/miserlou_by_dick_dale_and_his_del_tones/4.wav',
        '/sounds/miserlou_by_dick_dale_and_his_del_tones/3.wav'
      ],
      lust_for_life_by_iggy_pop: [
        '/sounds/lust_for_life_by_iggy_pop/0.wav',
        '/sounds/lust_for_life_by_iggy_pop/1.wav',
        '/sounds/lust_for_life_by_iggy_pop/2.wav',
        '/sounds/lust_for_life_by_iggy_pop/4.wav',
        '/sounds/lust_for_life_by_iggy_pop/3.wav'
      ],
      hip_to_be_square_by_huey_lewis_and_the_news: [
        '/sounds/hip_to_be_square_by_huey_lewis_and_the_news/0.wav',
        '/sounds/hip_to_be_square_by_huey_lewis_and_the_news/1.wav',
        '/sounds/hip_to_be_square_by_huey_lewis_and_the_news/2.wav',
        '/sounds/hip_to_be_square_by_huey_lewis_and_the_news/4.wav',
        '/sounds/hip_to_be_square_by_huey_lewis_and_the_news/3.wav'
      ],
      items: [
        { name: 'Correct', emoji: '👍️', value: ' the song' },
        { name: 'Wrong', emoji: '👎️', value: ' the song' }
      ]
    }
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
