import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
    {
        input: './react-huge-icons-develop/_components/outline/index.ts',
        output: [
            {
                file: 'react-huge-icons/outline/index.js',
                format: 'cjs',
            },
            {
                file: 'react-huge-icons/outline/esm/index.js',
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
        input: "react-huge-icons/outline/types/outline/index.d.ts",
        output: [{ file: "react-huge-icons/outline/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },
    {
        input: "react-huge-icons/outline/esm/types/outline/index.d.ts",
        output: [{ file: "react-huge-icons/outline/esm/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
    // {
    //     input: './react-huge-icons-develop/_components/solid/index.ts',
    //     output: [
    //         {
    //             file: 'react-huge-icons/solid/index.js',
    //             format: 'cjs',
    //         },
    //         {
    //             file: 'react-huge-icons/solid/index.esm.js',
    //             format: 'es',
    //             exports: 'named',
    //         },
    //     ],
    //     plugins: [
    //         // babel({
    //         //     exclude: 'node_modules/**',
    //         //     presets: ['@babel/preset-react'],
    //         // }),
    //         external(),
    //         resolve(),
    //         commonjs(),
    //     ],
    // },
    // {
    //     input: './react-huge-icons-develop/_components/bulk/index.ts',
    //     output: [
    //         {
    //             file: 'react-huge-icons/bulk/index.js',
    //             format: 'cjs',
    //         },
    //         {
    //             file: 'react-huge-icons/bulk/index.esm.js',
    //             format: 'es',
    //             exports: 'named',
    //         },
    //     ],
    //     plugins: [
    //         // babel({
    //         //     exclude: 'node_modules/**',
    //         //     presets: ['@babel/preset-react'],
    //         // }),
    //         external(),
    //         resolve(),
    //         commonjs(),
    //     ],
    // },
];
