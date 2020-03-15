import { action } from '@storybook/addon-actions'

import SVG from '../SVG.svelte'
import svgView from './views/svgView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'SVG',
  component: SVG,
}

export const noContent = () => ({
  Component: SVG,
})

export const withSVGContent = () => ({
  Component: svgView,
  props: {
    viewBox: '0 0 220 40',
    theme: theme,
  },
})

export const withFillProp = () => ({
  Component: svgView,
  props: {
    viewBox: '0 0 220 40',
    fill: basic.colors.primary,
    theme: theme,
  },
})

export const withStroke = () => ({
  Component: svgView,
  props: {
    viewBox: '0 0 220 40',
    style: {
      f: 'none',
      strokeWidth: '3',
      strokeOpacity: '0.3',
      strokeLinecap: 'round',
      s: basic.colors.secondary,
    },
    theme: theme,
  },
})

export const withStyleSize = () => ({
  Component: svgView,
  props: {
    viewBox: '0 0 220 40',
    style: {
      f: basic.colors.secondary,
      w: '220px',
      h: '40px',
    },
    theme: theme,
  },
})
