/**
 * Capitalize string
 * @param {string} s
 * @return {string}
 */
export const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Creates hash from string
 * @param {string} s
 * @return {string} hash of string s
 */
export const toHash = (s: string): string =>
  s
    .split('')
    .reduce((out, i) => (67 * out + i.charCodeAt(0)) >>> 0, 7)
    .toString()

/**
 * Checks if is object
 * @param {object} o
 * @return {boolean} true if object is empty
 */

export const isObject = (o: object): boolean => o.constructor === Object

/**
 * Checks if object is empty
 * @param {object} o
 * @return {boolean} true if object is empty
 */

export const isEmpty = (o: object): boolean =>
  isObject(o) && Object.entries(o).length === 0

/**
 * Checks if object is invalid by not being a valid object or is empty
 * @param {object} o
 * @return {boolean} true if object is empty
 */

export const isInvalid = (o: object) => !isObject(o) || isEmpty(o)
