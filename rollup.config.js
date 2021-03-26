import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2'

import { terser } from "rollup-plugin-terser";
import { DEFAULT_EXTENSIONS } from '@babel/core';
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
      file: pkg.browser.replace('.esm', ''),
      format: 'iife',
      name,
    },
    true
  ],
  [
    {
      file: pkg.browser.replace('.esm', '.min'),
      format: 'iife',
      sourcemap: true,
      name,
    },
    true,
    true
  ]
].map( opts => config(opts[0], opts[1], opts[2]))
