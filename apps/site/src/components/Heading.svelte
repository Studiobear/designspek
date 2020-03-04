<script>
  import { styled } from '@studiobear/svelte-system-ui'
  import theme from '../theme'

  export let as = 'h1'
</script>

{#if !as || as === 'h1'}
  <h1 use:styled={[$$props, $theme]}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 use:styled={[$$props, $theme]}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 use:styled={[$$props, $theme]}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 use:styled={[$$props, $theme]}>
    <slot />
  </h4>
{/if}
