<script>
  import { styled } from '@studiobear/designspek'
  import Box from './Box.svelte'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  let compStyles = {
    d: 'flex',
    ...style,
  }
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // console.log('Flex', compStyles, $$props)
</script>

<Box {theme} {...styleProps} {...$$props}>
  <slot />
</Box>
