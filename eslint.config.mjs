import { defineConfig, globalIgnores } from 'eslint/config';
import _import from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const baseDir = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: baseDir,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const compatConfigs = compat.extends(
  'airbnb-base',
  'plugin:@typescript-eslint/recommended',
  'prettier',
  'plugin:prettier/recommended',
);
const configsWithFixedImport = compatConfigs.map(c => {
  if (c.plugins?.import) {
    const { import: _imp, ...restPlugins } = c.plugins;
    return {
      ...c,
      plugins: { ...restPlugins, import: fixupPluginRules(_import) },
    };
  }
  return c;
});

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/dist/',
    '**/build/',
    '**/coverage/',
    '**/.eslintcache',
    '**/*.tsbuildinfo',
    '**/.env',
    '**/.env.*.local',
    '**/.yalc',
    '**/yalc.lock',
    'src/api/gql/**',
  ]),

  ...configsWithFixedImport,

  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    languageOptions: {
      globals: { ...globals.node },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 'off',
      'no-useless-constructor': 'off',
      'class-methods-use-this': 'off',
      'no-empty-function': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],
      'lines-between-class-members': [
        'error',
        {
          enforce: [{ blankLine: 'always', prev: 'method', next: 'method' }],
        },
      ],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.{ts,tsx}',
            '**/*.spec.{ts,tsx}',
            '**/test/**',
            '**/*.config.{ts,js,mjs}',
          ],
        },
      ],
    },
  },
]);
