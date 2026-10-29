import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api requests to Express, so the browser sees one origin
    proxy: { "/api": "http://localhost:3001" },
  },
});