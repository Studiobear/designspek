<script>
  import { onMount } from 'svelte'
  import { addGlobal, styled } from '@studiobear/designspek'
  import { googleFonts, theme } from '../theme'

  // import { Section, Button, Box } from '@studiobear/designspek-components'
  import { Nav } from '../components'

  let Section, Button, Box

  // $: background = $theme.colors.background || '#fff'
  export let segment
  $: bodyStyle = {
    backgroundColor: $theme.colors.background,
  }
  $: mainStyle = {
    position: 'relative',
    maxWidth: '56em',
    backgroundColor: $theme.colors.background,
    p: 3,
    m: '0 auto',
    boxSizing: 'border-box',
  }
  // $: console.log('_layout: ', $theme, theme)

  if (process.browser) {
    addGlobal($theme)
  }

  onMount(async () => {
    const module = await import('@studiobear/designspek-components')
    Box = module.Box
    Section = module.Section
    Button = module.Button
  })
</script>

<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>
<svelte:component this={Box} theme={$theme} style={bodyStyle}>
  <Nav {segment} />

  <svelte:component this={Section} as="main" style={mainStyle}>
    <svelte:component
      this={Button}
      on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}
      text={$theme.mode === 'light' ? 'to dark mode' : 'to light mode'} />
    <slot />
  </svelte:component>
</svelte:component>
