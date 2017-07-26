import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import minify from "rollup-plugin-uglify";

export default {
    entry: "src/index.ts",
    format: "iife",
    dest: "bundle.min.js",
    plugins: [
        resolve(),
        typescript(),
        minify()
    ]
};