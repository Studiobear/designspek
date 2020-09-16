<script lang="ts">
  import { styled } from '@studiobear/designspek'

  let div: any
  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  const defaultStyle = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    ...style,
  }
  let compStyle: any
  let styleProps: any
  $: compStyles = styled(defaultStyle, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

<!--
 @component
 **Box** - Designspek: Primitive
  A basic box-model layout component built on the humble 'div'

 - @param: {object} style - an object of CSS & Designspek styles
 - @param: {object} theme - a Designspek theme parsed from a spek
 - @param: {boolean} critical - flag for critical CSS; true returns inline CSS
 - @return {Svelte Component}
-->

<div bind:this={div} on:click {...styleProps}>
  <slot />
</div>
