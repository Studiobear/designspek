import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
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
      external: ['@studiobear/svelte-system-ui'],
      globals: { '@studiobear/svelte-system-ui': 'svelteSystemUi' },
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      external: ['@studiobear/svelte-system-ui'],
      globals: { '@studiobear/svelte-system-ui': 'svelteSystemUi' },
    },
  ],
  plugins: [svelte(), resolve(), commonjs()],
}
