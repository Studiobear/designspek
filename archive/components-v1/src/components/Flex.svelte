<script>
  import { styled } from '@studiobear/designspek'
  import Box from './Box.svelte'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  $: compStyles = {
    d: 'flex',
    ...style,
  }

  // console.log('Flex', compStyles, $$props)
</script>

<Box {theme} {critical} style={compStyles}>
  <slot />
</Box>
