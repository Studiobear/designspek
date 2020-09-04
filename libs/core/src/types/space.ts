import * as z from 'zod'

export const SpaceSchema = z.object({
  units: z.string(),
  scale: z.number().array(),
  values: z.number().array(),
  alias: z.string().array(),
  error: z.string(),
})

export type Space = z.TypeOf<typeof SpaceSchema>
