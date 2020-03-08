<script>
  import { styled } from '@studiobear/designspek'
  import { theme } from '../theme'

  import { Box, Heading, Counter } from '@studiobear/designspek-components'

  let primary = $theme.colors ? $theme.colors.primary : '#333'

  $: hStyle = {
    color: primary,
    lineHeight: '2em',
  }
</script>

<svelte:head>
  <title>Design</title>
</svelte:head>

<Heading as="h1" style={hStyle}>Great success!</Heading>

<figure>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<Heading as="h3">Local library component demo</Heading>
<p>
  Our counter component from sample Svelte component Library from root dir:
  `/libs/my-svelte-component-library`
</p>
<div class="component-container">
  <Counter />
</div>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>

<Box bg={'primary'} color={'secondary'}>{$theme.colors.primary}</Box>
