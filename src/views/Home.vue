<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/lebowski_cut.mp4')
      .title Am I The Jerk?
      .lobster A game of judgment
    Slide
      h2.fragment Solo
      h2.fragment You will hear the story of a person seeking judgment
      h2.fragment You guess what judgment reddit rendered on the story
      h2.fragment All stories are within ~20% of each other - very close
      h2.fragment Contrarian bonus is in effect
      h2.fragment Boss fight will be guessing Oscar winners when they come up
      h1 Game Play
    Slide(class='green')
      h2.text-white Let's go!
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for not buying my wife and kids the good donuts any more
        AudioPlayer.fragment(src='/sounds/trump_donuts.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p As a treat every once in a while I go to Little Italy and go to a specific bakery that makes the most amazing donuts. And they aren't crazy expensive. I will buy a dozen and bring them home for my family. Me, my wife, and two kids. Four people, twelve donuts, three donuts each. Simple. Fair.
          p For some reason my son (7) cannot understand that the donuts with no hole in the middle are the ones with the filling. Since he loves the ones with filling he will take bites out of a few until he finds the one he wants.
          p Yes we've had him tested. No he isn't "special".
          p I have tried everything. I've tried reasoning with him. I've tried getting upset with him, but his mom steps in right away if I do that.
          p I tried just bringing home four donuts. They all got upset.
          p I tried making a family trip to that bakery so everyone could pick their own donuts. That worked. But then they all complained about having to leave the house and drive 45 minutes each way just to get donuts.
          p So now I don't bother. And they are all upset because I don't bring home donuts anymore.
          p I feel a little badly for my daughter. It's not her fault her brother cannot comprehend a fairly simple concept.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :fragmentItemReveal='true'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for sleeping downstairs when my boyfriend didn’t want to allow my dog to sleep in the room with us?
        AudioPlayer.fragment(src='/sounds/sanders_dog_sleeping.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Me and my boyfriend have been together for six months and my dog and I have been in the process of moving in. My bf Cameron asked me to over a month ago and I just moved everything out of my former place today.
          p Cameron has a dog as well. She’s a large breed (around 60 pounds where Sammy is around 30). She’s just over three and he rescued her when she was just under a year old. She had sometimes slept in his room with him, but mostly in a crate. My dog has never slept in a crate, I don’t disagree with that method of training at all, but I’d be unwilling to force that on my dog, now that he’s so old.
          p I go to bed before my boyfriend and the last two nights he’s been coming to bed and locking my dog out of the room. He’d mentioned, prior to doing this, thinking about not having my dog sleep in the room, and every time he brought it up, I expressed my discomfort. My dog and I have been through some rough things and he’s never not slept near me.
          p Tonight, I stayed up much later with boyfriend while he played on the computer. We went to go to bed and he tried to lock my dog out and I said I wasn’t comfortable with that. He said my dog affected his allergies and makes weird mouth noises that we’re keeping him awake (his dog is not hypoallergenic). I said I respected that he needed sleep, I wanted to try to solve this issue when it wasn’t nearly midnight, and that I’d like to either sleep on the couch with my dog nearby or sleep with the door open until we could have a proper conversation. He was really upset by this and told me both options were “crap.” I asked him for compromises and he didn’t have any. He then walked out while I was mid sentence to sleep in his guest room (strictly no dogs allowed in that room).
          p I don’t know what I did wrong. I know I can be overprotective of my dog. Am I being unreasonable? I was trying to help.
          p TL;DR: my boyfriend is allergic to my dog and instead of sleeping in the same room I offered to sleep on the couch
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for telling my girlfriend she needs to be polite and "ruining" her mood before an interview
        AudioPlayer.fragment(src='/sounds/alex_jones_clothes.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p So my girlfriend recently bought some clothes and ordered them to my house. I was planning to take them to her the next time I go meet her. She lives in another country so I fly there often. Since it was a lot of clothes I told her that this is gonna take up most of my suitcase.
          p I suggested that I would wear one of the jackets inside my big winter coat and that way I would save some space. I sent her a picture of me wearing her new jacket and she responded in a very weird tone. "Please don't wear my clothes. Thank you I don't like when other people wear my clothes."
          p I think this tone is a bit weird and rude for me... We've been together for a while now but she sometimes treats me like a stranger. I also flipped a bit and told her that she's acting weird and that these little quirks of hers are gonna make it very hard to live with her (we're planning to move in together soon).
          p We had a big ish argument after this doubting the entire relationship because I said it's gonna be hard to live with her.
          p I agree it was bad timing since she had an interview the next day but I couldn't not tell her in the moment that she could have at least had a sense of humour about it while telling me to take off her jacket.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for not stopping my workout to give someone the treadmill
        AudioPlayer.fragment(src='/sounds/biden_treadmill.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I live in a building that is mostly college students but I am not a college student (I’m 26m). The building has a nice gym but only has two treadmills for some reason.
          p I work out every morning and part of my work out is the treadmill. I usually run for more than an hour but will take a break to give a chance for other people to use it. I take at least 15 minutes to give a chance for other people in the gym to hope on.
          p Last week, after I had just started my treadmill for the second time, a girl walked into the gym and asked me how much time I had left. I said I had a while left. She left in a huff.
          p Edit: the way she asked right off the bat was very rude.
          p This morning, the girl came up to me again and asked. This time it was my first time on the treadmill today an I had been on for two minutes. I was a little more annoyed and said, “I just started. I’ll be done when I’m done. Please don’t ask again.”
          p She stormed out of the gym and came back minutes later with the desk worker (who I supervise). She goes “that’s the man who was mean to me. I don’t even know what he’s doing because he’s old.” My desk worker said, “that’s my boss. He works and lives here. I don’t know what to tell you other than wait your turn.”
          p The girl goes “are you serious? That’s unacceptable.” And walked off.
          p AITJ? My rational is that, the students have access to the campus gym (included in their tuition that is HUGE, has dozens of treadmills,and is right across the street from our building. I do not have access to the campus gym as it is expensive for not students and has very limited hours.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for leaving my girlfriend at a restaurant?
        AudioPlayer.fragment(src='/sounds/mcconaughey_girlfriend.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My girlfriend and I were at a restaurant and she was extremely not fond of the menu (she has no dietary restrictions or vegan, she's just a picky eater). She ordered anyways and wanted to get the same thing I did.
          p She hated it before even taking first bite, and I kept telling her to at least try it. She took a bite and gave me a gag face. She continued to complain about the food and critique it while I was eating and people were watching and it was pretty embarassing. What shocked me is that she got up to the waiter and loudly expressed him to take it back and she doesn't want it anymore and it was awful. I got fed up, I left and got in my car and went home.
          p She noticed and called me while I was driving and I went home and called her back and told her what she did was embarassing and something a karen would do. She was crying and told me to screw off and called me a jerk and all other sorts of names. She had someone pick her up from the restaurant but what she told me when she got home that I have to pay her back for the food, and she deserves me to take her to another restaurant. After an argument I asked her to leave and I haven't spoken to her since.
          p Her friend messaged me (the one who picked her up) saying I was a piece of poop and I should be ashamed because I left her at the restaurant.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    PlayerBoard
    VideoSlide(
      background='/video/mclaughlin_group.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for expecting my bf to pick me up from work during a snow storm?
        AudioPlayer.fragment(src='/sounds/sarah_palin_snowstorm.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Yesterday afternoon/evening we got hit with a wicked storm. Near zero visibility, plows couldn’t get roads cleared fast enough, 20 minute commutes were taking over an hour.
          p I have a license but no car, my bf has both. We live together. He doesn’t work (rich dad), just sleeps until 3-4pm and plays video games all night after I go to bed. My work is a 20-25 minute drive, mostly highway. We have an agreement that he picks me up from work on Mondays, Wednesdays and Fridays. I take the bus every morning and I bus home on Tuesdays and Thursdays. When I bus home he has dinner ready for me (just something frozen cooked in the oven). It’s 3 different bus lines, takes about 90 minutes. Uber/cab is between $40 and $60.
          p I’m not allowed my phone while I’m at work, so I get off at 5:30 to a bunch of texts from him about how Maps is estimating 51 mins for him to get to me and how awful it is out there so he isn’t going to come. I was annoyed, but semi-understanding. He seemed apologetic and kept saying “I hope you don’t hate me”.
          p I stood in blizzard conditions from 5:45 until 6:20 waiting for my first bus (scheduled to be there at 5:58). My legs were numb and covered in ice pellets (which then melted on the heated bus and made me soaking wet). With each connection I grew more and more irritated until I was nothing short of livid. For my last connection I was in the cold from 7:20 to 8:00. I didn’t get home until 8:30. I ran myself a bubble bath, ate leftover pasta while in the bath and then went to bed. It took everything in me to not lose my poop on him for leaving me to commute in a storm. Even this morning as I left for work and he was snuggled up in bed I had to bite my tongue.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for not being ok with my girlfriend's trip?
        AudioPlayer.fragment(src='/sounds/david_attenborough_nyc.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I (18M) and my gf (18F) are from the UK and have always planned to go to New York together for the first time since we started dating a year ago. We planned to wait until we were 21 so we were old enough to drink. We would always talk about it and it was something we were excited to do together.
          p However I woke up one morning to my gf sat on top of me with an excited look on her face. She told me she had booked a trip to New York with her best friend to see an artist they both like in concert.
          p Obviously this was a massive shock to me as it ruined our plans to go. I remember I froze and was left speechless almost. I didn't say much and just left.
          p Fast forward to the next day and we talked. I explained how I was hurt that she was going to NYC when this is something we'd planned together. She said that when she was booking it she knew I wouldnt like it but that I should be happy for her as its an artist she really likes. She said we can always go to NYC together another time but she can only go to the concert once.
          p This angered me further as this artist is touring in places other than NYC so she could've seen them without ruining our plans. Also I don't understand why she didn't at least tell me before she booked if she knew it would hurt me. We argued and she said I was over reacting and needed to get over it.
          p We argued lots for the next few weeks. She claims that she spent a whole week trying to sell the tickets. I find this hard to believe as they are for a very popular artist and she would of had no trouble selling them for more than she even bought them for. Even if she had sold them this wouldn't have changed how I felt as she still did what she did.
          p We tried to patch things up and have had a good few months but things just don't feel the same. I've tried to let it go but she has shown no remorse over the last few months. She has done nothing to fix the situation or make it up to me despite knowing how much she has hurt me. I just feel betrayed.
          p The trip is soon and I recently mentioned to her that I was still hurt about it to which she said I should've gotten over it by now. She doesn't care about how I feel and that hurts even more.
          p I know that it's gonna get even harder for me after her trip as she is gonna have a great time. She loves music and it'll be one of the best times of her life. It will be hard knowing that one of her best experiences is one that hurt me so much.
          p I don't want to break up but things just don't feel the same anymore. I don't think I can be with someone who clearly has no regard for my feelings.
          p AITJ?
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for wanting my pregnant wife to do the dishes
        AudioPlayer.fragment(src='/sounds/tucker_carlson_wife.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p So me (35) wife (33) are just about 17 weeks pregnant with twins. in the beginning there were some issues and she didn't do a thing. I mean even having a shower once a week was a struggle. now the doctors are basically telling her she needs to be more active. I am in university but also working part time, I'm currently writing my dissertation and so a bit busy. yesterday I came home after being out all day to find the dishes that I didn't do the night before(my bad) after I finished cooking. and my wife had seen them and just didn't want to touch them. she ordered her lunch instead of cooking and waited for me to come home and clean the dishes before I cooked dinner. but because I was a bit angry and I told her I was, after I finished cooking dinner she refused to eat it saying she didn't want to clean and I said I'd clean up. I'm just curious am I being insensitive because she's pregnant and she shouldn't do anything?
          p my wife doesn't work or study. the dishes were from a meal I'd cooked for the both of us the previous night.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ For Returning a Personalized Baby Gift to my Family?
        AudioPlayer.fragment(src='/sounds/kimberly_guilfoyle_gift.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I had a baby 3 weeks ago and just received a personalized pillow case in the mail with my daughter’s name and birth stats (weight, height, etc.) from my Aunt and Uncle. This would be a nice gift, except the package was addressed to my daughter and my mother.
          p Some backstory, this is my mom’s side of the family. My mother lives in California, we live in Texas and my extended family live in Iowa. I’m 28 and this is my second child.
          p As a child, I would have said I was very close to my mom’s side of the family, but growing up I’ve slowly come to realize they don’t actually give a poop about me. Up until last year, we all lived in Iowa within 30 minutes of each other. So if there was a holiday that they were hosting, they would invite my mom and expect her to invite me instead of reaching out to me themselves. I have lots of cousins from this Aunt and Uncle who are 10+ years older than me. My cousins will invite my mom to their kids activities and expect her to invite me (or not). I’m always the last to know or be invited to anything. Not sure if this is because they still see me as the baby of the family (I’m the youngest of all of the cousins, with a large age gap) or if they just truly don’t want me around. They are nice to me when I do go to family events.
          p Getting this package that has absolutely nothing to do with my mom (who again lives three states away from me) yet was addressed to her, just seems like the last straw to me.
          p I have not done this yet, as I wanted to poll and see if this would be an jerk move, but I’m very tempted to seal the package back up with an added letter detailing my feelings, and send it back to them. It’s not something that they can return, since it’s personalized, but I really don’t want it as it’s just going to be a reminder of how little they care about me. I’m so confused why they seemingly refuse to acknowledge my existence.
          p Am I overreacting?
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='2'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for suggesting my friend "rehomes" her kid?
        AudioPlayer.fragment(src='/sounds/barack_obama_rehome.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My (22F) friend (24F) has a 5yo son. The kid is, to say the least, difficult. She tries therapy, daycare, lots of educational methods but he's wild, cries a lot, destroys stuff, yells with her, anyway you get the picture.
          p The dad pays pension but isn't active in their lives and she doesn't have many family members nearby, so she's pretty much alone most of the time to deal with this. Poor thing is destroyed. Whenever we hang out it's clear from her physical appearance that she isn't very healthy and she is always tired and anxious. She takes meds but her doctor said that unfortunately there isn't much to do because there isn't anything wrong with her, it was an outside factor.
          p It's really painful for me, as she's a close friend from many years. So the other day she was in my house while the kid was in the daycare. She had a breakdown. Started crying, saying she doesn't know what to do anymore. Then this is when I may have been the jerk:
          p I said she tried her best, but maybe it was time to think of more difficult possibilities. To think if there wasn't anyone with whom the kid could stay while she took care of herself, because she needed to. She looked at me quite shocked and asked "Are you saying that I should rehome my son? Like he's a fucking dog?"
          p I said no, don't take it that way, I was only saying that maybe it would be better for everyone, including him, that he stays with someone who could deal with him in some ways you can't.
          p She yelled at me saying that she couldn't believe I could even suggest such a thing and how heartless I could be. I tried to apologize but she stormed out and hasn't talked to me ever since. Some of our friends are saying that I was an ass for suggesting that for a mother, while a few other say that she needed to hear it even if it was hard.
          p AITJ?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='2'
    )
    PlayerBoard
    VideoSlide(
      background='/video/seinfeld_fiction.mp4'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for telling my niece Girl Scout cookies are unhealthy?
        AudioPlayer.fragment(src='/sounds/michael_cohen_cookie.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I feel like this is ridiculous but my sister is still mad at me so here goes. My Niece Abigail (not real name) is in 2nd or 3rd grade and she's doing her first year in the Girl Scouts. Its cookie season where we live which normally Id be excited for but Im in a bit of a fitness kick right now. Im not trying to lose weight necessarily but Im trying to get back to the shape I was in before quarantine.
          p Anyway, we were all at our parents house a weekend ago when Abigail was coming around trying to sell us Girl Scout cookies. She asked me and I just gave her a no thanks. She pushed and asked why and I just told her Im trying to be a little healthier so Im avoiding sweets. Abigail gave a "WHAAT GIRL SCOUT COOKIES ARE UNHEALTHY!?" and I just kind of laughed and was like "well yeah they're cookies full of sugar and fat. Fine every now and then but Im trying to avoid them now". I didn't think much of it but apparently Abigail took this super seriously and told my sister/her mom she's done selling cookies because she doesnt want to make people fat or unhealthy.
          p I feel like this is just kid shenanigans that we should be laughing at but my sister says I ruined her girl scout experience and should have just shut up and bought a box of cookies to give to someone else.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for siding with my fiancée over my daughter after they got into a huge argument?
        AudioPlayer.fragment(src='/sounds/brett_kavanaugh_daughter.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I share custody with my 17 year old daughter. She i get her every two weeks and she’ll come and live with me and my fiancée. I work as an ER nurse so I have weird shifts sometimes, this leaves my fiancée and daughter alone together a lot. I thought it’d would be good for them to get some girl time with each other. I was wrong, they don’t really get along (part of me thinks it’s her mother’s influence because her mother HATES my fiancée).
          p So this situation started Friday night. That morning she asked me she could go out with some friends that night and I said sure. Her curfew is 11pm which I don’t think is unreasonable for a teenage girl. She knows this and knows she will be punished if she doesn’t show at 11. That night I had to work so I asked my fiancée to make sure she was back home safe and sound by 11. I’ve never had a problem with her missing curfew, so I didn’t worry about it. I went to work at 8pm and didn’t make it home till around 9AM.
          p When I got home my fiancée was up and clearly distraught. She told me that my daughter came back home passed curfew and when she confronted her on it, my daughter lost her temper and went off. After talking to her, I spoke to my daughter who said that she was only a few minutes late and that my girlfriend overreacted and tried to punish her.
          p So typically I don’t like to take sides and just try to find some middle ground between them, but this time I could actually check everything by looking out our home sec cameras. My daughter didn’t get home until 1AM. I interpreted this as my daughter not being fully truthful so I sided with my partner. I punished my daughter by taking her car keys and stopping her allowance.
          p She and her mother have in response both accused me of caring more about my fiancée more than my daughter which isn’t true.
          p Am I The Jerk?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for not giving it to my grandpa's silent treatment?
        AudioPlayer.fragment(src='/sounds/elizabeth_warren_grandpa.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p For context, everyone in my family is extremely different but they all have one thing in common : they are all extremely intelligent. Because of this, they sometimes act entitled and rude to other people.(I'm not saying they do this because they're intelligent. I'm saying that they do this because they know that they're intelligent)
          p And, their biggest weapon is silent treatment. They all do it like there's some kind of competition. The most one of them hasn't talked to me has been 2+ months
          p Due to the fact that I'm trying to break the cycle and act nice, I'm viewed as the "rebel" with a kind heart (no joke, that's how my aunt calls me and it bugs the hell out of me)
          p Anyways, I've recently started taking Jiu Jitsu classes with my step-uncle's friend and I love them. I've really learned a lot and my phisical condition is better than ever.
          p My grandpa calls it "going to the gym" and that annoys me because Jiu Jitsu has so much to it and symplifying it as just "going to the gym" really takes a lot from it.
          p I've expressed my feelings numerous times and he just told me : "I don't see anything out of place with this. Let your pride aside and let me call it how I want."
          p Now, I have to admit, often times I am very proud and pride is kind of my family's fatal flaw but what's so bad with me wanting him to just call it by its name?
          p Anyway, I told him this and he got mad for some reason .....? He told me that he's paying for it (which isn't true, the classes are free due to the fact that my step-uncle got a word in for me) and that he can call it what he wants.
          p I told him that he only paid 40$ for the first session and that if he wants to, I can pay him back. Apparently I hit his Achilles's Heel (money or pride, I think?) because he told me to get out of the room and that he doesn't wanna see me.
          p Since then, I've been getting the silent treatment. It's been 4 weeks and I haven't done anything. Usually, he expects people to go apologize to him but he hasn't said anything and my grandma is telling me that she is utterly disappointed in me for my behaviour
          p I know this is dumb as poop, but am I the Jerk?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITJ for refusing to married under my fiancé’s religion?
        AudioPlayer.fragment(src='/sounds/mike_pence_religion.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p So my fiancé(29F) and I(29M) got engaged after 5 years of being together. We delayed any planning to avoid me from getting distracted since I’m about to take the bar exam and I tend to hyperfixate.
          p I’m Roman Catholic and have always dreamt of being married in a catholic church. My fiancé knows about this and knows I’ve never really had any celebration (bdays, achievements, other life events never celebrated) in my life so I’m just waiting for me to get married.
          p My fiancé’s father has a high position in their church which is equal to that of a priest. So I’ve thrown away my dreams of a church wedding and said I’m okay with a destination wedding. He agreed that he also doesn’t want to be married in their church anyway since the location is extremely inconvenient for everyone and wouldn’t look good in photos.
          p We haven’t talked about the wedding until one day he said that future father-in-law said that if we’re getting married with a Catholic priest, it would be better if we just do a civil wedding. I got hurt and mad and told my fiancé future father-in-law shouldn’t be deciding for us since he isn’t the one getting married and he wouldn’t even be giving a single penny for the wedding so why should his opinion matter.
          p My future father-in-law and I never really had a good relationship. He refuses to accept my friend requests, always ignores me during gatherings, was pretty excited when my fiancé’s ex who goes to their church contacted him and asked for fiancé’s number, and during the few private masses I attended, he’d always talk badly about rich people while looking at me. Our families have a significant financial difference and my fiancé said that it might just be because FIL’s insecure (the house we’re living, my fiancé’s car, gold jewelry are all from my parents). future father-in-law is not the provider type.
          p My fiancé got mad and accused me of disrespecting his father. I told him future father-in-law disrespected me first and they should have not planned about the wedding without asking for my opinion. He then accused me of just wanting to always get my way and that I am just trying to be controlling. He reasoned out that it would be embarrassing if other people find out that the son of a “priest” got married under roman catholic. I told him all I wanted was for him to acknowledge the pain I felt when my beliefs were disregarded and my dreams crushed when I was told I’d only get married in a Civil wedding. He told me why would I even care what priest officiates our wedding since it’s not in a church. He later on admitted that he assumed that because he’s a son of a “priest,” I would just convert to their religion, then accused me of not accepting that part of him. I simply told him that he should have looked for a girl who’s already of their own.
          p Both of us wont budge so I said if he wants a civil wedding then we’d just do the bare minimum of 2 witnesses and neither families invited. I feel like I may have overreacted a bit, so am I the jerk?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :prize='3'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment WIBTJ if I kept my sister's gift?
        AudioPlayer.fragment(src='/sounds/trump_package.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I received a package from Amazon a few days ago. It came by UPS, and I signed for it. When I opened the box, there was a Switch OLED, two games, a memory card, headphones, a case, cute rubbers things for the control sticks, and a bag to carry everything. I then saw the Amazon invoice and the bill was close to a thousand dollars.
          p I didn't order this package, so I called Amazon to make sure I wasn't charged. I found out I wasn't charged and that someone sent me this package. Since they didn't say it was a gift, Amazon couldn't tell me who sent it.
          p I was super happy about my gift since my birthday was coming up. I literally cried because I was so happy. I never received such a nice gift. Everything was my taste. I loved the games, case, headphones, and bag.
          p I opened everything right away. I played with my Switch and put on the case. I got a call a few hours later from my mom. She asked if I received her package. I decided to play dumb for fun. I wanted her to tell me she sent me a birthday gift. She told me she ordered my younger sister a birthday gift from Amazon and shipped it to my apartment so my sister couldn't find it and ruin her surprise.
          p My mom had my sister's best friend pick out the gifts to make sure it was something she liked. My sister was born on February 29th, so my mom always went all out on her birthday. She felt bad my sister couldn't celebrate on her actual birthday.
          p I asked my mom what she got me for my birthday, and she said I was too old for birthdays. My sister is turning 19 but she still gets gifts. My mom stopped giving me gifts when I was 17. My dad always gives me a gift card for $20-$30. I always felt jilted at birthdays. My mom gave me things I needed like a calculator for school, new rain boots, and other necessities. My sister got fun gifts. We were lower middle class so we could afford nice things.
          p There was a clear difference in treatment. I had chores, my sister didn't. She did something wrong, I got blamed for not watching her. She was always the favorite and she knew it. She would rub it in all the time. She would say it's because she was prettier, smarter, more likable, and light skinned. The only thing I'm willing to admit is she is light skinned which gives her pretty privilege where I'm from. I'm dark brown.
          p Sorry for rambling. I just wanted to provide background information. I want to keep the package but I'm not sure if I should, considering it was not meant for me. In case anyone was wondering, my sister has a Switch Lite. Also, my mom always does things without asking me, so she didn't feel the need to ask my permission for using my address. I was invited to my sister's party, and I did buy my sister a gift. It was a gift card worth $100 to her favorite store and a Starbucks cup.
          p I may not like my sister, but I don't want to be a nasty person. If you vote me AH, I'll just buy rebuy her gifts from Amazon because I can't give her used items.
          p Am I the jerk?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
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

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'
import ItemGuess from '@/components/WhichIsWhich/ItemGuess.vue'
import AudioPlayer from '@/components/AuctionEar/AudioPlayer.vue'

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
    GameContentWithSidebar,
    ItemGuess,
    AudioPlayer
  },
  data () {
    return {
      items: [
        { name: "You're the jerk", emoji: '👎️', value: ' the verdict' },
        { name: "You're not the jerk", emoji: '👍️', value: ' the verdict' },
        { name: 'Everyone sucks here', emoji: '👿️', value: ' the verdict' },
        { name: 'No jerks here', emoji: '😇️', value: ' the verdict' },
        { name: 'More info needed', emoji: '🤷‍♀️️', value: ' the verdict' }
      ]
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&df&family=Climate+Crisis&family=Lobster&display=swap');
.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-72 text-9xl text-white #{!important};
}

.title {
  font-family: 'Climate Crisis', cursive !important;
  @apply mt-32 text-9xl text-white #{!important};
}

.lobster {
  font-family: 'Lobster', cursive;
  @apply text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
