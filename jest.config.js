module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!node-fetch)/', //  **CRITICAL:  Allow node-fetch to be transformed**
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@vue/test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  testEnvironment: 'jsdom',
  setupFiles: [
    './tests/setupTests.js',
    'fake-indexeddb/auto'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'text-summary',
    'json'
  ],
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html'
      }
    }
  }
}
