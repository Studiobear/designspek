<script>
  import { styled } from '@studiobear/designspek'
  import theme from '../theme'

  export let style = {}
  export let as = 'p'
  $: maybeTheme =
    theme.subscribe && typeof theme.subscribe === 'function' ? theme : null
</script>

{#if !as || as === 'p'}
  <p use:styled={[style, maybeTheme]}>
    <slot />
  </p>
{/if}
