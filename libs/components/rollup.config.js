import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'
import path from 'path'

const production = process.env.NODE_ENV

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

const globals = { '@studiobear/designspek': 'designspek' }
const getOutput = (format = 'esm') => {
  if (format === 'esm') {
    return {
      dir: path.dirname(pkg.module),
      sourcemap:true,
      format,
      globals
    }
  }

  if (format === 'umd') {
    return {
      dir: path.dirname(pkg.umd),
      sourcemap:true,
      name,
      format,
      globals
    }
  }

  // pkg is package.json
  return {
    file: pkg.main,
    sourcemap:true,
    format,
    globals
  }
}

const getPlugins = (format = 'esm') => {
  const typeScriptOptions = format === 'esm' ? { declaration: true, declarationDir: path.dirname(pkg.module) } : {}

  return [
    svelte({
      dev: !production,
      preprocess: autoPreprocess(),
    }),
    resolve(),
    typescript(typeScriptOptions),
    copy({
      targets: [{ src: 'index.d.ts', dest: 'dist' }],
    }),
  ];
};

const rollup = (_args) => {
  const input = 'src/index.ts'
  const external = ['@studiobear/designspek']

  return [
    // cjs configuration
    {
      input,
      output: getOutput('cjs'),
      plugins: getPlugins('cjs'),
      external,
    },
    // umd configuration
    {
      input,
      output: getOutput('umd'),
      plugins: getPlugins('umd'),
      external,
    },
    // esm configuration
    {
      input,
      output: getOutput('esm'),
      plugins: getPlugins('esm'),
      external,
    }
  ];
}

export default rollup
