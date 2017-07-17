import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";

export default {
    entry: "./src/index.tsx",
    format: "iife",
    dest: "./bundle.js",
    plugins: [
        resolve(),
        commonjs({
            namedExports: {
                "node_modules/react/react.js": [ "createElement", "Component" ],
                "node_modules/react-dom/index.js": [ "render" ]
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        typescript()
    ]
};