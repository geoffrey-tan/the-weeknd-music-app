module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['**/*'],
      extends: ['plugin:react/jsx-runtime', 'prettier'],
    },
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
}
