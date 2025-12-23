import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://exoplanetarchive.ipac.caltech.edu",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  define: {
    "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
  },
});
