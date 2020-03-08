<script>
  import { addGlobal, styled } from '@studiobear/designspek'
  import { googleFonts, theme } from '../theme'

  import { Section, Button, Box } from '@studiobear/designspek-components'
  import { Nav } from '../components'

  // $: background = $theme.colors.background || '#fff'
  // export const segment

  $: bodyStyle = {
    backgroundColor: $theme.colors.background,
  }

  $: mainStyle = {
    position: 'relative',
    maxWidth: '56em',
    bg: $theme.colors.background,
    p: 3,
    m: '0 auto',
    boxSizing: 'border-box',
  }
  // $: console.log('_layout: ', $theme, theme)

  if (process.browser) {
    addGlobal($theme)
  }
</script>

<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>

<Box theme={$theme} style={bodyStyle}>
  <Section as="main" style={mainStyle}>
    <button
      on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}>
      {$theme.mode === 'light' ? 'to dark mode' : 'to light mode'}
    </button>
    <slot />
  </Section>
  <!--
  <Nav {segment} />

  
  -->

</Box>
