import { cap } from './util'

const m = 'margin'
const p = 'padding'
const t = 'top'
const r = 'right'
const b = 'bottom'
const l = 'left'

export const shortHandAttr = new Map([
  ['m', [m]],
  ['mt', [`${m}${cap(t)}`]],
  ['mr', [`${m}${cap(r)}`]],
  ['mb', [`${m}${cap(b)}`]],
  ['ml', [`${m}${cap(l)}`]],
  ['mx', [`${m}${cap(l)}`, `${m}${cap(r)}`]],
  ['my', [`${m}${cap(t)}`, `${m}${cap(b)}`]],
  ['p', [p]],
  ['pt', [`${p}${cap(t)}`]],
  ['pr', [`${p}${cap(r)}`]],
  ['pb', [`${p}${cap(b)}`]],
  ['pl', [`${p}${cap(l)}`]],
  ['px', [`${p}${cap(l)}`, `${p}${cap(r)}`]],
  ['py', [`${p}${cap(t)}`, `${p}${cap(b)}`]],
])
