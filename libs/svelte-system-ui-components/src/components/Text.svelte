<script>
  import { styled } from 'svelte-system-ui'
  import theme from '../theme'

  export let style = {}
  export let as = 'p'
</script>

{#if !as || as === 'p'}
  <p use:styled={[style, $theme]}>
    <slot />
  </p>
{/if}
