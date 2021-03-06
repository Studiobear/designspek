// custom implementation of typography.js for use with Svelte
import verticalRhythm from 'compass-vertical-rhythm'
import ms from 'modularscale'

let body = {
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body',
}
let heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const styles: any = (attr: { [key: string]: number | string | any }) => {
  const { fontSizes } = attr
  return {
    root: Object.assign(
      {
        fontSize: fontSizes[2],
      },
      body,
    ),
    img: {
      maxWidth: '100%',
    },
    h1: Object.assign(
      {
        fontSize: fontSizes[5],
      },
      heading,
    ),
    h2: Object.assign(
      {
        fontSize: fontSizes[4],
      },
      heading,
    ),
    h3: Object.assign(
      {
        fontSize: fontSizes[3],
      },
      heading,
    ),
    h4: Object.assign(
      {
        fontSize: fontSizes[2],
      },
      heading,
    ),
    h5: Object.assign(
      {
        fontSize: fontSizes[1],
      },
      heading,
    ),
    h6: Object.assign(
      {
        fontSize: fontSizes[0],
      },
      heading,
    ),
    ul: {
      listStylePosition: 'outside',
      listStyleImage: 'none',
      ml: 3,
    },
    ol: {
      listStylePosition: 'outside',
      listStyleImage: 'none',
      ml: 3,
    },
    li: {
      mb: 2,
      pl: 0,
      ol: {
        my: 2,
        ml: 3,
      },
      ul: {
        my: 2,
        ml: 3,
      },
      p: {
        mb: 2,
      },
    },
    p: Object.assign(
      {
        fontSize: fontSizes[0],
      },
      body,
    ),
    table: {
      borderCollapse: 'collapse',
      width: '100%',
    },
    th: {
      textAlign: 'left',
      borderBottom: '1px solid',
      px: 2,
      py: 1,
      ':first-child': {
        pl: 0,
      },
      ':last-child': {
        pr: 0,
      },
    },
    td: {
      textAlign: 'left',
      borderBottom: '1px solid',
      px: 2,
      py: 1,
      mt: '-1px',
      ':first-child': {
        pl: 0,
      },
      ':last-child': {
        pr: 0,
      },
    },
    blockquote: {
      mx: 3,
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      mt: '-1px',
      mb: 3,
    },
    b: {
      fontWeight: 'bold',
    },
    strong: {
      fontWeight: 'bold',
    },
    code: {
      fontSize: '85%',
    },
    pre: {
      fontSize: '85%',
      padding: 3,
    },
  }
}

export const defaults = {
  baseFontSize: 16,
  baseLineHeight: 1.45,
  headerLineHeight: 1.8,
  scaleRatio: 2,
  googleFonts: [],
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: ['georgia', 'serif'],
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  includeNormalize: true,
  blockMarginBottom: 1,
  rhythmUnit: 'rem',
  roundToNearestHalfLine: true,
}

export const toUnitless = (val: string | number) =>
  typeof val === 'number' ? val : parseFloat(val)

export const getScale = (opts: any) => (value: any) =>
  ms(value, opts.scaleRatio) * opts.baseFontSize

export const getSpace = (result: any, opts: any) => {
  const n = toUnitless(result.rhythm(opts.blockMarginBottom))
  return [0, 1 / 4, 1 / 2, 1, 2, 4, 8].map((v) => v * n)
}

// genericFontFamilies, wrapFontFamily adapted from typography.js
// Wrap font names in quotes, unless the font name is actually a keyword.
// See https://stackoverflow.com/a/13752149 and https://www.w3.org/TR/CSS2/fonts.html#font-family-prop
const genericFontFamilies = [
  'inherit',
  'default',
  'serif',
  'sans-serif',
  'monospace',
  'fantasy',
  'cursive',
  '-apple-system',
  'system-ui',
]

const wrapFontFamily = (fontFamily: string) =>
  genericFontFamilies.includes(fontFamily) ? fontFamily : `'${fontFamily}'`

const stackFonts = (fonts: any[]) => fonts.map(wrapFontFamily).join(', ')

export const getFonts = (result: any, opts: any) => {
  const body = stackFonts(opts.bodyFontFamily)
  const heading = stackFonts(opts.headerFontFamily)
  return {
    body,
    heading,
  }
}

export const getFontSizes = (result: any, opts: any) => {
  const scale = getScale(opts)
  return [-1.5 / 5, -1 / 5, 0, 2 / 5, 3 / 5, 1].map(scale)
}

export const getLineHeights = (result: any, opts: any) => {
  const body = opts.baseLineHeight
  const heading = opts.headerLineHeight
  return {
    body,
    heading,
  }
}

export const getFontWeights = (result: any, opts: any) => {
  const body = opts.bodyWeight
  const bold = opts.boldWeight
  const heading = opts.headerWeight
  return {
    body,
    bold,
    heading,
  }
}

export const typography = (theme: any, _opts = {}) => {
  const opts = { ...defaults, ..._opts }
  // enforce unitless values
  opts.baseFontSize =
    typeof opts.baseFontSize === 'string'
      ? toUnitless(opts.baseFontSize)
      : opts.baseFontSize

  const typo = verticalRhythm(opts)
  typo.options = opts

  // theme.space = getSpace(typo, opts)
  theme.fonts = getFonts(typo, opts)
  theme.fontSizes = getFontSizes(typo, opts)
  theme.fontWeights = getFontWeights(typo, opts)
  theme.lineHeights = getLineHeights(typo, opts)
  let body = {
    fontFamily: theme.fonts.body,
    lineHeight: theme.lineHeights.body,
    fontWeight: theme.fontWeights.body,
  }
  let heading = {
    fontFamily: theme.fonts.heading,
    lineHeight: theme.lineHeights.heading,
    fontWeight: theme.fontWeights.heading,
  }

  const newStyles = styles({ body, heading, fontSizes: theme.fontSizes })
  // console.log('toTheme: ', styles, typo, opts)
  return {
    styles: newStyles,
    typography: typo,
    ...theme,
  }
}

export const fontLink = (typography: any) => {
  // console.log('fontLink: ', typography)
  let fontsStr = ''
  if (typography.googleFonts) {
    const fonts = typography.googleFonts.map((font: any) => {
      let str = ''
      str += font.name.split(' ').join('+')
      str += ':'
      str += font.styles.join(',')

      return str
    })

    fontsStr = fonts.join('|')

    if (fontsStr) {
      // console.log('fontLink2: ', fontsStr)
      return `//fonts.googleapis.com/css?family=${fontsStr}`
    }
    return null
  }
  return
}

export default typography
