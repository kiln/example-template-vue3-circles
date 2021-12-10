import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue({ refTransform: true })],

  build: {
    target: 'es6',

    lib: {
      entry: 'src/main.js',
      formats: ['iife'],
      name: 'Template',
      fileName: () => 'template.js',
    },

    outDir: '.',
  }
})
