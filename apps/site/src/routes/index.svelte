<script>
  import { theme } from '../theme'
  import { SSR } from '../components'

  import { Box, Heading, Counter } from '@studiobear/designspek-components'
  // let primary = $$props.theme.colors ? $$props.theme.colors.primary : '#333'
  $: h1 = {
    color: $theme.colors.primary,
    lineHeight: '2rem',
    fontSize: ['5rem', '1rem', '3rem'],
  }
  $: h3Style = {
    color: $theme.colors.secondary,
    lineHeight: '2rem',
    fontSize: ['3rem', '.5rem', '1rem'],
  }

  $: boxStyle = {
    color: 'primary',
    theme: $theme,
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

<Box style={boxStyle}>{$theme.colors.primary}</Box>

<SSR theme={$theme} />
