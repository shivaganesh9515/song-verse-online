import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/song-verse-online/', // use your repo name here
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
// This configuration sets up a Vite project with React support and an alias for the 'src' directory.
// The base path is set to '/song-verse-online/' to ensure correct asset loading when deployed on GitHub Pages.
// The 'path' module is used to resolve the alias to the absolute path of the 'src' directory.
// The 'react' plugin is included to enable React features in the Vite build process.   