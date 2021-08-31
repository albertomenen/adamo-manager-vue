module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    semi: ['warn', 'never'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'space-before-blocks': 'warn',
    // js
    'keyword-spacing': ['warn', { before: true, after: true }],
    'space-infix-ops': 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral'],
        ignoreComments: true
      }
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'linebreak-style': 0,
    'no-trailing-spaces': 'warn',
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'key-spacing': ['warn', { afterColon: true }],
    'eol-last': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': 'warn',
    'no-multi-spaces': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    // vue
    'vue/singleline-html-element-content-newline': 'off',
    'template-curly-spacing': 'off',
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        registeredComponentsOnly: false
      }
    ],
    'vue/attributes-order': [
      'warn',
      {
        alphabetical: true
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/script-indent': [
      'warn',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: []
      }
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        baseIndent: 0
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
