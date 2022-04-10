const verticalRhythm = require('compass-vertical-rhythm')

import {
  defaults,
  toUnitless,
  getScale,
  // getSpace,
  getFontSizes,
  getFontWeights,
  getLineHeights,
  getFonts,
  fontLink,
  typography,
} from '../typography'

import stAnnesTheme from 'typography-theme-st-annes'
import { basic } from './fixtures/basic'

test('toUnitless: should return floating point number', () => {
  expect(typeof toUnitless('12') === 'number').toBe(true)
  expect(toUnitless('12') === 12).toBe(true)
  expect(toUnitless(12) === 12).toBe(true)
})

test('getScale: create scale based on font size and scale ratio ', () => {
  const scaled = getScale(defaults)
  const valueZero = [0]
  const valueQtr = [1 / 4]
  const valueHlf = [1 / 2]
  const valueOne = [1]
  const valueThree = [3]
  expect(scaled(valueZero)).toBe(16)
  expect(+scaled(valueQtr).toFixed(4)).toBe(19.0273)
  expect(+scaled(valueHlf).toFixed(4)).toBe(22.6274)
  expect(+scaled(valueOne).toFixed(4)).toBe(32)
  expect(+scaled(valueThree).toFixed(4)).toBe(128)
})

/*
test('getSpace: returns space scale array', t => {
  t.is(getSpace(1, defaults), 16)
})
*/

test('getFontSizes: returns font size object', () => {
  let opts = defaults

  //var rhythm = verticalRhythm(defaults).rhythm
  //var lines = verticalRhythm(defaults).linesForFontSize
  expect(typeof getFontSizes(1, opts) === 'object').toBe(true)
  //t.is(rhythm(1), '1.45rem')
  //t.is(lines(30), 1.5)
  expect(getFontSizes(1, opts)).toEqual([
    12.99603834169977, 13.928809012737986, 16, 21.112126572366307,
    24.251465064166368, 32,
  ])
})

test('getFontWeights: returns font weights object', () => {
  let opts = defaults

  expect(typeof getFontWeights(1, opts) === 'object').toBe(true)
  expect(getFontWeights(1, opts)).toEqual({
    body: 'normal',
    bold: 'bold',
    heading: 'bold',
  })
})

test('getLineWeights: returns lineheights object', () => {
  let opts = defaults

  expect(typeof getLineHeights(1.5, opts) === 'object').toBe(true)
  expect(getLineHeights(1.5, opts)).toEqual({
    body: 1.45,
    heading: 1.8,
  })
})

test('getFonts: returns fonts object', () => {
  let opts = defaults

  expect(typeof getFonts(basic, opts) === 'object').toBe(true)
  expect(getFonts(basic, opts)).toEqual({
    body: "'georgia', serif",
    heading:
      "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  })
})

test('typography: should correctly calculate and merge typography into theme', () => {
  expect(typography(basic, stAnnesTheme)).toMatchSnapshot()
})

test('fontLink: should create googleFonts URL', async () => {
  expect(await fontLink(stAnnesTheme)).toEqual(
    '//fonts.googleapis.com/css?family=Source+Serif+Pro:600|Source+Sans+Pro:400,400i,700',
  )
})
