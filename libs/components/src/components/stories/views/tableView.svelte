<script>
  import { Table, THead, TBody, TR, TD } from '../../Table'
  import Box from '../../Box.svelte'
  import theme from '../../../theme'

  export let tableContainer = {}
  export let tableStyle = {}
  export let theadStyle = {}
  export let thStyle = {}
  export let tdStyle = {}
  export let tdMultiStyle = {}
  export let colEven = {}
  $: style1 = {
    bg: $theme.colors.primary,
    txtAlign: 'center',
  }
  $: style2 = {
    color: $theme.colors.secondary,
    fontWeight: 700,
  }
</script>

<Box style={tableContainer}>
  <Table style={tableStyle}>
    <TR as="caption">This is a TR as a caption inside a table</TR>
    <THead as="colGroup">
      <THead as="col" />
      <THead as="col" style={colEven} />
      <THead as="col" />
    </THead>
    <THead as="thead" style={theadStyle}>
      <TR>
        <THead as="th" style={thStyle}>Data 1</THead>
        <THead as="th" style={thStyle}>Data 2</THead>
        <THead as="th" style={thStyle}>Data 3</THead>
      </TR>
    </THead>
    <TBody>
      <TR>
        <TD style={tdMultiStyle}>1</TD>
        <TD style={tdStyle}>2</TD>
        <TD style={tdStyle}>3</TD>
      </TR>
      <TR>
        <TD style={tdMultiStyle}>4</TD>
        <TD style={[style1, style2]}>5</TD>
        <TD style={tdStyle}>6</TD>
      </TR>
      <TR>
        <TD style={tdMultiStyle}>7</TD>
        <TD style={tdStyle}>8</TD>
        <TD style={tdStyle}>9</TD>
      </TR>
    </TBody>
  </Table>
</Box>
