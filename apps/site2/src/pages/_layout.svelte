<script>
  import { addGlobal } from '@studiobear/designspek'
  import { theme } from '../styles'

  $: addGlobal($theme)
</script>

<slot />
