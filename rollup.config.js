import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [

    /* ============================ BULK ============================= */
    {
        input: './scripts/react/bulk/index.ts',
        output: [
            {
                file: 'react/bulk/index.js',
                format: 'cjs',
            },
            {
                file: 'react/bulk/index.esm.js',
                format: 'esm',
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
        ],
    },
    {
        input: "react/bulk/types/bulk/index.d.ts",
        output: [{ file: "react/bulk/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },

    /* ============================ OUTLINE ============================= */
    {
        input: './scripts/react/outline/index.ts',
        output: [
            {
                file: 'react/outline/index.js',
                format: 'cjs',
            },
            {
                file: 'react/outline/index.esm.js',
                format: 'esm',
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
        ],
    },
    {
        input: "react/outline/types/outline/index.d.ts",
        output: [{ file: "react/outline/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },

    /* ============================ SOLID ============================= */
    {
        input: './scripts/react/solid/index.ts',
        output: [
            {
                file: 'react/solid/index.js',
                format: 'cjs',
            },
            {
                file: 'react/solid/index.esm.js',
                format: 'esm',
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
        ],
    },
    {
        input: "react/solid/types/solid/index.d.ts",
        output: [{ file: "react/solid/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },
];
