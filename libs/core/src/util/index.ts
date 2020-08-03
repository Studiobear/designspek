/**
 * Capitalize string
 * @param:
 */
export const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

export const toHash = (s: string) =>
  s.split('').reduce((out, i) => (67 * out + i.charCodeAt(0)) >>> 0, 7)
