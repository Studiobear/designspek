import { shortHandAttr } from '../shorthand'

describe('shorthand attributes', () => {
  it('were not changed', () => {
    expect(shortHandAttr).toMatchSnapshot()
  })
})
