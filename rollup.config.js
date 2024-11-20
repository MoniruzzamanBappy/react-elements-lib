import postcss from "rollup-plugin-postcss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    postcss({
      extract: true, // Extract CSS into separate files
      minimize: true, // Minify CSS
    }),
  ],
});
