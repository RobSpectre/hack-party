// hack.party themes. The active theme is the data-theme attribute on <html>;
// every theme is a set of --hp-* custom properties plus optional overrides in
// src/assets/styles/themes/. See DESIGN.md for how to add one.
import { ref } from 'vue'

const handles = ['Shrimply Pibbles', 'Zero Cool', 'Acid Burn', 'Crash Override',
  'Cereal Killer', 'Lord Nikon', 'The Phantom Phreak']

// Every theme but Classic is a "stage" theme: the shared furniture in
// src/assets/styles/themes/stage.scss, dressed by the theme's own tokens and
// words. `wipe` drives the slide-change transition in BroadcastChrome.
export const themes = [
  {
    id: 'uplink',
    name: 'Uplink',
    description: 'A game show broadcast live from 2387',
    stage: true,
    decrypt: true,
    wipe: { kind: 'band', axis: 'x', skew: 14, duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    copy: {
      live: 'Live',
      channel: 'CH 1337',
      tagline: 'Broadcasting live from the year 2387',
      titleLines: [['POST', 'ok'], ['mount /dev/party', 'ok'], ['uplink 1337/tcp', 'established'], ['contestants', 'standing by']],
      board: 'Scoreboard',
      players: 'Players',
      prompt: '$',
      handles,
      addPlayer: 'sudo useradd',
      addTeam: 'sudo groupadd',
      timer: 'T-minus',
      hex: true,
      granted: 'Access granted',
      denied: 'Permission denied',
      grantedStatus: '$ ./verify --answer  ·  exit 0',
      deniedStatus: '$ ./verify --answer  ·  exit 1',
      guide: 'Channel guide',
      upNext: 'Up next',
      tuneIn: 'Tune in',
      channelPrefix: 'CH',
      filter: '$ grep -i',
      filterPlaceholder: 'title',
      empty: 'grep: no game matches “{query}”. Exit 1.'
    }
  },
  {
    id: 'brutal',
    name: 'Brutal',
    description: 'Neobrutalist: raw slabs, black ink, no apologies',
    stage: true,
    wipe: { kind: 'band', axis: 'x', skew: 0, duration: 420, easing: 'steps(7, end)' },
    copy: {
      live: 'On air',
      channel: 'No. 060',
      tagline: 'Party games. No frills. Everyone plays.',
      titleLines: [],
      board: 'Standings',
      players: 'Players',
      prompt: '+',
      handles,
      addPlayer: 'Add player',
      addTeam: 'Add team',
      timer: 'Time left',
      granted: 'Correct.',
      denied: 'Wrong.',
      grantedStatus: 'Points awarded',
      deniedStatus: 'Nobody scores',
      guide: 'Every game',
      upNext: 'Play next',
      tuneIn: 'Play',
      channelPrefix: 'No.',
      filter: 'Find',
      filterPlaceholder: 'a game',
      empty: 'Nothing called “{query}”.'
    }
  },
  {
    id: 'benday',
    name: 'Ben-Day',
    description: 'A 1970s TV game show, printed like a pop-art comic',
    stage: true,
    wipe: { kind: 'dots', duration: 700, easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
    copy: {
      live: 'Live!',
      channel: 'Ch. 7',
      tagline: 'Tonight! Prizes! Glory! Everybody plays!',
      titleLines: [['Meanwhile, in Studio 7…']],
      board: 'Leaderboard',
      players: 'Contestants',
      prompt: '★',
      handles,
      addPlayer: 'Add contestant',
      addTeam: 'Add team',
      timer: 'Hurry!',
      granted: 'Kapow!',
      denied: 'Oh no…',
      grantedStatus: 'And the winner is…',
      deniedStatus: 'Not this time, darling.',
      guide: 'Tonight’s line-up',
      upNext: 'Coming up!',
      tuneIn: 'Play!',
      channelPrefix: 'Ep.',
      filter: 'Find',
      filterPlaceholder: 'a game',
      empty: 'No game called “{query}”… Sob!'
    }
  },
  {
    id: 'stadium',
    name: 'Stadium',
    description: 'A 1972-style sports broadcast: grid, stripes and results boards',
    stage: true,
    wipe: { kind: 'band', axis: 'y', skew: 0, duration: 620, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' },
    copy: {
      live: 'Live',
      channel: 'Hall 1',
      tagline: 'Party games for everyone, every week',
      titleLines: [],
      board: 'Results',
      players: 'Competitors',
      prompt: '›',
      handles,
      addPlayer: 'Add competitor',
      addTeam: 'Add team',
      timer: 'Clock',
      granted: 'Gold',
      denied: 'No medal',
      grantedStatus: 'Result confirmed',
      deniedStatus: 'Result confirmed',
      guide: 'Programme',
      upNext: 'Next game',
      tuneIn: 'Start',
      channelPrefix: 'No.',
      filter: 'Search',
      filterPlaceholder: 'programme',
      empty: 'No game matches “{query}”.'
    }
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'The original look, as the games were played',
    stage: false,
    copy: {}
  }
]

export const themeById = id => themes.find(theme => theme.id === id) || themes.find(theme => theme.id === defaultTheme)

export const defaultTheme = 'uplink'

const storageKey = 'hp-theme'

const isTheme = id => themes.some(theme => theme.id === id)

function stored () {
  try {
    return window.localStorage.getItem(storageKey)
  } catch {
    return null
  }
}

function fromUrl () {
  try {
    return new URLSearchParams(window.location.search).get('theme')
  } catch {
    return null
  }
}

// Which theme to show: ?theme= in the URL, then the viewer's last choice,
// then the game's own pick (its `theme` in src/games/index.js), then the default.
export function resolveTheme (gameTheme) {
  return [fromUrl(), stored(), gameTheme].find(isTheme) || defaultTheme
}

export const currentTheme = ref(defaultTheme)

export function applyTheme (id) {
  const theme = isTheme(id) ? id : defaultTheme

  currentTheme.value = theme
  document.documentElement.dataset.theme = theme

  return theme
}

export function setTheme (id) {
  const theme = applyTheme(id)

  try {
    window.localStorage.setItem(storageKey, theme)
  } catch {
    // Private windows can refuse storage; the theme still applies for this page.
  }

  return theme
}

export function cycleTheme () {
  const index = themes.findIndex(theme => theme.id === currentTheme.value)

  return setTheme(themes[(index + 1) % themes.length].id)
}
