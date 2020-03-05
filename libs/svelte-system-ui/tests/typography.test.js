const test = require('ava')
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
} from '../src/typography'

import stAnnesTheme from 'typography-theme-st-annes'
import { basic } from './basic'

test('toUnitless: should return floating point number', t => {
  t.true(typeof toUnitless('12') === 'number')
  t.true(toUnitless('12') === 12)
  t.true(toUnitless(12) === 12)
})

test('getScale: create scale based on font size and scale ratio ', t => {
  const scaled = getScale(defaults)
  const valueZero = [0]
  const valueQtr = [1 / 4]
  const valueHlf = [1 / 2]
  const valueOne = [1]
  const valueThree = [3]
  t.is(scaled(valueZero), 16)
  t.is(+scaled(valueQtr).toFixed(4), 19.0273)
  t.is(+scaled(valueHlf).toFixed(4), 22.6274)
  t.is(+scaled(valueOne).toFixed(4), 32)
  t.is(+scaled(valueThree).toFixed(4), 128)
})

/*
test('getSpace: returns space scale array', t => {
  t.is(getSpace(1, defaults), 16)
})
*/

test('getFontSizes: returns font size object', t => {
  let opts = defaults
  // opts.baseFontSize = toUnitless(opts.baseFontSize)
  opts.rhythmUnit = 'rem'
  opts.roundToNearestHalfLine = true

  // const typo = verticalRhythm(opts)
  // console.log(typo)
  var rhythm = verticalRhythm(defaults).rhythm
  var lines = verticalRhythm(defaults).linesForFontSize
  t.true(typeof getFontSizes(1, opts) === 'object')
  t.is(rhythm(1), '1.45rem')
  t.is(lines(30), 1.5)
  t.deepEqual(getFontSizes(1, opts), [
    12.99603834169977,
    13.928809012737986,
    16,
    21.112126572366307,
    24.251465064166368,
    32,
  ])
})

test('typography: should correctly calculate and merge typography into theme', t => {
  t.snapshot(typography(basic, stAnnesTheme), { id: 'typographySnapshot' })
})