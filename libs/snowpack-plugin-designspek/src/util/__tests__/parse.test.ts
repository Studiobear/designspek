import {
  extractStyled,
  splitExprEqual,
  splitExprSpace,
  trimArray,
  trimBreaks,
  trimMultiSpaces,
  separateExpressions,
  linkExpressions,
  parseStyled,
  execToString,
  objToString,
} from '../parse'
import { stringParse, stringMultiParse } from './__fixtures__/parse'

describe('util: parse - extractStyled', () => {
  it('should extract `styled` expression from string', async () => {
    const result = await extractStyled(stringParse)
    const exp = /[\f\n\r\t\v\s,;]/g
    const resultRegExp = result[1].replace(exp, '')
    expect(result.length).toEqual(3)
    expect(resultRegExp).toEqual("constcontainer='go2225017453'")
  })
  it('should extract multiple `styled` expressions', async () => {
    const result = await extractStyled(stringMultiParse)
    const exp = /[\f\n\r\t\v\s,;]/g

    const resultRegExp1 = result[1].replace(exp, '')
    const resultRegExp2 = result[3].replace(exp, '')

    expect(result.length).toEqual(5)
    expect(resultRegExp1).toEqual("constcontainer='go2225017453'")
    expect(resultRegExp2).toEqual("constheader='go474296207'")
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

describe('util: parse - trimArray', () => {
  it('should remove empty values from array', async () => {
    const arr = ['const container ', " styled({ bg:'#000', color:'#fff' }, {})"]
    const result = await trimArray(arr)

    expect(result.length).toEqual(2)
    expect(result).toEqual([
      'const container',
      "styled({ bg:'#000', color:'#fff' }, {})",
    ])
  })
})

describe('util: parse - trimBreaks', () => {
  it('should remove newlines, returns, etc.', async () => {
    const string =
      'const container = styled(\n' +
      '    {\n' +
      "      bg: '#000',\n" +
      "      color: '#fff',\n" +
      '    },\n' +
      '    {},\n' +
      '  )'
    const result = await trimBreaks(string)

    expect(result).toEqual(
      "const container = styled(    {      bg: '#000',      color: '#fff',    },    {},  )",
    )
  })
})

describe('util: parse - trimMultiSpaces', () => {
  it('should remove newlines, returns, etc.', async () => {
    const string =
      "const container = styled(    {      bg: '#000',      color: '#fff',    },    {},  )"
    const result = await trimMultiSpaces(string)

    expect(result).toEqual(
      "const container = styled( { bg: '#000', color: '#fff', }, {}, )",
    )
  })
})

describe('util: parse - separateExpressions', () => {
  it('should separate expressions', async () => {
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
  it('should relink styled expression with variable assignment', async () => {
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

describe('util: parse - parseStyled', () => {
  it('should parse extracted styled functions', async () => {
    const extracted =
      '  const container = styled(\n' +
      '    {\n' +
      "      bg: '#000',\n" +
      "      color: '#fff',\n" +
      '    },\n' +
      '    {},\n' +
      '  )'
    const result = await parseStyled(extracted)
    expect(result.length).toEqual(3)
    expect(result).toEqual([
      'const',
      'container',
      "styled( { bg: '#000', color: '#fff', }, {}, )",
    ])
  })
})

describe('util: parse - execToString', () => {
  it('should should makes string from executed styled array', async () => {
    const arr = ['const', 'header', 'go474296207']
    const result = await execToString(arr)

    expect(result).toEqual("const header = 'go474296207'" + '\n')
  })
})

describe('util: parse - objToString', () => {
  it('should should makes string from parse array', async () => {
    const arr = ['const', 'header', 'go474296207']
    const result = await objToString(arr)

    expect(result).toEqual('const header go474296207')
  })
})
