import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: true,
    
    rollupOptions: {
      input: './src/main.ts',
      output: {   
        dir: './wwwroot/vite-dist',
        
        entryFileNames(chunkInfo) {
            return chunkInfo.isEntry ? 'bundle.js' : chunkInfo.name
        },
        
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'bundle.css'
          }
          
          return assetInfo.name as string
        }
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
