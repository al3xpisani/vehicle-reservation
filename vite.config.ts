import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
  server: {
    proxy: {
      '/trpc': {
        target: 'http://localhost:4000/api',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/trpc/, '');
        },
      },
    },
  },
});
