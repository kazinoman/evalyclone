import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 4000,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
  },
  preview: {
    port: 5000,
    open: true,
  },
  optimizeDeps: {
    force: true,
    include: ["antd"],
  },
});
