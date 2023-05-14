<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/musiclm_website.png')
    BackgroundImageSlide(background='/images/motionarray_website.png')
    BackgroundImageSlide(background='/images/canned.gif')
      .title Canned or Computed?
    Slide
      h2.fragment 19 seconds of music
      h2.fragment Is it canned from a royalty free music service?
      h2.fragment Or computed by Google's MusicLM?
      h2.fragment Contrarian bonus in effect
      h2.fragment If it is generated, guess the prompt!
      h1 Game play
    PlayerBoard
    AudioChoiceRound(
      src='/sounds/musiclm_soulful_jazz_for_a_dinner_party.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png')
      template(v-slot:header)
        h2.text-white.fragment Soulful jazz for a dinner party
    AudioChoiceRound(
      src='/sounds/motion_lets_go.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    AudioChoiceRound(
      src='/sounds/musiclm_songs_that_would_play_in_a_poolside_party_with_light_summer_vibes.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png')
      template(v-slot:header)
        h2.text-white.fragment Songs that would play in a poolside party with light summer vibes
    AudioChoiceRound(
      src='/sounds/musiclm_irish_folk_music_with_fiddle_and_bagpipes_serving_as_intro_music_for_a_star_pitcher_in_baseball.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png')
      template(v-slot:header)
        h2.text-white.fragment Irish folk music with fiddle and bagpipes serving as intro music for a star pitcher in baseball
    AudioChoiceRound(
      src='/sounds/motion_sky_eyes.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    AudioChoiceRound(
      src='/sounds/motion_this_fire.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
    )
    PlayerBoard
    VideoSlide(
      background='/video/video_games.mp4'
      :muted='false'
    )
    PlayerBoard
    AudioChoiceRound(
      src='/sounds/musiclm_instrumental_interlude_from_an_upbeat_jam_band_from_the_70_s.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='2')
      template(v-slot:header)
        h2.text-white.fragment Instrumental interlude from an upbeat jam band
    AudioChoiceRound(
      src='/sounds/musiclm_instrumental_intro_music_for_a_late_night_talk_show_hosted_by_a_large_language_model.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='2')
      template(v-slot:header)
        h2.text-white.fragment Instrumental intro music for a late night talk show hosted by a large language model
    AudioChoiceRound(
      src='/sounds/motion_our_homeland.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    AudioChoiceRound(
      src='/sounds/musiclm_sorrowful_instrumental_string_arrangement_playing_for_a_cancelled_political_rally.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='2')
      template(v-slot:header)
        h2.text-white.fragment Instrumental intro music for a late night talk show hosted by a large language model
    AudioChoiceRound(
      src='/sounds/motion_funny_little_parrots.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    AudioChoiceRound(
      src='/sounds/motion_capture_this.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/electroboom.mp4'
      :muted='false'
    )
    PlayerBoard
    AudioChoiceRound(
      src='/sounds/musiclm_dubstep_with_a_high_bpm_and_thundering_bass.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='3'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='3')
      template(v-slot:header)
        h2.text-white.fragment Dubstep with a high bpm and thundering bass
    AudioChoiceRound(
      src='/sounds/motion_fiery_latin_nights.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='3'
    )
    AudioChoiceRound(
      src='/sounds/musiclm_repetitive_melody_that_creates_an_eerie_unsettling_atmosphere.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='3'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='3')
      template(v-slot:header)
        h2.text-white.fragment Repetitive melody that creates an eerie unsettling atmosphere
    AudioChoiceRound(
      src='/sounds/motion_slow_down.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='3'
    )
    AudioChoiceRound(
      src='/sounds/musiclm_instrumental_intro_to_a_grunge_song_from_the_90_s_featuring_guitar_and_kicking_drums.mp3'
      :items='canned'
      :winnerIndex='1'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
      :prize='3'
    )
    ChooseWinner(headerImage='/images/canned_or_computed_header.png' :prize='3')
      template(v-slot:header)
        h2.text-white.fragment Instrumental intro to a grunge song from the 90s feature guitar and kicking drums
    AudioChoiceRound(
      src='/sounds/motion_cyberlove.mp3'
      :items='canned'
      :winnerIndex='0'
      question='Is this music canned or computed?'
      headerImage='/images/canned_or_computed_header.png'
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
import AudioChoiceRound from '../components/AudioChoice/AudioChoiceRound.vue'

import ChooseWinner from '@/components/Players/ChooseWinner.vue'

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
    AudioChoiceRound,
    ChooseWinner
  },
  data () {
    return {
      canned: [
        { name: 'Canned', emoji: '🥫️', value: ' the song' },
        { name: 'Computed', emoji: '💻️', value: ' the song' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Coiny&family=Press+Start+2P&family=Silkscreen&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Silkscreen', cursive !important;
  @apply mt-72 text-9xl text-black #{!important};
}

.bossfight {
  font-family: 'Coiny', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
