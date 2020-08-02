type TypographyHeading = {
  fontFamily: string
  lineHeight: string
  fontWeight: string
}

export type Typography = {
  units: 'rem'
  scaleRatio: 1.333
  baseFontSize: '16px'
  baseLineHeight: 1.45
  headerLineHeight: 1.8
  fonts: [
    {
      family: 'Fira Sans'
      weights: ['200', '200i', '400', '400i', '600', '600i']
      source: 'GOOGLE'
    },
  ]
  headers: {
    fontFamily: ['Fira Sans', 'Helvetica Neue', 'Helvetica', 'sans-serif']
    weight: '600'
  }
}
