<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/mtg_store.png')
    BackgroundImageSlide(background='/images/mtg_store.png')
      .title MAGA Merch Stand
    Slide
      h2.fragment Solo
      h2.fragment Merch from Winred.com
      h2.fragment Guess the price!
      h2.fragment Lowest without going over wins
      h2.fragment On the money doubles your points!
      h1 Game Play
    PlayerBoard
    Slide(class='green')
      h2.text-white Let's go!
    GameContentWithSidebar
      template(v-slot:content)
        .flex.items-center.justify-center.h-screen
          img(src='/images/mtg_enemy_hat.png')
    CelebrityGuess(
      celebrity='Enemy of the State Hat'
      image='/images/mtg_enemy_hat.png'
      :price='30'
      question='How much is this MAGA merch?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/mtg_christian_nationalist.png')
    CelebrityGuess(
      celebrity='Christian Nationalist Shirt'
      image='/images/mtg_christian_nationalist.png'
      :price='30'
      question='How much is this MAGA merch?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/mtg_solo_cup.png')
    CelebrityGuess(
      celebrity='Insulated Solo Cup'
      image='/images/mtg_solo_cup.png'
      :price='20'
      question='How much is this MAGA merch?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/mtg_monkeypox_shirt.png')
    CelebrityGuess(
      celebrity='Monkeypox Shirt'
      image='/images/mtg_monkeypox_shirt.png'
      :price='34'
      question='How much is this MAGA merch?'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/mtg_button.png')
    CelebrityGuess(
      celebrity='Lameass Button'
      image='/images/mtg_button.png'
      :price='10'
      question='How much is this MAGA merch?'
      :prize='1'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Title(
      background='/video/whose_line.mp4'
      heading='/images/whose_text_is_it_anyway.png'
    )
    GameChatMessages(
      currentUser='???'
      :messages='chris_wallace.messages'
      :rooms='chris_wallace.rooms'
    )
    ItemMultiSelect(
      :items='chris_wallace.items'
      :winnerIndice='[1, 2, 3]'
      :fragmentItemReveal='true'
      :totalSelections='3'
      question='Who was on this group chat?'
      :prize='3'
      denomination=''
      headerImage='/images/header_dominion_lawsuit.webp'
    )
    PlayerBoard
    VideoSlide(
      background='/video/klepper_trump_indictment.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are doubled!
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/boebert_non_bidenary.png')
    CelebrityGuess(
      celebrity='Non-Bidenary Hat'
      image='/images/boebert_non_bidenary.png'
      :price='30'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/boebert_membership_card.png')
    CelebrityGuess(
      celebrity='Boebert Membership Card'
      image='/images/boebert_membership_card.png'
      :price='30'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.items-center.justify-center.h-screen
          img(src='/images/boebert_beanie.png')
    CelebrityGuess(
      celebrity='LGB Beanie'
      image='/images/boebert_beanie.png'
      :price='20'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.items-center.justify-center.h-screen
          img(src='/images/haley_koozie.png')
    CelebrityGuess(
      celebrity='Nikki Haley Koozie'
      image='/images/haley_koozie.png'
      :price='7'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.items-center.justify-center.h-screen
          img(src='/images/rubio_sticker.png')
    CelebrityGuess(
      celebrity='Marco Rubio sticker'
      image='/images/rubio_sticker.png'
      :price='10'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/vance_american_flag.png')
    CelebrityGuess(
      celebrity='JD Vance American Flag'
      image='/images/vance_american_flag.png'
      :price='30'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/johnson_beer_sticker.png')
    CelebrityGuess(
      celebrity='Ron Johnson drinking beer sticker'
      image='/images/johnson_beer_sticker.png'
      :price='15'
      question='How much is this MAGA merch?'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameChatMessages(
      currentUser='???'
      :messages='rupert_murdoch.messages'
      :rooms='rupert_murdoch.rooms'
    )
    ItemMultiSelect(
      :items='rupert_murdoch.items'
      :winnerIndice='[0]'
      :fragmentItemReveal='true'
      :totalSelections='1'
      question='Who sent this message to a New York Post editor?'
      :prize='5'
      denomination=''
      headerImage='/images/header_dominion_lawsuit.webp'
    )
    PlayerBoard
    VideoSlide(
      background='/video/dominion_lawsuit.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are tripled!
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/trump_was_right.png')
    CelebrityGuess(
      celebrity='Trump Bumper Sticker'
      image='/images/trump_was_right.png'
      :price='13'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.items-center.justify-center.h-screen
          img(src='/images/trump_beer_koozie.png')
    CelebrityGuess(
      celebrity='Kelly Green Koozie'
      image='/images/trump_beer_koozie.png'
      :price='15'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/trump_waco_shirt.png')
    CelebrityGuess(
      celebrity='Trump Waco Commemorative Tee'
      image='/images/trump_waco_shirt.png'
      :price='36'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/trump_maga_hat.png')
    CelebrityGuess(
      celebrity='2023 MAGA Hat'
      image='/images/trump_maga_hat.png'
      :price='40'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/trump_unfinished_business.png')
    CelebrityGuess(
      celebrity='Unfinished Business Shirt'
      image='/images/trump_unfinished_business.png'
      :price='36'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:content)
        .flex.flex-grow.flex-col
          img(src='/images/trump_flag.png')
    CelebrityGuess(
      celebrity='Trump Flag'
      image='/images/trump_flag.png'
      :price='43'
      question='How much is this MAGA merch?'
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    GameChatMessages(
      currentUser='???'
      :messages='bret_baier.messages'
      :rooms='bret_baier.rooms'
    )
    ItemMultiSelect(
      :items='bret_baier.items'
      :winnerIndice='[2]'
      :fragmentItemReveal='true'
      :totalSelections='1'
      question='Who sent this message to a Fox News execs?'
      :prize='5'
      denomination=''
      headerImage='/images/header_dominion_lawsuit.webp'
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

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

import GameChatMessages from '@/components/base/GameChatMessages.vue'
import ItemMultiSelect from '@/components/WhichIsWhich/ItemMultiSelect.vue'

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
    CelebrityGuess,
    GameContentWithSidebar,
    ItemMultiSelect,
    GameChatMessages
  },
  data () {
    return {
      chris_wallace: {
        items: [
          { name: 'Donald Trump Jr.', emoji: '🐅️' },
          { name: 'Laura Ingraham', emoji: '🧙‍♀️️' },
          { name: 'Sean Hannity', emoji: '🍩️' },
          { name: 'Tucker Carlson', emoji: '🚽️' }
        ],
        messages: [
          { username: '???', content: 'We devote our lives to building an audience and they let Chris Wallace and Leland fucking Vittert wreck it' }
        ],
        rooms: ['45', 'Mommy', 'Admin', 'Admin Home', 'Admin Husband']
      },
      rupert_murdoch: {
        items: [
          { name: 'Rupert Murdoch', emoji: '👴️' },
          { name: 'Fox CEO Suzanne Scott', emoji: '👱‍♀️️' },
          { name: 'Managing Editor Bill Sammon', emoji: '👿️' },
          { name: 'Chris Wallace', emoji: '👔️' }
        ],
        messages: [
          { username: '???', content: 'I hate our Decision Desk people!' },
          { username: '???', content: 'And pollsters! Some of the same people I think.' },
          { username: '???', content: 'Just for the hell of it still praying for Az to prove them wrong!' }
        ],
        rooms: ['IT', 'Decision Desk', 'Attorney']
      },
      bret_baier: {
        items: [
          { name: 'Tucker Carlson', emoji: '🚽️' },
          { name: 'Maria Bartiromo', emoji: '🧷️' },
          { name: 'Bret Baier', emoji: '🎭️' },
          { name: 'Sean Hannity', emoji: '🍩️' }
        ],
        messages: [
          { username: '???', content: 'I know You guys are feeling the pressure.' },
          { username: '???', content: 'But this situation is getting uncomfortable. Really uncomfortable … I keep on having to defend this on air. And ask questions about it.' },
          { username: '???', content: 'And it seems we are holding on for pride (I know the confidence you say you had and the numbers — but it’s at least within the realm of possible that he closes the gap now).' },
          { username: '???', content: 'And It’s hurting us. The sooner we pull it — even if it gives us major egg. And we put it back in his column. The better we are. In my opinion.' }
        ],
        rooms: ['CNN Recruiter', 'NBC Recruiter', 'RNC', 'Father']
      }
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Modak&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Modak', cursive;
  @apply mt-72 text-9xl text-red-600 #{!important};
}

html {
  font-size: 36px;
}
</style>
