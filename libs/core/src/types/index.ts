import { Space } from './space'
import { Typography } from './typography'
import { Color } from './color'
import * as CSS from 'csstype'
export * from './space'

export type SpekUnits = string
export type SpekStyleUnits = number | string

export type Spek = {
  space: Space
  typography: Typography
  color: Color
  elements?: {
    [key: string]: CSS.Properties
  }
}

export type Theme = {
  space: Space
  typography: Typography
  color: Color
  global?: {
    [key: string]: CSS.Properties
  }
}
