<script lang="ts">
  import { Box } from '@studiobear/designspek-components'
  export let title: string = $$props.title ?? 'no title'
  let mainStyle
  $: mainStyle = {
    maxWidth: '52em',
    bg: '#ccc',
    p: '4rem',
    mx: 'auto',
    mt: '3.25rem',
  }
</script>

<div class="container p-5 mx-auto lg:mt-24">{title}</div>
<Box style={mainStyle}>
  <slot />
</Box>
