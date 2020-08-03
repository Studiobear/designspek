import { Space } from './space'
import { Typography } from './typography'
import * as CSS from 'csstype'
export * from './space'

export type SpekUnits = string

export type Spek = {
  space?: Space
  typography?: Typography
  elements: {
    [key: string]: CSS.Properties
  }
}

export type Theme = {
  space?: Space
}
