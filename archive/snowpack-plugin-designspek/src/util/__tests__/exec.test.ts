import {
  makeAST,
  reassembleExpression,
  getASTBody,
  getASTExpression,
  getASTCallExpression,
  execExpression,
  replaceExpression,
} from '../exec'

import {
  stringExec,
  parsedExec,
  ASTBody,
  ASTExpression,
  ASTCallExpression,
} from './__fixtures__/exec'

describe('util: exec - reassembleExpression', () => {
  it('should rebuild styled expression', async () => {
    const result = await reassembleExpression(parsedExec[0])
    expect(result).toEqual(
      "container = styled( { bg: '#000', color: '#fff', }, {}, )",
    )
  })
})

describe('util: exec - makeAST', () => {
  it('should make AST from expression', async () => {
    const result = await makeAST(stringExec).body[0]
    expect(result).toEqual(ASTBody)
  })
})

describe('util: exec - getASTBody', () => {
  it('should get body from AST', async () => {
    const result = await getASTBody(makeAST(stringExec))
    expect(result).toEqual(ASTBody)
  })
})

describe('util: exec - getASTExpression', () => {
  it('should get _right_ Expression (after `=`) from body', async () => {
    const resultASTBody = await getASTBody(makeAST(stringExec))
    const result = await getASTExpression(resultASTBody)
    expect(result).toEqual(ASTExpression)
  })
})

describe('util: exec - getASTCallExpression', () => {
  it('should get Call Expression from within _right_ Expression', async () => {
    const resultASTBody = await getASTBody(makeAST(stringExec))
    const resultASTExpr = await getASTExpression(resultASTBody)
    const result = await getASTCallExpression(resultASTExpr)
    expect(result).toEqual(ASTCallExpression)
  })
})

describe('util: exec - execExpression', () => {
  it('should execute styled function', async () => {
    const result = await execExpression(ASTCallExpression)
    expect(result).toEqual('go2225017453')
  })
})

describe('util: exec - replaceExpression', () => {
  it('should replace styled value in array with classname', async () => {
    const classname = 'go2225017453'
    const result = await replaceExpression(parsedExec[0], classname)
    expect(result).toEqual(['const', 'container', 'go2225017453'])
  })
})
