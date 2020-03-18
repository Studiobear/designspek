import { render, fireEvent } from '@testing-library/svelte'
import Box from '../Box.svelte'
import BoxView from '../stories/views/boxView.svelte'
import { theme, basic } from '../../theme'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Box', () => {
  test('should render component correctly ', () => {
    const { getByText } = render(BoxView)

    expect(getByText('I am a box!')).toBeInTheDocument()
  })

  test('to change background color from primary to secondary on hover', async () => {
    const { getByText } = render(BoxView, {
      style: {
        bg: basic.colors.primary,
        _hover: { bg: basic.colors.secondary },
      },
      theme,
    })
    const box = getByText('I am a box!')
    expect(box).toHaveStyle('background-color: rgb(0, 119, 204)')
    await fireEvent.mouseOver(box)
    expect(box).toHaveStyle('background-color: rgb(0, 119, 204)')
  })

  test('to not have undeclared props', async () => {
    const { getByText } = render(BoxView, {
      bad: 'prop',
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = getByText('I am a box!')
    expect(box).not.toHaveAttribute('bad')
  })

  test('to have no a11y violations', async () => {
    const { getByText } = render(BoxView, {
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = await axe(getByText('I am a box!'))
    expect(box).toHaveNoViolations()
  })
})
