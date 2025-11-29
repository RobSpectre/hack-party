<template lang="pug">
Reveal
  .slides
    // Basic string guess
    StringGuess(
      answer="Paris"
      question="What is the capital of France?"
      :prize="1"
    )

    // With multiple acceptable answers
    StringGuess(
      answer="Mount Everest"
      :acceptableAnswers='["Everest", "Mt. Everest", "Mt Everest", "Chomolungma"]'
      answerDetails="8,848.86 meters (29,031.7 feet)"
      question="What is the tallest mountain in the world?"
      placeholder="Enter mountain name..."
      :caseSensitive="false"
      :prize="2"
      headerImage="/images/mountain-quiz.jpg"
    )

    // Movie quote with fuzzy matching
    StringGuess(
      answer="May the Force be with you"
      :acceptableAnswers='["May the force be with you", "Force be with you"]'
      answerDetails="Star Wars (1977)"
      question="Complete this famous movie quote"
      placeholder="Type the full quote..."
      :exactMatch="false"
      :fuzzyThreshold="0.75"
      :prize="2"
      :showHint="true"
      hint="It's from Star Wars"
    )

    // Programming question with exact match
    StringGuess(
      answer="console.log"
      :acceptableAnswers='["console.log()", "console.log();"]'
      answerDetails="JavaScript's most common debugging method"
      question="What JavaScript method outputs to the console?"
      placeholder="Type the method name..."
      :exactMatch="true"
      :caseSensitive="true"
      :prize="3"
      revealButtonText="Show the Answer"
    )

    // History trivia
    StringGuess(
      answer="1969"
      answerDetails="Apollo 11 mission - Neil Armstrong and Buzz Aldrin"
      question="In what year did humans first land on the moon?"
      placeholder="Enter year (YYYY)..."
      :exactMatch="true"
      :allowSkip="true"
      :prize="2"
      headerImage="/images/space-trivia.jpg"
    )

    // Pop culture with case-insensitive matching
    StringGuess(
      answer="The Beatles"
      :acceptableAnswers='["Beatles", "The Fab Four", "Fab Four"]'
      answerDetails="John, Paul, George, and Ringo"
      question="Which band released the album 'Abbey Road'?"
      placeholder="Band name..."
      :caseSensitive="false"
      :fuzzyThreshold="0.8"
      :prize="2"
      submitButtonText="Lock It In"
      revealButtonText="Show Band Name"
    )
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'
import StringGuess from './StringGuess.vue'

export default {
  name: 'StringGuessExample',
  components: {
    Reveal,
    StringGuess
  }
}
</script>