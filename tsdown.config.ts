import { defineConfig } from "tsdown"

export default defineConfig([
  // Browser (IIFE)
  {
    entry: {
      "plusauth-rest-js": "src/index.ts",
    },
    format: "iife",
    globalName: "PlusAuthRest",
    platform: "browser",
    target: "es2020",
    minify: true,
    sourcemap: false,
    outDir: "dist",
  },

  // ESM (Node / modern)
  {
    entry: {
      "plusauth-rest-js": "src/index.ts",
    },
    format: "esm",
    platform: "node",
    target: ["es2020", "node20"],
    minify: false,
    sourcemap: true,
    outDir: "dist",
  },

  // CJS (Node)
  {
    entry: {
      "plusauth-rest-js": "src/index.ts",
    },
    dts: false,
    format: "cjs",
    platform: "node",
    target: "node20",
    minify: false,
    sourcemap: true,
    outDir: "dist",
  },
])
