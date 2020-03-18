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
import glob, { removeSSR } from './glob'
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
  let withUnits = {}
  for (let [name, value] of Object.entries(styles)) {
    if (typeof value === 'object' && value !== null) {
      let withUnitsO = {}
      for (let [nameO, valueO] of Object.entries(value)) {
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
  const forwarding = theme.forwardStyle
  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue

      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        continue
      }
      if (forwarding.includes(cssProp)) {
        cssMisc = Object.assign(cssMisc, { [cssProp]: value })
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme

  let newCss = system(cssText)

  return addUnits(Object.assign(newCss, cssMisc))
}

const forwardStyleDefault = [
  'txtdeco',
  'textDecoration',
  'txtTransform',
  'textTransformation',
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

  if (theme) {
    if (theme.forwardStyle === undefined)
      theme.forwardStyle = forwardStyleDefault
    const cssText = processCss(attributes, theme)
    if (cssText === previousCssText) return
    previousCssText = cssText
    cn = css(cssText)
    if (styleLib.hasOwnProperty(cn)) return cn
    toLib = parse(cn, cssText)
    styleLib = { ...toLib, ...styleLib }
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

const parse = (cn, cs, opts = { ssr: false }) => {
  let cStr = ''
  let pStr = ''
  let mQu = {}
  let parsed

  cStr += `.${cn}{`
  if (typeof cs === 'object' && Object.entries(cs).length > 0) {
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
          if (n.startsWith('&')) {
            n = n.replace('&', cn)
            pStr = `${n} ${childStr}`
          } else {
            cStr += `${n} ${childStr}`
          }
        }
      } else {
        cStr += `${n}: ${v};`
      }
    }
  } else {
    if (typeof cs === 'string') cStr += cStr
  }
  cStr += '}'
  cStr += pStr

  if (opts.ssr) {
    parsed = cStr
  } else {
    parsed = { [cn]: { value: cStr, media: mQu } }
  }

  return parsed
}

const extractCss = (theme, opts = {}) => {
  let compStyles = ''
  let mediaStyles = {}
  const global = addGlobal(theme, true, true)
  for (let [cn, cv] of Object.entries(styleLib)) {
    if (typeof cv.value === 'string') compStyles += cv.value
    if (typeof cv.media === 'object' && Object.entries(cv.media).length > 0) {
      for (let [mn, mv] of Object.entries(cv.media)) {
        let mTmp
        for (let [mchn, mchv] of Object.entries(mv)) {
          mTmp = parse(mchn, mchv, { ssr: true })
        }
        if (!mediaStyles.hasOwnProperty(mn)) mediaStyles[mn] = ''
        mediaStyles[mn] += mTmp
      }
    }
  }
  for (let [mSn, mSv] of Object.entries(mediaStyles)) {
    compStyles += `${mSn} {${mSv}}`
  }
  return `<style id="_ds_ssr">${global} ${compStyles}</style>`
}

const parseGlobal = globStyles => {
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
    if (name !== 'html') {
      parsedV = processCss(value, theme)
      parsedV.theme = theme
      parsedV = system(parsedV)
    }
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

const addGlobal = (theme, parse = true, ssr = false) => {
  let globalStyle
  if (theme) {
    if (parse) {
      globalStyle = parseGlobalMemo(theme)
      if (!ssr) glob(globalStyle)
    } else {
      glob(theme)
    }
  }
  return globalStyle
}
export { styled, addGlobal, typography, fontLink, extractCss, removeSSR }
