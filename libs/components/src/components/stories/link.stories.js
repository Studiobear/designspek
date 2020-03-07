import { action } from '@storybook/addon-actions'

import Link from '../Link.svelte'
import LinkView from './views/linkView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Link',
  component: Link,
}

export const noContent = () => ({
  Component: Link,
})

export const withText = () => ({
  Component: LinkView,
  props: {
    linkText: 'Hi!!!',
    theme: theme,
  },
})

export const withHref = () => ({
  Component: LinkView,
  props: {
    style: {
      color: 'primary',
    },
    theme: theme,
    linkText: 'I link somewhere',
    href: 'https://designspek.studiobear.co',
  },
})

export const withTargetBlank = () => ({
  Component: LinkView,
  props: {
    style: {
      color: 'primary',
    },
    theme: theme,
    linkText: 'I link somewhere',
    href: 'https://designspek.studiobear.co',
    target: '_blank',
  },
})

export const withHoverAndNoUnderline = () => ({
  Component: LinkView,
  props: {
    style: {
      color: 'primary',
      textDecoration: 'none',
      _hover: {
        color: 'secondary',
        fontWeight: 'bold',
      },
    },
    theme: theme,
    linkText: 'I link somewhere',
    href: 'https://designspek.studiobear.co',
    target: '_blank',
  },
})
