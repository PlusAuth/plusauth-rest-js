// @ts-check
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: true,
        tsconfigRootDir: dirname( fileURLToPath( import.meta.url ) ),
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': [ 'error' ],
      '@typescript-eslint/explicit-module-boundary-types': [ 'error' ],
      '@typescript-eslint/indent': [ 'error', 2, {
        ArrayExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first'
        },
        ImportDeclaration: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 'first'
      } ],
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-parens': [ 'error' ],
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      'array-bracket-spacing': 'error',
      'comma-spacing': [ 2, { before: false, after: true } ],
      'computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true } ],
      'import/first': 'error',
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true
        }
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          },
          'pathGroups': [
            {
              pattern: '~/**',
              group: 'external'
            }
          ]
        }
      ],
      'indent': 'off',
      'key-spacing': [ 'error', { align: 'value' } ],
      'keyword-spacing': [ 'error' ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'lines-between-class-members': [ 'error', 'always' ],
      'no-debugger': 'error',
      'no-extra-parens': 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': [ 'error', { exceptions: { VariableDeclarator: true } } ],
      'no-var': 'error',
      'import/no-duplicates': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true
        }
      ],
      'padded-blocks': [ 'error', 'never' ],
      'prefer-template': 'error',
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true
        }
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never'
        }
      ],
      'space-in-parens': [ 'error', 'always' ],
      'template-curly-spacing': [ 'error', 'always' ]
    }
  }
);
