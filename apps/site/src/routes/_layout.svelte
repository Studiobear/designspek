<script>
  import { addGlobal, styled } from '@studiobear/designspek'
  import { googleFonts, theme } from '../theme'

  import { Section, Button, Box } from '@studiobear/designspek-components'
  import { Nav, SSR } from '../components'

  // $: background = $theme.colors.background || '#fff'
  export let segment

  $: bodyStyle = {
    backgroundColor: $theme.colors.background,
    theme: $theme,
  }

  $: mainStyle = {
    position: 'relative',
    maxWidth: '56em',
    bg: $theme.colors.background,
    p: 3,
    m: '0 auto',
    boxSizing: 'border-box',
    theme: $theme,
  }
  // $: console.log('_layout: ', $theme, theme)

  $: addGlobal($theme)
</script>

<style>
  :global(html) {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  :global(body) {
    margin: 0;
  }
</style>

<svelte:options immutable={true} />
<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>

<Box style={bodyStyle}>
  <Nav {segment} theme={$theme} />
  <Section as="main" style={mainStyle}>
    <button
      on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}>
      {$theme.mode === 'light' ? 'to dark mode' : 'to light mode'}
    </button>
    <slot />
  </Section>
</Box>
