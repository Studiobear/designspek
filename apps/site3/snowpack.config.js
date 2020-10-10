module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  mount: {
    public: '/',
    src: '/_dist_',
  },
  install: ['@studiobear/designspek-components'],
  plugins: [
    [
      'snowpack-plugin-mdsvex',
      {
        include: 'src/blog/posts/**/*.svx',
        exportDir: ['src/blog/posts'],
      },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'tsc --noEmit',
        watch: '$1 --watch',
      },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'svelte-check --output human',
        watch: '$1 --watch',
        output: 'stream',
      },
    ],
  ],
  installOptions: {
    installTypes: true,
    polyfillNode: false,
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')({ fs: true })],
    },
  },
}
