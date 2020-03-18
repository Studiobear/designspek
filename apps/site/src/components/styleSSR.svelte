<script>
  // import { onMount } from 'svelte'
  import { extractCss } from '@studiobear/designspek'
  export let theme = $$props.theme || {}
  export let active
</script>

<svelte:head>
  {@html extractCss(theme, active)}
</svelte:head>
