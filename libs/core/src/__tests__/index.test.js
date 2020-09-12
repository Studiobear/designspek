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

/*
test('processCss: should resolve shorthand properties to regular css properties', t => {
  for (const [key, value] of shortHandAttributes.entries()) {
    let expectedOutput = {}
    expectedOutput = Object.assign(
      expectedOutput,
      system({ [value[0]]: 'value' }),
    )
    console.log(processCss({ [key]: 'value' }, {}), expectedOutput)
    t.deepEqual(processCss({ [key]: 'value' }, {}), expectedOutput)
  }
})


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
