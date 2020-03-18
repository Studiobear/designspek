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
  $: compStyles = {
    colgap,
    rowgap,
    gridgap,
    ...d,
    ...style,
  }
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // console.log('Grid', d, compStyles, $$props)
</script>

<Box {...styleProps} {theme} {...$$props}>
  <slot />
</Box>
