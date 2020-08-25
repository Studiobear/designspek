import { Space } from '../types'
import { isObject, isEmpty } from '../util'

const isInvalid = (o: object) => !isObject(o) || isEmpty(o)

export const initSpace = (s: Space): Space => {
  let o = !isInvalid(s) ? s : { error: 'not a valid Space object' }
  return o
}
