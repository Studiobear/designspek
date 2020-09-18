import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import svelte from 'rollup-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup'
import remark from 'remark'
import html from 'remark-html'
import svg from 'rollup-plugin-svg'

import pkg from './package.json'

const { createPreprocessors } = require('./svelte.config.js')

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const sourcemap = dev ? 'inline' : false

const preprocess = createPreprocessors({ sourceMap: !!sourcemap })

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

const markdown = () => ({
  transform(md, id) {
    if (!/\.md$/.test(id)) return null
    const data = remark()
      .use(html)
      .process(md, (err, file) => String(file))
    return {
      code: `export default ${JSON.stringify(data)};`,
    }
  },
})

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: { ...config.client.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svg(),
      svelte({
        dev,
        hydratable: true,
        emitCss: false,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({
        noEmitOnError: !dev,
        sourceMap: !!sourcemap,
      }),
      json({
        compact: true,
      }),
      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],
    // context: "window",
    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/\.js$/, '.ts') },
    output: { ...config.server.output(), sourcemap },
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.SITE_URL':
          process.env.NODE_ENV === 'development'
            ? `'${process.env.SITE_URL}'`
            : `'${process.env.PROD_URL}'`,
      }),
      svg(),
      svelte({
        generate: 'ssr',
        dev,
        hydratable: true,
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({
        noEmitOnError: !dev,
        sourceMap: !!sourcemap,
      }),
      markdown(),
      json(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives')),
    ),
    preserveEntrySignatures: false,
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, '.ts'),
    output: { ...config.serviceworker.output(), sourcemap },
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.SITE_URL':
          process.env.NODE_ENV === 'development'
            ? `'${process.env.SITE_URL}'`
            : `'${process.env.PROD_URL}'`,
      }),
      commonjs({
        sourceMap: !!sourcemap,
      }),
      typescript({
        noEmitOnError: !dev,
        sourceMap: !!sourcemap,
      }),
      !dev && terser(),
    ],
    preserveEntrySignatures: false,
    onwarn,
  },
}
