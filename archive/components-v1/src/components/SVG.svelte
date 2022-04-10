<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  export let fill = '#000'
  export let viewBox = '0 0 32 32'
  $: compStyles = styled(style, theme, critical)
  // $: console.log('SVG: ', $$props, compStyles)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
</script>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox} {fill} {...styleProps}>
  <slot />
</svg>
