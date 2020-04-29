import { action } from '@storybook/addon-actions'

import Form from '../Form'
import FormView from './views/formView.svelte'

import { theme, basic } from '../../theme'

export default {
  title: 'Form',
  component: Form,
}

export const noFields = () => ({
  Component: FormView,
  props: {
    fields: [],
  },
})

export const textInputs = () => ({
  Component: FormView,
  props: {
    fields: [
      { name: 'defaultType', label: 'Default input type', value: "is 'text'" },
      { name: 'firstName', label: 'First Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'url', label: 'URL', type: 'url' },
      { name: 'telephone', label: 'Phone', type: 'tel' },
      { name: 'search', label: 'Search', type: 'search' },
    ],
  },
})

export const booleanInputs = () => ({
  Component: FormView,
  props: {
    fields: [
      { name: 'checkbox1', label: 'checkbox 1', type: 'checkbox' },
      { name: 'checkbox2', label: 'checkbox 2', type: 'checkbox' },
      { name: 'radio', label: 'radio 1', type: 'radio' },
      { name: 'radio', label: 'radio 2', type: 'radio' },
      { name: 'radio', label: 'radio 3', type: 'radio' },
    ],
  },
})

export const numberInputs = () => ({
  Component: FormView,
  props: {
    fields: [
      {
        name: 'number',
        label: 'number (min:5, max: 15, step:5)',
        type: 'number',
        placeholder: '10',
        min: 5,
        step: 5,
        max: 15,
      },
      {
        name: 'range',
        label: 'range (min:0, max: 10, step:1)',
        type: 'range',
        min: 0,
        step: 1,
        max: 10,
      },
    ],
  },
})

export const withPlaceholderAndDefaultValue = () => ({
  Component: FormView,
  props: {
    fields: [
      {
        name: 'name',
        label: 'Placeholder',
        placeholder: 'This is plaeholder text, type to change...',
      },
      { name: 'ttex', label: 'Default', value: 'This is a default value' },
    ],
  },
})

export const hiddenInput = () => ({
  Component: FormView,
  props: {
    fields: [
      {
        name: 'name',
        label: 'Hidden Input (view source to verify)',
        value: 'This input is hidden',
        type: 'hidden',
      },
    ],
  },
})

export const inputOutsideLabel = () => ({
  Component: FormView,
  props: {
    fields: [
      {
        name: 'name',
        label: 'The input is not inside label element',
        value: 'inLabel: false',
        inLabel: false,
      },
    ],
  },
})

export const labelAfterInput = () => ({
  Component: FormView,
  props: {
    fields: [
      {
        name: 'name',
        label: 'Label after input',
        value: 'afterLabel: false',
        afterLabel: false,
      },
    ],
  },
})

export const withValidation = () => ({
  Component: FormView,
  props: {
    fields: [
      { name: 'name', label: 'Name', validate: val => val.length > 0 },
      { name: 'email', label: 'Email' },
    ],
  },
})
