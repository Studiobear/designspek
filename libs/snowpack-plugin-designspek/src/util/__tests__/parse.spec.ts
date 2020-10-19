import { separateExpressions, linkExpressions } from '../parse'
// import { string, stringMulti } from './__fixtures__/parse'

describe('util: parse - separateExpressions', () => {
  it('should separate ', async () => {
    const expr = "const container = styled({ bg:'#000', color:'#fff' }, {})"
    const result = await separateExpressions(expr)

    expect(result.length).toEqual(2)
    expect(result).toEqual([
      'const container',
      "styled({ bg:'#000', color:'#fff' }, {})",
    ])
  })
})

describe('util: parse - linkExpressions', () => {
  it('should separate ', async () => {
    const expr = ['const container', "styled({ bg:'#000', color:'#fff' }, {})"]
    const result = await linkExpressions(expr)

    expect(result.length).toEqual(3)
    expect(result).toEqual([
      'const',
      'container',
      "styled({ bg:'#000', color:'#fff' }, {})",
    ])
  })
})
