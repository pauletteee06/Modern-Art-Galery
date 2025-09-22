import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/Modern-Art-Gallery/',
    build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
        input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'location.html')
        }
    }
    }
})