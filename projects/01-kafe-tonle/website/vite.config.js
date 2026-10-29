// Vite configuration for the Kafé Tonlé concept site.
// Plain ES modules, no framework: index.html is the entry, /src/main.js boots the page.
import { defineConfig } from 'vite';

export default defineConfig({
  // Absolute base so the exact image paths from WEBSITE.md (/images/cafe/*.webp) resolve.
  base: '/',
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Keep the animation vendors in their own long-cached chunk so copy/CSS edits
        // do not invalidate the gsap + lenis download.
        manualChunks(id) {
          if (/node_modules\/(gsap|lenis)\//.test(id)) return 'motion';
        },
      },
    },
  },
  server: { port: 5173, open: false },
});
