<script>
  import { Table, THead, TBody, TR, TD } from '../../Table'
  import Box from '../../Box.svelte'

  export let tableContainer = {}
  export let tableStyle = {}
  export let theadStyle = {}
  export let thStyle = {}
  export let tdStyle = {}
  export let colEven = {}
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
        <TD style={tdStyle}>1</TD>
        <TD style={tdStyle}>2</TD>
        <TD style={tdStyle}>3</TD>
      </TR>
      <TR>
        <TD style={tdStyle}>4</TD>
        <TD style={tdStyle}>5</TD>
        <TD style={tdStyle}>6</TD>
      </TR>
      <TR>
        <TD style={tdStyle}>7</TD>
        <TD style={tdStyle}>8</TD>
        <TD style={tdStyle}>9</TD>
      </TR>
    </TBody>
  </Table>
</Box>
