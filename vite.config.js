import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig(
    {
      plugins: [react()],
      root: resolve('./static/src'),
      base: '/static/',
      server: {
        host: 'localhost',
        port: 3000,
        open: false,
        watch: {
          usePolling: true,
          disableGlobbing: false,
        },
      },
      resolve: {
        extensions: ['.js', '.json', '.jsx'],
      },
      build: {
        outDir: resolve('./static/dist'),
        assetsDir: '',
        manifest: true,
        emptyOutDir: true,
        target: 'es2015',
        rollupOptions: {
          input: {
            main: resolve('./static/src/js/main.jsx'),
          },
          output: {
            chunkFileNames: undefined,
          },
        },
      },
    })
