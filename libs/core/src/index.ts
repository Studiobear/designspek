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
  space: 'rem',
  layout: '%',
  grid: 'rem',
}
const addUnits = (styles, units = defaultUnits) => {
  let withUnits = {}
  let mUnits = ''
  for (let [name, value] of Object.entries(styles)) {
    if (typeof value === 'object' && value !== null) {
      let withUnitsO = {}
      for (let [nameO, valueO] of Object.entries(value)) {
        if (
          (nameO.startsWith('margin') || nameO.startsWith('padding')) &&
          typeof valueO === 'number'
        ) {
          mUnits = valueO === 0 ? '' : units.space
          Object.assign(withUnitsO, { [nameO]: `${valueO}${mUnits}` })
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
      mUnits = value === 0 ? '' : units.space
      Object.assign(withUnits, { [name]: `${value}${mUnits}` })
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
  let name: string | string[]
  let value
  for ([name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue
      let cssPropTmp

      if (cssProp.startsWith('_')) {
        if (cssProp.startsWith('_keyframes')) {
          cssProp = cssProp.replace('_', '@')
          cssPropValue = createCssMisc(value, theme, cssProp)
        } else {
          cssProp = cssProp.replace('_', '&:')
          cssPropValue = createCssMisc(value, theme, cssProp)
          cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        }
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

export const processCss = (attributes, theme) => {
  let cssText:any = {}
  let cssMisc = {}
  let name: string | string[]
  let value
  const forwarding = theme.forwardStyle
  for ([name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue

      if (cssProp.startsWith('_')) {
        if (cssProp.startsWith('_keyframes')) {
          cssProp = cssProp.replace('_', '@')
          cssProp = cssProp.replace(/([A-Z])/g, ' $1')
          cssProp = cssProp.toLowerCase()
          cssPropValue = createCssMisc(value, theme, cssProp)
          cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        } else {
          cssProp = cssProp.replace('_', '&:')
          cssPropValue = createCssMisc(value, theme, cssProp)
          cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        }
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
  'txtTran',
  'textTransform',
  'position',
  'f',
  's',
  'fill',
  'stroke',
  'scrollBehavior',
  'borderSpacing',
  'borderCollapse',
  'objectFit',
  'tableLayout',
  'boxDecorationBreak',
  'shapeMargin',
  'animation',
  'cursor',
  'whiteSpace',
  'verticalAlign',
  'transition',
  'transform',
  'transformStyle',
  'transformOrigin',
  'perspective',
  'perspective-origin',
  'tranfrm',
  'tranfor',
  'tranit',
  'transt',
  'per',
  'peror',
  'bck',
]

let styleLib = {}

const styledProcess = (attributes, theme, stringed = false) => {
  let previousCssText: any
  let cn, toLib

  const cssText = processCss(attributes, theme)
  // console.log('styledProcess cssText: ', cssText)
  if (cssText === previousCssText) return
  previousCssText = cssText
  cn = css(cssText)
  // console.log('styledMemeo: ', cssText, cn, stringed)
  if (styleLib.hasOwnProperty(cn) && !stringed) return cn

  toLib = memoParse(cn, cssText, { ssr: stringed })

  if (stringed) {
    return toLib
  } else {
    styleLib = { ...toLib, ...styleLib }
    return cn
  }
}

const styled = (attributes, theme, stringed = false) => {
  let combStyles = ''
  if (theme) {
    if (theme.forwardStyle === undefined) {
      theme.forwardStyle = forwardStyleDefault
    }

    if (attributes.length > 0) {
      // console.log('styled array: ', attributes, attributes.length)
      attributes.map(attrib => {
        let tmpStyle = memoStyledProcess(attrib, theme, stringed)
        // console.log('styled tmpStyle: ', tmpStyle)
        combStyles += `${tmpStyle} `
      })
      return combStyles
    } else {
      // console.log('styled non-array: ', attributes)
      return memoStyledProcess(attributes, theme, stringed)
    }
  }

  return
}

const memoStyledProcess = memoize(styledProcess, {
  maxSize: 50,
  onCacheHit(cache, options) {
    // console.log('styledProcess cache was hit')
  },
})

const parse = (cn, cs, opts = { ssr: false }) => {
  let cStr = ''
  let pStr = ''
  let mQu = {}
  let ssr = opts.ssr
  let parsed

  cStr += ssr ? '' : `.${cn}{`
  if (typeof cs === 'object' && Object.entries(cs).length > 0) {
    for (let [n, v] of Object.entries(cs)) {
      n = n.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      if (Object.prototype.toString.call(v) === '[object Object]') {
        let childStr = '{'
        for (let [nc, vc] of Object.entries(v)) {
          if (Object.prototype.toString.call(vc) === '[object Object]') {
            childStr += `${nc}: {`
            for (let [ncc, vcc] of Object.entries(vc)) {
              childStr += `${ncc}: ${vcc};`
            }
            childStr += `}`
          } else {
            childStr += `${nc}: ${vc};`
          }
        }
        childStr += '}'

        if (n.startsWith('@media')) {
          if (mQu.hasOwnProperty(n)) {
            mQu[n] = { [cn]: v, ...mQu[n] }
          } else {
            mQu[n] = { [cn]: v }
          }
        } else if (n.startsWith('@keyframes')) {
          cStr += `${n} ${childStr}`
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
  cStr += ssr ? '' : '}'
  cStr += ssr ? '' : pStr

  if (ssr) {
    parsed = cStr
  } else {
    parsed = { [cn]: { value: cStr, media: mQu } }
  }

  return parsed
}

const memoParse = memoize(parse, {
  maxSize: 30,
  onCacheHit(cache, options) {
    // console.log('styledParse cache was hit')
  },
})

let storeSSR = ''
let storedGlobal = false

const extractCss = (theme, active = false, opts = {}) => {
  let compStyles = ''
  let global = ''
  let mediaStyles = {}
  if (!storedGlobal) {
    global = addGlobal(theme, true, true)
    storeSSR += global
    storedGlobal = true
  }
  let cn: any
  let cv: any
  for ([cn, cv] of Object.entries(styleLib)) {
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

  if (active) {
    storeSSR += compStyles
    return `<style id="_ds_ssr_store">${storeSSR}</style>`
  } else {
    storeSSR += compStyles
    return ''
  }
}

const defaultParseGlobalOpts = {
  units: defaultUnits,
}

const parseGlobal = (globStyles, opts = defaultParseGlobalOpts) => {
  let globCss = ''
  let theme = globStyles
  theme.forwardStyle = forwardStyleDefault
  let parseTheme = globStyles.styles
  let units = opts.units
  let name: string | string[]
  let value

  for ([name, value] of Object.entries(parseTheme)) {
    if (name !== 'p' && name !== 'a' && name !== 'b') {
      name = shortHandAttributes.get(name) || name
    }
    globCss += `${name}{`
    if (name === 'body' && theme.styles.body) {
      if (
        typeof theme.styles.body.antialias === 'boolean' &&
        theme.styles.body.antialias
      ) {
        globCss +=
          '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
      } else {
        globCss += ` -webkit-font-smoothing: ${theme.styles.body.antialias}; -moz-osx-font-smoothing: grayscale; `
      }

      if (
        typeof theme.styles.body.reset === 'boolean' &&
        theme.styles.body.reset
      ) {
        globCss += 'margin: 0;'
      }
    }

    let block = {}
    let parsedV = value
    if (name !== 'html') {
      parsedV = processCss(value, theme)
      parsedV.theme = theme
      parsedV = system(parsedV)
    } else {
      if (
        typeof theme.styles.body.reset === 'boolean' &&
        theme.styles.body.reset
      ) {
        globCss += `line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        box-sizing: border-box;`
      }
    }
    let nameV: any
    let valueV: any
    for ([nameV, valueV] of Object.entries(parsedV)) {
      nameV = nameV.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      valueV = valueV === 'text' ? '"text"' : valueV
      valueV =
        nameV === 'font-size' && !/%/g.test(valueV) ? `${valueV}px` : valueV
      valueV = nameV === 'line-height' ? `${valueV}rem` : valueV

      valueV =
        (nameV.startsWith('margin') && !(typeof valueV === 'string')) ||
        (nameV.startsWith('padding') && !(typeof valueV === 'string'))
          ? `${valueV}${units.space}`
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
    // console.log('global cache was hit')
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
