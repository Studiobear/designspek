import { extractStyled } from '../index'

const string =
  '<script>\n' +
  "  import { styled } from '@studiobear/designspek'\n" +
  '\n' +
  '  const container = styled(\n' +
  '    {\n' +
  "      bg: '#000',\n" +
  "      color: '#fff',\n" +
  '    },\n' +
  '    {},\n' +
  '  )\n' +
  '</script>\n' +
  '\n' +
  '<div class={container}>\n' +
  '  <h3>Designspek</h3>\n' +
  '</div>\n'

describe('util: parse - extractStyled', () => {
  it('should extract `styled` expression from string', async () => {
    const result = await extractStyled(string)
    const exp = /[\f\n\r\t\v\s,;]/g
    const resultRegExp = result.replace(exp, '')
    expect(resultRegExp).toEqual(
      "constcontainer=styled({bg:'#000'color:'#fff'}{})",
    )
  })
})
