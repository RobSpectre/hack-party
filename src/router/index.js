import { createRouter, createWebHistory } from 'vue-router'
import GamesIndex from '../views/GamesIndex.vue'
import games from '../games'

const routes = [
  {
    path: '/',
    name: 'GamesIndex',
    component: GamesIndex
  },
  ...games.map(game => ({
    path: `/${game.slug}`,
    name: game.slug,
    component: game.component,
    meta: { theme: game.theme }
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes }

export default router
