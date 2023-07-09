<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/doofus.mp4')
      .title March Sadness
    Slide
      h2.fragment Solo
      h2.fragment Tournament of 2024 POTUS Candidates...
      h2.fragment ...that never served as POTUS
      h2.fragment Bracket seeded randomly
      h2.fragment Each tournament round will measure candidates by a different sad measure
      h2.fragment Not using polling or fundraising or anything important
      h2.fragment Contrarian bonus is in effect
      h1 Game Play
    PlayerBoard
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_one.png")
    Slide(class="darkgray")
      h2.text-white How many words ChatGPT thinks are on Wikipedia
    WhichIsWhichRound(
      v-for='(round, index) in round_one'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='Which fighter has more words on Wikipedia?'
      headerImage='/images/game_header.png'
    )
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_two.png")
    PlayerBoard
    VideoSlide(
      background='/video/bracket.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are worth 2x!
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_two.png")
    Slide(class="darkgray")
      h2.text-white How many articles ChatGPT thinks were published in the last month?
    ItemGuess(
      v-for='(round, index) in round_two'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='How many articles published in the last month?'
      headerImage='/images/game_header.png'
      :prize='2'
    )
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_three.png")
    PlayerBoard
    VideoSlide(
      background='/video/vermin.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Points are worth 3x!
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_three.png")
    Slide(class='darkgray')
      h2.text-white In how many podcast episodes was the candidate discussed?
    ItemGuess(
      v-for='(round, index) in round_three'
      :key='index'
      :items='round'
      :winnerIndex='round[0].value > round[1].value ? 0 : 1'
      question='Which candidate had the most podcast episode mentions?'
      headerImage='/images/game_header.png'
      :prize='3'
    )
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_four.png")
    PlayerBoard
    Slide(class='green')
      h2.text-white ZOMG! THIS IS WORTH 10 POINTZ!!11
    Slide(class='darkgray')
      h2.text-white Which candidate has more lies on Politifact?
    ItemGuess(
      :items='round_four'
      :winnerIndex='round_four[0].value > round_four[1].value ? 0 : 1'
      question='Which candidate had the most lies on Politifact?'
      headerImage='/images/game_header.png'
      :prize='10'
    )
    Slide(style="background-color: #1e1f24;")
      img(src="/images/bracket_round_final.png")
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
    ItemGuess
  },
  data () {
    return {
      round_one: [
        [
          {
            name: '1. Ron DeSantis',
            hints: ['Hosted a fundraiser up the street from me last week', 'Largest collection of nicknames from Donald Trump', 'Extremely weird dude'],
            value: 3890,
            image: 'https://images.newrepublic.com/ce0020debb2bb2ce579f86665ce4282e64ee711a.jpeg',
            emoji: '🧆️'
          },
          {
            name: '16. Marianne Williamson',
            hints: ["Celebrity birthed by Oprah's book club in 1992", 'Describes herself as a "spiritual activist"', 'Highest engagement on TikTok in the tournament'],
            value: 8000,
            image: 'https://pyxis.nymag.com/v1/imgs/376/dd0/8967043fa8bf56999933b5aae65721b59f-31-marianne-williamson.jpg',
            emoji: '🧚‍♀️️'
          }
        ],
        [
          {
            name: '9. Cornel West',
            hints: ['Philosophy professor at many Ivy League schools', 'Appeared in the last two Matrix movies', 'Only candidate named MTV Artist of the Week'],
            value: 2890,
            image: 'https://media.newyorker.com/photos/6228e1e16af1a197635a1ddc/master/w_2240,c_limit/Cunningham-CornelWest_013-updated.jpg',
            emoji: '🏫️'
          },
          {
            name: '8. Doug Burgham',
            hints: ['Yes, this is an actual person', 'Made his fortune selling his software company to Microsoft for $1.1b in 2001', 'Governor of North Dakota'],
            value: 4000,
            image: 'https://yt3.googleusercontent.com/ytc/AGIKgqOFZYw75q349OWtgLlo5uv1rwMOXfT3gK5xOVaO=s900-c-k-c0x00ffffff-no-rj',
            emoji: '💾️'
          }
        ],
        [
          {
            name: '5. Vermin Supreme',
            hints: ["Rob's pick to win the tournament", 'New Hampshire native with plenty of campaign experience', 'Will make flossing compulsory and give every American a pony'],
            value: 5890,
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/120831052747-vermin-supreme.jpg?q=w_3000,h_2032,x_0,y_0,c_fill',
            emoji: '👢️'
          },
          {
            name: '12. Will Hurd',
            hints: ['Popular Republican from Texas', 'Started his career in the Intelligence Community', 'Wicked smart dude'],
            value: 890,
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_31/2956841/190801-will-hurd-2017-ac-826p.jpg',
            emoji: '🕵️'
          }
        ],
        [
          {
            name: '13. Corey Stapleton',
            hints: ['After serving as Secretary of State, lost a bid for US Congress in Montana in 2020', 'In 2021 announced his intention to pursue a career as a country singer', 'In 2022, announced his campaign for POTUS'],
            value: 2890,
            image: 'https://bloximages.chicago2.vip.townnews.com/helenair.com/content/tncms/assets/v3/editorial/6/34/6341d3a2-05dc-5c25-b9e5-59c57b648f52/5f456ef00f03a.image.jpg',
            emoji: '🤠️'
          },
          {
            name: '4. Francis Suarez',
            hints: ['Second generation big city mayor', 'Based his mayoralty on the creation of a cryptocurrency', 'Miamicoin is currently down 98%'],
            value: 845,
            image: 'https://wsvn.com/wp-content/uploads/sites/2/2023/06/230619-FRANCIS-SUAREZ.jpg',
            emoji: '₿'
          }
        ],
        [
          {
            name: '3. Tim Scott',
            hints: ['Came to the Senate by appointment by another competitor in the tournament', 'First black US Senator elected from a Southern state since Reconstruction', '#KeepYoMoney'],
            value: 4000,
            image: 'https://www.live5news.com/resizer/OIZZgNritUt0cmRi_2oe2S-rL4E=/arc-photo-gray/arc3-prod/public/DMOPR22TE5GBZN2JXRASPSNIRA.jpg',
            emoji: '🤑️'
          },
          {
            name: '14. Vivek Ramaswamy',
            hints: ['Member of the Harvard -> Yale -> Pharma pipeline', 'Started an investment firm whose whole thesis was opposing ESG', 'Colossal Dickbag'],
            value: 2890,
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/q_auto:best/rockcms/2023-06/230626-vivek-ramaswamy-jm-1159-e4162b.jpg',
            emoji: '🏦️'
          }
        ],
        [
          {
            name: '11. Larry Elder',
            hints: ['Another product of conservative talk radio', 'Appears frequently in the Epoch Times, the looney tune newspaper from the Falun Gong', 'Got spanked in the manufactured recall of Gavin Newsom'],
            value: 4000,
            image: 'https://www.rollingstone.com/wp-content/uploads/2021/09/larry-elder.jpg',
            emoji: '📻️'
          },
          {
            name: '6. Asa Hutchinson',
            hints: ["A former US Attorney, he ran the DEA for W's first term", 'Later served as an undersecretary at the newly formed Homeland Security', 'Two term governor of Arkansas polling less than 1%'],
            value: 2890,
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/230430100815-asa-hutchinson-0419.jpg?c=3x2',
            emoji: '👮️'
          }
        ],
        [
          {
            name: '7. Chris Christie',
            hints: ['Sailed to reelection as governor from his disaster response', 'Later would campaign with Donald Trump', "Shared Trump's penchant for abuse of power, including having a beach day with his family on a beach he himself closed"],
            value: 4000,
            image: 'https://cdn.cnn.com/cnnnext/dam/assets/170703103526-03-chris-christie-beach-0702-super-169.jpg',
            emoji: '🐽️'
          },
          {
            name: '10. Mike Pence',
            hints: ['Maybe the only candidate to spring from conservative radio that won campaigns', 'Six term Congressman, two term governor', 'Former boss led a mob to the Capitol intent on hanging him'],
            value: 5000,
            image: 'https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/canvas/2023/06/06/342ce586-7777-43d3-9e0b-3b63b147c688_5c792d0a.jpg?itok=0-X0Mwm6&v=1685993413',
            emoji: '🏍️'
          }
        ],
        [
          {
            name: '15. Nikki Haley',
            hints: ['Accountant who worked in the family clothing business', 'Rose quickly through South Carolina politics to governor', 'Former US Ambassador to the United Nations under Trump'],
            value: 4000,
            image: 'https://www.usatoday.com/gcdn/presto/2023/02/01/USAT/7e97a997-4b29-465b-a71d-8d8bf0819a0f-AFP_AFP_32NZ9AQ.jpg_Nikki_Haley.jpg',
            emoji: '🪡️'
          },
          {
            name: '2. Robert F. Kennedy Jr',
            hints: ['Perhaps the looniest of the tournament of loons', 'Uniquely responsible for the anti-vaccine movement in the United States', 'Famous dad'],
            value: 8890,
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230505-boston-RFK-JR-robert-f-kennedy-jr-ac-456p-177a35.jpg',
            emoji: '💉️'
          }
        ]
      ],
      round_two: [
        [
          {
            name: '16. Marianne Williamson',
            hints: ["Celebrity birthed by Oprah's book club in 1992", 'Describes herself as a "spiritual activist"', 'Highest engagement on TikTok in the tournament'],
            value: 21,
            image: 'https://pyxis.nymag.com/v1/imgs/376/dd0/8967043fa8bf56999933b5aae65721b59f-31-marianne-williamson.jpg',
            emoji: '🧚‍♀️️'
          },
          {
            name: '8. Doug Burgham',
            hints: ['Yes, this is an actual person', 'Made his fortune selling his software company to Microsoft for $1.1b in 2001', 'Governor of North Dakota'],
            value: 8,
            image: 'https://yt3.googleusercontent.com/ytc/AGIKgqOFZYw75q349OWtgLlo5uv1rwMOXfT3gK5xOVaO=s900-c-k-c0x00ffffff-no-rj',
            emoji: '💾️'
          }
        ],
        [
          {
            name: '5. Vermin Supreme',
            hints: ["Rob's pick to win the tournament", 'New Hampshire native with plenty of campaign experience', 'Will make flossing compulsory and give every American a pony'],
            value: 8,
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/120831052747-vermin-supreme.jpg?q=w_3000,h_2032,x_0,y_0,c_fill',
            emoji: '👢️'
          },
          {
            name: '13. Corey Stapleton',
            hints: ['After serving as Secretary of State, lost a bid for US Congress in Montana in 2020', 'In 2021 announced his intention to pursue a career as a country singer', 'In 2022, announced his campaign for POTUS'],
            value: 11,
            image: 'https://bloximages.chicago2.vip.townnews.com/helenair.com/content/tncms/assets/v3/editorial/6/34/6341d3a2-05dc-5c25-b9e5-59c57b648f52/5f456ef00f03a.image.jpg',
            emoji: '🤠️'
          }
        ],
        [
          {
            name: '3. Tim Scott',
            hints: ['Came to the Senate by appointment by another competitor in the tournament', 'First black US Senator elected from a Southern state since Reconstruction', '#KeepYoMoney'],
            value: 50,
            image: 'https://www.live5news.com/resizer/OIZZgNritUt0cmRi_2oe2S-rL4E=/arc-photo-gray/arc3-prod/public/DMOPR22TE5GBZN2JXRASPSNIRA.jpg',
            emoji: '🤑️'
          },
          {
            name: '11. Larry Elder',
            hints: ['Another product of conservative talk radio', 'Appears frequently in the Epoch Times, the looney tune newspaper from the Falun Gong', 'Got spanked in the manufactured recall of Gavin Newsom'],
            value: 40,
            image: 'https://www.rollingstone.com/wp-content/uploads/2021/09/larry-elder.jpg',
            emoji: '📻️'
          }
        ],
        [
          {
            name: '10. Mike Pence',
            hints: ['Maybe the only candidate to spring from conservative radio that won campaigns', 'Six term Congressman, two term governor', 'Former boss led a mob to the Capitol intent on hanging him'],
            value: 100,
            image: 'https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/canvas/2023/06/06/342ce586-7777-43d3-9e0b-3b63b147c688_5c792d0a.jpg?itok=0-X0Mwm6&v=1685993413',
            emoji: '🏍️'
          },
          {
            name: '2. Robert F. Kennedy Jr',
            hints: ['Perhaps the looniest of the tournament of loons', 'Uniquely responsible for the anti-vaccine movement in the United States', 'Famous dad'],
            value: 8000,
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230505-boston-RFK-JR-robert-f-kennedy-jr-ac-456p-177a35.jpg',
            emoji: '💉️'
          }
        ]
      ],
      round_three: [
        [
          {
            name: '16. Marianne Williamson',
            hints: ["Celebrity birthed by Oprah's book club in 1992", 'Describes herself as a "spiritual activist"', 'Highest engagement on TikTok in the tournament'],
            value: 7509,
            image: 'https://pyxis.nymag.com/v1/imgs/376/dd0/8967043fa8bf56999933b5aae65721b59f-31-marianne-williamson.jpg',
            emoji: '🧚‍♀️️'
          },
          {
            name: '13. Corey Stapleton',
            hints: ['After serving as Secretary of State, lost a bid for US Congress in Montana in 2020', 'In 2021 announced his intention to pursue a career as a country singer', 'In 2022, announced his campaign for POTUS'],
            value: 86,
            image: 'https://bloximages.chicago2.vip.townnews.com/helenair.com/content/tncms/assets/v3/editorial/6/34/6341d3a2-05dc-5c25-b9e5-59c57b648f52/5f456ef00f03a.image.jpg',
            emoji: '🤠️'
          }
        ],
        [
          {
            name: '3. Tim Scott',
            hints: ['Came to the Senate by appointment by another competitor in the tournament', 'First black US Senator elected from a Southern state since Reconstruction', '#KeepYoMoney'],
            value: 10000,
            image: 'https://www.live5news.com/resizer/OIZZgNritUt0cmRi_2oe2S-rL4E=/arc-photo-gray/arc3-prod/public/DMOPR22TE5GBZN2JXRASPSNIRA.jpg',
            emoji: '🤑️'
          },
          {
            name: '2. Robert F. Kennedy Jr',
            hints: ['Perhaps the looniest of the tournament of loons', 'Uniquely responsible for the anti-vaccine movement in the United States', 'Famous dad'],
            value: 2174,
            image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230505-boston-RFK-JR-robert-f-kennedy-jr-ac-456p-177a35.jpg',
            emoji: '💉️'
          }
        ]
      ],
      round_four: [
        {
          name: '16. Marianne Williamson',
          hints: ["Celebrity birthed by Oprah's book club in 1992", 'Describes herself as a "spiritual activist"', 'Highest engagement on TikTok in the tournament'],
          value: 0,
          image: 'https://pyxis.nymag.com/v1/imgs/376/dd0/8967043fa8bf56999933b5aae65721b59f-31-marianne-williamson.jpg',
          emoji: '🧚‍♀️️'
        },
        {
          name: '3. Tim Scott',
          hints: ['Came to the Senate by appointment by another competitor in the tournament', 'First black US Senator elected from a Southern state since Reconstruction', '#KeepYoMoney'],
          value: 4,
          image: 'https://www.live5news.com/resizer/OIZZgNritUt0cmRi_2oe2S-rL4E=/arc-photo-gray/arc3-prod/public/DMOPR22TE5GBZN2JXRASPSNIRA.jpg',
          emoji: '🤑️'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

.title {
  font-family: 'Luckiest Guy', cursive !important;
  @apply mt-36 skew-x-6 skew-y-12 text-9xl text-blue tracking-tight text-shadow shadow-black #{!important};
}

html {
  font-size: 36px;
}
</style>
