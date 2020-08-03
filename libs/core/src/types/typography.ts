export type TypographyHeading = {
  fontFamily: string
  lineHeight: string
  fontWeight: string
}

type TypographyFont = {
  family: string
  weights: string[]
  source: string
}

type TypographyHeader = {
  family: string
  weights: string[]
  source: string
}

export type Typography = {
  units: string
  scaleRatio: number
  baseFontSize: number
  baseLineHeight: number
  headerLineHeight: number
  fonts: TypographyFont[]
  headers: {
    fontFamily: ['Fira Sans', 'Helvetica Neue', 'Helvetica', 'sans-serif']
    weight: '600'
  }
}
