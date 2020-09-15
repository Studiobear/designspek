module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
