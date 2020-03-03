import { action } from '@storybook/addon-actions'

import ThemeView from './views/themeView.svelte'

export default {
  title: 'Theme',
  component: ThemeView,
}

export const themeTest = () => ({
  Component: ThemeView,
  props: {
    style: {
      fontFamily: 'body',
    },
  },
})
