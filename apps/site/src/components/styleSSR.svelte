<script>
  import { onMount } from 'svelte'
  import { extractCss, addGlobal } from '@studiobear/designspek'

  let styleTag = extractCss()

  onMount(() => {
    styleTag = extractCss()
    // console.log(styleTag)
    addGlobal(styleTag, false)
  })
</script>
