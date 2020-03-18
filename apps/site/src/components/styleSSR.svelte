<script>
  // import { onMount } from 'svelte'
  import { extractCss } from '@studiobear/designspek'
  export let theme = $$props.theme || {}
  let active
</script>

<svelte:head>
  {@html active ? extractCss(theme) : ''}
</svelte:head>
