<script>
  import { addGlobal } from '../../../../libs/core/dist/main.modern.module'
  import { theme } from '../styles'

  $: addGlobal($theme)
</script>

<slot />
