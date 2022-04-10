<script>
  import { styled } from '@studiobear/designspek'
  import SVG from './SVG.svelte'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  export let fill
  export let viewBox = '0 0 128 128'
  export let name = 'icon1'
  const defaultStyle = {
    d: 'none',
    ...style,
  }

  $: compStyles = styled(defaultStyle, theme, critical)
  // $: console.log('SVG:', style, compStyles)
</script>

<SVG {fill} {theme} {viewBox} {...$$props} {style} {critical}>
  <use xlink:href={`#${name}`} />
</SVG>
