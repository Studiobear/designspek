import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scrub from 'rollup-plugin-scrub'
import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      external: ['@studiobear/designspek'],
      globals: { '@studiobear/designspek': 'svelteSystemUi' },
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      external: ['@studiobear/designspek'],
      globals: { '@studiobear/designspek': 'svelteSystemUi' },
    },
  ],
  plugins: [
    svelte(),
    resolve(),
    commonjs(),
    scrub({
      tags: [
        // Remove the next line only
        { begin: 'dev-code-only' },
      ],
    }),
  ],
}
