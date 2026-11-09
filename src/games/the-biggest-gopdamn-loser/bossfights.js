// A boss fight closes each round: three multiple-choice questions, each
// worth `points` to everyone who gets it right. `answer` is the index of the
// right choice. `setup` is an image shown before the first question and on
// each question card; `after` is a video played after the scores.
// A fight with no questions yet is skipped.

const which = 'Which phrase does Apple not swipeblock?'

export const bossFights = {
  1: {
    points: 3,
    // The top of https://swipeblocked.com/
    setup: 'swipeblocked.png',
    after: 'gop_pr.mp4',
    questions: [
      { question: which, choices: ['NSA surveillance', 'Covid was a hoax', "Santa isn't real"], answer: 1 },
      { question: which, choices: ['Belfast confetti', 'school shooting', '9/11 inside job'], answer: 2 },
      { question: which, choices: ['gaza genocide', 'أحتلال أمريكي', 'ctrl-alt-delete jezelf'], answer: 0 }
    ]
  },
  2: {
    points: 5,
    setup: null,
    after: 'lovett.mp4',
    questions: []
  },
  3: {
    points: 10,
    setup: null,
    after: null,
    questions: []
  }
}
