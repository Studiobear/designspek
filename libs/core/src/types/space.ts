import * as z from 'zod'
import { LengthEnum } from './index'

const SpaceSchema = z.object({
  units: LengthEnum,
  scale: z.number().array(),
  values: z.number().array(),
  alias: z.string().array(),
  error: z.string(),
})

export const Space = SpaceSchema.partial()

export type Space = z.TypeOf<typeof Space>
