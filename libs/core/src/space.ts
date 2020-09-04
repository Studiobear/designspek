import { Space } from './types'
import { isInvalid } from './util'

const getUnits = () => {}

export const initSpace = (s: Space): Space => {
  let o = !isInvalid(s) ? s : { error: 'not a valid Space object' }
  return o
}
