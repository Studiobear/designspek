import { cap } from '../index'

describe('cap', () => {
  it('uppercased first letter of string', () => {
    const t = 'top'
    expect(cap(t)).toEqual('Top')
  })
})
