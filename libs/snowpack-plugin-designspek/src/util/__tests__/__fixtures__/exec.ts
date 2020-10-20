export const string =
  "container = styled( { bg: '#000', color: '#fff', }, {}, )"
export const parsed = [
  ['const', 'container', "styled( { bg: '#000', color: '#fff', }, {}, )"],
  [
    'const',
    'header',
    "styled( { fontSize: '1.5em', color: '#235134', }, {}, )",
  ],
]

export const ASTBody = {
  expression: {
    left: { name: 'container', type: 'Identifier' },
    operator: '=',
    right: {
      arguments: [
        {
          properties: [
            {
              computed: false,
              key: { name: 'bg', type: 'Identifier' },
              kind: 'init',
              method: false,
              shorthand: false,
              type: 'Property',
              value: { raw: "'#000'", type: 'Literal', value: '#000' },
            },
            {
              computed: false,
              key: { name: 'color', type: 'Identifier' },
              kind: 'init',
              method: false,
              shorthand: false,
              type: 'Property',
              value: { raw: "'#fff'", type: 'Literal', value: '#fff' },
            },
          ],
          type: 'ObjectExpression',
        },
        { properties: [], type: 'ObjectExpression' },
      ],
      callee: { name: 'styled', type: 'Identifier' },
      type: 'CallExpression',
    },
    type: 'AssignmentExpression',
  },
  type: 'ExpressionStatement',
}

export const ASTExpression = {
  left: { name: 'container', type: 'Identifier' },
  operator: '=',
  right: {
    arguments: [
      {
        properties: [
          {
            computed: false,
            key: { name: 'bg', type: 'Identifier' },
            kind: 'init',
            method: false,
            shorthand: false,
            type: 'Property',
            value: { raw: "'#000'", type: 'Literal', value: '#000' },
          },
          {
            computed: false,
            key: { name: 'color', type: 'Identifier' },
            kind: 'init',
            method: false,
            shorthand: false,
            type: 'Property',
            value: { raw: "'#fff'", type: 'Literal', value: '#fff' },
          },
        ],
        type: 'ObjectExpression',
      },
      { properties: [], type: 'ObjectExpression' },
    ],
    callee: { name: 'styled', type: 'Identifier' },
    type: 'CallExpression',
  },
  type: 'AssignmentExpression',
}

export const ASTCallExpression = {
  arguments: [
    {
      properties: [
        {
          computed: false,
          key: {
            name: 'bg',
            type: 'Identifier',
          },
          kind: 'init',
          method: false,
          shorthand: false,
          type: 'Property',
          value: {
            raw: "'#000'",
            type: 'Literal',
            value: '#000',
          },
        },
        {
          computed: false,
          key: {
            name: 'color',
            type: 'Identifier',
          },
          kind: 'init',
          method: false,
          shorthand: false,
          type: 'Property',
          value: {
            raw: "'#fff'",
            type: 'Literal',
            value: '#fff',
          },
        },
      ],
      type: 'ObjectExpression',
    },
    {
      properties: [],
      type: 'ObjectExpression',
    },
  ],
  callee: {
    name: 'styled',
    type: 'Identifier',
  },
  type: 'CallExpression',
}
