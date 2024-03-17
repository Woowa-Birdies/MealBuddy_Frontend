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
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['.eslintrc.cjs', 'public', 'dist', '.prettierrc', '*.html', 'jsconfig.json'],
  rules: {
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
