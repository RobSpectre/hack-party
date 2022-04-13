import { mocks } from './tests/test-utils'

// Audio mock
/* eslint no-undef: "off" */
global.Audio = jest.fn().mockImplementation(() => ({
  pause: mocks.Audio.pause,
  play: mocks.Audio.play
}))
