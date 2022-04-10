<script>
  import Flex from '../Flex.svelte'

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
