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
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'svelte', 'json'],
  testPathIgnorePatterns: ['node_modules'],
  verbose: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  rootDir: '.',
}
