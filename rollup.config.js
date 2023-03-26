import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";

export default [
	{
		input: "./react-huge-icon-dev/components/outline/index.js",
		output: [
			{
				file: "react-huge-icon/outline/index.js",
				format: "cjs",
			},
			{
				file: "react-huge-icon/outline/index.esm.js",
				format: "esm",
				exports: "named",
			},
		],
		plugins: [
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"],
			}),
            external(),
            resolve(),
			commonjs()
		],
	},
	{
		input: "./react-huge-icon-dev/components/solid/index.js",
		output: [
			{
				file: "react-huge-icon/solid/index.js",
				format: "cjs",
			},
			{
				file: "react-huge-icon/solid/index.esm.js",
				format: "esm",
				exports: "named",
			},
		],
		plugins: [
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"],
			}),
            external(),
            resolve(),
			commonjs()
		],
	},
	{
		input: "./react-huge-icon-dev/components/bulk/index.js",
		output: [
			{
				file: "react-huge-icon/bulk/index.js",
				format: "cjs",
			},
			{
				file: "react-huge-icon/bulk/index.esm.js",
				format: "esm",
				exports: "named",
			},
		],
		plugins: [
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"],
			}),
            external(),
            resolve(),
			commonjs()
		],
	},

];