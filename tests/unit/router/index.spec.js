import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'

import { routes } from '@/router'

function makeRouter () {
  return createRouter({
    history: createWebHistory(),
    routes
  })
}

async function mountAt (path) {
  const router = makeRouter()
  router.push(path)
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router, createTestingPinia()]
    }
  })
  await flushPromises()

  return { router, wrapper }
}

describe('Router', () => {
  test('shows the games index at /', async () => {
    const { wrapper } = await mountAt('/')

    expect(wrapper.find('.games-index').exists()).toBe(true)
  })

  test('shows a game at its slug', async () => {
    const { wrapper } = await mountAt('/las-vegas-gp-2025')

    expect(wrapper.find('.reveal').exists()).toBe(true)
  })

  test('sends unknown paths back to the index', async () => {
    const { router } = await mountAt('/no-such-game')

    expect(router.currentRoute.value.path).toBe('/')
  })
})
