<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  export let as = 'h1'
  $: compStyles = styled(style, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
  // $: console.log('Heading: ', $$props, ssr)
</script>

{#if !as || as === 'h1'}
  <h1 {...styleProps}>
    <slot />
  </h1>
{:else if as === 'h2'}
  <h2 {...styleProps}>
    <slot />
  </h2>
{:else if as === 'h3'}
  <h3 {...styleProps}>
    <slot />
  </h3>
{:else if as === 'h4'}
  <h4 {...styleProps}>
    <slot />
  </h4>
{:else if as === 'h5'}
  <h5 {...styleProps}>
    <slot />
  </h5>
{:else if as === 'h6'}
  <h6 {...styleProps}>
    <slot />
  </h6>
{/if}
