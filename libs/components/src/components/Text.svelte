<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'p'
  $: compStyles = styled(style, theme)
</script>

{#if !as || as === 'p'}
  <p class={compStyles}>
    <slot />
  </p>
{/if}
