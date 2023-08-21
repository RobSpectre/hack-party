<template lang="pug">
Reveal
  .slides
    Title
    BackgroundImageSlide(background='/images/book_banning.png')
    BackgroundImageSlide(background='/images/chatgpt.png')
    BackgroundImageSlide(background='/images/quotation.png')
    VideoSlide(background='/video/field_of_dreams_cut.mp4')
      .title Is this book banned in Iowa?
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment This book features a villain who uses a bolt stunner
        h2.text-white.fragment Filled cover to cover with violence
        h2.text-white.fragment Banned in a few schools in Texas after the Coen Brothers movie was released
      template(v-slot:content)
        img.fragment(src='/images/no_country_for_old_men.png')
      template(v-slot:footer)
        h1.fragment No Country For Old Men
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/no_country_for_old_men.png'
      :winnerIndex='1'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Author of this book is a Mormon
        h2.text-white.fragment The young adult series to which this book belongs sold 160 million copies
        h2.text-white.fragment Should be banned for the quality of writing
      template(v-slot:content)
        img.fragment(src='/images/breaking_dawn.png')
      template(v-slot:footer)
        h1.fragment Breaking Dawn
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/breaking_dawn.png'
      :winnerIndex='0'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Written by the great American satirist who is the namesake of the biggest award for comedic writing in English
        h2.text-white.fragment Features a white child escaping abuse by going on a journey with a grown black man
        h2.text-white.fragment Drops the N-bomb 219 times
      template(v-slot:content)
        img.fragment(src='/images/adventures_of_huckleberry_finn.png')
      template(v-slot:footer)
        h1.fragment The Adventures of Huckleberry Finn
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/adventures_of_huckleberry_finn.png'
      :winnerIndex='1'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The love interest is a member of the Junior Anti-Sex League
        h2.text-white.fragment Describes herself as a "rebel from the waist down"
        h2.text-white.fragment A cautionary tale about censorship from a totalitarian government
      template(v-slot:content)
        img.fragment(src='/images/1984.png')
      template(v-slot:footer)
        h1.fragment 1984
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/1984.png'
      :winnerIndex='0'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Banned in fascist Italy until 1948
        h2.text-white.fragment Banned in the Irish Free State
        h2.text-white.fragment Love story that deliberately does not have explicit sexual content
      template(v-slot:content)
        img.fragment(src='/images/a_farewell_to_arms.png')
      template(v-slot:footer)
        h1.fragment A Farewell to Arms
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/a_farewell_to_arms.png'
      :winnerIndex='0'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Another children's classic peppered with the N-word
        h2.text-white.fragment Has been banned in some schools as a rape trial is center to the narrative
        h2.text-white.fragment Prob every kid who went to high school in the US has read it
      template(v-slot:content)
        img.fragment(src='/images/to_kill_a_mockingbird.png')
      template(v-slot:footer)
        h1.fragment To Kill A Mockingbird
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/to_kill_a_mockingbird.png'
      :winnerIndex='1'
      denomination=''
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/nixsys_front_page.png')
    BackgroundImageSlide(background='/images/windows_95.png')
    BackgroundImageSlide(background='/images/nixsys_front_page.png')
      .bossfight Pre-Brock Personal Computers
    Slide
      h2.fragment Solo
      h2.fragment Guess the price of a computer meant to run software released before Brock was born
      h2.fragment Photo and some stats
      h2.fragment Price is Right rules
      h2.fragment Exact guess gets 2x!
      h1 Game Play
    CelebrityIntro(
      hint1='Proc is a Pentium III running at one blazing Gigahertz'
      hint2='This machine is maxed out at 512 megs of PC133 RAM'
      hint3='Optional RAGE XL GPU from ATI'
      celebrity='NX-180'
      image='/images/mid_tower.png'
    )
    CelebrityGuess(
      celebrity='NX-180'
      image='/images/mid_tower.png'
      :price='1135'
      question='How much is this computer?'
      :prize='3'
    )
    PlayerBoard
    VideoSlide(
      background='/video/lewberger.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The author is a convicted homosexual
        h2.text-white.fragment The subject of the book is a sociopath
        h2.text-white.fragment Features drugs, promiscuity and a relationship between two men
      template(v-slot:content)
        img.fragment(src='/images/the_picture_of_dorian_gray.png')
      template(v-slot:footer)
        h1.fragment The Picture of Dorian Gray
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/the_picture_of_dorian_gray.png'
      :winnerIndex='1'
      denomination=''
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment 10th most banned book in the 90s
        h2.text-white.fragment A school board in WA said it was part of "an overall communist plot" in 1978
        h2.text-white.fragment George H.W. Bush called it "a marvelous book" listing it among the books that inspired him
      template(v-slot:content)
        img.fragment(src='/images/catcher_in_the_rye.png')
      template(v-slot:footer)
        h1.fragment The Catcher in the Rye
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/catcher_in_the_rye.png'
      :winnerIndex='0'
      denomination=''
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Another cautionary tale about censorship of a totalitarian government
        h2.text-white.fragment In 1992 a middle school in Irvine distributed copies with all obscene words blacked out
        h2.text-white.fragment The author said he wrote the book in direct response to book banning in the 50s
      template(v-slot:content)
        img.fragment(src='/images/fahrenheit_451.png')
      template(v-slot:footer)
        h1.fragment Fahrenheit 451
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/fahrenheit_451.png'
      :winnerIndex='1'
      denomination=''
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment This play features suicidal ideation, abusive misogyny, and ample violence
        h2.text-white.fragment Many productions have interpreted the "closet scene" as incestuous
        h2.text-white.fragment Prob the best word play alluding to the C word ever written
      template(v-slot:content)
        img.fragment(src='/images/hamlet.png')
      template(v-slot:footer)
        h1.fragment Hamlet
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/hamlet.png'
      :winnerIndex='1'
      denomination=''
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment T.S. Eliot said this book as "the most important expression which the present age has found"
        h2.text-white.fragment In 1921 before publication it was declared obscene
        h2.text-white.fragment The book itself - not the author or publisher - was the defendant in the case that would ultimately set the legal precedent for obscenity in media
      template(v-slot:content)
        img.fragment(src='/images/ulysses.png')
      template(v-slot:footer)
        h1.fragment Ulysses
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/ulysses.png'
      :winnerIndex='0'
      denomination=''
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment James Baldwin's famous semi-biography exploring the Pentecostal tradition in Depression-era Harlem
        h2.text-white.fragment Rhythm and language of the prose draws heavily from the King James Version of the Bible
        h2.text-white.fragment Story centers on the protagonist's conflict of his homosexuality and religious upbringing
      template(v-slot:content)
        img.fragment(src='/images/go_tell_it_on_the_mountain.png')
      template(v-slot:footer)
        h1.fragment Go Tell It On The Mountain
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/go_tell_it_on_the_mountain.png'
      :winnerIndex='0'
      denomination=''
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    BackgroundImageSlide(background='/images/nixsys_front_page.png')
      .bossfight Pre-Brock Personal Computers
    CelebrityIntro(
      hint1='This 3U rackmount chassis rocks a PIII 550Mhz'
      hint2='"Only" 256 meg of RAM and 3 full size ISA slots'
      hint3='Samsung EVO 1TB solid state drive!'
      celebrity='NX-i380'
      image='/images/rackmount.png'
    )
    CelebrityGuess(
      celebrity='NX-i380'
      image='/images/rackmount.png'
      :price='1270'
      question='How much is this computer?'
      :prize='5'
    )
    PlayerBoard
    VideoSlide(
      background='/video/barbieheimer.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The original publisher Penguin was sued for this book in British court under a new obscenity law passed in 1959
        h2.text-white.fragment Many of the words in the original 1928 manuscript were illegal in the UK, causing it to be published in France and Italy instead
        h2.text-white.fragment The narrative focuses on the torrid affair between a working class man and an upper class woman
      template(v-slot:content)
        img.fragment(src='/images/lady_chatterlys_lover.png')
      template(v-slot:footer)
        h1.fragment Lady Chatterly's Lover
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/lady_chatterlys_lover.png'
      :winnerIndex='1'
      denomination=''
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment This book was written during UK Prime Minister William Pitt's era of strict censorship
        h2.text-white.fragment Features teenagers being purchased for marriage
        h2.text-white.fragment Opens with "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife."
      template(v-slot:content)
        img.fragment(src='/images/pride_and_prejudice.png')
      template(v-slot:footer)
        h1.fragment Pride and Prejudice
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/pride_and_prejudice.png'
      :winnerIndex='1'
      denomination=''
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment The film from this young adult novel swept the Teen Choice Awards in 2014
        h2.text-white.fragment It is a love story about a pair of teenagers struggling with cancer
        h2.text-white.fragment There is one scene where they lose their virginity to each other on a trip abroad
      template(v-slot:content)
        img.fragment(src='/images/the_fault_of_our_stars.png')
      template(v-slot:footer)
        h1.fragment The Fault Of Our Stars
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/the_fault_of_our_stars.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Scholars discovered the author was a lesbian only many decades after her passing
        h2.text-white.fragment A book in 2021 documented the relationship between the author and her lifelong partner, one they deliberately hid out of fear
        h2.text-white.fragment Republican NYT columnist Bret Stephens calls the book "an education in what it means to be American" citing the eponymous protagonist, an immigrant
      template(v-slot:content)
        img.fragment(src='/images/my_antonia.png')
      template(v-slot:footer)
        h1.fragment My Antonia
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/my_antonia.png'
      :winnerIndex='1'
      denomination=''
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment Another cautionary tale about censorship of a totalitarian government
        h2.text-white.fragment In 1932, the book was banned in Ireland for being anti-family and anti-religion
        h2.text-white.fragment The American Library Association says it has been banned for its offensive language, nudity, racism and sexually explicit content
      template(v-slot:content)
        img.fragment(src='/images/brave_new_world.png')
      template(v-slot:footer)
        h1.fragment Brave New World
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/brave_new_world.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment This non-fiction young adult book was written by a popular Catholic speaker and author
        h2.text-white.fragment It is part of Greenhaven Publishing's "At Issue" series intended to education young people on sensitive issues like crime, terrorism, and rioting
        h2.text-white.fragment It includes extensive descriptions of three drugs popularly used by offenders of this crime in an effort to make them easier to identify
      template(v-slot:content)
        img.fragment(src='/images/date_rape.png')
      template(v-slot:footer)
        h1.fragment Date Rape
    ItemGuess(
      :items='items'
      question='Is this book banned in Iowa?'
      headerImage='/images/date_rape.png'
      :winnerIndex='0'
      denomination=''
      :prize='3'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    BackgroundImageSlide(background='/images/nixsys_front_page.png')
      .bossfight Pre-Brock Personal Computers
    CelebrityIntro(
      hint1='The hottest Windows NT desk machine'
      hint2='P3 1.00Ghz, 1 gig of SDRAM, Samsung Evo 1TB'
      hint3='Floppy drive, 2 port gigabit adapter, dual serial PCI card'
      celebrity='NX-370-T50'
      image='/images/micro.png'
    )
    CelebrityGuess(
      celebrity='NX-370-T50'
      image='/images/micro.png'
      :price='1490'
      question='How much is this computer?'
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

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import CelebrityIntro from '@/components/CameoPriceIsRight/CelebrityIntro.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'

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
    ItemGuess,
    GameContentWithSidebar,
    CelebrityIntro,
    CelebrityGuess
  },
  data () {
    return {
      items: [
        { name: 'Banned', emoji: '🚫️', value: ' in Iowa' },
        { name: 'Not Banned', emoji: '✅️', value: ' in Iowa' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Monoton&family=Chewy&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Chewy', cursive !important;
  @apply mt-72 text-9xl text-white tracking-tight text-shadow shadow-black #{!important};
}

.bossfight {
  font-family: 'Monoton', cursive !important;
  @apply mt-72 text-9xl text-rose-500 tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
