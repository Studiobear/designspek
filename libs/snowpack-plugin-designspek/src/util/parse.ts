/* inspired from: https://github.com/pngwn/MDsveX/blob/master/packages/mdsvex/src/parsers/html_block.ts */
//import {parseScript} from 'esprima'
//import type {Program} from 'esprima'
// import evaluate from 'static-eval'
import { pipe } from 'fp-ts/lib/function'

const tab = '\t'
const space = ' '
const lineFeed = '\n'
const lessThan = '<'

const rawOpenScript = /^<(script)(?=(\s|>|$))/i
const rawCloseScript = /<\/(script)>/i
const openStyled = /(styled)(\s*)(\()/i
const openParen = /(\()/i
const closeParent = /(\))/i
const closeStyled = closeParent

export const extractStyled = (code: string): string[] => {
  const length = code.length
  let index = 0
  let styledIndex = 0
  let indexGroup = []
  let allIndexes = []
  let next
  let prev = 0
  let line
  let offset
  let character
  let sequence
  let styled = false
  let subParen = -1
  const sequences: Array<[RegExp, RegExp, boolean]> = [
    [rawOpenScript, rawCloseScript, false],
  ]

  // skip opening white space
  while (index < length) {
    character = code.charAt(index)

    if (character !== tab && character !== space) {
      break
    }

    index++
  }

  if (code.charAt(index) !== lessThan) {
    return []
  }

  next = code.indexOf(lineFeed, index + 1)
  next = next === -1 ? length : next
  line = code.slice(index, next)
  offset = -1
  const count = sequences.length

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset]
      break
    }
  }

  if (!sequence) {
    return []
  }

  // stop when </script> found
  if (!sequence[1].test(line)) {
    while (index < length) {
      next = code.indexOf(lineFeed, index + 1)
      next = next === -1 ? length : next
      line = code.slice(index + 1, next)

      if (styled && !subParen) {
        if (line) {
          if (closeParent.test(line)) {
            index = next
          } else if (openParen.test(line)) {
            subParen++
            index = next
          }
        }
      }

      if (styled && subParen) {
        if (line) {
          if (closeParent.test(line)) {
            index = next
            indexGroup.push(index)
            allIndexes.push(indexGroup)
            indexGroup = []
            subParen--
          } else if (openParen.test(line)) {
            subParen++
            index = next
          }
        }
      }

      if (styled && closeStyled.test(line)) {
        styled = false
      }
      // start index when styled function found
      if (!styled && openStyled.test(line)) {
        if (line) {
          prev++ // remove white space before styled function
          styledIndex = prev // need prev index which is start of styled function
          indexGroup.push(prev)
          index = next
          styled = true
        }
      }
      index = next
      prev = next
    }
  }

  const subCode = allIndexes.map((ind) => code.slice(ind[0], ind[1]))

  return subCode
}

export const splitExprEqual = (expr: string): string[] => expr.split('=')

export const splitExprSpace = (expr: string): string[] => expr.split(' ')

export const trimArray = (arr: string[]): string[] => arr.map((x) => x.trim())

const REMOVE_BREAKS = /[\f\n\r\t\v]/g
export const trimBreaks = (s: string): string => s.replace(REMOVE_BREAKS, '')

const MULTISPACE_To_SINGLE = /\s+/g
export const trimMultiSpaces = (s: string): string =>
  s.replace(MULTISPACE_To_SINGLE, ' ')

export const separateExpressions = (code: string): string[] =>
  pipe(code, splitExprEqual, trimArray)

export const linkExpressions = (codeArr: string[]): string[] => {
  const exprVar = codeArr.shift()
  const splitExprVar = exprVar !== undefined ? splitExprSpace(exprVar) : []
  const trimStyled = pipe(codeArr[0], trimBreaks, trimMultiSpaces)
  return [...splitExprVar, trimStyled]
}

export const parseStyled = (linked: string[]): string[][] =>
  linked.map((exp) => pipe(exp, separateExpressions, linkExpressions))
