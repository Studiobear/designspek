const sveltePreprocess = require('svelte-preprocess')

const createPreprocessors = ({ sourceMap }) => [
  sveltePreprocess({
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            // No need for babel to resolve modules
            modules: false,
            targets: {
              // ! Very important. Target es6+
              esmodules: true,
            },
          },
        ],
      ],
    },
    sourceMap,
    defaults: {
      script: 'typescript',
    },
  }),
  // You could have more preprocessors, like mdsvex
]

module.exports = {
  createPreprocessors,
  // Options for `svelte-check` and the VS Code extension
  preprocess: createPreprocessors({ sourceMap: true }),
}
