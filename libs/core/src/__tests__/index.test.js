import stAnnesTheme from 'typography-theme-st-annes'

import { processCss, styled, system, typography } from '../index'
import { shortHandAttributes } from '../constants'
import { basic } from './fixtures/basic'

const theme = typography(basic, stAnnesTheme)

class HTMLNode {
  constructor() {
    this.class = ''
    this.classList = {
      add: cn => {
        this.class += `${cn}`
      },
      remove: cn => {
        this.class = this.class.replace(cn, '')
      },
    }
  }
}

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
  for (let [key, value] of shortHandAttributes.entries()) {
    let currentKey = key
    let expectedOutput = {}
    if (value.length > 1) {
      let newExpected = value.map(val => {
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

/*
test('processCss: should resolve theme aliases to hex color', t => {
  let expectedOutput = { color: '#07c', background: '#f6f6f6' }
  t.deepEqual(
    processCss({ color: 'primary', bg: 'muted' }, theme),
    expectedOutput,
  )
})

test('processCss: should resolve shorthand to class attributes', t => {
  let expectedOutput = { color: '#07c' }
  t.deepEqual(
    processCss(
      {
        color: 'primary',
        bg: 'muted',
        p: ['xl', 'xs', 'm'],
        fontFamily: 'heading',
      },
      theme,
    ),
    expectedOutput,
  )
})


test('styled: should create classNames and update the node with it', t => {
  const props = { color: 'color.primary' }
  const node = new HTMLNode()
  const result = styled(node, [props, theme])
  t.is(node.class.includes('go'), true)

  let previousClassName = node.class
  // update with different props leads to new classname
  result.update([{ color: 'color.secondary' }, theme])
  t.is(node.class.includes('go'), true)
  t.is(node.class.includes(previousClassName), false)
})

*/
