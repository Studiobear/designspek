import { render, fireEvent } from '@testing-library/svelte'
import CardView from '../stories/views/cardView.svelte'
import { theme, basic } from '../../theme'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Card', () => {
  test('should render component correctly ', () => {
    const { getByText } = render(CardView, {
      cardTitle: 'I am not a box',
      cardBody: 'I swear I am a card'
    })

    expect(getByText('I am not a box')).toBeInTheDocument()
    expect(getByText('I swear I am a card')).toBeInTheDocument()
  })
})
