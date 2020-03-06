<script>
  import { styled } from '@studiobear/designspek'
  import Box from './Box.svelte'

  export let style
  export let theme = $$props.theme || {}
  let compStyles = {
    d: 'flex',
    ...style,
  }
  // console.log('Flex', compStyles, $$props)
</script>

<Box style={compStyles} theme={$theme}>
  <slot />
</Box>
