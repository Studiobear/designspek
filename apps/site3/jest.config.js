const userSvelteConfig = require('./svelte.config')
const path = require('path')

module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    "^.+\\.svelte$": [
      "jest-transform-svelte",
      { preprocess: userSvelteConfig.preprocess },
    ],
    "^.+\\.(js|ts)$": 'ts-jest',
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
  bail: false,
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  rootDir: '.'
};
