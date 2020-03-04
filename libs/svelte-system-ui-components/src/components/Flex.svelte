<script>
  import { styled } from '@studiobear/svelte-system-ui'
  import theme from '../theme'
  import Box from './Box.svelte'

  export let style
  let compStyles = {
    d: 'flex',
    ...style,
  }
  // console.log('Flex', compStyles, $$props)
</script>

<Box style={compStyles}>
  <slot />
</Box>
