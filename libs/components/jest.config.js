module.exports = {
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { 'preprocess': true }],
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]s)$',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  verbose: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  rootDir: '.'
}
