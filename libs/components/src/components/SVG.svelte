<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let fill = '#000'
  export let viewBox = '0 0 32 32'
  // $: console.log('SVG: ', $$props)
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {fill} {...styleProps}>
  <slot />
</svg>
