import { createTheme } from '../main'
import spek from '../fixtures'

describe('createTheme', () => {
  it('returns a Theme', () => {
    expect(createTheme(spek)).toEqual({})
  })
})
