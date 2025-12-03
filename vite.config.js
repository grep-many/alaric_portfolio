/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { baseName } from "./config";

// https://vite.dev/config/
export default defineConfig({
  base: `/${baseName}`,
  assetsInclude: ["**/*.glb"],
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 2000, // 2MB
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
