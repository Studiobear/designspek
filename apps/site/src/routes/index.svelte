<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import { theme } from '../theme'

  // import { Box, Heading, Counter } from '@studiobear/designspek-components'

  let Box, Heading, Counter

  $: primary = $theme.colors ? $theme.colors.primary : '#333'

  $: hStyle = {
    color: primary,
    lineHeight: '2em',
  }

  onMount(async () => {
    const module = await import('@studiobear/designspek-components')
    Box = module.Box
    Heading = module.Heading
    Counter = module.Counter
  })
</script>

<svelte:head>
  <title>Design</title>
</svelte:head>

<svelte:component this={Heading} as="h1" style={hStyle}>
  Great success!
</svelte:component>

<figure>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<svelte:component this={Heading} as="h3">
  Local library component demo
</svelte:component>
<p>
  Our counter component from sample Svelte component Library from root dir:
  `/libs/my-svelte-component-library`
</p>
<div class="component-container">
  <svelte:component this={Counter} />
</div>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>

<svelte:component this={Box} bg={'primary'} color={'secondary'}>
  {primary}
</svelte:component>
