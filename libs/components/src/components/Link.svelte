<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  export let as = 'a'
  export let href = ''
  export let target = undefined
  // $: console.log('Link: ', style)
</script>

{#if !as || as === 'a'}
  <a {href} {target} use:styled={[style, theme]}>
    <slot />
  </a>
{/if}
