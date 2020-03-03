<script>
  import Grid from '../../Grid.svelte'

  export let style
  export let style1
  export let style2
  export let style3
  export let style4
  export let gridText1 = '1'
  export let gridText2 = '2'
  export let gridText3 = '3'
  export let gridText4 = '4'
</script>

<Grid {...$$props} {style}>
  <Grid style={style1}>{gridText1}</Grid>
  <Grid style={style2}>{gridText2}</Grid>
  <Grid style={style3}>{gridText3}</Grid>
  <Grid style={style4}>{gridText4}</Grid>
</Grid>
