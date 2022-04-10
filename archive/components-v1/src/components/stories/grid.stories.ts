import { action } from '@storybook/addon-actions'

import GridView from './views/gridView.svelte'

export default {
  title: 'Grid',
  component: GridView,
}

export const withGrid = () => ({
  Component: GridView,
  props: {
    container: true,
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'Parent Grid component sets attribute `container` = true',
    gridText2: 'This uses',
    gridText3: 'CSS',
    gridText4: 'Grid',
  },
})

export const withGridInline = () => ({
  Component: GridView,
  props: {
    inline: true,
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'Parent Grid component sets attribute `container` = true',
    gridText2: 'This uses',
    gridText3: 'CSS',
    gridText4: 'Grid',
  },
})

export const withGridGap = () => ({
  Component: GridView,
  props: {
    container: true,
    gridgap: ['2rem', '3rem'],
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'CSS',
    gridText4: 'Grid',
  },
})

export const withGridColumnAndRowGap = () => ({
  Component: GridView,
  props: {
    container: true,
    colgap: '5rem',
    rowgap: '2rem',
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'CSS',
    gridText4: 'Grid',
  },
})

export const withGridTemplateNames = () => ({
  Component: GridView,
  props: {
    container: true,
    style: {
      tempcols: '[first] 10em [line2] auto [end]',
      temprows: '[row1-start] 5em [row1-end] auto [row-end]',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: '10em | 5em',
    gridText2: 'auto | 5em',
    gridText3: '10em | auto',
    gridText4: 'auto | auto',
  },
})

export const withResponsiveGridTemplateNames = () => ({
  Component: GridView,
  props: {
    container: true,
    style: {
      tempcols: [
        '[first] 10em [line2] auto [end]',
        '[first] auto [line2] 20em [end]',
        '[first] 1fr [line2] 1fr [end]]',
      ],
      temprows: [
        '[row1-start] 5em [row1-end] auto [row-end]',
        '[row1-start] auto [row1-end] 10em [row-end]',
        '[row1-start] 1fr [row1-end] 1fr [row-end]',
      ],
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'Resize',
    gridText2: 'screen',
    gridText3: 'to change',
    gridText4: 'grid dimensions',
  },
})

export const withGridTemplateAreas = () => ({
  Component: GridView,
  props: {
    container: true,
    style: {
      tempcols: [
        '[first] 1fr [end]',
        '[first] 1fr [line2] 25% [end]',
        '[first] 30% [line2] 1fr [end]',
      ],
      temprows: [
        '[row1-start] 8em [row1-end] 5em [row2-end] 20em [row3-end] 12em [row-end]',
        '[row1-start] 5em[row1-end] 10em [row2-end] 5em [row-end]',
        '[row1-start] 1fr[row1-end] 10em [row2-end] 1fr [row-end]',
      ],
      gridareas: [
        '"header" "sidebar" "main" "footer"',
        '"header header" "main sidebar" "footer footer"',
        '"header header" "sidebar main" "footer footer"',
      ],
    },
    style1: {
      area: 'header',
      p: '2rem',
      bg: 'primary',
      color: 'background',
      textAlign: 'center',
    },
    style2: {
      area: 'sidebar',
      p: '2rem',
      bg: 'secondary',
      color: 'background',
    },
    style3: { area: 'main', p: '2rem', bg: '#ddd', color: 'primary' },
    style4: {
      area: 'footer',
      p: '2rem',
      bg: 'primary',
      color: 'background',
      textAlign: 'center',
    },
    gridText1: 'header',
    gridText2: 'sidebar',
    gridText3: 'main',
    gridText4: 'footer',
  },
})

export const withGridJustifyItems = () => ({
  Component: GridView,
  props: {
    container: true,
    gridGap: '2rem',
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
      just: 'center',
    },
    style1: { p: '2rem', bg: 'secondary', color: 'background' },
    style2: { p: '2rem', bg: 'secondary', color: 'background' },
    style3: { p: '2rem', bg: 'secondary', color: 'background' },
    style4: { p: '2rem', bg: 'secondary', color: 'background' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'justify-items',
    gridText4: 'center',
  },
})

export const withGridAlignItems = () => ({
  Component: GridView,
  props: {
    container: true,
    gridGap: '2rem',
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
      align: 'center',
      height: '20em',
    },
    style1: {
      p: '2rem',
      bg: 'secondary',
      color: 'background',
      txtalign: 'right',
    },
    style2: { p: '2rem', bg: 'secondary', color: 'background' },
    style3: {
      p: '2rem',
      bg: 'secondary',
      color: 'background',
      txtalign: 'right',
    },
    style4: { p: '2rem', bg: 'secondary', color: 'background' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'align-items',
    gridText4: 'center',
  },
})

export const withGridPlaceItems = () => ({
  Component: GridView,
  props: {
    container: true,
    gridGap: '2rem',
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
      place: 'center start',
      height: '20em',
    },
    style1: {
      p: '2rem',
      bg: 'secondary',
      color: 'background',
      txtalign: 'right',
    },
    style2: { p: '2rem', bg: 'secondary', color: 'background' },
    style3: {
      p: '2rem',
      bg: 'secondary',
      color: 'background',
      txtalign: 'right',
    },
    style4: { p: '2rem', bg: 'secondary', color: 'background' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'align-items',
    gridText4: 'center',
  },
})

/*
export const withGridJustifyItems = () => ({
  Component: GridView2,
  props: {
    container: true,
    gridGap: '2rem',
    style: {
      tempcols: '1fr 1fr',
      temprows: 'auto auto',
      p: '2rem',
      brd: '1px solid',
      brdCol: 'primary',
      just: 'center',
    },
    style1: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style2: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style3: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    style4: { p: '2rem', brd: '1px solid', brdCol: 'secondary' },
    boxStyle1: { p: 2, bg: 'secondary', color: 'background' },
    boxStyle2: { p: 2, bg: 'secondary', color: 'background' },
    boxStyle3: { p: 2, bg: 'secondary', color: 'background' },
    boxStyle4: { p: 2, bg: 'secondary', color: 'background' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'justify-items',
    gridText4: 'center',
  },
})
*/
