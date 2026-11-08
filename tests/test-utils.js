/* eslint no-undef: "off" */
export const mocks = {
  Audio: {
    pause: vi.fn(),
    play: vi.fn(),
    addEventListener: vi.fn().mockImplementationOnce((event, callback) => {
      callback()
    }),
    currentTime: 12,
    duration: 16,
    clearMocks: true
  }
}
