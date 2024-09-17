import js from '@eslint/js'
import solid from 'eslint-plugin-solid/configs/recommended'
import * as tsParser from '@typescript-eslint/parser'
import ts from 'typescript-eslint'

export default [
  {
    ignores: ['node_modules/**/*', 'dist/**/*', '.vinxi/**/*', '.output/**/*', 'eslint.config.js'],
  },

  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,

  {
    ...solid,
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
    },
  },
]