module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', //리액트 버전 detect
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@page', './src/page'],
          ['@assets', './src/assets'],
          ['@utils', './src/utils'],
          ['@store', './src/store'],
          ['@api', './src/api'],
          ['@hooks', './src/hooks'],
          ['@constants', './src/constants'],
          ['@route', './src/route'],
          ['@enums', './src/enums'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.json', '.svg'],
      },
    },
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['.eslintrc.cjs', 'public', 'dist', '.prettierrc', '*.html', 'jsconfig.json'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
      },
    ],
  },
};
