import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    // 'base' set to './' allows the app to run in a subfolder (e.g. yoursite.com/app) 
    // or the root, ensuring assets load correctly on standard hosting like IONOS.
    base: './', 
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      // Ensure source maps are not generated for production to save space/security
      sourcemap: false,
    },
    define: {
      // Safely inject the API key. We use JSON.stringify to ensure it is treated as a string literal.
      // If the key is missing in the build environment, it defaults to an empty string to prevent build errors.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  };
});