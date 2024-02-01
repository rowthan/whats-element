import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      formats: ['es', 'esm', 'cjs', 'umd', 'iife'],
      entry: './src/index.ts',
      name: 'WhatsElementV2',
      fileName: 'whatsElement'
    }
  }
})
