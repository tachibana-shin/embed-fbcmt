import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/client/main.ts", "src/client/vue.ts"],
    outDir: "dist",
    dts: true,
    treeshake: true,
    clean: true,
    format: ["cjs", "esm"]
})