// A boss fight closes each round: one multiple-choice question, worth
// `points` to everyone who gets it right. `answer` is the index of the right
// choice. `setup` is an image shown on its own slide before the question;
// `image` tops the question card. `after` is a video played after the scores.
// A fight with no questions is skipped.

const which = 'Which phrase does Apple not swipeblock?'
// The top of https://swipeblocked.com/
const swipeblocked = 'swipeblocked.png'

export const bossFights = {
  1: {
    points: 3,
    setup: swipeblocked,
    image: swipeblocked,
    after: 'gop_pr.mp4',
    questions: [
      { question: which, choices: ['NSA surveillance', 'Covid was a hoax', "Santa isn't real"], answer: 1 }
    ]
  },
  2: {
    points: 5,
    setup: null,
    image: swipeblocked,
    after: 'lovett.mp4',
    questions: [
      { question: which, choices: ['Belfast confetti', 'school shooting', '9/11 inside job'], answer: 2 }
    ]
  },
  3: {
    points: 10,
    setup: null,
    image: swipeblocked,
    after: null,
    questions: [
      { question: which, choices: ['gaza genocide', 'أحتلال أمريكي', 'ctrl-alt-delete jezelf'], answer: 0 }
    ]
  }
}
