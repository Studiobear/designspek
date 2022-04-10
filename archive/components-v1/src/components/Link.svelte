<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let critical = $$props.critical || style.critical || false
  export let as = 'a'
  export let href = ''
  export let target = undefined
  export let preventDefault = false

  const defaultStyle = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    ...style,
  }
  $: compStyles = styled(defaultStyle, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
  // $: console.log('Link: ', style)
</script>

{#if preventDefault}
  <a {href} {target} on:click|preventDefault {...styleProps}>
    <slot />
  </a>
{:else if !as || as === 'a'}
  <a {href} {target} on:click {...styleProps}>
    <slot />
  </a>
{:else}
  <button on:click {...styleProps}>
    <slot />
  </button>
{/if}
