import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['dist', 'src/services/generated']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'perfectionist/sort-array-includes': [
        'error',
        {
          groupKind: 'literals-first',
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          forceNumericSort: false,
          ignoreCase: true,
          order: 'asc',
          partitionByComment: false,
          sortByValue: false,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: ['^react$', '^react-dom/.+'],
              groupName: 'react',
            },
            {
              elementNamePattern: ['@services/.+', '@generated/.+'],
              groupName: 'api',
            },
            {
              elementNamePattern: ['@app/.+'],
              groupName: 'app',
            },
            {
              elementNamePattern: ['@assets/.+', '@styles/.+', '@fluentui/react-icons'],
              groupName: 'assets',
            },
            {
              elementNamePattern: ['@components/.+', '@layouts/.+'],
              groupName: 'components',
            },
            {
              elementNamePattern: ['@korea-senior/.+'],
              groupName: 'koreapeople',
            },
            {
              elementNamePattern: ['@pages/.+'],
              groupName: 'pages',
            },
            {
              elementNamePattern: ['@config', '@config/.+', '@libs/.+', '@hooks', '@hooks/.+', '@utils/.+', '@constants', '@constants/.+'],
              groupName: 'utils',
            },
          ],
          groups: [
            'react',
            'type-import',
            ['value-builtin', 'value-external'],
            ['value-internal'],
            'app',
            'api',
            'koreapeople',
            'components',
            'pages',
            'utils',
            'assets',
            'type-internal',
            ['value-parent', 'value-sibling', 'value-index'],
            ['type-parent', 'type-sibling', 'type-index'],
            'value-style',
            'unknown',
          ],
          ignoreCase: true,
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          groupKind: 'required-first',
          ignoreCase: true,
          order: 'asc',
          partitionByNewLine: false,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^on.+',
              groupName: 'callback',
            },
            {
              elementNamePattern: '^key$',
              groupName: 'key',
            },
            {
              elementNamePattern: '^ref$',
              groupName: 'ref',
            },
          ],
          groups: ['shorthand-prop', 'key', 'ref', 'unknown', 'callback', 'multiline-prop'],
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          groupKind: 'values-first',
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          groupKind: 'values-first',
          ignoreAlias: false,
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          groupKind: 'required-first',
          ignoreCase: true,
          order: 'asc',
          partitionByNewLine: false,
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          destructureOnly: true,
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  },
]);
