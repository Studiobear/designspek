// Heavy inspiration from: https://github.com/emotion-js/emotion/blob/master/packages/serialize/types/index.d.ts
// TS ver: 4.0.2

import * as CSS from 'csstype'

export type CSSProperties = CSS.PropertiesFallback<number | string>
export type CSSPropertiesObject = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | Array<Extract<CSSProperties[K], string>>
}

export type StyleObject = CSS.Pseudos
