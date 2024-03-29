module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      { preprocess: true, rootMode: 'upward' },
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  verbose: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  rootDir: '.',
}
