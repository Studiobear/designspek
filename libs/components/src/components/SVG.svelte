<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let fill = '#000'
  export let viewBox = '0 0 32 32'
  // $: console.log('SVG: ', $$props)
  $: compStyles = styled(style, theme)
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {fill} class={compStyles}>
  <slot />
</svg>
