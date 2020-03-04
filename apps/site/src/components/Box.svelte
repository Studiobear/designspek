<script>
  import { styled } from '@studiobear/svelte-system-ui'
  import theme from '../theme'

  export let as = 'div'
</script>

{#if !as || as === 'div'}
  <div use:styled={[$$props, $theme]}>
    <slot />
  </div>
{:else if as === 'nav'}
  <nav use:styled={[$$props, $theme]}>
    <slot />
  </nav>
{/if}
