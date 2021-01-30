import emitEJS from 'rollup-plugin-emit-ejs';

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace';
import pluginUrl from '@rollup/plugin-url'
import svg from 'rollup-plugin-svg'
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';

import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer';

import serve from 'rollup-plugin-serve';

const env = process.env.NODE_ENV || 'development';

let aliasEntries = [];
let outputs = [];
if (env === 'production') {
  aliasEntries.push({ find: 'single-spa', replacement: 'single-spa/lib/esm/single-spa.min' });
  outputs.push({
    dir: "dist",
    format: 'es', // 'system', // 'cjs', //'es',
    sourcemap: 'hidden',
    entryFileNames: '[name].js',
    chunkFileNames: (chunkInfo) => {
      if (chunkInfo.name && chunkInfo.name.startsWith('anychart'))
        return 'exhibit-chart-[hash].js'
      else
        return '[name]-[hash].js';
    },
    //exports: 'named',
    plugins: [
      terser()
    ]
  });
} else {
  aliasEntries.push({ find: 'single-spa', replacement: 'single-spa/lib/esm/single-spa.dev' });
  outputs.push({
    dir: "dist",
    format: 'es', //'system',// 'cjs', //'es',
    sourcemap: 'inline',
    entryFileNames: '[name].js',
    plugins: [
    ]
    //exports: 'named',
  });
}

export default {
  cache: true,
  input: { "exhibit" : "src/index.js"},
  output: outputs,
  external: [
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    emitEJS({
      src: 'src',
      extension : 'html'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
      __buildEnv__: env,
      __buildDate__: () => new Date(),
      __buildVersion: 15
    }),
    // peerDepsExternal(),
    postcss({
      modules: true,
      minimize: true,
      sourceMap: (env === 'production' ? 'hidden' : 'inline')
    }),
    babel({
	    babelHelpers: 'bundled'
    }),
    pluginUrl({
      exclude: '**/*.svg'
    }),
    svg({
      base64: false
    }),
    json(),
    image({
      exclude: [
        "**/*.svg"
      ]
    }),
    resolve({
      // preserveSymlinks : true,
      dedupe: ['react', 'react-dom']
    }),
    alias({
      entries: [
        aliasEntries
      ]
    }),
    commonjs(
    ),
    visualizer({
      filename: 'dist/bundle-analyze.html',
      gzipSize : true
    }),
    serve('dist')
  ]
};
