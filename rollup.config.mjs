import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",

  output: [
    {
      name: "comlib",
      sourcemap: true,
      file: "./dist/index.js",
      format: "umd",
      globals: { react: "React" },
    },
  ],

  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
    babel({ exclude: "node_modules/**" }),
    // resolve(),
    commonjs(),
  ],

  external: ["react", "react-dom"],
};
