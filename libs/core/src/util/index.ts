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
