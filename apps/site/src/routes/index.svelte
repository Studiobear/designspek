<script>
  import { theme } from '../theme'

  import { Box, Heading, Counter } from '@studiobear/designspek-components'
  // let primary = $$props.theme.colors ? $$props.theme.colors.primary : '#333'
  $: h1 = {
    color: $theme.colors.primary,
    lineHeight: '2em',
    fontSize: ['5em', '1em', '3em'],
  }
  $: h3Style = {
    color: $theme.colors.secondary,
    lineHeight: '2em',
    fontSize: ['3em', '.5em', '1em'],
  }

  // console.log('index: ', $$props, theme, $theme)
</script>

<svelte:options immutable={true} />
<svelte:head>
  <title>Design</title>
</svelte:head>

<Heading as="h1" style={h1}>designspek</Heading>

<Heading as="h3" style={h3Style}>Local library component demo</Heading>
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

<Box>{$theme.colors.primary}</Box>
