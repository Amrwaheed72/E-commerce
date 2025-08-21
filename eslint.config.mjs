import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', "prettier",),

  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },

  {
    rules: {
      // 🧹 Code style
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'quotes': 'off', // handled by Prettier
      'indent': 'off', // handled by Prettier

      // ⚡ React/Next.js
      'react/jsx-no-undef': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'warn',

      // 🏗️ Best practices
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
    },

  },
];

export default eslintConfig;
