const svelteRollupPlugin = require('rollup-plugin-svelte')
const fs = require('fs/promises')
const utils = require('@rollup/pluginutils')
const svelte = require('svelte/compiler')
const evaluate = require('static-eval')
const parse = require('esprima').parse

const ext = /\.svelte$/
const extensionsDefault = ['.svelte']

module.exports = function plugin(
  snowpackConfig: any,
  pluginOptions: SnowpackPluginDesignspekOptions,
) {
  const isDev = process.env.NODE_ENV !== 'production'

  let filter: any
  let extensions: string[]
  let extRegexp: RegExp

  if (
    pluginOptions.designspekOptions &&
    pluginOptions.designspekOptions.extensions
  ) {
    extensions = pluginOptions.designspekOptions.extensions
    let genExtRegExp: string = ''
    let extL = 0
    extensions.map((e) => {
      genExtRegExp += e.replace(/\./g, '')
      if (extensions.length != extL) genExtRegExp += '|'
      extL++
    })
    extRegexp = new RegExp(genExtRegExp)
  } else {
    extensions = extensionsDefault
    extRegexp = ext
  }

  if (pluginOptions.include || pluginOptions.exclude)
    filter = utils.createFilter(pluginOptions.include, pluginOptions.exclude)

  if (
    snowpackConfig &&
    snowpackConfig.installOptions &&
    snowpackConfig.installOptions.rollup &&
    snowpackConfig.installOptions.rollup.plugins
  ) {
    snowpackConfig.installOptions.rollup.plugins.push(
      svelteRollupPlugin({
        extensions: ['.svelte', ...extensions],
      }),
    )
  }

  return {
    name: 'snowpack-plugin-designspek',
    resolve: {
      input: extensions,
      output: ['.js', '.css'],
    },
    knownEntrypoints: ['svelte/internal'],
    async load({ filePath }: { filePath: string }) {
      if (
        !extRegexp.test(filePath) ||
        (typeof filter === 'function' && !filter(filePath))
      ) {
        return null
      }

      const contents = await fs.readFile(filePath, 'utf-8')

      const svxPreprocess = await svelte.preprocess(contents, {
        filename: filePath,
      })
      // console.log('svxPreprocess: ', svxPreprocess, typeof svxPreprocess.code)
      const { js, css } = await svelte.compile(svxPreprocess.toString())
      // console.log('js: ', js.code)
      const output: any = {
        '.js': {
          code: js.code,
        },
      }
      if (css && css.code) {
        output['.css'] = {
          code: css.code,
        }
      }

      return output
    },
  }
}

export interface SnowpackPluginDesignspekOptions {
  /**
   * Includes only the specified paths
   */
  include?: string[]
  /**
   * Excludes the specified paths
   */
  exclude?: string[]
  /**
   * These options are passed directly to the MDSVEX compiler.
   */
  designspekOptions?: Record<string, any>
}
