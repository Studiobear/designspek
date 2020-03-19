<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import { Box, Heading, Counter } from '@studiobear/designspek-components'

  import { theme } from '../theme'
  import { SSR } from '../components'

  export let ssr = true
  // let primary = $$props.theme.colors ? $$props.theme.colors.primary : '#333'
  $: h1 = {
    color: $theme.colors.primary,
    lineHeight: '2rem',
    fontSize: '5rem',
  }
  $: h3Style = {
    color: $theme.colors.secondary,
    lineHeight: '3rem',
    fontSize: '3rem',
    txtTran: 'uppercase',
  }

  $: h4Style = {
    color: $theme.colors.highlight,
    lineHeight: '3rem',
    fontSize: '2rem',
    theme: $theme,
  }

  $: boxStyle = {
    color: 'primary',
    theme: $theme,
  }

  console.log('index1: ', $$props, ssr)
  $: console.log('index2: ', $$props, ssr)
  onMount(() => {
    //removeSSR()
    ssr = false
  })
</script>

<svelte:options immutable={true} />
<svelte:head>
  <title>Design</title>
</svelte:head>

<Heading as="h1" style={h1}>designspek</Heading>

<Heading as="h3" style={h3Style}>Local library component demo</Heading>
<Heading as="h4" style={h4Style} {ssr}>
  This Heading has been manually "SSRed"
</Heading>
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
