import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/index.ts',
  external: ['@studiobear/designspek'],
  output: [
    {
      file: pkg.module,
      format: 'es',
      globals: { '@studiobear/designspek': 'svelteSystemUi' },
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      globals: { '@studiobear/designspek': 'svelteSystemUi' },
    },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    resolve(),
    typescript({ sourceMap: !production }),
    commonjs()
  ],
}
