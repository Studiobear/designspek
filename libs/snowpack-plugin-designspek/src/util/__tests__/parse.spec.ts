import { extractStyled, parseStyled } from '../parse'
import { stringMulti } from './__fixtures__/parse'

describe('util: parse - parseStyled', () => {
  it('should parse extracted styled functions', async () => {
    const extracted = await extractStyled(stringMulti)
    const result = await parseStyled(extracted)

    expect(result.length).toEqual(2)
    expect(result).toEqual([
      ['const', 'container', "styled( { bg: '#000', color: '#fff', }, {}, )"],
      [
        'const',
        'header',
        "styled( { fontSize: '1.5em', color: '#235134', }, {}, )",
      ],
    ])
  })
})
