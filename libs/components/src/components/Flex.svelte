<script>
  import { styled } from '@studiobear/designspek'
  import Box from './Box.svelte'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const defaultStyle = [
    {
      d: 'flex',
    },
  ]
  $: compStyles = defaultStyle.concat(style)

  // console.log('Flex', compStyles, $$props)
</script>

<Box {theme} {ssr} style={compStyles}>
  <slot />
</Box>
