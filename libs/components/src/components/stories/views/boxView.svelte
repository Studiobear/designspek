<script lang="ts">
  import Box from '../../Box.svelte'

  export let style = {}
  export let boxText = 'I am a box!'
</script>

<Box {...$$props} {style}>{boxText}</Box>
