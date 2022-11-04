import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'WhatsElement',
      fileName: 'index'
    }
  }
})
