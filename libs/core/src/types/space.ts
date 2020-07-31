export type StyleUnits = number | string

type SpaceUnits = {
  margin?: string
  padding?: string
}

export type Space = {
  units?: SpaceUnits
  values: number[]
  aliases: string[]
}
