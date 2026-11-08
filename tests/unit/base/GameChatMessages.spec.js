import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import GameChatMessages from '@/components/base/GameChatMessages.vue'

describe('GameChatMessages', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(GameChatMessages, {
      props: {
        currentUser: 'Rick Sanchez',
        messages: [
          { username: 'Rick Sanchez', content: 'I am Pickle Rick!' },
          { username: 'Morty', content: 'Oh jeez.' }
        ],
        rooms: ['Alpha', 'Beta', 'Charlie']
      },
      global: {
        plugins: [createTestingPinia({
          initialState: {
            'hack.party game board': {
              game: {
                players: [
                  {
                    index: 0,
                    name: 'Morty',
                    score: 0,
                    team: undefined
                  },
                  {
                    index: 1,
                    name: 'noob noob',
                    score: 0,
                    team: undefined
                  },
                  {
                    index: 2,
                    name: 'Rick',
                    score: 0,
                    team: undefined
                  }
                ]
              }
            }
          }
        })]
      }
    })
  })

  it('renders with players', async () => {
    const players = await wrapper.vm.players
    expect(players.length).toBe(3)
  })

  it('passes rooms and messages to the chat web component', () => {
    const chat = wrapper.find('vue-advanced-chat')

    expect(chat.exists()).toBe(true)
    expect(chat.element.shadowRoot).not.toBeNull()

    const rooms = wrapper.vm.processedRooms
    expect(rooms.map(room => room.roomName)).toEqual(['Morty', 'Alpha', 'Beta', 'Charlie'])
    expect(wrapper.vm.processedMessages[1]).toMatchObject({ senderId: 'Morty', content: 'Oh jeez.' })
  })

  it('adds the text size styles inside the chat shadow root', () => {
    const shadow = wrapper.find('vue-advanced-chat').element.shadowRoot
    const styles = Array.from(shadow.querySelectorAll('style')).map(style => style.textContent).join('')

    expect(styles).toContain('.vac-room-header .vac-room-name')
  })
})
