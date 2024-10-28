import js from '@eslint/js'
import * as tsParser from '@typescript-eslint/parser'
import solid from 'eslint-plugin-solid/configs/recommended'
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
