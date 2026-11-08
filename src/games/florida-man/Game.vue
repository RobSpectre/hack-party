<template lang="pug">
Reveal
  .slides
    GameTitle
    VideoSlide(background='/games/florida-man/video/florida_man.mp4')
    Slide
      h2.fragment Solo
      h2.fragment You will be presented with a headline
      h2.fragment and a mugshot of a Florida man
      h2.fragment Guess the missing words
      h2.fragment Exact guess gets 2x
      h2.fragment Hilariously wrong gets bonus points
      h1 Game Play
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested for dunking a woman’s head into a _____ of _____ during argument
      template(v-slot:content)
        img(src='/games/florida-man/images/vat_of_tar.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested for dunking a woman’s head into a vat of tar during argument
      template(v-slot:content)
        img(src='/games/florida-man/images/vat_of_tar_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Police: Florida man threatens to _____ _____ Homestead police station in series of calls
      template(v-slot:content)
        img(src='/games/florida-man/images/fucking_nuke.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Police: Florida man threatens to fucking nuke Homestead police station in series of calls
      template(v-slot:content)
        img(src='/games/florida-man/images/fucking_nuke_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested after spraying woman in face with _____ _____
      template(v-slot:content)
        img(src='/games/florida-man/images/garden_hose.webp')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested after spraying woman in face with garden hose
      template(v-slot:content)
        img(src='/games/florida-man/images/garden_hose_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white _____ing, _____ing Florida man indicted for 2017 torch march
      template(v-slot:content)
        img(src='/games/florida-man/images/goat_sacrificing_warmongering.webp')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Goat-sacrificing, warmongering Florida man indicted for 2017 torch march
      template(v-slot:content)
        img(src='/games/florida-man/images/goat_sacrificing_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man found with 3 kilos of cocaine in South Carolina traffic stop is _____ ____ popular in 1990s
      template(v-slot:content)
        img(src='/games/florida-man/images/jamaican_musician.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man found with 3 kilos of cocaine in South Carolina traffic stop is Jamaican musician popular in 1990s
      template(v-slot:content)
        img(src='/games/florida-man/images/jamaican_musician_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    VideoSlide(background='/games/florida-man/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/florida-man/video/auditioning_for_humiliation.mp4')
      .bossfight Auditioning for Humiliation
    Slide
      h2.fragment Solo
      h2.fragment A Republican POTUS candidate
      h2.fragment Has NYT confirmed they made the debate stage?
      h2.fragment Contrarian bonus in effect
      h1 Game Play
    Slide
      h2.fragment 40,000 unique donors
      h2.fragment 200 unique donors in 20 states
      h2.fragment >1% polling in three national polls
      h2.fragment >1% polling two national polls and two early state polls
      h1 RNC POTUS Debate Criteria
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/3/3c/Governor_Doug_Burgumsquare.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='2'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/8/85/Chris_Christie_2020square.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='2'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/e/e1/DeSantissquare2024.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='2'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/thumb/f/fb/Larryelder24square.jpg/600px-Larryelder24square.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/games/florida-man/video/florida_man_full.mp4'
      :muted='false'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Dog driving a boat is this Florida man’s _____ _____
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Dog driving a boat is this Florida man’s designated driver
      template(v-slot:content)
        img(src='/games/florida-man/images/designated_driver.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='1'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white U.S. Florida man, 3 sons convicted of selling _____ as fake COVID-19 cure: "Snake-oil salesmen"
      template(v-slot:content)
        img(src='/games/florida-man/images/bleach.jpg')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white U.S. Florida man, 3 sons convicted of selling bleach as fake COVID-19 cure: "Snake-oil salesmen"
      template(v-slot:content)
        img(src='/games/florida-man/images/bleach_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Young Florida man charged with animal cruelty for using ____ ____ to shotgun a Twisted Tea
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Young Florida man charged with animal cruelty for using baby gator to shotgun a Twisted Tea
      template(v-slot:content)
        img(src='/games/florida-man/images/baby_gator_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man won't face charges for firing on _____ _____ he thought was intruder
      template(v-slot:content)
        img(src='/games/florida-man/images/pool_cleaner.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man won't face charges for firing on pool cleaner he thought was intruder
      template(v-slot:content)
         img(src='/games/florida-man/images/pool_cleaner_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida Man Charged Over $35M Ponzi Scheme Targeting _____ _____ _____
      template(v-slot:content)
        img(src='/games/florida-man/images/elderly_church_members.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida Man Charged Over $35M Ponzi Scheme Targeting Elderly Church Members
      template(v-slot:content)
         img(src='/games/florida-man/images/elderly_church_members_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='2'
    )
    VideoSlide(background='/games/florida-man/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    VideoSlide(background='/games/florida-man/video/auditioning_for_humiliation.mp4')
      .bossfight Auditioning for Humiliation
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/3/35/Haleysquare.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='3'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/1/12/Willhurdsquare24.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='3'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/8/8d/Mike_Pence_square24.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='3'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/e/ee/AsaHutchinson2015square.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/games/florida-man/video/coke.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested after allegedly spitting on, attacking woman with _____ in _____
      template(v-slot:content)
        img(src='/games/florida-man/images/infant_in_arms.jpg')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man arrested after allegedly spitting on, attacking woman with infant in arms
      template(v-slot:content)
         img(src='/games/florida-man/images/infant_in_arms_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man contests qualified immunity after infection from forced exposure to _____ _____
      template(v-slot:content)
        img(src='/games/florida-man/images/human_feces.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man contests qualified immunity after infection from forced exposure to human feces
      template(v-slot:content)
         img(src='/games/florida-man/images/human_feces_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida Man & His Yorkie Square Up With An Intruding ____ _____ On The Fence
      template(v-slot:content)
        img(src='/games/florida-man/images/black_bear.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida Man & His Yorkie Square Up With An Intruding Black Bear On The Fence
      template(v-slot:content)
         img(src='/games/florida-man/images/black_bear_headline.png')
    VideoSlide(
      background='/games/florida-man/video/black_bear.mp4'
      :muted='false'
    )
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man charged after nearly 20 ____-_____ _____ found inside Jeep
      template(v-slot:content)
        img(src='/games/florida-man/images/foil-wrapped_cellphones.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man charged after nearly 20 foil-wrapped phones found inside Jeep
      template(v-slot:content)
         img(src='/games/florida-man/images/foil-wrapped_phones_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man known as ‘_____ _____’ arrested after chess game turns deadly, police say
      template(v-slot:content)
        img(src='/games/florida-man/images/pooh_bear.png')
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white Florida man known as ‘Pooh Bear’ arrested after chess game turns deadly, police say
      template(v-slot:content)
         img(src='/games/florida-man/images/pooh_bear_headline.png')
    ChooseWinner(
      headerImage='/games/florida-man/images/florida_man_header.png'
      :prize='3'
    )
    VideoSlide(background='/games/florida-man/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    VideoSlide(background='/games/florida-man/video/auditioning_for_humiliation.mp4')
      .bossfight Auditioning for Humiliation
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/8/88/Ramaswamy24square.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='5'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/5/5c/TimScottsquare2023.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='5'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/1/14/Stapletonsquare.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='5'
    )
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='https://ballotpedia.s3.amazonaws.com/images/4/45/Francis_Suarez_Square.jpg'
      question='Is this candidate qualified for the first GOP debate?'
      :prize='5'
    )
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import GameTitle from '@/components/base/GameTitle.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameVideo from '@/components/base/GameVideo.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

export default {
  name: 'FloridaManGame',
  components: {
    PlayerBoard,
    GameTitle,
    Slide,
    Reveal,
    BackgroundImageSlide,
    VideoSlide,
    ActionButton,
    GameVideo,
    GameContentWithSidebar,
    ItemGuess
  },
  data () {
    return {
      items: [
        { name: 'Qualified', emoji: '👍️', value: ' the verdict from NYT' },
        { name: 'Unqualified', emoji: '👎️', value: ' the verdict from NYT' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@reference '../../assets/styles/tailwind.css';
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&i&family=Caprasimo&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-36! text-9xl! text-white!;
}

.bossfight {
  font-family: 'Caprasimo', cursive !important;
  @apply mt-12! skew-y-12! text-9xl! text-white! tracking-tight! text-shadow! shadow-black!;
}

html {
  font-size: 36px;
}
</style>
