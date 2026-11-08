import { mocks } from './test-utils'

// Audio mock
/* eslint no-undef: "off" */
// A regular function, not an arrow, so `new Audio()` works with vi.fn
global.Audio = vi.fn().mockImplementation(function () {
  return {
    pause: mocks.Audio.pause,
    play: mocks.Audio.play,
    addEventListener: mocks.Audio.addEventListener,
    currentTime: 12,
    duration: 16
  }
})
