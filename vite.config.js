import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/login.js',
                'resources/css/style.css',
                'resources/js/app.js',
                'resources/img/gambar1.png',
                'resources/img/image-removebg-preview(1).png',
                'resources/img/Login & Registration Form.png',
            ],
            refresh: true,
        }),
    ],
});
