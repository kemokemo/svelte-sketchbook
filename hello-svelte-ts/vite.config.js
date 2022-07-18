import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/main.ts",
            fileName: "my-components",
            formats: ['es']
        },
        // default value is true
        minify: true
    },
    plugins: [
        svelte({
            compilerOptions: {
                customElement: true,
            },
        }),
    ],
});
