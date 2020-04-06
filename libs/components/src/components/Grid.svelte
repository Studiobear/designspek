<script>
  import Box from './Box.svelte'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let colgap = ''
  export let rowgap = ''
  export let gridgap = '5px 10px'
  export const container = false
  export const inline = false
  let d
  if ($$props.container) d = { d: 'grid' }
  if ($$props.inline) d = { d: 'inlgrid' }
  if (typeof $$props.container === 'string') d = { d: $$props.container }
  if (typeof colngap === ('number' || 'string')) gridgap = ''
  if (typeof rowgap === ('number' || 'string')) gridgap = ''
  const defaultStyle = [
    {
      colgap,
      rowgap,
      gridgap,
      ...d,
    },
  ]
  $: compStyles = defaultStyle.concat(style)
  // console.log('Grid', d, compStyles, $$props)
</script>

<Box style={compStyles} {theme} {ssr}>
  <slot />
</Box>
