import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: 'localhost',
        port: 5173,
        open: true,
        proxy: {
            '/mahasiswa': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    build: {
        outDir: 'public/build',
    },

});
