<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'h1'
  $: compStyles = styled(style, theme)
  // $: console.log('Heading: ', $$props, theme)
</script>

{#if !as || as === 'h1'}
  <h1 class={compStyles}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 class={compStyles}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 class={compStyles}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 class={compStyles}>
    <slot />
  </h4>
{:else if as === 'h5'}
  <h5 class={compStyles}>
    <slot />
  </h5>
{:else if as === 'h6'}
  <h6 class={compStyles}>
    <slot />
  </h6>
{/if}
