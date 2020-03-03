<script>
  import { styled } from 'svelte-styled-system'
  import { theme } from '../theme'

  import { Nav, Button, Box } from '../components'

  export let segment
  export let mode = 'basic'
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main use:styled={[$$props, $theme]}>
  <Button
    bg={'colors.primary'}
    p="space.xs"
    color={'colors.secondary'}
    on:click={() => {
      mode === 'basic' ? theme.dark() : theme.reset()
      return (mode = mode === 'basic' ? 'dark' : 'basic')
    }}>
    click to invert me!
  </Button>
  <slot />
</main>
