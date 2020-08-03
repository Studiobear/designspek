import { addSpace } from '../space'
import { specification } from '../fixtures'

let theme: any

beforeEach(() => {
  theme = addSpace(specification)
})

describe('addSpace', () => {
  it('to create space values', () => {
    expect(theme.space.values).toBe([0])
  })
})
