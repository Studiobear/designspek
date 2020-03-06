<script>
  import { styled } from '@studiobear/svelte-system-ui'

  export let style = {}
  export let theme = $$props.theme || {}
  export let as = 'h1'
  $: maybeTheme =
    theme.subscribe && typeof theme.subscribe === 'function' ? theme : null
</script>

{#if !as || as === 'h1'}
  <h1 use:styled={[style, $maybeTheme]}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 use:styled={[$$props, $maybeTheme]}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 use:styled={[$$props, $maybeTheme]}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 use:styled={[$$props, $maybeTheme]}>
    <slot />
  </h4>
{:else if as === 'h5'}
  <h5 use:styled={[$$props, $maybeTheme]}>
    <slot />
  </h5>
{:else if as === 'h6'}
  <h6 use:styled={[$$props, $maybeTheme]}>
    <slot />
  </h6>
{/if}
