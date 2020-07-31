import { version } from '../../../dist/main'
import pkg from '../../../package.json'
import { cap } from '../index'

describe('version', () => {
  it('returns package version', () => {
    expect(version).toEqual(pkg.version) // pkg.version
  })
})

describe('cap', () => {
  it('uppercased first letter of string', () => {
    const t = 'top'
    expect(cap(t)).toEqual('Top')
  })
})
