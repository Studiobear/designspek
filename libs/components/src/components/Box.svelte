<script>
  import { styled } from '@studiobear/designspek'
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
  $: maybeTheme =
    theme.subscribe && typeof theme.subscribe === 'function' ? theme : null
  $: console.log(
    'Box',
    theme,
    style,
    compStyles,
    $$props,
    maybeTheme,
    // $maybeTheme,
  )
</script>

<div bind:this={div} on:click use:styled={[compStyles, maybeTheme]}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
