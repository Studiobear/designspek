<script>
  import { styled } from '@studiobear/svelte-system-ui'
  // import theme from '../theme'

  let div
  export let theme = $$props.theme || {}
  export let style = {}
  $: compStyles = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    ...style,
  }
  let role
  $: console.log('Box', theme, style, compStyles, $$props)
</script>

<div bind:this={div} on:click use:styled={[compStyles, $theme]}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
