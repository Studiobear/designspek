import { SpekUnits } from './index'
export type StyleUnits = number | string

export type Space = {
  units?: SpekUnits
  scale?: number[]
  values?: number[]
  alias?: string[]
}
