module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'svelte3'],
  extends: ["plugin:@typescript-eslint/recommended","prettier/@typescript-eslint",'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'prettier/prettier': 'error',
  },
}
