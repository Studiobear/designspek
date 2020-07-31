const test = require('ava')
const verticalRhythm = require('compass-vertical-rhythm')

import {
  toUnitless,
  getScale,
  // getSpace,
  getFontSizes,
  getFontWeights,
  getLineHeights,
  getFonts,
  fontLink,
  typography,
} from '../src/typography'

export const defaults = {
  baseFontSize: 16,
  baseLineHeight: 1.45,
  headerLineHeight: 1.8,
  scaleRatio: 1.333,
  googleFonts: [],
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: ['georgia', 'serif'],
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  includeNormalize: true,
  blockMarginBottom: 0,
}

import stAnnesTheme from 'typography-theme-st-annes'
import { basic } from './basic'

test('toUnitless: should return floating point number', (t) => {
  t.true(typeof toUnitless('12') === 'number')
  t.true(toUnitless('12') === 12)
  t.true(toUnitless(12) === 12)
})

test('getScale: create scale based on font size and scale ratio ', (t) => {
  const scaled = getScale(defaults)
  const valueZero = [0]
  const valueQtr = [1 / 4]
  const valueHlf = [1 / 2]
  const valueOne = [1]
  const valueThree = [3]
  t.is(scaled(valueZero), 16)
  t.is(+scaled(valueQtr).toFixed(4), 17.192)
  t.is(+scaled(valueHlf).toFixed(4), 18.4729)
  t.is(+scaled(valueOne).toFixed(4), 21.328)
  t.is(+scaled(valueThree).toFixed(4), 37.8975)
})

/*
test('getSpace: returns space scale array', t => {
  t.is(getSpace(1, defaults), 16)
})
*/

test('getFontSizes: returns font size object', (t) => {
  let opts = defaults

  //var rhythm = verticalRhythm(defaults).rhythm
  //var lines = verticalRhythm(defaults).linesForFontSize
  t.true(typeof getFontSizes(1, opts) === 'object')
  //t.is(rhythm(1), '1.45rem')
  //t.is(lines(30), 1.5)
  t.deepEqual(getFontSizes(1, opts), [
    14.678137030894668,
    15.106155564038744,
    16,
    17.949487064253905,
    19.0115739117464538,
    21.328,
  ])
})

test('getFontWeights: returns font weights object', (t) => {
  let opts = defaults

  t.true(typeof getFontWeights(1, opts) === 'object')
  t.deepEqual(getFontWeights(1, opts), {
    body: 'normal',
    bold: 'bold',
    heading: 'bold',
  })
})

test('getLineWeights: returns lineheights object', (t) => {
  let opts = defaults

  t.true(typeof getLineHeights(1.5, opts) === 'object')
  t.deepEqual(getLineHeights(1.5, opts), {
    body: 1.45,
    heading: 1.8,
  })
})

test('getFonts: returns fonts object', (t) => {
  let opts = defaults

  t.true(typeof getFonts(basic, opts) === 'object')
  t.deepEqual(getFonts(basic, opts), {
    body: "'georgia', serif",
    heading:
      "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  })
})

test('typography: should correctly calculate and merge typography into theme', (t) => {
  t.snapshot(typography(basic, stAnnesTheme), { id: 'typographySnapshot' })
})

test('fontLink: should create googleFonts URL', async (t) => {
  t.deepEqual(
    await fontLink(stAnnesTheme),
    '//fonts.googleapis.com/css?family=Source+Serif+Pro:600|Source+Sans+Pro:400,400i,700',
  )
})
