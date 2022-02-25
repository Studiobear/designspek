<svelte:options immutable={true} />

<script>
  import { onMount } from 'svelte'
  import { addGlobal, styled } from '@studiobear/designspek'
  import { googleFonts, theme } from '../theme'

  import { Section, Button, Box, Link } from '@studiobear/designspek-components'
  import { Nav, SSR, Icons } from '../components'

  // $: background = $theme.colors.background || '#fff'
  export let segment
  let ssr = true
  $: bodyStyle = {
    bg: $theme.colors.background,
  }

  $: mainStyle = {
    maxWidth: '52em',
    bg: $theme.colors.background,
    p: '4rem',
    mx: 'auto',
    mt: '3.25rem',
  }

  $: addGlobal($theme)

  onMount(() => {
    //removeSSR()
    ssr = false
  })
</script>

<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>

<Box style={bodyStyle}>
  <Nav {segment} theme={$theme} />
  <Section as="main" theme={$theme} style={mainStyle} {ssr}>
    <Link
      on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}
    >
      {$theme.mode === 'light' ? 'to dark mode' : 'to light mode'}
    </Link>
    <slot />
  </Section>
</Box>
<Icons />
<SSR theme={$theme} active={ssr} />

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
