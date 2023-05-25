import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/ai-keyword-extractor/',
  plugins: [react()],
  server: {
    port: 3000,
  }
});
