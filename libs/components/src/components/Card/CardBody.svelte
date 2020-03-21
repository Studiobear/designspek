<script>
  import { Box } from '@studiobear/designspek-components'

  export let style = {}
  let compStyles = {
    ...style,
  }
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
