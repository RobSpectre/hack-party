<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/capitol.mp4')
    VideoSlide(background='/video/meadows.mp4')
    BackgroundImageSlide(background='/images/dc_trip.jpg')
    VideoSlide(background='/video/steal_phones_cut.mp4')
    VideoSlide(background='/video/phone_jack.mp4')
    Title(
      background='/video/whose_line.mp4'
      heading='/images/whose_text_is_it_anyway.png'
    )
    Slide
      h2.fragment Solo
      h2.fragment Conversation from Mark Meadows' phone
      h2.fragment Three MAGA Personalities
      h2.fragment Choose Who Sent The Text
      h2.fragment Contrarian Bonus!
      h2.fragment 2x each round
      h1 Rules
    PlayerBoard
    Slide(class='darkgray')
      h2.text-white 6 January 2021
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='donald_trump_jr.messages'
      :rooms='donald_trump_jr.rooms'
    )
    ItemGuess(
      :items='donald_trump_jr.items'
      :winnerIndex='1'
      :prize='1'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='mtg_one.messages'
      :rooms='mtg_one.rooms'
    )
    ItemGuess(
      :items='mtg_one.items'
      :winnerIndex='0'
      :prize='1'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='kushner_one.messages'
      :rooms='kushner_one.rooms'
    )
    ItemGuess(
      :items='kushner_one.items'
      :winnerIndex='2'
      :prize='1'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='priebus.messages'
      :rooms='priebus.rooms'
    )
    ItemGuess(
      :items='priebus.items'
      :winnerIndex='0'
      :prize='1'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='miller_one.messages'
      :rooms='miller_one.rooms'
    )
    ItemGuess(
      :items='miller_one.items'
      :winnerIndex='1'
      :prize='1'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/billburr_fenway.mp4'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Each round is 2x!
    Slide(class='darkgray')
      h2.text-white 3 Nov 2020 - 6 Jan 2021
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='rick_perry.messages'
      :rooms='rick_perry.rooms'
    )
    ItemGuess(
      :items='rick_perry.items'
      :winnerIndex='2'
      :prize='2'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='trump_jr_two.messages'
      :rooms='trump_jr_two.rooms'
    )
    ItemGuess(
      :items='trump_jr_two.items'
      :winnerIndex='1'
      :prize='2'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='hannity.messages'
      :rooms='hannity.rooms'
    )
    ItemGuess(
      :items='hannity.items'
      :winnerIndex='0'
      :prize='2'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='ginni_thomas.messages'
      :rooms='ginni_thomas.rooms'
    )
    ItemGuess(
      :items='ginni_thomas.items'
      :winnerIndex='2'
      :prize='2'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='pillow_guy.messages'
      :rooms='pillow_guy.rooms'
    )
    ItemGuess(
      :items='pillow_guy.items'
      :winnerIndex='1'
      :prize='2'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/biden_wh_correspondents_dinner.webm'
      :muted='false'
    )
    PlayerBoard
    Slide(class='green')
      h2.text-white Each round is 3x!
    Slide(class='darkgray')
      h2.text-white 6 Jan 2021 - present
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='mtg_two.messages'
      :rooms='mtg_two.rooms'
    )
    ItemGuess(
      :items='mtg_two.items'
      :winnerIndex='1'
      :prize='3'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='mitch_mcconnell.messages'
      :rooms='mitch_mcconnell.rooms'
    )
    ItemGuess(
      :items='mitch_mcconnell.items'
      :winnerIndex='0'
      :prize='3'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='hannity_two.messages'
      :rooms='hannity_two.rooms'
    )
    ItemGuess(
      :items='hannity_two.items'
      :winnerIndex='2'
      :prize='3'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='miller_two.messages'
      :rooms='miller_two.rooms'
    )
    ItemGuess(
      :items='miller_two.items'
      :winnerIndex='1'
      :prize='3'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
    GameChatMessages(
      currentUser='Marky Mead'
      :messages='hannity_three.messages'
      :rooms='hannity_three.rooms'
    )
    ItemGuess(
      :items='hannity_three.items'
      :winnerIndex='0'
      :prize='3'
      denomination=''
      headerImage='/images/qanon_shaman-720x500.png'
      :fragmentItemReveal='true'
      question='Whose text is it anyway?'
    )
</template>

<script>
import BackgroundImageSlide from '@/components/base/BackgroundImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ActionButton from '@/components/base/ActionButton.vue'
import GameChatMessages from '@/components/base/GameChatMessages.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'

import PlayerBoard from '@/components/Players/PlayerBoard.vue'

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
    GameChatMessages,
    ItemGuess
  },
  data () {
    return {
      donald_trump_jr: {
        items: [
          { name: 'Mick Mulvaney', emoji: '👓️' },
          { name: 'Donald Trump Jr.', emoji: '🐅️', value: 'the texter' },
          { name: 'Tucker Carlson', emoji: '🚽️' }
        ],
        messages: [
          { username: '???', content: 'We need an Oval address. He has to lead now. It has gone too far and gotten out of hand.' },
          { username: '???', content: 'He\'s got to condem this shit. Asap. The captiol police tweet is not enough.' },
          { username: 'Marky Mead', content: 'I am urging him strongly.' }
        ],
        rooms: ['POTUS', 'Mom', 'Wifey']
      },
      mtg_one: {
        items: [
          { name: 'Marjorie Taylor-Greene', emoji: '🤪️', value: 'the texter' },
          { name: 'Rudy Giuliani', emoji: '🍹️' },
          { name: 'Sean Hannity', emoji: '🦊️' }
        ],
        messages: [
          { username: '???', content: 'Mark I was just told there is an active shooter on the first floor of the Capitol' },
          { username: '???', content: 'Please tell the President to calm people' },
          { username: '???', content: 'This isn\'t the way to solve anything' }
        ],
        rooms: ['POTUS', 'Trump Personal', 'Pillow Guy', 'Tucker C']
      },
      kushner_one: {
        items: [
          { name: 'Jason Miller', emoji: '🙈️' },
          { name: 'Dan Scavino', emoji: '👀️' },
          { name: 'Jared Kushner', emoji: '🕴️', value: 'the texter' }
        ],
        messages: [
          { username: '???', content: 'Why don\'t we post on his Facebook page since he isn\'t locked out there…' }
        ],
        rooms: ['Capitol Police', 'Cocaine Mitch', 'Zuck']
      },
      priebus: {
        items: [
          { name: 'Reince Priebus', emoji: '🐸️', value: 'the texter' },
          { name: 'Tucker Carlson', emoji: '🚽️' },
          { name: 'Ginni Thomas', emoji: '🧣️' }
        ],
        messages: [
          { username: '???', content: 'TELL THEM TO GO HOME !!!' }
        ],
        rooms: ['WH Counsel', 'Capitol Police', 'Ingraham', 'A Jones']
      },
      miller_one: {
        items: [
          { name: 'Sean Hannity', emoji: '🦊️' },
          { name: 'Jason Miller', emoji: '🙈️', value: 'the texter' },
          { name: 'Rudy Giuliani', emoji: '🍹️' }
        ],
        messages: [
          { username: '???', content: "Call me crazy, but ideas for two tweets from POTUS: 1) Bad apples, likely ANTIFA or other crazed leftists, infiltrated today's peaceful protest over the fraudulent vote count. Violence is never acceptable! MAGA supporters embrace our police and the rule of law and should leave the Capitol now! 2) The fake news media who encouraged this summer's violent and radical riots are now trying to blame peaceful and innocent MAGA supporters for violent actions. This isn't who we are! Our people should head home and let the criminals suffer the consequences!" }
        ],
        rooms: ['Jake Tapper', 'Chuck Todd', 'Andrea Mitchell', 'Mike Schmidt',
          'Fucking Chuck', 'Fucking Nancy', "Dick's Daughter", 'AOC',
          'Ilham Omaha', 'Capitol Police', 'Rashskin', 'WH Switch', 'Mom']
      },
      rick_perry: {
        items: [
          { name: 'Rudy Giuliani', emoji: '🍹️' },
          { name: 'Rep. Scott Perry', emoji: '⛑️' },
          { name: 'Gov. Rick Perry', emoji: '👢️', value: 'the texter' }
        ],
        messages: [
          { username: '???', content: "HERE's an AGRESSIVE STRATEGY: Why can t the states of GA NC PENN and other R controlled state houses declare this is BS (where conflicts and election not called that night) and just send their own electors to vote and have it go to the SCOTUS -- Rick Perry" }
        ],
        rooms: ['WH Counsel', 'WH Dep Counsel', 'My Lawyer', "Wifey's Lawyer",
          'Hannity Personal', 'Hannity Admin', 'Ron Watkins']
      },
      trump_jr_two: {
        items: [
          { name: 'Laura Ingraham', emoji: '👱' },
          { name: 'Donald Trump Jr.', emoji: '🐅️', value: 'the texter' },
          { name: 'Jared Kushner', emoji: '🕴️' }
        ],
        messages: [
          { username: '???', content: "This is what we need to do please read it and please get it to everyone that needs to see it because I'm not sure we're doing it." },
          { username: '???', content: "It's very simple. We have multiple paths We control them all." },
          { username: '???', content: 'Republicans control Pennsylvania, Wisconsin, Michigan, North Carolina etc we get Trump electors' },
          { username: '???', content: 'Republicans control 28 states Democrats 22 states. Once again Trump wins.' }
        ],
        rooms: ['Ivanka', 'FLOTUS', "Mel's Lit Agent", 'Comet Ping Pong']
      },
      hannity: {
        items: [
          { name: 'Sean Hannity', emoji: '🦊️', value: 'the texter' },
          { name: 'Dan Scavino', emoji: '👀️' },
          { name: 'Alex Jones', emoji: '🔩️' }
        ],
        messages: [
          { username: '???', content: 'Hey' },
          { username: '???', content: 'NC gonna be ok?' },
          { username: 'Marky Mead', content: 'Stress every vote matters. Get out and vote.' },
          { username: 'Marky Mead', content: 'On radio' },
          { username: '???', content: 'Yes sir' },
          { username: '???', content: 'On it. Any place in particular we need a push' },
          { username: 'Marky Mead', content: 'Pennsylvania. NC AZ' },
          { username: 'Marky Mead', content: 'Nevada' },
          { username: '???', content: 'Got it. Everywhere' }
        ],
        rooms: ['538 Nate', 'Rudy', 'Sidney Powell', 'Lin Wood', 'POTUS',
          'Trump Signal']
      },
      ginni_thomas: {
        items: [
          { name: 'Rudy Giuliani', emoji: '🍹️' },
          { name: 'Donald Trump Jr.', emoji: '🐅️' },
          { name: 'Ginni Thomas', emoji: '🧣️', value: 'the texter' }
        ],
        messages: [
          { username: '???', content: 'Trying to understand the Sidney Powell distancing....' },
          { username: 'Marky Mead', content: "She doesn't have anything or at least she won't share it if she does" },
          { username: '???', content: 'Wow!' }
        ],
        rooms: ['Pillow Guy', 'A Jones', 'Ali Alexander', 'MTG']
      },
      pillow_guy: {
        items: [
          { name: 'Alex Jones', emoji: '🔩️' },
          { name: 'Mike Lindell', emoji: '🛌️', value: 'the texter' },
          { name: 'Marjorie Taylor-Greene', emoji: '🤪️' }
        ],
        messages: [
          { username: '???', content: 'Hey Mark, I felt I was suppose to text you this message... You being a man a faith and on the front line of the decisions that are going to be historical! I would ask that you pray for wisdom and discernment from God! You are one of the people the president trusts the most. That being said I want to add my input.... Everything Sidney has said is true! We have to get the machines and everything we already have proves the President won by millions of votes! I have read and not validated yet that you and others talked him out of seizing them... If true .. I pray it is part of a bigger plan... I am grateful that on the night of the election the algorithms of the corrupt machines broke and they realized our president would win in spite of the historical fraud! I look for deviations every day in my business ... when I find one I investigate relentlessly until I know why it happened and how it happened... ( this is my gift from God that has made my business so successful) From 11:15 pm on the night of the election I have spent all my time running impossible deviations and numbers from this election... I also was blessed to be able to get info and help Sidney Lin General Flynn and everyone else out there gathering all the massive evidence! I have been sickened by politicians ( especially republicans ) judges, the media not wanting to see the truth ( no matter what the truth would be!) This is the biggest cover up of one of the worst crimes in history! I have spent over a million$ to help uncover this fraud and used my platform so people can get the word not to give up! The people on both sides have to see the truth and when they do .... there will not be no civil war , people ( including politicians!) are fearing! The only thing any of us should fear is fear of the Lord! Every person on this planet needs to know the truth and see the evidence!!! Mark .. God has his hand in all of this and has put you on the front line... I will continue praying for you to have great wisdom and discernment! Blessings' },
          { username: 'Marky Mead', content: 'Thanks brother. Pray for a miracle' }
        ],
        rooms: ['WH Switch', 'Trump Admin', 'Trump Signal', 'Trump Personal', 'POTUS']
      },
      mtg_two: {
        items: [
          { name: 'Lauren Boebert', emoji: '👠️' },
          { name: 'Marjorie Taylor-Greene', emoji: '🤪️', value: 'the texter' },
          { name: 'Ginni Thomas', emoji: '🧣️' }
        ],
        messages: [
          { username: '???', content: "In our private chat with only Members, several are saying the only way to save our Republic is for Trump to call for Marshall law. I don't know on those things. I just wanted you to tell him. They stole this election. We all know. They will destroy our country next. Please tell him to declassify as much as possible so we can go after Biden and anyone else!" }
        ],
        rooms: ['Top Exec Solutions', 'Proskauer', 'AGSHF', 'Brownstein']
      },
      mitch_mcconnell: {
        items: [
          { name: 'Sen. Mitch McConnell', emoji: '🐢️', value: 'the texter' },
          { name: 'Rep. Kevin McCarthy', emoji: '📞️' },
          { name: 'Gov. Chris Christie', emoji: '🐷️' }
        ],
        messages: [
          { username: '???', content: 'The Democrats are going to take care of the son of a bitch for us.' }
        ],
        rooms: ['Wifey', 'Boom Boom Firearms', 'POTUS', 'J-rod', 'Ivanka']
      },
      hannity_two: {
        items: [
          { name: 'Rep. Kevin McCarthy', emoji: '📞️' },
          { name: 'Donald Trump Jr.', emoji: '🐅️' },
          { name: 'Sean Hannity', emoji: '🦊️', value: 'the texter' }
        ],
        messages: [
          { username: '???', content: "Guys, we have a clear path to land the plane in 9 days. He can't mention the election again. Ever. I did not have a good call with him today. And worse, I'm not sure what is left to do or say, and I don't like not knowing if it's truly understood. Ideas?" }
        ],
        rooms: ['MTG', 'Boebert', 'Scott Perry', 'Rick Perry', 'Tyler Perry',
          'Luke Perry']
      },
      miller_two: {
        items: [
          { name: 'Dan Scavino', emoji: '👀️' },
          { name: 'Jason Miller', emoji: '🙈️', value: 'the texter' },
          { name: 'Jared Kushner', emoji: '🕴️' }
        ],
        messages: [
          { username: '???', content: '2/3 of the MAGA base wants us to move on.' },
          { username: '???', content: "I tried to walk the President through this earlier but he won't have any of it" }
        ],
        rooms: ['DC Tow', 'DC 9 Pct', "Sal's Parking"]
      },
      hannity_three: {
        items: [
          { name: 'Sean Hannity', emoji: '🦊️', value: 'the texter' },
          { name: 'Jared Kushner', emoji: '🕴️' },
          { name: 'Rep. Kevin McCarthy', emoji: '📞️' }
        ],
        messages: [
          { username: '???', content: 'https://twitter.com/therecount/status/1351578348783341571?s=21' },
          { username: '???', content: 'Well this is as bad as this can get' }
        ],
        rooms: ['Mom', "Wifey's Lawyer"]
      }
    }
  }
}
</script>

<style lang='scss'>
html {
  font-size: 36px;
}
</style>
