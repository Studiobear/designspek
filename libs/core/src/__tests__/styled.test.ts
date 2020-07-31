import { styled } from '../main'
import { basic as theme, styleSpace } from '../fixtures'

describe('styled', () => {
  it('returns a classname', () => {
    expect(styled(styleSpace, theme)).toEqual('className')
  })
})
