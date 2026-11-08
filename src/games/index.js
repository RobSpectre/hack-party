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
  }
]

function findGame (slug) {
  return games.find(game => game.slug === slug)
}

export { games, findGame }

export default games
