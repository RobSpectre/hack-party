<template lang="pug">
GameContentWithSidebar
  template(v-slot:header)
    .py-5.text-white.text-3xl.fragment {{ question }}
  template(v-slot:content)
    // Container for the main content area within the slot
    .w-full.flex.flex-col.items-center.py-8.px-4(class="sm:px-6 lg:px-8")

      // --- Input + Button Row (Full Width) ---
      // Use flex container to place input and button side-by-side
      .w-full.flex.items-center.mb-8(class="max-w-2xl")
        // Input takes remaining space
        input.flex-grow.appearance-none.outline-none.form-input.block.w-full.border.border-gray-300.rounded-l-md.rounded-r-none.px-4.py-2.text-gray-900.placeholder-gray-500.transition.ease-in-out.duration-150(
          class='focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Input human answer'
          v-model='answerInput'
          v-on:keydown.enter='answerQuestion(answerInput)'
          aria-label="Your Answer"
        )
        // Button attached to the right
        button.inline-flex.items-center.px-4.py-2.border.border-l-0.border-indigo-600.bg-indigo-600.text-white.rounded-r-md.text-sm.font-medium.shadow-sm(
          class='hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap'
          v-on:click='answerQuestion(answerInput)'
          type="button"
        )
          // Assuming UserGroupIcon is globally registered or imported
          // Use a more appropriate icon if desired, e.g., PaperAirplaneIcon or CheckIcon
          // UserGroupIcon.h-5.w-5.text-white.-ml-1.mr-2 // Example styling if needed
          span Answer

      .mx-auto.mt-6(class="w-3/4")
        .flex.flex-wrap.items-center.justify-center.gap-4(class="sm:gap-6")
          .flex.flex-col.items-center(v-for='model in models' :key='model.model_key')
            .w-64.h-64.bg-cover.bg-center.shadow-sm(
              :style="{ backgroundImage: 'url(' + model.model_icon + ')' }"
              :title="model.model_key"
              role="img"
              :aria-label="model.model_key + ' icon'"
            )
              // Optional: Add content inside if needed, e.g., overlay on hover

            // Placeholder for the timer div below the icon
            .timer-div.mt-2.text-xs.text-center.text-gray-500
              // Add timer logic/display here if needed
              span {{ model.model_key.split('/')[1] }}
</template>

<script>
import { mapState } from 'pinia'

import { useGameStore } from '@/store'

import GameContentWithSidebar from '@/components/base/GameContentWithSidebar.vue'

export default {
  name: 'HumansVersusAIRound',
  components: {
    GameContentWithSidebar
  },
  props: {
    question: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    },
    models: {
      type: Array,
      default: () => [
        {'model_key': 'google/gemini-2.0-flash-001', 'model_icon': '/images/gemini-color.webp' },
        {'model_key': 'anthropic/claude-3.5-sonnet', 'model_icon': '/images/anthropic.webp' },
        {'model_key': 'openai/gpt-4o-mini', 'model_icon': '/images/openai.webp' },
        {'model_key': 'deepseek/deepseek-r1', 'model_icon': '/images/deepseek-color.webp' }
      ]
    }
  },
  data () {
    return {
      answerInput: ''
    }
  },
  computed: {
    ...mapState(useGameStore, ['game'])
  }
}
</script>
