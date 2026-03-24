import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: true, // Em versões novas, 'true' libera geral, melhor que 'all'
    cors: true,
    strictPort: false,
    hmr: {
      clientPort: 443, // Isso ajuda o Hot Reload a funcionar via HTTPS do Cloudflare
    },
  },
});
