import { action } from '@storybook/addon-actions'

import Box from '../Box.svelte'
import BoxView from './views/boxView.svelte'
import BoxViewChildren from './views/boxViewChildren.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Box',
  component: Box,
}

export const noContent = () => ({
  Component: Box,
})

export const withText = () => ({
  Component: BoxView,
  props: {
    boxText: 'Hi!!!',
    theme: theme,
  },
})

export const withBackground = () => ({
  Component: BoxView,
  props: {
    style: {
      bg: basic.colors.primary,
    },
    theme: theme,
    boxText: 'Box with theme primary color background',
  },
})

export const withColorPrimary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: basic.colors.primary,
    },
    theme: theme,
    boxText: 'Box with theme primary color text',
  },
})

export const withColorSecondary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: basic.colors.secondary,
    },
    theme: theme,
    boxText: 'Box with theme secondary color text',
  },
})

export const withPaddingLarge = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 4,
      bg: 'primary',
      color: 'background',
    },
    theme: theme,
    boxText: 'Box with large padding',
  },
})

export const withBorder = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 4,
      brd: `1px solid`,
      brdCol: 'primary',
    },
    theme: theme,
    boxText: 'Box with border',
  },
})
export const withMultipleClasses = () => ({
  Component: BoxView,
  props: {
    style: [
      {
        color: basic.colors.secondary,
      },
      { fontSize: '2rem' },
    ],
    theme: theme,
    boxText:
      'Box styled with two classes + default class (or rather an array of style objects]',
  },
})

export const withDisplayBlock = () => ({
  Component: BoxViewChildren,
  props: {
    theme: theme,
    style: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style1: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'primary' },
    boxText1: 'Just nested',
    boxText2: 'but not using flex;',
    boxText3: 'default displays as "block"',
  },
})

export const withDisplayInline = () => ({
  Component: BoxViewChildren,
  props: {
    theme: theme,
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    style3: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    boxText1: 'Just nested',
    boxText2: 'but not using flex;',
    boxText3: 'set to display as "inline"',
  },
})
