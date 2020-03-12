<script>
  // import { onMount } from 'svelte'
  import { addGlobal } from '@studiobear/designspek'
  import { theme } from '../theme'
</script>

<svelte:head>
  {@html addGlobal($theme)}
</svelte:head>
