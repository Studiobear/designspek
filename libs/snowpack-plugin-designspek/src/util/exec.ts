import { parseScript } from 'esprima'
// import * as O from 'fp-ts/Option'
import type { Program } from 'esprima'
import type {
  Directive,
  Statement,
  ModuleDeclaration,
  Expression,
} from 'estree'
import { pipe } from 'fp-ts/lib/function'
import evaluate from 'static-eval'
import { styled } from '@studiobear/designspek'

// utility functions
export const reassembleExpression = (arr: string[]): string =>
  `${arr[1]} = ${arr[2]}`

export const makeAST = (s: string): Program => parseScript(s)
export const getASTBody = (p: Program) => p.body[0]
export const getASTExpression = (
  o: Directive | Statement | ModuleDeclaration,
) => (o.type !== 'ExpressionStatement' ? null : o.expression)

export const getASTCallExpression = (o: any) =>
  o !== null && o.type == 'AssignmentExpression' && o.right !== undefined
    ? o.right
    : null

export const execExpression = (ast: any): string =>
  ast === null ? null : evaluate(ast, { styled })

export const replaceExpression = (arr: string[], classname: string) => {
  const ret = arr.slice(0)
  ret[2] = classname
  return ret
}

/**
 * MAIN FUNCTIONS
 * */
export const buildExec = (arr: string[]) =>
  pipe(
    arr,
    reassembleExpression,
    makeAST,
    getASTBody,
    getASTExpression,
    getASTCallExpression,
  )

export const execStyled = (extracted: string[][]): string[][] =>
  extracted.map((exp) => {
    const className = pipe(exp, buildExec, execExpression)
    return replaceExpression(exp, className)
  })
