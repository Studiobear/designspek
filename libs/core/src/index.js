import { css } from 'goober'
import {
  compose,
  color,
  space,
  layout,
  position,
  border,
  flexbox,
  typography as typographySS,
  grid,
} from 'styled-system'
import { shortHandAttributes } from './constants'
import glob from './glob'
import typography, { fontLink } from './typography'
import memoize from 'micro-memoize'

export const system = compose(
  color,
  space,
  layout,
  position,
  border,
  flexbox,
  typographySS,
  grid,
)

const defaultUnits = {
  space: 'px',
  layout: '%',
  grid: 'px',
}
const addUnits = (styles, units = defaultUnits) => {
  // console.log('addUnits:', styles, units)
  let withUnits = {}
  for (let [name, value] of Object.entries(styles)) {
    // console.log('addUnits entries:', name, value)
    if (typeof value === 'object' && value !== null) {
      let withUnitsO = {}
      for (let [nameO, valueO] of Object.entries(value)) {
        // console.log('addUnits object:', nameO, valueO)
        if (
          (nameO.startsWith('margin') || nameO.startsWith('padding')) &&
          typeof valueO === 'number'
        ) {
          Object.assign(withUnitsO, { [nameO]: `${valueO}${units.space}` })
          continue
        }
        if (nameO.startsWith('grid') && typeof valueO === 'number') {
          Object.assign(withUnitsO, { [nameO]: `${valueO}${units.grid}` })
          continue
        }
        Object.assign(withUnitsO, { [nameO]: valueO })
      }
      Object.assign(withUnits, { [name]: withUnitsO })
      continue
    }
    if (
      (name.startsWith('margin') || name.startsWith('padding')) &&
      typeof value === 'number'
    ) {
      Object.assign(withUnits, { [name]: `${value}${units.space}` })
      continue
    }
    if (name.startsWith('grid') && typeof value === 'number') {
      Object.assign(withUnits, { [name]: `${value}${units.grid}` })
      continue
    }
    Object.assign(withUnits, { [name]: value })
  }
  // console.log('addUnits return:', withUnits)
  return withUnits
}

const createCssMisc = (attributes, theme, pseudoElementSelector) => {
  let cssMisc = {}
  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue
      let cssPropTmp

      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
      }
      if (cssProp.endsWith('olor')) {
        cssPropTmp = { [cssProp]: value }
        cssPropTmp.theme = theme
        cssPropValue = color(cssPropTmp)
        cssMisc = Object.assign(cssMisc, cssPropValue)
      }
      if (cssProp.startsWith('margin') || cssProp.startsWith('padding')) {
        cssPropTmp = { [cssProp]: value }
        cssPropValue = space(cssPropTmp)
        cssPropTmp.theme = theme
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
      }
      cssMisc = Object.assign(cssMisc, { [cssProp]: value })
    }
  }
  return cssMisc
}

export const processCss = (attributes, theme, pseudoElementSelector) => {
  let cssText = {}
  let cssMisc = {}
  // console.log('styled.update: ', attributes, theme, pseudoElementSelector)
  const forwarding = theme.forwardStyle
  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    // console.log('styled.update.processCss: ', name, value)
    for (let cssProp of name) {
      let cssPropValue

      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        // console.log('processCss 2', cssProp, value)
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        continue
      }
      if (forwarding.includes(cssProp)) {
        // console.log('process forwarding', cssProp, value)
        cssMisc = Object.assign(cssMisc, { [cssProp]: value })
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme

  let newCss = system(cssText)
  // console.log('newCss', newCss, cssMisc)

  return addUnits(Object.assign(newCss, cssMisc))
}

const forwardStyleDefault = [
  'txtdeco',
  'textDecoration',
  'position',
  'f',
  's',
  'fill',
  'stroke',
]

let styleLib = {}

const styledMemo = (attributes, theme) => {
  let previousCssText = ''
  let cn, toLib
  // console.log('styledMemo2', attributes, theme)

  if (theme) {
    if (theme.forwardStyle === undefined)
      theme.forwardStyle = forwardStyleDefault
    const cssText = processCss(attributes, theme)
    // console.log('styled2.update: ', cssText, theme)
    if (cssText === previousCssText) return
    previousCssText = cssText

    cn = css(cssText)
    if (styleLib.hasOwnProperty(cn)) return cn
    toLib = parse(cn, cssText)
    console.log('toLib', toLib)
    styleLib = { ...toLib, ...styleLib }
    console.log('sM2 styleLib: ', styleLib)
    return cn
  }

  return
}

const styled = memoize(styledMemo, {
  maxSize: 10,
  onCacheHit(cache, options) {
    // console.log('cache was hit: ', cache)
  },
})

const parse = (cn, cs) => {
  let cStr = ''
  let mQu = {}
  let parsed

  cStr += `.${cn}{`
  for (let [n, v] of Object.entries(cs)) {
    n = n.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
    if (Object.prototype.toString.call(v) === '[object Object]') {
      let childStr = '{'
      for (let [nc, vc] of Object.entries(v)) {
        childStr += `${nc}: ${vc};`
      }
      childStr += '}'

      if (n.startsWith('@')) {
        if (mQu.hasOwnProperty(n)) {
          mQu[n] = { [cn]: v, ...mQu[n] }
        } else {
          mQu[n] = { [cn]: v }
        }
      } else {
        cStr += `${n} ${childStr}`
      }
    } else {
      cStr += `${n}: ${v};`
    }
  }
  cStr += '}'
  parsed = { [cn]: { value: cStr, media: mQu } }
  return parsed
}

const parseGlobal = globStyles => {
  console.log('parseGlobal: ', globStyles)
  let globCss = ''
  let theme = globStyles
  theme.forwardStyle = forwardStyleDefault
  let parseTheme = globStyles.styles

  for (let [name, value] of Object.entries(parseTheme)) {
    if (name !== 'p' && name !== 'a' && name !== 'b') {
      name = shortHandAttributes.get(name) || name
    }

    globCss += `${name}{`
    if (name === 'body' && theme.styles.body) {
      if (
        typeof theme.styles.body.antialias === 'boolean' &&
        theme.styles.body.antialias
      ) {
        globCss += ` -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; `
      } else {
        globCss += ` -webkit-font-smoothing: ${theme.styles.body.antialias}; -moz-osx-font-smoothing: grayscale; `
      }

      if (
        typeof theme.styles.body.reset === 'boolean' &&
        theme.styles.body.reset
      ) {
        globCss += ` -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; `
      }
    }

    let block = {}
    let parsedV = value
    parsedV = processCss(value, theme)
    parsedV.theme = theme
    parsedV = system(parsedV)
    // console.log('parseGlobal.processCss: ', parsedV)
    for (let [nameV, valueV] of Object.entries(parsedV)) {
      nameV = nameV.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      valueV = valueV === 'text' ? '"text"' : valueV
      valueV =
        nameV === 'font-size' && !/%/g.test(valueV) ? `${valueV}px` : valueV
      valueV = nameV === 'line-height' ? `${valueV}rem` : valueV

      valueV =
        (nameV.startsWith('margin') &&
          !(typeof valueV === 'string' && valueV.endsWith('px'))) ||
        (nameV.startsWith('padding') &&
          !(typeof valueV === 'string' || valueV.endsWith('px')))
          ? `${valueV}px`
          : valueV
      globCss += ` ${nameV}: ${valueV}; `
    }
    globCss += '} '
  }

  return globCss
}

const parseGlobalMemo = memoize(parseGlobal, {
  maxSize: 2,
  onCacheHit(cache, options) {
    // console.log('cache was hit: ', cache)
  },
})

const addGlobal = (theme, parse = true, ssr = true) => {
  let globalStyle
  if (parse) {
    globalStyle = parseGlobalMemo(theme)
    glob(globalStyle)
  } else {
    glob(theme)
  }

  return globalStyle
}
export { styled, addGlobal, typography, fontLink }
