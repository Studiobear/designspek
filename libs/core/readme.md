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

---

## Roadmap to v1

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

This library was initially inspired by [svelte-styled-system(@manuschillerdev)](https://github.com/manuschillerdev/svelte-styled-system). At time of discovery, svelte-styled-system was annotated as a proof-of-concept for bringing in the concepts of [styled-system](https://styled-system.com/) and doing it in as small of a package as possible. _Designspek_ vears away from this by choosing to make design specificiations
