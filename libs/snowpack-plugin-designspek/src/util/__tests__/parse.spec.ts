import { extractStyled, parseStyled, parse } from '../parse'
import { string, stringMulti, extracted } from './__fixtures__/parse'

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
  it('should parse extracted styled function', async () => {
    const result = await parse(string)
    expect(result.length).toEqual(3)
    expect(result).toEqual([
      "<script>\n  import { styled } from '@studiobear/designspek'\n",
      "const container = 'go2225017453'\n",
      '</script>\n\n<div class={container}>\n  <h3>Designspek</h3>\n</div>\n',
    ])
  })
  it('should parse multiple extracted styled functions', async () => {
    const result = await parse(stringMulti)
    expect(result.length).toEqual(5)
    expect(result).toEqual([
      "<script>\n  import { styled } from '@studiobear/designspek'\n",
      "const container = 'go2225017453'\n",
      '',
      "const header = 'go474296207'\n",
      '</script>\n\n<div class={container}>\n  <h3 class={header}>Designspek</h3>\n</div>\n',
    ])
  })
})
