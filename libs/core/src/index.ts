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

import { CSSPropertiesObject } from './types'

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

const addUnits = (styles: any, units = defaultUnits) => {
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

export type StyledProcess = (
  attributes: CSSPropertiesObject | any,
  theme: any,
) => any

interface StyledProcessObject {
  name: string | string[]
  value: any
}

const createCssMisc: StyledProcess = (attributes, theme) => {
  let cssMisc = {}
  for (let [name, value] of Object.entries(attributes)) {
    let hasShortName = shortHandAttributes.get(name)
    let processName = hasShortName ? hasShortName : [name]
    for (let cssProp of processName) {
      let cssPropValue
      let cssPropTmp

      if (cssProp.startsWith('_')) {
        if (cssProp.startsWith('_keyframes')) {
          cssProp = cssProp.replace('_', '@')
          cssPropValue = createCssMisc(value, theme)
        } else {
          cssProp = cssProp.replace('_', '&:')
          cssPropValue = createCssMisc(value, theme)
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

export const processCss: StyledProcess = (attributes, theme) => {
  let cssText = { theme }
  let cssMisc = {}
  const forwarding = theme.forwardStyle
  for (let [name, value] of Object.entries(attributes)) {
    let hasShortName = shortHandAttributes.get(name)
    let processName = hasShortName ? hasShortName : [name]
    for (let cssProp of processName) {
      let cssPropValue

      if (cssProp.startsWith('_')) {
        if (cssProp.startsWith('_keyframes')) {
          cssProp = cssProp.replace('_', '@')
          cssProp = cssProp.replace(/([A-Z])/g, ' $1')
          cssProp = cssProp.toLowerCase()
          cssPropValue = createCssMisc(value, theme)
          cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        } else {
          cssProp = cssProp.replace('_', '&:')
          cssPropValue = createCssMisc(value, theme)
          cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        }
        continue
      }
      if (typeof forwarding === 'object' && forwarding.includes(cssProp)) {
        cssMisc = Object.assign(cssMisc, { [cssProp]: value })
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme
  let newCss = system(cssText)
  return addUnits(Object.assign(newCss, cssMisc))
}

export const forwardStyleDefault = [
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
  'listStyle',
  'listStyleType',
  'alignItems',
  'justifyItems',
]

interface StyleLib {
  value?: any
  media?: any
}

let styleLib: StyleLib

export type Styled = (
  attributes: CSSPropertiesObject | any,
  theme: any,
  stringed?: boolean,
) => any

const styledProcess: Styled = (attributes, theme, stringed = false) => {
  let previousCssText = {}
  let cn, toLib

  const cssText = processCss(attributes, theme)
  // console.log('styledProcess cssText: ', cssText)
  if (cssText === previousCssText) return
  previousCssText = cssText
  cn = css(cssText)
  // console.log('styledMemeo: ', cssText, cn, stringed)
  if (typeof styleLib === 'object' && styleLib.hasOwnProperty(cn) && !stringed)
    return cn

  toLib = memoParse(cn, cssText, { ssr: stringed })

  if (stringed) {
    return toLib
  }

  if (typeof toLib === 'object') {
    styleLib = { ...toLib, ...styleLib }
    return cn
  }

  return ''
}

const styled: Styled = (attributes, theme, stringed = false) => {
  let combStyles = ''
  if (theme) {
    if (theme.forwardStyle === undefined) {
      theme.forwardStyle = forwardStyleDefault
    }

    if (Array.isArray(attributes)) {
      // console.log('styled array: ', attributes, attributes.length)
      attributes.map((attrib) => {
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

  return ''
}

const memoStyledProcess = memoize(styledProcess, {
  maxSize: 50,
  onCacheHit(cache, options) {
    // console.log('styledProcess cache was hit')
  },
})

const parse = (cn: string, cs: any, opts = { ssr: false }) => {
  let cStr = ''
  let pStr = ''
  let mQu: any
  let ssr = opts.ssr
  let parsed

  cStr += ssr ? '' : `.${cn}{`
  if (typeof cs === 'object' && Object.entries(cs).length > 0) {
    for (let [n, v] of Object.entries(cs)) {
      n = n.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      if (Object.prototype.toString.call(v) === '[object Object]') {
        let childStr = '{'
        if (typeof v === 'object' && v != null) {
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
        }
        childStr += '}'
        mQu = {}
        if (n.startsWith('@media')) {
          if (
            typeof mQu === 'object' &&
            typeof n === 'string' &&
            mQu.hasOwnProperty(n)
          ) {
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

const extractCss = (theme: any, active = false, opts = {}) => {
  let compStyles = ''
  let global = ''
  let mediaStyles: any
  if (!storedGlobal) {
    global = addGlobal(theme, true, true)
    storeSSR += global
    storedGlobal = true
  }

  for (let [cn, cv] of Object.entries(styleLib)) {
    if (typeof cv.value === 'string') compStyles += cv.value
    if (typeof cv.media === 'object' && Object.entries(cv.media).length > 0) {
      for (let [mn, mv] of Object.entries(cv.media)) {
        let mTmp
        if (typeof mv === 'object' && mv != null) {
          for (let [mchn, mchv] of Object.entries(mv)) {
            mTmp = parse(mchn, mchv, { ssr: true })
          }
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

interface ObjectWithGlobal {
  styles?: any
  forwardStyle?: string[]
}

const parseGlobal = (
  globStyles: ObjectWithGlobal,
  opts = defaultParseGlobalOpts,
) => {
  let globCss = ''
  let theme = globStyles
  theme.forwardStyle = forwardStyleDefault
  let parseTheme = globStyles.styles
  let units = opts.units

  for (let [name, value] of Object.entries(parseTheme)) {
    let processName
    if (name !== 'p' && name !== 'a' && name !== 'b') {
      processName = shortHandAttributes.get(name)
    } else {
      processName = [name]
    }
    globCss += `${processName}{`
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
    let parsedV: any = value
    if (typeof value === 'object' && value != null && name !== 'html') {
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
    for (let [nameV, valueV] of Object.entries(parsedV)) {
      nameV = nameV.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      valueV = valueV === 'text' ? '"text"' : valueV
      valueV =
        typeof valueV === 'string' &&
        nameV === 'font-size' &&
        !/%/g.test(valueV)
          ? `${valueV}px`
          : valueV
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

const addGlobal = (theme: any, parse = true, ssr = false) => {
  let globalStyle = ''
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
