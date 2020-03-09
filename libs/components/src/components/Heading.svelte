<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'h1'
  //$: console.log('Heading: ', $$props, maybeTheme)
</script>

{#if !as || as === 'h1'}
  <h1 use:styled={[style, theme]}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 use:styled={[style, theme]}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 use:styled={[style, theme]}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 use:styled={[style, theme]}>
    <slot />
  </h4>
{:else if as === 'h5'}
  <h5 use:styled={[style, theme]}>
    <slot />
  </h5>
{:else if as === 'h6'}
  <h6 use:styled={[style, theme]}>
    <slot />
  </h6>
{/if}
