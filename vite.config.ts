import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@helpers": "/src/helpers",
      "@services": "/src/services",
      "@core": "/src/core",
    },
  },
  plugins: [react()],
})
