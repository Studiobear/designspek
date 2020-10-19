import {
  makeAST,
  reassembleExpression,
  getASTBody,
  getASTExpression,
} from '../exec'
import { string, parsed, ASTBody, ASTExpression } from './__fixtures__/exec'

describe('util: exec - reassembleExpression', () => {
  it('should rebuild styled expression', async () => {
    const result = await reassembleExpression(parsed[0])
    expect(result).toEqual(
      "container = styled( { bg: '#000', color: '#fff', }, {}, )",
    )
  })
})

describe('util: exec - makeAST', () => {
  it('should make AST from expression', async () => {
    const result = await makeAST(string).body[0]
    expect(result).toEqual(ASTBody)
  })
})

describe('util: exec - getASTBody', () => {
  it('should get AST body', async () => {
    const result = await getASTBody(makeAST(string))
    expect(result).toEqual(ASTBody)
  })
})

describe('util: exec - getASTExpression', () => {
  it('should get AST Expression', async () => {
    const resultASTBody = await getASTBody(makeAST(string))
    const result = await getASTExpression(resultASTBody)
    expect(result).toEqual(ASTExpression)
  })
})
