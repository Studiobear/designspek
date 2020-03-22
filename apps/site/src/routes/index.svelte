<script>
  import { onMount } from 'svelte'
  import { styled, removeSSR } from '@studiobear/designspek'
  import { Box, Heading, Counter } from '@studiobear/designspek-components'

  import { theme } from '../theme'
  import { SSR, Loading } from '../components'

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
    scrollBehavior: 'smooth',
    borderSpacing: 0,
    objectFit: 'auto',
    tableLayout: 'fitted',
    boxDecorationBreak: 'auto',
    shapeMargin: 0,
    theme: $theme,
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
  $: console.log('index:', $theme)
  $: table = styled(
    {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      overflowX: 'auto',
      w: 'fit-content',
      maxw: '100%',
      scrollBehavior: 'smooth',
      borderSpacing: 0,
      objectFit: 'auto',
      tableLayout: 'fitted',
      boxDecorationBreak: 'auto',
      shapeMargin: 0,
    },
    $theme,
  )

  $: tableHeader = styled(
    {
      bg: $theme.colors.muted,
    },
    $theme,
  )
  $: th = styled(
    {
      color: $theme.colors.secondary,
    },
    $theme,
  )

  $: td = styled(
    {
      color: $theme.colors.text,
    },
    $theme,
  )

  onMount(() => {
    removeSSR()
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

<Loading theme={$theme} />

<Box style={boxStyle}>{$theme.colors.primary}</Box>
<Box style={{ overflowX: 'scroll' }}>
  <table class={table}>
    <thead class={tableHeader}>
      <tr>
        <th class={th}>Desc1</th>
        <th class={th}>Desc2</th>
        <th class={th}>Desc3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class={td}>1</td>
        <td class={td}>2</td>
        <td class={td}>3</td>
      </tr>
      <tr>
        <td class={td}>1</td>
        <td class={td}>2</td>
        <td class={td}>3</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>
</Box>

<SSR theme={$theme} />
