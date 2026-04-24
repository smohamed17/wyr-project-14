import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: { // we are trying to request the http of the vite webpage to the local host webpage of the express
      '/wyr': 'http://localhost:1305/' // the question will reload every time you refresh.
    }
  }
})
