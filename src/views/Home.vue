<template lang="pug">
Reveal
  .slides
    Title
    Title(
      background='/video/price_is_right.mp4'
      heading='/images/cameo_price_is_right.png'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white One Star Reviews
    GameVideo(
      video='/video/brandon_cut.mp4'
    )
      template(v-slot:footer)
        h1.fragment Brandon Moore
    BackgroundImageSlide(
      background='/images/cameo_api.png'
    )
      h1 h4x0r3d
    BackgroundImageSlide(
      background='/images/cameo_totals.png'
    )
      h1 pwn3d
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/cameo_avg_rating_histogram.png')
        h1 Pretty Good
    GameContentWithSidebar
      template(v-slot:content)
        img(src='/images/miriam_haart.png')
        h1 Deplatforming
    GameVideo(
      video='/video/lil_jiggy.mp4'
    )
      h1 SoundCloud unknowns
    Slide
      h2.fragment These are not the absolute lowest rated
      h2.fragment At least 5 reviews
      h2.fragment Something funny in the content
      h2.fragment 4.5 == junk bond
      h1 Rubric
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white One Star Reviews
    CameoPriceIsRightRound(
      celebrity='Lil Esco'
      hint1='Described in Cameo bio as Viral Meme Star'
      hint2='1M followers on Instagram but 3.07 rating on Cameo'
      hint3='4.8M views for a viral clip on YouTube in 2019'
      video='https://cdn.cameo.com/video/6262a43b57a346b7736af1d8-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/TxZUB0wh-D592B345-0475-47B2-9CCA-327993DF74E6.jpg'
      :price='20.0'
      :prize='1'
    )
      template(v-slot:post-intro)
        GameVideo(
          video='/video/lil_esco.mp4'
        )
    CameoPriceIsRightRound(
      celebrity='Patrícia Jordane'
      hint1='Brazilian model for Playboy'
      hint2='22 magazine covers including June 2014'
      hint3='Currently studying dentistry, 2.23 rating on Cameo'
      video='https://cdn.cameo.com/video/61ab9a9f58c2680bc4666114-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/AD82kqJRe_avatar-G0Ruz4-Y3.jpg'
      :price='48.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Greg Maddux'
      hint1='MLB Hall of Famer with the Atlanta Braves'
      hint2='Proceeds go to the Baller Dream Foundation'
      hint3='Only 4 star rating on Cameo'
      video='https://cdn.cameo.com/video/62461e6d41c4c69164f16b26-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/Mx7aqFdhv_ScreenShot2021-03-04at12.10.49PM.png'
      :price='200.0'
      :prize='1'
    )
      template(v-slot:post-intro)
        GameContentWithSidebar
          template(v-slot:content)
            img(src='/images/maddux_bad_review.png')
            h1 One Star Review
    CameoPriceIsRightRound(
      celebrity='Backpack Kid'
      hint1='Another young viral video sensation'
      hint2='Slowest hit ever - dance was created in 2010'
      hint3='In a year and a half this dancer only got 58k views'
      video='https://cdn.cameo.com/video/6272ae6a22dd916c57838a1a-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/Kj65d_kMe_avatar-WmrrrcwDV.jpg'
      :price='30.0'
      :prize='1'
    )
      template(v-slot:post-intro)
        VideoSlide(
          background='/video/backpack_kid.mp4'
          :muted='false'
        )
      template(v-slot:post-video)
        GameContentWithSidebar
          template(v-slot:content)
            img(src='/images/backpack_kid_bad_review.png')
            h1 One Star Review
    CameoPriceIsRightRound(
      celebrity='Daddy Long Neck'
      hint1='Rose to fame with Marfan syndrome'
      hint2='Featured in XXL and on Vice as a rapper'
      hint3='4.2 stars on Cameo'
      video='https://cdn.cameo.com/video/62857e8f1aad0a5407b9d79c-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/public/9762dxFBf.jpg'
      :price='35.0'
      :prize='1'
    )
      template(v-slot:post-intro)
        VideoSlide(
          background='/video/daddy_long_neck_vice_cut.mov'
          :muted='false'
        )
    CameoPriceIsRightRound(
      celebrity='Aaron Carter'
      hint1='By age 13 two platinum records selling 4M worldwide'
      hint2='Nickelodeon star and toured with The Backstreet Boys'
      hint3='Also starred in Seussical as Jojo the Who and The Fantasticks at Matt'
      video='https://cdn.cameo.com/video/626c0c0da0660fea49a20e49-processed.mp4'
      image='https://m.media-amazon.com/images/I/41C3TEP0MTL.jpg'
      :price='199.0'
      :prize='1'
    )
      template(v-slot:post-intro)
        VideoSlide(
          background='/video/aaron_carter_video_cut.mp4'
          :muted='false'
        )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='green')
      h2.text-white Who is the most popular person on Cameo?
    ItemGuess(
      :items='bossfight'
      :winnerIndex='2'
      :prize='5'
      denomination=''
      headerImage='https://i.pcmag.com/imagery/reviews/05mF8sOiSR8xktyu3Zfan5D-1..v1610564943.png'
      :fragmentItemReveal='true'
      question='Who is the most popular person on Cameo?'
    )
    PlayerBoard
    GameVideo(
      video='/video/mick_foley.mp4'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white Big Money
    CameoPriceIsRightRound(
      celebrity='Antonio Brown'
      hint1='Former Foosball Player'
      hint2='Very recently former'
      hint3='Stripped to underwear and left game'
      video='https://cdn.cameo.com/video/6241fb059ec5d94196873453-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/Aj8UAzEXd_ScreenShot2021-02-14at9.39.58AM.png'
      :price='500.0'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Brian Cox'
      hint1='Scottish actor who started in vaudeville in 1967'
      hint2='Played in Shakespeare with both RSC and RNT'
      hint3="My fave role was in Broken Lizard's Super Troopers"
      video='https://cdn.cameo.com/video/62841fb3aa93ef448dea10da-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/3QqE92EtG_avatar-FIWzNzi3w.jpg'
      :price='689.0'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Alton Brown'
      hint1='Legendary figure in public television'
      hint2='Known for big dad energy'
      hint3='Rob makes his turkey every Thanksgiving'
      video='https://cdn.cameo.com/video/628719f8b4a7137875970857-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/0TunXI3RS_ScreenShot2021-03-08at9.33.28AM.png'
      :price='350.0'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Floyd Mayweather'
      hint1='Owner of a NASCAR Team'
      hint2='50-0 as a professional welterweight boxer'
      hint3='Targeted in a drive by while writing this game'
      video='/video/floyd_mayweather.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/QGLkrkNvS_avatar-AIPInAM68.jpg'
      :price='15000.0'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Big Papi'
      hint1='Boston royalty'
      hint2='10x All-Star, 3x World Champion and Fall Classic MVP 2013'
      hint3='Dropped an F-bomb on national TV that received 0 complaints'
      video='https://cdn.cameo.com/v/no-wm-jI_PtCmA9x.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/rXXUUcplV_FullSizeRender.jpeg'
      :price='750'
      :prize='2'
    )
    CameoPriceIsRightRound(
      celebrity='Steve Wozniak'
      hint1='Played by Seth Rogan in a movie'
      hint2='Co-founder of Apple Computer from his dorm room'
      hint3="Creator of Rob's first computer"
      video='https://cdn.cameo.com/video/video-6256faddf4c2b0a1014007f5-8i1UnvUEOB-9DIU0I-xN-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/uxaltlMUS_avatar-SDWESwHr7.jpg'
      :price='600.0'
      :prize='2'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.text-white.text-9xl.nintendo(style='margin-top: 24rem;') Boss Fight!!
    Slide(class='green')
      h2.text-white How many people are available on Cameo right now?
    CelebrityGuess(
      celebrity='People on Cameo'
      image='https://i.pcmag.com/imagery/reviews/05mF8sOiSR8xktyu3Zfan5D-1..v1610564943.png'
      :price='19620'
      :prize='5'
      question='How many people are available on Cameo right now?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/perry.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white thisfuckingguy.tumblr.com
    CameoPriceIsRightRound(
      celebrity='Perry Caravello'
      hint1='"Star" of Windy City Heat'
      hint2='Luminary of a kind of gross subgenre'
      hint3='You just saw him on Cart Narcs'
      video='https://cdn.cameo.com/video/62869739ca477a9f7e5fef1c-processed-redo-C39cN6Xg5.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/mYNtVv8ml_PerryHeadshot.JPG'
      :price='60.0'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='James McCoy Taylor'
      hint1='Contestant on the Bachelorette'
      hint2='Lists in his credentials being the author of "Great Again" aka the Trump Song'
      hint3='Unbelievably, 5 star rating'
      video='https://cdn.cameo.com/video/624857ff7287eb3ed7629750-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/l6gHcr_Qz_avatar-eCuzBtA14.jpg'
      :price='35.0'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Chris Diamantopoulos'
      hint1='This Canadian actor is the current voice of Mickey Mouse'
      hint2='Joined Sean Hayes and Will Sasso in The Three Stooges as Moe'
      hint3='Played the perfect VC in Silicon Valley'
      video='https://cdn.cameo.com/video/6288869a7ebeb94a59528f2e-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/Qh5Me8Tfk_avatar-CiA9l5Jdw.jpg'
      :price='299.0'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Nicole "Snooki" Polizzi'
      hint1='Hatched from the worst period in television history'
      hint2='Star (if you can call it that) rose on MTV'
      hint3='Coined "smush smush" as a euphemism'
      video='https://cdn.cameo.com/video/623f78e165452b6f69daa7fe-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/wy-SiUiRv_n7OX7injosnooki.png'
      :price='300.0'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Crypto Bro'
      hint1='Thought leader in the world of DeFi'
      hint2='Web3 all day except for Sunday when he drops his Cameos'
      hint3="Only accepting US dollars because the capitalists that run this country won't let you pay in crypto."
      video='https://cdn.cameo.com/video/627c3b3ba8875578cdd72131-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/QcMD4L9_d_avatar-hYcRlL__c.jpg'
      :price='9.0'
      :prize='3'
    )
    CameoPriceIsRightRound(
      celebrity='Brad Marchand'
      hint1='One of the most notorious hockey players of all time'
      hint2="Reprimanded by the NHL for licking opponents' noses"
      hint3='Nickname in Boston is the "Little Ball of Hate"'
      video='https://cdn.cameo.com/video/6226a8222161c5017b26a6ca-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/jEJDa3jIN_ScreenShot2019-10-24at11.24.02AM.png'
      :price='350.0'
      :prize='3'
    )
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white To Boldly Go
    CameoPriceIsRightRound(
      celebrity='Michelle Hurd'
      hint1='One of the more recent actors to the franchise'
      hint2='Played the ex-girlfriend of the titular Ash vs. The Evil Dead'
      hint3='Prob the worst Star Trek character of all time'
      video='https://cdn.cameo.com/video/627e49f2735318e66eb708a1-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/aHqr0mFkD_avatar-23d_aIrdj.jpg'
      :price='65.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Elizabeth Dennehy'
      hint1='This actor was one of my favorite single episode appearances'
      hint2='Last appearance of the saucer section until the movie'
      hint3='Lt. Cmdr. Shelby who is first to encounter Locutus'
      video='https://cdn.cameo.com/video/62891c9267f6502b8c71f43d-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/OrCH5xiiT_avatar-IRyaWzV4m.jpg'
      :price='30.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Tawny Newsome'
      hint1='Another actor new to the franchise'
      hint2='Star of the third animated series in Star Trek history'
      hint3='Prob the best new Star Trek character in a long while'
      video='https://cdn.cameo.com/video/6278407c5f961a20319835d4-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/nGL9L67Ab_avatar-jN1Zoxr27.jpg'
      :price='95.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Emily Coutts'
      hint1='Plays the first bridge officer of the round'
      hint2='Critical character for one of the top 5 space battles'
      hint3="That's not a Borg, that's Lt. Keyla Detmer"
      video='https://cdn.cameo.com/video/6270192978b4f2cce268b95f-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/98o62AD6-D3899BF0-A292-4153-8593-9464C6851701.jpg'
      :price='60.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Diane Louise Salinger'
      hint1='Completely whiffed recognizing this actor from DS9'
      hint2='Played a member of a Bajoran resistance cell'
      hint3="Best remembered as Simone from Pee Wee's Big Adventure"
      video='https://cdn.cameo.com/video/620f163cce335dd0e264facb-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/Gd5lUmccH_IMG_1275.jpg'
      :price='75.0'
      :prize='1'
    )
    CameoPriceIsRightRound(
      celebrity='Tim Russ'
      hint1='This actor screen tested for LaForge in 1987'
      hint2="Wouldn't join the franchise until 1995"
      hint3="Memorable bit role in Spaceballs responding to Dark Helmet in the desert"
      video='https://cdn.cameo.com/video/628dcf6b79244e7e878093d9-processed.mp4'
      image='https://d31wcbk3iidrjq.cloudfront.net/UJVPSFlrN_avatar-7thVFUJNd.jpg'
      :price='100.0'
      :prize='1'
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
import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

import CameoPriceIsRightRound from '@/components/CameoPriceIsRight/CameoPriceIsRightRound.vue'
import CelebrityGuess from '@/components/CameoPriceIsRight/CelebrityGuess.vue'
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
    CameoPriceIsRightRound,
    GameContentWithSidebar,
    CelebrityGuess,
    ItemGuess
  },
  data () {
    return {
      bossfight: [
        { name: 'Laura Jane Grace', emoji: '🤘️' },
        { name: 'The Soup Nazi', emoji: '🥣️' },
        { name: 'Mick Foley', emoji: '🤼️', value: 'the most popular with 4,128 5 star reviews' },
        { name: 'Kevin Conroy', emoji: '🦇️' },
        { name: 'Mark McGrath', emoji: '💩️' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import
url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
html {
  font-size: 36px;
}

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
}
</style>
