import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import packageJson from "./package.json"
const devMode = (process.env.NODE_ENV === 'development');
export default [
    {
        // ...
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            peerDepsExternal(),
            typescript({ tsconfig: "tsconfig.json" }),
            resolve(),
            commonjs({
                exclude: 'src/**',
            }),    


                 
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['transform-react-remove-prop-types'],
            }),
            postcss({
                plugins: [autoprefixer],
                extract: true,
                minimize: true,
                sourceMap: true,
            }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: !devMode,
                    drop_debugger: !devMode
                },
                output: { quote_style: 1 }
            })
        ],
        external: ['react', 'react-dom'],
    },
];