<template lang="pug">
div
  label.text-sm.font-medium.leading-5.text-gray-700(for='inputName')
  .hp-prompt.my-2.bg-white.flex.rounded-md.shadow-xs.mx-20
    .relative.flex-grow(class='focus-within:z-10')
      .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
        span.hp-prompt-sigil(v-if='stage') {{ copy.prompt }}
        UserIcon.h-5.w-5.text-gray-400(v-else)
      input.my-2.outline-hidden.form-input.block.w-full.rounded-none.pl-10.transition.ease-in-out.duration-150(class='sm:text-sm sm:leading-5' :placeholder='placeholder' v-model='inputName' v-on:keydown.enter='handleAddPlayer(inputName)')
    button.rounded-r-md(v-if='addPlayersAllowed && !addTeamsAllowed'
                        v-on:click='handleAddPlayer(inputName)')
      UserPlusIcon.h-5.w-5.text-gray-400
      span.ml-2 {{ addLabel }}
    button(v-else-if='addPlayersAllowed'
           v-on:click='handleAddPlayer(inputName)')
      UserPlusIcon.h-5.w-5.text-gray-400
      span.ml-2 {{ addLabel }}
    button.rounded-r-md(v-if='addTeamsAllowed'
                        v-on:click='handleAddTeam(inputName)')
      UserGroupIcon.h-5.w-5.text-gray-400
      span.ml-2 {{ addTeamLabel }}
</template>

<script>
import { mapActions } from 'pinia'
import { useGameStore } from '@/store'

import { UserIcon, UserPlusIcon, UserGroupIcon } from '@heroicons/vue/24/solid'

import themed from '@/theme/mixin'

export default {
  name: 'AddPlayersBar',
  components: {
    UserIcon,
    UserPlusIcon,
    UserGroupIcon
  },
  mixins: [themed],
  props: {
    addPlayersAllowed: {
      type: Boolean,
      default: true
    },
    addTeamsAllowed: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      inputName: '',
      handleIndex: 0
    }
  },
  computed: {
    placeholder () {
      // Stage themes suggest a new handle after every player.
      return this.stage ? this.copy.handles[this.handleIndex % this.copy.handles.length] : 'Shrimply Pibbles'
    },
    addLabel () {
      return this.stage ? this.copy.addPlayer : 'Add'
    },
    addTeamLabel () {
      return this.stage ? this.copy.addTeam : 'Add Team'
    }
  },
  methods: {
    handleAddPlayer (name) {
      if (name.trim() === '') {
        return
      }

      this.addPlayer(name)
      this.inputName = ''
      this.handleIndex++
    },
    handleAddTeam (name) {
      if (name.trim() === '') {
        return
      }

      this.addTeam(name)
      this.inputName = ''
      this.handleIndex++
    },
    ...mapActions(useGameStore, ['addPlayer', 'addTeam'])
  }
}
</script>

<style lang="scss" scoped>
@reference '../../assets/styles/tailwind.css';
button {
  @apply -ml-px relative inline-flex items-center px-4 py-2 border
  border-gray-300 text-sm leading-5 font-medium text-gray-700 bg-gray-50
  transition ease-in-out duration-150;
}

button:hover {
  @apply bg-white text-gray-500;
}

button:focus {
  @apply border text-gray-700 outline-hidden;
}

button:active {
  @apply bg-gray-100 text-gray-700;
}
</style>
