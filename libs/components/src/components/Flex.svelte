<script>
  import { styled } from '@studiobear/designspek'
  import Box from './BoxSSR.svelte'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  let compStyles = {
    d: 'flex',
    ...style,
  }
  // console.log('Flex', compStyles, $$props)
</script>

<Box style={compStyles} {theme}>
  <slot />
</Box>
