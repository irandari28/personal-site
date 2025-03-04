// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static', // Ensure static output mode
    build: {
        format: 'directory', // Avoid SPA-like behavior
    }
});
