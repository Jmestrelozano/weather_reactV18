import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/luxon") ||
            id.includes("node_modules/@iconscout/react-unicons") ||
            id.includes("node_modules/react-toastify") ||
            id.includes("node_modules/@reduxjs/toolkit")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
});
