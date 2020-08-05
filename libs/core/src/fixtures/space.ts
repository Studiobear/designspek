import { Lens } from 'monocle-ts'
import { Spek, Space } from '../types'

export const fixSpecSpacePre: Lens<Spek, Space | undefined> = {
  units: 'em',
  scale: [0, 0.125, 0.25, 0.5, 1, 1.5, 2, 4, 8],
  // values: [0, 2, 4, 8, 16, 24, 32, 64, 128],
  alias: ['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
}
