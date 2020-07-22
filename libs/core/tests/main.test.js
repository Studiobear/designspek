import test from 'ava'
import { ping, version } from '../dist/main'
import pkg from '../package.json'

test('ping', (t) => {
  t.is(ping('pong'), 'pong')
})

test('version', (t) => {
  t.is(version, pkg.version)
})
