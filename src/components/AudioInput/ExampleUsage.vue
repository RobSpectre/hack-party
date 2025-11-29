<template lang="pug">
Reveal
  .slides
    // Basic usage with single correct answer
    AudioInputRound(
      src="/audio/mystery-sound-1.mp3"
      correctAnswer="thunder"
      question="What sound is this?"
      :prize="1"
    )

    // With multiple acceptable answers and case-insensitive
    AudioInputRound(
      src="/audio/song-clip.mp3"
      correctAnswer="Bohemian Rhapsody"
      :acceptableAnswers='["Bohemian Rhapsody by Queen", "Queen Bohemian Rhapsody", "Bohemian"]'
      question="Name this song!"
      placeholder="Enter song title..."
      :caseSensitive="false"
      :prize="2"
      headerImage="/images/music-quiz.jpg"
    )

    // With fuzzy matching for typos
    AudioInputRound(
      src="/audio/movie-quote.mp3"
      correctAnswer="I'll be back"
      answerDetails="The Terminator (1984)"
      question="Complete this famous movie quote"
      :exactMatch="false"
      :fuzzyThreshold="0.7"
      :prize="3"
    )

    // With hints and strict matching
    AudioInputRound(
      src="/audio/language-clip.mp3"
      correctAnswer="French"
      question="What language is being spoken?"
      :exactMatch="true"
      :caseSensitive="false"
      :showHint="true"
      hint="It's a Romance language"
      :allowSkip="true"
      :prize="2"
    )

    // Movie soundtrack round
    AudioInputRound(
      src="/audio/star-wars-theme.mp3"
      correctAnswer="Star Wars"
      :acceptableAnswers='["Star Wars Theme", "Star Wars Main Theme", "A New Hope"]'
      answerDetails="Composed by John Williams"
      question="Name the movie this soundtrack is from"
      placeholder="Movie title..."
      :fuzzyThreshold="0.75"
      revealButtonText="Show Movie Title"
      headerImage="/images/movie-soundtrack.jpg"
      :prize="2"
    )
</template>

<script>
import Reveal from '@/components/base/Reveal.vue'
import AudioInputRound from './AudioInputRound.vue'

export default {
  name: 'AudioInputExample',
  components: {
    Reveal,
    AudioInputRound
  }
}
</script>