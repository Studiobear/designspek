<hr />
<div>
  <h1>
    snowpack-plugin-designspek
  </h1>
  <blockquote>[Experiment] A Designspek Preprocessor: Atomized CSS</blockquote>
</div>
<div>
&nbsp;
<p>
  <a aria-label="Types" href="https://www.npmjs.com/package/snowpack-plugin-designpek"><img alt="Types" src="https://img.shields.io/npm/types/snowpack-plugin-designpek?style=flat&labelColor=24292e"></a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/Studiobear/snowpack-plugin-designpek"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/Studiobear/snowpack-plugin-designpek"></a>
<a href='https://studiobear.semaphoreci.com/badges/snowpack-plugin-designpek/branches/master.svg?style=shields'><img src='https://studiobear.semaphoreci.com/badges/snowpack-plugin-designpek/branches/master.svg?style=shields' alt='Build Status'></a>
<a aria-label="NPM version" href="https://www.npmjs.com/package/snowpack-plugin-designpek"><img alt="NPM Version" src="https://img.shields.io/npm/v/snowpack-plugin-designpek?style=flat&labelColor=24292e"></a>
<a aria-label="License" href="https://barry-low.mit-license.org/"><img alt="MIT License" src="https://img.shields.io/npm/l/snowpack-plugin-mdx?style=flat&labelColor=24292e"></a>
</p>
&nbsp;
</div>
<hr />

This plugin is originally created to be used within a Svelte project, but has future plans to be JS library/framework agnostic.

```bash
yarn add snowpack-plugin-designspek -D
# or
npm i snowpack-plugin-designspek --dev -D
```

Peer dependencies: `svelte`, `snowpack`, `designpek`.

## Quick start

If starting a new project, tryout [Create Snowpack App (CSA)](<https://www.snowpack.dev/#create-snowpack-app-(csa)>) using either:

- @snowpack/app-template-svelte
- @snowpack/app-template-svelte-typescript

Otherwise, after installing, update your snowpack config:

```js
// snowpack.config.json
{
  "plugins": [["snowpack-plugin-designpek", { /* see "Plugin Options" below */ }]]
}
```

### Plugin Options

- [TODO]

## LICENSE

[MIT](https://barry-low.mit-license.org/)
