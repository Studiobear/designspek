module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transformIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/../../node_modules',
  ],
}
