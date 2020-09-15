<script lang="ts">
  import { styled } from '@studiobear/designspek'

  let div: any
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
    ...style,
  ]
  let compStyle: any
  let styleProps: any
  $: compStyles = styled(defaultStyle, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

<div bind:this={div} on:click {...styleProps}>
  <slot />
</div>
