import { extractStyled, splitExprEqual, splitExprSpace } from '../parse'
import { string, stringMulti } from './__fixtures__/parse'

describe('util: parse - extractStyled', () => {
  it('should extract `styled` expression from string', async () => {
    const result = await extractStyled(string)
    const exp = /[\f\n\r\t\v\s,;]/g
    const resultRegExp = result[0].replace(exp, '')
    expect(result.length).toEqual(1)
    expect(resultRegExp).toEqual(
      "constcontainer=styled({bg:'#000'color:'#fff'}{})",
    )
  })
  it('should extract multiple `styled` expressions', async () => {
    const result = await extractStyled(stringMulti)
    const exp = /[\f\n\r\t\v\s,;]/g

    const resultRegExp1 = result[0].replace(exp, '')
    const resultRegExp2 = result[1].replace(exp, '')

    expect(result.length).toEqual(2)
    expect(resultRegExp1).toEqual(
      "constcontainer=styled({bg:'#000'color:'#fff'}{})",
    )
    expect(resultRegExp2).toEqual(
      "constheader=styled({fontSize:'1.5em'color:'#235134'}{})",
    )
  })
})

describe('util: parse - splitExprEqual', () => {
  it('should split expression by "="', async () => {
    const expr = "const container = styled({ bg:'#000', color:'#fff' }, {})"
    const result = await splitExprEqual(expr)

    expect(result.length).toEqual(2)
    expect(result).toEqual([
      'const container ',
      " styled({ bg:'#000', color:'#fff' }, {})",
    ])
  })
})

describe('util: parse - splitExprSpace', () => {
  it('should split expression by " "', async () => {
    const expr = 'const container '
    const result = await splitExprSpace(expr)

    expect(result.length).toEqual(3)
    expect(result).toEqual(['const', 'container', ''])
  })
})
