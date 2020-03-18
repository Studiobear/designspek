<script>
  import { styled } from '@studiobear/designspek'

  let div
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  $: compStyles = styled(
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      ...style,
    },
    theme,
  )
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
</script>

<div bind:this={div} on:click {...styleProps}>
  <slot />
</div>
