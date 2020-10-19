import { parseScript } from 'esprima'
import * as O from 'fp-ts/Option'
import type { Program } from 'esprima'
import type {
  Directive,
  Statement,
  ModuleDeclaration,
  Expression,
} from 'estree'
// import type {Program} from 'esprima'
// import evaluate from 'static-eval'

export const execStyled = (extracted: string[][]): string[][] => {
  return [[]]
}

export const reassembleExpression = (arr: string[]): string =>
  `${arr[1]} = ${arr[2]}`

export const makeAST = (s: string): Program => parseScript(s)
export const getASTBody = (p: Program) => p.body[0]
export const getASTExpression = (
  o: Directive | Statement | ModuleDeclaration,
): Expression | null => (o.type !== 'ExpressionStatement' ? null : o.expression)
