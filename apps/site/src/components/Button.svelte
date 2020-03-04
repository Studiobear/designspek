<script>
  import { styled } from '@studiobear/svelte-system-ui'
  import theme from '../theme'
</script>

<button use:styled={[$$props, $theme]} on:click>
  <slot />
</button>
