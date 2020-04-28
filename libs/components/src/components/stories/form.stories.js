import { action } from '@storybook/addon-actions'

import Form from '../Form'
import FormView from './views/formView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Form',
  component: Form,
}

export const noContent = () => ({
  Component: Form,
})
