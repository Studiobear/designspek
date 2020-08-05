import { version } from '../../../dist/main'
import pkg from '../../../package.json'
import { cap, toHash } from '../index'

describe('version', () => {
  it('returns package version', () => {
    expect(version).toEqual(pkg.version) // pkg.version
  })
})

describe('cap', () => {
  it('uppercase first letter of string', () => {
    const t = 'top'
    expect(cap(t)).toEqual('Top')
  })
})

describe('toHash', () => {
  it('converts string to hash', () => {
    const s = '{m:"s",px:"m",py:"s"}'
    expect(toHash(s)).toEqual('3778021282')
  })
})
