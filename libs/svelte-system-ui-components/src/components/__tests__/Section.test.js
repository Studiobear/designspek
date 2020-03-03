import { render, fireEvent } from '@testing-library/svelte'
import SectionView from '../stories/views/sectionView.svelte'

describe('Section', () => {
  test('should render component correctly ', () => {
    const { getByText } = render(SectionView)

    expect(getByText('I am a section!')).toBeInTheDocument()
  })

  test('may have no role', () => {
    const { getByText } = render(SectionView)

    expect(getByText('I am a section!')).not.toHaveAttribute('role')
  })

  test('default with role is a header', () => {
    const { getByText } = render(SectionView, { role: true })

    expect(getByText('I am a section!')).toHaveAttribute('role', 'banner')
  })

  test('role can be customized with string', () => {
    const { getByText } = render(SectionView, { as: 'footer', role: 'custom' })

    expect(getByText('I am a section!')).toHaveAttribute('role', 'custom')
  })

  test('to pass "as nav" and role prop true', async () => {
    const { getByText } = render(SectionView, {
      as: 'nav',
      role: true,
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    expect(getByText('I am a section!')).toHaveAttribute('role', 'navigation')
  })

  test('to pass "as main" and role prop true', async () => {
    const { getByText } = render(SectionView, {
      as: 'main',
      role: true,
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    expect(getByText('I am a section!')).toHaveAttribute('role', 'main')
  })

  test('to pass "as aside" and role prop true', async () => {
    const { getByText } = render(SectionView, {
      as: 'aside',
      role: true,
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    expect(getByText('I am a section!')).toHaveAttribute(
      'role',
      'complementary',
    )
  })

  test('to pass "as footer" and role prop true', async () => {
    const { getByText } = render(SectionView, {
      as: 'footer',
      role: true,
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    expect(getByText('I am a section!')).toHaveAttribute('role', 'contentinfo')
  })
})
