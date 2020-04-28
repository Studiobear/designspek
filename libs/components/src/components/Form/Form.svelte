<script>
  import { styled } from '@studiobear/designspek'

  let div
  export let fields = $$props.fields || []
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)

  if (fields && fields.length > 0) {
  }
</script>

<form bind:this={div} on:click {...styleProps}>
  <slot />
</form>
