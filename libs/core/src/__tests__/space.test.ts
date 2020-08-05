import { initSpace } from '../space'
import { getSpace } from '../main'
import { spek } from '../fixtures'
import { Space } from '../types'
// import { Theme } from '../types'

let spekSpace: Space

beforeEach(() => {
  spekSpace = getSpace(spek)
})

describe('initSpace', () => {
  it('to create space values', () => {
    expect(initSpace(spekSpace)).toStrictEqual({})
  })
})
