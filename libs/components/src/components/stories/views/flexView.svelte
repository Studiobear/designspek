<script>
  import Flex from '../../Flex.svelte'
  import Box from '../../Box.svelte'

  export let style
  export let style1
  export let style2
  export let style3
  export let boxText1 = '1'
  export let boxText2 = '2'
  export let boxText3 = '3'
</script>

<Flex {style}>
  <Box style={style1}>{boxText1}</Box>
  <Box style={style2}>{boxText2}</Box>
  <Box style={style3}>{boxText3}</Box>
</Flex>
