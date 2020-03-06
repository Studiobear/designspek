<script>
  import { styled } from '@studiobear/svelte-system-ui'
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
