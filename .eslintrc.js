// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/resolver': {
//       node: {
//         paths: ['src'],
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
//   env: {
//     browser: true,
//     amd: true,
//     node: true,
//     jest: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     '@react-native-community',
//     'plugin:prettier/recommended',
//   ],
//   plugins: ['simple-import-sort', 'prettier'],
//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         printWidth: 80,
//         tabWidth: 2,
//         singleQuote: true,
//         trailingComma: 'all',
//         arrowParens: 'always',
//         semi: false,
//         endOfLine: 'auto',
//       },
//     ],
//     'react/react-in-jsx-scope': 'off',
//     'react-hooks/exhaustive-deps': 'off',
//     'react/prop-types': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',
//     indent: ['error', 2],
//     'linebreak-style': ['error', 'unix'],
//     quotes: ['error', 'single'],
//     semi: ['error', 'always'],
//   },
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'linebreak-style': ['error', 'unix'],
    'quotes': [2, "single", { "avoidEscape": true }],
    'semi': ['error', 'always'],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}; 


