<script>
  import { Flex } from '@studiobear/designspek-components'

  export let style = {}
  let compStyles = {
    justC: 'stretch',
    align: 'center',
    ...style,
  }
</script>

<Flex {...$$props} style={compStyles}>
  <slot />
</Flex>
