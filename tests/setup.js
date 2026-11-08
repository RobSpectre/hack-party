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

// jsdom has no matchMedia; vue-tweet reads it for the color scheme
window.matchMedia = window.matchMedia || vi.fn().mockImplementation(function (query) {
  return {
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn()
  }
})

// jsdom has no Web Audio; vue-advanced-chat builds an AudioContext on import
window.AudioContext = window.AudioContext || function () {
  return {
    createAnalyser: vi.fn(),
    createMediaStreamSource: vi.fn(),
    close: vi.fn()
  }
}

// Most specs check the Classic markup and copy; Uplink specs switch themes themselves.
import { applyTheme } from '@/theme'
applyTheme('classic')
