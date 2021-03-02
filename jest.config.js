module.exports = {
  moduleNameMapper: {
    'styled-components': '<rootDir>/node_modules/styled-components'
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.js?$',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coverageReporters: ['json', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}']
  //   reporters: ['jest-nyancat-reporter']
}
