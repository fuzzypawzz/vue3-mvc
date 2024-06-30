import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: 5555,
    watch: {
      usePolling: true
    }
  },
  build: {
    manifest: true,
    emptyOutDir: true,
    
    rollupOptions: {
      input: './src/main.ts',
      output: {   
        dir: './wwwroot/vite-dist',
        
        entryFileNames(chunkInfo) {
            return chunkInfo.isEntry ? 'bundle.[hash].js' : chunkInfo.name
        },
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // We need the template compiler, because we need to also compile vue templates (from Razor) at runtime:
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
