<script>
  import { styled } from '@studiobear/designspek'
  // import theme from '../theme'

  let div
  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  $: compStyles = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    ...style,
  }
</script>

<div bind:this={div} on:click use:styled={[compStyles, theme]}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
