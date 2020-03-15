import { action } from '@storybook/addon-actions'

import FlexView from './views/flexView.svelte'

export default {
  title: 'Flex',
  component: FlexView,
}

export const withFlex = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: 'Nested',
    boxText2: 'in parent',
    boxText3: 'using flex',
  },
})

export const withFlexColumn = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'column',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Nested',
    boxText2: '2: in flex parent',
    boxText3: '3: flex-direction: column',
  },
})

export const withFlexRowReverse = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'row-reverse',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Nested',
    boxText2: '2: in flex parent',
    boxText3: '3: flex-direction: row-reverse',
  },
})

export const withFlexOrder = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'column',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '1',
    },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '2',
    },
    style3: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '0',
    },
    boxText1: '1: Nested (order: 1)',
    boxText2: '2: in flex parent (order: 2)',
    boxText3: '3: using order (order: 0) ',
  },
})

export const withFlexGrow = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexGrow: '2',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: normal',
    boxText2: '2: I am sooo big',
    boxText3: '3: normal',
  },
})

export const withFlexShrink = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexshr: '2',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    boxText2: '2: I AM SHRUNK-ED. Lorem ipsum dolor sit amet...',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withFlexBasis = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexbas: '50%',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    boxText2: '2: I AM THE BASIS. Lorem ipsum dolor sit amet...',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withAlignItemsAndSelf = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'column',
      align: 'center',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      slf: 'flex-end',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: I want to be different',
    boxText2: '2: just a box',
    boxText3: '3: just a box',
  },
})

export const withFlexWrap = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexWrap: 'wrap',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boxText2: '2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withJustifySpaceBetween = () => ({
  Component: FlexView,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      flexdir: 'row',
      justC: 'space-between',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      slf: 'flex-end',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Stay',
    boxText2: '2: away',
    boxText3: '3: from me',
  },
})

export const withResponsive = () => ({
  Component: FlexView,
  props: {
    style: {
      bg: '#ccc',
      color: 'background',
      flexWrap: 'wrap',
      flexdir: 'row',
      fontSize: ['20px', '15px', '40px'],
    },
    style1: {
      bg: 'red',
      w: [1, 1 / 2, 1 / 3],
      h: '20rem',
    },
    style2: {
      bg: 'blue',
      w: [1, 1 / 2, 1 / 3],
      h: '20rem',
    },
    style3: { bg: 'green', w: [1, 1, 1 / 3], h: '20rem' },
    boxText1: 'Font size',
    boxText2: 'is reponsive',
    boxText3: 'too!',
  },
})
