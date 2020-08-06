import { initSpace } from '../space'
import { getSpace } from '../main'
import {
  spek,
  spekSpace,
  spekSpaceEmpty,
  spekSpaceValues,
  spekSpaceValuesNoUnits,
} from '../fixtures'
import { Space } from '../types'
// import { Theme } from '../types'

beforeAll(() => {})

describe('initSpace', () => {
  describe('gets spek Space from spek', () => {
    const spaceFromSpek: Space = getSpace(spek)
    it('to create space values', () => {
      expect(initSpace(spaceFromSpek)).toStrictEqual({
        units: 'em',
        scale: [0, 0.125, 0.25, 0.5, 1, 1.5, 2, 4, 8],
        alias: ['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      })
    })
  })
})

describe('Spek::Space', () => {
  it('checks input validity', () => {
    expect(initSpace(spekSpaceEmpty)).toStrictEqual({
      error: 'not a valid Space object',
    })
  })
})
