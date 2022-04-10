import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess()],

  kit: {
    adapter: adapter(),
    package: {
      exports: (filepath) => {
        console.log('exports', filepath)
        return filepath.endsWith('index.ts')
      },
      files: (filepath) => {
        console.log('files', filepath, !filepath.endsWith('.test.ts'))
        return !filepath.endsWith('.test.ts')
      },
    },
    vite: {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          $lib: resolve('./src/lib'),
        },
      },
    },
  },
}

export default config
