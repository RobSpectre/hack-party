// Every game hack.party can play. Each game lives in its own folder under
// src/games/<slug>/ with its media under public/games/<slug>/.
// Newest first: the first game is the default on the home page.
const games = [
  {
    slug: 'sunday-service-dnd-campaign-2025',
    title: 'Sunday Service DnD Campaign 2025',
    date: '2025-12-27',
    component: () => import('./sunday-service-dnd-campaign-2025/Game.vue')
  },
  {
    slug: 'christmas-2025',
    title: 'Christmas 2025',
    date: '2025-12-27',
    component: () => import('./christmas-2025/Game.vue')
  },
  {
    slug: 'las-vegas-gp-2025',
    title: 'Las Vegas GP 2025',
    date: '2025-11-29',
    component: () => import('./las-vegas-gp-2025/Game.vue')
  },
  {
    slug: 'return-of-the-jerk',
    title: 'Return of the Jerk',
    date: '2025-03-01',
    component: () => import('./return-of-the-jerk/Game.vue')
  },
  {
    slug: 'famous-dead-writers',
    title: 'Famous Dead Writers',
    date: '2024-05-31',
    component: () => import('./famous-dead-writers/Game.vue')
  },
  {
    slug: 'vegas-gp',
    title: 'Vegas GP',
    date: '2023-12-01',
    component: () => import('./vegas-gp/Game.vue')
  },
  {
    slug: 'help-computer-dall-e',
    title: 'Help Computer DALL-E',
    date: '2023-11-13',
    component: () => import('./help-computer-dall-e/Game.vue')
  },
  {
    slug: 'auction-ear-cut-the-cord',
    title: 'Auction Ear Cut the Cord',
    date: '2023-10-02',
    component: () => import('./auction-ear-cut-the-cord/Game.vue')
  },
  {
    slug: 'showcase-showdown',
    title: 'Showcase Showdown',
    date: '2023-09-25',
    component: () => import('./showcase-showdown/Game.vue')
  },
  {
    slug: 'is-this-book-banned-in-iowa',
    title: 'Is This Book Banned in Iowa',
    date: '2023-08-21',
    component: () => import('./is-this-book-banned-in-iowa/Game.vue')
  },
  {
    slug: 'florida-man',
    title: 'Florida Man',
    date: '2023-08-01',
    component: () => import('./florida-man/Game.vue')
  },
  {
    slug: 'badgpt',
    title: 'BadGPT',
    date: '2023-07-31',
    component: () => import('./badgpt/Game.vue')
  },
  {
    slug: 'muppet-guessr',
    title: 'Muppet Guessr',
    date: '2023-07-30',
    component: () => import('./muppet-guessr/Game.vue')
  },
  {
    slug: 'tournament-of-simps',
    title: 'Tournament of Simps',
    date: '2023-07-09',
    component: () => import('./tournament-of-simps/Game.vue')
  },
  {
    slug: 'cartoon-criminals',
    title: 'Cartoon Criminals',
    date: '2023-06-18',
    component: () => import('./cartoon-criminals/Game.vue')
  },
  {
    slug: 'lyrical-gymnast',
    title: 'Lyrical Gymnast',
    date: '2023-06-15',
    component: () => import('./lyrical-gymnast/Game.vue')
  },
  {
    slug: 'raise-the-dead',
    title: 'Raise the Dead',
    date: '2023-05-24',
    component: () => import('./raise-the-dead/Game.vue')
  },
  {
    slug: 'canned-or-computed',
    title: 'Canned or Computed',
    date: '2023-05-14',
    component: () => import('./canned-or-computed/Game.vue')
  },
  {
    slug: 'scam-or-fake-2',
    title: 'Scam or Fake 2',
    date: '2023-05-09',
    component: () => import('./scam-or-fake-2/Game.vue')
  },
  {
    slug: 'over-under',
    title: 'Over Under',
    date: '2023-04-27',
    component: () => import('./over-under/Game.vue')
  },
  {
    slug: 'box-office-haul',
    title: 'Box Office Haul',
    date: '2023-04-14',
    component: () => import('./box-office-haul/Game.vue')
  },
  {
    slug: 'wordle-bands',
    title: 'Wordle Bands',
    date: '2023-04-09',
    component: () => import('./wordle-bands/Game.vue')
  },
  {
    slug: 'maga-merch-stand',
    title: 'MAGA Merch Stand',
    date: '2023-04-03',
    component: () => import('./maga-merch-stand/Game.vue')
  },
  {
    slug: 'pureflix-or-netflix',
    title: 'PureFlix or Netflix',
    date: '2023-03-31',
    component: () => import('./pureflix-or-netflix/Game.vue')
  },
  {
    slug: 'zillow-gone-wild',
    title: 'Zillow Gone Wild',
    date: '2023-03-27',
    component: () => import('./zillow-gone-wild/Game.vue')
  },
  {
    slug: 'am-i-the-asshole',
    title: 'Am I the Asshole',
    date: '2023-03-11',
    component: () => import('./am-i-the-asshole/Game.vue')
  },
  {
    slug: 'scoreboard',
    title: 'Scoreboard',
    date: '2023-02-08',
    component: () => import('./scoreboard/Game.vue')
  },
  {
    slug: 'one-statue-from-egot',
    title: 'One Statue from EGOT',
    date: '2023-02-02',
    component: () => import('./one-statue-from-egot/Game.vue')
  },
  {
    slug: 'two-lies-and-one-more-lie',
    title: 'Two Lies and One More Lie',
    date: '2023-01-24',
    component: () => import('./two-lies-and-one-more-lie/Game.vue')
  },
  {
    slug: 'snack-my-track-up-boil-the-frog',
    title: 'Snack my Track up Boil the Frog',
    date: '2023-01-19',
    component: () => import('./snack-my-track-up-boil-the-frog/Game.vue')
  },
  {
    slug: 'snack-my-track-up',
    title: 'Snack my Track up',
    date: '2023-01-10',
    component: () => import('./snack-my-track-up/Game.vue')
  },
  {
    slug: 'the-robots-are-coming-for-my-job',
    title: 'The Robots Are Coming for my Job',
    date: '2023-01-04',
    component: () => import('./the-robots-are-coming-for-my-job/Game.vue')
  },
  {
    slug: 'scam-or-fake',
    title: 'Scam or Fake',
    date: '2022-12-18',
    component: () => import('./scam-or-fake/Game.vue')
  },
  {
    slug: 'this-site-is-not-worth-44b',
    title: 'This Site is Not Worth 44B',
    date: '2022-12-11',
    component: () => import('./this-site-is-not-worth-44b/Game.vue')
  },
  {
    slug: 'costcappening',
    title: 'Costcappening',
    date: '2022-11-18',
    component: () => import('./costcappening/Game.vue')
  },
  {
    slug: 'auction-ear-radio-dial',
    title: 'Auction Ear Radio Dial',
    date: '2022-11-18',
    component: () => import('./auction-ear-radio-dial/Game.vue')
  },
  {
    slug: 'fun-at-the-dmv',
    title: 'Fun at the DMV',
    date: '2022-11-07',
    component: () => import('./fun-at-the-dmv/Game.vue')
  },
  {
    slug: 'fire-sale-at-the-loony-bin',
    title: 'Fire Sale at the Loony Bin',
    date: '2022-10-16',
    component: () => import('./fire-sale-at-the-loony-bin/Game.vue')
  },
  {
    slug: 'auction-ear-undercover-lover',
    title: 'Auction Ear Undercover Lover',
    date: '2022-10-13',
    component: () => import('./auction-ear-undercover-lover/Game.vue')
  },
  {
    slug: 'auction-ear',
    title: 'Auction Ear',
    date: '2022-10-13',
    component: () => import('./auction-ear/Game.vue')
  },
  {
    slug: 'wordle-ripoff',
    title: 'Wordle Ripoff',
    date: '2022-10-12',
    component: () => import('./wordle-ripoff/Game.vue')
  },
  {
    slug: 'whose-text-is-it-anyway',
    title: 'Whose Text is it Anyway',
    date: '2022-10-12',
    component: () => import('./whose-text-is-it-anyway/Game.vue')
  },
  {
    slug: 'under-the-table-and-phishing',
    title: 'Under the Table and Phishing',
    date: '2022-10-12',
    component: () => import('./under-the-table-and-phishing/Game.vue')
  },
  {
    slug: 'the-cameo-strikes-back',
    title: 'The Cameo Strikes Back',
    date: '2022-10-12',
    component: () => import('./the-cameo-strikes-back/Game.vue')
  },
  {
    slug: 'return-of-the-cameo',
    title: 'Return of the Cameo',
    date: '2022-10-12',
    component: () => import('./return-of-the-cameo/Game.vue')
  },
  {
    slug: 'reddit-roulette-roll-the-dice',
    title: 'Reddit Roulette Roll the Dice',
    date: '2022-10-12',
    component: () => import('./reddit-roulette-roll-the-dice/Game.vue')
  },
  {
    slug: 'reddit-roulette',
    title: 'Reddit Roulette',
    date: '2022-10-12',
    component: () => import('./reddit-roulette/Game.vue')
  },
  {
    slug: 'onion-or-oneion',
    title: 'Onion or Oneion',
    date: '2022-10-12',
    component: () => import('./onion-or-oneion/Game.vue')
  },
  {
    slug: 'one-hit-wonder-cameo',
    title: 'One Hit Wonder Cameo',
    date: '2022-10-12',
    component: () => import('./one-hit-wonder-cameo/Game.vue')
  },
  {
    slug: 'non-flushable-turds',
    title: 'Non Flushable Turds',
    date: '2022-10-12',
    component: () => import('./non-flushable-turds/Game.vue')
  },
  {
    slug: 'lasik-racing',
    title: 'Lasik Racing',
    date: '2022-10-12',
    component: () => import('./lasik-racing/Game.vue')
  },
  {
    slug: 'inflation-station',
    title: 'Inflation Station',
    date: '2022-10-12',
    component: () => import('./inflation-station/Game.vue')
  },
  {
    slug: 'help-computer',
    title: 'Help Computer',
    date: '2022-10-12',
    component: () => import('./help-computer/Game.vue')
  },
  {
    slug: 'ganimating-inference',
    title: 'Ganimating Inference',
    date: '2022-10-12',
    component: () => import('./ganimating-inference/Game.vue')
  },
  {
    slug: 'discriminating-listener-kids',
    title: 'Discriminating Listener Kids',
    date: '2022-10-12',
    component: () => import('./discriminating-listener-kids/Game.vue')
  },
  {
    slug: 'discriminating-listener',
    title: 'Discriminating Listener',
    date: '2022-10-12',
    component: () => import('./discriminating-listener/Game.vue')
  },
  {
    slug: 'diffsquisite-corpse',
    title: 'Diffsquisite Corpse',
    date: '2022-10-12',
    component: () => import('./diffsquisite-corpse/Game.vue')
  },
  {
    slug: 'cake-or-fake',
    title: 'Cake or Fake',
    date: '2022-10-12',
    component: () => import('./cake-or-fake/Game.vue')
  },
  {
    slug: 'apologizes-for-again',
    title: 'Apologizes for Again',
    date: '2022-10-12',
    component: () => import('./apologizes-for-again/Game.vue')
  },
  {
    slug: 'apologizes-for',
    title: 'Apologizes for',
    date: '2022-10-12',
    component: () => import('./apologizes-for/Game.vue')
  }
]

function findGame (slug) {
  return games.find(game => game.slug === slug)
}

export { games, findGame }

export default games
