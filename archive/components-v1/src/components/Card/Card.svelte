<script>
  import Box from '../Box.svelte'

  export let style = $$props.style || {}
  export let theme = $$props.theme || { colors: { muted: '#C0D0D1' } }
  let compStyles = {
    mx: '0.5rem',
    my: '0.5rem',
    brd: '1px solid',
    brdCol: theme.colors.muted,
    borderRadius: '0.5rem',
    px: '1rem',
    py: '1rem',
    ...style,
  }
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
