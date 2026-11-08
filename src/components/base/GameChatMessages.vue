<template lang='pug'>
GameSlide
  PlayersSidebar(:players='players')
  GameContent
    template(v-slot:content)
      .h-screen.flex.items-center.justify-center(class='w-4/6')
        vue-advanced-chat(
          ref='chat'
          :current-user-id='currentUser'
          :rooms='JSON.stringify(processedRooms)'
          :messages='JSON.stringify(processedMessages)'
          :styles='JSON.stringify(chatStyles)'
          rooms-loaded='true'
          :messages-loaded='String(messagesLoaded)'
          @fetch-messages='onFetchMessages'
          height='1200px'
        )
</template>

<script>
import { mapGetters } from 'pinia'
import { useGameStore } from '@/store'

import { register } from 'vue-advanced-chat'

import GameSlide from '@/components/base/GameSlide.vue'
import GameContent from '@/components/base/GameContent.vue'
import PlayersSidebar from '@/components/Players/PlayersSidebar.vue'

// vue-advanced-chat 2.x is a web component, so register the tag once.
register()

const colors = {
  green: '#00bc70',
  blue: '#00b1e1',
  white: '#ffffff',
  darkgray: '#5b6670'
}

// The chat renders inside a shadow root, so page CSS can't size its text.
// This sheet is added to the shadow root after mount instead.
const chatTextStyles = `
  .vac-message-wrapper .vac-format-message-wrapper { font-size: 1.5rem; line-height: 2rem; text-align: center; }
  .vac-room-header .vac-room-name { font-size: 1.5rem; line-height: 2rem; }
  .vac-room-container .vac-room-name { font-size: 1.25rem; line-height: 1.75rem; padding: 0.25rem 0; }
  .vac-room-item { background-color: ${colors.darkgray}; }
`

export default {
  name: 'GameChatMessages',
  components: {
    GameSlide,
    GameContent,
    PlayersSidebar
  },
  props: {
    currentUser: {
      type: String,
      default: undefined
    },
    messages: {
      type: Array,
      default: undefined
    },
    rooms: {
      default: () => [],
      type: Array
    }
  },
  data () {
    return {
      messagesLoaded: false,
      chatStyles: {
        general: { color: colors.green },
        sidemenu: { backgroundActive: colors.blue },
        room: { colorUsername: colors.white },
        message: {
          background: colors.green,
          backgroundMe: colors.blue,
          color: colors.white
        }
      }
    }
  },
  computed: {
    ...mapGetters(useGameStore, ['getPlayersByScore']),
    players () {
      const players = this.getPlayersByScore

      players.forEach((player) => {
        player.value = player.score
      })

      return players
    },
    processedMessages () {
      const messages = []

      this.messages.forEach((message, index) => {
        messages.push({
          _id: index,
          content: message.content,
          senderId: message.username,
          username: message.username
        })
      })

      return messages
    },
    correspondent () {
      if (this.messages.filter(message => message.username !== this.currentUser).length > 0) {
        return this.messages.filter(message => message.username !== this.currentUser)[0].username
      } else {
        return this.messages[0].username
      }
    },
    processedRooms () {
      const rooms = [{ roomId: 1, roomName: this.correspondent }]

      this.rooms.forEach((room, index) => {
        rooms.push({ roomId: index + 2, roomName: room })
      })

      return rooms
    }
  },
  mounted () {
    const shadow = this.$refs.chat && this.$refs.chat.shadowRoot

    if (shadow) {
      const style = document.createElement('style')
      style.textContent = chatTextStyles
      shadow.appendChild(style)
    }
  },
  methods: {
    // 2.x shows a spinner when a room opens until messages-loaded turns
    // true. All messages are already here, so flip it on each fetch.
    onFetchMessages () {
      this.messagesLoaded = false
      this.$nextTick(() => {
        this.messagesLoaded = true
      })
    }
  }
}
</script>
