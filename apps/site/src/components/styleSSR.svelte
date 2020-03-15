<script>
  // import { onMount } from 'svelte'
  import { extractCss } from '@studiobear/designspek'
  export let theme = $$props.theme || {}
</script>

<svelte:head>
  {@html extractCss(theme)}
</svelte:head>
