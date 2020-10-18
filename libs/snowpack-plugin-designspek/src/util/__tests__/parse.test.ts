import { extractStyled } from '../index'
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
