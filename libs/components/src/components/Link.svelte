<script>
  import { styled } from '@studiobear/designspek'
  import theme from '../theme'

  export let style = {}
  export let as = 'a'
  export let href = ''
  export let target = undefined
  /*
  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
  */

  $: maybeTheme =
    theme.subscribe && typeof theme.subscribe === 'function' ? theme : null
</script>

{#if !as || as === 'a'}
  <a {href} {target} use:styled={[style, maybeTheme]}>
    <slot />
  </a>
{/if}
