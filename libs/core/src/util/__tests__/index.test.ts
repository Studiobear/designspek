import { version } from '../../../dist/main'
import pkg from '../../../package.json'
import { cap, toHash, isObject, isEmpty } from '../index'

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

describe('isObject', () => {
  it('is not an object', () => expect(isObject([])).toEqual(false))
  it('is an object', () => expect(isObject({ some: 'value' })).toEqual(true))
  it('is an object even if empty', () => expect(isObject({})).toEqual(true))
})

describe('isEmpty', () => {
  it('is not an object', () => expect(isEmpty([])).toEqual(false))
  it('is not an empty object', () =>
    expect(isEmpty({ not: 'empty' })).toEqual(false))
  it('is an empty object', () => expect(isEmpty({})).toEqual(true))
})
