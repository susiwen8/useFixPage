import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'es'
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'index',
            globals: {
                react: 'react',
            }
        },
        {
            file: 'dist/index.d.ts',
        }
    ],
    external: ['react'],
    plugins: [
        typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
        commonjs(),
        env === 'production' && terser()
    ]
}