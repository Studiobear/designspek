<script>
  import { styled } from 'svelte-system-ui'
  import theme from '../theme'
  export let style = {}
  export let as = 'h1'
</script>

{#if !as || as === 'h1'}
  <h1 use:styled={[style, $theme]}>
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
{:else if as === 'h5'}
  <h5 use:styled={[$$props, $theme]}>
    <slot />
  </h5>
{:else if as === 'h6'}
  <h6 use:styled={[$$props, $theme]}>
    <slot />
  </h6>
{/if}
