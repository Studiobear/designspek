<p align="left"><img src="https://raw.githubusercontent.com/Studiobear/designspek/master/static/ds-horiz.png" width="440" height="80" /></p>

#### A Reactive Design System: Svelte meets System UI

---

![designspec brotli](https://img.badgesize.io/https://unpkg.com/@studiobear/designspek@0.1.2/dist/index.js?compression=brotli) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Studiobear/designspek) ![GitHub](https://img.shields.io/github/license/Studiobear/designspek?color=blue)

> **_Notice: Unstable API and under heavy development_**

**Underlying Elements**

[Svelte](https://svelte.dev/) is a UI development framework for creating boilerplate-free components that compile down to fast, virtual-DOM-free vanilla JS that is truly reactive.

[System UI](https://system-ui.com/) is an evolving standard for creating consistent, interoperable UIs. It is the underlying foundation to many UI-themeing libraries such as Styled System, Rebass, ThemeUI, and more.

- **[Styled System](https://styled-system.com/)**: Styled System is a collection of utility functions for forming style props based on a global theme object defining typographic and layout properties.
- **[Goober](https://github.com/cristianbote/goober)**: a less than 1kb CSS-in-JS implementation (toting in comparison ~16/11kb respectively of [styled-components](https://github.com/styled-components/styled-components)/[emotion](https://github.com/emotion-js/emotion). In this library, Goober's `css` function is used to parse and apply the style props formed by Styled System.
- **[Typography.js](http://kyleamathews.github.io/typography.js/)**: Typography is difficult and the nuances of applying good typography exasperate the already-brittle system of themes and CSS. TypographyJS works as a seperate themeing layer that can be integrated with Styled System to apply such typographic nuances to the greater theme.

# Using Designspek

## Getting started

### Install

```bash
yarn add @studiobear/designspek

// or

npm i @studiobear/designspek

```

### The Theme

Themes are implementations of a design specification in the form of a Javascript object.

**Example Theme Object:**

```jsx
export default {
  spaces: [0, 2, 4, 8, 12, 18, 24, 32],
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#639',
    secondary: '#ff6347',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}
```

### Using your theme

```jsx
// Box.svelte
<script>
  import { styled } from '@studiobear/designspek';
import { Box } from '@studiobear/designspek-components';

// reactive theme store
import { theme } from '../theme';

// generate static styles. Uses shorthand 'w' for 'width'
let staticBox = styled({
  w: '100%'
})

// Svelete reactive declaration. When theme changes mode, 'bg' (background) will update accordingly.
$: rxBox = styled({
  bg: theme.colors.primary
})

</script>

<Box class={staticBox}>
  <Box class={rxBox}>
    <slot />
  </Box>
</Box>
```

That's all! Your are ready to use all css property names + [shorthand](#currently-available-shorthand-properties) props as attribute on your component! See [https://styled-system.com/api](https://styled-system.com/api), the currently implemented API, for more documentation.

```jsx
// App.svelte
<script>
  import Box from './Box.svelte';
</script>

<Box
  p={["space.s", "space.m", "space.l"]}
  bg="theme.color.primary" color="color.secondary"
  textAlign="center"
>
  <h3>Using styled-system in svelte!</h3>
  <p>Resize me to see my responsive padding in action</p>
</Box>
```

### How does the value resolution work?

1. The attribute name will get mapped to the css property name. You can specify it either in camelCase `(textAlign)` or kebab-case `(text-align)`.
   So, if you know css by heart, you already know 99% of your component's props.

2. if the value is preceeded by an `_`, then

```jsx
$: linkStyle = {
  color: theme.colors.primary,
  _hover: {
    color: theme.colors.secondary,
  },
}
```

3. if the value is an array then `designspek` will create a media query for each breakpoint and will resolve the separate values just as described before.
   `padding: [0, "space.m", "space.l"]`:

- will create `padding: 0;` (raw value) for `theme.breakpoints[0]`
- will create `padding: 1rem;` (`space.m`) for `theme.breakpoints[1]`
- will create `padding: 2rem;` (`space.l`) for `theme.breakpoints[2]`

## Currently available shorthand properties:

For commonly used css properties there are shortcuts to make your code _even less_ verbose.

**Example:**
`my={1}` => `margin-top: 1rem; margin-bottom: 1rem;`

As with all other properties you can use the responsive Array notation as well!

```jsx
<MyComponent bg="primary" m={[1, 2, 3]} />
```

## API

While similar to other CSS-in-JS solutions, Designspek has been customized towards Svelte which is a compiler and does not use a virtual DOM.

> API is unstable and experimental. Main detractor of stability is the course of finding an SSR best-practice for Svelte.

### `styled(styles, theme?, ssr? = false )`

- `@params {Object} styles`: An object of styles. Style keys are CSS in camelCase or use shorthand attributes.
- `@params {Object optional} theme`: Theme store subscription or raw theme object. Optional if no reactive updating required.
- `@params {Boolean optional} ssr`: Returns a raw CSS string instead of classname.
- `@returns {string}`: Returns classname connected to style injected into header or, if ssr, returns raw CSS string.

_Note: `ssr` option is an exploration into server-side rendering options with Svelte and Sapper. Since it is for applying styles inline to elements, it may break inheritance and create unexpected side effects. Best used for critical elements seen on first load. This is a backup method to using `extractCSS`._

```jsx
<script>
  import { styled } from '@studiobear/designspek';
  import { theme } from '../theme';

// generate static styles. Uses shorthand 'w' for 'width'
let static= styled({
  color: '#000'
})

// Svelete reactive declaration. When theme changes mode, 'bg' (background) will update accordingly.
$: rx = styled({
  color: $theme.colors.primary
}, $theme)

// Svelete reactive declaration. When theme changes mode, 'bg' (background) will update accordingly.
$: ssr = styled({
  color: $theme.colors.primary
}, $theme, true)

</script>

<h1 class={static}>Static Heading</h1>
<h1 class={rx}>Reactive Heading</h1>

// Notice, uses style tag as raw css is output
<h1 class={ssr}>SSR Heading</h1>
```

### `addGlobal(theme)`

- `@params {Object} theme`: Theme object. If contains a _styles_ property (theme.styles), parses and injects styles into header. For general global styles like styling Markdown.
- `@returns {string}`: Returns Global Style as string

```jsx
<script>
  import {addGlobal} from '@studiobear/designspek'; // reactive theme store
  import {theme} from '../theme'; // theme used as Svelte auto-subscribed
  variable addGlobal($theme) // reactive theme used for modes $:
  addGlobal($theme)
</script>
```

### `extractCss(theme, active? = false) _(experimental)_`

- `@params {Object} theme`: Theme store subscription.
- `@params {boolean optional} active`: Setting to true allows string of styles to be returned from Style library.
- `@returns {''||string}`: Returns nothing. If `active = true`, returns stored component styles as pre-parsed `<style>` element.

**Intention**: Each style passed through `styled()` is appended to a Style Library with their corresponding Goober classname. `extractCss` then pulls and parses those styles into a stylesheet. These styles can then be injected into the document head using `<svelte:head>`. When app initially renders, FOUC (Flash of Unstyled Content) is avoided. Also appends any global styles as well.

**Challenge**: Race condition on compiling depending on how many times `styled()` is called means that not all styles are parsed before `extractCSS()` is called. `active` param is experiment for using `extractCss()` in multiple component levels to see if more styles are picked up in internal parse library or if there is any effect in parse order of components. The `ssr` option is a desperate measure to force inline styling of critical components missed by this method.

```jsx
<script>
  import { extractCss } from '@studiobear/designspek'
  import { theme } from '../theme';

</script>

<svelte:head>
  {@html extractCss($theme, true)}
</svelte:head>
```

Above appends to document head:

```html
<style id="_ds_ssr_store">
  root {
    font-family: 'Fira Sans', sans-serif;
    line-height: 1.44rem;
    font-weight: 400;
  }
  html {
    scroll-behavior: smooth;
  }

  ... .go1276619285 {
    margin: 0px;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .go3766572075 {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    border-bottom: 1px solid;
    border-color: #07c;
    font-weight: 300;
    padding: 0 1em;
  }
  .go3418959035 {
    margin: 0px;
    min-width: 0;
    background-color: #fff;
  }
</style>
```

### `removeSSR() _(experimental)_`

- `@return nothing`

In attempt to mitigate style inheritance issues, when components are mounted and JS is loaded, CSS-in-JS can take over, so SSR style element is removed from head.

### `typography(theme, typographyTheme)`

- `@params {Object} theme`: Theme raw object.
- `@params {Object} typographyThem`: Typography theme object.
- `@returns {Object} newTheme`: Merged themes with typography sensitive elements included.

[TypographyJS](https://kyleamathews.github.io/typography.js/) themes allow injecting fonts and pre-styled typography declartions into the design specification. Typography should be applied before extracting modes and binding to Svelte store.

In main theme file:

```js
import { typography, fontLink } from '@studiobear/designspek'
import kirkhamTheme from 'typography-theme-kirkham'

import mainTheme from './theme' //Raw theme object

const basic = typography(mainTheme, kirkhamTheme)
```

### `fontLink(theme)`

- `@params {Object} theme`: Theme store subscription or raw object.
- `@returns {string}`: Parsed Google font string

In main theme file:

```js
import kirkhamTheme from 'typography-theme-kirkham'
const googleFonts = fontLink(kirkhamTheme)
```

In top Svelte component:

```jsx
<script>
 import { googleFonts } from './theme'
</script>

<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>

```

---

## Roadmap to v1

- [ ] **Stabilize SSR**: SSR works for simple sites, but depth of components and increase quantity of `styled()` calls results in race conditions and missed critical styles. Either find a way to prioritize critical style elemnts or explore alternatives such as pre-processing/pre-compiling options.
- [ ] **Typescript**: At the foundational level, design specifications define and work with a multitude of types; e.g., _numbers_(`m: 0`), _strings_(`m: 'sm'`) and _arrays_(`margin: ['sm', 'none', 'lg']`). Ergo, static typings are a basic requirement for sane evolution.
- [ ] **Optimize theme integration**: The current direction is exploratory and naively pulls together multiple libraries as a proof-of-concept. However, in doing so, styles are looped a multiple of times to:
  - get/convert mapped custom shorthand attributes
  - integrate theme variables via Styled-System
  - then finally parsed into CSS with Goober.
- [ ] **Theme Aliases**: The current mash-up breaks the built in Styled-System aliasing for things like color. Previously, `'primary'` was all that's needed, but full object path of `'theme.colors.primary'` is currently required. Aliases for spacing such as `['s','m','l']` instead of `[0,1,2]` will make it the specification implementation more idiomatic.
- [ ] **Variants**: Currently, modes are supported that reflect contextual reactivity on a global level. Current patterns and expectations also provide atomic context on the component level.
- [ ] **Composition**: The main style object is a plain old javascript object and therefore easily composable. Create standards for de/re-composition to manage growing complexity.
- [ ] **Style dictionary**: Styles are stored in a plain object as a dictionary for mostly SSR use. Need to compare alternatives such as use of ES6 Maps might be more optimized or irrelevant for this use case.

---

## Acknowledgements

This library was initially inspired by [svelte-styled-system(@manuschillerdev)](https://github.com/manuschillerdev/svelte-styled-system). At time of discovery, svelte-styled-system was annotated as a proof-of-concept for bringing in the concepts of [styled-system](https://styled-system.com/) and doing it in as small of a package as possible. _Designspek_ vears away from this by choosing to make design specificiations first class citizens at the cost of size efficiency.
