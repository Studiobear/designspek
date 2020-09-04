import * as z from 'zod'
import { Space } from './space'
import { Typography } from './typography'
import { Color } from './color'
import * as CSS from 'csstype'
export * from './space'

export const LengthEnum = z.enum([
  'px',
  'rem',
  'em',
  '%',
  'cap',
  'ch',
  'ic',
  'vw',
  'vh',
  'vmin',
  'vmax',
])
export type LengthEnum = z.infer<typeof LengthEnum>
export const TimeEnum = z.enum(['s', 'ms'])
export type TimeEnum = z.infer<typeof TimeEnum>

export type SpekTLength = number | string

export type Spek = {
  space: Space
  typography: Typography
  color: Color
  global?: object
  elements?: {
    [key: string]: {} // CSS.Properties
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
