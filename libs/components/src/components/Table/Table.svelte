<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let fixed = true

  const defaultStyle = [
    {
      borderCollapse: 'collapse',
      tableLayout: fixed ? 'fixed' : 'auto',
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

<table {...styleProps}>
  <slot />
</table>
