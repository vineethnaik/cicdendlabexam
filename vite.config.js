import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages, base must be '/REPOSITORY_NAME/'
// This ensures all assets load from the correct path
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' 
    ? '/cicdendlabexam/'
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
