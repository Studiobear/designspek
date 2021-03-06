import stAnnesTheme from 'typography-theme-st-annes'

import { processCss, styled, system, typography } from '../index'
import { shortHandAttributes } from '../constants'
import { basic } from './fixtures/basic'

const theme = typography(basic, stAnnesTheme)

test('processCss: should resolve pseudo selectors via _', () => {
  expect(processCss({ _hover: { color: 'red' } }, theme)).toEqual({
    '&:hover': { color: 'red' },
  })
  expect(processCss({ _after: { color: 'red' } }, theme)).toEqual({
    '&:after': { color: 'red' },
  })
  expect(processCss({ _before: { color: 'red' } }, theme)).toEqual({
    '&:before': { color: 'red' },
  })
})

test('processCss: should resolve shorthand properties to regular css properties', () => {
  for (let [key, value] of Array.from(shortHandAttributes.entries())) {
    let currentKey = key
    let expectedOutput = {}
    if (value.length > 1) {
      let newExpected = value.map((val) => {
        let expected = system({ [val]: 'value' })
        expectedOutput = Object.assign(expectedOutput, expected)
        return
      })
    } else {
      expectedOutput = Object.assign(
        expectedOutput,
        system({ [value[0]]: 'value' }),
      )
    }
    if (
      Object.keys(currentKey).length === 0 &&
      currentKey.constructor === Object
    )
      currentKey = value[0]
    expect(processCss({ [currentKey]: 'value' }, {})).toEqual(expectedOutput)
  }
})

test('processCss: should resolve shorthand to class attributes', () => {
  let expectedOutput = {
    '@media screen and (min-width: 40em)': {
      padding: '2rem',
    },
    '@media screen and (min-width: 52em)': {
      padding: '3rem',
    },
    backgroundColor: '#f6f6f6',
    color: '#07c',
    fontFamily: "'Source Serif Pro', sans-serif",
    padding: '1rem',
  }

  expect(
    processCss(
      {
        color: 'primary',
        bg: 'muted',
        p: ['1rem', '2rem', '3rem'],
        fontFamily: 'heading',
      },
      theme,
    ),
  ).toEqual(expectedOutput)
})

test('processCss: should resolve theme aliases to hex color', () => {
  let expectedOutput = { color: '#07c', backgroundColor: '#f6f6f6' }
  expect(processCss({ color: 'primary', bg: 'muted' }, theme)).toEqual(
    expectedOutput,
  )
})

test('styled: should return classname', () => {
  const props = { color: 'color.primary' }
  const result = styled(props, theme)
  expect(result).toBe('go1519668507')
})

test('styled: should process media queries and return classname', () => {
  const props = {
    tempcols: [
      '[first] 10em [line2] auto [end]',
      '[first] auto [line2] 20em [end]',
      '[first] 1fr [line2] 1fr [end]]',
    ],
    temprows: [
      '[row1-start] 5em [row1-end] auto [row-end]',
      '[row1-start] auto [row1-end] 10em [row-end]',
      '[row1-start] 1fr [row1-end] 1fr [row-end]',
    ],
    p: ['2rem', '4rem', '6rem'],
    brd: '1px solid',
    brdCol: 'primary',
  }
  const result = styled(props, theme)
  expect(result).toBe('go3614168889')
})
