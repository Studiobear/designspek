import deepmerge from 'deepmerge'

const isMergeableObject = n => {
  return (
    !!n &&
    typeof n === 'object' &&
    n.$$typeof !== REACT_ELEMENT &&
    n.$$typeof !== FORWARD_REF
  )
}

const arrayMerge = (destinationArray, sourceArray, options) => sourceArray

export const merge = (a, b) =>
  deepmerge(a, b, { isMergeableObject, arrayMerge })

export default merge
