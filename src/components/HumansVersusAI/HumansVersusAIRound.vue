<template lang="pug">
GameContentWithSidebar(:players='players')
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

            // Show model name and status
            .mt-2.text-center
              .text-sm.font-semibold {{ model.model_key.split('/')[1] }}
              .text-xs.text-gray-500(v-if='getModelResponse(model.model_key)')
                | {{ getModelResponse(model.model_key).answer }}
              .text-xs.text-gray-400(v-else-if='complete')
                | Thinking...

      // Results section
      .w-full.mt-8.text-center(v-if='complete && winners.length > 0')
        .text-2xl.font-bold.mb-4
          span(v-if='winners.includes("Human Team")') 🎉 Humans Win! 🎉
          span(v-else) 🤖 AI Wins! 🤖
        .text-lg
          | Correct answer: {{ answer }}
        .text-sm.text-gray-600.mt-2
          | Winners: {{ winners.join(', ') }}

      // No winners message
      .w-full.mt-8.text-center(v-if='complete && winners.length === 0')
        .text-2xl.font-bold.mb-4 No correct answers! 😅
        .text-lg
          | Correct answer: {{ answer }}
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
      answerInput: '',
      humanAnswer: '',
      modelResponses: [],
      complete: false,
      winners: []
    }
  },
  computed: {
    ...mapState(useGameStore, ['game']),
    players () {
      const players = []

      // Add human player
      if (this.humanAnswer) {
        players.push({
          name: 'Human Team',
          value: this.humanAnswer,
          correct: this.isCorrect(this.humanAnswer) ? '✅' : '❌'
        })
      }

      // Add AI model responses
      this.modelResponses.forEach((response) => {
        players.push({
          name: response.modelName,
          value: response.answer,
          correct: this.isCorrect(response.answer) ? '✅' : '❌'
        })
      })

      return players
    }
  },
  methods: {
    answerQuestion (userAnswer) {
      if (!userAnswer || this.complete) return

      this.humanAnswer = userAnswer
      this.answerInput = '' // Clear input

      // Simulate AI model responses (in production, these would come from API calls)
      this.simulateAIResponses()

      // Mark round as complete
      this.complete = true

      // Determine winners after a short delay
      setTimeout(() => {
        this.determineWinners()
      }, 2000)
    },

    simulateAIResponses () {
      // In a real implementation, this would call AI APIs
      // For now, we'll simulate responses based on the question
      const simulatedAnswers = this.generateSimulatedAnswers()

      this.models.forEach((model, index) => {
        // Simulate thinking time with staggered responses
        setTimeout(() => {
          this.modelResponses.push({
            modelName: model.model_key.split('/')[1],
            answer: simulatedAnswers[index] || 'Thinking...',
            responseTime: Math.random() * 2000 + 500 // 0.5-2.5 seconds
          })
        }, Math.random() * 1500 + 500) // Stagger responses 0.5-2 seconds
      })
    },

    generateSimulatedAnswers () {
      // Generate plausible answers based on question type
      // In production, these would be actual AI responses
      const questionLower = this.question.toLowerCase()

      if (questionLower.includes('capital')) {
        return ['Paris', 'London', 'Paris', 'Paris, France']
      } else if (questionLower.includes('year')) {
        return ['1969', '1969', '1969', '1969']
      } else if (questionLower.includes('who')) {
        return ['Albert Einstein', 'Einstein', 'Albert Einstein', 'Einstein']
      } else {
        // Default responses
        return ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
      }
    },

    isCorrect (answer) {
      if (!this.answer) return false

      // Case-insensitive comparison with some flexibility
      const normalizedAnswer = answer.toLowerCase().trim()
      const normalizedCorrect = this.answer.toLowerCase().trim()

      // Exact match
      if (normalizedAnswer === normalizedCorrect) return true

      // Check if the answer contains the correct answer
      if (normalizedAnswer.includes(normalizedCorrect) ||
          normalizedCorrect.includes(normalizedAnswer)) {
        return true
      }

      return false
    },

    determineWinners () {
      const winners = []

      // Check human answer
      if (this.isCorrect(this.humanAnswer)) {
        winners.push('Human Team')
      }

      // Check AI answers
      this.modelResponses.forEach((response) => {
        if (this.isCorrect(response.answer)) {
          winners.push(response.modelName)
        }
      })

      this.winners = winners

      // Play appropriate sound
      if (winners.includes('Human Team')) {
        const audio = new Audio('/sounds/fanfare.mp3')
        audio.volume = 0.2
        audio.play()
      } else if (winners.length > 0) {
        const audio = new Audio('/sounds/loser_sound.mp3')
        audio.volume = 0.2
        audio.play()
      }
    },

    resetRound () {
      this.humanAnswer = ''
      this.answerInput = ''
      this.modelResponses = []
      this.complete = false
      this.winners = []
    },

    getModelResponse (modelKey) {
      const modelName = modelKey.split('/')[1]
      return this.modelResponses.find(r => r.modelName === modelName)
    }
  }
}
</script>
