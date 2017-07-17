import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
    entry: "src/index.js",
    format: "iife",
    dest: "bundle.js",
    plugins: [
        resolve(),
        typescript()
    ]
};