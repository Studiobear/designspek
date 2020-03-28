import TableView from './views/tableView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Table',
  component: TableView,
}

export const withStyles = () => ({
  Component: TableView,
  props: {
    tableContainer: {
      overflowX: 'scroll',
      h: '8rem',
      overflow: 'auto',
      maxw: '100vw',
      w: '100%',
    },
    tableStyle: {
      minw: '30rem',
      borderSpacing: 0,
      brd: '1px solid',
      brdCol: '#666',
      color: '#333',
    },
    theadStyle: { brdCol: 'transparent' },
    thStyle: {
      pos: 'sticky',
      t: 0,
      bg: '#999',
      txtAlign: 'center',
      p: '0.5rem',
      bb: '1px solid',
      brdCol: '#666',
    },
    tdStyle: {
      txtAlign: 'center',
      p: '0.5rem',
      br: '1px solid',
      brdCol: '#666',
    },
    colEven: { bg: '#ADA'}
  },
})
