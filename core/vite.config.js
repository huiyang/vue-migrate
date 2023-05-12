import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ant/vue-migrate/core/dist',
    define: {
    'process.env': {
        NODE_ENV: 'production',
    }
    },
  build: {
    minify: false,
    outDir: 'public',
    lib: {
      entry: path.resolve(__dirname, 'resources/app.js'),
      name: 'Core',
      fileName: (format) => `core.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "resources/app.js"),
      },
    //   external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
  },
  plugins: [vue()]
});