<script>
  import { extractCss } from '@studiobear/designspek'
  export let theme = $$props.theme || {}
  export let active = false
</script>

<svelte:head>
  {@html extractCss(theme, active)}
</svelte:head>
