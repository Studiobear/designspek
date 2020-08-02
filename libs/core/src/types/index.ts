import { Space } from './space'
import { Typography } from './typography'
export * from './space'

export type SpekUnits = string

export type Spek = {
  space?: Space
  typography?: Typography
}

export type Theme = {
  space?: Space
}
