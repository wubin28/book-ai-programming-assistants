export default {
  testEnvironment: 'node',
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleFileExtensions: ['js']
};