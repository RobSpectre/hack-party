<template lang="pug">
Reveal
  .slides
    Title
    VideoSlide(background='/video/lebowski_cut.mp4')
      .title Am I Still The Jerk?
      .lobster A game of judgment
    Slide
      h2.fragment Solo
      h2.fragment You will hear the story of a person seeking judgment
      h2.fragment You guess what judgment reddit rendered on the story
      h2.fragment All stories are within ~20% of each other - very close
      h2.fragment Contrarian bonus is in effect
      h2.fragment Boss fight will be guessing Grammy winners when they come up
      h1 Game Play
    PlayerBoard
    Slide(class='green')
      h2.text-white Let's go!
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for poking at someone's screen at the movie theater?
        AudioPlayer.fragment(src='/sounds/screen_poking.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I've seen posts about this kind of stuff on this sub, like throwing popcorn at phone users, being thrown an empty cup of coffee for using their phone in a movie theater, edit: but this is different so I want y'all's thoughts on this.
          p A woman in front of me started to use her phone excessively. I wouldn't mind if she used it to check the time (edit: or anything for a bit, not just the time), but it looked like she was texting. After what felt like 5 minutes (probably was only a minute), I bent down and whispered to her it's distracting. She put it away, then pulled it out again after a bit to use it for a while. I bent down and started poking around her phone, not knowing what I was poking at because it's none of my business, I was just poking at it. I didn't do it for a full second because she immediately put it down and said "what the fuck??" I heard a person say "shhh". Second time she pulled out her phone, I did it again. She never pulled her phone out again.
          p I didn't give a shit because if she would report this, either we'd both be out or she would, because she would be outing herself. The only way a stranger can poke at your phone is if you have your phone out. I thought the way I handled it was quiet, I told her once that it was distracting, she was the one who pulled out her phone, but at the same time, I did put my finger on her belonging, which is why I'm here.
          p I don't want to go out of the movie theater to report. Have y'all ever done that? Does it often work? If so then the movie theaters I go to suck here. I don't want to miss out on a scene because of some person who felt at home out in public.
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
      :fragmentItemReveal='true'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for bringing up my friend’s past style choices in front of people?
        AudioPlayer.fragment(src='/sounds/rebrand.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p So my friend (we can call him Milo) has recently gone through a major rebrand. Like, full personality shift overnight. One day he’s dressing like he always has; hoodies, sneakers, whatever, and the next.. he’s in head to toe "thrifted" (from Grailed) pieces, wireframe glasses (he has never worn glasses), and talking about how "fast fashion is killing individuality."
          p Cool, whatever, people change… but it’s like he saw one looksmaxxing video and decided to become a tortured artist overnight. Last year he was all about streetwear. The year before he was deep in his eboy era. And now, suddenly he’s dressing like a philosophy major who exclusively drinks espresso and journals about "the concept of time."
          p I let him do his thing, no comments. But then we’re out with friends, and he starts talking about how he’s "always resonated with a minimalist, timeless aesthetic." And I - without even thinking - laugh and go "you literally had a sneaker wall six months ago..."
          p He goes dead silent. I quickly changed the subject, and we moved on, but I could feel the shift. Later, he texted me saying he felt embarrassed and that I made it seem like he was “fake” in front of everyone. I told him I wasn’t trying to call him out, I just genuinely thought it was funny how quickly he went all in on this new vibe.
          p He left me on read. I asked one of our mutual friends, and they were like, "Yeah, you kinda played him. Should’ve just let him live." like, I get it... but also i don't get it lol
    ItemGuess(
      :items='items'
      :winnerIndex='3'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for calling my girlfriend a cow?
        AudioPlayer.fragment(src='/sounds/girlfriend_a_cow.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I am writing this post on a throwaway account as I don't want anyone I know to see this. Anyway I (19M) have been talking to this girl (18F) for a month and we really clicked. However one thing is that she has a really, shall we say, aggressive side to her.
          p She does a lot of things to me like calling me stupid, a bitch or other names. She loves telling me to shut up. It doesn’t bother me because she's worth it and she’s not always like that. Sometimes tho, she straight up threatens me and blocks me for the tiniest things. I really love talking to her so it really hurts me, but sometimes I think I deserve it tbh.
          p Anyway, now for where it all went wrong. Two days ago, she told me to apologise for absolutely no reason. I already had such a hard long day and then on top of that whatever apologies I gave, never seemed good enough. She kept telling me to redo it and be sincere about it. She said don't repeat the same thing over and over again and no copying and pasting, every letter needed to be typed. I told her I couldn’t write that many sincere apologies but she kept insisting. And then it happened.
          p I ended up calling her a cow. The intention was to use as a reason to apologise which is exactly what she wanted from me. I said it to her and then instantly apologised. At first she seemingly found it funny which was my intention, but then all of a sudden, she said that was her last straw and then proceeded to block me.
          p I was confused but then the guilt set in. I felt really bad about it, that I hurt her feelings. Maybe I went too far? I thought it was just a harmless funny joke. Tbh I don’t really know where the line is drawn, as she insults me relentlessly yet I never do it. I think I may have really upset her this time. Am I the asshole?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for not throwing out a salad that wasn't mine?
        AudioPlayer.fragment(src='/sounds/tossing_salad.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I work in an office with about 15 other people as an admin. Our jobs are to support the doctors that work in the office. We have about 20 of them in the office.
          p One of my coworkers is severely allergic to peanuts and all tree nuts, so we have a rule that you can't bring those in to the office under any circumstances. Their allergy is bad enough that they carry an epi pen with them everywhere they go.
          p The other day, one of the doctors brought us food from a meeting they attended. It was a bag of sandwiches and two large salads. I was helping to take them to the kitchen when I noticed one of the salads had walnuts in it. I told one of my coworkers and she said someone should take it home as opposed to having it out to share, due to the allergy.
          p I should have gone to another floor and disposed of it immediately. Instead, and this is where I might be the AH, I said I'd take it home. So I put a giant, bright blue post it on the container that said "don't open" with my name, and put it in the fridge.
          p Unfortunately I had an emergency come up and had to leave work early. It caused me to forget the salad, and I wasn't going to be back in the office the following day either. So I text two other coworkers and told them about the salad and told them one of them should take it home.
          p Yesterday I was working from home and got a message from the coworker who had the allergy. They asked if I had left the note in the salad. I explained, yes, but I wasn't the one who brought it in, and I had meant to take it home. Co-worker then tells me they had, for some reason, grabbed the salad and now they had to take Benadryl. I apologized profusely, but they were obviously very upset, and did wind up leaving work early.
          p Later that day our boss sent out an email reminding everyone that nuts of any kind, in any form, are forbidden at work and that everyone deserves a safe work environment. This email only went out to all of my coworkers, and not to any of the doctors, which I don't feel was fair.
          p I feel terrible I didn't throw the salad away, but aitah for not doing so?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for telling my brother everyone dislikes the woman he is about to propose to?
        AudioPlayer.fragment(src='/sounds/everyone_dislikes_your_fiance.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My brother is planning to propose in 3 weeks, but in the last year he has managed to ruin his relationship with our mother, myself, and all of his closest friends. These are all because of her. Whether it's her telling him he's entitled to money, telling him he cannot go to friend events because of things SHE needs/wants to do (that often don't involve him) and even completely changing his belief system and ability to handle stressful situations. He crashes out every time something happen that does not go directly to his idea of a plan, insults and behaves poorly to everyone involved, never apologizes and stops talking to people all together for relatively little things. His friends have all come to me to ask what's going on and why he is acting like this and why he has changed so much, as well as to vent and make me aware of their experiences with him acting in similar ways and sharing very similar concerns about how his partner affects him. She has always been very rude to me and makes it clear she does not like me, and has completely turned him against our mother to the point that my brother won't even communicate with our mom. It's tearing her life apart, she can't sleep, it's affecting her work and relationship, all because he won't talk to her after she bought a house (after never having one) instead of paying for his college. We grew up poor, so where the sense of entitlement comes from is a mystery. (Probably his partner). My father and stepmother are completely on his side, and would pretty much do anything to defend both my brother and his partner, which makes me feel like I'm the mediator of three different parties (mother, friends, dad/stepmom) trying to mitigate and have answers for intense heartbreak, genuine concern, and over-protection (respectively).
          p I know I need to talk to him, but I'm not sure how to approach one, nevertheless all, issues without him freaking out and cutting me off as well. Despite not liking his girlfriend/future fiance, and despite severely disapproving of what I feel to be childlike and disrespectful behavior, I do love him, as he is my brother and we have always been very close. I know even with carefully crafting a calm argument doing everything I can to avoid sounding like I am insulting or accusing either of them, he will still more than likely hate me and start freaking out over it. AITA for wanting to show up at his door and force him to talk about this with me? AITA for feeling like it's my responsibility to essentially bomb-drop how everyone in his life is concerned and heartbroken about his behavior and primarily blames it on his girlfriend and the way she has sheltered and changed him so drastically? He is proposing in 3 weeks and almost everyone in his life who loves and cares for and has known him for significant amounts of disapprove of her, and his behavior, but I am supposed to be the messenger for all of it right before he proposes?
    ItemGuess(
      :items='items'
      :winnerIndex='3'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for throwing my wife's pillow out of the room?
        AudioPlayer.fragment(src='/sounds/thrown_pillow.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Last night when getting ready for bed I tried taking a picture of how my wife was laying in the bed to show her how little space I had. She made a joke of it and hid under the blankets. We have a king size bed, have a toddler that sleeps between us, and my wife keeps a pillow between her and the toddler. I was trying to show my wife that her and her pillow already took up over half of the bed, leaving me with little to no space, especially once or toddler laid down.
          p I tried telling her I needed more room but she kept making a joke of it. So I got in bed, grabbed the pillow she keeps at her back and tossed it into the hallway saying here this will help. The next thing I know my wife is furious, crying, and is gathering her other pillows and blanket saying "if I'm that much of a problem you can just have the bed to yourself". Her and our toddler went to the toddler's room to sleep (that bed is a full).
          p This morning my wife is still mad and barely speaking to me so I ask AITA for throwing my wife's pillow out of the room?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    VideoSlide(
      background='/video/cart_narcs.webm'
      :muted='false'
    )
    PlayerBoard
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for sleeping in 5 minutes
        AudioPlayer.fragment(src='/sounds/ten_minutes.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Due to how cold it is lately, and because I'm between jobs, my partner has been asking me to drop her off at class/pick her up from class, because the various buses she can take all involve some waiting in the cold and a slightly longer walk.
          p She likes to be there 10 minutes early. Not for any specific reason, she just likes to be early. (Edit: 10 minutes isn’t some long established thing, last week I was already up so I just left whenever she asked. This morning was the first time she really stressed the 10 minutes, while I was still extremely groggy/half asleep.)
          p I was pretty tired from celebrating last night, (edit college football win) so when she said she wants me ready in 10 minutes, I ended up laying in bed that whole time, causing us to leave 5 minutes later than she wanted, so she only got to her class building 6 minutes early.
          p On the way there in the car, she was complaining it was rude for me to sleep in when she asked me to be ready in 10 minutes. I think that if I'm repeatedly waking up early to spend an hour driving around for her benefit, as long as I get her there before her class starts, I don't deserve being called rude. I said that to her, but she doubled down, and then we were there so that's where the conversation ended.
    ItemGuess(
      :items='items'
      :winnerIndex='4'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for grounding my 15 y/o daughter after she colored her hair?
        AudioPlayer.fragment(src='/sounds/hair_color.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My daughter Alexis (not her real name) is 15. She has been dancing recreationally since she was 3 years old and has been doing competitive dance since she was 9 years old. She has nationals coming up, which is basically a very big and important dance comp where studios from surrounding states come to this big convention center in the city and compete. She is also obsessed with Paramore, thanks to my husband who has taken her to many of their live shows. She idolizes Hayley Williams and has wanted to dye her hair like Hayley’s for a few years now.
          p This year for her birthday, she wants to dye her whole head neon orange. I told her absolutely not because she’s not allowed to hair any unnatural hair colors for nationals and other conventions/comps that are coming up. She is very well aware of this rule because it is the standard in the competitive dance world. I’ve already paid all of the entry fees and cannot get a refund for this year. I told her that once nationals and all the mandatory conventions are over, she can color her hair however she wants. She did not like this answer and stomped off to her room. I figured I would just let her be and eventually she would come around. I was wrong.
          p She went to a sleepover at her friend’s house about a week ago and came back with the same bright orange hair I told her she could not have. I was cooking when she walked into the house and nearly dropped the knife I was using. I was extremely upset and asked her what she was thinking. She gave me some excuse which I can’t remember, then rolled her eyes and said something along the lines of “it’s just hair dye, it’ll come out before nationals”. I was livid, and shouted at her (which I’ll admit I’m not proud of) and she ran off to her room in tears. She knows better, and I’m completely dumbfounded as to why she thought it would be okay considering nationals is in two weeks. She’s washed her hair at least 6 times in the last few days and the orange is still stuck. I bought color remover and let it sit on her hair for a good 2 hours, and nothing. I’m so pissed because now I’m going to have to take her to the salon and spend 300+ dollars to get this color removed when I’m already over 400 dollars deep in the hole after the fees for the competition. My daughter is currently grounded, still upset with me and hasn’t spoken more than a few words to me in days. She cried to my husband after I shouted at her and now he thinks I’m being unreasonable and called me “momzilla”. Am I being crazy about this??! She knew the rules and I even told her she could do the hair dye after we get this over with. If this color doesn’t come out, she literally won’t be able to compete and I’ll have wasted over 400 dollars.
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for dipping lasagna into hot sauce?
        AudioPlayer.fragment(src='/sounds/hot_sauce.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I (20F) love hot sauce and put it on most things. I live with my husband (22M.) For the last couple of days, his mother has been in the area, and yesterday she asked if she could come around and cook for us before heading home. Since neither of us were working, we agreed, and offered to help her so we can all cook and eat together and it's less work for her. She refused and said she wanted to do something nice for us, and also refused us helping with the cost (she went grocery shopping specifically for this)
          p Anyway, she arrives early in the day and spends eight hours on making a lasagna. Not all of this was active cooking time (most was just the meat sauce simmering) but even then she was saying how she wished she had overnight (we have an apartment and there wouldn't be room for her to stay the night.) I am grateful for the time she spent and thank her multiple times, although her coming around for such a long period was more than we had discussed and did mean we had to reschedule some plans we had made for earlier that day. It comes time to eat and we have the lasagna and roast potatoes.
          p This is when the problems started. We keep condiments in the middle of the dinner table, and I put some hot sauce on my plate. Dip a potato in, dip the lasagna in. Make eye contact with my MIL and she looks at me like I'm eating s human baby. Puts down her plate, pushed it away and begins getting ready to leave. I ask her what's wrong, and she tells me she has "never been so disrespected before by any of my son's women" and that she spent "8 hours slaving away just for you to ruin it with that crap."
          p My husband did defend me, but my MIL has now begun a narrative in his family that I'm ungrateful. I'm not sure if what I did was actually wrong or not. AITA?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for snapping at my tutor because I was late to work?
        AudioPlayer.fragment(src='/sounds/snap_tutor.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I, (15M), attend a private school on scholarship and have really struggled with a lot of things throughout my time there - socially and academically - as it's been difficult to balance keeping my GPA above the threshold and working to help my sister pay rent. I've always struggled with math, and ever since I've started working more hours, my grade's been getting worse and I'm scared to lose my scholarship.
          p I talked to my math teacher and learning specialist about this, and since I can't afford a tutor, they've decided it was a good idea to pair me up with another student in my class (15M). For simplicity, we'll call him Allen (fake name). Now, a couple of things you should know about me: Firstly, I'd say I'm quite good at English/related subjects (when I'm not rambling on Reddit), and second, I'm not exactly fond of Allen. Despite that, it's been quite a beneficial partnership for us both (we tutor each other in different subjects). My grades have been improving, and we've even started to develop a sort of friendship.
          p However, here's the situation: Allen was tutoring me after school (not the ideal time, but I needed help for a test I had the day after), and we lost track of time. When I saw the time, I realized I was about to be late for work and stood up to leave. I was packing up quickly, so Allen asked why I was in such a rush, and I kind of froze. One thing about this school is that there aren't many scholarship kids like myself, and the students are pretty ruthless towards them (I've seen a lot of students get bullied because of it) - so I've tried to keep it hidden from anyone.
          p Here's where I might be the asshole, though: I refused to give him an explanation and tried to run out, but he caught me by the wrist and asked again. At this point, I was pretty mad and told him to mind his own business. He still wouldn't let me go and said that he was 'just worried about me,' but I was really running late, so I snapped at him that it was none of his business to stop being worried because I was doing great and to leave me alone. I know he was just worried, but I just really needed to go and forgot about it until the next day.
          p The next day, I came to school, and one of our mutual friends, I'll call her Shelly (14F), came up to me and asked what the hell was wrong with me and called me an asshole for yelling at Allen when he just wanted to help. In my eyes, I was just trying to get where I was going, and he was being pushy (we're not very close friends), but now I'm not too sure. AITA?
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for criticizing my sister's choice of name for her baby?
        AudioPlayer.fragment(src='/sounds/isis.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My sister just had her first child, a girl, and she and her husband chose the name Isis, after the Egyptian goddess.
          p I politely pointed out that the name is also the name of a terrorist organization, and that I thought the kid might get bullied or teases for having that name once she goes to school.
          p My sister totally blew up, accusing me of interfering in her life and saying that her daughter's name was her own choice.
          p I wasn't trying to be rude or judgemental, but now I think that I ought to not have brought it up, after all it is her kid, not mine. AITA?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
    PlayerBoard
    VideoSlide(
      background='/video/isis_toyota.mp4'
      :muted='false'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for telling my boyfriend that the tacos he made me weren’t good enough?
        AudioPlayer.fragment(src='/sounds/tacos.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I f22 asked my boyfriend m20 to make me tacos for when I got home later that night. I asked him to brown the ground beef and follow the instructions.
          p He doesn’t really cook but I thought the task was simple enough. So I get home a few hours after he made the beef and things are going well. I quickly chopped the veggies so we could assemble the tacos. I thanked him for making it for me and we started eating.
          p I ate a bite and it tasted really bland and a bit chalky so I asked if he followed the instructions. He said, “No I just threw it together with some seasoning.” So I asked him why he didn’t follow the instructions and he said, “I didn’t know what instructions you meant.” He could’ve asked me what instructions? Googled it? Looked on the seasoning packet?
          p Anyways I am kind of a picky eater and I only eat food that tastes good. If food is just meh I would rather not eat it and he knows this. Also I cook different dishes for him all the time and do my best to make sure they taste as good as possible. So I said, “Why didn’t you look for the instructions or ask me?” and he said, “I don’t care.” This is when I got really upset and left the room. He soon followed me and said, “What’s wrong.” Probably thinking I was overreacting. Then I told him, “I asked you to do one thing and told you to follow the instructions and you didn’t do it, and you know I only eat food that tastes good. I try hard to make you good food all the time and I just wanted you to do it for me one time and you didn’t even try.” He kinda got defensive and said he thought it was simple and made it how he thought it was made. He said sorry and that he should’ve known better, but now I feel kinda guilty and like an ungrateful bitch. AITA?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for Telling My Neighbour Her Baby Looks Like Jeff Bezos?
        AudioPlayer.fragment(src='/sounds/jeff_bezos.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p My neighbour had a baby, and everyone was saying how cute he is. I jokingly said, “He kinda looks like a tiny Jeff Bezos.”
          p She got mad and said I was being rude. But like… he’s bald, he’s serious, and I swear he’s plotting world domination.
          p She told me to never compare her baby to a billionaire again. I agreed… but Elon Musk would’ve been worse, right?
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for choosing to sit in premium class instead of economy with my spouse?
        AudioPlayer.fragment(src='/sounds/flight.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Work is paying for my premium class ticket for a 9+ hrs international flight. Spouse and I decided to make a vacation out of it. We will not fly to our destination together because I will already be there, but we will fly back together. My spouse (together 8 years) got their ticket using points, and they only had enough to get economy class there and back. My spouse got upset with me when I told them I would be sitting in premium on the way back since it'll be paid for and it's more comfortable in premium than economy. I realized they expected that I sit with them in economy, which I think is unreasonable. If the situation were reversed, I would encourage them to sit in premium and not suffer with me in economy. They told me, "I travel a lot and there's no difference between the economy and premium seats.," which I completely disagree with. I don't think it's necessary for us to sit next to each other, especially if the premium class will already be paid for, but apparently I'm the AH for even considering sitting separately from my spouse. I would get their point if I chose to pay for my premium seat and left them in economy, but that's not the case. In a previous situation, my spouse got upgraded to first class for a 2.5hr flight. I encouraged them to take the seat, but they insisted I sit in first class since I've never been. (They get upgraded occasionally). So I really don't get why they are upset that I chose to sit separately in premium because we won't be paying for it out of our pockets.
          p AITA for wanting to sit in a more comfortable seat in premium class for a long flight instead of next to my spouse in economy?
    ItemGuess(
      :items='items'
      :winnerIndex='1'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for telling my sister her baby isn't a real baby
        AudioPlayer.fragment(src='/sounds/diamond.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p I (26F) got engaged to my fiance on January 1st. I was very excited to share with my family of course, and everyone congratulated me and my fiance. I sent a picture of my ring to my family group chat as well as my Instagram and everyone has been commenting on the fact I got a very big diamond. My diamond is a lab grown diamond that is just under 5ct.
          p I specifically asked for a lab diamond as I believe they're more ethical, as you never know if a mined diamond is a blood diamond. My sister (31F) was very excited for me but as soon as I showed her my ring her mood changed and she was telling me that it was too flashy and that its not practicical and that it's too trendy and "not timeless". My ring is a pear shaped solitare ring with a marquis band and I LOVE it. My sister then told me that there was no way that my fiance could afford my ring (true if it was a mined diamond it would be 10x the price and my fiance is a second year resident) and that I should test to see if it's a real diamond.
          p I replied that since it's a lab diamond it was a lot less expensive. She then proceeded to tell me how lab diamonds aren't real diamonds and since they're made in a lab it doesn't hold the same sentimental value. My sister's ring is a small 1ct mined diamond and it's beautiful, I never said anything bad about her ring and it suits her.
          p I tried to laugh it off and I told her that I asked for a lab diamond and that I don't want a mined diamond. When I said that she started yelling at me that it wasn't even a real diamond in the first place and that it was grown in a lab not the ground.
          p That's when said by her logic, my niece wasn't a real baby then because she was an IVF baby and grown in a lab too. My sister and her husband had a lot of issues conceiving as my sister had some complications with endometriosis. Their IVF journey was really tough and they had multiple rounds and attempts, and one miscarriage but finally got lucky and had my very healthy neice last year.
          p I know my sister had a hard time conceiving, that was kind of the point I was making, my niece started in a lab but she has beautiful meaning behind her life too. When I made the comment that my niece wasn't a real baby because she was an IVF baby my sister started crying over the phone. Her husband then called me and berated me and told me I was insensitive and couldn't understand the depths of her emotional turmoil and that I shouldn't have started a fight over a ring. He even said I was ableist??? I have endometriosis too.
          p My mom says it's not a big deal but I should let my sister cool off. I usually babysit my niece pretty often but my sister hasn't been answering my calls for a week. My fiance says although I probably shouldn't have said that, I was justified. I didn't mean it seriously, I know my neice is a real baby and I adore her and spoil her all the time. Am I the asshole?
    ItemGuess(
      :items='items'
      :winnerIndex='2'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    GameContentWithSidebar
      template(v-slot:header)
        h2.text-white.fragment AITA for not putting on pants in front of my roommate’s bf?
        AudioPlayer.fragment(src='/sounds/pants.mp3')
      template(v-slot:content)
        div.fragment.flex.flex-col.text-left.px-20.text-lg
          p Alright, here’s the deal. I (22m) live in a house with five other guys. We’ve got a pretty chill setup—no one’s uptight, we all do our own thing. Now, I’ve got this habit of walking around the house in my undies. We’re all guys here, it’s comfortable, and when we moved in I asked everyone point blank if that was cool and they all said they couldn’t care less.
          p When the guys have their girlfriends over, I throw on some pants out of respect. It’s just a courtesy thing, and I get it. But here’s where it gets tricky: one of my roommates started dating a dude recently. Cool with me, no issue there. But since he’s a guy, I figured the same no-pants house rule didn’t need to apply.
          p Still, I didn’t want to assume, so I went straight to the source—asked the roommate’s boyfriend if it was cool if I kept lounging in my underwear when he was around. He laughed and said he didn’t care, so I thought we were good.
          p Fast forward a couple of weeks, and now my roommate’s pissed. He’s saying I’m disrespecting his boyfriend by not giving him the same treatment I give the girlfriends. Like, bro, I asked the guy, and he literally said he didn’t care! I don’t see how this is disrespectful when I made the effort to check with him first.
          p The rest of the house thinks it’s no big deal, but now the vibe’s weird with this one dude. Am I out of line for thinking this is getting blown out of proportion? Or is this on him for changing the rules after the fact?
          p Before anyone asks I have already started to throw on shorts around the bf but my roommate is still mad.
    ItemGuess(
      :items='items'
      :winnerIndex='0'
      denomination=''
      headerImage='/images/aita_header.jpeg'
      question='Am I the jerk?'
    )
    PlayerBoard
    VideoSlide(background='/video/bossfight.mp4')
      h2.nintendo(style='margin-top: 24rem;') Boss Fight!!
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
  @apply mt-72 text-9xl text-white #{!important};
}

.lobster {
  font-family: 'Lobster', cursive;
  @apply text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
