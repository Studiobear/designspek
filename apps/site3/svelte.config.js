const autoPreprocess = require('svelte-preprocess')
const { mdsvex } = require('mdsvex')

module.exports = {
  preprocess: [
    autoPreprocess({
      defaults: {
        script: 'typescript',
      },
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
    }),
    mdsvex(),
  ],
}
