<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let colspan = 1
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('TD', style, theme, compStyles, styleProps)
</script>

<td {colspan} {...styleProps}>
  <slot />
</td>
