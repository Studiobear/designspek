import { buildExec, execStyled } from '../exec'
import { parsed, ASTCallExpression } from './__fixtures__/exec'

describe('util: exec - buildExec', () => {
  it('should build callable expressions from parsed `style` functions', async () => {
    const result = await buildExec(parsed[0])
    expect(result).toEqual(ASTCallExpression)
  })
})

describe('util: exec - execStyled', () => {
  it('should replace styled functions with classnames', async () => {
    const result = await execStyled(parsed[0])
    expect(result).toEqual(['const', 'container', 'go2225017453'])
  })
})
