import { action } from '@storybook/addon-actions'

import Icon from '../Icon.svelte'
import iconView from './views/iconView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Icon',
  component: Icon,
}

export const noContent = () => ({
  Component: Icon,
})

export const withFillProp = () => ({
  Component: iconView,
  props: {
    viewBox: '0 0 128 128',
    fill: '#000',
    style: {
      d: 'block',
    },
    theme: theme,
  },
})

export const withStroke = () => ({
  Component: iconView,
  props: {
    viewBox: '0 0 128 128',
    style: {
      f: 'none',
      strokeWidth: '3',
      strokeOpacity: '0.3',
      strokeLinecap: 'round',
      s: basic.colors.text,
    },
    theme: theme,
  },
})

export const withStyleSize = () => ({
  Component: iconView,
  props: {
    viewBox: '0 0 220 40',
    style: {
      f: basic.colors.text,
      w: '220px',
      h: '40px',
    },
    theme: theme,
  },
})
