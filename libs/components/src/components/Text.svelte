<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'p'
</script>

{#if !as || as === 'p'}
  <p use:styled={[style, theme]}>
    <slot />
  </p>
{/if}
