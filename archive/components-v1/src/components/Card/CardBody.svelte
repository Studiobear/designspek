<script>
  import Box from '../Box.svelte'

  export let style = {}
  let compStyles = {
    ...style,
  }
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
