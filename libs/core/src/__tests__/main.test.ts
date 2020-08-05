import { getSpace } from '../main'
import { spek } from '../fixtures'
// import { Theme } from '../types'

describe('getSpace', () => {
  it('to get prop space: Space from spek: Spek', () => {
    expect(getSpace(spek).alias).toStrictEqual([
      'none',
      'xxs',
      'xs',
      's',
      'm',
      'l',
      'xl',
      'xxl',
      'xxxl',
    ])
  })
})
