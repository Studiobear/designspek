import { action } from '@storybook/addon-actions'

import Link from '../Link.svelte'
import LinkView from './views/linkView.svelte'
import LinkViewImage from './views/linkViewImage.svelte'

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

export const withImageAndAfter = () => ({
  Component: LinkViewImage,
  props: {
    style: {
      color: 'primary',
      textDecoration: 'none',
      position: 'relative',
      display: 'inline-block',
      w: '300px',
      h: '40px',
      _hover: {
        color: 'secondary',
        fontWeight: 'bold',
        _after: {
          position: 'relative',
          content: '""',
          width: 'calc(100% - 1em)',
          height: '4px',
          backgroundColor: 'rgb(255, 62, 0)',
          display: 'block',
          bottom: '-5px',
        },
      },
    },
    theme: theme,
    linkText: '/ds-horiz.svg',
    href: 'https://designspek.studiobear.co',
    target: '_blank',
  },
})
