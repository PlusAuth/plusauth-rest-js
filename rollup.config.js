import { DEFAULT_EXTENSIONS } from '@babel/core';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import resolve from '@rollup/plugin-node-resolve';

import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json';

const extensions= [...DEFAULT_EXTENSIONS]

const config = (output, browser= false, min= false ) =>({
  input: './src/index.ts',
  external: [],
  output,
  plugins: [
    typescript( {
      clean: true,
      objectHashIgnoreUnknownHack: true,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        }
      }
    }),
    resolve({ extensions, browser}),
    commonjs(),
    json({
      compact: true,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
    ( min && terser({
      output: {
        comments: false
      }
    }))
  ]
})

const name = 'PlusAuthRestClient';

export default [
  [{
    file: pkg.main,
    format: 'cjs',
  }],
  [
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  [
    {
      file: pkg.browser,
      format: 'es',
    },
    true
  ],
  [
    {
      file: pkg.browser.replace('.browser.esm', ''),
      format: 'iife',
      name,
    },
    true
  ],
  [
    {
      file: pkg.browser.replace('.browser.esm', '.min'),
      format: 'iife',
      sourcemap: true,
      name,
    },
    true,
    true
  ]
].map( opts => config(opts[0], opts[1], opts[2]))
