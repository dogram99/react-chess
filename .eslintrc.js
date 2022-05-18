module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  globals: {
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      [
        {
          selector: ['variable'],
          types: ['boolean'],
          prefix: ['is', 'has'],
        },
        {
          selector: ['typeLike'],
          format: ['PascalCase'],
        },
        {
          selector: ['interface'],
          prefix: ['I'],
        },
        {
          selector: ['enum'],
          format: ['PascalCase'],
          postfix: ['Enum'],
        },
        {
          selector: ['enumMember'],
          format: ['UPPER_CASE'],
        },
      ],
    ],
    'react/display-name': 'off',
    'prettier/prettier': 'warn',
    'object-curly-newline': 'off',
    'react/no-unused-prop-types': 'error',
    'no-nested-ternary': 'warn',
    'operator-linebreak': 'off',
    'arrow-parens': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'react/require-default-props': 'off',
    'max-len': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'no-await-in-loop': 'warn',
    '@typescript-eslint/indent': 'off',
    'no-param-reassign': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-prototype-builtins': 'warn',
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'error',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'getters',
          'setters',
          'lifecycle',
          'render',
          'instance-methods',
          'everything-else',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } },
      },
    ],
    'no-restricted-imports': ['error', '@material-ui/core', '@material-ui/icons'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-undef': 'off',
    'consistent-return': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['warn'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-new': 0,
  },
};
