<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false

  $: compStyles = styled(
    {
      ...style,
    },
    theme,
    ssr,
  )
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

<td {...styleProps}>
  <slot />
</td>
