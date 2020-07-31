import { shortHandAttr } from './shorthand'

const PKG_VERSION = 'PKG_VERSION'
export const version = PKG_VERSION

export type StyleUnits = number | string

export type Theme = {
  space?: Space
}

export type Spec = {
  space: string
}

export const units = (x: StyleUnits): StyleUnits => {
  return x
}

export type Space = {
  units?: StyleUnits | Function
}

export interface Styled {
  theme: Theme
}

export const styled = <Styled>(theme): Spec => {
  return { space: 'space' }
}
