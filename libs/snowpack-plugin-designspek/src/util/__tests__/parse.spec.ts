import { extractStyled, parseStyled, parse } from '../parse'
import { string, extracted } from './__fixtures__/parse'

describe('util: parse - pre-piped parse', () => {
  it('should parse extracted styled functions', async () => {
    const result = await parseStyled(extracted)
    expect(result.length).toEqual(3)
    expect(result).toEqual([
      'const',
      'container',
      "styled( { bg: '#000', color: '#fff', }, {}, )",
    ])
  })
})

describe('util: parse - parse', () => {
  it('should parse extracted styled functions', async () => {
    const result = await parse(string)
    expect(result.length).toEqual(3)
    expect(result).toEqual([
      "<script>\n  import { styled } from '@studiobear/designspek'\n",
      "const container = 'go2225017453'\n",
      '</script>\n\n<div class={container}>\n  <h3>Designspek</h3>\n</div>\n',
    ])
  })
})
